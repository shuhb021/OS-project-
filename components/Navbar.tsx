
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import SignInModal from './SignInModal';
import { Logo } from './LogoImage';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  return (
    <>
      <nav ref={navRef} className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm font-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="transition-transform group-hover:scale-105 duration-300">
                <Logo size={42} className="shadow-sm border-none bg-transparent" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-[#800000] uppercase leading-none">
                  Skill<span className="text-slate-900">Sphere</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight mt-1">
                  Symbiosis University
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link to="/" className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-[#800000] transition-colors">Home</Link>
              <Link to="/journals" className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-[#800000] transition-colors">Journals</Link>
              <Link to="/about" className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-[#800000] transition-colors">About</Link>
              <Link to="/resources" className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-[#800000] transition-colors">Resources</Link>

              <div className="w-px h-6 bg-slate-200 mx-4" />

              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 text-slate-400 hover:text-[#800000] transition-colors"
                >
                  <Search size={20} />
                </button>
                <button 
                  onClick={() => setIsSignInOpen(true)}
                  className="text-xs font-black text-[#800000] uppercase tracking-widest px-4 py-2 hover:bg-red-50 transition-colors"
                >
                  Sign In
                </button>
                <Link 
                  to="/submissions"
                  className="bg-[#800000] text-white px-6 py-2.5 rounded-sm text-xs font-black hover:bg-[#4A0404] transition-all uppercase tracking-widest shadow-md"
                >
                  Submit
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-4">
              <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-slate-400">
                <Search size={20} />
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#800000]">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar Overlay */}
        {isSearchOpen && (
          <div className="absolute inset-x-0 top-full bg-white border-b border-slate-200 p-4 animate-in slide-in-from-top-2">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="text-slate-400" size={20} />
              <input 
                autoFocus
                type="text" 
                placeholder="Search across all journals, papers, and authors..."
                className="flex-grow border-none focus:ring-0 text-sm italic py-2"
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-xs font-bold text-slate-400 uppercase tracking-widest">Close</button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-4 animate-in slide-in-from-top-4">
            <Link to="/" className="block text-sm font-bold text-slate-600 px-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/journals" className="block text-sm font-bold text-slate-600 px-2" onClick={() => setIsOpen(false)}>Journals</Link>
            <Link to="/about" className="block text-sm font-bold text-slate-600 px-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/resources" className="block text-sm font-bold text-slate-600 px-2" onClick={() => setIsOpen(false)}>Resources</Link>
            <div className="pt-4 flex flex-col gap-3">
              <button 
                onClick={() => { setIsSignInOpen(true); setIsOpen(false); }}
                className="w-full border border-[#800000] text-[#800000] py-3 font-black uppercase tracking-widest text-xs"
              >
                Sign In
              </button>
              <Link 
                to="/submissions"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#800000] text-white py-3 text-center font-black uppercase tracking-widest text-xs"
              >
                Submit Manuscript
              </Link>
            </div>
          </div>
        )}
      </nav>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  );
};

export default Navbar;
