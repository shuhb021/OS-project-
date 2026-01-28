import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JOURNALS } from '../data/mockData';
import { Search, Filter, ArrowRight, BarChart, Bookmark } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const JournalsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('impact');

  const filteredJournals = JOURNALS.filter(j => 
    j.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => sortBy === 'impact' ? b.impactFactor - a.impactFactor : a.title.localeCompare(b.title));

  return (
    <div className="min-h-screen bg-white font-primary">
      <div className="bg-[#4A0404] py-20 text-white border-b-4 border-[#800000]">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 uppercase tracking-tight">Academic Repository</h1>
          <p className="text-red-100/60 text-lg max-w-2xl leading-relaxed italic font-light">
            Discover peer-reviewed journals dedicated to applied sciences, vocational excellence, and industry-integrated research.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Search and Sort Toolbar */}
          <div className="flex-grow flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search repository by title or subject..."
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-[#800000] outline-none transition-all text-slate-800 italic"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Sort By:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-slate-200 rounded-sm px-6 py-4 text-xs font-black uppercase tracking-widest focus:ring-1 focus:ring-[#800000] outline-none cursor-pointer"
              >
                <option value="impact">Impact Factor</option>
                <option value="name">Volume Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredJournals.map((journal) => (
            <div key={journal.id} className="group bg-white rounded-sm border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#800000] transition-all flex flex-col h-full overflow-hidden">
              <div className="h-56 overflow-hidden relative border-b border-slate-100">
                <img src={journal.coverImage} alt={journal.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute top-4 right-4 bg-[#800000] text-white text-[9px] font-black px-4 py-1.5 rounded-sm uppercase tracking-widest shadow-xl">
                  IF: {journal.impactFactor}
                </div>
                <div className="absolute inset-0 bg-[#800000]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <span className="text-[10px] font-black text-[#C41E3A] uppercase tracking-widest mb-3 block">{journal.category}</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-[#800000] transition-colors line-clamp-2 leading-tight">
                  {journal.title}
                </h3>
                <p className="text-sm text-slate-500 mb-8 flex-grow line-clamp-3 leading-relaxed font-light italic">
                  {journal.description}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <BarChart size={14} className="text-[#800000]" /> h-index: {journal.hIndex}
                  </div>
                  <Link 
                    to={`/journal/${journal.id}/overview`}
                    className="flex items-center gap-2 text-[#800000] font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    Enter Volume <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalsList;