import Container from "../components/Container";
import SEO from "../components/SEO";
import { site } from "../content/siteContent";

export default function HireTalent() {
  return (
    <>
      <SEO title={site.seo.hire.title} description={site.seo.hire.description} />

      <section className="py-20">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Hire Sales Engineers & Technical Leaders
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            If you're hiring Sales Engineering or commercial leadership roles in an
            engineering context, we run the search and deliver a shortlist you can hire from.
          </p>

          {/* What we won't do - sets expectations, filters bad fits */}
          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="font-semibold text-amber-900">Not for everyone</h2>
            <p className="mt-2 text-sm text-amber-800">
              We don't do volume recruiting, contingent staffing, or roles outside our
              specialization. If you need 20 junior hires fast, we're not the right fit.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <h2 className="text-xl font-bold text-slate-900">Typical searches</h2>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-slate-400">→</span>
                  Sales Engineer / Application Engineer
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">→</span>
                  Head of Sales / VP Sales / Commercial Director
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">→</span>
                  International Sales (direct & channel)
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">→</span>
                  Business Unit leadership
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <h2 className="text-xl font-bold text-slate-900">What you get</h2>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <span className="text-slate-400">→</span>
                  Market mapping + direct outreach
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">→</span>
                  Structured qualification
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">→</span>
                  Risk notes early (comp, motivation, fit)
                </li>
                <li className="flex gap-3">
                  <span className="text-slate-400">→</span>
                  A shortlist built for decision-making
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Start a conversation</h2>
            <p className="mt-4 text-slate-600">
              No forms, no gatekeepers. Email or call directly.
            </p>

            <div className="mt-6 space-y-3">
              <div>
                <span className="text-sm text-slate-500">Email:</span>{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-slate-900 underline underline-offset-4"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <span className="text-sm text-slate-500">Phone:</span>{" "}
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="font-medium text-slate-900 underline underline-offset-4"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              For faster alignment, include: role scope, location, seniority, urgency, and
              compensation band.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
