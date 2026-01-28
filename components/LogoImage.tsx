
import React from 'react';

// Using the provided logo image as a base64 encoded string for immediate availability
const LOGO_BASE64 = "https://i.ibb.co/LzrV59F6/logo.png"; // Placeholder for the provided image link or base64

export const Logo: React.FC<{ className?: string, size?: number }> = ({ className = "", size = 32 }) => {
  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden rounded-sm bg-white border border-slate-100 ${className}`}
      style={{ width: size, height: size }}
    >
      <img 
        src="https://imgpile.com/images/ChjL9W.png" 
        alt="SkillSphere Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};
