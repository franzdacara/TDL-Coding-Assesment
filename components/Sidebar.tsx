import React from 'react';
import Image from 'next/image';
import {
    LayoutDashboard,
    TrendingUp,
    MessageSquare,
    Building2,
    Home,
    DollarSign,
    Wrench,
    Activity,
    FileText,
    BarChart3,
    Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Overview', active: true },
    { icon: TrendingUp, label: 'Forecast' },
    { icon: MessageSquare, label: 'Assistant' },
    { icon: Building2, label: 'Buildings' },
    { icon: Home, label: 'Units' },
    { icon: DollarSign, label: 'Bank Feed' },
    { icon: Wrench, label: 'Capex' },
    { icon: Activity, label: 'OpEx' },
    { icon: FileText, label: 'Mortgages' },
    { icon: BarChart3, label: 'Reports' },
    { icon: Settings, label: 'Settings' },
];

export function Sidebar() {
    return (
        <aside className="w-48 border-r border-black/10 flex flex-col h-screen sticky top-0 bg-brand-bg">
            <div className="p-6 mb-4">
                <div className="flex items-center gap-2">
                    <Image src="/house-logo.png" alt="Logo" width={32} height={32} />
                    <span className="font-bold text-lg tracking-tight uppercase">Redpoint</span>
                </div>
            </div>

            <nav className="flex-1">
                {sidebarItems.map((item) => (
                    <div
                        key={item.label}
                        className={cn(
                            "sidebar-item",
                            item.active && "active"
                        )}
                    >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>
        </aside>
    );
}
