import { useState } from 'react';
import { Bars3Icon, BellIcon  } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Header = () => {
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState({
        label: 'Eng',
        flag: 'https://flagcdn.com/w40/us.png',
    });

    const languages = [
        { label: 'Eng', flag: 'https://flagcdn.com/w40/us.png' },
        { label: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
    ];

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        setLangDropdownOpen(false);
    };

    return (
        <header className='container'>
        <nav className="w-full flex items-center justify-between px-4 py-2 bg-white">
            
            <button className="p-2 rounded-full bg-gray-100">
                <Bars3Icon className="h-5 w-5 text-gray-600" />
            </button>

            <div className="flex items-center space-x-2">
                <div className="text-right">
                    <p className="text-sm font-bold text-gray-800">إفطارات</p>
                    <p className="text-xs text-gray-500 tracking-wide">Qataral</p>
                </div>
                <img src="/logo.jpg" alt="Logo" className="h-10" />
            </div>

            <div className="flex items-center gap-2 relative">
                <button className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100">
                    <BellIcon  className="h-5 w-5 text-gray-600" />
                </button>
                <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="flex items-center gap-1 px-3 py-1 border rounded-full shadow-sm"
                >
                    <img
                        src={selectedLang.flag}
                        alt="flag"
                        className="h-4 w-4 rounded-full"
                    />
                    <span className="text-sm">{selectedLang.label}</span>
                    <ChevronDownIcon className="h-4 w-4" />
                </button>

                {langDropdownOpen && (
                    <div className="absolute right-16 top-12 w-32 bg-white border rounded-md shadow-md z-10">
                        {languages.map((lang) => (
                            <button
                                key={lang.label}
                                onClick={() => handleLanguageChange(lang)}
                                className="flex items-center gap-2 px-3 py-2 w-full hover:bg-gray-100 text-sm"
                            >
                                <img src={lang.flag} alt={lang.label} className="h-4 w-4 rounded-full" />
                                {lang.label}
                            </button>
                        ))}
                    </div>
                )}

                <Link
                    to="/logout"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 text-white text-sm font-medium"
                >
                    Logout
                </Link>
            </div>
        </nav>
        </header>
    );
};

export default Header;
