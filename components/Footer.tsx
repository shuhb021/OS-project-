
import React from 'react';
import { Mail, Globe, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight text-white">
                Academia<span className="text-blue-400">Press</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Leading the way in open access publishing and scientific excellence since 1994. Empowering researchers across the globe.
            </p>
            <div className="flex gap-4">
              <Twitter size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
              <Facebook size={20} className="hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Find a Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Open Access</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conferences</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Publish with Us</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Author Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Submit Manuscript</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Peer Review Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Article Processing Charges</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> support@academiapress.com</li>
              <li className="flex items-center gap-2"><Globe size={16} /> www.academiapress.com</li>
              <li className="mt-4 text-xs">
                123 Scholar’s Way, Academic Plaza<br />
                Oxford, OX1 2JD, UK
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2024 AcademiaPress Publishing Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
