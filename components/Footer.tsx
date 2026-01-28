
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Twitter, Linkedin, Facebook, MapPin } from 'lucide-react';
import { Logo } from './LogoImage';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a0101] text-slate-300 pt-20 pb-10 border-t-4 border-[#800000] font-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo size={48} className="border-none bg-white p-1 rounded-sm shadow-lg group-hover:bg-red-50 transition-colors" />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">
                  Skill<span className="text-red-500">Sphere</span>
                </span>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-tight mt-1">
                  Symbiosis University of Applied Sciences
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md font-light italic">
              SkillSphere is the premier academic publishing gateway presented by Symbiosis University of Applied Sciences (SUAS), Indore. 
              We are dedicated to bridging the gap between theoretical research and industrial excellence.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <Twitter size={14} className="text-slate-500" />
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <Linkedin size={14} className="text-slate-500" />
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer transition-colors">
                <Facebook size={14} className="text-slate-500" />
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/submissions" className="text-sm font-bold text-slate-500 hover:text-red-400 transition-colors uppercase tracking-widest text-[11px]">
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link to="/journals" className="text-sm font-bold text-slate-500 hover:text-red-400 transition-colors uppercase tracking-widest text-[11px]">
                  Latest Papers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm font-bold text-slate-500 hover:text-red-400 transition-colors uppercase tracking-widest text-[11px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm font-bold text-slate-500 hover:text-red-400 transition-colors uppercase tracking-widest text-[11px]">
                  Author Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-8">Registry Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#800000] shrink-0" />
                <p className="text-xs text-slate-400 leading-relaxed font-bold uppercase tracking-widest">
                  Symbiosis University of Applied Sciences<br />
                  Bada Bangadda, Super Corridor<br />
                  Indore, MP 453112, India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-[#800000] shrink-0" />
                <p className="text-xs text-slate-400 font-black uppercase tracking-widest">journals@suas.ac.in</p>
              </div>
              <div className="flex items-center gap-4">
                <Globe size={18} className="text-[#800000] shrink-0" />
                <p className="text-xs text-slate-400 font-black uppercase tracking-widest">www.suas.ac.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            &copy; {new Date().getFullYear()} SkillSphere Portal | Symbiosis University Group. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
            <a href="#" className="hover:text-white transition-colors">Ethics Policy</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Registry</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
