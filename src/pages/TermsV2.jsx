import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Skytz Consulting';
  }, []);

  return (
    <section className="bg-slate-950 py-20 lg:py-28 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white">
            <p className="lead text-lg text-slate-300">
              Effective Date: January 1, 2024
            </p>

            <h2>1. Services</h2>
            <p>
              Skytz Consulting, a brand of Laurasia LLC, provides executive search 
              and recruitment services for technical and sales roles. Our services 
              are provided on a retained or contingent basis as agreed in individual 
              engagement letters.
            </p>

            <h2>2. Fees</h2>
            <p>
              Our fees are outlined in individual client agreements. Standard terms 
              include a percentage of the placed candidate's first-year compensation. 
              Payment terms are Net 30 unless otherwise agreed.
            </p>

            <h2>3. Guarantees</h2>
            <p>
              We offer a replacement guarantee for placed candidates who leave within 
              a specified period (typically 90 days). Specific terms are defined in 
              individual engagement agreements.
            </p>

            <h2>4. Candidate Ownership</h2>
            <p>
              Candidates introduced by Skytz Consulting remain associated with our 
              firm for a period of 12 months from introduction. Hiring such candidates 
              directly or through another agency will incur our standard fee.
            </p>

            <h2>5. Confidentiality</h2>
            <p>
              We treat all client and candidate information as confidential. 
              Information is shared only as necessary to facilitate the recruitment 
              process and with appropriate consent.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              Our liability is limited to the fees paid for the specific engagement. 
              We are not liable for indirect, consequential, or punitive damages.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of Wyoming, USA. 
              Any disputes will be resolved in the courts of Sheridan County, Wyoming.
            </p>

            <h2>8. Contact</h2>
            <p>
              <strong>Laurasia LLC (dba Skytz Consulting)</strong><br />
              1309 Coffeen Avenue STE 1200<br />
              Sheridan, WY 82801, USA<br />
              info@skytz-consulting.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
