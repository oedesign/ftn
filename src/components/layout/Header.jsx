import AvatarDropdown from '../common/AvatarDropdown';
import RotatingText from '../common/RotatingText';

function Header() {
  return (
    <header className="border-b border-emerald-100 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">Feed The Nation</p>
          <h1 className="text-xl font-bold text-slate-900">Community Relief Platform</h1>
        </div>

        <RotatingText />

        <div className="flex justify-center lg:justify-end">
          <AvatarDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
