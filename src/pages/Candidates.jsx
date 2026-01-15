import Container from "../components/Container";
import SEO from "../components/SEO";
import { site } from "../content/siteContent";

export default function Candidates() {
  return (
    <>
      <SEO
        title={site.seo.candidates.title}
        description={site.seo.candidates.description}
      />

      <section className="py-20">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            For candidates
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            We do not run an open candidate database. We do not accept speculative CV
            submissions.
          </p>

          <p className="mt-4 max-w-2xl text-slate-600">
            Candidates are approached directly for specific searches where their background is
            genuinely relevant.
          </p>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <Container>
          <div className="max-w-2xl rounded-xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-bold text-slate-900">What this means</h2>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-slate-400">→</span>
                If we contact you, there is a real role behind it
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400">→</span>
                We share context, not just job descriptions
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400">→</span>
                We are transparent about risks, expectations, and process
              </li>
            </ul>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            If you were referred to us by a client or contact, you may reply directly to
            the message you received.
          </p>
        </Container>
      </section>
    </>
  );
}
