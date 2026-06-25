import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function OrderSection() {
  return (
    <section id="pedido" className="bg-coffee py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-bread text-sm font-semibold"
        >
          Haz tu pedido
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl text-white mt-5"
        >
          Pan fresco para compartir hoy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-white/75 text-lg leading-8 max-w-2xl mx-auto"
        >
          Escríbenos por WhatsApp y con gusto te ayudamos con tu pedido,
          disponibilidad de productos y opciones para compartir en familia.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          href="https://wa.me/50251239296"
          target="_blank"
          className="inline-flex items-center gap-3 mt-10 bg-bread hover:bg-caramel text-white px-9 py-5 rounded-full text-lg font-semibold transition"
        >
          <FaWhatsapp size={24} />
          Pedir por WhatsApp
        </motion.a>
      </div>
    </section>
  );
}

export default OrderSection;