"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  CircleDollarSign,
  LayoutGrid,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { floatRotate, TiltLayer } from "@/components/animations";
import {
  BANKING_BALANCE_ACTIONS,
  BANKING_PROFILE,
} from "@/constants";

const iconMap = {
  wallet: Wallet,
  "circle-dollar": CircleDollarSign,
  "layout-grid": LayoutGrid,
} as const;

export function BalanceGlassCard() {
  const { avatar, name, greeting, balanceLabel, balanceAmount, balanceCurrency } =
    BANKING_PROFILE;
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-balance-float"
      variants={prefersReducedMotion ? undefined : floatRotate(5)}
      initial="initial"
      animate="animate"
    >
      <TiltLayer className="hero-balance-tilt" intensity={7}>
        <div className="hero-balance-shell">
          <div className="hero-balance-panel">
            <header className="hero-balance-panel__header">
              <div className="hero-balance-panel__profile">
                <div className="hero-balance-panel__avatar">
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    className="object-cover"
                    sizes="30px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="hero-balance-panel__name">{name}</p>
                  <p className="hero-balance-panel__greeting">{greeting}</p>
                </div>
              </div>
              <button
                type="button"
                className="hero-balance-panel__bell"
                aria-label="Notifications"
              >
                <Bell className="hero-balance-panel__bell-icon" strokeWidth={1.5} />
              </button>
            </header>

            <div className="hero-balance-panel__balance">
              <p className="hero-balance-panel__label">{balanceLabel}</p>
              <p className="hero-balance-panel__amount">
                {balanceAmount}{" "}
                <span className="hero-balance-panel__currency">{balanceCurrency}</span>
              </p>
            </div>

            <ul className="hero-balance-panel__actions">
              {BANKING_BALANCE_ACTIONS.map(({ label, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <li key={label} className="hero-balance-panel__action">
                    <button type="button" className="hero-balance-panel__action-btn">
                      <span className="hero-balance-panel__action-icon">
                        <Icon
                          className="hero-balance-panel__action-icon-svg"
                          strokeWidth={1.5}
                        />
                      </span>
                      <span className="hero-balance-panel__action-label">{label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </TiltLayer>
    </motion.div>
  );
}
