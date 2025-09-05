import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        🎵 TuneVault
      </Link>
      <div className="user-info">
        <div className="notification-badge">
          <Bell size={18} />
        </div>
        <span>Admin</span>
        <User size={18} />
        <span>Profile</span>
      </div>
    </header>
  );
};

export default Header;