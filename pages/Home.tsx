import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { JOURNALS, ARTICLES } from '../data/mockData';
import { 
  ArrowRight, 
  FileText, 
  ChevronRight,
  Cpu,
  Database,
  Terminal,
  Settings,
  Rocket,
  Download,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Filter,
  Users,
  Calendar
} from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredJournals = JOURNALS.slice(0, 4);
  const [selectedYear, setSelectedYear] = useState<string>('All Years');

  const topics = [
    { name: 'Artificial Intelligence', icon: Cpu },
    { name: 'Data Science', icon: Database },
    { name: 'Computer Systems', icon: Terminal },
    { name: 'Applied Engineering', icon: Settings },
    { name: 'Emerging Technologies', icon: Rocket },
  ];

  const years = useMemo(() => {
    const allYears = ARTICLES.map(a => a.year.toString());
    return ['All Years', ...Array.from(new Set(allYears)).sort((a, b) => b.localeCompare(a))];
  }, []);

  const latestPapers = useMemo(() => {
    return ARTICLES
      .filter(a => selectedYear === 'All Years' || a.year.toString() === selectedYear)
      .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
      .slice(0, 6);
  }, [selectedYear]);

  return (
    <div className="animate-in fade-in duration-700 font-primary bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-red-50 border border-red-100">
              <span className="w-2 h-2 rounded-full bg-[#800000] animate-pulse" />
              <span className="text-[#800000] text-[11px] font-black uppercase tracking-[0.2em]">
                Presented by Symbiosis University of Applied Sciences
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 mb-8 leading-[0.95] tracking-tight">
              Skill<span className="text-[#800000]">Sphere</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-light max-w-2xl">
              An academic platform for high-quality research, innovation, and scholarly publications across applied sciences.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link 
                to="/submissions" 
                className="bg-[#800000] text-white px-10 py-4 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-[#4A0404] transition-all shadow-xl shadow-red-900/10 flex items-center gap-2 group"
              >
                Call for Papers
                <FileText size={16} className="group-hover:rotate-12 transition-transform" />
              </Link>
              <Link 
                to="/journals" 
                className="bg-white text-[#800000] border-2 border-[#800000] px-10 py-4 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-red-50 transition-all flex items-center gap-2 group"
              >
                Explore Latest Papers
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="mt-16 flex items-center gap-8 border-t border-slate-100 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/100?u=user${i}`} 
                    className="w-10 h-10 rounded-full border-2 border-white grayscale hover:grayscale-0 transition-all cursor-help"
                    alt="Scholar"
                  />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Trusted by <span className="text-slate-900">500+ researchers</span> globally
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Papers Section */}
      <section className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <span className="text-[#C41E3A] font-black uppercase tracking-widest text-xs mb-3 block">Research Repository</span>
              <h2 className="text-4xl font-serif font-bold text-slate-900 leading-none">Latest Published Papers</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-sm">
                <Filter size={16} className="text-slate-400" />
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="text-xs font-bold text-slate-600 bg-transparent border-none focus:ring-0 cursor-pointer"
                >
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPapers.map((paper) => (
              <div 
                key={paper.id} 
                onClick={() => navigate(`/journal/${paper.journalId}/article/${paper.id}`)}
                className="group bg-white p-8 border border-slate-200 rounded-sm hover:border-[#800000] hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black text-[#C41E3A] uppercase tracking-widest bg-red-50 px-2 py-1 rounded-sm">
                      {paper.publicationType}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <Calendar size={12} /> {paper.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-4 group-hover:text-[#800000] transition-colors leading-snug line-clamp-2">
                    {paper.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-bold text-slate-700">
                      {paper.authors.map(a => a.name).join(', ')}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic truncate">
                      {paper.authors[0].affiliation}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Citations: {paper.citations}
                  </span>
                  <div className="flex items-center gap-2 text-[#800000] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Full Paper <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/journals" className="inline-flex items-center gap-2 bg-white border-2 border-[#800000] text-[#800000] px-12 py-4 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-red-50 transition-all">
              Explore Research Archive <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="text-center group">
            <h4 className="text-5xl font-serif font-bold text-[#800000] mb-2 group-hover:scale-110 transition-transform">A++</h4>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">University Grade</p>
          </div>
          <div className="text-center group">
            <h4 className="text-5xl font-serif font-bold text-slate-900 mb-2 group-hover:scale-110 transition-transform">12k+</h4>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Research Citations</p>
          </div>
          <div className="text-center group">
            <h4 className="text-5xl font-serif font-bold text-slate-900 mb-2 group-hover:scale-110 transition-transform">150+</h4>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Industry Partners</p>
          </div>
          <div className="text-center group">
            <h4 className="text-5xl font-serif font-bold text-slate-900 mb-2 group-hover:scale-110 transition-transform">Open</h4>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Access Compliant</p>
          </div>
        </div>
      </section>

      {/* Featured Journals */}
      <section className="max-w-7xl mx-auto px-4 py-32 border-t border-slate-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-left">
            <span className="text-[#C41E3A] font-black uppercase tracking-widest text-xs mb-3 block">Publication Volumes</span>
            <h2 className="text-4xl font-serif font-bold text-slate-900 leading-none">Journal Series</h2>
          </div>
          <Link to="/journals" className="text-xs font-black uppercase tracking-widest text-[#800000] flex items-center gap-2 hover:gap-4 transition-all">
            Browse All Volumes <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredJournals.map((journal) => (
            <div key={journal.id} className="group flex bg-white border border-slate-200 hover:border-[#800000] transition-all duration-300 rounded-sm overflow-hidden">
              <div className="w-1/3 overflow-hidden relative border-r border-slate-100">
                <img src={journal.coverImage} alt={journal.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#800000]/5" />
              </div>
              <div className="p-10 w-2/3 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black text-[#800000] uppercase tracking-widest mb-2 block">{journal.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-[#800000] transition-colors mb-4 leading-tight">
                    {journal.title}
                  </h3>
                  <div className="flex gap-4 mb-6">
                    <div className="text-center bg-slate-50 px-3 py-2 border border-slate-100 rounded-sm">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">IF Score</p>
                      <p className="text-lg font-black text-[#800000]">{journal.impactFactor}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link to={`/journal/${journal.id}/overview`} className="flex-1 bg-[#800000] text-white text-[10px] font-black uppercase tracking-widest py-3 text-center rounded-sm hover:bg-[#4A0404]">
                    View Scope
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call for Papers Section */}
      <section className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <span className="text-[#C41E3A] font-black uppercase tracking-widest text-xs mb-3 block">Submissions Open</span>
                <h2 className="text-5xl font-serif font-bold text-slate-900 leading-tight mb-6">Call for Papers</h2>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  SkillSphere invites scholars, researchers, and practitioners to submit their original research papers and review articles. We seek high-quality contributions that push the boundaries of applied science and industry innovation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-sm group hover:border-[#800000] transition-colors">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#800000]">
                      <topic.icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-slate-700">{topic.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-red-50 border border-red-100 rounded-sm max-w-sm">
                <Clock className="text-[#800000]" size={24} />
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Submission Deadline</p>
                  <p className="text-sm font-black text-[#800000]">September 30, 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-[#800000] p-12 text-white shadow-2xl rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-20 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-6">Author Submission Portal</h3>
                <p className="text-red-100/70 mb-10 leading-relaxed font-light">
                  All submitted papers undergo a rigorous double-blind peer-review process to ensure scientific excellence and practical relevance.
                </p>
                
                <div className="flex flex-col gap-4">
                  <Link to="/submissions" className="w-full bg-white text-[#800000] py-4 px-8 rounded-sm text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-50 transition-all active:scale-95 shadow-lg">
                    Submit Your Paper <ArrowRight size={18} />
                  </Link>
                  <button className="w-full bg-transparent border-2 border-white/30 py-4 px-8 rounded-sm text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95">
                    Download Guidelines <Download size={18} />
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-red-200/50">
                  <span className="flex items-center gap-2"><Shield size={12} /> Peer Reviewed</span>
                  <span className="flex items-center gap-2"><Globe size={12} /> Global Indexing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applied Sciences Vision */}
      <section className="bg-[#4A0404] py-32 text-white border-y border-[#800000]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-8">Bridging Academia & Industry</h2>
          <p className="text-red-100/60 leading-relaxed mb-12 text-lg font-light italic">
            "We are committed to fostering a culture of rigorous applied research that translates into real-world vocational excellence. SkillSphere serves as the nexus for scholars dedicated to innovation."
          </p>
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <Shield size={32} className="mx-auto mb-4 text-red-400" />
              <p className="text-[10px] font-black uppercase tracking-widest">Ethical Review</p>
            </div>
            <div className="text-center">
              <Zap size={32} className="mx-auto mb-4 text-red-400" />
              <p className="text-[10px] font-black uppercase tracking-widest">Rapid Publication</p>
            </div>
            <div className="text-center">
              <TrendingUp size={32} className="mx-auto mb-4 text-red-400" />
              <p className="text-[10px] font-black uppercase tracking-widest">Global Indexing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
