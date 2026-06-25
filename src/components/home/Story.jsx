import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const stats = [
  { value: "17+", label: "Años de experiencia" },
  { value: "6", label: "Panaderías" },
  { value: "3", label: "Centros de producción" },
  { value: "100%", label: "Pan fresco cada día" },
];

function Story() {
  return (
    <section id="historia" className="bg-cream py-24 sm:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Nuestra historia"
          title="Tradición que se hornea todos los días"
          description="La Magia del Sabor nació con una idea sencilla: preparar pan fresco, delicioso y hecho con dedicación. Hoy, después de 17 años, seguimos llevando sabor y calidez a cada mesa."
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur rounded-3xl p-7 text-center border border-white shadow-sm"
            >
              <p className="font-display text-4xl sm:text-5xl text-bread">
                {item.value}
              </p>

              <p className="mt-3 text-sm sm:text-base text-caramel">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Story;