
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Upload, ArrowRight, ArrowLeft, Users, Info, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Submissions: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const steps = [
    { id: 1, name: 'Manuscript Info', icon: Info },
    { id: 2, name: 'Authors & Affiliations', icon: Users },
    { id: 3, name: 'File Upload', icon: Upload },
  ];

  const handleNext = () => {
    if (step === 3) {
      setIsSubmitted(true);
    } else {
      setStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 font-primary flex items-center justify-center py-20 px-4">
        <div className="max-w-lg w-full bg-white p-12 rounded-sm border border-slate-200 shadow-2xl text-center animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Submission Successful</h1>
          <p className="text-slate-500 mb-10 leading-relaxed font-light italic">
            Your manuscript has been received and assigned the ID <span className="text-[#800000] font-bold">SUAS-2024-X492</span>. 
            A confirmation email has been sent to your registered address.
          </p>
          <div className="flex flex-col gap-3">
            <Link to="/" className="w-full bg-[#800000] text-white py-4 font-black uppercase tracking-widest text-xs hover:bg-[#4A0404] transition-colors">
              Return to Home
            </Link>
            <button onClick={() => setIsSubmitted(false)} className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-600 py-2">
              Submit Another Paper
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-primary py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumbs />
        
        <div className="bg-white rounded-sm shadow-2xl border border-slate-200 overflow-hidden mb-10">
          {/* Progress Header */}
          <div className="bg-[#4A0404] px-8 py-12 text-white border-b-4 border-[#800000]">
            <h1 className="text-3xl font-serif font-bold mb-10 uppercase tracking-tight text-center">Manuscript Submission</h1>
            <div className="flex items-center justify-between relative max-w-2xl mx-auto">
              <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 -translate-y-1/2" />
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                    step >= s.id ? 'bg-[#C41E3A] border-[#C41E3A] text-white shadow-lg' : 'bg-slate-900 border-slate-700 text-slate-500'
                  }`}>
                    {step > s.id ? <Check size={20} /> : <s.icon size={20} />}
                  </div>
                  <span className={`text-[10px] font-black uppercase mt-4 tracking-widest ${
                    step >= s.id ? 'text-white' : 'text-slate-500'
                  }`}>
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-16">
            {step === 1 && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="col-span-1 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Manuscript Title</label>
                    <input 
                      type="text" 
                      placeholder="Enter full descriptive title..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-[#800000] outline-none text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Target Journal</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-[#800000] outline-none appearance-none cursor-pointer">
                      <option>SkillSphere Journal of Technical Education</option>
                      <option>SkillSphere Journal of Digital Management</option>
                      <option>SkillSphere Review of Vocational Health</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Article Type</label>
                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-[#800000] outline-none appearance-none cursor-pointer">
                      <option>Research Article</option>
                      <option>Review Article</option>
                      <option>Case Study</option>
                    </select>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-3">Abstract Summary (max 300 words)</label>
                    <textarea 
                      rows={8}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-[#800000] outline-none text-slate-800 italic"
                      placeholder="Summarize your research objectives, methods, and results..."
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="bg-slate-50 p-8 rounded-sm border border-slate-200 border-dashed">
                  <h3 className="font-black text-[#800000] mb-6 flex items-center gap-3 text-xs uppercase tracking-widest">
                    <Users size={18} /> Corresponding Author Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input type="text" placeholder="Full Professional Name" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm outline-none focus:ring-1 focus:ring-[#800000]" />
                    <input type="email" placeholder="Institutional Email (@university.edu)" className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm outline-none focus:ring-1 focus:ring-[#800000]" />
                  </div>
                </div>
                <button className="text-[#800000] text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-red-50 px-6 py-3 rounded-sm border border-[#800000] transition-colors">
                  + Add Co-Author
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
                <div className="border-4 border-dashed border-slate-100 rounded-sm py-24 px-12 flex flex-col items-center bg-slate-50 group hover:border-red-200 transition-colors cursor-pointer">
                  <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-[#800000] mb-8 group-hover:scale-110 transition-transform">
                    <Upload size={32} />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-slate-900 mb-3 uppercase tracking-tight">Upload Full Manuscript</h4>
                  <p className="text-slate-500 mb-10 max-w-sm italic">Accepted formats: PDF, DOCX (Max 25MB). Ensure all figures and tables are embedded.</p>
                  <button className="bg-white border-2 border-[#800000] text-[#800000] px-12 py-4 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-[#800000] hover:text-white transition-all shadow-xl shadow-red-900/10">
                    Browse Files
                  </button>
                </div>
                <div className="flex items-start gap-4 text-left bg-red-50 p-8 rounded-sm border border-red-100">
                  <Check size={20} className="text-[#C41E3A] shrink-0 mt-1" />
                  <p className="text-xs font-bold text-red-900 leading-relaxed uppercase tracking-widest">
                    Verification: By clicking submit, you confirm that this work is original and adheres to the SkillSphere Research Integrity Guidelines.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-16 pt-10 border-t border-slate-100 flex justify-between items-center">
              <button 
                onClick={handleBack}
                disabled={step === 1}
                className={`flex items-center gap-3 text-xs font-black uppercase tracking-widest px-8 py-4 rounded-sm transition-colors ${
                  step === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <ArrowLeft size={18} /> Back
              </button>
              <button 
                onClick={handleNext}
                className="bg-[#800000] text-white px-10 py-4 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-[#4A0404] transition-all shadow-2xl shadow-red-900/20 flex items-center gap-3 group active:scale-95"
              >
                {step === 3 ? 'Finalize Submission' : 'Save & Continue'} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
