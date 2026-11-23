import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
        <li>
          <Link 
            to="/" 
            className="flex items-center gap-1 hover:text-brand-900 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {isLast || !item.path ? (
                <span className="font-semibold text-brand-900 truncate max-w-[200px] sm:max-w-none">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="hover:text-brand-900 transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
