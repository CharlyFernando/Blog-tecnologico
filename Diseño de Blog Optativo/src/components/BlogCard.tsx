import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  color: "red" | "yellow" | "blue";
  size?: "normal" | "large";
  onClick?: () => void;
}

export function BlogCard({ title, description, image, color, size = "normal", onClick }: BlogCardProps) {
  const colorClasses = {
    red: "border-t-4 border-[#DC2626] hover:shadow-red-200",
    yellow: "border-t-4 border-[#F59E0B] hover:shadow-yellow-200",
    blue: "border-t-4 border-[#2563EB] hover:shadow-blue-200",
  };

  const colorBadge = {
    red: "bg-[#DC2626]",
    yellow: "bg-[#F59E0B]",
    blue: "bg-[#2563EB]",
  };

  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${colorClasses[color]} ${
        size === "large" ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className={`relative ${size === "large" ? "h-80" : "h-48"} overflow-hidden`}>
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-4 right-4 ${colorBadge[color]} text-white px-3 py-1 rounded-full`}>
          Nuevo
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button
          onClick={onClick}
          className={`mt-4 px-4 py-2 ${colorBadge[color]} text-white rounded-lg hover:opacity-90 transition-opacity`}
        >
          Leer más
        </button>
      </div>
    </div>
  );
}
