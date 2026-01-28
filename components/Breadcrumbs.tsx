
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/') return null;

  return (
    <nav className="flex items-center space-x-2 text-xs font-medium text-slate-400 mb-6 overflow-hidden whitespace-nowrap">
      <Link to="/" className="hover:text-blue-700 transition-colors flex items-center gap-1 shrink-0">
        <HomeIcon size={14} />
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const label = value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        return (
          <React.Fragment key={to}>
            <ChevronRight size={14} className="shrink-0" />
            {last ? (
              <span className="text-slate-600 truncate max-w-[200px]">{label}</span>
            ) : (
              <Link to={to} className="hover:text-blue-700 transition-colors truncate max-w-[150px]">
                {label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
