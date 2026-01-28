import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNALS } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Activity, Globe, Download, Award } from 'lucide-react';

const Metrics: React.FC = () => {
  const { id } = useParams();
  const journal = JOURNALS.find(j => j.id === id);

  if (!journal) return <div className="p-20 text-center text-slate-600">Journal not found.</div>;

  const usageData = [
    { name: 'Jan', downloads: 4000 },
    { name: 'Feb', downloads: 3000 },
    { name: 'Mar', downloads: 5000 },
    { name: 'Apr', downloads: 2780 },
    { name: 'May', downloads: 1890 },
    { name: 'Jun', downloads: 2390 },
    { name: 'Jul', downloads: 3490 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-primary">
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
            <Link to={`/journal/${id}/overview`} className="hover:text-[#800000]">{journal.title}</Link>
            <span className="mx-2 text-slate-300">/</span>
            <span className="text-[#800000]">Metrics</span>
          </nav>
          <h1 className="text-4xl font-serif font-bold text-slate-900 uppercase tracking-tight">Journal Metrics</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm flex items-center gap-5">
            <div className="bg-red-50 p-3 rounded-sm text-[#800000]"><Award size={24} /></div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Impact Factor</p>
              <p className="text-2xl font-black text-slate-900">{journal.impactFactor}</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm flex items-center gap-5">
            <div className="bg-red-50 p-3 rounded-sm text-[#800000]"><Activity size={24} /></div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">H-Index</p>
              <p className="text-2xl font-black text-slate-900">{journal.hIndex}</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm flex items-center gap-5">
            <div className="bg-red-50 p-3 rounded-sm text-[#800000]"><Download size={24} /></div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Ann. Downloads</p>
              <p className="text-2xl font-black text-slate-900">124k</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-sm border border-slate-200 shadow-sm flex items-center gap-5">
            <div className="bg-red-50 p-3 rounded-sm text-[#800000]"><Globe size={24} /></div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Global Rank</p>
              <p className="text-2xl font-black text-slate-900">Top 10%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Impact Factor Chart */}
          <div className="bg-white p-10 rounded-sm border border-slate-200 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-10 uppercase tracking-tight border-b border-slate-100 pb-4">Impact Factor Trend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={journal.metrics}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '0px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="impactFactor" 
                    stroke="#800000" 
                    strokeWidth={4} 
                    dot={{fill: '#800000', r: 6}} 
                    activeDot={{r: 8}}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Usage Chart */}
          <div className="bg-white p-10 rounded-sm border border-slate-200 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-slate-900 mb-10 uppercase tracking-tight border-b border-slate-100 pb-4">Article Downloads (2024)</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10, fontWeight: 700}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '0px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                  />
                  <Bar dataKey="downloads" fill="#C41E3A" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#4A0404] rounded-sm p-12 text-white flex flex-col md:flex-row items-center gap-12 border-b-8 border-[#800000]">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold mb-6 leading-tight uppercase tracking-tight">Committed to Scholarly Transparency</h2>
            <p className="text-red-100/60 mb-8 font-light italic text-lg leading-relaxed">
              SkillSphere employs rigorous methodologies to track and verify all journal metrics, ensuring our global community of researchers has access to verified impact data.
            </p>
            <button className="bg-white text-[#800000] px-10 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-red-50 transition-colors shadow-xl">
              Download Impact Report
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 backdrop-blur-sm">
              <p className="text-4xl font-black mb-1">98%</p>
              <p className="text-[10px] font-black text-red-300 uppercase tracking-widest">Author Satisfaction</p>
            </div>
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 backdrop-blur-sm">
              <p className="text-4xl font-black mb-1">1.2M</p>
              <p className="text-[10px] font-black text-red-300 uppercase tracking-widest">Annual Citations</p>
            </div>
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 backdrop-blur-sm">
              <p className="text-4xl font-black mb-1">150+</p>
              <p className="text-[10px] font-black text-red-300 uppercase tracking-widest">Countries Reached</p>
            </div>
            <div className="bg-white/5 p-6 rounded-sm border border-white/10 backdrop-blur-sm">
              <p className="text-4xl font-black mb-1">4.2</p>
              <p className="text-[10px] font-black text-red-300 uppercase tracking-widest">Peer Review Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;