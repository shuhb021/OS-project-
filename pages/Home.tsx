
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { JOURNALS } from '../data/mockData';
// Added Globe to imports to fix "Cannot find name 'Globe'" error
import { ArrowRight, Search, Zap, Shield, TrendingUp, BarChart2, Calendar, Globe } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchYear, setSearchYear] = useState('All Years');
  const featuredJournals = JOURNALS.slice(0, 4);
  const years = Array.from({ length: 11 }, (_, i) => (2025 - i).toString());

  return (
    <div className="animate-in fade-in duration-700 font-primary">
      {/* Hero Section */}
      <section className="bg-[#002147] relative py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1] uppercase tracking-tight">
            Advancing Global <br className="hidden md:block" />
            <span className="text-blue-400">Scientific Discovery</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/60 mb-12 max-w-3xl mx-auto leading-relaxed font-light italic">
            "Facilitating peer-reviewed academic dialogue for a sustainable future."
          </p>
          
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-0 bg-white shadow-2xl rounded-sm overflow-hidden">
            <div className="flex items-center px-4 py-2 border-r border-slate-100 shrink-0 bg-slate-50/50">
              <Calendar size={18} className="text-slate-400 mr-2" />
              <select 
                value={searchYear}
                onChange={(e) => setSearchYear(e.target.value)}
                className="bg-transparent border-none text-xs font-black text-[#002147] uppercase tracking-widest focus:ring-0 outline-none cursor-pointer"
              >
                <option>All Years</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div className="flex-grow flex items-center px-6 py-4">
              <Search className="text-slate-400 mr-3" size={24} />
              <input 
                type="text" 
                placeholder="Enter title, author, or keywords..."
                className="w-full border-none focus:ring-0 text-slate-800 text-lg placeholder:text-slate-400 placeholder:italic"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest py-4 px-10 transition-all active:scale-95 text-xs">
              Search Archive
            </button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-10 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2 border-b border-slate-700 pb-1">Indexed in Scopus</span>
            <span className="flex items-center gap-2 border-b border-slate-700 pb-1">Crossref DOI Registry</span>
            <span className="flex items-center gap-2 border-b border-slate-700 pb-1">PubMed Central</span>
          </div>
        </div>
      </section>

      {/* Institutional Statistics */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 mb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-y border-slate-200 bg-white">
          <div className="p-10 border-r border-slate-100 flex flex-col items-center text-center gap-4 group">
            <div className="text-blue-600"><Zap size={32} /></div>
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Rapid Decisions</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">28 days Avg. Decision</p>
            </div>
          </div>
          <div className="p-10 border-r border-slate-100 flex flex-col items-center text-center gap-4 group">
            <div className="text-blue-600"><Shield size={32} /></div>
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Global Integrity</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">COPE Compliant</p>
            </div>
          </div>
          <div className="p-10 border-r border-slate-100 flex flex-col items-center text-center gap-4 group">
            <div className="text-blue-600"><TrendingUp size={32} /></div>
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-2">High Citation</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">Top Quartile (Q1)</p>
            </div>
          </div>
          <div className="p-10 flex flex-col items-center text-center gap-4 group">
            <div className="text-blue-600"><BarChart2 size={32} /></div>
            <div>
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-2">Open Access</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-bold">CC BY 4.0 Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-left">
            <span className="text-blue-700 font-black uppercase tracking-widest text-xs mb-3 block">Scientific Portfolios</span>
            <h2 className="text-4xl font-serif font-bold text-slate-900 leading-none">Institutional Journals</h2>
          </div>
          <Link to="/journals" className="text-xs font-black uppercase tracking-widest text-[#002147] flex items-center gap-2 hover:gap-4 transition-all">
            View Full Repository <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredJournals.map((journal) => (
            <div key={journal.id} className="group flex bg-white border border-slate-200 hover:border-blue-700 transition-all duration-300 rounded-sm">
              <div className="w-1/3 overflow-hidden relative border-r border-slate-100">
                <img src={journal.coverImage} alt={journal.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-blue-900/10" />
              </div>
              <div className="p-10 w-2/3 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">{journal.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-4 leading-tight">
                    {journal.title}
                  </h3>
                  <div className="flex gap-4 mb-6">
                    <div className="text-center bg-slate-50 px-3 py-2 border border-slate-100 rounded-sm">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Impact</p>
                      <p className="text-lg font-black text-[#002147]">{journal.impactFactor}</p>
                    </div>
                    <div className="text-center bg-slate-50 px-3 py-2 border border-slate-100 rounded-sm">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">H-Index</p>
                      <p className="text-lg font-black text-[#002147]">{journal.hIndex}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link to={`/journal/${journal.id}/overview`} className="flex-1 bg-[#002147] text-white text-[10px] font-black uppercase tracking-widest py-3 text-center rounded-sm hover:bg-slate-800">
                    Overview
                  </Link>
                  <Link to={`/journal/${journal.id}/articles`} className="flex-1 border border-slate-200 text-[#002147] text-[10px] font-black uppercase tracking-widest py-3 text-center rounded-sm hover:bg-slate-50">
                    Archives
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formal Section Divider */}
      <div className="max-w-4xl mx-auto h-px bg-slate-200 mb-32" />

      {/* Editorial Mission */}
      <section className="bg-slate-50 py-32 mb-10 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-8">Committed to <br />Scientific Transparency</h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              As a global leader in academic publishing, we hold ourselves to the highest standards of peer-review and data accessibility. Every article published undergoes a double-blind review process verified by institutional committees.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm font-bold text-[#002147]">
                <Shield size={20} className="text-blue-600" /> Member of COPE (Ethics Committee)
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-[#002147]">
                {/* Fixed: Globe icon added from imports above */}
                <Globe size={20} className="text-blue-600" /> CLOCKSS Preservation Registry
              </div>
            </div>
          </div>
          <div className="bg-white p-12 shadow-2xl rounded-sm border border-slate-100">
            <h4 className="text-xl font-bold mb-6 text-[#002147]">Institutional Submissions</h4>
            <p className="text-sm text-slate-500 mb-8">Ready to submit your findings to our international panel?</p>
            <Link to="/submissions" className="block w-full text-center bg-blue-600 text-white py-4 font-black uppercase tracking-widest text-xs rounded-sm shadow-xl hover:bg-blue-700 transition-all active:scale-95">
              Submit Manuscript
            </Link>
            <div className="mt-6 flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <span>PDF Instructions</span>
              <span>Review Process</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
