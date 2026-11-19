'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, Check, CircleDollarSign, LockKeyhole, TrendingUp } from 'lucide-react';

const proof = [
  { value: '$30M+', label: 'client revenue generated in 2024' },
  { value: '$115', label: 'reported average cost per job' },
  { value: '1,500%', label: 'reported client ROI' },
];

export default function Home() {
  const router = useRouter();
  function continueToBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try { sessionStorage.setItem('rgp-booking', JSON.stringify(Object.fromEntries(data.entries()))); } catch { /* Booking remains available without browser storage. */ }
    router.push('/thank-you');
  }
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Restoration Growth Partners home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>RESTORATION <b>GROWTH PARTNERS</b></span>
        </a>
        <div className="step-indicator" aria-label="Step 1 of 2">
          <span className="active">1</span><i /><span>2</span>
          <em>Market analysis</em>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><TrendingUp size={16} /> For restoration companies doing $3M+ annually</div>
          <h1>Your restoration company does $3M+. <span>How much more is Google sending to your competitors?</span></h1>
          <p className="dek">Every month, property owners in your market search for emergency restoration help. If your company isn’t visible, the job doesn’t disappear—it goes to a competitor.</p>

          <div className="leak-card">
            <div className="leak-head">
              <span>The invisible revenue leak</span>
              <b>It never appears on your P&amp;L</b>
            </div>
            <div className="leak-flow" aria-label="Example of a missed restoration job">
              <div><span>2:14 AM</span><strong>Basement floods</strong></div>
              <ArrowRight />
              <div><span>2:19 AM</span><strong>Homeowner searches</strong></div>
              <ArrowRight />
              <div className="lost"><span>Your competitor ranks first</span><strong>$8,000 job lost</strong></div>
            </div>
          </div>

          <ul className="benefit-list">
            <li><Check /> See the demand already happening in your market</li>
            <li><Check /> Find the gap between your capacity and current lead flow</li>
            <li><Check /> Get practical job and revenue projections—no vanity metrics</li>
          </ul>
        </div>

        <aside className="form-card" aria-labelledby="form-title">
          <div className="form-kicker"><CircleDollarSign size={18} /> Free lead projection analysis</div>
          <h2 id="form-title">Find the revenue you may be missing.</h2>
          <p>Tell us a little about your restoration business. We’ll map the opportunity in your market.</p>
          <form onSubmit={continueToBooking}>
            <div className="field-row">
              <label>First name<input name="firstName" placeholder="Marcus" required /></label>
              <label>Last name<input name="lastName" placeholder="Taylor" required /></label>
            </div>
            <label>Work email<input name="email" type="email" placeholder="marcus@company.com" required /></label>
            <label>Phone number<input name="phone" type="tel" placeholder="(555) 123-4567" required /></label>
            <label>Company name<input name="company" placeholder="Summit Restoration" required /></label>
            <label>Annual company revenue
              <select name="revenue" required defaultValue="">
                <option value="" disabled>Select a range</option>
                <option>$3M–$5M</option><option>$5M–$10M</option><option>$10M–$20M</option><option>$20M+</option>
              </select>
            </label>
            <button type="submit" className="primary-button">Get my free market analysis</button>
            <small><LockKeyhole size={13} /> Next: choose your call time. Details are sent when you book.</small>
          </form>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Selected client results">
        <p>Results over reports.</p>
        {proof.map((item) => <div key={item.value}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        <small>*Selected client results. Individual results vary.</small>
      </section>

      <section className="argument">
        <div>
          <span className="section-label">The real question</span>
          <h2>You built the trucks, team, equipment, and processes. <span>Is customer acquisition the bottleneck?</span></h2>
        </div>
        <div className="argument-copy">
          <p>If your operation can handle another $50K, $100K, or $200K per month, weak lead flow is more than a marketing problem. It’s unused capacity.</p>
          <p>We help restoration companies capture high-intent demand now while building rankings, reviews, and market authority they own long term—so growth doesn’t vanish the moment ad spend stops.</p>
        </div>
      </section>

      <footer><span>© 2026 Restoration Growth Partners</span><span>Marketing built for the restoration industry.</span></footer>
    </main>
  );
}
