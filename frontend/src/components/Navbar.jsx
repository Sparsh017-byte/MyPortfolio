import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = `
    relative font-medium
    text-gray-700
    transition-all duration-300
    hover:text-indigo-500 hover:-translate-y-0.5
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-0 after:bg-indigo-500
    after:transition-all after:duration-300
    hover:after:w-full
  `;

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        px-6 md:px-16 lg:px-24 xl:px-32 py-4
        flex items-center justify-between
        border-b border-gray-300
        bg-white
        transition-colors duration-300
      "
    >
      {/* LEFT */}
      <h1 className="text-xl font-semibold text-gray-900">
        Sparsh <span className="text-indigo-500">Gumasta</span>
      </h1>

      {/* MOBILE MENU BUTTON */}
      <button
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden text-gray-900"
      >
        <svg width="22" height="15" viewBox="0 0 21 15" fill="none">
          <rect width="21" height="1.5" rx=".75" fill="currentColor" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="currentColor" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="currentColor" />
        </svg>
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
            absolute top-16 left-0 w-full
            bg-white
            border-t border-gray-200
            shadow-md sm:hidden
            flex flex-col gap-4 px-6 py-4 text-sm
          "
        >
          {["Projects", "Certifications", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      {/* DESKTOP MENU */}
      <div className="hidden sm:flex items-center gap-8">
        {["Projects", "Certifications", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={navLinkStyle}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
