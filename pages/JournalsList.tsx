
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
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Browse Journals</h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Discover cutting-edge research across our portfolio of international peer-reviewed journals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Search and Sort Toolbar */}
          <div className="flex-grow flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search journals by title or subject..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-500 whitespace-nowrap">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="impact">Impact Factor (High to Low)</option>
                <option value="name">Journal Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJournals.map((journal) => (
            <div key={journal.id} className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all flex flex-col h-full overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={journal.coverImage} alt={journal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Impact: {journal.impactFactor}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {journal.title}
                </h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {journal.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <BarChart size={14} /> h-index: {journal.hIndex}
                  </div>
                  <Link 
                    to={`/journal/${journal.id}/overview`}
                    className="flex items-center gap-2 text-blue-700 font-bold text-sm hover:translate-x-1 transition-transform"
                  >
                    View Journal <ArrowRight size={16} />
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
