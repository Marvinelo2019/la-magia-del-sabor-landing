import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from "../../assets/logo/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Inicio", href: "#home" },
    { label: "Productos", href: "#productos" },
    { label: "Historia", href: "#historia" },
    { label: "Haz tu pedido", href: "#pedido" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-bread/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="La Magia del Sabor"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? "h-12" : "h-16"
            }`}
          />

          <div className="hidden sm:block">
            <h1
              className={`font-display text-2xl transition ${
                scrolled ? "text-coffee" : "text-white"
              }`}
            >
              La Magia del Sabor
            </h1>

            <p
              className={`text-xs tracking-widest uppercase transition ${
                scrolled ? "text-bread" : "text-white/80"
              }`}
            >
              Panadería artesanal
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex gap-9 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition hover:text-bread ${
                scrolled ? "text-coffee" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/50251239296"
          target="_blank"
          className="hidden lg:flex bg-bread hover:bg-caramel text-white px-6 py-3 rounded-full transition"
        >
          Pedir ahora
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? (
            <HiX size={32} className={scrolled ? "text-coffee" : "text-white"} />
          ) : (
            <HiOutlineMenuAlt3
              size={32}
              className={scrolled ? "text-coffee" : "text-white"}
            />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-bread/10 px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-5 text-coffee font-medium">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-bread transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/50251239296"
              target="_blank"
              className="bg-bread text-white px-6 py-3 rounded-full text-center"
            >
              Pedir ahora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;