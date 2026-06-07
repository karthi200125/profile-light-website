import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
}

export default function Logo({
    className,
    width = 130,
    height = 80,
}: LogoProps) {
    return (
        <Link
            href="/"
            aria-label="StraightLine Home"
            className={className}
        >
            <Image
                src="/logo.png"
                alt="StraightLine Profile Lighting"
                width={width}
                height={height}
                priority
                quality={90}
                draggable={false}
                className="object-contain"
            />
        </Link>
    );
}