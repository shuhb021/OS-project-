
import React from 'react';
import { Book, ShieldCheck, HelpCircle, FileCheck, Scale, MessageSquare } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Resources: React.FC = () => {
  const categories = [
    { title: 'Author Guidelines', icon: Book, desc: 'Detailed instructions on formatting, citation styles, and submission requirements.', color: 'bg-blue-50 text-blue-600' },
    { title: 'Peer Review Policy', icon: ShieldCheck, desc: 'Learn about our rigorous double-blind peer review process and standards.', color: 'bg-green-50 text-green-600' },
    { title: 'Ethics & Integrity', icon: Scale, desc: 'Our commitment to research ethics, plagiarism prevention, and transparency.', color: 'bg-purple-50 text-purple-600' },
    { title: 'Open Access Info', icon: FileCheck, desc: 'Understand licensing options, APCs, and how we support open science.', color: 'bg-orange-50 text-orange-600' },
    { title: 'Reviewer Hub', icon: MessageSquare, desc: 'Resources and tools for our dedicated team of expert peer reviewers.', color: 'bg-indigo-50 text-indigo-600' },
    { title: 'FAQ', icon: HelpCircle, desc: 'Answers to common questions about publishing with AcademiaPress.', color: 'bg-red-50 text-red-600' },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs />
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Publishing Resources</h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed italic">
            Everything you need to know about the publishing lifecycle, from preparation to post-publication dissemination.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((cat, i) => (
            <div key={i} className="group p-8 rounded-3xl border border-slate-200 hover:border-blue-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <cat.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{cat.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{cat.desc}</p>
              <button className="text-blue-700 font-bold text-sm hover:underline flex items-center gap-1">
                Read More 
              </button>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Need personalized support?</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our editorial support team is available 24/7 to assist with technical queries or manuscript status updates.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">Contact Support</button>
                <button className="bg-white/10 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">Live Chat</button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Latest Update</p>
                <p className="text-white font-medium italic mb-2">"New AI-assisted formatting tools now available for all journal submissions."</p>
                <p className="text-slate-500 text-xs">— March 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
