import Container from "@/components/ui/Container";

import {
    ShieldCheck,
    Clock3,
    BadgeCheck,
    Wrench,
} from "lucide-react";

const TRUST_ITEMS = [
    {
        icon: ShieldCheck,
        title: "Installation Warranty",
        description: "Quality workmanship backed by service support.",
    },
    {
        icon: BadgeCheck,
        title: "Premium Materials",
        description: "High-quality profile lights and accessories.",
    },
    {
        icon: Clock3,
        title: "On-Time Delivery",
        description: "Projects completed on schedule.",
    },
    {
        icon: Wrench,
        title: "Free Site Visit",
        description: "Inspection and quotation at no extra cost.",
    },
];

export default function TrustBar() {
    return (
        <section className="border-y border-slate-200 bg-slate-50 py-12">
            <Container>
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {TRUST_ITEMS.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-slate-200 bg-white p-6"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                                    <Icon className="h-6 w-6 text-amber-600" />
                                </div>

                                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}