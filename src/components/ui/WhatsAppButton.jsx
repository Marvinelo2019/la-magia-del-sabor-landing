import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50251239296"
      target="_blank"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition hover:scale-110"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;