import { motion } from "framer-motion";
import hero from "../../assets/images/hero.jpeg";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <img
        src={hero}
        alt="Pan recién horneado de La Magia del Sabor"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-coffee/90 via-coffee/55 to-transparent"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-3xl pt-20">
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-bread uppercase tracking-[0.35em] text-sm font-semibold"
          >
            La Magia del Sabor
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-white text-5xl sm:text-6xl lg:text-8xl leading-[0.95]"
          >
            17 años horneando momentos inolvidables
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 text-white/90 text-lg sm:text-xl leading-8 max-w-2xl"
          >
            Pan recién horneado, tradición familiar y productos elaborados con
            dedicación para acompañar la mesa de muchas familias guatemaltecas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/50251239296"
              target="_blank"
              className="bg-bread hover:bg-caramel text-white px-8 py-4 rounded-full text-center font-semibold transition"
            >
              Haz tu pedido
            </a>

            <a
              href="#productos"
              className="border border-white/70 hover:bg-white hover:text-coffee text-white px-8 py-4 rounded-full text-center font-semibold transition"
            >
              Ver productos
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm animate-bounce">
        ↓
      </div>
    </section>
  );
}

export default Hero;