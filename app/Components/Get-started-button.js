"use client";
import Link from 'next/link';

export default function GetStartedButton() {
    return (
        <div>
            <Link href="/Get-started"
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#241059] btn btn-xl rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-800 active:scale-98 active:shadow-xl"
            >Get Started
            </Link>
        </div>
    );
}

