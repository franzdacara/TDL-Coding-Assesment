'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const spendingData = [
    { month: '2025', value: 30 },
    { month: '2026', value: 45 },
    { month: '2027', value: 35 },
    { month: '2028', value: 60 },
    { month: '2029', value: 55 },
    { month: '2030', value: 75 },
    { month: '2031', value: 40 },
    { month: '2032', value: 65 },
    { month: '2033', value: 85 },
    { month: '2034', value: 70 },
];

export function SpendingAnalytics() {
    return (
        <div className="bg-white card-border p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 text-brand-orange">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider">Spending Analytics</h3>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 text-[10px] font-bold border border-black/10 px-3 py-1 rounded hover:bg-black/5">
                        Repairs &amp; Maintenance
                        <ChevronDown className="w-3 h-3" />
                    </button>
                    <button className="flex items-center gap-2 text-[10px] font-bold border border-black/10 px-3 py-1 rounded hover:bg-black/5">
                        Last 3 Months
                        <ChevronDown className="w-3 h-3" />
                    </button>
                </div>
            </div>

            <div className="flex-1 min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={spendingData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#00000010" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#00000040' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fill: '#00000040' }}
                            tickFormatter={(value) => `$${value}k`}
                        />
                        <Tooltip />
                        <Bar dataKey="value" fill="#F2994A" radius={[2, 2, 0, 0]}>
                            {spendingData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 8 ? '#F2994A' : '#F2994A40'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
                <p className="text-[10px] text-black/40 leading-relaxed max-w-xs">
                    Your &quot;Repairs &amp; Maintenance&quot; spend is $0 in the last 3 months which represents 0.0% of your yearly revenue.
                </p>

                <div className="bg-brand-orange/20 border border-brand-orange/30 rounded p-2 flex items-center gap-3 max-w-[240px]">
                    <div className="w-8 h-8 bg-brand-yellow rounded-sm flex items-center justify-center shrink-0">
                        <span className="text-lg">🔑</span>
                    </div>
                    <p className="text-[10px] leading-tight font-medium">
                        This is 100% less than your projected 8.0%.
                    </p>
                </div>
            </div>
        </div>
    );
}

export function PropertyUnits() {
    const unitData = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        status: i < 7 ? 'occupied' : i < 12 ? 'renovation' : 'vacant'
    }));

    return (
        <div className="bg-white card-border overflow-hidden flex flex-col h-full">
            <div className="bg-brand-blue/20 p-3 border-b border-black/10 flex items-center gap-2">
                <span className="text-brand-blue">🏢</span>
                <h3 className="text-[10px] font-bold uppercase tracking-wider">Property Units</h3>
            </div>

            <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-3xl font-serif mb-8">15 Buildings</h2>

                <div className="flex gap-1 h-24 mb-8">
                    {unitData.map((unit) => (
                        <div
                            key={unit.id}
                            className={cn(
                                "flex-1 rounded-sm border border-black/10",
                                unit.status === 'occupied' ? "bg-brand-blue" :
                                    unit.status === 'renovation' ? "bg-brand-blue/40" : "bg-black/5"
                            )}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-auto">
                    <div>
                        <div className="text-xl font-bold">7</div>
                        <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Occupied</p>
                        <div className="h-0.5 bg-brand-blue mt-2 w-full" />
                    </div>
                    <div>
                        <div className="text-xl font-bold">5</div>
                        <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Renovation</p>
                        <div className="h-0.5 bg-brand-blue/40 mt-2 w-full" />
                    </div>
                    <div>
                        <div className="text-xl font-bold">3</div>
                        <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Vacant</p>
                        <div className="h-0.5 bg-black/10 mt-2 w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
