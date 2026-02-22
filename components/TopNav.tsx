import React from 'react';
import { Search, Bell, RotateCw, User } from 'lucide-react';

export function TopNav() {
    return (
        <header className="h-16 border-b border-black/10 flex items-center justify-between px-8 bg-brand-bg/80 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-4 flex-1 max-w-md">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40" />
                    <input
                        type="text"
                        placeholder="Find anything..."
                        className="w-full bg-white border border-black/10 rounded-sm py-1.5 pl-10 pr-12 text-xs focus:outline-none focus:ring-1 focus:ring-brand-yellow"
                    />
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[10px] font-bold text-black/40 bg-black/5 px-1 rounded">
                        EN
                    </div>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-black/20 border border-black/10 px-1 rounded">
                        ⌘K
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="text-black/40 hover:text-black transition-colors">
                    <Bell className="w-4 h-4" />
                </button>
                <button className="text-black/40 hover:text-black transition-colors">
                    <RotateCw className="w-4 h-4" />
                </button>
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center bg-white">
                    <User className="w-4 h-4 text-black/40" />
                </div>
            </div>
        </header>
    );
}
