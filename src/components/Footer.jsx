import { Link } from "react-router-dom";
import Container from "./Container";
import { site } from "../content/siteContent";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand + legal */}
          <div>
            <div className="text-sm font-semibold text-slate-900">{site.company}</div>
            <div className="mt-1 text-xs text-slate-500">{site.legal}</div>
            <address className="mt-4 text-xs not-italic text-slate-500">
              {site.address.slice(1).map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <div className="mt-3 space-y-1 text-sm text-slate-600">
              <div>
                <a href={`mailto:${site.email}`} className="hover:text-slate-900">
                  {site.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="hover:text-slate-900"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Legal</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link to="/privacy" className="text-slate-600 hover:text-slate-900">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-600 hover:text-slate-900">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © {year} {site.company}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
