import { Sidebar } from '@/components/Sidebar';
import { TopNav } from '@/components/TopNav';
import { DashboardHeader, HeroBanner } from '@/components/Header';
import { WealthProjections } from '@/components/WealthProjections';
import { ActionItems } from '@/components/ActionItems';
import { InvestmentReturn, PortfolioOverview } from '@/components/StatsCards';
import { SpendingAnalytics, PropertyUnits } from '@/components/BottomCards';

export default function Home() {
    return (
        <div className="flex min-h-screen bg-brand-bg">
            <Sidebar />

            <div className="flex-1 flex flex-col min-w-0">
                <TopNav />

                <main className="p-8 max-w-[1600px] mx-auto w-full">
                    <DashboardHeader />
                    <HeroBanner />

                    <div className="grid grid-cols-12 gap-8">
                        {/* Top Row */}
                        <div className="col-span-8">
                            <WealthProjections />
                        </div>
                        <div className="col-span-4 row-span-2">
                            <ActionItems />
                        </div>

                        {/* Middle Row */}
                        <div className="col-span-4">
                            <InvestmentReturn />
                        </div>
                        <div className="col-span-4">
                            <PortfolioOverview />
                        </div>

                        {/* Bottom Row */}
                        <div className="col-span-8">
                            <SpendingAnalytics />
                        </div>
                        <div className="col-span-4">
                            <PropertyUnits />
                        </div>
                    </div>

                    <footer className="mt-12 pt-8 border-t border-black/5 text-center">
                        <p className="text-[10px] text-black/20 font-bold uppercase tracking-widest">
                            Redpoint Portfolio Management • © 2026
                        </p>
                    </footer>
                </main>
            </div>
        </div>
    );
}
