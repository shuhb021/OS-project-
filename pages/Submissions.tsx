
import React, { useState } from 'react';
import { Check, Upload, ArrowRight, ArrowLeft, FileText, Users, Info } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const Submissions: React.FC = () => {
  const [step, setStep] = useState(1);
  const steps = [
    { id: 1, name: 'Manuscript Info', icon: Info },
    { id: 2, name: 'Authors & Affiliations', icon: Users },
    { id: 3, name: 'File Upload', icon: Upload },
  ];

  const handleNext = () => setStep(prev => Math.min(prev + 1, 3));
  const handleBack = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumbs />
        
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-10">
          {/* Progress Header */}
          <div className="bg-slate-900 px-8 py-10 text-white">
            <h1 className="text-3xl font-serif font-bold mb-8">Submit Your Manuscript</h1>
            <div className="flex items-center justify-between relative max-w-2xl mx-auto">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2" />
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                    step >= s.id ? 'bg-blue-600 border-blue-600 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    {step > s.id ? <Check size={20} /> : <s.icon size={20} />}
                  </div>
                  <span className={`text-[10px] font-bold uppercase mt-3 tracking-wider ${
                    step >= s.id ? 'text-white' : 'text-slate-500'
                  }`}>
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-12">
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="col-span-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Manuscript Title</label>
                    <input 
                      type="text" 
                      placeholder="Enter full title..."
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Select Journal</label>
                    <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                      <option>Advanced Functional Materials</option>
                      <option>Neural Computation Review</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Article Type</label>
                    <select className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                      <option>Research Article</option>
                      <option>Review</option>
                      <option>Short Communication</option>
                    </select>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Abstract (max 300 words)</label>
                    <textarea 
                      rows={6}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 border-dashed">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Users size={18} className="text-blue-600" /> Corresponding Author
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl" />
                    <input type="email" placeholder="Institutional Email" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl" />
                  </div>
                </div>
                <button className="text-blue-700 font-bold flex items-center gap-2 hover:bg-blue-50 px-4 py-2 rounded-xl transition-colors">
                  + Add Co-Author
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
                <div className="border-4 border-dashed border-slate-100 rounded-3xl py-20 px-10 flex flex-col items-center bg-slate-50 group hover:border-blue-200 transition-colors cursor-pointer">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <Upload size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Upload Manuscript File</h4>
                  <p className="text-slate-500 mb-8 max-w-sm">Drag and drop your PDF or .docx file here. Max file size: 25MB.</p>
                  <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                    Select Files
                  </button>
                </div>
                <div className="flex items-start gap-4 text-left bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <Check size={20} className="text-blue-600 shrink-0 mt-1" />
                  <p className="text-sm text-blue-800 leading-relaxed">By submitting, you confirm that this work is original, has not been published elsewhere, and adheres to our ethical guidelines.</p>
                </div>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
              <button 
                onClick={handleBack}
                disabled={step === 1}
                className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-colors ${
                  step === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                <ArrowLeft size={18} /> Back
              </button>
              <button 
                onClick={handleNext}
                className="bg-blue-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg flex items-center gap-2 group active:scale-95"
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
