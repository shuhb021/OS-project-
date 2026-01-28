
import React from 'react';
import { Target, Eye, Globe2, Award, ShieldCheck, Users, GraduationCap, BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-primary">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs />
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-red-50 border border-red-100">
              <span className="w-2 h-2 rounded-full bg-[#800000]" />
              <span className="text-[#800000] text-[11px] font-black uppercase tracking-[0.2em]">
                Symbiosis University of Applied Sciences (SUAS)
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 leading-[0.95] tracking-tight uppercase">
              Skill<span className="text-[#800000]">Sphere</span>: <br />
              <span className="text-slate-600">The Scholarly Hub</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-light italic">
              SkillSphere is the official academic publishing portal presented by Symbiosis University of Applied Sciences. 
              We are dedicated to the rigorous pursuit of research excellence and the maintenance of unwavering academic integrity 
              within the global vocational landscape.
            </p>
            <div className="flex flex-wrap gap-12">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-[#800000]">30+</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Years of <br />Institutional Legacy</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-slate-900">10k+</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Published <br />Manuscripts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Mission */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <Target className="text-[#800000]" size={32} /> Research Excellence
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                At SkillSphere, our primary objective is to elevate the quality of applied research. We provide a robust 
                peer-review framework that ensures every published work meets the highest standards of scientific 
                rigour and practical utility.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <ShieldCheck className="text-[#800000]" size={32} /> Academic Integrity
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                Integrity is the cornerstone of our portal. Under the stewardship of Symbiosis University, we adhere to 
                strict ethical guidelines, employing advanced plagiarism detection and double-blind review processes 
                to safeguard scholarly authenticity.
              </p>
            </div>
          </div>
          <div className="bg-[#800000] rounded-sm p-16 text-white flex flex-col justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-24 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
              <Eye className="text-red-300 mb-8" size={48} />
              <h2 className="text-3xl font-serif font-bold mb-6 uppercase tracking-tight">Our Institutional Vision</h2>
              <p className="text-xl text-red-100 leading-relaxed italic font-light">
                "To become the world's most trusted platform for vocational research, bridging the divide between 
                theoretical excellence and real-world industrial application through the power of open access 
                scholarly publishing."
              </p>
              <p className="mt-8 text-xs font-black uppercase tracking-widest text-red-400">
                — Office of Research, SUAS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Segments */}
      <section className="bg-slate-50 py-32 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-[#C41E3A] font-black uppercase tracking-widest text-xs mb-3 block">Who We Serve</span>
            <h2 className="text-4xl font-serif font-bold text-slate-900 uppercase tracking-tight">A Unified Platform for Discovery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 border border-slate-200 rounded-sm hover:border-[#800000] transition-colors group">
              <div className="w-12 h-12 bg-red-50 text-[#800000] rounded-sm flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 uppercase">For Researchers</h3>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                A high-visibility venue for sharing experimental data and innovative theories with a global audience of peers.
              </p>
            </div>
            <div className="bg-white p-10 border border-slate-200 rounded-sm hover:border-[#800000] transition-colors group">
              <div className="w-12 h-12 bg-red-50 text-[#800000] rounded-sm flex items-center justify-center mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 uppercase">For Students</h3>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                Access to the latest developments in applied sciences to supplement coursework and inspire thesis projects.
              </p>
            </div>
            <div className="bg-white p-10 border border-slate-200 rounded-sm hover:border-[#800000] transition-colors group">
              <div className="w-12 h-12 bg-red-50 text-[#800000] rounded-sm flex items-center justify-center mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 uppercase">For Faculty</h3>
              <p className="text-sm text-slate-500 leading-relaxed italic">
                Tools to manage editorial boards, lead special issues, and showcase institutional research achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="bg-[#1a0101] py-32 overflow-hidden relative border-t-8 border-[#800000]">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <Globe2 size={64} className="text-red-500 mx-auto mb-10 opacity-50" />
          <h2 className="text-4xl font-serif font-bold text-white mb-8 uppercase tracking-tight">The Symbiosis Legacy</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-red-100/60 text-lg leading-relaxed mb-12 font-light italic">
              Established as part of the prestigious Symbiosis Educational Group, SkillSphere inherits a 
              legacy of education that prioritizes the 'Skill-India' mission. Our university, NAAC Grade A++, 
              continues to pioneer vocational higher education in India and beyond.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl font-black text-white mb-1">A++</p>
                <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">NAAC Grade</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white mb-1">150+</p>
                <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Collaborations</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white mb-1">Top 5%</p>
                <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Indian Private Uni</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white mb-1">24/7</p>
                <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Open Repository</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
