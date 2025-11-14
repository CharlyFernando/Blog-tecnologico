import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigation } from "../context/NavigationContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
    // update current section in navigation context
    try {
      setCurrentSection(sectionId);
    } catch {}
  };

  const handleNavClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    if (selectedArticleId) {
      setSelectedArticleId(null);
    }
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-nosotros", label: "Sobre Nosotros" },
    { id: "articulos", label: "Artículos" },
  ];
  const { selectedArticleId, setSelectedArticleId, currentSection, setCurrentSection } =
    // defensive: useNavigation may throw if provider missing
    ((): any => {
      try {
        return useNavigation();
      } catch (e) {
        return { selectedArticleId: null, setSelectedArticleId: () => {}, currentSection: "inicio", setCurrentSection: () => {} };
      }
    })();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-[#DC2626] rounded-full"></div>
              <div className="w-3 h-3 bg-[#F59E0B] rounded-full"></div>
              <div className="w-3 h-3 bg-[#2563EB] rounded-full"></div>
            </div>
            <button
              onClick={() => {
                setSelectedArticleId(null);
                setCurrentSection("inicio");
              }}
              className="font-bold text-gray-900 hover:text-[#2563EB] transition-colors"
            >
              Blog Tecnológico
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-700 hover:text-[#DC2626] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            {/* If an article is selected show a compact indicator */}
            {selectedArticleId && (
              <div className="ml-4 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 flex items-center gap-2">
                <span className="text-gray-600">Leyendo artículo</span>
                <button
                  onClick={() => setSelectedArticleId(null)}
                  className="text-[#DC2626] hover:underline"
                >
                  Volver
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#DC2626] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
