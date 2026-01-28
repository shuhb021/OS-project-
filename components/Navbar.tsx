
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, GraduationCap, ChevronDown, BookOpen, Shield, HelpCircle, FileText, Globe } from 'lucide-react';
import { JOURNALS } from '../data/mockData';
import SignInModal from './SignInModal';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const location = useLocation();
  const searchRef = useRef(null);
  const navRef = useRef(null);

  const journalsByCat = JOURNALS.reduce((acc, j) => {
    if (!acc[j.category]) acc[j.category] = [];
    acc[j.category].push(j);
    return acc;
  }, {});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav ref={navRef} className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm font-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-[#002147] p-1.5 rounded-sm text-white">
                <GraduationCap size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#002147] uppercase">
                Academia<span className="text-blue-600">Press</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-700">Home</Link>
              
              {/* Journals Dropdown */}
              <div className="relative group">
                <button 
                  onMouseEnter={() => setActiveDropdown('journals')}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-700"
                >
                  Journals <ChevronDown size={14} />
                </button>
                {activeDropdown === 'journals' && (
                  <div 
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-0 w-[400px] bg-white border border-slate-200 shadow-xl rounded-b-lg p-6 animate-in fade-in slide-in-from-top-2"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {Object.keys(journalsByCat).map(cat => (
                        <div key={cat}>
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{cat}</h4>
                          <ul className="space-y-2">
                            {journalsByCat[cat].map(j => (
                              <li key={j.id}>
                                <Link to={`/journal/${j.id}/overview`} className="text-xs font-bold text-slate-700 hover:text-blue-700 block transition-colors">
                                  {j.shortTitle}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/submissions" className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-700">Submissions</Link>

              {/* Resources Dropdown */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setActiveDropdown('resources')}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-bold text-slate-600 hover:text-blue-700"
                >
                  Resources <ChevronDown size={14} />
                </button>
                {activeDropdown === 'resources' && (
                  <div 
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full right-0 w-64 bg-white border border-slate-200 shadow-xl rounded-b-lg p-4 animate-in fade-in slide-in-from-top-2"
                  >
                    <ul className="space-y-1">
                      <li>
                        <Link to="/resources" className="flex items-center gap-3 p-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-md">
                          <BookOpen size={14} className="text-blue-600" /> Author Guidelines
                        </Link>
                      </li>
                      <li>
                        <Link to="/resources" className="flex items-center gap-3 p-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-md">
                          <Shield size={14} className="text-blue-600" /> Publication Ethics
                        </Link>
                      </li>
                      <li>
                        <Link to="/resources" className="flex items-center gap-3 p-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-md">
                          <Globe size={14} className="text-blue-600" /> Open Access Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="flex items-center gap-3 p-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-md">
                          <HelpCircle size={14} className="text-blue-600" /> About Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <div className="w-px h-6 bg-slate-200 mx-4" />

              <button 
                onClick={() => setIsSignInOpen(true)}
                className="bg-[#002147] text-white px-5 py-2 rounded-sm text-xs font-bold hover:bg-slate-800 transition-all uppercase tracking-wider"
              >
                Sign In
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-500 hover:text-slate-700">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </>
  );
};

export default Navbar;
