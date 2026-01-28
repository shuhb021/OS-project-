
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOURNALS, EDITORIAL_BOARD } from '../data/mockData';
import { Mail, Globe, Search } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const EditorialBoard: React.FC = () => {
  const { id } = useParams();
  const journal = JOURNALS.find(j => j.id === id);
  const board = EDITORIAL_BOARD[id || ''] || [];

  if (!journal) return <div className="p-20 text-center">Journal not found.</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-primary">
      <div className="bg-[#002147] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumbs />
          <h1 className="text-4xl font-serif font-bold mb-3">Editorial Board</h1>
          <p className="text-blue-100/70 text-lg">Academic Oversight and Expert Reviewers</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-sm font-black text-[#002147] uppercase tracking-widest">Board of Directors & Senior Editors</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <input 
                type="text" 
                placeholder="Find editor by name..." 
                className="pl-9 pr-4 py-2 bg-white border border-slate-200 text-xs font-bold rounded-sm outline-none focus:ring-1 focus:ring-blue-500"
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
                <th className="px-8 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {board.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <img src={member.image} alt={member.name} className="w-10 h-10 rounded-full border border-slate-200" />
                      <span className="text-sm font-bold text-slate-900">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`text-[10px] font-black px-2 py-1 rounded-sm uppercase tracking-widest ${
                      member.role === 'Editor-in-Chief' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-blue-50 text-blue-700 border border-blue-100'
                    }`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-sm text-slate-600 font-medium">
                    {member.affiliation}
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-wrap gap-1">
                      {member.expertise?.map(exp => (
                        <span key={exp} className="text-[9px] font-bold bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-sm">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <div className="flex justify-center gap-3">
                      <button className="text-slate-400 hover:text-blue-700 transition-colors" title="Contact Email">
                        <Mail size={16} />
                      </button>
                      <button className="text-slate-400 hover:text-blue-700 transition-colors" title="Academic Profile">
                        <Globe size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 p-10 bg-white border border-slate-200 rounded-sm text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-serif font-bold text-[#002147] mb-4">Joining the Board</h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            AcademiaPress welcomes applications for Editorial Board positions from established researchers with a strong publication record in their respective fields.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#002147] text-white px-8 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
              Apply to Join
            </button>
            <button className="border border-slate-300 text-slate-600 px-8 py-3 rounded-sm text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
              Reviewer Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialBoard;
