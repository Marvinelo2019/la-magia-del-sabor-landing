import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50251239296?text=Hola%2C%20este%20es%20un%20mensaje%20desde%20la%20p%C3%A1gina%20de%20La%20Magia%20del%20Sabor.%20Quiero%20hacer%20un%20pedido."
      target="_blank"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition hover:scale-110"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;