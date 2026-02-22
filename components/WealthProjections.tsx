'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Settings } from 'lucide-react';

const data = [
    { year: '2025', likely: 13.1, optimistic: 13.1, conservative: 13.1 },
    { year: '2027', likely: 18, optimistic: 22, conservative: 15 },
    { year: '2029', likely: 25, optimistic: 35, conservative: 20 },
    { year: '2031', likely: 35, optimistic: 50, conservative: 28 },
    { year: '2033', likely: 48, optimistic: 70, conservative: 38 },
    { year: '2035', likely: 65, optimistic: 95, conservative: 52 },
    { year: '2037', likely: 85, optimistic: 130, conservative: 70 },
    { year: '2039', likely: 110, optimistic: 175, conservative: 95 },
    { year: '2041', likely: 145, optimistic: 240, conservative: 130 },
    { year: '2043', likely: 190, optimistic: 320, conservative: 175 },
    { year: '2045', likely: 250, optimistic: 430, conservative: 235 },
];

export function WealthProjections() {
    return (
        <div className="bg-white card-border p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-brand-green">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8" /></svg>
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider">Wealth Projections</h3>
                </div>
                <button className="flex items-center gap-1 text-[10px] font-bold border border-black/10 px-2 py-1 rounded hover:bg-black/5">
                    <Settings className="w-3 h-3" />
                    SETTINGS
                </button>
            </div>

            <div className="mb-6">
                <div className="text-3xl font-bold tracking-tight">$13,107,926.29 <span className="text-sm font-normal text-black/40">CAD</span></div>
                <div className="text-[10px] font-bold text-brand-green mt-1">
                    ▲ +$61,386,856.71 (+466.18%) ALL TIME
                </div>
            </div>

            <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorOptimistic" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6FCF97" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#6FCF97" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorLikely" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6FCF97" stopOpacity={0.5} />
                                <stop offset="95%" stopColor="#6FCF97" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
                        <XAxis
                            dataKey="year"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#00000040' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#00000040' }}
                            tickFormatter={(value) => `$${value}M`}
                        />
                        <Tooltip />
                        <Area type="monotone" dataKey="optimistic" stroke="#6FCF97" fillOpacity={1} fill="url(#colorOptimistic)" strokeWidth={1} />
                        <Area type="monotone" dataKey="likely" stroke="#27AE60" fillOpacity={1} fill="url(#colorLikely)" strokeWidth={2} />
                        <Area type="monotone" dataKey="conservative" stroke="#219653" fillOpacity={0} strokeWidth={1} strokeDasharray="5 5" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-black/10" />
                        <span className="text-[10px] text-black/60">Likely Scenario: $13.4M-$74.2M</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-green" />
                        <span className="text-[10px] text-black/60">Optimistic Scenario: $13.4M-$89.7M</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-green/40" />
                        <span className="text-[10px] text-black/60">Conservative Scenario: $13.4M-$54.4M</span>
                    </div>
                </div>

                <div className="bg-brand-green/20 border border-brand-green/30 rounded p-2 flex items-center gap-3 max-w-[240px]">
                    <div className="w-8 h-8 bg-brand-yellow rounded-sm flex items-center justify-center shrink-0">
                        <span className="text-lg">💰</span>
                    </div>
                    <p className="text-[10px] leading-tight font-medium">
                        In 20 years, we project your portfolio will be worth around <span className="font-bold">$74.2M</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}
