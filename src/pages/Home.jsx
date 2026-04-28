import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Food Support for Families',
    description: 'Connecting communities with reliable access to healthy, dignified food relief.',
    style: 'from-emerald-500 via-emerald-400 to-lime-300'
  },
  {
    title: 'Skills, Jobs, and Empowerment',
    description: 'Creating pathways from immediate support to long-term independence.',
    style: 'from-amber-400 via-orange-300 to-emerald-200'
  },
  {
    title: 'Care Services and Hope',
    description: 'Building resilient neighborhoods through care, compassion, and opportunity.',
    style: 'from-emerald-600 via-teal-400 to-amber-200'
  }
];

const impactStats = [
  { label: 'Families Supported', value: '18,500+' },
  { label: 'Meals Provided', value: '420,000+' },
  { label: 'Volunteers', value: '2,300+' },
  { label: 'Skills Trainees', value: '6,800+' },
  { label: 'Jobs Connected', value: '3,200+' }
];

const featuredPrograms = [
  {
    name: 'Food Support',
    description: 'Emergency and ongoing food relief pathways for households in need.'
  },
  {
    name: 'Skills Training',
    description: 'Practical training programs that build confidence and employable skills.'
  },
  {
    name: 'Care & Support',
    description: 'Community-first support services for vulnerable individuals and families.'
  },
  {
    name: 'Jobs / Opportunities',
    description: 'Connection points between trainees, employers, and opportunity networks.'
  },
  {
    name: 'Market Square',
    description: 'Affordable access to essential food products and local market partnerships.'
  }
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10 lg:space-y-14">
      <section className="rounded-3xl bg-white p-4 shadow-sm sm:p-6 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl shadow-md">
              {slides.map((slide, index) => (
                <article
                  key={slide.title}
                  className={`absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br p-6 text-white transition-opacity duration-700 sm:p-8 ${slide.style} ${
                    index === activeSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                  aria-hidden={index !== activeSlide}
                >
                  <div className="flex h-full flex-col justify-end rounded-xl bg-black/10 p-4 backdrop-blur-[1px]">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/85">Feed The Nation</p>
                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{slide.title}</h2>
                    <p className="mt-2 text-sm text-white/95 sm:text-base">{slide.description}</p>
                  </div>
                </article>
              ))}

              <div className="aspect-[4/3] w-full" />
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {slides.map((slide, index) => (
                <span
                  key={slide.title}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeSlide ? 'bg-emerald-600' : 'bg-emerald-200'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>

          <div className="order-2 space-y-5 text-left lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Feed The Nation</p>
            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Together, we can feed families, restore hope, and build a nation where no one is left hungry.
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              Feed The Nation connects people with food support, care services, skills training, jobs, and community
              empowerment opportunities.
            </p>
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Join Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Impact Stats</h2>
          <p className="mt-2 text-slate-600">A snapshot of how communities are being served through Feed The Nation.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {impactStats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-center">
              <p className="text-2xl font-bold text-emerald-700">{stat.value}</p>
              <h3 className="mt-1 text-sm font-medium text-slate-700">{stat.label}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Featured Programs</h2>
          <p className="mt-2 text-slate-600">Programs designed to provide relief today and empowerment for tomorrow.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPrograms.map((program) => (
            <article key={program.name} className="rounded-2xl border border-amber-100 bg-amber-50 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{program.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-400 p-6 text-white shadow-sm sm:p-8">
        <p className="max-w-3xl text-lg font-medium sm:text-xl">
          Be part of a movement that feeds, supports, trains, and empowers communities.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/user-dashboard"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Join Us Now
          </Link>
          <Link
            to="/donate"
            className="rounded-full border border-white/80 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Donate
          </Link>
          <Link
            to="/volunteer"
            className="rounded-full border border-white/80 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
          >
            Volunteer
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
