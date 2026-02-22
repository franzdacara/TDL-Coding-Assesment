import React from 'react';

export function InvestmentReturn() {
    return (
        <div className="bg-white card-border overflow-hidden flex flex-col h-full">
            <div className="bg-brand-purple/20 p-3 border-b border-black/10 flex items-center gap-2">
                <span className="text-brand-purple">💜</span>
                <h3 className="text-[10px] font-bold uppercase tracking-wider">Total investment &amp; return</h3>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="bg-brand-purple/5 border border-brand-purple/20 rounded p-6 text-center mb-6">
                    <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider mb-2">Return on investment</p>
                    <div className="text-4xl font-bold tracking-tight text-brand-ink">+120.5%</div>
                    <p className="text-[10px] text-brand-green font-bold mt-1">(+18.7% ANNUALIZED)</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider mb-1">Total Investment <br /> to Date ⓘ</p>
                        <p className="text-[9px] text-black/20 font-bold uppercase mb-2">DOWNPAYMENTS + TAXES + CLOSING</p>
                        <div className="text-xl font-bold">$1,383,049</div>
                    </div>
                    <div className="text-center border-l border-black/5">
                        <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider mb-1">With <br /> Stabilization</p>
                        <p className="text-[9px] text-black/20 font-bold uppercase mb-2">TOTAL CAPITAL INVESTED</p>
                        <div className="text-xl font-bold">$5,678,500</div>
                    </div>
                </div>

                <div className="mt-auto pt-6 space-y-2 border-t border-black/5">
                    <div className="flex justify-between text-[10px] font-medium">
                        <span className="text-black/40">Current Equity:</span>
                        <span>$12,522,926</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-medium">
                        <span className="text-black/40">Total Invested:</span>
                        <span>$5,678,500</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-brand-purple">
                        <span>Gain/Loss:</span>
                        <span>$6,844,426</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PortfolioOverview() {
    return (
        <div className="bg-white card-border overflow-hidden flex flex-col h-full">
            <div className="bg-brand-red/20 p-3 border-b border-black/10 flex items-center gap-2">
                <span className="text-brand-red">🏠</span>
                <h3 className="text-[10px] font-bold uppercase tracking-wider">Portfolio Overview</h3>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold">5</div>
                        <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Buildings</p>
                    </div>
                    <div className="text-center border-l border-black/5">
                        <div className="text-4xl font-bold">106</div>
                        <p className="text-[10px] text-black/40 font-bold uppercase tracking-wider">Units</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-brand-red/5 border border-brand-red/10 rounded p-4">
                        <p className="text-[9px] text-black/40 font-bold uppercase tracking-wider mb-4">Annual Revenue</p>
                        <div className="text-lg font-bold">$3,078,000</div>
                        <p className="text-[9px] text-black/40 font-medium">$256,500/MO</p>
                    </div>
                    <div className="bg-brand-red/5 border border-brand-red/10 rounded p-4">
                        <p className="text-[9px] text-black/40 font-bold uppercase tracking-wider mb-4">Net Cashflow</p>
                        <div className="text-lg font-bold">$275,929</div>
                        <p className="text-[9px] text-black/40 font-medium">$22,994/MO</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-red/5 border border-brand-red/10 rounded p-4">
                        <p className="text-[9px] text-black/40 font-bold uppercase tracking-wider mb-4">DSCR</p>
                        <div className="text-lg font-bold">1.25×</div>
                        <p className="text-[9px] text-black/40 font-medium uppercase">COVERAGE RATIO</p>
                    </div>
                    <div className="bg-brand-red/5 border border-brand-red/10 rounded p-4">
                        <p className="text-[9px] text-black/40 font-bold uppercase tracking-wider mb-4">NOI</p>
                        <div className="text-lg font-bold">$1,383,049</div>
                        <p className="text-[9px] text-black/40 font-medium">$115,254/MO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
