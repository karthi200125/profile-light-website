// app/opengraph-image.tsx
// ─────────────────────────────────────────────────────────────────────────────
//  DEFAULT OPEN GRAPH IMAGE
//  Next.js App Router · ImageResponse
//  Generates /opengraph-image.png at build time for the home page.
//
//  Location pages get their own OG image via:
//    app/profile-lighting-installation/[location]/opengraph-image.tsx
//  (see the second export at the bottom of this file — copy it there)
//
//  Dimensions: 1200 × 630 — standard OG spec.
//  Font:       Uses a system-safe display stack. Swap in a custom font by
//              fetching it inside the function (see comment below).
//
//  Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
// ─────────────────────────────────────────────────────────────────────────────

import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";

// ─── Image dimensions ────────────────────────────────────────────────────────

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ─── Alt text (used by crawlers) ─────────────────────────────────────────────

export const alt = `${siteConfig.name} — Premium Profile Lighting in Bangalore`;

// ─── Home page OG image ───────────────────────────────────────────────────────

export default async function HomeOgImage() {
    // ── Optional: load a custom font ─────────────────────────────────────────
    // const fontData = await fetch(
    //   new URL("../public/fonts/YourFont-Light.ttf", import.meta.url)
    // ).then((res) => res.arrayBuffer());

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    backgroundColor: "#0a0a0a",
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >

                {/* ── Ambient warm glow ── */}
                <div
                    style={{
                        position: "absolute",
                        top: "-10%",
                        right: "-5%",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)",
                    }}
                />

                {/* ── Bottom gradient ── */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                    }}
                />

                {/* ── Decorative horizontal rule ── */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "160px",
                        left: "60px",
                        right: "60px",
                        height: "1px",
                        backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                />

                {/* ── Content ── */}
                <div
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        padding: "0 60px 56px",
                        gap: "0",
                    }}
                >

                    {/* Eyebrow */}
                    <p
                        style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "rgba(251,191,36,0.75)",
                            margin: "0 0 20px",
                        }}
                    >
                        Bangalore · Premium Lighting
                    </p>

                    {/* Headline */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "96px",
                                fontWeight: 300,
                                letterSpacing: "-0.04em",
                                lineHeight: 0.92,
                                color: "#ffffff",
                                textTransform: "uppercase",
                            }}
                        >
                            Design That
                        </span>
                        <span
                            style={{
                                fontSize: "96px",
                                fontWeight: 300,
                                letterSpacing: "-0.04em",
                                lineHeight: 0.92,
                                color: "#ffffff",
                                textTransform: "uppercase",
                            }}
                        >
                            Illuminates
                        </span>
                    </div>

                    {/* Bottom row: description + brand */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-end",
                            marginTop: "32px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "16px",
                                lineHeight: 1.6,
                                color: "rgba(255,255,255,0.5)",
                                maxWidth: "480px",
                                margin: 0,
                            }}
                        >
                            {siteConfig.description}
                        </p>

                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: 500,
                                letterSpacing: "0.05em",
                                color: "rgba(255,255,255,0.9)",
                                margin: 0,
                            }}
                        >
                            {siteConfig.name.toUpperCase()}
                        </p>
                    </div>

                </div>
            </div>
        ),
        {
            ...size,
            // fonts: [{ name: "YourFont", data: fontData, weight: 300 }],
        }
    );
}

// ─────────────────────────────────────────────────────────────────────────────
//  LOCATION PAGE OG IMAGE
//  Copy this function into:
//    app/profile-lighting-installation/[location]/opengraph-image.tsx
//  It generates a unique OG image per location at build time.
// ─────────────────────────────────────────────────────────────────────────────

// app/profile-lighting-installation/[location]/opengraph-image.tsx
//
// import { ImageResponse }    from "next/og";
// import { getLocation }       from "@/data/locations";
// import { siteConfig }        from "@/config/site";
//
// export const size        = { width: 1200, height: 630 };
// export const contentType = "image/png";
//
// export async function generateImageMetadata({ params }: { params: { location: string } }) {
//   const loc = getLocation(params.location);
//   return [{ id: params.location, alt: loc ? `Profile lighting in ${loc.name}, Bangalore` : "Profile Lighting Bangalore" }];
// }
//
// export default async function LocationOgImage({ params }: { params: { location: string } }) {
//   const loc = getLocation(params.location);
//   const locationName = loc?.name ?? "Bangalore";
//
//   return new ImageResponse(
//     (
//       <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column",
//                     justifyContent: "flex-end", backgroundColor: "#0a0a0a",
//                     fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
//                     position: "relative", overflow: "hidden" }}>
//
//         {/* Glow */}
//         <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px",
//                       borderRadius: "50%", background: "radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)" }} />
//
//         {/* Bottom gradient */}
//         <div style={{ position: "absolute", inset: 0,
//                       background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />
//
//         {/* Horizontal rule */}
//         <div style={{ position: "absolute", bottom: "160px", left: "60px", right: "60px",
//                       height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
//
//         {/* Content */}
//         <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "0 60px 56px", gap: "0" }}>
//
//           {/* Eyebrow */}
//           <p style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase",
//                       color: "rgba(251,191,36,0.75)", margin: "0 0 20px" }}>
//             {locationName} · Bangalore
//           </p>
//
//           {/* Headline */}
//           <div style={{ display: "flex", flexDirection: "column" }}>
//             <span style={{ fontSize: "96px", fontWeight: 300, letterSpacing: "-0.04em",
//                            lineHeight: 0.92, color: "#ffffff", textTransform: "uppercase" }}>
//               Profile Lighting
//             </span>
//             <span style={{ fontSize: "96px", fontWeight: 300, letterSpacing: "-0.04em",
//                            lineHeight: 0.92, color: "#ffffff", textTransform: "uppercase" }}>
//               in {locationName}
//             </span>
//           </div>
//
//           {/* Bottom row */}
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "32px" }}>
//             <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: 0 }}>
//               Premium cove lighting, false ceiling & linear profile installation in {locationName}, Bangalore.
//             </p>
//             <p style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "0.05em",
//                         color: "rgba(255,255,255,0.9)", margin: 0 }}>
//               {siteConfig.name.toUpperCase()}
//             </p>
//           </div>
//
//         </div>
//       </div>
//     ),
//     { width: 1200, height: 630 }
//   );
// }