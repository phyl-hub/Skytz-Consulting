import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Skytz Consulting';
  }, []);

  return (
    <section className="bg-slate-950 py-20 lg:py-28 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white">
            <p className="lead text-lg text-slate-300">
              Effective Date: January 1, 2024
            </p>
            
            <p>
              Skytz Consulting ("we", "us", "our"), a brand of Laurasia LLC, 
              is committed to protecting your privacy. This policy explains how we 
              collect, use, and safeguard your personal information.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Name, email address, phone number when you contact us</li>
              <li>Professional information (resume, LinkedIn profile) when you apply for roles</li>
              <li>Technical data (IP address, browser type) through website analytics</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To provide recruitment services and match candidates with opportunities</li>
              <li>To communicate about roles, services, and industry insights</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>
              We share candidate information with potential employers only with your 
              explicit consent. We do not sell personal data to third parties.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              We retain personal data for as long as necessary to provide our services 
              or as required by law. You may request deletion at any time.
            </p>

            <h2>5. Your Rights (GDPR)</h2>
            <p>If you are in the EU/EEA, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>

            <h2>6. Contact</h2>
            <p>
              For privacy inquiries or to exercise your rights, contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@skytz-consulting.com<br />
              <strong>Address:</strong> 1309 Coffeen Avenue STE 1200, Sheridan, WY 82801, USA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
