import { FC, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  navigation: Array<{ name: string; href: string }>;
}

const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onLinkClick,
  navigation,
}) => {
  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="flex items-center z-50">
                <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <Image src="/lotus.svg" alt="Logo Satori Massage" width={40} height={40} />
                </div>
                <div className="ml-2 flex flex-col">
                  <p className="font-brand text-4xl leading-none">Satori</p>
                  <p className="text-sm ml-2">Massage</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6 text-primary" />
              </button>
            </div>
            <nav className="h-full overflow-y-auto" id="mobile-menu">
              <div className="p-6">
                <div className="flex flex-col space-y-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="group relative text-lg font-medium text-gray-800 transition-colors duration-200 block py-2 border-b border-gray-50 hover:pl-3 hover:text-primary"
                        onClick={onLinkClick}
                      >
                        <span className="absolute left-0 top-1/2 h-1/2 w-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform -translate-y-1/2"></span>
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-12 pt-6 border-t border-gray-50">
                  <Link
                    href="https://wa.me/+5355396424?text=Hola,%20me%20gustaría%20reservar%20una%20sesión%20de%20masaje"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                    onClick={onClose}
                  >
                    Reserva tu sesión
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
