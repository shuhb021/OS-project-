import React from 'react';
import { Book, ShieldCheck, HelpCircle, FileCheck, Scale, MessageSquare } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Resources: React.FC = () => {
  const categories = [
    { title: 'Author Guidelines', icon: Book, desc: 'Detailed instructions on formatting, citation styles, and submission requirements.', color: 'bg-red-50 text-[#800000]' },
    { title: 'Peer Review Policy', icon: ShieldCheck, desc: 'Learn about our rigorous double-blind peer review process and standards.', color: 'bg-red-50 text-[#800000]' },
    { title: 'Ethics & Integrity', icon: Scale, desc: 'Our commitment to research ethics, plagiarism prevention, and transparency.', color: 'bg-red-50 text-[#800000]' },
    { title: 'Open Access Info', icon: FileCheck, desc: 'Understand licensing options, APCs, and how we support open science.', color: 'bg-red-50 text-[#800000]' },
    { title: 'Reviewer Hub', icon: MessageSquare, desc: 'Resources and tools for our dedicated team of expert peer reviewers.', color: 'bg-red-50 text-[#800000]' },
    { title: 'FAQ', icon: HelpCircle, desc: 'Answers to common questions about publishing with SkillSphere.', color: 'bg-red-50 text-[#800000]' },
  ];

  return (
    <div className="min-h-screen bg-white font-primary py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs />
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 uppercase tracking-tight">Academic Resources</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed italic font-light">
            Essential documentation for scholars navigating the publishing lifecycle at SkillSphere.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className="group p-10 rounded-sm border border-slate-200 hover:border-[#800000] hover:shadow-2xl transition-all duration-300">
              <div className={`w-14 h-14 rounded-sm ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm`}>
                <cat.icon size={28} />
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-4 uppercase tracking-widest">{cat.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm italic">{cat.desc}</p>
              <button className="text-[#800000] font-black text-[10px] uppercase tracking-widest hover:underline flex items-center gap-1">
                View Repository 
              </button>
            </div>
          ))}
        </div>

        <div className="bg-[#1a0101] rounded-sm p-16 text-white relative overflow-hidden border-b-8 border-[#800000]">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 uppercase tracking-tight">Direct Editorial Support</h2>
              <p className="text-red-100/60 text-lg mb-10 leading-relaxed font-light italic">
                Our specialized support team is available to assist with manuscript status updates and technical formatting queries.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#800000] px-10 py-4 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-[#4A0404] transition-all shadow-xl">Contact Registry</button>
                <button className="bg-white/5 border border-white/10 px-10 py-4 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">Support Desk</button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white/5 p-10 rounded-sm backdrop-blur-md border border-white/10">
                <p className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em] mb-4">Official Bulletin</p>
                <p className="text-white font-serif italic mb-4">"Updated APC structure for 2024 academic cycle now active."</p>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">— September 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;