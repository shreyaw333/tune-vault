import React from 'react';
import { NavLink } from 'react-router-dom';
import { BarChart3, CreditCard, Music, DollarSign, TrendingUp, Settings } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { path: '/', icon: BarChart3, label: 'Dashboard' },
    { path: '/subscriptions', icon: CreditCard, label: 'Subscriptions' },
    { path: '/artists', icon: Music, label: 'Artists' },
    { path: '/revenue', icon: DollarSign, label: 'Revenue' },
    { path: '/analytics', icon: TrendingUp, label: 'Analytics' },
    { path: '/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav className="nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navigation;