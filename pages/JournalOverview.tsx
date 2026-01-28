import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { JOURNALS, ARTICLES } from '../data/mockData';
import { FileText, Info, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const JournalOverview: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const journal = JOURNALS.find(j => j.id === id);
  const latestArticles = ARTICLES.filter(a => a.journalId === id).slice(0, 3);

  if (!journal) return <div className="p-20 text-center text-slate-600">Journal not found.</div>;

  const tabs = [
    { name: 'Overview', path: `/journal/${id}/overview` },
    { name: 'Articles', path: `/journal/${id}/articles` },
    { name: 'Editorial Board', path: `/journal/${id}/editorial-board` },
    { name: 'Metrics', path: `/journal/${id}/metrics` },
  ];

  return (
    <div className="min-h-screen bg-white font-primary">
      {/* Journal Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs />
          <div className="flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-56 shrink-0 shadow-2xl group overflow-hidden rounded-sm border border-slate-200">
              <img src={journal.coverImage} alt={journal.title} className="w-full group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                {journal.title}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase font-bold block mb-1">Impact Factor</span>
                  <span className="text-xl font-bold text-[#800000]">{journal.impactFactor}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase font-bold block mb-1">h-index</span>
                  <span className="text-xl font-bold text-slate-800">{journal.hIndex}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase font-bold block mb-1">ISSN</span>
                  <span className="text-md font-semibold text-slate-700">{journal.issn}</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-xs text-slate-500 uppercase font-bold block mb-1">e-ISSN</span>
                  <span className="text-md font-semibold text-slate-700">{journal.eissn}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/submissions" className="bg-[#800000] text-white px-6 py-2.5 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-[#4A0404] transition-colors shadow-sm">
                  Submit Manuscript
                </Link>
                <Link to={`/journal/${id}/articles`} className="bg-white text-slate-700 border border-slate-300 px-6 py-2.5 rounded-sm font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-colors">
                  Explore Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Sub-nav */}
      <div className="border-b border-slate-200 sticky top-16 bg-white z-40">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex whitespace-nowrap">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`px-6 py-4 text-xs font-black uppercase tracking-widest border-b-2 transition-all ${
                  location.pathname === tab.path ? 'border-[#800000] text-[#800000]' : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 font-serif uppercase tracking-tight">
              <Info className="text-[#800000]" size={24} /> Aims & Scope
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg italic bg-slate-50 p-8 rounded-xl border-l-4 border-[#800000]">
              {journal.aimsAndScope}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 font-serif uppercase tracking-tight">
                <FileText className="text-[#800000]" size={24} /> Recent Articles
              </h2>
              <Link to={`/journal/${id}/articles`} className="text-xs font-black uppercase tracking-widest text-[#800000] hover:underline flex items-center gap-1">
                All Articles <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-6">
              {latestArticles.map(article => (
                <div key={article.id} className="p-6 rounded-sm border border-slate-100 hover:border-[#C41E3A] hover:bg-red-50/10 transition-all group">
                  <span className="text-[10px] font-black text-[#C41E3A] uppercase tracking-widest bg-red-50 px-2 py-0.5 rounded-sm">Research Article</span>
                  <Link to={`/journal/${id}/article/${article.id}`} className="block mt-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#800000] transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate-500 mt-2 font-medium">
                    {article.authors.map(a => a.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-slate-50 p-8 rounded-sm border border-slate-200">
            <h3 className="font-black text-slate-900 mb-6 text-xs uppercase tracking-[0.2em] border-b border-slate-200 pb-4">Journal Metrics</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Impact Factor</span>
                <span className="text-2xl font-black text-slate-900">{journal.impactFactor}</span>
              </div>
              <Link 
                to={`/journal/${id}/metrics`}
                className="block text-center bg-[#800000] border border-[#800000] py-3 rounded-sm text-xs font-black uppercase tracking-widest text-white hover:bg-[#4A0404] transition-colors shadow-lg shadow-red-900/10"
              >
                Full Metrics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalOverview;