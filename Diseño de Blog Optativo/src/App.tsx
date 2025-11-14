import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { BlogCard } from "./components/BlogCard";
import { ArticleDetails } from "./components/ArticleDetails";
import { BookOpen, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";

function MainApp() {
  const { selectedArticleId, setSelectedArticleId, currentSection } = useNavigation();

  const blogPosts = [
    {
      id: 1,
      title: "Introducción a los Servicios en la Nube",
      description: "Descubre los fundamentos de la computación en la nube y cómo estos servicios están revolucionando el acceso a la tecnología en la vida cotidiana.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMDg0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "blue" as const,
      size: "large" as const,
      content: `La computación en la nube se ha convertido en una herramienta esencial del mundo moderno. Aunque a veces pasa desapercibida, forma parte de casi todo lo que hacemos en internet: desde enviar un mensaje, ver una película, guardar fotos o estudiar en línea.

En este blog conocerás cómo la nube funciona en tu día a día y por qué se ha vuelto tan importante.

La nube es un conjunto de servidores conectados a internet que permiten almacenar, procesar y acceder a información desde cualquier lugar y en cualquier momento.

Ejemplos cotidianos:

• Guardas tus fotos en Google Photos

• Ves películas en Netflix

• Haces videollamadas en Zoom

• Editas tareas en Google Docs

Ventajas principales:

• Accesibilidad desde cualquier lugar

• Rapidez en el procesamiento

• No necesitas instalar programas pesados

• Se actualiza automáticamente

La nube está en todas partes, incluso cuando no la notamos. Permite que la comunicación, el entretenimiento, la educación y las finanzas funcionen sin interrupciones.`,
      cloudServices: [
        {
          title: "Almacenamiento Personal",
          description: "Servicios como Google Drive, OneDrive e iCloud que permiten guardar documentos, fotos y archivos de manera segura y accesible desde cualquier dispositivo.",
          icon: "database" as const,
        },
        {
          title: "Aplicaciones Web",
          description: "Herramientas como Google Docs, Sheets y Slides que permiten crear y editar documentos colaborativamente sin necesidad de instalación local.",
          icon: "cloud" as const,
        },
        {
          title: "Streaming de Contenido",
          description: "Plataformas como Netflix, Spotify y YouTube que almacenan y distribuyen contenido multimedia de manera eficiente a través de servidores globales.",
          icon: "globe" as const,
        },
        {
          title: "Comunicación Digital",
          description: "Servicios de mensajería y videollamadas como WhatsApp, Zoom y Microsoft Teams que operan completamente en la nube.",
          icon: "zap" as const,
        },
      ],
    },
    {
      id: 2,
      title: "Los Diferentes Servicios en la Nube",
      description: "Explora la amplia gama de servicios en la nube disponibles y cómo cada uno contribuye a diferentes aspectos de nuestra vida digital.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYzMDg0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "red" as const,
      size: "normal" as const,
      content: `Los servicios en la nube se han convertido en una herramienta esencial del mundo moderno. Aunque a veces pasa desapercibida, forma parte de casi todo lo que hacemos en internet: desde enviar un mensaje, ver una película, guardar fotos o estudiar en línea.

A) Comunicación

Muchos servicios que usamos a diario dependen de la nube para funcionar:

• WhatsApp/Telegram: mensajes y archivos se almacenan en servidores.

• Gmail/Outlook: tus correos viven en la nube, no en tu teléfono.

Esto garantiza que puedas acceder a tus conversaciones desde cualquier dispositivo.

B) Entretenimiento

Todo el streaming moderno existe gracias a la nube:

• Netflix, Spotify, YouTube

Las películas, canciones y videos están almacenados en servidores. Tú solo los "descargas temporalmente" mientras los ves.

C) Almacenamiento personal

La nube ha reemplazado las memorias USB:

• Google Drive, OneDrive, iCloud

Puedes guardar documentos, tareas, fotos o videos y abrirlos desde cualquier equipo conectado a internet.

D) Educación y trabajo

La pandemia aceleró este uso, pero ya es parte del día a día:

• Zoom, Google Meet, Microsoft Teams

• Classroom, Moodle, Canvas

Las plataformas usan la nube para almacenar clases, tareas, grabaciones y documentos.

E) Finanzas y economía digital

Apps bancarias y de pago dependen totalmente de la nube:

• Banca en línea

• PayPal

• Pagos móviles

Estos sistemas necesitan servidores seguros que protejan tus transacciones.`,
      cloudServices: [
        {
          title: "Infraestructura como Servicio (IaaS)",
          description: "Proporciona recursos computacionales básicos como servidores virtuales, almacenamiento y redes. Ejemplos: Amazon EC2, Google Compute Engine, Microsoft Azure VMs.",
          icon: "server" as const,
        },
        {
          title: "Plataforma como Servicio (PaaS)",
          description: "Ofrece plataformas completas para desarrollar, ejecutar y gestionar aplicaciones sin preocuparse por la infraestructura subyacente. Ejemplos: Heroku, Google App Engine.",
          icon: "cloud" as const,
        },
        {
          title: "Software como Servicio (SaaS)",
          description: "Aplicaciones completas entregadas a través de internet. Ejemplos: Gmail, Office 365, Salesforce, Netflix.",
          icon: "globe" as const,
        },
        {
          title: "Almacenamiento como Servicio",
          description: "Soluciones para almacenar y acceder a datos desde cualquier lugar. Ejemplos: Google Drive, Dropbox, Amazon S3.",
          icon: "database" as const,
        },
      ],
    },
    {
      id: 3,
      title: "Servicios en la Nube en la Vida Cotidiana",
      description: "Descubre cómo los servicios en la nube se han integrado completamente en nuestras actividades diarias y por qué son tan importantes hoy en día.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMDg0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "yellow" as const,
      size: "normal" as const,
      content: `La nube está en todas partes, incluso cuando no la notamos. Permite que la comunicación, el entretenimiento, la educación y las finanzas funcionen sin interrupciones.

⭐ ¿Por qué la nube es tan importante hoy?

La nube es esencial por muchas razones:

• Acceso desde cualquier lugar: solo necesitas internet.

• Escalabilidad: las empresas pueden crecer sin comprar más computadoras.

• Reducción de costos: no hay que invertir en infraestructura física grande.

• Actualizaciones automáticas: el usuario no tiene que preocuparse de instalar nada.

• Mejor colaboración: varias personas pueden trabajar en un mismo archivo en tiempo real.

🔐 Riesgos y Buenas Prácticas

Aunque la nube es segura, siempre existe riesgo si no se usa correctamente.

Buenas prácticas:

• Usar contraseñas fuertes

• Activar autenticación en dos pasos

• No guardar datos sensibles en plataformas desconocidas

• Evitar redes Wi-Fi públicas para cosas importantes

• Hacer copias de seguridad regularmente

🎯 Conclusión

La nube no es el futuro: ya es nuestro presente y seguirá creciendo en importancia. Entender cómo opera es fundamental en un mundo donde cada vez más actividades dependen de servicios digitales.`,
      cloudServices: [
        {
          title: "Seguridad en la Nube",
          description: "Medidas de protección avanzadas que incluyen encriptación de datos, autenticación multifactor y monitoreo continuo para proteger la información personal y empresarial.",
          icon: "shield" as const,
        },
        {
          title: "Backup Automático",
          description: "Sistemas de respaldo automático que garantizan que tus datos estén seguros y puedan recuperarse en caso de pérdida o daño del dispositivo original.",
          icon: "database" as const,
        },
        {
          title: "Sincronización Multi-dispositivo",
          description: "Capacidad de acceder y sincronizar datos entre múltiples dispositivos, manteniendo la información actualizada en tiempo real.",
          icon: "cloud" as const,
        },
        {
          title: "Recuperación de Desastres",
          description: "Planes y sistemas que permiten restaurar operaciones rápidamente en caso de fallos técnicos o desastres naturales.",
          icon: "server" as const,
        },
      ],
    },
    {
      id: 4,
      title: "¿Qué es la Computación en la Nube?",
      description: "Aprende los fundamentos de la computación en la nube explicados de manera sencilla y descubre cómo funciona esta tecnología esencial.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYzMDg0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "blue" as const,
      size: "normal" as const,
      content: `La nube es un conjunto de servidores conectados a internet que permiten almacenar, procesar y acceder a información desde cualquier lugar y en cualquier momento.

En vez de guardar todo en un dispositivo físico, lo guardamos "en la nube", es decir, en servidores remotos.

Ejemplos cotidianos:

• Guardas tus fotos en Google Photos

• Ves películas en Netflix

• Haces videollamadas en Zoom

• Editas tareas en Google Docs

Ventajas principales:

• Accesibilidad desde cualquier lugar

• Rapidez en el procesamiento

• No necesitas instalar programas pesados

• Se actualiza automáticamente

La infraestructura en la nube permite a las empresas y usuarios escalar sus recursos según la demanda, reduciendo costos operativos y mejorando la eficiencia.`,
      cloudServices: [
        {
          title: "Servidores Distribuidos",
          description: "Red global de servidores que almacenan y procesan datos de manera distribuida, garantizando alta disponibilidad y redundancia.",
          icon: "server" as const,
        },
        {
          title: "Redes de Alta Velocidad",
          description: "Conexiones de internet de alta velocidad que permiten el acceso rápido y confiable a los servicios en la nube desde cualquier ubicación.",
          icon: "globe" as const,
        },
        {
          title: "Sistemas de Enfriamiento",
          description: "Sistemas avanzados de enfriamiento que mantienen los servidores funcionando de manera óptima y eficiente.",
          icon: "database" as const,
        },
        {
          title: "Monitoreo Continuo",
          description: "Sistemas de monitoreo 24/7 que garantizan el funcionamiento correcto de la infraestructura y detectan problemas antes de que ocurran.",
          icon: "shield" as const,
        },
      ],
    },
    {
      id: 5,
      title: "Importancia Actual de la Nube",
      description: "Explora por qué la computación en la nube se ha convertido en una herramienta esencial en el mundo moderno y su impacto en la sociedad actual.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYzMDg0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "red" as const,
      size: "normal" as const,
      content: `La nube está en todas partes, incluso cuando no la notamos. Permite que la comunicación, el entretenimiento, la educación y las finanzas funcionen sin interrupciones.

⭐ ¿Por qué la nube es tan importante hoy?

La nube es esencial por muchas razones:

• Acceso desde cualquier lugar: solo necesitas internet.

• Escalabilidad: las empresas pueden crecer sin comprar más computadoras.

• Reducción de costos: no hay que invertir en infraestructura física grande.

• Actualizaciones automáticas: el usuario no tiene que preocuparse de instalar nada.

• Mejor colaboración: varias personas pueden trabajar en un mismo archivo en tiempo real.

🎯 Conclusión

La nube no es el futuro: ya es nuestro presente y seguirá creciendo en importancia. Entender cómo opera es fundamental en un mundo donde cada vez más actividades dependen de servicios digitales.`,
      cloudServices: [
        {
          title: "Escalabilidad Automática",
          description: "Capacidad de aumentar o disminuir recursos automáticamente según la demanda, optimizando costos y rendimiento.",
          icon: "zap" as const,
        },
        {
          title: "Disponibilidad Global",
          description: "Servicios disponibles 24/7 desde cualquier parte del mundo con alta confiabilidad y tiempo de actividad garantizado.",
          icon: "globe" as const,
        },
        {
          title: "Colaboración en Tiempo Real",
          description: "Herramientas que permiten a múltiples usuarios trabajar simultáneamente en documentos, proyectos y presentaciones.",
          icon: "cloud" as const,
        },
        {
          title: "Análisis Predictivo",
          description: "Uso de inteligencia artificial y machine learning para optimizar recursos y predecir necesidades futuras.",
          icon: "server" as const,
        },
      ],
    },
    {
      id: 6,
      title: "Riesgos y Buenas Prácticas",
      description: "Aprende sobre los riesgos asociados al uso de servicios en la nube y las mejores prácticas para mantener tu información segura.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYzMDg0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "yellow" as const,
      size: "normal" as const,
      content: `Aunque la nube es segura, siempre existe riesgo si no se usa correctamente.

Buenas prácticas:

• Usar contraseñas fuertes

• Activar autenticación en dos pasos

• No guardar datos sensibles en plataformas desconocidas

• Evitar redes Wi-Fi públicas para cosas importantes

• Hacer copias de seguridad regularmente

🔐 Seguridad en la Nube

La seguridad es una prioridad en los servicios en la nube. Los proveedores invierten millones en proteger tus datos con:

• Encriptación de datos en tránsito y en reposo

• Autenticación multifactor

• Monitoreo continuo de amenazas

• Cumplimiento con regulaciones de privacidad

• Recuperación automática de desastres

La nube puede ser más segura que almacenar datos localmente, ya que los proveedores tienen recursos dedicados a la seguridad que la mayoría de usuarios individuales no pueden costear.`,
      cloudServices: [
        {
          title: "Autenticación Multifactor",
          description: "Sistema de seguridad que requiere múltiples formas de verificación antes de permitir el acceso a cuentas y datos.",
          icon: "shield" as const,
        },
        {
          title: "Encriptación de Datos",
          description: "Tecnología que convierte la información en código ilegible para protegerla durante el almacenamiento y transmisión.",
          icon: "database" as const,
        },
        {
          title: "Monitoreo de Seguridad",
          description: "Sistemas automatizados que detectan y responden a amenazas de seguridad en tiempo real.",
          icon: "server" as const,
        },
        {
          title: "Copias de Seguridad",
          description: "Estrategias de respaldo automático que garantizan que los datos puedan recuperarse en caso de pérdida o daño.",
          icon: "cloud" as const,
        },
      ],
    },
  ];

  const selectedArticleData = selectedArticleId
    ? blogPosts.find((post) => post.id === selectedArticleId)
    : null;

  useEffect(() => {
    if (currentSection && !selectedArticleId) {
      const element = document.getElementById(currentSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentSection, selectedArticleId]);

  if (selectedArticleData) {
    return (
      <>
        <Navbar />
        <ArticleDetails
          article={selectedArticleData}
          onBack={() => setSelectedArticleId(null)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMDg0MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Laboratorio de computación"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#DC2626]/80 via-[#F59E0B]/60 to-[#2563EB]/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="mb-6 animate-fade-in">Blog Tecnológico</h1>
          <p className="mb-12 text-xl animate-fade-in-delayed">
            Un espacio dedicado a explorar la innovación tecnológica, computación en la nube y transformación digital en la educación superior
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Artículos Especializados</h3>
              <p className="text-white/90 text-sm">
                Contenido técnico detallado sobre servicios en la nube y tendencias digitales
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up-delayed">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Comunidad Académica</h3>
              <p className="text-white/90 text-sm">
                Espacio para estudiantes, profesores e investigadores en tecnología educativa
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-slide-up-more-delayed">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovación Continua</h3>
              <p className="text-white/90 text-sm">
                Exploramos las últimas tendencias en tecnología y su impacto en la educación
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById("articulos");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-[#DC2626] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 transform duration-200"
          >
            Explorar Artículos
          </button>
        </div>
      </section>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12 text-gray-900">Sobre el Blog</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 border-t-4 border-[#DC2626]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#DC2626] text-white rounded-full mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="mb-3 text-gray-900">Contenido Tecnológico</h3>
              <p className="text-gray-600">
                Artículos especializados sobre computación en la nube, innovación digital y transformación tecnológica en la educación.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 border-t-4 border-[#F59E0B]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F59E0B] text-white rounded-full mb-4">
                <Users size={32} />
              </div>
              <h3 className="mb-3 text-gray-900">Comunidad Académica</h3>
              <p className="text-gray-600">
                Espacio para estudiantes, profesores e investigadores interesados en tecnología y educación digital.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gray-50 border-t-4 border-[#2563EB]">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2563EB] text-white rounded-full mb-4">
                <Award size={32} />
              </div>
              <h3 className="mb-3 text-gray-900">Innovación Continua</h3>
              <p className="text-gray-600">
                Exploramos las últimas tendencias en tecnología educativa y su impacto en el aprendizaje moderno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artículos Section - Mosaico */}
      <section id="articulos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12 text-gray-900">Artículos Tecnológicos</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Explora nuestros artículos especializados sobre computación en la nube, innovación digital y transformación tecnológica en la educación superior. Cada artículo incluye análisis detallados y ejemplos prácticos de servicios en la nube.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                color={post.color}
                size={post.size}
                onClick={() => setSelectedArticleId(post.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#DC2626] rounded-full"></div>
            <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
            <div className="w-3 h-3 bg-[#2563EB] rounded-full"></div>
          </div>
          <p className="text-gray-400">
            © 2024 Blog Tecnológico. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <MainApp />
    </NavigationProvider>
  );
}
