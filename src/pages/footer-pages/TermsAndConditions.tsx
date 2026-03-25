import { motion } from "framer-motion";
import { Shield, ChevronRight, Mail, Phone, Globe } from "lucide-react";

const sections = [
  {
    id: "1",
    title: "Acceptance of Terms",
    content: [
      {
        type: "text",
        text: 'By engaging Socio Bhaarat\'s services, visiting our website, signing a quotation, or making a payment, you ("Client") agree to be bound by these Terms & Conditions in full. If you do not agree with any part of these terms, you must not proceed with our services.',
      },
    ],
  },
  {
    id: "2",
    title: "About Us",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat provides professional digital marketing solutions that drive real results, specializing in social media marketing, graphic design, and performance marketing. We operate under Bhaarat Reliable Ventures Pvt. Ltd., a duly registered MSME under the Government of India, and serve clients across Jabalpur, Bhopal, and across India.",
      },
    ],
  },
  {
    id: "3",
    title: "Services Offered",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat provides the following services, which shall be governed by these Terms:",
      },
      {
        type: "list",
        items: [
          "Social Media Management (Instagram, Facebook, LinkedIn, and other platforms)",
          "Meta Ads & Google Ads Campaign Management",
          "Graphic Design & Creative Content Production",
          "Video Production & Reels",
          "Website Design & Development",
          "Search Engine Optimization (SEO)",
          "Content Marketing & Copywriting",
          "Influencer Marketing & Coordination",
          "Event Digital Marketing & Coverage",
          "IT Solutions & Business Automation",
        ],
      },
      {
        type: "text",
        text: "The exact scope of work for each client shall be governed by the mutually agreed Quotation / Service Agreement issued by Socio Bhaarat.",
      },
    ],
  },
  {
    id: "4",
    title: "Payment Terms",
    content: [
      {
        type: "subsection",
        heading: "4.1 Advance Payment Policy",
        text: "Socio Bhaarat operates on a 100% advance payment model. Work commences only after receipt of the full payment or agreed advance amount as stated in the quotation.",
      },
      {
        type: "subsection",
        heading: "4.2 Payment Methods",
        text: "All payments must be made via digital/UPI/bank transfer only. No cash payments are accepted or acknowledged. All transactions are traceable and documented.",
      },
      {
        type: "subsection",
        heading: "4.3 Monthly Services",
        text: "For ongoing monthly retainer services, payment is due at the beginning of each month before the month's work commences.",
      },
      {
        type: "subsection",
        heading: "4.4 Delayed Payments",
        text: "Delayed payments beyond the due date will attract interest as per the provisions of the MSMED Act, 2006 (Section 16) - at three times the RBI Bank Rate, compounded with monthly rests.",
      },
      {
        type: "subsection",
        heading: "4.5 Additional Work",
        text: "Any work requested beyond the agreed scope in the quotation shall be charged additionally and billed separately.",
      },
      {
        type: "subsection",
        heading: "4.6 Ad Budget",
        text: "The advertising budget (Meta Ads, Google Ads, or any paid platform) is not included in the agency fee and must be provided separately by the client. If Socio Bhaarat advances ad spend on behalf of the client, the client must reimburse the exact amount immediately upon demand.",
      },
    ],
  },
  {
    id: "5",
    title: "Refund Policy",
    content: [
      {
        type: "subsection",
        heading: "5.1 No Refund on Services Rendered",
        text: "Once services have been rendered, no refund shall be issued for the work completed.",
      },
      {
        type: "subsection",
        heading: "5.2 Partial Refund Consideration",
        text: "If a project is cancelled before commencement, a refund may be considered after deducting any incurred costs, administrative charges, and processing fees. This is at the sole discretion of Socio Bhaarat.",
      },
      {
        type: "subsection",
        heading: "5.3 Non-Refundable Situations",
        text: "No refund shall be issued if:",
      },
      {
        type: "list",
        items: [
          "The client fails to provide necessary approvals, content, credentials, or inputs in a timely manner",
          "Work was delayed due to reasons on the client's side",
          "The client unilaterally discontinues the engagement mid-month",
          "Ad spend has already been deployed to third-party platforms (Meta, Google, etc.)",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Client Responsibilities",
    content: [
      {
        type: "text",
        text: "The client agrees to:",
      },
      {
        type: "list",
        items: [
          "Provide all necessary access, credentials, brand assets, and information required to execute the services",
          "Review and approve content in a timely manner - delayed approvals may affect deliverable timelines",
          "Ensure timely payment as per the agreed schedule",
          "Appoint a single point of contact for communication and approvals",
          "Not share Socio Bhaarat's proprietary strategies, templates, or content plans with third parties",
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Content Approval & Publishing",
    content: [
      {
        type: "list",
        items: [
          "All content (posts, videos, graphics, ads) shall be shared with the client for approval before publishing, unless the client has granted pre-approval for scheduled posting",
          "Once the client approves content, Socio Bhaarat is authorized to publish it on the designated platforms",
          "The client bears full responsibility for ensuring that approved content does not violate any third-party rights, platform policies, or applicable laws",
          "Socio Bhaarat shall not be liable for any consequences arising from client-approved content",
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Intellectual Property",
    content: [
      {
        type: "subsection",
        heading: "8.1 Ownership of Deliverables",
        text: "Upon full and final payment, the client shall own all original creative content produced exclusively for them under the engagement.",
      },
      {
        type: "subsection",
        heading: "8.2 Agency Rights",
        text: "Socio Bhaarat reserves the right to use client work as part of its portfolio, case studies, or promotional material, unless the client expressly requests confidentiality in writing.",
      },
      {
        type: "subsection",
        heading: "8.3 Third-Party Assets",
        text: "The client is responsible for obtaining licenses for any third-party content, fonts, music, images, or other assets they request to be used in their deliverables.",
      },
    ],
  },
  {
    id: "9",
    title: "Advertising Performance Disclaimer",
    content: [
      {
        type: "list",
        items: [
          "Specific results such as leads, conversions, sales, or ROI cannot be guaranteed, as ad performance depends on multiple external factors including platform algorithms, market conditions, competition, and budget",
          "Socio Bhaarat is not responsible for changes in Meta, Google, or any platform's policies that may affect campaign performance",
          "Ad spend is entirely at the client's risk - Socio Bhaarat will optimize campaigns in good faith but does not guarantee specific outcomes",
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Confidentiality",
    content: [
      {
        type: "text",
        text: "Both parties agree to maintain the confidentiality of all proprietary information, business strategies, pricing, and data shared during the engagement. Neither party shall disclose such information to any third party without prior written consent.",
      },
    ],
  },
  {
    id: "11",
    title: "Termination of Services",
    content: [
      {
        type: "subsection",
        heading: "11.1 By Client",
        text: "The client may terminate services by providing a minimum of 15 days' written notice. All dues up to the termination date must be settled in full before the engagement is closed.",
      },
      {
        type: "subsection",
        heading: "11.2 By Socio Bhaarat",
        text: "Socio Bhaarat reserves the right to suspend or terminate services immediately in the event of:",
      },
      {
        type: "list",
        items: [
          "Non-payment of dues beyond the due date",
          "Abusive, threatening, or unlawful conduct by the client",
          "Instructions that violate platform policies or applicable law",
        ],
      },
      {
        type: "subsection",
        heading: "11.3 Effect of Termination",
        text: "Upon termination, all pending invoices become immediately due and payable. Socio Bhaarat will transfer all client-owned assets and access credentials upon clearance of all dues.",
      },
    ],
  },
  {
    id: "12",
    title: "Limitation of Liability",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat's total liability to the client under any circumstance shall not exceed the total fees paid by the client for the specific service in dispute. Socio Bhaarat shall not be liable for any indirect, consequential, or incidental losses including loss of business, profits, or reputation arising out of the services rendered.",
      },
    ],
  },
  {
    id: "13",
    title: "Governing Law & Dispute Resolution",
    content: [
      {
        type: "text",
        text: "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall first be attempted to be resolved through mutual negotiation. If unresolved, disputes shall be subject to the jurisdiction of courts in Jabalpur, Madhya Pradesh. As a registered MSME, Socio Bhaarat also reserves the right to file a complaint before the MSME Facilitation Council under the MSMED Act, 2006.",
      },
    ],
  },
  {
    id: "14",
    title: "Amendments",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat reserves the right to update these Terms & Conditions at any time. Clients will be notified of significant changes via email or the website. Continued engagement after an update constitutes acceptance of the revised terms.",
      },
    ],
  },
  {
    id: "15",
    title: "Contact Us",
    content: [
      {
        type: "text",
        text: "For any queries regarding these Terms & Conditions, please reach out to:",
      },
      {
        type: "contact",
      },
    ],
  },
];

function renderContent(block: any, idx: number) {
  switch (block.type) {
    case "text":
      return (
        <p key={idx} className="text-slate-700 leading-relaxed text-[15px] font-medium">
          {block.text}
        </p>
      );
    case "subsection":
      return (
        <div key={idx} className="space-y-1.5">
          <p className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">{block.heading}</p>
          <p className="text-slate-600 leading-relaxed text-[15px] font-medium">{block.text}</p>
        </div>
      );
    case "list":
      return (
        <ul key={idx} className="space-y-2">
          {block.items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-[15px]">
              <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="leading-relaxed font-medium">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50 p-5 space-y-3">
          <p className="font-semibold text-slate-800 text-sm">Socio Bhaarat - Bhaarat Reliable Ventures Pvt. Ltd.</p>
          <p className="text-slate-500 text-sm font-medium">Jabalpur, Madhya Pradesh - 482001, India</p>
          <div className="flex flex-col gap-2">
            <a href="mailto:official@sociobhaarat.com" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium">
              <Mail className="w-4 h-4" /> official@sociobhaarat.com
            </a>
            <a href="tel:+919589581364" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors font-medium">
              <Phone className="w-4 h-4" /> +91 95895 81364 | +91 94074 48837
            </a>
            <a href="https://www.sociobhaarat.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors font-medium">
              <Globe className="w-4 h-4" /> www.sociobhaarat.com
            </a>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">

      {/* ── Hero ── */}
      <section className="relative py-16 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:35px_35px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full animate-pulse" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase shadow-sm">
              <Shield className="w-3 h-3" /> Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-tight tracking-tighter">
              Terms & Conditions
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-700 font-medium">
              <span><span className="font-semibold text-slate-700">Effective Date:</span> 1st January 2026</span>
              <span><span className="font-semibold text-slate-700">Last Updated:</span> 1st January 2026</span>
            </div>

            {/* Company info bar */}
            <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
              <div><span className="font-semibold text-slate-700">Company:</span> Socio Bhaarat - Bhaarat Reliable Ventures Pvt. Ltd.</div>
              <div><span className="font-semibold text-slate-700">CIN:</span> U96020MP2023PTC065142</div>
              <div><span className="font-semibold text-slate-700">Registered Office:</span> Jabalpur, Madhya Pradesh - 482001, India</div>
              <div>
                <a href="mailto:official@sociobhaarat.com" className="font-semibold text-primary hover:underline">official@sociobhaarat.com</a>
              </div>
              <div>
                <a href="tel:+919589581364" className="hover:text-primary transition-colors">+91 95895 81364</a>
                {" | "}
                <a href="tel:+919407448837" className="hover:text-primary transition-colors">+91 94074 48837</a>
              </div>
              <div>
                <a href="https://www.sociobhaarat.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.sociobhaarat.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto max-w-4xl">

          {/* Mobile Jump-to Selector (Only visible on mobile) */}
          <div className="lg:hidden mb-8">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Jump to section</label>
            <select
              onChange={(e) => document.getElementById(`section-${e.target.value}`)?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-primary/20"
            >
              {sections.map((s) => (
                <option key={s.id} value={s.id}>{s.id}. {s.title}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* Sticky TOC (Hidden on mobile) */}
            <aside className="hidden lg:block w-56 shrink-0 sticky top-24">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">Contents</p>
              <nav className="flex flex-col gap-0.5">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#section-${s.id}`}
                    className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] text-slate-500 hover:text-primary hover:bg-primary/5 transition-all duration-150 font-medium"
                  >
                    <span className="text-[10px] font-bold text-slate-500 group-hover:text-primary/60 w-5 shrink-0">{s.id}.</span>
                    <span className="truncate text-slate-700">{s.title}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Sections */}
            <div className="flex-1 space-y-4 md:space-y-6 w-full">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  id={`section-${section.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.05 * (i % 5) }}
                  className="bg-white border border-slate-100 rounded-2xl p-5 md:p-8 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 scroll-mt-24"
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-4 md:mb-5">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[11px] font-bold text-primary shrink-0">
                      {section.id}
                    </span>
                    <h2 className="text-base md:text-lg font-semibold text-slate-800">{section.title}</h2>
                  </div>

                  {/* Section content - Responsive padding */}
                  <div className="space-y-4 pl-0 md:pl-11 text-sm md:text-base leading-relaxed text-slate-600">
                    {section.content.map((block, idx) => renderContent(block, idx))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <div className="border-t border-slate-100 bg-white py-10 px-6 text-center">
        <p className="text-[11px] md:text-xs text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
          These Terms & Conditions were last updated on <span className="font-semibold text-slate-900">1st January 2026</span> and are effective immediately. By continuing to use our services, you acknowledge that you have read, understood, and agreed to these terms.
        </p>
      </div>

    </main>
  );
}
