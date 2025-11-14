import { ArrowLeft, Cloud, Server, Database, Shield, Zap, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ArticleDetailsProps {
  article: {
    id: number;
    title: string;
    description: string;
    image: string;
    color: "red" | "yellow" | "blue";
    content: string;
    cloudServices?: {
      title: string;
      description: string;
      icon: "cloud" | "server" | "database" | "shield" | "zap" | "globe";
    }[];
  };
  onBack: () => void;
}

export function ArticleDetails({ article, onBack }: ArticleDetailsProps) {
  const colorClasses = {
    red: "border-[#DC2626] bg-[#DC2626]/5",
    yellow: "border-[#F59E0B] bg-[#F59E0B]/5",
    blue: "border-[#2563EB] bg-[#2563EB]/5",
  };

  const colorBadge = {
    red: "bg-[#DC2626]",
    yellow: "bg-[#F59E0B]",
    blue: "bg-[#2563EB]",
  };

  const iconMap = {
    cloud: Cloud,
    server: Server,
    database: Database,
    shield: Shield,
    zap: Zap,
    globe: Globe,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con imagen */}
      <div className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a artículos
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <p className="text-xl text-gray-200 max-w-3xl">{article.description}</p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Card introductoria personalizada */}
        <div className={`bg-gradient-to-r ${article.color === 'red' ? 'from-red-50 to-red-100 border-red-200' : article.color === 'yellow' ? 'from-yellow-50 to-yellow-100 border-yellow-200' : 'from-blue-50 to-blue-100 border-blue-200'} rounded-xl shadow-lg p-8 mb-8 border-l-4 ${article.color === 'red' ? 'border-l-red-500' : article.color === 'yellow' ? 'border-l-yellow-500' : 'border-l-blue-500'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 ${article.color === 'red' ? 'bg-red-500' : article.color === 'yellow' ? 'bg-yellow-500' : 'bg-blue-500'} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
              ☁️
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Blog Tecnológico</h2>
              <p className="text-gray-600">"Servicios en la Nube en la Vida Cotidiana y su Importancia Actual"</p>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              La computación en la nube se ha convertido en una herramienta esencial del mundo moderno. Aunque a veces pasa desapercibida, forma parte de casi todo lo que hacemos en internet: desde enviar un mensaje, ver una película, guardar fotos o estudiar en línea.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              En este blog conocerás cómo la nube funciona en tu día a día y por qué se ha vuelto tan importante.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>
        </div>

        {/* Sección de Servicios de Internet en la Nube */}
        {article.cloudServices && article.cloudServices.length > 0 && (
          <div className={`bg-white rounded-lg shadow-lg p-8 border-t-4 ${colorClasses[article.color]}`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Servicios de Internet en la Nube Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {article.cloudServices.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-gray-50 border border-gray-200 hover:shadow-md transition-shadow hover:border-gray-300"
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${colorBadge[article.color]} text-white rounded-lg mb-4 shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
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

