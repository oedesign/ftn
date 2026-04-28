import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Campaigns', to: '/campaigns' },
  { label: 'Donate', to: '/donate' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Programs', to: '/programs' },
  { label: 'Skills Training', to: '/skills-training' },
  { label: 'Care & Support', to: '/care-support' },
  { label: 'FTN', to: '/ftn' },
  { label: 'Market Square', to: '/market-square' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Impact Stories', to: '/impact-stories' },
  { label: 'Events', to: '/events' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
  { label: 'User Dashboard', to: '/user-dashboard' },
  { label: 'Admin Dashboard', to: '/admin-dashboard' }
];

function SecondaryNav() {
  return (
    <nav className="border-b border-emerald-100 bg-emerald-50" aria-label="Secondary navigation">
      <div className="mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-8">
        <ul className="flex gap-2 overflow-x-auto py-3">
          {navItems.map((item) => (
            <li key={item.to} className="shrink-0">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white text-emerald-800 hover:bg-emerald-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SecondaryNav;
