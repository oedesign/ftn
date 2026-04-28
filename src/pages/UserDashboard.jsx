const profile = {
  fullName: 'Amina Johnson',
  username: '@amina_ftn_2047',
  memberId: 'FTN-2047-AX',
  location: 'Lagos, Nigeria',
  bio: 'Community volunteer and FTN member focused on food access, youth skills training, and local impact.',
  joined: 'Joined March 2024',
  accountType: 'Community Member'
};

const actionButtons = [
  'Edit Profile',
  'View Dashboard',
  'My Donations',
  'Volunteer Status',
  'Saved Campaigns',
  'Settings'
];

const tabs = [
  'Overview',
  'Posts',
  'Donations',
  'Volunteer Work',
  'Campaigns',
  'Badges',
  'Impact',
  'Wallet',
  'Orders',
  'Jobs',
  'Skills'
];

const overviewStats = [
  { label: 'FTN Balance', value: '1,240 FTN' },
  { label: 'Campaigns Supported', value: '12' },
  { label: 'Volunteer Hours', value: '186 hrs' },
  { label: 'Skills Completed', value: '7' },
  { label: 'Jobs Applied', value: '5' },
  { label: 'Market Orders', value: '16' }
];

const graduationRewards = [
  {
    trainingName: 'Web Development Training',
    score: 87,
    graduationStatus: 'Graduated',
    certificateStatus: 'Issued',
    rewardAmount: '150,000 FTN',
    rewardStatus: 'Credited'
  },
  {
    trainingName: 'Solar Installation Basics',
    score: 76,
    graduationStatus: 'Graduated',
    certificateStatus: 'Issued',
    rewardAmount: '100,000 FTN',
    rewardStatus: 'Credited'
  },
  {
    trainingName: 'Data Entry & Office Productivity',
    score: 92,
    graduationStatus: 'Graduated',
    certificateStatus: 'Issued',
    rewardAmount: '200,000 FTN',
    rewardStatus: 'Credited'
  }
];

function UserDashboard() {
  return (
    <section className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
      <div className="h-40 bg-gradient-to-r from-emerald-700 via-emerald-500 to-amber-400 sm:h-52" aria-hidden="true" />

      <div className="relative px-4 pb-8 sm:px-6 lg:px-8">
        <div className="-mt-16 flex flex-col gap-5 sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-emerald-100 text-3xl font-bold text-emerald-700 shadow-md sm:h-32 sm:w-32">
              AJ
            </div>

            <div className="pb-2">
              <h1 className="text-2xl font-bold text-slate-900">{profile.fullName}</h1>
              <p className="text-sm text-slate-600">
                {profile.username} · {profile.memberId}
              </p>
            </div>
          </div>

          <button
            type="button"
            className="w-full rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto"
          >
            Edit Profile
          </button>
        </div>

        <div className="mt-5 space-y-3 text-sm text-slate-700">
          <p className="text-base text-slate-800">{profile.bio}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span>📍 {profile.location}</span>
            <span>🗓️ {profile.joined}</span>
            <span>🪪 {profile.accountType}</span>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {actionButtons.map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2.5 text-left text-sm font-medium text-emerald-800 transition hover:bg-emerald-100"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 border-b border-slate-200">
          <ul className="flex gap-2 overflow-x-auto pb-3">
            {tabs.map((tab, index) => (
              <li key={tab} className="shrink-0">
                <button
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    index === 0 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
          <p className="mt-1 text-sm text-slate-600">
            Your current Feed The Nation impact, activity, and participation highlights.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {overviewStats.map((item) => (
              <article key={item.label} className="rounded-2xl border border-amber-100 bg-amber-50 p-4 shadow-sm">
                <h3 className="text-sm font-medium text-slate-700">{item.label}</h3>
                <p className="mt-2 text-2xl font-bold text-emerald-700">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-slate-900">Skills Graduation Rewards</h2>
          <p className="mt-1 text-sm text-slate-600">Reward rules for graduating trainees:</p>

          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>70 - 79 points = 100,000 FTN</li>
            <li>80 - 89 points = 150,000 FTN</li>
            <li>90 - 100 points = 200,000 FTN</li>
          </ul>

          <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Token usage policy</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>FTN tokens are internal website credits.</li>
              <li>Tokens cannot be withdrawn as cash.</li>
              <li>Tokens can only be used inside Feed The Nation.</li>
            </ul>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Training name</th>
                    <th className="px-4 py-3 font-semibold">Score</th>
                    <th className="px-4 py-3 font-semibold">Graduation status</th>
                    <th className="px-4 py-3 font-semibold">Certificate status</th>
                    <th className="px-4 py-3 font-semibold">Reward amount</th>
                    <th className="px-4 py-3 font-semibold">Reward status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                  {graduationRewards.map((reward) => (
                    <tr key={reward.trainingName}>
                      <td className="px-4 py-3">{reward.trainingName}</td>
                      <td className="px-4 py-3">{reward.score} points</td>
                      <td className="px-4 py-3">{reward.graduationStatus}</td>
                      <td className="px-4 py-3">{reward.certificateStatus}</td>
                      <td className="px-4 py-3">{reward.rewardAmount}</td>
                      <td className="px-4 py-3">{reward.rewardStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserDashboard;
