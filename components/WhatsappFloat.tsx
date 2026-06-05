import { MessageCircle } from "lucide-react";

export default function WhatsappFloat() {
    return (
        <a
            href="https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20your%20lighting%20services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-110"
        >
            <MessageCircle size={28} strokeWidth={2.2} />
        </a>
    );
}