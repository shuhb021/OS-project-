
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES, JOURNALS } from '../data/mockData';
import { Share2, Download, Bookmark, Quote, Info, ExternalLink, Calendar, FileText, BarChart, CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const ArticleDetails: React.FC = () => {
  const { journalId, articleId } = useParams();
  const [isCopied, setIsCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const article = ARTICLES.find(a => a.id === articleId);
  const journal = JOURNALS.find(j => j.id === journalId);

  if (!article || !journal) return <div className="p-20 text-center">Article not found.</div>;

  const handleCite = () => {
    const citation = `${article.authors.map(a => a.name).join(', ')}. (${new Date(article.publishedDate).getFullYear()}). ${article.title}. ${journal.title}, ${article.volume}(${article.issue}). DOI: ${article.doi}`;
    navigator.clipboard.writeText(citation);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert('Your download has started (simulation).');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress bar / Context */}
      <div className="bg-slate-900 text-white py-3 px-4 sticky top-16 z-40 shadow-xl flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 truncate">
            <Link to={`/journal/${journalId}/overview`} className="text-blue-400 hover:underline font-bold text-xs uppercase tracking-wider shrink-0">
              {journal.shortTitle}
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-xs truncate font-medium text-slate-300 hidden sm:inline">{article.title}</span>
          </div>
          <div className="flex gap-4 shrink-0">
            <button 
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded text-xs font-bold transition-all flex items-center gap-2 shadow-inner disabled:opacity-50"
            >
              <Download size={14} className={isDownloading ? 'animate-bounce' : ''} /> {isDownloading ? 'Loading...' : 'PDF'}
            </button>
            <button 
              onClick={handleCite}
              className="bg-slate-800 hover:bg-slate-700 px-4 py-1.5 rounded text-xs font-bold transition-all flex items-center gap-2"
            >
              {isCopied ? <CheckCircle size={14} className="text-green-400" /> : <Quote size={14} />} 
              {isCopied ? 'Copied' : 'Cite'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Breadcrumbs />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest border border-slate-200">
                  Research Article
                </span>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest border border-green-200">
                  Open Access
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight mb-8">
                {article.title}
              </h1>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                {article.authors.map((author, idx) => (
                  <div key={idx} className="group relative">
                    <span className="text-lg font-bold text-blue-700 hover:underline cursor-pointer">
                      {author.name}
                    </span>
                    <div className="absolute top-full left-0 hidden group-hover:block z-50 pt-2 w-64">
                      <div className="bg-white p-4 rounded-xl shadow-2xl border border-slate-100 text-sm">
                        <p className="font-bold text-slate-900 mb-1">{author.name}</p>
                        <p className="text-slate-500 leading-relaxed">{author.affiliation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 py-6 border-y border-slate-100 text-sm font-medium text-slate-500 mb-12">
                <div className="flex items-center gap-2"><Calendar size={16} /> {article.publishedDate}</div>
                <div className="flex items-center gap-2"><FileText size={16} /> Vol {article.volume}, Issue {article.issue}</div>
                <div className="flex items-center gap-2"><Info size={16} /> DOI: <span className="text-blue-700 hover:underline cursor-pointer">{article.doi}</span></div>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">Abstract</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {article.abstract}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-bold text-slate-400 mr-2">Keywords:</span>
                {article.keywords.map(kw => (
                  <span key={kw} className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded-full hover:bg-blue-50 hover:text-blue-700 cursor-pointer transition-colors">
                    {kw}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-100 pb-2">Introduction</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>Academic articles typically follow an IMRaD structure: Introduction, Methods, Results, and Discussion. In this section, we would normally find a deep dive into the background of the study, the problem statement, and the rationale for the current investigation.</p>
                <p>The field of material engineering has seen a dramatic shift towards sustainable and recyclable composites in recent years. This paradigm shift is driven by both regulatory pressures and environmental concerns. While thermoplastic matrices offer high recyclability, their mechanical performance often lags behind thermosetting counterparts...</p>
                <div className="bg-slate-50 p-8 rounded-2xl text-center font-serif italic text-slate-400 border border-dashed border-slate-300">
                  Full article content is available for authenticated users or via institution access.
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BarChart size={18} className="text-blue-600" /> Article Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Citations</span>
                  <span className="font-bold text-slate-900">{article.citations}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Downloads</span>
                  <span className="font-bold text-slate-900">{article.downloads}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Altmetric</span>
                  <span className="font-bold text-slate-900">42</span>
                </div>
                <button className="w-full mt-4 text-xs font-bold text-blue-700 hover:underline">View Detailed Metrics</button>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 rounded-2xl">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Bookmark size={18} className="text-blue-400" /> Options
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between text-sm p-2 hover:bg-slate-800 rounded transition-colors">
                  Add to Favorites <ExternalLink size={14} />
                </button>
                <button className="w-full flex items-center justify-between text-sm p-2 hover:bg-slate-800 rounded transition-colors">
                  Share Article <Share2 size={14} />
                </button>
                <button 
                  onClick={handleCite}
                  className="w-full flex items-center justify-between text-sm p-2 hover:bg-slate-800 rounded transition-colors"
                >
                  {isCopied ? 'Citation Copied' : 'Export Citation'} <Quote size={14} />
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
