import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { RefreshCw, ChevronRight, Mail, Phone, Globe } from "lucide-react";

const sections = [
  {
    id: "1",
    title: "Overview",
    content: [
      {
        type: "text",
        text: 'This Refund & Return Policy ("Policy") outlines the terms under which Socio Bhaarat — Bhaarat Reliable Ventures Pvt. Ltd. ("we", "us", "our") processes refund requests from clients who have engaged our digital marketing and IT services.',
      },
      {
        type: "text",
        text: "By making a payment to Socio Bhaarat, you (Client) acknowledge that you have read, understood, and agreed to this Policy in its entirety. This Policy must be read in conjunction with our Terms & Conditions.",
      },
    ],
  },
  {
    id: "2",
    title: "Nature of Our Services",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat provides professional digital services including but not limited to:",
      },
      {
        type: "list",
        items: [
          "Social Media Management & Content Creation",
          "Meta Ads & Google Ads Campaign Management",
          "Graphic Design & Creative Production",
          "Website Design & Development",
          "Search Engine Optimization (SEO)",
          "Video Production & Reels",
          "Content Marketing & Copywriting",
          "WhatsApp Business API & Marketing",
          "Performance Marketing",
          "IT Solutions & Business Automation",
        ],
      },
      {
        type: "text",
        text: "All services offered by Socio Bhaarat are digital, intangible, and time-bound in nature. Once work has commenced or been delivered, it cannot be returned. Accordingly, our refund policy reflects the nature of the services provided.",
      },
    ],
  },
  {
    id: "3",
    title: "Advance Payment Policy",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat operates on a 100% advance payment model. Work commences only after receipt of the full payment or agreed advance amount as mentioned in the quotation or service agreement.",
      },
      {
        type: "text",
        text: "By making a payment, the client confirms their intent to proceed with the services and acknowledges that the payment is subject to the terms of this Refund Policy.",
      },
    ],
  },
  {
    id: "4",
    title: "No Refund on Services Rendered",
    content: [
      {
        type: "text",
        text: "Once services have commenced or been delivered — either in full or in part — no refund shall be issued for the work completed. This includes but is not limited to:",
      },
      {
        type: "list",
        items: [
          "Social media posts, graphics, or content that have been created or delivered",
          "Ad campaigns that have been set up, launched, or are actively running",
          "Website pages, designs, or code that have been developed or handed over",
          "SEO work, audits, or strategies that have been executed",
          "Video edits, reels, or creative content that have been produced",
          "Consultations, strategy sessions, or advisory services that have been rendered",
          "Any work delivered in digital format via email, WhatsApp, or shared drive",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Cancellation Before Commencement",
    content: [
      {
        type: "text",
        text: "If a client wishes to cancel a project before any work has commenced, a refund request may be considered subject to the following conditions:",
      },
      {
        type: "list",
        items: [
          "The cancellation request must be submitted in writing to official@sociobhaarat.com within 48 hours of making the payment",
          "No work, planning, research, or resource allocation should have been initiated by our team",
          "Administrative and processing charges may be deducted from the refund amount",
          "The decision to grant a refund in such cases is at the sole discretion of Socio Bhaarat",
        ],
      },
      {
        type: "text",
        text: "Requests received after 48 hours of payment or after work has begun will not be eligible for a refund under this clause.",
      },
    ],
  },
  {
    id: "6",
    title: "Partial Refund Consideration",
    content: [
      {
        type: "text",
        text: "In exceptional circumstances where a project is cancelled mid-way due to reasons attributable solely to Socio Bhaarat, a partial refund may be considered for the undelivered portion of work. This will be calculated on a pro-rata basis after deducting:",
      },
      {
        type: "list",
        items: [
          "Cost of work already completed or in progress",
          "Administrative and operational charges",
          "Any third-party costs incurred on behalf of the client",
          "Processing fees applicable to the payment method used",
        ],
      },
      {
        type: "text",
        text: "All partial refund decisions are at the sole discretion of Socio Bhaarat and will be communicated in writing.",
      },
    ],
  },
  {
    id: "7",
    title: "Non-Refundable Situations",
    content: [
      {
        type: "text",
        text: "No refund shall be issued under any of the following circumstances:",
      },
      {
        type: "list",
        items: [
          "The client fails to provide necessary inputs, approvals, credentials, or brand assets in a timely manner, causing delays",
          "The client unilaterally discontinues the engagement mid-month or mid-project without prior written notice",
          "The client is dissatisfied with results that are influenced by external factors such as platform algorithms, market conditions, audience behaviour, or competition",
          "Ad spend has already been deployed to third-party platforms (Meta, Google, etc.) — ad budgets are entirely non-refundable once spent",
          "The client has approved content, designs, or deliverables that have subsequently been published",
          "Delays or dissatisfaction arising from the client's failure to respond to communications or approve work on time",
          "The client changes business direction, discontinues the product/service being marketed, or no longer requires the services",
          "Services have been partially or fully delivered as per the agreed scope",
          "The engagement is terminated due to the client's breach of our Terms & Conditions",
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Ad Spend — Strictly Non-Refundable",
    content: [
      {
        type: "text",
        text: "The advertising budget (Meta Ads, Google Ads, or any paid platform) is separate from the agency service fee and is subject to its own terms:",
      },
      {
        type: "list",
        items: [
          "Ad spend deployed to any third-party platform is strictly non-refundable under any circumstances",
          "Socio Bhaarat does not guarantee specific results from ad campaigns — performance depends on external factors including platform algorithms, market conditions, competition, and budget",
          "If Socio Bhaarat has advanced ad spend on behalf of the client, the client must reimburse the exact amount immediately upon demand, regardless of campaign performance",
          "Any refunds from ad platforms (e.g. Google Ads credits) will be passed on to the client in full",
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Performance Dissatisfaction",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat manages all campaigns and projects with the highest degree of professional care. However, digital marketing results are subject to numerous external variables and cannot be guaranteed. Dissatisfaction with:",
      },
      {
        type: "list",
        items: [
          "Number of leads, conversions, or sales generated",
          "Ad performance metrics such as reach, impressions, or ROAS",
          "Organic growth on social media platforms",
          "Search engine rankings from SEO efforts",
          "Website traffic or engagement levels",
        ],
      },
      {
        type: "text",
        text: "...shall not constitute grounds for a refund. Socio Bhaarat commits to delivering services as per the agreed scope — results cannot be contractually guaranteed.",
      },
    ],
  },
  {
    id: "10",
    title: "Revision & Dispute Resolution",
    content: [
      {
        type: "text",
        text: "Before initiating a refund request, clients are encouraged to first raise a concern or request revisions as per the agreed number of revision rounds in the service agreement. Socio Bhaarat is committed to resolving all client concerns fairly and professionally.",
      },
      {
        type: "text",
        text: "If you are dissatisfied with any aspect of our service delivery, please contact us at official@sociobhaarat.com before escalating to a refund request. We will make every reasonable effort to address your concern within 5 working days.",
      },
    ],
  },
  {
    id: "11",
    title: "Refund Request Process",
    content: [
      {
        type: "text",
        text: "If you believe you are eligible for a refund under this Policy, please follow the process below:",
      },
      {
        type: "list",
        items: [
          "Submit a written refund request to official@sociobhaarat.com with the subject line: \"Refund Request — [Your Name / Business Name]\"",
          "Include your invoice number, payment date, payment amount, and reason for the request",
          "Socio Bhaarat will acknowledge your request within 48 hours",
          "We will review the request and communicate our decision within 10 working days",
          "If approved, refunds will be processed to the original payment source within 7–10 working days",
        ],
      },
    ],
  },
  {
    id: "12",
    title: "Refund Method",
    content: [
      {
        type: "text",
        text: "Approved refunds will be processed via the same payment method used for the original transaction (UPI, bank transfer, etc.). No cash refunds will be issued under any circumstances.",
      },
      {
        type: "text",
        text: "Socio Bhaarat is not responsible for any delays caused by banking systems, UPI platforms, or payment gateways once a refund has been initiated from our end.",
      },
    ],
  },
  {
    id: "13",
    title: "Governing Law & Jurisdiction",
    content: [
      {
        type: "text",
        text: "This Refund & Return Policy is governed by the laws of India. Any disputes arising out of or related to this Policy shall be subject to the exclusive jurisdiction of the courts in Jabalpur, Madhya Pradesh.",
      },
      {
        type: "text",
        text: "As a registered MSME under the MSMED Act, 2006, Socio Bhaarat also reserves the right to seek redressal through the MSME Facilitation Council for any payment disputes.",
      },
    ],
  },
  {
    id: "14",
    title: "Amendments to This Policy",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat reserves the right to modify this Refund & Return Policy at any time. Any changes will be published on our website with an updated effective date. Continued engagement with our services after such changes constitutes acceptance of the revised Policy.",
      },
    ],
  },
  {
    id: "15",
    title: "Contact Us",
    content: [
      {
        type: "text",
        text: "For any queries related to this Refund & Return Policy, or to submit a refund request, please contact:",
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
        <p key={idx} className="text-slate-600 leading-relaxed text-[15px] font-medium">
          {block.text}
        </p>
      );
    case "subsection":
      return (
        <div key={idx} className="space-y-1.5">
          <p className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">{block.heading}</p>
          {block.text && (
            <p className="text-slate-600 leading-relaxed text-[15px] font-medium">{block.text}</p>
          )}
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
          <p className="font-semibold text-slate-800 text-sm">Socio Bhaarat — Bhaarat Reliable Ventures Pvt. Ltd.</p>
          <p className="text-slate-500 text-sm font-medium ">Jabalpur, Madhya Pradesh — 482001, India</p>
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

export default function RefundPolicyPage() {
  return (
    <>
      <SEO
        title="Refund & Return Policy | Socio Bhaarat"
        description="Understand our refund and return policies, including eligibility, timelines, and conditions for service-related refunds."
        keywords="refund policy, return policy, cancellation policy, service refund terms, refund policy in jabalpur"
        url="/refunds"
      />
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
                <RefreshCw className="w-3 h-3" /> Legal
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-tight tracking-tighter">
                Refund & Return Policy
              </h1>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-700 font-medium">
                <span><span className="font-semibold text-slate-700">Effective Date:</span> 1st January 2026</span>
                <span><span className="font-semibold text-slate-700">Last Updated:</span> 1st January 2026</span>
              </div>

              {/* Company info bar */}
              <div className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-medium">
                <div><span className="font-semibold text-slate-700">Company:</span> Socio Bhaarat — Bhaarat Reliable Ventures Pvt. Ltd.</div>
                <div><span className="font-semibold text-slate-700">CIN:</span> U96020MP2023PTC065142</div>
                <div><span className="font-semibold text-slate-700">Registered Office:</span> Jabalpur, Madhya Pradesh — 482001, India</div>
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

            {/* Mobile Navigation Dropdown */}
            <div className="lg:hidden mb-8">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block px-1">Quick Jump To</label>
              <select
                onChange={(e) => {
                  const element = document.getElementById(`section-${e.target.value}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full p-3.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm outline-none focus:ring-2 focus:ring-primary/20 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
              >
                {sections.map((s) => (
                  <option key={s.id} value={s.id}>{s.id}. {s.title}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-start">

              {/* Sticky TOC (Desktop) */}
              <aside className="hidden lg:block w-56 shrink-0 sticky top-24">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-1">Contents</p>
                <nav className="flex flex-col gap-0.5">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#section-${s.id}`}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] text-slate-700 hover:text-primary hover:bg-primary/5 transition-all duration-150 font-medium"
                    >
                      <span className="text-[10px] font-bold text-slate-500 group-hover:text-primary/60 w-5 shrink-0">{s.id}.</span>
                      <span className="truncate font-medium">{s.title}</span>
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
                    <div className="flex items-center gap-3 mb-4 md:mb-5">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[11px] font-bold text-primary shrink-0">
                        {section.id}
                      </span>
                      <h2 className="text-base md:text-lg font-semibold text-slate-800">{section.title}</h2>
                    </div>

                    {/* Section content - pl-0 on mobile for space, pl-11 on desktop */}
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
          <p className="text-[11px] md:text-xs text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
            This Refund & Return Policy was last updated on <span className="font-semibold text-slate-900">1st January 2026</span>. By making a payment to Socio Bhaarat, you acknowledge that you have read and agreed to this policy.
          </p>
        </div>

      </main>
    </>

  );
}