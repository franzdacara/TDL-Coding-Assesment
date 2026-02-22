import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

export function DashboardHeader() {
    return (
        <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-4xl text-[#B38B6D]">Good Morning, Michael</h1>
            <button className="flex items-center gap-2 bg-white border border-black/10 px-4 py-2 rounded-sm text-xs font-bold hover:bg-black/5 transition-colors">
                <Plus className="w-4 h-4" />
                ADD NEW
            </button>
        </div>
    );
}

export function HeroBanner() {
    return (
        <div className="bg-[#85B1E8] p-8 rounded-sm border border-black/10 mb-8 flex items-center justify-between relative overflow-hidden">
            <div className="max-w-2xl z-10">
                <p className="text-xs font-medium text-black/60 mb-2 uppercase tracking-wider">Summary of your portfolio</p>
                <h2 className="text-xl font-medium mb-4">Monday 21 Jan</h2>
                <p className="text-sm leading-relaxed text-black/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim risus non est aliquet semper. Vivamus viverra quis velit a suscipit. Aliquam blandit quam sagittis ex cursus lobortis. Pellentesque condimentum nisl sed.
                </p>
            </div>

            <div className="w-40 h-40 relative z-10 rounded-sm overflow-hidden flex-shrink-0">
                <Image
                    src="/house-logo.png"
                    alt="Portfolio illustration"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-full bg-white/10 -skew-x-12 translate-x-12" />
        </div>
    );
}
