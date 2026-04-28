import { useMemo, useState } from 'react';

const countryOptions = ['Nigeria'];
const stateOptions = ['Lagos'];
const cityOptions = ['Ikeja', 'Lekki', 'Surulere', 'Agege', 'Ikorodu'];

const rewardTiers = [
  { range: '70 - 79 points', reward: '100,000 FTN' },
  { range: '80 - 89 points', reward: '150,000 FTN' },
  { range: '90 - 100 points', reward: '200,000 FTN' }
];

const skillsData = [
  {
    id: 'digital-marketing-ikeja',
    title: 'Digital Marketing Foundations',
    description: 'Learn social media strategy, content planning, and campaign basics for small businesses.',
    location: 'Ikeja, Lagos, Nigeria',
    city: 'Ikeja',
    duration: '8 weeks (Weekend classes)',
    certificateIssued: 'Yes',
    trainingMode: 'Hybrid',
    startDate: 'June 10, 2026',
    applicationDeadline: 'May 30, 2026',
    availableSlots: 24,
    eligibility: 'Ages 18+, basic smartphone or laptop access',
    feeStatus: 'Fully Sponsored',
    imageStyle: 'from-emerald-500 to-emerald-300'
  },
  {
    id: 'culinary-arts-lekki',
    title: 'Culinary Arts & Food Handling',
    description: 'Practical kitchen training, hygiene standards, and basic food entrepreneurship skills.',
    location: 'Lekki, Lagos, Nigeria',
    city: 'Lekki',
    duration: '10 weeks (Weekdays)',
    certificateIssued: 'Yes',
    trainingMode: 'On-site',
    startDate: 'June 17, 2026',
    applicationDeadline: 'June 2, 2026',
    availableSlots: 18,
    eligibility: 'Ages 20+, commitment to full practical sessions',
    feeStatus: 'Partially Sponsored',
    imageStyle: 'from-amber-500 to-orange-300'
  },
  {
    id: 'tailoring-surulere',
    title: 'Fashion Design & Tailoring',
    description: 'Pattern drafting, sewing techniques, and beginner garment production workflow.',
    location: 'Surulere, Lagos, Nigeria',
    city: 'Surulere',
    duration: '12 weeks (Weekends)',
    certificateIssued: 'Yes',
    trainingMode: 'On-site',
    startDate: 'July 1, 2026',
    applicationDeadline: 'June 14, 2026',
    availableSlots: 20,
    eligibility: 'Ages 18+, beginner friendly',
    feeStatus: 'Fully Sponsored',
    imageStyle: 'from-pink-500 to-rose-300'
  },
  {
    id: 'solar-agege',
    title: 'Solar Installation Basics',
    description: 'Hands-on solar system setup, maintenance, and safety fundamentals.',
    location: 'Agege, Lagos, Nigeria',
    city: 'Agege',
    duration: '6 weeks (Weekday evenings)',
    certificateIssued: 'Yes',
    trainingMode: 'Hybrid',
    startDate: 'June 24, 2026',
    applicationDeadline: 'June 8, 2026',
    availableSlots: 16,
    eligibility: 'Ages 18+, interest in technical work',
    feeStatus: 'Fully Sponsored',
    imageStyle: 'from-teal-500 to-cyan-300'
  },
  {
    id: 'data-entry-ikorodu',
    title: 'Data Entry & Office Productivity',
    description: 'Improve typing speed, spreadsheet use, and digital admin workflows.',
    location: 'Ikorodu, Lagos, Nigeria',
    city: 'Ikorodu',
    duration: '5 weeks (Weekends)',
    certificateIssued: 'Yes',
    trainingMode: 'Online',
    startDate: 'June 12, 2026',
    applicationDeadline: 'May 29, 2026',
    availableSlots: 30,
    eligibility: 'Ages 18+, basic computer literacy',
    feeStatus: 'Free',
    imageStyle: 'from-violet-500 to-purple-300'
  }
];

const googleFormUrl = 'https://docs.google.com/forms/d/e/mock-feed-the-nation-skills-form/viewform';
const whatsappBase = 'https://wa.me/2348000000000';

function SkillsTraining() {
  const [filters, setFilters] = useState({
    country: 'Nigeria',
    state: 'Lagos',
    city: ''
  });
  const [submittedFilters, setSubmittedFilters] = useState(filters);

  const matchingSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const cityMatch = submittedFilters.city ? skill.city === submittedFilters.city : true;
      return submittedFilters.country === 'Nigeria' && submittedFilters.state === 'Lagos' && cityMatch;
    });
  }, [submittedFilters]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSubmittedFilters(filters);
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-3xl font-bold text-slate-900">Skills Training</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Find practical skills training programs available in your location and apply for empowerment opportunities.
        </p>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-semibold text-slate-900">Skills Graduation Rewards</h2>
        <p className="mt-2 text-slate-600">
          Learners who graduate above 70 points earn FTN token rewards. Starting reward is 100,000 FTN.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {rewardTiers.map((tier) => (
            <article key={tier.range} className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">{tier.range}</h3>
              <p className="mt-1 text-lg font-bold text-emerald-700">{tier.reward}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">About FTN Tokens</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>FTN tokens are internal website credits.</li>
            <li>Tokens cannot be withdrawn as cash.</li>
            <li>Tokens can only be used inside Feed The Nation.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-semibold text-slate-900">Search by Location</h2>

        <form className="mt-4 grid gap-4 md:grid-cols-4" onSubmit={handleSearch}>
          <label className="text-sm font-medium text-slate-700">
            Country
            <select
              name="country"
              value={filters.country}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              {countryOptions.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            State
            <select
              name="state"
              value={filters.state}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              {stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            City
            <select
              name="city"
              value={filters.city}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              <option value="">All Cities</option>
              {cityOptions.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Search
            </button>
          </div>
        </form>
      </section>

      <section className="space-y-4">
        <p className="text-sm text-slate-600">
          Showing {matchingSkills.length} training option{matchingSkills.length === 1 ? '' : 's'} for{' '}
          {submittedFilters.city ? `${submittedFilters.city}, ` : ''}
          {submittedFilters.state}, {submittedFilters.country}.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          {matchingSkills.map((skill) => {
            const whatsappMessage = `Hello Feed The Nation, I am interested in the ${skill.title} training in ${skill.location}.`;
            const whatsappUrl = `${whatsappBase}?text=${encodeURIComponent(whatsappMessage)}`;

            return (
              <article key={skill.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className={`h-40 w-full bg-gradient-to-r ${skill.imageStyle}`} aria-hidden="true" />

                <div className="space-y-3 p-5">
                  <h3 className="text-xl font-semibold text-slate-900">{skill.title}</h3>
                  <p className="text-sm text-slate-600">{skill.description}</p>

                  <dl className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    <div>
                      <dt className="font-medium">Location</dt>
                      <dd>{skill.location}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Duration / Time frame</dt>
                      <dd>{skill.duration}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Certificate issued</dt>
                      <dd>{skill.certificateIssued}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Training mode</dt>
                      <dd>{skill.trainingMode}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Start date</dt>
                      <dd>{skill.startDate}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Application deadline</dt>
                      <dd>{skill.applicationDeadline}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Available slots</dt>
                      <dd>{skill.availableSlots}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Eligibility</dt>
                      <dd>{skill.eligibility}</dd>
                    </div>
                    <div>
                      <dt className="font-medium">Fee status</dt>
                      <dd>{skill.feeStatus}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={googleFormUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      Apply Now
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default SkillsTraining;
