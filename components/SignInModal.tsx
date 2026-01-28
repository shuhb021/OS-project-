
import React from 'react';
import { X, Lock, Mail, GraduationCap } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="bg-blue-700 p-8 text-white text-center">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <GraduationCap size={48} className="mx-auto mb-4" />
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-blue-100 text-sm mt-2">Access your research dashboard</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase block mb-1.5 tracking-wider">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@university.edu"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase block mb-1.5 tracking-wider">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-slate-600">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
              Remember me
            </label>
            <button className="text-blue-700 font-bold hover:underline">Forgot Password?</button>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-blue-700 text-white py-3.5 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-[0.98]"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-slate-500">
            Don't have an account? <button className="text-blue-700 font-bold hover:underline">Register today</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
