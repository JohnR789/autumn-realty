import React from "react";

const logos = [
  {
    name: "Boston Globe",
    src: "/assets/press/boston-globe.png",
    alt: "Boston Globe",
    href: "#"
  },
  {
    name: "WSJ",
    src: "/assets/press/wsj.png",
    alt: "Wall Street Journal",
    href: "#"
  },
  {
    name: "Forbes",
    src: "/assets/press/forbes.png",
    alt: "Forbes",
    href: "#"
  },
  {
    name: "NY Times",
    src: "/assets/press/nytimes.png",
    alt: "New York Times",
    href: "#"
  }
];

const PressBar: React.FC = () => (
  <div className="flex items-center justify-center gap-10 flex-wrap">
    {logos.map((logo) => (
      <a key={logo.name} href={logo.href} className="opacity-70 hover:opacity-100 transition" target="_blank" rel="noopener noreferrer">
        <img src={logo.src} alt={logo.alt} className="h-10 md:h-14 w-auto" loading="lazy" />
      </a>
    ))}
  </div>
);

export default PressBar;
