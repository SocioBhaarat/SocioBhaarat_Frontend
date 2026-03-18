import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500">
                Policy
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 font-medium border-l-4 border-primary/30 pl-6">
              This policy explains how Socio Bhaarat collects, uses, and protects your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* content area */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-10 space-y-12 text-slate-700">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="leading-relaxed">
              We may collect personal information such as your name, email address, phone number,
              and business details when you interact with our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services</li>
              <li>To communicate with you regarding projects or inquiries</li>
              <li>To send updates, offers, or relevant information</li>
              <li>To maintain security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              3. Cookies & Tracking Technologies
            </h2>
            <p className="leading-relaxed">
              We may use cookies and similar technologies to enhance user experience,
              analyze website traffic, and improve our platform performance.
              You can control cookie settings through your browser.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              4. Data Sharing
            </h2>
            <p className="leading-relaxed">
              We do not sell your personal data. However, we may share information with trusted
              third-party service providers (such as hosting, analytics, or payment services)
              to operate our business efficiently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              5. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your data
              from unauthorized access, loss, or misuse. However, no system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              6. Your Rights
            </h2>
            <p className="leading-relaxed">
              You have the right to access, update, or request deletion of your personal data.
              You may contact us to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              7. Third-Party Links
            </h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites.
              We are not responsible for their privacy practices or content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              8. Policy Updates
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time.
              Continued use of our website means you accept the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              9. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions regarding this Privacy Policy,
              please contact us through our official website.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
