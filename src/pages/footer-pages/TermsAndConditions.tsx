import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* hero section */}
      <section className="relative py-20 bg-[#fafafa] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:35px_35px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500">
                Conditions
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 font-medium border-l-4 border-primary/30 pl-6">
              These terms govern your use of Socio Bhaarat’s services, products, and website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* content area */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-10 space-y-12 text-slate-700">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing or using our website and services, you agree to be bound by these Terms and Conditions.
              If you do not agree, you must not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              2. Services
            </h2>
            <p className="leading-relaxed">
              Socio Bhaarat provides web development, digital solutions, and related technical services.
              The exact scope, deliverables, and timelines will be defined in a separate agreement or proposal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to provide accurate and complete information.</li>
              <li>You will not use our services for illegal or fraudulent purposes.</li>
              <li>You are responsible for maintaining the confidentiality of your credentials.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              4. Payments & Pricing
            </h2>
            <p className="leading-relaxed">
              All services are chargeable unless explicitly stated otherwise. Payment terms, including milestones,
              advance payments, and deadlines, will be defined in project agreements.
              Failure to complete payments may result in suspension or termination of services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              5. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              Upon full payment, the client will receive ownership of the final deliverables unless otherwise agreed.
              Socio Bhaarat retains the right to showcase completed work in portfolios and marketing materials.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
              We do not guarantee uninterrupted or error-free operation of digital platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              7. Third-Party Services
            </h2>
            <p className="leading-relaxed">
              Our services may include integrations with third-party tools or platforms.
              We are not responsible for the performance, policies, or failures of such third-party services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              8. Termination
            </h2>
            <p className="leading-relaxed">
              We reserve the right to terminate or suspend services at any time due to violation of terms,
              non-payment, or misuse of services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              9. Modifications
            </h2>
            <p className="leading-relaxed">
              We may update these Terms at any time. Continued use of the website constitutes acceptance of updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              10. Contact Information
            </h2>
            <p className="leading-relaxed">
              For any questions regarding these Terms, please contact us through the official website.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default TermsAndConditions;
