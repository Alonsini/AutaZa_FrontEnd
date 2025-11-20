import React from "react";
import Text from "../atoms/Text";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <Text variant="h4" className="feature-title">
        {title}
      </Text>
      <Text variant="p" className="feature-description">
        {description}
      </Text>
    </div>
  );
}

export default FeatureCard;