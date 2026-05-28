import Link from "next/link";
import { FooterLinksColumn } from "@/components/molecules/FooterLinksColumn";
import { FooterOfficeColumn } from "@/components/molecules/FooterOfficeColumn";
import { BANKING_FOOTER } from "@/constants/banking-footer";
import "@/styles/banking-footer.css";

export function BankingFooter() {
  const { logo, offices, columns, copyright } = BANKING_FOOTER;

  return (
    <footer id={BANKING_FOOTER.id} className="banking-footer-root">
      <div className="banking-footer-glow" aria-hidden />

      <div className="banking-footer-shell">
        <div className="banking-footer-main">
          <div className="banking-footer-brand">
            <Link href="/" className="banking-footer-logo" aria-label="N7 home">
              {logo}
            </Link>
          </div>

          <div className="banking-footer-content">
            <div className="banking-footer-grid banking-footer-grid--offices">
              {offices.map((office) => (
                <FooterOfficeColumn
                  key={office.id}
                  city={office.city}
                  lines={office.lines}
                />
              ))}
            </div>

            <div className="banking-footer-grid banking-footer-grid--links">
              {columns.map((column) => (
                <FooterLinksColumn
                  key={column.id}
                  title={column.title}
                  links={column.links}
                />
              ))}
            </div>

            <p className="banking-footer-legal">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
