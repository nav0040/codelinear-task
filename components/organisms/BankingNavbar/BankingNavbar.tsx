"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { navbarReveal } from "@/components/animations";
import { usePreloaderComplete } from "@/components/organisms/Preloader";
import { BANKING_HERO_COPY, BANKING_NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/cn";

const menuStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const menuEase = [0.22, 1, 0.36, 1] as const;

const menuItem = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: menuEase },
  },
};

type PanelPosition = {
  top: number;
  left: number;
  width: number;
};

export function BankingNavbar() {
  const preloaderComplete = usePreloaderComplete();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [panelPosition, setPanelPosition] = useState<PanelPosition | null>(
    null
  );
  const barRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 48);
  });

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const syncPanelPosition = useCallback(() => {
    const bar = barRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    setPanelPosition({
      top: rect.bottom + 8,
      left: rect.left,
      width: rect.width,
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!menuOpen) {
      setPanelPosition(null);
      return;
    }
    syncPanelPosition();
    window.addEventListener("resize", syncPanelPosition);
    window.addEventListener("scroll", syncPanelPosition, { passive: true });
    return () => {
      window.removeEventListener("resize", syncPanelPosition);
      window.removeEventListener("scroll", syncPanelPosition);
    };
  }, [menuOpen, syncPanelPosition]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  return (
    <motion.header
      className="banking-nav-header"
      variants={navbarReveal}
      initial="hidden"
      animate={preloaderComplete ? "visible" : "hidden"}
    >
      <div className="banking-nav-shell">
        <motion.nav
          ref={barRef}
          className={cn(
            "banking-nav-bar",
            scrolled && "banking-nav-bar--scrolled",
            menuOpen && "banking-nav-bar--menu-open"
          )}
          aria-label="Main navigation"
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: scrolled ? -1 : 0,
                  scale: scrolled ? 0.995 : 1,
                }
          }
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/" className="banking-nav-logo" onClick={closeMenu}>
            N7
          </Link>

          <ul className="banking-nav-menu">
            {BANKING_NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="banking-nav-link">
                  {item.label}
                  {item.hasDropdown ? (
                    <ChevronDown className="banking-nav-chevron" aria-hidden />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <div className="banking-nav-actions">
            <Link
              href={BANKING_HERO_COPY.primaryCtaHref}
              className="banking-nav-demo banking-nav-demo--desktop"
            >
              {BANKING_HERO_COPY.primaryCta}
            </Link>

            <button
              type="button"
              className="banking-nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="banking-mobile-menu"
              onClick={() => {
                setMenuOpen((open) => {
                  if (!open) syncPanelPosition();
                  return !open;
                });
              }}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              {menuOpen ? (
                <X className="banking-nav-toggle-icon" aria-hidden />
              ) : (
                <Menu className="banking-nav-toggle-icon" aria-hidden />
              )}
            </button>
          </div>
        </motion.nav>
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {menuOpen && panelPosition ? (
                <>
                  <motion.button
                    key="nav-overlay"
                    type="button"
                    className="banking-nav-overlay"
                    aria-label="Close menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    onClick={closeMenu}
                  />
                  <motion.div
                    key="nav-panel"
                    id="banking-mobile-menu"
                    className="banking-nav-panel"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation"
                    style={{
                      top: panelPosition.top,
                      left: panelPosition.left,
                      width: panelPosition.width,
                    }}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.ul
                      className="banking-nav-panel-menu"
                      variants={menuStagger}
                      initial="hidden"
                      animate="visible"
                    >
                      {BANKING_NAV_ITEMS.map((item) => (
                        <motion.li key={item.label} variants={menuItem}>
                          <Link
                            href={item.href}
                            className="banking-nav-panel-link"
                            onClick={closeMenu}
                          >
                            {item.label}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.div
                      variants={menuItem}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={BANKING_HERO_COPY.primaryCtaHref}
                        className="banking-nav-panel-cta"
                        onClick={closeMenu}
                      >
                        {BANKING_HERO_COPY.primaryCta}
                      </Link>
                    </motion.div>
                  </motion.div>
                </>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </motion.header>
  );
}
