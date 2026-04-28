import { useState } from 'react';

const supportCategories = [
  { name: 'Finance', icon: '💰', description: 'Budget support, debt guidance, and emergency financial relief pathways.' },
  { name: 'Housing', icon: '🏠', description: 'Assistance for rent concerns, shelter guidance, and housing referrals.' },
  { name: 'Medical', icon: '🩺', description: 'Help with medical access, appointments, and healthcare support coordination.' },
  { name: 'Business', icon: '📈', description: 'Small business coaching, micro-support, and growth guidance.' },
  { name: 'Marriage & Family', icon: '👨‍👩‍👧', description: 'Family-focused support and relationship wellness resources.' },
  { name: 'Food', icon: '🍲', description: 'Food aid requests, relief access, and nutrition support programs.' },
  { name: 'Childcare', icon: '🧒', description: 'Childcare guidance, support referrals, and family care planning.' },
  { name: 'Education', icon: '📚', description: 'Learning support, school continuity guidance, and education opportunities.' },
  { name: 'Emergency', icon: '🚨', description: 'Urgent help intake for immediate welfare and critical situations.' },
  { name: 'Counseling', icon: '🧠', description: 'Confidential emotional and psychosocial support services.' },
  { name: 'Legal Guidance', icon: '⚖️', description: 'Referral support for legal awareness and documentation guidance.' },
  { name: 'Job Support', icon: '💼', description: 'Career support, job readiness, and work placement referrals.' },
  { name: 'Elderly Support', icon: '👵', description: 'Assistance pathways for elderly care and daily support needs.' },
  { name: 'Disability Support', icon: '♿', description: 'Inclusive support resources and accessibility-related assistance.' }
];

const urgencyOptions = ['Low', 'Medium', 'High', 'Critical'];
const contactOptions = ['Phone Call', 'Email', 'WhatsApp'];

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  state: '',
  city: '',
  category: '',
  needDescription: '',
  urgency: 'Medium',
  contactMethod: 'Phone Call',
  consent: false
};

function CareSupport() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleRequestCategory = (categoryName) => {
    setFormData((current) => ({ ...current, category: categoryName }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData((current) => ({ ...current, needDescription: '' }));
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-3xl font-bold text-slate-900">Care &amp; Support</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Request help, guidance, or welfare support from Feed The Nation and its partners.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Support Categories</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {supportCategories.map((category) => (
            <article key={category.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl" aria-hidden="true">
                {category.icon}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              <button
                type="button"
                onClick={() => handleRequestCategory(category.name)}
                className="mt-4 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Request Help
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-2xl font-semibold text-slate-900">Request Help Form</h2>

        {submitted && (
          <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            Your support request has been submitted successfully. A team member will contact you soon.
          </p>
        )}

        <form className="mt-5 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="text-sm font-medium text-slate-700">
            Full name
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Phone number
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Country
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            State
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            City
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Support category
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              <option value="">Select category</option>
              {supportCategories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700">
            Urgency level
            <select
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              {urgencyOptions.map((urgency) => (
                <option key={urgency} value={urgency}>
                  {urgency}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-medium text-slate-700 md:col-span-2">
            Description of need
            <textarea
              name="needDescription"
              value={formData.needDescription}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-slate-900"
            />
          </label>

          <label className="text-sm font-medium text-slate-700">
            Preferred contact method
            <select
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900"
            >
              {contactOptions.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </label>

          <label className="flex items-start gap-2 text-sm text-slate-700 md:col-span-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-0.5"
            />
            I consent to Feed The Nation contacting me about this support request.
          </label>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CareSupport;
