import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, USER_NAME, MenuIcon, XMarkIcon, BriefcaseIcon } from '../constants';
import type{ NavLink as NavLinkType } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navbarRef = useRef<HTMLElement>(null);
  const collapseRef = useRef<HTMLDivElement>(null);
  const bsCollapse = useRef<any>(null); // Will hold instance of (window as any).bootstrap.Collapse

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (collapseRef.current && (window as any).bootstrap && (window as any).bootstrap.Collapse) {
      bsCollapse.current = new (window as any).bootstrap.Collapse(collapseRef.current, { toggle: false });
    }
    return () => {
      if (bsCollapse.current && typeof bsCollapse.current.dispose === 'function') {
        bsCollapse.current.dispose();
      }
    };
  }, []);

  const handleTogglerClick = () => {
    if (bsCollapse.current) {
      bsCollapse.current.toggle();
    }
  };
  
  const closeMenu = () => {
    if (bsCollapse.current && !isNavCollapsed) { 
      bsCollapse.current.hide();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        !isNavCollapsed
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavCollapsed]); // Dependency ensures closeMenu uses up-to-date isNavCollapsed

  useEffect(() => {
    const currentCollapseRef = collapseRef.current;
    const handleShown = () => setIsNavCollapsed(false);
    const handleHidden = () => setIsNavCollapsed(true);

    if (currentCollapseRef) {
      currentCollapseRef.addEventListener('shown.bs.collapse', handleShown);
      currentCollapseRef.addEventListener('hidden.bs.collapse', handleHidden);
    }
    return () => {
      if (currentCollapseRef) {
        currentCollapseRef.removeEventListener('shown.bs.collapse', handleShown);
        currentCollapseRef.removeEventListener('hidden.bs.collapse', handleHidden);
      }
    };
  }, []);

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault(); 
    const targetId = href.substring(1); 
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (bsCollapse.current && !isNavCollapsed) { 
      bsCollapse.current.hide(); 
    }
  };

  return (
    <nav 
      ref={navbarRef}
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'bg-dark-transparent shadow-lg' : 'bg-transparent'} transition-all duration-300`}
      style={{ transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out' }}
    >
      <div className="container">
        <a 
          href="#hero" 
          className="navbar-brand d-flex align-items-center text-primary"
          onClick={(e) => handleNavLinkClick(e, '#hero')} // Also handle logo click for consistency
        >
          <BriefcaseIcon className="me-2" />
          <span className="fw-bold brand-text-hover">{USER_NAME.split(' ')[0]}</span>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleTogglerClick} // Changed from handleNavCollapse
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          {isNavCollapsed ? <MenuIcon /> : <XMarkIcon />}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav" ref={collapseRef}>
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map((link: NavLinkType) => (
              <li key={link.id} className="nav-item">
                <a
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="nav-link px-3 py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;