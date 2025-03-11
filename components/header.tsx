"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobile-menu";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Precios", href: "#precios" },
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");

      // Cerrar menú y esperar a la animación
      setMobileMenuOpen(false);

      // Esperar a que la animación de cierre termine antes de desplazarse
      setTimeout(() => {
        const element = document.querySelector(href || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Establecer el foco en el elemento para mejorar la accesibilidad
          (element as HTMLElement).focus({ preventScroll: true });
        }
      }, 350); // Ligeramente más largo que la duración de la animación
    },
    []
  );

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  // Manejar clic fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        // Solo cerrar si el clic no fue en el botón de menú
        const mobileMenuElement = document.getElementById("mobile-menu");
        if (
          mobileMenuElement &&
          !mobileMenuElement.contains(event.target as Node)
        ) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Manejar el evento de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Manejar el estado del menú y eventos de redimensionamiento
  useEffect(() => {
    // Actualizar el atributo data-menu-open en el body
    if (mobileMenuOpen) {
      document.body.setAttribute("data-menu-open", "true");
    } else {
      document.body.setAttribute("data-menu-open", "false");
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    // Manejar la tecla Escape para cerrar el menú
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.removeAttribute("data-menu-open");
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-background/95 shadow-sm backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between h-[var(--navbar-height)]">
            <Link href="#inicio" className="relative z-50 flex items-center">
              <div className="flex items-center m-2">
                <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                  <img src="/lotus.svg" alt="Logo Satori Massage" />
                </div>
                <div className="ml-2 flex flex-col">
                  <p className="font-brand text-4xl leading-none">Satori</p>
                  <p className="text-sm ml-2">Massage</p>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex md:gap-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              className="relative z-50 inline-flex items-center justify-center p-2 rounded-md md:hidden hover:bg-accent/10 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              </span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onLinkClick={handleLinkClick}
        navigation={navigation}
      />
    </>
  );
}
