import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { products } from "../../data/products";

function Products() {
  return (
    <section id="productos" className="bg-soft py-24 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Nuestros productos"
          title="Cada pieza de pan cuenta una historia"
          description="Una selección de panes, dulces y especialidades preparadas con frescura, tradición y dedicación todos los días."
        />

        <div className="mt-20 space-y-20">
          {products.map((product, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="group relative h-[360px] sm:h-[480px] overflow-hidden rounded-[2rem] shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-coffee/35 via-transparent to-transparent"></div>
                </div>

                <div className="max-w-xl">
                  <p className="uppercase tracking-[0.3em] text-bread text-xs font-semibold">
                    {product.tag}
                  </p>

                  <h3 className="font-display text-4xl sm:text-6xl text-coffee mt-4">
                    {product.name}
                  </h3>

                  <p className="mt-6 text-caramel/80 text-lg leading-8">
                    {product.description}
                  </p>

                  <div className="mt-8 h-px w-24 bg-bread"></div>

                  <p className="mt-6 text-sm uppercase tracking-[0.25em] text-caramel/70">
                    Fresco todos los días
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;