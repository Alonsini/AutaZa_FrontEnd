import React from "react";
import Text from "../atoms/Text";
import FeatureCard from "../molecules/FeatureCard";

const FEATURES = [
  {
    title: "Seguridad Avanzada",
    description:
      "Tecnología de última generación con sistemas de asistencia al conductor.",
    icon: "🛡️",
  },
  {
    title: "Rendimiento Eléctrico",
    description:
      "Motores de alto rendimiento con carga rápida y gran autonomía.",
    icon: "⚡",
  },
  {
    title: "Calidad Premium",
    description:
      "Materiales de primera categoría y acabados en cada detalle.",
    icon: "🏅",
  },
  {
    title: "Soporte 24/7",
    description:
      "Asistencia personalizada y mantenimiento exclusivo para tu tranquilidad.",
    icon: "🎧",
  },
];

function FeaturesSection() {
  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--lx-bg-soft)" }}
    >
      <div className="lx-container">
        <Text
          variant="span"
          className="section-subtitle"
          style={{ textTransform: "uppercase", color: "var(--lx-gold)" }}
        >
          Por qué elegirnos
        </Text>
        <Text variant="h2" className="section-title">
          Excelencia en Cada Detalle
        </Text>
        <Text variant="p" className="section-subtitle">
          Nos comprometemos a ofrecer la mejor experiencia de conducción con
          tecnología innovadora y servicio excepcional.
        </Text>

        <div className="features-grid">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;