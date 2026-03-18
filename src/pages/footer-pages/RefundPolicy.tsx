import { motion } from "framer-motion";

const RefundPolicy = () => {
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
              Return & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-orange-500">
                Refund Policy
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 font-medium border-l-4 border-primary/30 pl-6">
              This policy outlines refund eligibility, conditions, and limitations for all services provided by Socio Bhaarat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* content areA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-5xl px-4 md:px-10 space-y-12 text-slate-700">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              1. Nature of Services
            </h2>
            <p className="leading-relaxed">
              Socio Bhaarat provides digital services including web development, design, and technical solutions.
              As these are customized and intangible services, returns are not applicable once work has commenced.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              2. No Refund After Work Begins
            </h2>
            <p className="leading-relaxed">
              Once a project has been initiated and resources have been allocated, no refunds will be issued.
              This includes design, development, consultation, or any partial work completed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              3. Advance Payments
            </h2>
            <p className="leading-relaxed">
              All advance payments are non-refundable. These payments secure project scheduling,
              resource allocation, and initial planning.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              4. Refund Eligibility (Limited Cases)
            </h2>
            <p className="leading-relaxed">
              Refunds may be considered only under the following conditions:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>No work has been started on the project</li>
              <li>Duplicate payment was made by mistake</li>
              <li>Project is canceled by Socio Bhaarat before initiation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              5. Project Delays
            </h2>
            <p className="leading-relaxed">
              Delays caused by the client (such as lack of content, approvals, or communication)
              do not qualify for refunds or cancellations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              6. Revisions Instead of Refunds
            </h2>
            <p className="leading-relaxed">
              We prioritize client satisfaction. Instead of refunds, we offer revisions within the agreed scope
              to ensure the final deliverable meets expectations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              7. Payment Disputes
            </h2>
            <p className="leading-relaxed">
              Any disputes regarding payments must be communicated within 7 days of transaction.
              After this period, payments will be considered final and non-disputable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              8. Policy Updates
            </h2>
            <p className="leading-relaxed">
              Socio Bhaarat reserves the right to modify this policy at any time.
              Continued use of our services indicates acceptance of updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              9. Contact Information
            </h2>
            <p className="leading-relaxed">
              For refund-related queries, please contact us through our official website.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default RefundPolicy;
