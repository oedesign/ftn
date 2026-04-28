import { useMemo, useState } from 'react';

const referralCode = 'FTN-AYO-2048';
const referralLink = `https://feedthenation.org/join?ref=${referralCode}`;

const referralStats = [
  { label: 'Invited Users', value: 42 },
  { label: 'Successful Referrals', value: 28 },
  { label: 'Pending Referrals', value: 14 },
  { label: 'Referral Rewards Earned', value: '185,000 FTN' }
];

const wallet = {
  availableBalance: 245000,
  pendingBalance: 35000,
  totalEarned: 410000,
  totalUsed: 130000
};

const transactions = [
  {
    id: 'txn-1001',
    type: 'Referral reward',
    date: 'April 15, 2026',
    amount: '+50,000 FTN',
    status: 'Completed'
  },
  {
    id: 'txn-1002',
    type: 'Graduation reward',
    date: 'April 6, 2026',
    amount: '+150,000 FTN',
    status: 'Completed'
  },
  {
    id: 'txn-1003',
    type: 'Market purchase',
    date: 'March 29, 2026',
    amount: '-25,000 FTN',
    status: 'Completed'
  },
  {
    id: 'txn-1004',
    type: 'Admin adjustment',
    date: 'March 22, 2026',
    amount: '+10,000 FTN',
    status: 'Reviewed'
  }
];

function FTN() {
  const [copyMessage, setCopyMessage] = useState('');

  const estimatedNaira = useMemo(() => wallet.availableBalance * 10, []);

  const shareMessage = `Join me on Feed The Nation and start earning FTN rewards: ${referralLink}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;

  const handleCopy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyMessage(`${label} copied.`);
      setTimeout(() => setCopyMessage(''), 2200);
    } catch {
      setCopyMessage('Copy failed on this browser. Please copy manually.');
      setTimeout(() => setCopyMessage(''), 2200);
    }
  };

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h1 className="text-3xl font-bold text-slate-900">FTN Referral &amp; Wallet</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Invite people to join Feed The Nation and earn FTN tokens that can be used inside the platform.
        </p>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-2xl font-semibold text-slate-900">Referral</h2>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <article className="space-y-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Referral code</p>
              <p className="mt-1 text-xl font-bold text-slate-900">{referralCode}</p>
            </div>

            <button
              type="button"
              onClick={() => handleCopy(referralCode, 'Referral code')}
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Copy code
            </button>
          </article>

          <article className="space-y-4 rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Referral link</p>
              <p className="mt-1 break-all text-sm text-slate-700">{referralLink}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleCopy(referralLink, 'Referral link')}
                className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Copy referral link
              </button>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                Share on WhatsApp
              </a>
            </div>
          </article>
        </div>

        {copyMessage && <p className="mt-4 text-sm font-medium text-emerald-700">{copyMessage}</p>}
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-2xl font-semibold text-slate-900">Referral Stats</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {referralStats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">{stat.label}</p>
              <p className="mt-1 text-xl font-bold text-slate-900">{stat.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-2xl font-semibold text-slate-900">Token Wallet</h2>
        <p className="mt-2 text-sm text-slate-600">Conversion rule: 100 FTN = ₦1,000 (1 FTN = ₦10).</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <article className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-sm text-slate-600">Available balance</p>
            <p className="mt-1 text-xl font-bold text-emerald-700">{wallet.availableBalance.toLocaleString()} FTN</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-600">Pending balance</p>
            <p className="mt-1 text-xl font-bold text-slate-900">{wallet.pendingBalance.toLocaleString()} FTN</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-600">Total earned</p>
            <p className="mt-1 text-xl font-bold text-slate-900">{wallet.totalEarned.toLocaleString()} FTN</p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-600">Total used</p>
            <p className="mt-1 text-xl font-bold text-slate-900">{wallet.totalUsed.toLocaleString()} FTN</p>
          </article>
          <article className="rounded-2xl border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm text-slate-600">Estimated naira value</p>
            <p className="mt-1 text-xl font-bold text-amber-700">₦{estimatedNaira.toLocaleString()}</p>
          </article>
        </div>
      </section>

      <section className="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-2xl font-semibold text-slate-900">Transaction History</h2>

        <div className="mt-4 space-y-3 md:hidden">
          {transactions.map((txn) => (
            <article key={txn.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{txn.type}</p>
              <p className="mt-1 text-sm text-slate-600">{txn.date}</p>
              <p className="mt-2 text-sm text-slate-700">{txn.amount}</p>
              <p className="text-sm text-slate-500">Status: {txn.status}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 hidden overflow-x-auto md:block">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Amount</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
              {transactions.map((txn) => (
                <tr key={txn.id}>
                  <td className="px-4 py-3">{txn.type}</td>
                  <td className="px-4 py-3">{txn.date}</td>
                  <td className="px-4 py-3">{txn.amount}</td>
                  <td className="px-4 py-3">{txn.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-amber-100 bg-amber-50 p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-semibold text-slate-900">Important Rules</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>FTN tokens cannot be withdrawn as cash.</li>
          <li>FTN tokens can only be used inside Feed The Nation.</li>
          <li>Suspicious referrals may be reviewed.</li>
        </ul>
      </section>
    </div>
  );
}

export default FTN;
