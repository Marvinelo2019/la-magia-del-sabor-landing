import { motion } from "framer-motion";

function SectionTitle({ subtitle, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <p className="uppercase tracking-[0.35em] text-bread text-xs sm:text-sm font-semibold">
        {subtitle}
      </p>

      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-coffee mt-4">
        {title}
      </h2>

      <p className="mt-6 text-caramel/80 text-base sm:text-lg leading-8">
        {description}
      </p>
    </motion.div>
  );
}

export default SectionTitle;