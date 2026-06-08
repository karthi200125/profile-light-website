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
                src="/logo.webp"
                alt="StraightLine Profile Lighting"
                width={130}
                height={80}
                priority
                quality={90}
                draggable={false}
                sizes="130px"
                className="h-9 w-auto sm:h-12 md:h-14 lg:h-16 object-contain"
            />
        </Link>
    );
}