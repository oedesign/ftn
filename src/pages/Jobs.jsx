import { useMemo, useState } from 'react';

const jobCategories = [
  'All Jobs',
  'Digital Skills',
  'Catering',
  'Fashion Design',
  'Agriculture',
  'Business',
  'Teaching',
  'Healthcare',
  'Artisan Jobs',
  'Remote Jobs',
  'Internships',
  'Apprenticeships'
];

const jobs = [
  {
    id: 'job-1',
    title: 'Junior Frontend Assistant',
    company: 'BrightPath Digital',
    location: 'Ikeja, Lagos, Nigeria',
    city: 'Ikeja',
    state: 'Lagos',
    country: 'Nigeria',
    workMode: 'Remote',
    jobType: 'Internship',
    skillCategory: 'Digital Skills',
    requiredSkill: 'Web Development',
    experienceLevel: 'Entry Level',
    salaryRange: '₦120,000 - ₦180,000',
    datePosted: '2026-04-12',
    applicationDeadline: '2026-05-10',
    description: 'Support website updates, component styling, and basic UI testing tasks.',
    whatsappContact: '2348000000001'
  },
  {
    id: 'job-2',
    title: 'Community Catering Assistant',
    company: 'Hope Meals Cooperative',
    location: 'Surulere, Lagos, Nigeria',
    city: 'Surulere',
    state: 'Lagos',
    country: 'Nigeria',
    workMode: 'On-site',
    jobType: 'Apprenticeship',
    skillCategory: 'Catering',
    requiredSkill: 'Culinary Arts',
    experienceLevel: 'Beginner',
    salaryRange: '₦90,000 - ₦130,000',
    datePosted: '2026-04-08',
    applicationDeadline: '2026-05-04',
    description: 'Assist with meal prep, hygiene routines, and food packaging for outreach.',
    whatsappContact: '2348000000002'
  },
  {
    id: 'job-3',
    title: 'Tailoring Production Assistant',
    company: 'Stitch Forward Hub',
    location: 'Lekki, Lagos, Nigeria',
    city: 'Lekki',
    state: 'Lagos',
    country: 'Nigeria',
    workMode: 'Hybrid',
    jobType: 'Full-time',
    skillCategory: 'Fashion Design',
    requiredSkill: 'Tailoring',
    experienceLevel: 'Intermediate',
    salaryRange: '₦160,000 - ₦240,000',
    datePosted: '2026-04-04',
    applicationDeadline: '2026-05-01',
    description: 'Support production line, alterations, and garment finishing in a growth studio.',
    whatsappContact: '2348000000003'
  },
  {
    id: 'job-4',
    title: 'Farm Operations Trainee',
    company: 'GreenYield Farms',
    location: 'Ikorodu, Lagos, Nigeria',
    city: 'Ikorodu',
    state: 'Lagos',
    country: 'Nigeria',
    workMode: 'On-site',
    jobType: 'Apprenticeship',
    skillCategory: 'Agriculture',
    requiredSkill: 'Crop Management',
    experienceLevel: 'Beginner',
    salaryRange: '₦100,000 - ₦150,000',
    datePosted: '2026-04-14',
    applicationDeadline: '2026-05-12',
    description: 'Learn practical farm operations, produce handling, and agribusiness basics.',
    whatsappContact: '2348000000004'
  },
  {
    id: 'job-5',
    title: 'SME Growth Support Officer',
    company: 'Community Enterprise Desk',
    location: 'Agege, Lagos, Nigeria',
    city: 'Agege',
    state: 'Lagos',
    country: 'Nigeria',
    workMode: 'Hybrid',
    jobType: 'Part-time',
    skillCategory: 'Business',
    requiredSkill: 'Business Support',
    experienceLevel: 'Intermediate',
    salaryRange: '₦140,000 - ₦190,000',
    datePosted: '2026-04-02',
    applicationDeadline: '2026-04-30',
    description: 'Guide micro businesses with bookkeeping, customer growth, and planning.',
    whatsappContact: '2348000000005'
  }
];

const initialFilters = {
  skillCategory: 'All Jobs',
  jobTitle: '',
  country: 'Nigeria',
  state: 'Lagos',
  city: '',
  jobType: '',
  workMode: '',
  experienceLevel: '',
  salaryRange: '',
  datePosted: '',
  applicationDeadline: ''
};

function Jobs() {
  const [selectedCategory, setSelectedCategory] = useState('All Jobs');
  const [filters, setFilters] = useState(initialFilters);
  const [showFilters, setShowFilters] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const categoryMatch = selectedCategory === 'All Jobs' ? true : job.skillCategory === selectedCategory;
      const skillCategoryMatch = filters.skillCategory === 'All Jobs' ? true : job.skillCategory === filters.skillCategory;
      const titleMatch = filters.jobTitle
        ? job.title.toLowerCase().includes(filters.jobTitle.toLowerCase()) ||
          job.requiredSkill.toLowerCase().includes(filters.jobTitle.toLowerCase())
        : true;
      const countryMatch = filters.country ? job.country === filters.country : true;
      const stateMatch = filters.state ? job.state === filters.state : true;
      const cityMatch = filters.city ? job.city.toLowerCase().includes(filters.city.toLowerCase()) : true;
      const jobTypeMatch = filters.jobType ? job.jobType === filters.jobType : true;
      const workModeMatch = filters.workMode ? job.workMode === filters.workMode : true;
      const experienceMatch = filters.experienceLevel ? job.experienceLevel === filters.experienceLevel : true;

      const salaryMatch = filters.salaryRange
        ? job.salaryRange.toLowerCase().includes(filters.salaryRange.toLowerCase())
        : true;
      const datePostedMatch = filters.datePosted ? job.datePosted >= filters.datePosted : true;
      const deadlineMatch = filters.applicationDeadline ? job.applicationDeadline <= filters.applicationDeadline : true;

      return (
        categoryMatch &&
        skillCategoryMatch &&
        titleMatch &&
        countryMatch &&
        stateMatch &&
        cityMatch &&
        jobTypeMatch &&
        workModeMatch &&
        experienceMatch &&
        salaryMatch &&
        datePostedMatch &&
        deadlineMatch
      );
    });
  }, [filters, selectedCategory]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
  };

  const toggleSaveJob = (jobId) => {
    setSavedJobs((current) =>
      current.includes(jobId) ? current.filter((id) => id !== jobId) : [...current, jobId]
    );
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-3xl font-bold text-slate-900">Jobs &amp; Opportunities</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Find jobs, internships, apprenticeships, and work opportunities connected to your skills.
        </p>
        <button
          type="button"
          className="mt-4 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Find Opportunities
        </button>
      </section>

      <section className="rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-slate-700">
        Feed The Nation does not ask users to pay money to apply for jobs.
      </section>

      <section>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {jobCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setSelectedCategory(category);
                setFilters((current) => ({ ...current, skillCategory: category }));
              }}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="lg:hidden">
        <button
          type="button"
          onClick={() => setShowFilters((value) => !value)}
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          {showFilters ? 'Hide Filters' : 'Filter Jobs'}
        </button>
      </section>

      <section className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside className={`${showFilters ? 'block' : 'hidden'} rounded-3xl bg-white p-5 shadow-sm lg:block`}>
          <h2 className="text-xl font-semibold text-slate-900">Search & Filters</h2>
          <div className="mt-4 grid gap-3">
            <label className="text-sm font-medium text-slate-700">
              Skill category
              <select name="skillCategory" value={filters.skillCategory} onChange={handleChange} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900">
                {jobCategories.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className="text-sm font-medium text-slate-700">
              Job title
              <input name="jobTitle" value={filters.jobTitle} onChange={handleChange} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Country
              <input name="country" value={filters.country} onChange={handleChange} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              State
              <input name="state" value={filters.state} onChange={handleChange} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              City
              <input name="city" value={filters.city} onChange={handleChange} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Job type
              <input name="jobType" value={filters.jobType} onChange={handleChange} placeholder="Internship, Full-time" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Work mode
              <input name="workMode" value={filters.workMode} onChange={handleChange} placeholder="Remote, Hybrid, On-site" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Experience level
              <input name="experienceLevel" value={filters.experienceLevel} onChange={handleChange} placeholder="Entry Level, Beginner" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Salary range
              <input name="salaryRange" value={filters.salaryRange} onChange={handleChange} placeholder="₦100,000" className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Date posted
              <input type="date" name="datePosted" value={filters.datePosted} onChange={handleChange} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Application deadline
              <input type="date" name="applicationDeadline" value={filters.applicationDeadline} onChange={handleChange} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900" />
            </label>
          </div>
        </aside>

        <div>
          <p className="mb-4 text-sm text-slate-600">{filteredJobs.length} job(s) found.</p>
          <div className="space-y-4">
            {filteredJobs.map((job) => {
              const whatsappMessage = `Hello Feed The Nation, I am interested in the ${job.title} role at ${job.company}.`;
              const whatsappUrl = `https://wa.me/${job.whatsappContact}?text=${encodeURIComponent(whatsappMessage)}`;
              const isSaved = savedJobs.includes(job.id);

              return (
                <article key={job.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-sm font-bold text-emerald-700">
                        {job.company.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
                        <p className="text-sm text-slate-600">{job.company}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{job.jobType}</span>
                  </div>

                  <div className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
                    <p>Location: {job.location}</p>
                    <p>Work mode: {job.workMode}</p>
                    <p>Required skill: {job.requiredSkill}</p>
                    <p>Experience level: {job.experienceLevel}</p>
                    <p>Salary/Stipend: {job.salaryRange}</p>
                    <p>Date posted: {job.datePosted}</p>
                    <p>Application deadline: {job.applicationDeadline}</p>
                  </div>

                  <p className="mt-3 text-sm text-slate-600">{job.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <button type="button" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">View Details</button>
                    <button type="button" className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">Apply Now</button>
                    <button
                      type="button"
                      onClick={() => toggleSaveJob(job.id)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        isSaved ? 'bg-amber-100 text-amber-800' : 'border border-amber-500 text-amber-700 hover:bg-amber-50'
                      }`}
                    >
                      {isSaved ? 'Saved' : 'Save Job'}
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                    >
                      WhatsApp / Contact
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Jobs;
