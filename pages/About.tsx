
import React from 'react';
import { Target, Eye, Globe2, Award } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs />
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Empowering Global <br />
              <span className="text-blue-700">Scientific Dialogue</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Founded in 1994, AcademiaPress is a non-profit publishing group dedicated to making high-quality scientific research accessible to everyone, everywhere.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-slate-900">30+</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Years of <br />Excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-slate-900">120k</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Published <br />Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
              <Target className="text-blue-700" size={32} /> Our Mission
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              To provide a robust, peer-reviewed platform that accelerates the discovery and translation of knowledge. We believe that open science is better science.
            </p>
            <ul className="space-y-4">
              {['Highest standards of peer review', 'Fast and transparent publishing', 'Permanent digital preservation', 'Global editorial board diversity'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-semibold text-slate-800">
                  <div className="w-2 h-2 rounded-full bg-blue-700" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-700 rounded-3xl p-10 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Eye className="text-blue-200" size={32} /> Our Vision
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed italic">
              "A world where every researcher has the tools and platform to solve complex global challenges through shared intelligence and collaborative publishing."
            </p>
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="bg-slate-900 py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">A Truly Global Network</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Connecting institutions and scholars across 150+ countries to foster cross-disciplinary innovation.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <Globe2 size={48} className="text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Global Presence</h4>
              <p className="text-slate-500 text-sm">Offices in Oxford, Beijing, and San Francisco.</p>
            </div>
            <div className="text-center group">
              <Award size={48} className="text-blue-400 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-white font-bold mb-2">Accredited</h4>
              <p className="text-slate-500 text-sm">Indexed by SCOPUS, WoS, and PubMed.</p>
            </div>
            {/* Additional cards... */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
