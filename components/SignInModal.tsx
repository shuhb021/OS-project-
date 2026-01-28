
import React from 'react';
import { X, Lock, Mail } from 'lucide-react';
import { Logo } from './LogoImage';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-sm shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200 border-b-8 border-[#800000]">
        <div className="bg-[#4A0404] p-10 text-white text-center border-b-4 border-[#800000] relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <div className="mx-auto mb-6 transition-transform hover:scale-110 duration-500">
            <Logo size={72} className="mx-auto border-none p-2 shadow-2xl" />
          </div>
          <h2 className="text-2xl font-serif font-bold uppercase tracking-tight">Institutional Login</h2>
          <p className="text-red-100/60 text-[10px] font-black uppercase tracking-[0.2em] mt-3">Access SkillSphere Registry</p>
        </div>
        
        <div className="p-10 space-y-8">
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase block mb-2 tracking-widest">Scholar Identifier (Email)</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="scholar@suas.ac.in"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-[#800000] outline-none transition-all text-sm italic"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase block mb-2 tracking-widest">Secure Access Key</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-sm focus:ring-1 focus:ring-[#800000] outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
            <label className="flex items-center gap-3 cursor-pointer text-slate-500">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#800000] focus:ring-red-500" />
              Maintain Session
            </label>
            <button className="text-[#800000] hover:underline">Recovery</button>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-[#800000] text-white py-4 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-[#4A0404] transition-all shadow-xl shadow-red-900/10 active:scale-[0.98]"
          >
            Authenticate
          </button>

          <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
            External Scholar? <button className="text-[#800000] hover:underline">Request Registry Access</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
