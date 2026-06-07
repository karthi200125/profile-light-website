import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `Privacy policy for ${siteConfig.legalName}. Learn how we collect, use and protect your personal information in compliance with India's DPDP Act 2023.`,
    alternates: { canonical: `${siteConfig.url}/privacy-policy` },
    robots: { index: true, follow: true },
};

const LAST_UPDATED = "1 June 2026";
const EFFECTIVE_DATE = "1 June 2026";

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mt-12 mb-4 text-xl font-medium tracking-tight text-neutral-900">
            {children}
        </h2>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="mt-6 mb-2 text-base font-medium text-neutral-800">
            {children}
        </h3>
    );
}

function Para({ children }: { children: React.ReactNode }) {
    return (
        <p className="mb-4 leading-7 text-neutral-600">
            {children}
        </p>
    );
}

function Ul({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="mb-4 space-y-2 pl-5">
            {items.map((item, i) => (
                <li key={i} className="relative leading-7 text-neutral-600
                               before:absolute before:-left-4 before:text-neutral-400 before:content-['–']">
                    {item}
                </li>
            ))}
        </ul>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyPolicyPage() {
    const { legalName, email, phone, address, url } = siteConfig;
    const fullAddress = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} – ${address.postalCode}, India`;

    return (
        <main className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <div className="border-b border-neutral-100 bg-neutral-950 px-6 py-20 text-center">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white">
                    Legal
                </p>
                <h1 className="font-display text-4xl font-light uppercase tracking-tight text-white
                       md:text-5xl"
                    style={{ letterSpacing: "-0.03em" }}>
                    Privacy Policy
                </h1>
                <p className="mt-4 text-sm text-white/40">
                    Last updated: {LAST_UPDATED} · Effective: {EFFECTIVE_DATE}
                </p>
            </div>

            {/* ── Content ── */}
            <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs text-neutral-400">
                    <Link href="/" className="hover:text-neutral-700 transition-colors">Home</Link>
                    <span aria-hidden="true">/</span>
                    <span className="text-neutral-600">Privacy Policy</span>
                </nav>

                {/* Intro */}
                <Para>
                    {legalName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting
                    your personal data. This Privacy Policy explains what information we collect when you visit{" "}
                    <a href={url} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {url}
                    </a>{" "}
                    or contact us for our profile lighting installation services, how we use it, and the rights
                    you have over it.
                </Para>
                <Para>
                    This policy is governed by the <strong>Digital Personal Data Protection Act, 2023
                        (DPDP Act)</strong> of India and, where applicable, the Information Technology
                    (Amendment) Act, 2008.
                </Para>

                {/* 1 */}
                <SectionHeading>1. Who We Are</SectionHeading>
                <Para>
                    <strong>Data Fiduciary (Controller):</strong><br />
                    {legalName}<br />
                    {fullAddress}<br />
                    Email:{" "}
                    <a href={`mailto:${email}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {email}
                    </a><br />
                    Phone: <a href={`tel:${phone}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">{phone}</a>
                </Para>

                {/* 2 */}
                <SectionHeading>2. Information We Collect</SectionHeading>

                <SubHeading>2.1 Information you provide to us</SubHeading>
                <Ul items={[
                    <><strong>Contact enquiries</strong> — name, phone number, email address, project location, and any message you submit via our contact form or WhatsApp.</>,
                    <><strong>Site visit bookings</strong> — preferred date, time, and address for free site visits.</>,
                    <><strong>Project details</strong> — property type, approximate square footage, and lighting requirements you share during consultation.</>,
                ]} />

                <SubHeading>2.2 Information we collect automatically</SubHeading>
                <Ul items={[
                    <><strong>Usage data</strong> — pages visited, time spent, referring URL, browser type, and device type (via Google Analytics 4).</>,
                    <><strong>IP address</strong> — used for approximate location (city-level) and fraud prevention. We do not store full IPs beyond the analytics session.</>,
                    <><strong>Cookies &amp; similar technologies</strong> — see Section 5 below.</>,
                ]} />

                <SubHeading>2.3 Information we do not collect</SubHeading>
                <Ul items={[
                    "Payment card or bank account details (we do not process online payments).",
                    "Aadhaar, PAN, or other government ID numbers.",
                    "Biometric data of any kind.",
                    "Data from children under 18 — our services are directed at adult homeowners and businesses.",
                ]} />

                {/* 3 */}
                <SectionHeading>3. How We Use Your Information</SectionHeading>
                <Para>We process your personal data only for the purposes listed below and only where we have a lawful basis to do so:</Para>

                <div className="mb-4 overflow-hidden rounded-lg border border-neutral-200">
                    <table className="w-full text-sm">
                        <thead className="bg-neutral-50">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Purpose</th>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Lawful Basis</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {[
                                ["Respond to your enquiry or book a site visit", "Legitimate interest / Contract"],
                                ["Send a quotation or project proposal", "Contract"],
                                ["Provide profile lighting installation services", "Contract"],
                                ["Send service reminders or follow-up messages", "Legitimate interest"],
                                ["Analyse website usage to improve our service", "Legitimate interest"],
                                ["Comply with legal obligations (tax, contracts)", "Legal obligation"],
                            ].map(([purpose, basis], i) => (
                                <tr key={i} className="bg-white">
                                    <td className="px-4 py-3 leading-6 text-neutral-600">{purpose}</td>
                                    <td className="px-4 py-3 text-neutral-600">{basis}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Para>
                    We will never sell, rent, or trade your personal data to third parties for their
                    marketing purposes.
                </Para>

                {/* 4 */}
                <SectionHeading>4. How We Share Your Information</SectionHeading>
                <Para>We share data only in the following limited circumstances:</Para>
                <Ul items={[
                    <><strong>Service providers</strong> — Google Analytics (usage analytics), Google Tag Manager (tag management), and WhatsApp Business (messaging). These processors act only on our instructions.</>,
                    <><strong>Professional advisors</strong> — accountants or lawyers under confidentiality obligations when required for tax or legal compliance.</>,
                    <><strong>Business transfer</strong> — if {legalName} is acquired or merges with another entity, your data may be transferred as part of that transaction. We will notify you in advance.</>,
                    <><strong>Law enforcement</strong> — when required by Indian law, court order, or government authority.</>,
                ]} />

                {/* 5 */}
                <SectionHeading>5. Cookies</SectionHeading>
                <Para>
                    We use the following categories of cookies on our website:
                </Para>

                <div className="mb-6 overflow-hidden rounded-lg border border-neutral-200">
                    <table className="w-full text-sm">
                        <thead className="bg-neutral-50">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Category</th>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Purpose</th>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Can you opt out?</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {[
                                ["Strictly necessary", "Site functionality (navigation, forms)", "No — required"],
                                ["Analytics", "Google Analytics 4 — page views and behaviour", "Yes — browser settings"],
                                ["Marketing", "Google Ads / Meta Pixel (if active)", "Yes — browser settings"],
                            ].map(([cat, purpose, opt], i) => (
                                <tr key={i} className="bg-white">
                                    <td className="px-4 py-3 font-medium text-neutral-700">{cat}</td>
                                    <td className="px-4 py-3 text-neutral-600">{purpose}</td>
                                    <td className="px-4 py-3 text-neutral-600">{opt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Para>
                    You can manage or disable cookies at any time in your browser settings.
                    Note that disabling analytics cookies does not affect your ability to use
                    any feature of our website.
                </Para>

                {/* 6 */}
                <SectionHeading>6. Data Retention</SectionHeading>
                <Ul items={[
                    "Enquiry and contact form data — 2 years from the date of last contact.",
                    "Active client project data — 7 years for tax and warranty records (as required by Indian accounting standards).",
                    "Website analytics — 14 months (Google Analytics default retention).",
                    "WhatsApp conversations — retained until you ask us to delete them.",
                ]} />
                <Para>
                    After the applicable retention period, data is securely deleted or anonymised.
                </Para>

                {/* 7 */}
                <SectionHeading>7. Data Security</SectionHeading>
                <Para>
                    We implement appropriate technical and organisational measures to protect your
                    personal data against unauthorised access, loss, or destruction. These include:
                </Para>
                <Ul items={[
                    "HTTPS encryption on all pages of our website (TLS 1.2+).",
                    "Access controls — only team members who need your data to fulfil a service can access it.",
                    "Secure cloud storage with two-factor authentication.",
                    "Regular review of our data handling practices.",
                ]} />
                <Para>
                    No method of transmission over the internet is 100% secure. If you believe
                    your data has been compromised, please contact us immediately at{" "}
                    <a href={`mailto:${email}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {email}
                    </a>.
                </Para>

                {/* 8 */}
                <SectionHeading>8. Your Rights Under the DPDP Act 2023</SectionHeading>
                <Para>As a Data Principal under India's DPDP Act, you have the right to:</Para>
                <Ul items={[
                    <><strong>Access</strong> — request a summary of the personal data we hold about you and how it is being processed.</>,
                    <><strong>Correction</strong> — ask us to correct inaccurate or incomplete personal data.</>,
                    <><strong>Erasure (right to be forgotten)</strong> — request deletion of your data where it is no longer necessary for the purpose for which it was collected.</>,
                    <><strong>Grievance redressal</strong> — raise a complaint with us which we must acknowledge within 48 hours and resolve within 30 days.</>,
                    <><strong>Nominate a representative</strong> — nominate someone to exercise these rights on your behalf in case of your death or incapacity.</>,
                ]} />
                <Para>
                    To exercise any of these rights, email us at{" "}
                    <a href={`mailto:${email}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {email}
                    </a>{" "}
                    with the subject line <em>&quot;Data Rights Request&quot;</em>. We will respond within
                    30 days. We may ask you to verify your identity before processing the request.
                </Para>

                {/* 9 */}
                <SectionHeading>9. Third-Party Links</SectionHeading>
                <Para>
                    Our website may contain links to third-party websites (e.g. Instagram, YouTube,
                    LinkedIn). We are not responsible for the privacy practices of these sites and
                    encourage you to read their respective privacy policies.
                </Para>

                {/* 10 */}
                <SectionHeading>10. Children&apos;s Privacy</SectionHeading>
                <Para>
                    Our website and services are not directed at children under the age of 18. We
                    do not knowingly collect personal data from minors. If you believe a child has
                    provided us with personal information, please contact us and we will delete it
                    promptly.
                </Para>

                {/* 11 */}
                <SectionHeading>11. Changes to This Policy</SectionHeading>
                <Para>
                    We may update this Privacy Policy from time to time to reflect changes in our
                    practices, technology, or applicable law. When we make material changes, we
                    will update the &quot;Last updated&quot; date at the top of this page. We encourage
                    you to review this policy periodically. Continued use of our website after
                    changes constitutes acceptance of the revised policy.
                </Para>

                {/* 12 */}
                <SectionHeading>12. Grievance Officer</SectionHeading>
                <Para>
                    As required by India's DPDP Act 2023 and the IT (Amendment) Act 2008, we have
                    designated a Grievance Officer for data-related complaints:
                </Para>
                <Para>
                    <strong>Grievance Officer</strong><br />
                    {legalName}<br />
                    {fullAddress}<br />
                    Email:{" "}
                    <a href={`mailto:${email}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {email}
                    </a><br />
                    Phone: <a href={`tel:${phone}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">{phone}</a><br />
                    Response time: within 30 days of receipt
                </Para>
                <Para>
                    If you are unsatisfied with our response, you may escalate the matter to the
                    Data Protection Board of India once established under the DPDP Act.
                </Para>

                {/* Divider */}
                <div className="my-12 h-px bg-neutral-100" aria-hidden="true" />

                {/* Footer nav */}
                <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
                    <Link href="/terms-and-conditions"
                        className="hover:text-neutral-900 transition-colors underline underline-offset-2">
                        Terms &amp; Conditions
                    </Link>
                    <Link href="/contact"
                        className="hover:text-neutral-900 transition-colors underline underline-offset-2">
                        Contact Us
                    </Link>
                    <Link href="/"
                        className="hover:text-neutral-900 transition-colors underline underline-offset-2">
                        Back to Home
                    </Link>
                </div>

            </div>
        </main>
    );
}