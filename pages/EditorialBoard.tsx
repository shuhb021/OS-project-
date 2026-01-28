import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNALS, EDITORIAL_BOARD } from '../data/mockData';
import { Mail, Globe, Search } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const EditorialBoard: React.FC = () => {
  const { id } = useParams();
  const journal = JOURNALS.find(j => j.id === id);
  const board = EDITORIAL_BOARD[id || ''] || [];

  if (!journal) return <div className="p-20 text-center text-slate-600">Journal not found.</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-primary">
      <div className="bg-[#4A0404] py-16 text-white border-b-4 border-[#800000]">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-4xl font-serif font-bold mb-3 uppercase tracking-tight">Editorial Board</h1>
          <p className="text-red-100/60 text-lg italic">Academic Oversight and Industry Expert Reviewers</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-xs font-black text-[#800000] uppercase tracking-widest">Board of Directors & Senior Editors</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Find editor by name..." 
                className="pl-9 pr-4 py-2 bg-white border border-slate-200 text-xs font-bold rounded-sm outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <th className="px-8 py-4">Name</th>
                <th className="px-8 py-4">Position</th>
                <th className="px-8 py-4">Institutional Affiliation</th>
                <th className="px-8 py-4">Primary Research Areas</th>
                <th className="px-8 py-4 text-center">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {board.map((member) => (
                <tr key={member.id} className="hover:bg-red-50/10 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full border-2 border-slate-200 grayscale group-hover:grayscale-0 transition-all" />
                      <span className="text-sm font-black text-slate-900">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-widest ${
                      member.role === 'Editor-in-Chief' ? 'bg-red-900 text-white' : 'bg-red-100 text-[#800000] border border-red-200'
                    }`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-600 font-medium italic">
                    {member.affiliation}
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-wrap gap-1">
                      {member.expertise?.map(exp => (
                        <span key={exp} className="text-[9px] font-black uppercase tracking-widest bg-slate-100 text-slate-500 px-2 py-1 rounded-sm border border-slate-200">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex justify-center gap-3">
                      <button className="text-slate-400 hover:text-[#C41E3A] transition-colors" title="Contact Email">
                        <Mail size={16} />
                      </button>
                      <button className="text-slate-400 hover:text-[#C41E3A] transition-colors" title="Academic Profile">
                        <Globe size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-12 bg-white border border-slate-200 rounded-sm text-center max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl font-serif font-bold text-[#800000] mb-4 uppercase tracking-tight">Joining the Board</h3>
          <p className="text-slate-600 mb-8 leading-relaxed font-light italic">
            SkillSphere welcomes applications for Editorial Board positions from established researchers with a strong publication record and commitment to applied sciences.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <button className="bg-[#800000] text-white px-10 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-[#4A0404] transition-all shadow-lg shadow-red-900/10">
              Apply to Join
            </button>
            <button className="border-2 border-[#800000] text-[#800000] px-10 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-red-50 transition-all">
              Reviewer Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialBoard;