import { useEffect, useRef, useState } from 'react';

const guestOptions = ['Login', 'Create Account', 'Learn More'];

const memberOptions = [
  'My Profile',
  'Dashboard',
  'Donation History',
  'Volunteer Applications',
  'Skills Applications',
  'Job Applications',
  'FTN Wallet',
  'Market Orders',
  'Notifications',
  'Settings',
  'Logout'
];

function AvatarDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const options = isLoggedIn ? memberOptions : guestOptions;

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-white text-sm font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
        aria-expanded={isOpen}
        aria-label="Open profile menu"
      >
        {isLoggedIn ? 'U' : 'G'}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-20 mt-3 w-64 overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-lg">
          <div className="flex items-center justify-between border-b border-emerald-100 bg-emerald-50 px-3 py-2">
            <span className="text-xs font-semibold text-emerald-900">{isLoggedIn ? 'Logged In' : 'Guest'} Mode</span>
            <button
              type="button"
              onClick={() => setIsLoggedIn((value) => !value)}
              className="rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-700"
            >
              {isLoggedIn ? 'Switch to Guest' : 'Switch to Member'}
            </button>
          </div>

          <ul className="max-h-72 overflow-auto py-2" role="menu">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-emerald-50"
                  role="menuitem"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AvatarDropdown;
