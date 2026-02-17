import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "919589581364";
  const message = "Hi! I'm interested in your digital marketing services.";

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        {isHovered && (
          <span className="font-semibold animate-in slide-in-from-left">
            Chat with us
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
