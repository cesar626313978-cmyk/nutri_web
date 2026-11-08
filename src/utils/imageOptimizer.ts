/**
 * Image optimization utility for NutriDiversa CMS
 * Automatically resizes and compresses user-uploaded images/logos
 * to ensure crisp display while remaining under Firestore and browser quotas.
 */

export interface OptimizeImageOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  outputFormat?: 'image/png' | 'image/jpeg' | 'image/webp';
}

export async function optimizeImageFile(
  file: File,
  options: OptimizeImageOptions = {}
): Promise<{ dataUrl: string; sizeKb: number; width: number; height: number; originalName: string }> {
  const {
    maxWidth = 1000,
    maxHeight = 1000,
    quality = 0.9,
  } = options;

  return new Promise((resolve, reject) => {
    // If it's an SVG file, read it as text or data URL directly
    if (file.type === 'image/svg+xml') {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        resolve({
          dataUrl,
          sizeKb: Math.round(dataUrl.length / 1024),
          width: 400,
          height: 400,
          originalName: file.name,
        });
      };
      reader.onerror = () => reject(new Error('No se pudo leer el archivo SVG'));
      reader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Error al leer el archivo desde el dispositivo'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('El archivo no es una imagen válida o está dañado'));
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Scale down if larger than maximum bounds
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('El navegador no soporta el procesamiento de imágenes en Canvas'));
          return;
        }

        // Maintain transparency for PNG / WebP
        const isPng = file.type === 'image/png' || file.name.toLowerCase().endsWith('.png');
        
        ctx.clearRect(0, 0, width, height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Prefer PNG for logos to preserve crisp transparency, WebP or JPEG otherwise
        let targetFormat = options.outputFormat;
        if (!targetFormat) {
          targetFormat = isPng ? 'image/png' : 'image/jpeg';
        }

        let dataUrl = canvas.toDataURL(targetFormat, quality);

        // If PNG is still too large (> 400KB), re-encode with slight dimension shrink to ensure safe Firestore storage
        if (dataUrl.length > 400000 && isPng) {
          const smallerCanvas = document.createElement('canvas');
          const scale = 0.75;
          smallerCanvas.width = Math.round(width * scale);
          smallerCanvas.height = Math.round(height * scale);
          const smallCtx = smallerCanvas.getContext('2d');
          if (smallCtx) {
            smallCtx.imageSmoothingEnabled = true;
            smallCtx.imageSmoothingQuality = 'high';
            smallCtx.drawImage(canvas, 0, 0, smallerCanvas.width, smallerCanvas.height);
            dataUrl = smallerCanvas.toDataURL('image/png');
          }
        }

        resolve({
          dataUrl,
          sizeKb: Math.round(dataUrl.length / 1024),
          width,
          height,
          originalName: file.name,
        });
      };

      img.src = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  });
}
