import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description: `Terms and conditions for using ${siteConfig.legalName}'s website and profile lighting installation services in Bangalore.`,
    alternates: { canonical: `${siteConfig.url}/terms-and-conditions` },
    robots: { index: true, follow: true },
};

const LAST_UPDATED = "1 June 2026";
const EFFECTIVE_DATE = "15 June 2026";
const WARRANTY_YEARS = 1;
const PAYMENT_ADVANCE_PERCENT = 50;

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

export default function TermsAndConditionsPage() {
    const { legalName, email, phone, address, url } = siteConfig;
    const fullAddress = `${address.streetAddress}, ${address.addressLocality}, ${address.addressRegion} – ${address.postalCode}, India`;

    return (
        <main className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <div className="border-b border-neutral-100 bg-neutral-950 px-6 py-20 text-center">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white">
                    Legal
                </p>
                <h1
                    className="font-display text-4xl font-light uppercase tracking-tight text-white md:text-5xl"
                    style={{ letterSpacing: "-0.03em" }}
                >
                    Terms &amp; Conditions
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
                    <span className="text-neutral-600">Terms &amp; Conditions</span>
                </nav>

                {/* Intro */}
                <Para>
                    These Terms and Conditions (&quot;Terms&quot;) govern your use of the website located at{" "}
                    <a href={url} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {url}
                    </a>{" "}
                    and the profile lighting installation services provided by{" "}
                    <strong>{legalName}</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating
                    from {fullAddress}.
                </Para>
                <Para>
                    By accessing our website or engaging our services, you agree to be bound by these
                    Terms. If you do not agree, please do not use our website or services. These Terms
                    constitute a legally binding agreement under the <strong>Indian Contract Act, 1872</strong>.
                </Para>

                {/* 1 */}
                <SectionHeading>1. Services</SectionHeading>

                <SubHeading>1.1 What we provide</SubHeading>
                <Para>
                    {legalName} provides professional profile lighting installation services in
                    Bangalore, including but not limited to:
                </Para>
                <Ul items={[
                    "Aluminium profile and LED strip installation (cove, linear, recessed, surface-mount)",
                    "False ceiling and false wall lighting",
                    "Facade and exterior lighting",
                    "Smart lighting integration (dimmers, scene controllers, home automation)",
                    "Kitchen under-cabinet and furniture lighting",
                    "Staircase, landscape, and garden lighting",
                    "Commercial office, retail, and hospitality lighting fit-outs",
                ]} />

                <SubHeading>1.2 Free site visit</SubHeading>
                <Para>
                    We offer a complimentary, no-obligation site visit and quotation for all projects
                    in Bangalore. Booking a site visit does not constitute a contract or commitment
                    by either party. The site visit is subject to team availability.
                </Para>

                <SubHeading>1.3 Scope of work</SubHeading>
                <Para>
                    The final scope of work, materials, timeline, and total cost will be documented
                    in a written quotation or work order provided before any installation begins.
                    Work will only commence after the client has approved the quotation in writing
                    (email or WhatsApp confirmation is accepted) and paid the advance amount.
                </Para>

                {/* 2 */}
                <SectionHeading>2. Quotations and Pricing</SectionHeading>
                <Ul items={[
                    "All quotations are valid for 30 days from the date of issue unless otherwise stated.",
                    "Prices are in Indian Rupees (₹) and are inclusive of applicable GST unless explicitly stated otherwise.",
                    "Quoted prices are based on the site visit assessment. If actual site conditions differ materially from what was assessed (e.g., inaccessible ceiling, non-standard wall material, additional electrical work required), we reserve the right to revise the quotation.",
                    "We will inform you of any price revision before proceeding and will not carry out additional work without your explicit approval.",
                    "Pricing for materials (LED strips, profiles, drivers) may vary based on availability. We will always confirm the final material specification and cost in writing before purchase.",
                ]} />

                {/* 3 */}
                <SectionHeading>3. Payment Terms</SectionHeading>

                <SubHeading>3.1 Payment schedule</SubHeading>
                <Para>
                    Our standard payment schedule is:
                </Para>

                <div className="mb-6 overflow-hidden rounded-lg border border-neutral-200">
                    <table className="w-full text-sm">
                        <thead className="bg-neutral-50">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Milestone</th>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {[
                                ["Advance — on quotation approval (before material purchase)", `${PAYMENT_ADVANCE_PERCENT}% of total project value`],
                                ["Interim payment — on material delivery to site (larger projects only)", "25% of total project value"],
                                ["Final payment — on project completion before handover", "Remaining balance"],
                            ].map(([milestone, amount], i) => (
                                <tr key={i} className="bg-white">
                                    <td className="px-4 py-3 leading-6 text-neutral-600">{milestone}</td>
                                    <td className="px-4 py-3 font-medium text-neutral-700">{amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <SubHeading>3.2 Accepted payment methods</SubHeading>
                <Ul items={[
                    "UPI (GPay, PhonePe, Paytm, BHIM)",
                    "Bank transfer (NEFT / RTGS / IMPS)",
                    "Cheque payable to the registered business name",
                    "Cash (receipts provided for all cash transactions)",
                ]} />

                <SubHeading>3.3 Late payment</SubHeading>
                <Para>
                    If final payment is not received within 7 days of project completion, we reserve
                    the right to charge a late payment fee of 2% per month on the outstanding
                    balance. We also reserve the right to withhold the installation warranty until
                    full payment is received.
                </Para>

                {/* 4 */}
                <SectionHeading>4. Project Execution</SectionHeading>

                <SubHeading>4.1 Client responsibilities</SubHeading>
                <Para>
                    To enable us to carry out work safely and efficiently, the client agrees to:
                </Para>
                <Ul items={[
                    "Provide safe and unobstructed access to the installation area on the agreed date(s).",
                    "Ensure the site has a working power supply and adequate lighting for our team.",
                    "Remove fragile items, furniture, or valuables from the immediate work area prior to our arrival.",
                    "Inform us in advance of any pre-existing structural issues, asbestos, or hazardous materials.",
                    "Obtain any required permissions from building management, RWA, or society before work begins.",
                    "Ensure an authorised adult representative is available on site during installation.",
                ]} />

                <SubHeading>4.2 Timelines</SubHeading>
                <Para>
                    We will provide an estimated timeline in the work order. Timelines are estimates
                    and may be affected by site conditions, material availability, or factors beyond
                    our control (power outages, access issues, etc.). We will communicate any delays
                    promptly. Delays caused by the client (late access, scope changes, withheld
                    approvals) may result in revised timelines and/or additional costs.
                </Para>

                <SubHeading>4.3 Changes to scope</SubHeading>
                <Para>
                    Any changes to the agreed scope of work must be approved in writing by both
                    parties before implementation. Additional work will be quoted separately and
                    added to the final invoice.
                </Para>

                {/* 5 */}
                <SectionHeading>5. Warranty</SectionHeading>

                <SubHeading>5.1 Installation warranty</SubHeading>
                <Para>
                    We provide a <strong>{WARRANTY_YEARS}-year warranty on our installation workmanship</strong>{" "}
                    from the date of project completion. This covers defects arising from our
                    installation process, including:
                </Para>
                <Ul items={[
                    "Loose or detached profiles, mounting brackets, or fixings.",
                    "Faulty wiring connections attributable to our installation.",
                    "LED strips or drivers that fail within the warranty period due to installation error.",
                ]} />

                <SubHeading>5.2 Product warranty</SubHeading>
                <Para>
                    LED strips, aluminium profiles, drivers, and controllers carry the respective
                    manufacturer's warranty (typically 2 years for LED strips, 3 years for drivers).
                    Manufacturer warranty claims are subject to the manufacturer's terms and
                    conditions. We will assist you in raising valid warranty claims.
                </Para>

                <SubHeading>5.3 Warranty exclusions</SubHeading>
                <Para>The installation warranty does not cover:</Para>
                <Ul items={[
                    "Damage caused by misuse, physical impact, water ingress (unless waterproof-rated products were specified), or electrical surges.",
                    "Modifications or repairs carried out by third parties after our installation.",
                    "Normal wear and tear, including gradual LED lumen degradation over time.",
                    "Damage arising from civil or structural work done after installation.",
                    "Colour temperature or brightness variation between different LED batches (an inherent characteristic of LED manufacturing).",
                ]} />

                <SubHeading>5.4 Claiming warranty</SubHeading>
                <Para>
                    To raise a warranty claim, contact us at{" "}
                    <a href={`mailto:${email}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {email}
                    </a>{" "}
                    or{" "}
                    <a href={`tel:${phone}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {phone}
                    </a>{" "}
                    with photos and a description of the issue. Valid claims will be attended to
                    within 7 working days. Warranty service is available only to the original
                    client at the original installation address.
                </Para>

                {/* 6 */}
                <SectionHeading>6. Cancellation and Refunds</SectionHeading>

                <SubHeading>6.1 Cancellation by the client</SubHeading>
                <div className="mb-4 overflow-hidden rounded-lg border border-neutral-200">
                    <table className="w-full text-sm">
                        <thead className="bg-neutral-50">
                            <tr>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Cancellation timing</th>
                                <th className="px-4 py-3 text-left font-medium text-neutral-700">Refund of advance</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {[
                                ["More than 7 days before installation start date", "Full refund minus any materials already ordered"],
                                ["3–7 days before installation start date", "50% refund of advance"],
                                ["Less than 3 days before installation start date", "No refund of advance"],
                                ["After installation has commenced", "No refund; payment due for work completed to date"],
                            ].map(([timing, refund], i) => (
                                <tr key={i} className="bg-white">
                                    <td className="px-4 py-3 leading-6 text-neutral-600">{timing}</td>
                                    <td className="px-4 py-3 text-neutral-600">{refund}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <SubHeading>6.2 Cancellation by us</SubHeading>
                <Para>
                    We reserve the right to cancel a project before commencement if site conditions
                    are deemed unsafe, if access is repeatedly denied, or in cases of force majeure.
                    In such cases, a full refund of any advance paid will be issued within 7 working days.
                </Para>

                <SubHeading>6.3 Refund processing</SubHeading>
                <Para>
                    Approved refunds will be processed to the original payment method within
                    7–14 working days.
                </Para>

                {/* 7 */}
                <SectionHeading>7. Intellectual Property</SectionHeading>
                <Para>
                    All content on this website — including text, photographs, project images,
                    graphics, logos, and design — is the property of {legalName} and is protected
                    under the Copyright Act, 1957. You may not reproduce, distribute, or use our
                    content without prior written permission.
                </Para>
                <Para>
                    We may photograph completed installations for our portfolio, website, and social
                    media. We will seek your verbal consent before publishing images that identify
                    your property. If you wish to opt out, notify us before project completion.
                </Para>

                {/* 8 */}
                <SectionHeading>8. Limitation of Liability</SectionHeading>
                <Para>
                    To the fullest extent permitted by applicable Indian law:
                </Para>
                <Ul items={[
                    `Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific project giving rise to the claim.`,
                    "We are not liable for any indirect, consequential, or special losses, including loss of profit, loss of business, or damage to property not caused directly by our installation.",
                    "We are not responsible for delays or failures caused by events beyond our reasonable control (force majeure), including but not limited to natural disasters, power grid failures, material shortages, or government actions.",
                    "We do not guarantee that our website will be uninterrupted, error-free, or free from viruses.",
                ]} />

                {/* 9 */}
                <SectionHeading>9. Website Use</SectionHeading>
                <Ul items={[
                    "You may use our website for lawful purposes only.",
                    "You must not attempt to gain unauthorised access to any part of our website or its underlying systems.",
                    "You must not use our website to transmit spam, malware, or any harmful content.",
                    "We reserve the right to restrict access to any user who breaches these Terms.",
                    "Links to third-party websites are provided for convenience only. We do not endorse or control those websites and accept no responsibility for their content.",
                ]} />

                {/* 10 */}
                <SectionHeading>10. Consumer Rights</SectionHeading>
                <Para>
                    Nothing in these Terms limits your rights as a consumer under the{" "}
                    <strong>Consumer Protection Act, 2019</strong> or any other applicable Indian
                    consumer protection law. If you have a complaint that we cannot resolve, you
                    may approach the appropriate Consumer Disputes Redressal Commission.
                </Para>

                {/* 11 */}
                <SectionHeading>11. Governing Law and Dispute Resolution</SectionHeading>
                <Para>
                    These Terms are governed by the laws of India. Any dispute arising from these
                    Terms or our services shall first be attempted to be resolved through good-faith
                    negotiation. If unresolved within 30 days, disputes shall be subject to the
                    exclusive jurisdiction of the courts in{" "}
                    <strong>Bangalore, Karnataka, India</strong>.
                </Para>

                {/* 12 */}
                <SectionHeading>12. Changes to These Terms</SectionHeading>
                <Para>
                    We reserve the right to update these Terms at any time. Material changes will be
                    communicated by updating the &quot;Last updated&quot; date at the top of this page.
                    Continued use of our website or services after changes take effect constitutes
                    acceptance of the revised Terms. We recommend reviewing this page periodically.
                </Para>

                {/* 13 */}
                <SectionHeading>13. Contact Us</SectionHeading>
                <Para>
                    For any questions about these Terms, to request a copy, or to raise a complaint:
                </Para>
                <Para>
                    <strong>{legalName}</strong><br />
                    {fullAddress}<br />
                    Email:{" "}
                    <a href={`mailto:${email}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {email}
                    </a><br />
                    Phone:{" "}
                    <a href={`tel:${phone}`} className="text-neutral-900 underline underline-offset-2 hover:text-amber-600">
                        {phone}
                    </a>
                </Para>

                {/* Divider */}
                <div className="my-12 h-px bg-neutral-100" aria-hidden="true" />

                {/* Footer nav */}
                <div className="flex flex-wrap gap-6 text-sm text-neutral-500">
                    <Link href="/privacy-policy"
                        className="hover:text-neutral-900 transition-colors underline underline-offset-2">
                        Privacy Policy
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