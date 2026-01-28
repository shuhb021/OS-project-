
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNALS } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Activity, Globe, Download, Award } from 'lucide-react';

const Metrics: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const journal = JOURNALS.find(j => j.id === id);

  if (!journal) return <div className="p-20 text-center">Journal not found.</div>;

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
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            <Link to={`/journal/${id}/overview`} className="hover:text-blue-600">{journal.title}</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-600">Metrics</span>
          </nav>
          <h1 className="text-4xl font-serif font-bold text-slate-900">Journal Metrics</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-700"><Award size={24} /></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Impact Factor</p>
              <p className="text-2xl font-bold text-slate-900">{journal.impactFactor}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-700"><Activity size={24} /></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">H-Index</p>
              <p className="text-2xl font-bold text-slate-900">{journal.hIndex}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="bg-green-100 p-3 rounded-xl text-green-700"><Download size={24} /></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Ann. Downloads</p>
              <p className="text-2xl font-bold text-slate-900">124k</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="bg-orange-100 p-3 rounded-xl text-orange-700"><Globe size={24} /></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Global Rank</p>
              <p className="text-2xl font-bold text-slate-900">Top 10%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Impact Factor Chart */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Impact Factor Trend</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={journal.metrics}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="impactFactor" 
                    stroke="#1d4ed8" 
                    strokeWidth={4} 
                    dot={{fill: '#1d4ed8', r: 6}} 
                    activeDot={{r: 8}}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Usage Chart */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Article Downloads (2024)</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                  />
                  <Bar dataKey="downloads" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-900 rounded-2xl p-10 text-white flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 leading-tight">Committed to Transparency and Excellence</h2>
            <p className="text-blue-200 mb-6">
              AcademiaPress uses industry-standard methodologies to track and verify all journal metrics, ensuring authors can make informed decisions about their publishing career.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              Download Full Report
            </button>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-4xl font-bold mb-1">98%</p>
              <p className="text-xs font-bold text-blue-300 uppercase">Author Satisfaction</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-4xl font-bold mb-1">1.2M</p>
              <p className="text-xs font-bold text-blue-300 uppercase">Annual Citations</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-4xl font-bold mb-1">150+</p>
              <p className="text-xs font-bold text-blue-300 uppercase">Countries Reached</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
              <p className="text-4xl font-bold mb-1">4.2</p>
              <p className="text-xs font-bold text-blue-300 uppercase">Avg Peer Review Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
