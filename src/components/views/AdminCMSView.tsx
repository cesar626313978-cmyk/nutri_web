import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCMS } from '../../context/CMSContext';
import { useAccessibility } from '../../context/AccessibilityContext';
import { NutriDiversaLogo } from '../NutriDiversaLogo';
import { UserRole, CMSArticle, PartnerResourceItem } from '../../types/cms';
import { optimizeImageFile } from '../../utils/imageOptimizer';
import {
  Palette,
  Type,
  FileText,
  Users,
  Image as ImageIcon,
  Shield,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  Edit3,
  ExternalLink,
  Check,
  AlertCircle,
  Sparkles,
  Lock,
  Unlock,
  Eye,
  LogIn,
  LogOut,
  Upload,
  Link as LinkIcon,
  Crown,
  BookOpen,
  Settings,
  HelpCircle
} from 'lucide-react';

export const AdminCMSView: React.FC = () => {
  const {
    currentUser,
    userProfile,
    signInWithGoogle,
    signOut,
    activeSimulatedRole,
    setSimulatedRole,
    effectiveRole,
    permissions,
  } = useAuth();

  const {
    siteConfig,
    updateSiteConfig,
    resetSiteConfig,
    articles,
    createArticle,
    updateArticle,
    deleteArticle,
    partnerResources,
    createPartnerResource,
    deletePartnerResource,
    mediaFiles,
    uploadMediaFile,
    deleteMediaFile,
    allUsers,
    updateUserRoleAndPerms,
  } = useCMS();

  const { navigateTo } = useAccessibility();

  // Active Tab
  type TabKey = 'identidad' | 'diseno' | 'textos' | 'articulos' | 'socios_cms' | 'usuarios' | 'archivos';
  const [activeTab, setActiveTab] = useState<TabKey>('identidad');

  // Notification status
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Form states for Identity & Logos
  const [logoType, setLogoType] = useState(siteConfig.logoType);
  const [logoUrl, setLogoUrl] = useState(siteConfig.logoUrl || '');
  const [logoUrlStacked, setLogoUrlStacked] = useState(siteConfig.logoUrlStacked || '');
  const [logoTitleFirst, setLogoTitleFirst] = useState(siteConfig.logoTitleFirst);
  const [logoTitleSecond, setLogoTitleSecond] = useState(siteConfig.logoTitleSecond);
  const [logoSubtitle, setLogoSubtitle] = useState(siteConfig.logoSubtitle);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [logoUploadMsg, setLogoUploadMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isDragOverMain, setIsDragOverMain] = useState(false);
  const [isDragOverStacked, setIsDragOverStacked] = useState(false);

  // Synchronize when siteConfig loads or changes in CMSContext
  React.useEffect(() => {
    setLogoType(siteConfig.logoType);
    setLogoUrl(siteConfig.logoUrl || '');
    setLogoUrlStacked(siteConfig.logoUrlStacked || '');
    setLogoTitleFirst(siteConfig.logoTitleFirst);
    setLogoTitleSecond(siteConfig.logoTitleSecond);
    setLogoSubtitle(siteConfig.logoSubtitle);
  }, [siteConfig]);

  // Form states for Design (Colors & Fonts)
  const [primaryColor, setPrimaryColor] = useState(siteConfig.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(siteConfig.secondaryColor);
  const [accentColor, setAccentColor] = useState(siteConfig.accentColor);
  const [fontFamily, setFontFamily] = useState(siteConfig.fontFamily);
  const [headingFont, setHeadingFont] = useState(siteConfig.headingFont);

  // Form states for Web Texts (Hero, About, Contact)
  const [heroTitle, setHeroTitle] = useState(siteConfig.heroTitle);
  const [heroSubtitle, setHeroSubtitle] = useState(siteConfig.heroSubtitle);
  const [heroButtonText, setHeroButtonText] = useState(siteConfig.heroButtonText);
  const [heroButtonLink, setHeroButtonLink] = useState(siteConfig.heroButtonLink);
  const [aboutMission, setAboutMission] = useState(siteConfig.aboutMission);
  const [aboutVision, setAboutVision] = useState(siteConfig.aboutVision);
  const [aboutHistory, setAboutHistory] = useState(siteConfig.aboutHistory);
  const [contactEmail, setContactEmail] = useState(siteConfig.contactEmail);
  const [contactPhone, setContactPhone] = useState(siteConfig.contactPhone);
  const [contactAddress, setContactAddress] = useState(siteConfig.contactAddress);
  const [contactSchedule, setContactSchedule] = useState(siteConfig.contactSchedule);

  // Article creation/edit modal state
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [articleForm, setArticleForm] = useState({
    title: '',
    slug: '',
    category: 'Evidencia Científica',
    excerpt: '',
    content: '',
    easyReadingContent: '',
    coverImageUrl: '',
    visibility: 'public' as 'public' | 'members_only',
    status: 'published' as 'published' | 'draft' | 'archived',
    authorName: 'Comité Editorial NutriDiversa',
    authorRole: 'Nutrición y Salud',
  });

  // Partner Resource creation modal
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [resourceForm, setResourceForm] = useState({
    title: '',
    category: 'Guía Especializada' as PartnerResourceItem['category'],
    description: '',
    fileOrLinkUrl: '',
    accessTier: 'all_members' as 'all_members' | 'board_only',
  });

  // Media upload input
  const [newMediaName, setNewMediaName] = useState('');
  const [newMediaUrl, setNewMediaUrl] = useState('');
  const [newMediaType, setNewMediaType] = useState<'image' | 'document' | 'logo'>('image');

  // Trigger flash message
  const triggerSaved = (msg: string = 'Cambios guardados con éxito') => {
    setSaveStatus(msg);
    setTimeout(() => setSaveStatus(null), 3500);
  };

  // Handlers
  const processLogoFile = async (file: File, variant: 'main' | 'stacked' = 'main') => {
    setUploadingLogo(true);
    setLogoUploadMsg(null);
    try {
      const result = await optimizeImageFile(file, {
        maxWidth: 1200,
        maxHeight: 1200,
        quality: 0.95,
      });

      setLogoType('custom_url');
      if (variant === 'main') {
        setLogoUrl(result.dataUrl);
      } else {
        setLogoUrlStacked(result.dataUrl);
      }

      // Add to media library for backup and reuse
      await uploadMediaFile({
        name: `${variant === 'main' ? 'Logo Horizontal' : 'Logo Apilado'} (${file.name})`,
        url: result.dataUrl,
        type: 'logo',
        size: `${result.sizeKb} KB`,
        uploadedBy: currentUser?.uid || 'admin',
      });

      // Instantly save to site configuration
      await updateSiteConfig(
        {
          logoType: 'custom_url',
          ...(variant === 'main' ? { logoUrl: result.dataUrl } : { logoUrlStacked: result.dataUrl }),
          logoTitleFirst,
          logoTitleSecond,
          logoSubtitle,
        },
        currentUser?.uid || 'simulated-admin'
      );

      setLogoUploadMsg({
        text: `¡${file.name} procesado y aplicado con éxito (${result.sizeKb} KB)!`,
        type: 'success',
      });
      triggerSaved(
        currentUser
          ? '¡Logotipo guardado en la base de datos oficial!'
          : '¡Logotipo aplicado en la web! (Inicia sesión con Google para sincronización en la nube)'
      );
    } catch (err) {
      console.error('Error al procesar el archivo del logotipo:', err);
      setLogoUploadMsg({
        text: 'Error al procesar el archivo: ' + (err instanceof Error ? err.message : String(err)),
        type: 'error',
      });
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleSaveIdentity = async () => {
    try {
      await updateSiteConfig(
        {
          logoType,
          logoUrl,
          logoUrlStacked,
          logoTitleFirst,
          logoTitleSecond,
          logoSubtitle,
        },
        currentUser?.uid || 'simulated-admin'
      );
      triggerSaved(
        currentUser
          ? '¡Identidad y logotipos guardados en la base de datos de Google Cloud!'
          : '¡Identidad y logotipos actualizados en vivo en la web!'
      );
    } catch (e) {
      alert('Aviso al guardar identidad: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  const handleSaveDesign = async () => {
    try {
      await updateSiteConfig(
        {
          primaryColor,
          secondaryColor,
          accentColor,
          fontFamily,
          headingFont,
        },
        currentUser?.uid || 'simulated-admin'
      );
      triggerSaved('Colores y Tipografía guardados');
    } catch (e) {
      alert('Error guardando diseño: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  const handleSaveTexts = async () => {
    try {
      await updateSiteConfig(
        {
          heroTitle,
          heroSubtitle,
          heroButtonText,
          heroButtonLink,
          aboutMission,
          aboutVision,
          aboutHistory,
          contactEmail,
          contactPhone,
          contactAddress,
          contactSchedule,
        },
        currentUser?.uid || 'simulated-admin'
      );
      triggerSaved('Textos y contenidos actualizados en toda la web');
    } catch (e) {
      alert('Error guardando contenidos: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  const handleResetDesign = async () => {
    if (window.confirm('¿Deseas restablecer todos los colores y tipografías a los valores oficiales de NutriDiversa?')) {
      await resetSiteConfig();
      setPrimaryColor('#165B2E');
      setSecondaryColor('#EB5A18');
      setAccentColor('#F59E0B');
      setFontFamily('Atkinson Hyperlegible, system-ui, sans-serif');
      setHeadingFont('Playfair Display, serif');
      triggerSaved('Configuración restablecida a valores por defecto');
    }
  };

  // Article handlers
  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleForm.title || !articleForm.content) {
      alert('El título y contenido son obligatorios');
      return;
    }

    const slug = articleForm.slug || articleForm.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    try {
      if (editingArticleId) {
        await updateArticle(editingArticleId, {
          ...articleForm,
          slug,
        });
        triggerSaved('Artículo actualizado con éxito');
      } else {
        await createArticle({
          ...articleForm,
          slug,
          authorId: currentUser?.uid || 'admin-author',
        });
        triggerSaved('Nuevo artículo publicado con éxito');
      }
      setIsArticleModalOpen(false);
      setEditingArticleId(null);
    } catch (e) {
      alert('Error con el artículo: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  const handleOpenEditArticle = (art: CMSArticle) => {
    setEditingArticleId(art.id);
    setArticleForm({
      title: art.title,
      slug: art.slug,
      category: art.category,
      excerpt: art.excerpt,
      content: art.content,
      easyReadingContent: art.easyReadingContent || '',
      coverImageUrl: art.coverImageUrl || '',
      visibility: art.visibility,
      status: art.status,
      authorName: art.authorName,
      authorRole: art.authorRole,
    });
    setIsArticleModalOpen(true);
  };

  // File to base64 helper with automatic optimization
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const result = await optimizeImageFile(file, {
        maxWidth: 1600,
        maxHeight: 1600,
        quality: 0.9,
      });
      setNewMediaUrl(result.dataUrl);
      setNewMediaName(file.name);
      triggerSaved(`Archivo "${file.name}" cargado y optimizado (${result.sizeKb} KB)`);
    } catch (err) {
      alert('Error procesando imagen: ' + (err instanceof Error ? err.message : String(err)));
    }
  };

  const handleAddMedia = async () => {
    if (!newMediaName || !newMediaUrl) {
      alert('Debes indicar un nombre y una URL o archivo para el recurso');
      return;
    }

    try {
      await uploadMediaFile({
        name: newMediaName,
        url: newMediaUrl,
        type: newMediaType,
        size: (newMediaUrl.length / 1024).toFixed(1) + ' KB',
        uploadedBy: currentUser?.uid || 'admin',
      });
      setNewMediaName('');
      setNewMediaUrl('');
      triggerSaved('Archivo añadido a la biblioteca de medios');
    } catch (e) {
      alert('Error subiendo archivo: ' + (e instanceof Error ? e.message : String(e)));
    }
  };

  // Role names in Spanish
  const ROLE_LABELS: Record<UserRole, { name: string; desc: string; badgeClass: string }> = {
    admin: {
      name: 'Superadministrador',
      desc: 'Control total de la web: colores, tipografías, textos, logos, usuarios, roles, artículos y archivos.',
      badgeClass: 'bg-purple-100 text-purple-900 border-purple-300',
    },
    presidente: {
      name: 'Presidencia (Junta)',
      desc: 'Supervisión ejecutiva, edición de contenidos web, publicación de artículos y gestión de recursos.',
      badgeClass: 'bg-blue-100 text-blue-900 border-blue-300',
    },
    secretario: {
      name: 'Secretaría (Junta)',
      desc: 'Gestión de actas, registro de socios, publicación de comunicados y artículos oficiales.',
      badgeClass: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    },
    vocal: {
      name: 'Vocalía (Junta)',
      desc: 'Redacción y gestión de artículos, guías de nutrición y contenidos en el blog.',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    },
    socio: {
      name: 'Socio / Miembro Oficial',
      desc: 'Acceso completo al área privada de socios, guías clínicas exclusivas, descuentos y asambleas.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
    },
    usuario: {
      name: 'Usuario Estándar',
      desc: 'Lector registrado con acceso a la información pública y solicitud de membresía.',
      badgeClass: 'bg-neutral-100 text-neutral-800 border-neutral-300',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn">
      {/* 1. Header Banner of the CMS */}
      <div className="bg-white border-2 border-emerald-800/20 rounded-2xl p-6 sm:p-8 shadow-sm card-surface">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-neutral-200">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-800 text-white rounded-md text-xs font-bold shadow-2xs">
                <Shield className="w-3.5 h-3.5" />
                <span>Panel de Administración CMS</span>
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold border ${ROLE_LABELS[effectiveRole].badgeClass}`}>
                <Crown className="w-3.5 h-3.5" />
                <span>Rol Activo: {ROLE_LABELS[effectiveRole].name}</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Gestor de Contenidos & Portal de la Junta Directiva
            </h1>
            <p className="text-sm text-neutral-600 max-w-3xl">
              Controla y personaliza en tiempo real los logotipos oficiales, la paleta cromática, tipografías,
              textos de cada sección, artículos del blog, recursos de socios y asignación de roles.
            </p>
          </div>

          {/* User Sign In / Profile Box */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {currentUser ? (
              <div className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 rounded-xl p-2.5 px-4 w-full sm:w-auto">
                {currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="" className="w-9 h-9 rounded-full border border-neutral-300" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                    {currentUser.email?.[0].toUpperCase()}
                  </div>
                )}
                <div className="text-left text-xs">
                  <div className="font-bold text-neutral-900 truncate max-w-[150px]">
                    {currentUser.displayName || currentUser.email}
                  </div>
                  <div className="text-emerald-800 font-semibold">{currentUser.email}</div>
                </div>
                <button
                  onClick={signOut}
                  className="ml-2 p-1.5 text-neutral-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                  title="Cerrar sesión"
                  aria-label="Cerrar sesión"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-800 text-white font-bold text-sm rounded-lg hover:bg-emerald-900 transition-colors shadow-xs w-full sm:w-auto justify-center"
              >
                <LogIn className="w-4 h-4" />
                <span>Iniciar Sesión con Google</span>
              </button>
            )}

            <button
              onClick={() => navigateTo('/')}
              className="px-4 py-2 text-sm font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors w-full sm:w-auto text-center"
            >
              Ver Web Pública
            </button>
          </div>
        </div>

        {/* Quick Role Tester Bar: Let the user easily test Admin, Presidente, Secretario, Vocal, Socio, Usuario */}
        <div className="mt-5 pt-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>Simulador Rápido de Roles y Permisos (Ideal para Pruebas):</span>
            </div>
            <p className="text-xs text-neutral-600">
              Prueba al instante cómo ve la plataforma cada cargo de la asociación o un socio:
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {(['admin', 'presidente', 'secretario', 'vocal', 'socio', 'usuario'] as UserRole[]).map((role) => {
              const isSelected = effectiveRole === role;
              return (
                <button
                  key={role}
                  onClick={() => setSimulatedRole(isSelected && !activeSimulatedRole ? null : role)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all border ${
                    isSelected
                      ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs scale-105'
                      : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100'
                  }`}
                >
                  {role === 'admin' && '👑 Superadmin'}
                  {role === 'presidente' && '🏛️ Presidente'}
                  {role === 'secretario' && '📜 Secretario'}
                  {role === 'vocal' && '✍️ Vocal'}
                  {role === 'socio' && '⭐ Socio'}
                  {role === 'usuario' && '👤 Usuario'}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status notification banner */}
        {saveStatus && (
          <div className="mt-4 p-3.5 bg-emerald-100 border border-emerald-300 text-emerald-900 text-sm font-bold rounded-xl flex items-center gap-2 animate-fadeIn">
            <Check className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>{saveStatus}</span>
          </div>
        )}
      </div>

      {/* 2. Navigation Tabs */}
      <div className="flex overflow-x-auto gap-2 border-b border-neutral-200 pb-2 scrollbar-none">
        {[
          { key: 'identidad', label: '1. Identidad & Logos', icon: ImageIcon },
          { key: 'diseno', label: '2. Colores & Tipografía', icon: Palette },
          { key: 'textos', label: '3. Textos Web & Hero', icon: Type },
          { key: 'articulos', label: '4. Artículos & Noticias', icon: FileText },
          { key: 'socios_cms', label: '5. Ventajas Socios', icon: BookOpen },
          { key: 'usuarios', label: '6. Usuarios & Roles', icon: Users },
          { key: 'archivos', label: '7. Biblioteca de Medios', icon: Upload },
        ].map(({ key, label, icon: Icon }) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key as TabKey)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl whitespace-nowrap transition-colors min-touch-target ${
                isActive
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* 3. TAB CONTENT */}

      {/* TAB 1: IDENTIDAD & LOGOTIPOS */}
      {activeTab === 'identidad' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-emerald-700" />
                  <span>Logotipos Oficiales de NutriDiversa</span>
                </h2>
                {logoType === 'custom_url' && (
                  <button
                    type="button"
                    onClick={() => {
                      setLogoType('vector');
                      setLogoUrl('');
                      setLogoUrlStacked('');
                      updateSiteConfig({ logoType: 'vector' }, currentUser?.uid || 'simulated-admin');
                      triggerSaved('Restablecido el logotipo vectorial oficial');
                    }}
                    className="text-xs font-semibold text-neutral-500 hover:text-emerald-700 flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restablecer Vector Oficial</span>
                  </button>
                )}
              </div>
              <p className="text-sm text-neutral-600 mt-1">
                Sube directamente los 2 archivos originales de tu logotipo (el horizontal para el menú y el apilado para portadas).
                El sistema optimiza automáticamente las imágenes sin límite de tamaño para que se vean nítidas en cualquier pantalla.
              </p>
            </div>

            {/* Notification message from upload */}
            {logoUploadMsg && (
              <div
                className={`p-3.5 rounded-xl text-xs font-bold flex items-center gap-2 animate-fadeIn ${
                  logoUploadMsg.type === 'success'
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                    : 'bg-red-50 text-red-900 border border-red-300'
                }`}
              >
                {logoUploadMsg.type === 'success' ? (
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                )}
                <span>{logoUploadMsg.text}</span>
              </div>
            )}

            {/* Logo 1: Horizontal / Navbar */}
            <div className="space-y-3 p-4 sm:p-5 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <label className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                    <span>1. Logotipo Horizontal Oficial</span>
                    <span className="text-[11px] font-normal px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                      Cabecera / Menú Superior
                    </span>
                  </label>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Se mostrará en la barra de navegación superior fija en todas las páginas.
                  </p>
                </div>
                {logoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setLogoUrl('');
                      updateSiteConfig({ logoUrl: '' }, currentUser?.uid || 'simulated-admin');
                      triggerSaved('Logotipo horizontal eliminado');
                    }}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold"
                  >
                    Quitar
                  </button>
                )}
              </div>

              {/* Upload Drop Zone for Main Logo */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragOverMain(true);
                }}
                onDragLeave={() => setIsDragOverMain(false)}
                onDrop={async (e) => {
                  e.preventDefault();
                  setIsDragOverMain(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) await processLogoFile(file, 'main');
                }}
                className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all ${
                  isDragOverMain
                    ? 'border-emerald-600 bg-emerald-100/60 scale-[1.01]'
                    : logoUrl
                    ? 'border-emerald-300 bg-emerald-50/30'
                    : 'border-neutral-300 bg-white hover:border-emerald-500 hover:bg-neutral-50/50'
                }`}
              >
                {logoUrl ? (
                  <div className="space-y-3">
                    <div className="h-16 flex items-center justify-center p-2 bg-white rounded-lg border border-neutral-200">
                      <img src={logoUrl} alt="Logo horizontal actual" className="h-full object-contain" />
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <span className="text-xs text-emerald-800 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Logotipo activo
                      </span>
                      <label className="px-3 py-1 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-bold rounded-lg border border-neutral-300 cursor-pointer shadow-2xs">
                        Cambiar archivo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) await processLogoFile(file, 'main');
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 py-2">
                    <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-neutral-800">
                      Arrastra aquí el archivo del logo horizontal o{' '}
                      <label className="text-emerald-800 underline cursor-pointer hover:text-emerald-900">
                        selecciona de tu equipo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) await processLogoFile(file, 'main');
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <p className="text-[11px] text-neutral-500">
                      Compatible con PNG con fondo transparente, JPG, SVG o WebP. Sin restricciones de peso.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Logo 2: Stacked / Emblem */}
            <div className="space-y-3 p-4 sm:p-5 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <label className="text-sm font-bold text-neutral-900 flex items-center gap-1.5">
                    <span>2. Logotipo Apilado / Vertical Oficial</span>
                    <span className="text-[11px] font-normal px-2 py-0.5 bg-orange-100 text-orange-800 rounded-full">
                      Portadas, Móvil y Pie de Página
                    </span>
                  </label>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Versión vertical o cuadrada con la figura centrada para pantallas móviles y tarjetas.
                  </p>
                </div>
                {logoUrlStacked && (
                  <button
                    type="button"
                    onClick={() => {
                      setLogoUrlStacked('');
                      updateSiteConfig({ logoUrlStacked: '' }, currentUser?.uid || 'simulated-admin');
                      triggerSaved('Logotipo apilado eliminado');
                    }}
                    className="text-xs text-red-600 hover:text-red-700 font-semibold"
                  >
                    Quitar
                  </button>
                )}
              </div>

              {/* Upload Drop Zone for Stacked Logo */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragOverStacked(true);
                }}
                onDragLeave={() => setIsDragOverStacked(false)}
                onDrop={async (e) => {
                  e.preventDefault();
                  setIsDragOverStacked(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) await processLogoFile(file, 'stacked');
                }}
                className={`relative border-2 border-dashed rounded-xl p-5 text-center transition-all ${
                  isDragOverStacked
                    ? 'border-orange-600 bg-orange-100/60 scale-[1.01]'
                    : logoUrlStacked
                    ? 'border-orange-300 bg-orange-50/30'
                    : 'border-neutral-300 bg-white hover:border-orange-500 hover:bg-neutral-50/50'
                }`}
              >
                {logoUrlStacked ? (
                  <div className="space-y-3">
                    <div className="h-20 flex items-center justify-center p-2 bg-white rounded-lg border border-neutral-200">
                      <img src={logoUrlStacked} alt="Logo apilado actual" className="h-full object-contain" />
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <span className="text-xs text-orange-800 font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Logotipo apilado activo
                      </span>
                      <label className="px-3 py-1 bg-white hover:bg-neutral-100 text-neutral-800 text-xs font-bold rounded-lg border border-neutral-300 cursor-pointer shadow-2xs">
                        Cambiar archivo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) await processLogoFile(file, 'stacked');
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 py-2">
                    <div className="w-10 h-10 mx-auto rounded-full bg-orange-100 text-orange-800 flex items-center justify-center">
                      <Upload className="w-5 h-5" />
                    </div>
                    <div className="text-xs font-bold text-neutral-800">
                      Arrastra aquí el archivo del logo apilado o{' '}
                      <label className="text-orange-800 underline cursor-pointer hover:text-orange-900">
                        selecciona de tu equipo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) await processLogoFile(file, 'stacked');
                          }}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <p className="text-[11px] text-neutral-500">
                      Ideal para imágenes cuadradas o el emblema vertical completo original.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Alternative: Link via External URL */}
            <details className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs group">
              <summary className="font-bold text-neutral-800 cursor-pointer select-none flex items-center justify-between">
                <span>¿Prefieres enlazar una URL externa o de Google Drive?</span>
                <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-3 space-y-3 pt-3 border-t border-neutral-200">
                <div>
                  <label className="font-semibold text-neutral-700 block mb-1">
                    URL directa del logo horizontal:
                  </label>
                  <input
                    type="url"
                    value={logoUrl}
                    onChange={(e) => {
                      setLogoUrl(e.target.value);
                      if (e.target.value) setLogoType('custom_url');
                    }}
                    placeholder="https://ejemplo.com/logo_oficial.png"
                    className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-semibold text-neutral-700 block mb-1">
                    URL directa del logo apilado / vertical:
                  </label>
                  <input
                    type="url"
                    value={logoUrlStacked}
                    onChange={(e) => {
                      setLogoUrlStacked(e.target.value);
                      if (e.target.value) setLogoType('custom_url');
                    }}
                    placeholder="https://ejemplo.com/logo_vertical.png"
                    className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-lg"
                  />
                </div>
              </div>
            </details>

            {/* Logo Typography texts */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <h3 className="text-sm font-bold text-neutral-800">Textos Corporativos del Logotipo:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700">Primera Palabra (Verde):</label>
                  <input
                    type="text"
                    value={logoTitleFirst}
                    onChange={(e) => setLogoTitleFirst(e.target.value)}
                    className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-neutral-700">Segunda Palabra (Naranja):</label>
                  <input
                    type="text"
                    value={logoTitleSecond}
                    onChange={(e) => setLogoTitleSecond(e.target.value)}
                    className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-700"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-700">Subtítulo Oficial:</label>
                <input
                  type="text"
                  value={logoSubtitle}
                  onChange={(e) => setLogoSubtitle(e.target.value)}
                  className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-700"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={uploadingLogo}
                onClick={handleSaveIdentity}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-800 text-white font-bold text-sm rounded-lg hover:bg-emerald-900 transition-colors shadow-xs disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{uploadingLogo ? 'Procesando...' : 'Guardar y Aplicar en Toda la Web'}</span>
              </button>

              {!currentUser && (
                <span className="text-xs text-neutral-500 italic">
                  💡 Modo local activo. Pulsa "Iniciar Sesión con Google" arriba para sincronización global.
                </span>
              )}
            </div>
          </div>

          {/* Real-time Logo Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 space-y-6">
              <h3 className="text-base font-bold text-neutral-900">Vista Previa en Vivo</h3>

              {/* Horizontal Preview */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Variante 1: Logotipo Horizontal (Cabeceras)
                </span>
                <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center min-h-[100px]">
                  <NutriDiversaLogo variant="horizontal" size="md" />
                </div>
              </div>

              {/* Stacked Preview */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Variante 2: Logotipo Apilado / Vertical (Portadas y Móvil)
                </span>
                <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center min-h-[140px]">
                  <NutriDiversaLogo variant="stacked" size="md" />
                </div>
              </div>

              {/* Contrast background test */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Vista sobre fondo verde institucional
                </span>
                <div className="p-6 bg-emerald-900 rounded-xl flex items-center justify-center min-h-[100px]">
                  <div className="bg-white/95 p-4 rounded-lg shadow-sm">
                    <NutriDiversaLogo variant="horizontal" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: DISEÑO, COLORES & TIPOGRAFÍA */}
      {activeTab === 'diseno' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-emerald-700" />
                  <span>Paleta Cromática & Estilo Visual</span>
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  Modifica los colores corporativos y las familias tipográficas. Se sincronizan en vivo.
                </p>
              </div>
              <button
                type="button"
                onClick={handleResetDesign}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                title="Restablecer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>
            </div>

            {/* Colors picker */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-neutral-800">Colores Principales:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Primary Color */}
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <label className="text-xs font-bold text-neutral-700 block">Color Primario (Verde):</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-10 h-10 rounded cursor-pointer border border-neutral-300"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-24 px-2 py-1 text-xs font-mono border rounded"
                    />
                  </div>
                  <span className="text-[11px] text-neutral-500 block">Botones, encabezados y títulos</span>
                </div>

                {/* Secondary Color */}
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <label className="text-xs font-bold text-neutral-700 block">Color Secundario (Naranja):</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-10 h-10 rounded cursor-pointer border border-neutral-300"
                    />
                    <input
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-24 px-2 py-1 text-xs font-mono border rounded"
                    />
                  </div>
                  <span className="text-[11px] text-neutral-500 block">Detalles vivos y distintivos</span>
                </div>

                {/* Accent Color */}
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <label className="text-xs font-bold text-neutral-700 block">Color de Acento (Ámbar):</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-10 h-10 rounded cursor-pointer border border-neutral-300"
                    />
                    <input
                      type="text"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-24 px-2 py-1 text-xs font-mono border rounded"
                    />
                  </div>
                  <span className="text-[11px] text-neutral-500 block">Llamadas a la acción y avisos</span>
                </div>
              </div>
            </div>

            {/* Typography selectors */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <h3 className="text-sm font-bold text-neutral-800">Tipografías del Sitio Web:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700">Tipografía de Titulares:</label>
                  <select
                    value={headingFont}
                    onChange={(e) => setHeadingFont(e.target.value)}
                    className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="'Playfair Display', Georgia, serif">Playfair Display (Oficial / Clásica)</option>
                    <option value="'Montserrat', system-ui, sans-serif">Montserrat (Moderna Geométrica)</option>
                    <option value="'Inter', system-ui, sans-serif">Inter (Clara & Neutra)</option>
                    <option value="'Atkinson Hyperlegible', sans-serif">Atkinson Hyperlegible (Alta Accesibilidad)</option>
                    <option value="'Merriweather', serif">Merriweather (Editorial Cálida)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700">Tipografía de Textos Generales:</label>
                  <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                    className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="'Atkinson Hyperlegible', system-ui, sans-serif">Atkinson Hyperlegible (Diseñada para legibilidad)</option>
                    <option value="'Inter', system-ui, sans-serif">Inter (Universal)</option>
                    <option value="system-ui, -apple-system, sans-serif">Sistema Nativo</option>
                    <option value="'Roboto', sans-serif">Roboto</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={handleSaveDesign}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 text-white font-bold text-sm rounded-lg hover:bg-emerald-900 transition-colors shadow-xs"
              >
                <Save className="w-4 h-4" />
                <span>Aplicar y Guardar Diseño</span>
              </button>
            </div>
          </div>

          {/* Design Live Preview card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 space-y-6">
              <h3 className="text-base font-bold text-neutral-900">Muestra de Componentes en Vivo</h3>

              <div className="p-6 rounded-xl border border-neutral-200 space-y-4 bg-white shadow-xs">
                <h4
                  className="text-2xl font-bold"
                  style={{ color: primaryColor, fontFamily: headingFont }}
                >
                  Ejemplo de Título de Sección
                </h4>
                <p
                  className="text-sm text-neutral-700 leading-relaxed"
                  style={{ fontFamily }}
                >
                  Este texto muestra cómo se visualizarán los artículos, memorias y explicaciones
                  en toda la web con la tipografía y colores seleccionados.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    className="px-4 py-2 text-xs font-bold text-white rounded-md transition-opacity"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Botón Primario
                  </button>
                  <button
                    className="px-4 py-2 text-xs font-bold text-white rounded-md transition-opacity"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    Botón Secundario
                  </button>
                  <button
                    className="px-4 py-2 text-xs font-bold text-neutral-900 rounded-md transition-opacity"
                    style={{ backgroundColor: accentColor }}
                  >
                    Botón de Acento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TEXTOS WEB & SECCIÓN HERO */}
      {activeTab === 'textos' && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
              <Type className="w-5 h-5 text-emerald-700" />
              <span>Gestión de Textos y Contenidos de la Web</span>
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Edita los titulares de portada, la descripción institucional y los datos de contacto oficiales.
            </p>
          </div>

          {/* Hero Section Texts */}
          <div className="space-y-4 pt-2">
            <h3 className="text-base font-bold text-emerald-900 border-b border-emerald-100 pb-2">
              1. Portada Principal (Sección Hero)
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-neutral-700">Titular Principal de Portada:</label>
                <input
                  type="text"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  className="mt-1 w-full px-3.5 py-2.5 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700">Subtítulo Explicativo:</label>
                <textarea
                  rows={3}
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  className="mt-1 w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-emerald-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-neutral-700">Texto del Botón de Acción:</label>
                  <input
                    type="text"
                    value={heroButtonText}
                    onChange={(e) => setHeroButtonText(e.target.value)}
                    className="mt-1 w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-700">Enlace de Destino:</label>
                  <input
                    type="text"
                    value={heroButtonLink}
                    onChange={(e) => setHeroButtonLink(e.target.value)}
                    className="mt-1 w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-4 pt-4 border-t border-neutral-200">
            <h3 className="text-base font-bold text-emerald-900 border-b border-emerald-100 pb-2">
              2. Textos Institucionales (Sobre Nosotros)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-bold text-neutral-700">Misión de la Asociación:</label>
                <textarea
                  rows={4}
                  value={aboutMission}
                  onChange={(e) => setAboutMission(e.target.value)}
                  className="mt-1 w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-700">Visión de Futuro:</label>
                <textarea
                  rows={4}
                  value={aboutVision}
                  onChange={(e) => setAboutVision(e.target.value)}
                  className="mt-1 w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-neutral-700">Historia y Origen:</label>
              <textarea
                rows={3}
                value={aboutHistory}
                onChange={(e) => setAboutHistory(e.target.value)}
                className="mt-1 w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg"
              />
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 pt-4 border-t border-neutral-200">
            <h3 className="text-base font-bold text-emerald-900 border-b border-emerald-100 pb-2">
              3. Datos Oficiales de Contacto
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-bold text-neutral-700">Email Oficial:</label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-700">Sitio Web Oficial:</label>
                <input
                  type="text"
                  readOnly
                  value="www.nutridiversa.org"
                  className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg bg-neutral-100 text-neutral-600"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-700">Sede Social:</label>
                <input
                  type="text"
                  value={contactAddress}
                  onChange={(e) => setContactAddress(e.target.value)}
                  className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-neutral-700">Horarios de Atención:</label>
                <input
                  type="text"
                  value={contactSchedule}
                  onChange={(e) => setContactSchedule(e.target.value)}
                  className="mt-1 w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={handleSaveTexts}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-800 text-white font-bold text-sm rounded-lg hover:bg-emerald-900 transition-colors shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Guardar Todos los Textos Web</span>
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: ARTÍCULOS & NOTICIAS */}
      {activeTab === 'articulos' && (
        <div className="space-y-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-700" />
                <span>Gestor Editorial de Artículos y Noticias</span>
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Crea publicaciones, define si son públicas o exclusivas para socios y añade versiones en Lectura Fácil.
              </p>
            </div>

            {permissions.canPublishArticles ? (
              <button
                onClick={() => {
                  setEditingArticleId(null);
                  setArticleForm({
                    title: '',
                    slug: '',
                    category: 'Evidencia Científica',
                    excerpt: '',
                    content: '',
                    easyReadingContent: '',
                    coverImageUrl: '',
                    visibility: 'public',
                    status: 'published',
                    authorName: userProfile?.displayName || 'Comité Editorial',
                    authorRole: 'Junta Directiva NutriDiversa',
                  });
                  setIsArticleModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-800 text-white font-bold text-sm rounded-lg hover:bg-emerald-900 transition-colors shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Nuevo Artículo</span>
              </button>
            ) : (
              <div className="text-xs text-amber-800 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200 font-semibold">
                Solo miembros de la Junta Directiva o redactores autorizados pueden crear artículos.
              </div>
            )}
          </div>

          {/* Articles list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((art) => (
              <div
                key={art.id}
                className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-emerald-700 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-900 rounded-md text-[11px] font-bold border border-emerald-200">
                      {art.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        art.visibility === 'members_only'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {art.visibility === 'members_only' ? '⭐ Solo Socios' : '🌐 Público'}
                    </span>
                  </div>

                  <h3 className="font-bold text-neutral-900 line-clamp-2 text-base">
                    {art.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3">
                    {art.excerpt || art.content.slice(0, 120)}...
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Por {art.authorName}</span>
                  {permissions.canPublishArticles && (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleOpenEditArticle(art)}
                        className="p-1.5 hover:text-emerald-800 hover:bg-emerald-50 rounded"
                        title="Editar"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={async () => {
                          if (window.confirm('¿Seguro que deseas eliminar este artículo?')) {
                            await deleteArticle(art.id);
                            triggerSaved('Artículo eliminado');
                          }
                        }}
                        className="p-1.5 hover:text-red-700 hover:bg-red-50 rounded"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Modal for creating / editing articles */}
          {isArticleModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between pb-4 border-b">
                  <h3 className="text-xl font-bold text-neutral-900">
                    {editingArticleId ? 'Editar Artículo' : 'Redactar Nuevo Artículo'}
                  </h3>
                  <button
                    onClick={() => setIsArticleModalOpen(false)}
                    className="text-neutral-500 hover:text-neutral-800 font-bold"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleSaveArticle} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-700">Título del Artículo:</label>
                    <input
                      type="text"
                      required
                      value={articleForm.title}
                      onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                      className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-700 text-sm"
                      placeholder="Ej. Avances en disfagia y nutrición adaptada..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-neutral-700">Categoría:</label>
                      <select
                        value={articleForm.category}
                        onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value })}
                        className="mt-1 w-full px-3 py-2 border rounded-lg text-sm"
                      >
                        <option value="Evidencia Científica">Evidencia Científica</option>
                        <option value="Autonomía y Familias">Autonomía y Familias</option>
                        <option value="Testimonios">Testimonios</option>
                        <option value="Salud y Discapacidad">Salud y Discapacidad</option>
                        <option value="Eventos y Asambleas">Eventos y Asambleas</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-neutral-700">Visibilidad:</label>
                      <select
                        value={articleForm.visibility}
                        onChange={(e) => setArticleForm({ ...articleForm, visibility: e.target.value as 'public' | 'members_only' })}
                        className="mt-1 w-full px-3 py-2 border rounded-lg text-sm font-semibold text-emerald-900"
                      >
                        <option value="public">Público (Todo el mundo)</option>
                        <option value="members_only">⭐ Exclusivo para Socios (Área Privada)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-700">Resumen / Entradilla:</label>
                    <textarea
                      rows={2}
                      value={articleForm.excerpt}
                      onChange={(e) => setArticleForm({ ...articleForm, excerpt: e.target.value })}
                      className="mt-1 w-full px-3 py-2 border rounded-lg text-sm"
                      placeholder="Breve resumen que aparece en las tarjetas..."
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-700">Contenido Completo (Estándar):</label>
                    <textarea
                      rows={6}
                      required
                      value={articleForm.content}
                      onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                      className="mt-1 w-full px-3 py-2 border rounded-lg text-sm"
                      placeholder="Escribe el artículo..."
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                      <span>Versión en Lectura Fácil (Accesibilidad Cognitiva):</span>
                    </label>
                    <textarea
                      rows={3}
                      value={articleForm.easyReadingContent}
                      onChange={(e) => setArticleForm({ ...articleForm, easyReadingContent: e.target.value })}
                      className="mt-1 w-full px-3 py-2 border border-emerald-200 bg-emerald-50/40 rounded-lg text-sm"
                      placeholder="Frases cortas, palabras sencillas y conceptos directos..."
                    />
                  </div>

                  <div className="pt-4 flex justify-end gap-3 border-t">
                    <button
                      type="button"
                      onClick={() => setIsArticleModalOpen(false)}
                      className="px-4 py-2 text-sm font-semibold text-neutral-700 bg-neutral-100 rounded-lg"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-xs"
                    >
                      Guardar y Publicar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 5: VENTAJAS Y RECURSOS DE SOCIOS */}
      {activeTab === 'socios_cms' && (
        <div className="space-y-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-emerald-700" />
                <span>Gestión del Catálogo de Ventajas para Socios</span>
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Añade convenios de descuento, protocolos clínicos en PDF, actas y seminarios reservados para socios.
              </p>
            </div>

            <button
              onClick={() => {
                setResourceForm({
                  title: '',
                  category: 'Guía Especializada',
                  description: '',
                  fileOrLinkUrl: '',
                  accessTier: 'all_members',
                });
                setIsResourceModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-800 text-white font-bold text-sm rounded-lg hover:bg-emerald-900 transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Añadir Ventaja o Recurso</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerResources.map((res) => (
              <div
                key={res.id}
                className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-900 rounded-md text-xs font-bold border border-amber-200">
                      {res.category}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-500">
                      {res.accessTier === 'board_only' ? 'Solo Junta Directiva' : 'Todos los Socios'}
                    </span>
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base">{res.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{res.description}</p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 truncate max-w-[200px]">{res.fileOrLinkUrl}</span>
                  <button
                    onClick={async () => {
                      if (window.confirm('¿Eliminar recurso para socios?')) {
                        await deletePartnerResource(res.id);
                        triggerSaved('Recurso eliminado');
                      }
                    }}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                    title="Eliminar"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Partner Resource */}
          {isResourceModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4">
                <h3 className="text-lg font-bold text-neutral-900">Añadir Recurso Exclusivo de Socios</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-neutral-700">Título del Beneficio / Guía:</label>
                    <input
                      type="text"
                      value={resourceForm.title}
                      onChange={(e) => setResourceForm({ ...resourceForm, title: e.target.value })}
                      className="mt-1 w-full px-3 py-2 border rounded-lg text-sm"
                      placeholder="Ej. 25% Descuento en ortopedia..."
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-700">Categoría:</label>
                    <select
                      value={resourceForm.category}
                      onChange={(e) => setResourceForm({ ...resourceForm, category: e.target.value as any })}
                      className="mt-1 w-full px-3 py-2 border rounded-lg text-sm"
                    >
                      <option value="Guía Especializada">Guía Especializada</option>
                      <option value="Descuento o Convenio">Descuento o Convenio</option>
                      <option value="Documento Oficial">Documento Oficial</option>
                      <option value="Webinar o Grabación">Webinar o Grabación</option>
                      <option value="Protocolo Clínico">Protocolo Clínico</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-700">Descripción Detallada:</label>
                    <textarea
                      rows={3}
                      value={resourceForm.description}
                      onChange={(e) => setResourceForm({ ...resourceForm, description: e.target.value })}
                      className="mt-1 w-full px-3 py-2 border rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-neutral-700">Enlace de Descarga o Cupón:</label>
                    <input
                      type="text"
                      value={resourceForm.fileOrLinkUrl}
                      onChange={(e) => setResourceForm({ ...resourceForm, fileOrLinkUrl: e.target.value })}
                      className="mt-1 w-full px-3 py-2 border rounded-lg text-sm"
                      placeholder="https://... o código CUPON25"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-2 border-t">
                  <button
                    onClick={() => setIsResourceModalOpen(false)}
                    className="px-4 py-2 text-sm bg-neutral-100 rounded-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={async () => {
                      if (!resourceForm.title) return alert('Indica un título');
                      await createPartnerResource({
                        ...resourceForm,
                        createdBy: currentUser?.uid || 'admin',
                      });
                      setIsResourceModalOpen(false);
                      triggerSaved('Beneficio para socios publicado');
                    }}
                    className="px-5 py-2 text-sm font-bold bg-emerald-800 text-white rounded-lg"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 6: USUARIOS & ROLES (RBAC) */}
      {activeTab === 'usuarios' && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-700" />
                <span>Gestión de Usuarios, Junta Directiva y Socios (RBAC)</span>
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Asigna roles estatutarios y permisos para que cada miembro pueda acceder o editar la web según sus funciones.
              </p>
            </div>
          </div>

          {/* Role definitions reference */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-xs">
            <div>
              <span className="font-bold text-purple-900 block">👑 Superadministrador</span>
              <p className="text-neutral-600 mt-0.5">Control absoluto de diseño, colores, logos, usuarios y configuración.</p>
            </div>
            <div>
              <span className="font-bold text-blue-900 block">🏛️ Presidencia & Secretaría</span>
              <p className="text-neutral-600 mt-0.5">Edición de contenidos web, comunicados, actas y publicación de artículos.</p>
            </div>
            <div>
              <span className="font-bold text-amber-900 block">⭐ Socio Oficial</span>
              <p className="text-neutral-600 mt-0.5">Acceso al portal privado, guías clínicas, webinars y descuentos comerciales.</p>
            </div>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-50 text-neutral-700 font-bold text-xs uppercase border-y border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Usuario</th>
                  <th className="py-3 px-4">Rol Asignado</th>
                  <th className="py-3 px-4">Permisos</th>
                  <th className="py-3 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {allUsers.length > 0 ? (
                  allUsers.map((u) => (
                    <tr key={u.userId} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-neutral-900">{u.displayName || 'Sin nombre'}</div>
                        <div className="text-xs text-neutral-500 font-mono">{u.email}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold border ${ROLE_LABELS[u.role]?.badgeClass || 'bg-neutral-100'}`}>
                          {ROLE_LABELS[u.role]?.name || u.role}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs space-y-1">
                        <div className="flex flex-wrap gap-1">
                          {u.canEditSite && (
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px]">
                              Editar Web
                            </span>
                          )}
                          {u.canPublishArticles && (
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-semibold text-[10px]">
                              Artículos
                            </span>
                          )}
                          {u.canManageUsers && (
                            <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded font-semibold text-[10px]">
                              Usuarios
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <select
                          value={u.role}
                          disabled={!permissions.canManageUsers}
                          onChange={async (e) => {
                            const newRole = e.target.value as UserRole;
                            await updateUserRoleAndPerms(u.userId, newRole, {
                              canEditSite: ['admin', 'presidente', 'secretario'].includes(newRole),
                              canPublishArticles: ['admin', 'presidente', 'secretario', 'vocal'].includes(newRole),
                              canManageUsers: newRole === 'admin',
                            });
                            triggerSaved(`Rol de ${u.email} actualizado a ${newRole}`);
                          }}
                          className="px-2.5 py-1 text-xs font-semibold border rounded-lg bg-white focus:ring-2 focus:ring-emerald-700"
                        >
                          <option value="admin">Superadmin</option>
                          <option value="presidente">Presidente</option>
                          <option value="secretario">Secretario</option>
                          <option value="vocal">Vocal</option>
                          <option value="socio">Socio</option>
                          <option value="usuario">Usuario normal</option>
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-neutral-500">
                      No hay usuarios registrados en la base de datos todavía. Inicia sesión con Google para crear tu primer usuario.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 7: BIBLIOTECA DE MEDIOS & ARCHIVOS */}
      {activeTab === 'archivos' && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
              <Upload className="w-5 h-5 text-emerald-700" />
              <span>Biblioteca de Medios & Fotos Oficiales</span>
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Sube tus fotos, documentos y logotipos para usarlos en el logotipo de la web, artículos o cabeceras.
            </p>
          </div>

          {/* Upload card */}
          <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-xl space-y-4">
            <h3 className="text-sm font-bold text-neutral-800">Subir Nuevo Archivo o Enlazar Imagen:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-4">
                <label className="text-xs font-semibold text-neutral-700">Nombre descriptivo:</label>
                <input
                  type="text"
                  value={newMediaName}
                  onChange={(e) => setNewMediaName(e.target.value)}
                  placeholder="Ej. Logo oficial horizontal, Foto sede..."
                  className="mt-1 w-full px-3 py-2 text-sm border rounded-lg"
                />
              </div>

              <div className="sm:col-span-5">
                <label className="text-xs font-semibold text-neutral-700">
                  Subir desde ordenador o introducir URL:
                </label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    value={newMediaUrl}
                    onChange={(e) => setNewMediaUrl(e.target.value)}
                    placeholder="Pega URL o usa el botón de subida..."
                    className="flex-1 px-3 py-2 text-sm border rounded-lg"
                  />
                  <label className="px-3 py-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 rounded-lg text-xs font-bold cursor-pointer flex items-center shrink-0">
                    <Upload className="w-4 h-4 mr-1" />
                    Examinar
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="sm:col-span-3 flex items-end">
                <button
                  type="button"
                  onClick={handleAddMedia}
                  className="w-full px-4 py-2 bg-emerald-800 text-white font-bold text-sm rounded-lg hover:bg-emerald-900 transition-colors"
                >
                  Guardar en Biblioteca
                </button>
              </div>
            </div>
          </div>

          {/* Media grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {mediaFiles.map((m) => (
              <div
                key={m.id}
                className="bg-white border border-neutral-200 rounded-xl p-3 shadow-2xs space-y-2 group"
              >
                <div className="aspect-video bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center border">
                  {m.url.startsWith('data:image') || m.url.match(/\.(png|jpg|jpeg|webp|svg)$/i) ? (
                    <img src={m.url} alt={m.name} className="w-full h-full object-contain p-2" />
                  ) : (
                    <FileText className="w-8 h-8 text-neutral-400" />
                  )}
                </div>
                <div className="text-xs font-bold text-neutral-900 truncate">{m.name}</div>
                <div className="flex flex-wrap gap-1 pt-1">
                  <button
                    type="button"
                    onClick={async () => {
                      setLogoType('custom_url');
                      setLogoUrl(m.url);
                      await updateSiteConfig({ logoType: 'custom_url', logoUrl: m.url }, currentUser?.uid || 'simulated-admin');
                      triggerSaved('Establecido como Logo Horizontal');
                    }}
                    className="px-2 py-0.5 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 rounded text-[10px] font-bold border border-emerald-200"
                    title="Usar como Logo Horizontal para cabeceras"
                  >
                    Usar Horizontal
                  </button>
                  <button
                    type="button"
                    onClick={async () => {
                      setLogoType('custom_url');
                      setLogoUrlStacked(m.url);
                      await updateSiteConfig({ logoType: 'custom_url', logoUrlStacked: m.url }, currentUser?.uid || 'simulated-admin');
                      triggerSaved('Establecido como Logo Apilado');
                    }}
                    className="px-2 py-0.5 bg-orange-50 text-orange-800 hover:bg-orange-100 rounded text-[10px] font-bold border border-orange-200"
                    title="Usar como Logo Apilado para portadas y móvil"
                  >
                    Usar Apilado
                  </button>
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1 border-t border-neutral-100">
                  <span>{m.size}</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(m.url);
                        triggerSaved('Enlace copiado al portapapeles');
                      }}
                      className="p-1 hover:text-emerald-800"
                      title="Copiar enlace"
                    >
                      <LinkIcon className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => deleteMediaFile(m.id)}
                      className="p-1 hover:text-red-600"
                      title="Eliminar"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
