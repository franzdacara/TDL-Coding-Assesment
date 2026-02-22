'use client';

import React from 'react';
import { Trash2, Clock, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const tasks = [
    {
        title: 'Renew Desjardins Insurance for Canal House',
        subtitle: 'CapEx • 245 Rideau Street',
        due: 'Due 11/14/2025',
        urgent: true,
    },
    {
        title: 'Send rent reminder for Canal House unit 903',
        subtitle: 'CapEx • 245 Rideau Street',
        due: 'Due 11/31/2025',
    },
    {
        title: 'Verify municipal tax instalment before July deadline',
        subtitle: 'CapEx • 245 Rideau Street',
        due: 'Due 11/31/2025',
    },
    {
        title: 'Send rent reminder for Canal House unit 903',
        subtitle: 'CapEx • 245 Rideau Street',
        due: 'Due 11/31/2025',
    },
    {
        title: 'Verify municipal tax instalment before July deadline',
        subtitle: 'CapEx • 245 Rideau Street',
        due: 'Due 11/31/2025',
    },
];

export function ActionItems() {
    const [activeTab, setActiveTab] = React.useState('Active');

    return (
        <div className="bg-white card-border flex flex-col h-full overflow-hidden">
            <div className="p-4 border-b border-black/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-black/60">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider">Action Items</h3>
                </div>
                <div className="flex gap-1">
                    <button className="p-1 border border-black/10 rounded hover:bg-black/5"><ChevronLeft className="w-3 h-3" /></button>
                    <button className="p-1 border border-black/10 rounded hover:bg-black/5"><ChevronRight className="w-3 h-3" /></button>
                </div>
            </div>

            <div className="flex border-b border-black/10">
                {['Active', 'Past', 'Snoozed'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "flex-1 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors",
                            activeTab === tab ? "bg-white" : "bg-black/5 text-black/40 border-l border-black/10 first:border-l-0"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {tasks.map((task, i) => (
                    <div key={i} className="group border border-black/10 rounded p-3 hover:border-black/20 transition-colors relative">
                        <div className="flex gap-3">
                            <div className="mt-1">
                                <input type="checkbox" className="w-4 h-4 rounded border-black/20 text-brand-yellow focus:ring-brand-yellow" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-xs font-bold mb-1 leading-tight">{task.title}</h4>
                                <p className="text-[10px] text-black/40 font-medium mb-2">{task.subtitle}</p>
                                <div className={cn(
                                    "inline-block px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider",
                                    task.urgent ? "bg-red-100 text-red-600" : "bg-black/5 text-black/40"
                                )}>
                                    {task.due}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-red-400 hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
                                <button className="text-blue-400 hover:text-blue-600"><Clock className="w-3.5 h-3.5" /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
