import React, { useState } from 'react';
import { useAccessibility } from '../../context/AccessibilityContext';
import { useCMS } from '../../context/CMSContext';
import { useAuth } from '../../context/AuthContext';
import { 
  Volume2, 
  Sparkles, 
  Clock, 
  Calendar, 
  User, 
  Tag, 
  VolumeX, 
  Share2, 
  BookOpen,
  Crown,
  Lock
} from 'lucide-react';

export const ActualidadView: React.FC = () => {
  const { easyReading, speakText, isSpeaking, currentSpeechTitle, stopSpeech, announce, navigateTo } = useAccessibility();
  const { articles } = useCMS();
  const { permissions } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [articleEasyModes, setArticleEasyModes] = useState<Record<string, boolean>>({});

  const isMember = permissions.canAccessPartnerArea;

  const categories = [
    'all',
    'Proyectos y Pilotos',
    'Nutrición Inclusiva y Derechos',
    'Evidencia Científica',
    'Autonomía y Familias',
    'Salud y Discapacidad'
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  const toggleArticleEasyMode = (articleId: string) => {
    setArticleEasyModes(prev => {
      const next = !prev[articleId];
      announce(next ? 'Mostrando versión en Lectura Fácil de este artículo.' : 'Mostrando versión estándar del artículo.');
      return { ...prev, [articleId]: next };
    });
  };

  const handleSpeakArticle = (title: string, content: string) => {
    speakText(content, title);
  };

  return (
    <div className="space-y-12 py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 animate-fadeIn">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-bold">
          <span>Divulgación y Transferencia Científica</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-tight">
          Actualidad, autonomía y rigor alimentario
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed">
          {easyReading
            ? 'Artículos cortos con información segura sobre cómo comer mejor y cuidar de la salud.'
            : 'Publicaciones respaldadas por el Comité Técnico Asesor de NutriDiversa sobre adaptaciones nutricionales, inclusión y prevención activa del intrusismo (Art. 8).'}
        </p>
      </section>

      {/* 2. Filtros accesibles */}
      <div className="flex flex-wrap items-center justify-center gap-2" role="toolbar" aria-label="Filtrar artículos por categoría">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`min-touch-target px-4 py-2 rounded-full text-xs font-bold transition-colors ${
              selectedCategory === cat
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100'
            }`}
            aria-pressed={selectedCategory === cat}
          >
            {cat === 'all' ? 'Todos los Artículos' : cat}
          </button>
        ))}
      </div>

      {/* 3. Lista de Artículos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => {
          const isItemEasyMode = easyReading || !!articleEasyModes[article.id];
          const isCurrentlyReading = isSpeaking && currentSpeechTitle === article.title;
          const isLockedForUser = article.visibility === 'members_only' && !isMember;

          const contentParagraphs = article.content.split('\n\n').filter(Boolean);
          const easyParagraphs = (article.easyReadingContent || '').split('\n\n').filter(Boolean);

          return (
            <article
              key={article.id}
              className={`bg-white rounded-xl border-2 p-6 sm:p-7 card-surface flex flex-col justify-between space-y-6 transition-colors shadow-2xs ${
                article.visibility === 'members_only' ? 'border-amber-300' : 'border-[#D1E7DD] hover:border-emerald-600'
              }`}
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-neutral-500 pb-2 border-b border-neutral-100">
                  <span className="font-bold text-emerald-800 flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    {article.category}
                  </span>
                  {article.visibility === 'members_only' ? (
                    <span className="flex items-center gap-1 text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded">
                      <Crown className="w-3 h-3 text-amber-600" />
                      Solo Socios
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      4 min lectura
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-neutral-900 leading-snug">
                  {article.title}
                </h2>

                {/* Subtitle / Author Info */}
                <div className="text-xs text-neutral-500 flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.createdAt).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 font-semibold text-neutral-700">
                    <User className="w-3.5 h-3.5" />
                    {article.authorName}
                  </span>
                </div>

                {/* Content body or locked card */}
                {isLockedForUser ? (
                  <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-3 text-xs text-amber-950">
                    <div className="flex items-center gap-2 font-bold text-amber-900">
                      <Lock className="w-4 h-4 text-amber-700" />
                      <span>Contenido Reservado a Socios de NutriDiversa</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">
                      Este artículo contiene pautas clínicas y protocolos exclusivos para socios de la entidad.
                    </p>
                    <button
                      onClick={() => navigateTo('/socios')}
                      className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 font-bold rounded-lg transition-colors text-center"
                    >
                      Hazte Socio o Inicia Sesión
                    </button>
                  </div>
                ) : (
                  <div className="pt-2 text-sm leading-relaxed text-neutral-700 space-y-3">
                    {isItemEasyMode && easyParagraphs.length > 0 ? (
                      <div className="easy-reading-box p-4 rounded-lg space-y-2 border-l-4 border-emerald-600 bg-emerald-50/50">
                        <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs">
                          <Sparkles className="w-4 h-4 text-emerald-700" />
                          <span>Resumen en Lectura Fácil:</span>
                        </div>
                        {easyParagraphs.map((paragraph, idx) => (
                          <p key={idx} className="font-medium text-emerald-950">
                            • {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : (
                      contentParagraphs.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              {!isLockedForUser && (
                <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      if (isCurrentlyReading) {
                        stopSpeech();
                      } else {
                        handleSpeakArticle(article.title, article.content);
                      }
                    }}
                    className={`min-touch-target px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      isCurrentlyReading
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                    }`}
                  >
                    {isCurrentlyReading ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-amber-700" />
                        <span>Detener</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Escuchar</span>
                      </>
                    )}
                  </button>

                  {article.easyReadingContent && (
                    <button
                      onClick={() => toggleArticleEasyMode(article.id)}
                      className={`min-touch-target px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors ${
                        isItemEasyMode
                          ? 'bg-emerald-800 text-white'
                          : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isItemEasyMode ? 'Texto Normal' : 'Lectura Fácil'}</span>
                    </button>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
};
