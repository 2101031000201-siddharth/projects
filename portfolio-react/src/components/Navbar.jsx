import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a14]/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold text-white">
          <span className="gradient-text">SR</span> Siddharth Rathod
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/resume.pdf"
          className="hidden md:inline-block gradient-bg text-white text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition"
        >
          Download Resume
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-300">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
