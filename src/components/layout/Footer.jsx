function Footer() {
  return (
    <footer className="mt-10 border-t border-emerald-100 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <section>
          <h2 className="text-lg font-semibold text-emerald-700">Feed The Nation</h2>
          <p className="mt-3 text-sm text-slate-600">
            Serving communities through food support, dignity, and long-term empowerment opportunities.
          </p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Campaigns</li>
            <li>Programs</li>
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Care & Support</li>
            <li>Market Square</li>
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Email: support@feedthenation.org</li>
            <li>Phone: +1 (000) 000-0000</li>
            <li>Address: Community Relief Hub</li>
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Legal</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
