"use client";

import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Lock, ChevronRight, Mail, Phone, Globe, User } from "lucide-react";

const sections = [
  {
    id: "1",
    title: "Introduction",
    content: [
      {
        type: "text",
        text: 'Socio Bhaarat - Bhaarat Reliable Ventures Pvt. Ltd. ("we", "us", "our") is committed to protecting and respecting the privacy of every individual who visits our website, enquires about our services, or engages with us as a client.',
      },
      {
        type: "text",
        text: "This Privacy Policy explains how we collect, use, store, protect, and share your personal information when you interact with us through our website (www.sociobhaarat.com), social media platforms, email, phone, or any other channel.",
      },
      {
        type: "text",
        text: "By using our website or engaging our services, you consent to the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    id: "2",
    title: "Information We Collect",
    content: [
      {
        type: "text",
        text: "We may collect the following categories of personal and business information:",
      },
      {
        type: "subsection",
        heading: "2.1 Information You Provide to Us",
      },
      {
        type: "list",
        items: [
          "Full name and designation",
          "Business name and address",
          "Email address and phone number",
          "WhatsApp number",
          "Payment details (UPI IDs, transaction references - no card data is stored by us)",
          "Social media account credentials and access shared for service delivery",
          "Content, brand assets, logos, and media shared for project execution",
          "Any other information provided via contact forms, emails, calls, or WhatsApp",
        ],
      },
      {
        type: "subsection",
        heading: "2.2 Information We Collect Automatically",
        text: "When you visit our website, we may automatically collect:",
      },
      {
        type: "list",
        items: [
          "IP address and browser type",
          "Device type and operating system",
          "Pages visited and time spent on the website",
          "Referring URLs and geographic location data (approximate)",
          "Cookies and similar tracking technologies",
        ],
      },
      {
        type: "subsection",
        heading: "2.3 Information from Third-Party Platforms",
        text: "When we manage your social media or advertising accounts, we may access analytics, audience data, ad performance reports, and account insights from platforms such as Meta (Facebook/Instagram), Google, and others. This data is used solely for service delivery and performance reporting.",
      },
    ],
  },
  {
    id: "3",
    title: "How We Use Your Information",
    content: [
      {
        type: "text",
        text: "We use the information we collect for the following purposes:",
      },
      {
        type: "list",
        items: [
          "To provide, manage, and improve our digital marketing and IT services",
          "To communicate with you regarding your project, invoices, approvals, and deliverables",
          "To process payments and maintain financial records",
          "To send service-related updates, proposals, and quotations",
          "To send promotional communications about our services (you may opt out at any time)",
          "To comply with legal and regulatory obligations",
          "To resolve disputes, enforce agreements, and protect our legal rights",
          "To analyse website usage and improve our online presence",
          "To prepare case studies and portfolio content (with client consent or as permitted under our Terms & Conditions)",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Legal Basis for Processing (Under Indian Law)",
    content: [
      {
        type: "text",
        text: "We process your personal data on the following legal grounds under the Information Technology Act, 2000, and applicable Indian data protection principles:",
      },
      {
        type: "list",
        items: [
          "Contractual necessity - to fulfil our obligations under a service agreement or quotation",
          "Legitimate interest - to operate our business, communicate with clients, and improve our services",
          "Legal obligation - to comply with applicable laws, tax regulations, and court orders",
          "Consent - where you have expressly provided consent for a specific purpose",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Sharing of Your Information",
    content: [
      {
        type: "text",
        text: "Socio Bhaarat does not sell, rent, or trade your personal information to any third party. We may share your information only in the following circumstances:",
      },
      {
        type: "subsection",
        heading: "5.1 Service Delivery Partners",
        text: "We may share limited information with trusted third-party tools and platforms used for service delivery, including but not limited to:",
      },
      {
        type: "list",
        items: [
          "Meta Business Suite (Facebook/Instagram)",
          "Google Ads & Google Analytics",
          "Canva, Adobe, and design tools",
          "Zoho CRM and invoicing platforms",
          "WhatsApp Business API providers",
        ],
      },
      {
        type: "text",
        text: "These platforms have their own privacy policies and are responsible for their data practices.",
      },
      {
        type: "subsection",
        heading: "5.2 Legal Requirements",
        text: "We may disclose your information if required to do so by law, court order, government authority, or to protect the rights, property, or safety of Socio Bhaarat, our clients, or the public.",
      },
      {
        type: "subsection",
        heading: "5.3 Business Transfers",
        text: "In the event of a merger, acquisition, or restructuring of our company, client data may be transferred to the successor entity, subject to the same privacy protections.",
      },
    ],
  },
  {
    id: "6",
    title: "Data Retention",
    content: [
      {
        type: "text",
        text: "We retain your personal information for as long as necessary to:",
      },
      {
        type: "list",
        items: [
          "Fulfil the purposes for which it was collected",
          "Comply with legal, accounting, or regulatory requirements",
          "Resolve disputes and enforce agreements",
        ],
      },
      {
        type: "text",
        text: "Typically, client data is retained for a period of 5 years from the date of last engagement, after which it is securely deleted or anonymised. Social media credentials and access shared by clients are deleted from our systems upon termination of the engagement and clearance of all dues.",
      },
    ],
  },
  {
    id: "7",
    title: "Cookies Policy",
    content: [
      {
        type: "text",
        text: "Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:",
      },
      {
        type: "list",
        items: [
          "Remember your preferences and settings",
          "Analyse website traffic and usage patterns",
          "Improve website performance and content",
        ],
      },
      {
        type: "subsection",
        heading: "Types of cookies we may use",
      },
      {
        type: "list",
        items: [
          "Essential Cookies - necessary for the website to function",
          "Analytics Cookies - to understand how visitors use our site (e.g. Google Analytics)",
          "Marketing Cookies - to track the effectiveness of our campaigns",
        ],
      },
      {
        type: "text",
        text: "You may disable cookies through your browser settings at any time. Please note that disabling cookies may affect some features of our website.",
      },
    ],
  },
  {
    id: "8",
    title: "Data Security",
    content: [
      {
        type: "text",
        text: "We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it against unauthorised access, loss, alteration, or disclosure. These measures include:",
      },
      {
        type: "list",
        items: [
          "Secure storage of all client credentials and data",
          "Restricted access to client information on a need-to-know basis",
          "Use of UPI and digital payment systems - no physical cash transactions",
          "Regular review of access permissions and security practices",
        ],
      },
      {
        type: "text",
        text: "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "9",
    title: "Your Rights",
    content: [
      {
        type: "text",
        text: "As a user or client, you have the following rights with respect to your personal data:",
      },
      {
        type: "list",
        items: [
          "Right to Access - Request a copy of the personal data we hold about you",
          "Right to Correction - Request correction of inaccurate or incomplete data",
          "Right to Deletion - Request deletion of your personal data, subject to legal obligations",
          "Right to Withdraw Consent - Withdraw consent for marketing communications at any time",
          "Right to Data Portability - Request transfer of your data in a structured format",
          "Right to Object - Object to processing of your data for specific purposes",
        ],
      },
      {
        type: "text",
        text: "To exercise any of these rights, please contact us at official@sociobhaarat.com. We will respond to your request within 30 days.",
      },
    ],
  },
  {
    id: "10",
    title: "Third-Party Links",
    content: [
      {
        type: "text",
        text: "Our website may contain links to third-party websites, social media platforms, or partner pages. Socio Bhaarat is not responsible for the privacy practices or content of any third-party websites. We encourage you to review the privacy policies of any external sites you visit.",
      },
    ],
  },
  {
    id: "11",
    title: "Children's Privacy",
    content: [
      {
        type: "text",
        text: "Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal data, we will take steps to delete such information immediately.",
      },
    ],
  },
  {
    id: "12",
    title: "Social Media Platforms",
    content: [
      {
        type: "text",
        text: "When we manage your social media accounts, we access your account data solely for the purpose of service delivery. We do not use client social media accounts for any purpose outside the agreed scope of work. All credentials shared with us are stored securely and deleted upon termination of the engagement.",
      },
    ],
  },
  {
    id: "13",
    title: "WhatsApp & Communication Channels",
    content: [
      {
        type: "text",
        text: "We use WhatsApp, email, and phone calls for client communication. By sharing your WhatsApp number or email with us, you consent to receiving service-related communications through these channels. You may opt out of promotional messages at any time by informing us in writing.",
      },
    ],
  },
  {
    id: "14",
    title: "Updates to This Privacy Policy",
    content: [
      {
        type: "text",
        text: 'Socio Bhaarat reserves the right to update this Privacy Policy at any time to reflect changes in our practices, services, or applicable law. The updated policy will be published on our website with a revised "Last Updated" date. We encourage you to review this page periodically.',
      },
      {
        type: "text",
        text: "Continued use of our website or services after any changes constitutes your acceptance of the updated Privacy Policy.",
      },
    ],
  },
  {
    id: "15",
    title: "Grievance Officer",
    content: [
      {
        type: "text",
        text: "In accordance with the Information Technology Act, 2000 and applicable rules, any grievance related to the processing of your personal data may be addressed to:",
      },
      {
        type: "grievance",
      },
      {
        type: "text",
        text: "We will acknowledge your grievance within 48 hours and resolve it within 30 days of receipt.",
      },
      {
        type: "text",
        text: "This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and applicable rules and regulations.",
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
    case "grievance":
      return (
        <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50 p-5 space-y-3 font-medium">
          <div className="flex items-center gap-2 mb-1">
            <User className="w-4 h-4 text-primary" />
            <p className="font-bold text-slate-800 text-sm">Grievance Officer - Bharat Gupta</p>
          </div>
          <p className="font-semibold text-slate-700 text-sm">Socio Bhaarat - Bhaarat Reliable Ventures Pvt. Ltd.</p>
          <p className="text-slate-700 text-sm">Jabalpur, Madhya Pradesh - 482001, India</p>
          <div className="flex flex-col gap-2 pt-1">
            <a href="mailto:official@sociobhaarat.com" className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium">
              <Mail className="w-4 h-4" /> official@sociobhaarat.com
            </a>
            <a href="tel:+919589581364" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors font-medium">
              <Phone className="w-4 h-4" /> +91 95895 81364
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


export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Socio Bhaarat"
        description="Learn how we collect, use, and protect your personal information while ensuring privacy and data security."
        keywords="privacy policy, data protection, user privacy, personal data policy, privacy policy in jabalpur"
        url="/privacy"
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
                <Lock className="w-3 h-3" /> Legal
              </div>
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-800 leading-tight tracking-tighter">
                Privacy Policy
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

            {/* Mobile Dropdown Menu (Only visible on mobile) */}
            <div className="lg:hidden mb-8">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block px-1">Quick Navigation</label>
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
                      <span className="truncate">{s.title}</span>
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
          <p className="text-[11px] md:text-xs text-slate-700 max-w-xl mx-auto leading-relaxed font-medium">
            This Privacy Policy was last updated on <span className="font-semibold text-slate-900">1st January 2026</span>. By continuing to use our website or services, you acknowledge that you have read and agreed to this policy.
          </p>
        </div>

      </main>
    </>

  );
}