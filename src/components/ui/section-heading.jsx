export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignmentClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`section-heading-shell ${alignmentClass}`}>
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="section-heading-line" />
        <p className="section-eyebrow">{eyebrow}</p>
      </div>
      <h2 className="section-title">{title}</h2>
      <p className={`section-copy ${align === "center" ? "mx-auto" : ""}`}>{description}</p>
    </div>
  );
}
