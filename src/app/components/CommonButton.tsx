import React from "react";

export default function CommonButton({ message, href }: { message: string, href: string }) {
    return (
        <a
            className="border border-solid border-white rounded-full px-8 py-4 text-xl hover:bg-white hover:text-black transition-all"
            href={href}
        >
            {message}
        </a>
    );
}
