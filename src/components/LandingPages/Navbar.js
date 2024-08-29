import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../Css/navbar.css';  // Ensure this path is correct
import LanguageSwitcher from '../../LanguageSwitcher';
import logo from '../../Logo/MarisonaLogo.png';
import i18n from '../../i18n';
function Navbar() {
  const { t } = useTranslation();
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className='Top-Navbar'>
      <div className='nav-left'>
        <Link to="/">
          <img src={logo} alt="Logo" className='nav-logo' />
        </Link>
      </div>
      <div className='nav-items'>
        <Link to="/our-story" className='nav-item'>{t('Our Story')}</Link>
        <Link to="/how-it-works" className='nav-item'>{t('How It Works')}</Link>
        <Link to="/products" className='nav-item'>{t('Products')}</Link>
        <Link to="/contact" className='nav-item'>{t('Contact')}</Link>
        <Link to="/fqa" className='nav-item'>{t('FQA')}</Link>
        <Link to="/blog" className='nav-item'>{t('Blog')}</Link>
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Navbar;

