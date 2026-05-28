import type { FooterOfficeColumnProps } from "./FooterOfficeColumn.props";

export function FooterOfficeColumn({ city, lines }: FooterOfficeColumnProps) {
  return (
    <div className="banking-footer-col banking-footer-col--office">
      <h3 className="banking-footer-col-title">{city}</h3>
      <div className="banking-footer-address">
        {lines.map((line, index) => (
          <p key={`${city}-${index}`} className="banking-footer-body-line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
