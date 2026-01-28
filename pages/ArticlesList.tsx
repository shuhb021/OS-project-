
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNALS, ARTICLES } from '../data/mockData';
import { Filter, Search, ChevronDown, FileText, Download, Quote, ChevronLeft, ChevronRight, Bookmark, Calendar, Layout } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const ArticlesList: React.FC = () => {
  const { id } = useParams();
  const journal = JOURNALS.find(j => j.id === id);
  const journalArticles = ARTICLES.filter(a => a.journalId === id);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('All Years');
  const [filterType, setFilterType] = useState('All Types');
  const [sortBy, setSortBy] = useState('latest');

  const years = Array.from({ length: 11 }, (_, i) => (2025 - i).toString());
  const types = ['Research Article', 'Review Article', 'Survey Paper', 'Letter'];

  const filteredArticles = useMemo(() => {
    return journalArticles
      .filter(art => {
        const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             art.authors.some(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesYear = filterYear === 'All Years' || art.year.toString() === filterYear;
        const matchesType = filterType === 'All Types' || art.publicationType === filterType;
        return matchesSearch && matchesYear && matchesType;
      })
      .sort((a, b) => {
        if (sortBy === 'latest') return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        return new Date(a.publishedDate).getTime() - new Date(b.publishedDate).getTime();
      });
  }, [searchTerm, filterYear, filterType, sortBy, journalArticles]);

  if (!journal) return <div className="p-20 text-center text-slate-600">Journal not found.</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-primary">
      <div className="bg-[#002147] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-4xl font-serif font-bold mb-3">Published Articles</h1>
          <p className="text-blue-100/70 text-lg">{journal.title}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Advanced Filter Panel */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="bg-white p-6 border border-slate-200 rounded-sm shadow-sm sticky top-24">
              <h3 className="text-sm font-black text-[#002147] uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">
                Refine Search
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Search Within</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <input 
                      type="text"
                      placeholder="Title or Author..."
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 text-xs font-bold rounded-sm focus:ring-1 focus:ring-blue-500 outline-none"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Publication Year</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <select 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 text-xs font-bold rounded-sm appearance-none outline-none focus:ring-1 focus:ring-blue-500"
                      value={filterYear}
                      onChange={(e) => setFilterYear(e.target.value)}
                    >
                      <option>All Years</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Publication Type</label>
                  <div className="relative">
                    <Layout className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                    <select 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 text-xs font-bold rounded-sm appearance-none outline-none focus:ring-1 focus:ring-blue-500"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                    >
                      <option>All Types</option>
                      {types.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setFilterYear('All Years');
                      setFilterType('All Types');
                    }}
                    className="w-full py-2 text-[10px] font-black uppercase text-blue-700 hover:bg-blue-50 transition-colors tracking-widest"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Results Area */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6 px-2">
              <span className="text-xs font-bold text-slate-500">{filteredArticles.length} Result(s) for your selection</span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sort By:</span>
                <select 
                  className="bg-transparent text-xs font-black text-[#002147] border-none focus:ring-0 cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <div key={article.id} className="bg-white p-8 border border-slate-200 hover:shadow-lg transition-all border-l-4 border-l-[#002147]">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-blue-50 px-2 py-1">
                        {article.publicationType}
                      </span>
                      <span className="text-xs font-bold text-slate-400">Vol {article.volume}, Issue {article.issue} ({article.year})</span>
                    </div>

                    <Link to={`/journal/${id}/article/${article.id}`} className="block mb-4">
                      <h2 className="text-2xl font-serif font-bold text-slate-900 hover:text-blue-700 leading-snug">
                        {article.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-slate-600 mb-6 italic leading-relaxed">
                      {article.authors.map(a => a.name).join(', ')}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span>Citations: {article.citations}</span>
                        <span>Downloads: {article.downloads}</span>
                      </div>
                      <div className="flex gap-4">
                        <button className="flex items-center gap-1.5 text-xs font-black text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-widest">
                          <Download size={14} /> PDF
                        </button>
                        <button className="flex items-center gap-1.5 text-xs font-black text-slate-600 hover:text-blue-700 transition-colors uppercase tracking-widest">
                          <Quote size={14} /> Cite
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white p-20 text-center border border-slate-200 border-dashed">
                  <p className="text-slate-400 font-bold italic">No articles match your specific criteria in this journal.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
