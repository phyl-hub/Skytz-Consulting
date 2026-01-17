import { NavLink } from "react-router-dom";
import Container from "./Container";

const nav = [
  { to: "/hire", label: "Hire Talent" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/about", label: "About" },
  { to: "/candidates", label: "Candidates" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-20 items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-4">
          <img
  src="/brand/logo-primary-dark.png"
  alt="Skytz Consulting"
  className="h-11 md:h-12 w-auto"
  draggable="false"
/>

          <span className="hidden text-sm text-slate-500 md:inline">
            (Laurasia LLC)
          </span>
        </NavLink>

        {/* Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <NavLink
          to="/hire"
          className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Discuss a Search
        </NavLink>
      </Container>
    </header>
  );
}
