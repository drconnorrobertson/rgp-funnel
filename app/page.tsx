'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Check, Clock3, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [continuing, setContinuing] = useState(false);
  function continueToBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (continuing) return;
    setContinuing(true);
    const data = new FormData(event.currentTarget);
    try { sessionStorage.setItem('rgp-booking', JSON.stringify(Object.fromEntries(data.entries()))); } catch { /* The calendar works without browser storage. */ }
    router.push('/thank-you');
  }
  return <main className="site-shell">
    <header className="topbar">
      <a className="brand" href="#top" aria-label="Restoration Growth Partners home"><img src="/rgp-logo.png" alt="Restoration Growth Partners" width="238" height="96" /></a>
      <a className="header-cta" href="#analysis">Get my growth plan</a>
    </header>
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><TrendingUp size={16} /> For restoration companies doing $3M+ a year</div>
        <h1>Grow beyond $3M with <span>more profitable restoration jobs.</span></h1>
        <p className="dek">Find out where your next jobs could come from—and what it will take to win them. Get a free, market-specific growth plan from a team focused exclusively on restoration.</p>
        <ul className="benefit-list">
          <li><Check /> See where competitors are winning your local searches</li>
          <li><Check /> Identify opportunities that fit your team’s capacity</li>
          <li><Check /> Review a lead projection, priorities, and timeline</li>
        </ul>
        <a href="#analysis" className="hero-cta primary-button">Get my free growth plan</a>
        <p className="offer-note"><Clock3 size={16} /> 30-minute strategy call <span>•</span> No cost <span>•</span> No obligation</p>
        <div className="proof-inline"><strong>$30M+</strong><span>Client revenue generated in 2024, as reported by RGP.</span></div>
      </div>
      <aside className="form-card" id="analysis" aria-labelledby="form-title">
        <div className="form-kicker">Your next stage of growth starts here</div>
        <h2 id="form-title">Get your free<br />market growth plan.</h2>
        <p>A focused conversation about your market, your capacity, and your next move.</p>
        <form onSubmit={continueToBooking}>
          <label htmlFor="revenue">Annual company revenue
            <select id="revenue" name="revenue" required defaultValue="">
              <option value="" disabled>Select your annual revenue</option>
              <option>$3M–$5M</option><option>$5M–$10M</option><option>$10M–$20M</option><option>$20M+</option>
            </select>
          </label>
          <label htmlFor="company">Company name <span className="optional">(optional)</span><input id="company" name="company" placeholder="Your restoration company" autoComplete="organization" maxLength={160} /></label>
          <button type="submit" className="primary-button" disabled={continuing}>{continuing ? 'Opening available times…' : 'Choose my call time'}</button>
          <small><ShieldCheck size={16} /> No payment details. No commitment.</small>
        </form>
        <div className="next-step"><strong>What happens next?</strong><p>Choose an available time, then enter your contact details in our secure booking calendar.</p></div>
      </aside>
    </section>
    <section className="results-section" aria-labelledby="results-title">
      <div className="section-heading"><span className="section-label">Restoration businesses. Documented results.</span><h2 id="results-title">Built around revenue, not just rankings.</h2></div>
      <div className="results-grid">
        <article><span className="client-name">Romexterra Restoration</span><strong>$8.5M+</strong><p>Revenue generated in 2023 & 2024.</p><a href="https://www.restorationgrowthpartners.com/case-studies/romexterra-restoration" target="_blank" rel="noopener noreferrer">Read the case study</a></article>
        <article><span className="client-name">Ercolano Cleaning & Restoration</span><strong>$12.5M+</strong><p>Revenue generated in 2023 & 2024.</p><a href="https://www.restorationgrowthpartners.com/case-studies/ercolano-cleaning-and-restoration" target="_blank" rel="noopener noreferrer">Read the case study</a></article>
        <article><span className="client-name">Sunshine Restoration</span><strong>$500K+</strong><p>Revenue generated in 12 months.</p><a href="https://www.restorationgrowthpartners.com/case-studies/sunshine-restoration" target="_blank" rel="noopener noreferrer">Read the case study</a></article>
      </div>
      <p className="results-note">Selected results reported by Restoration Growth Partners. Different markets, budgets, and starting points produce different results. These are not guarantees.</p>
    </section>
    <section className="argument">
      <div><span className="section-label">A plan for the business you’ve built</span><h2>You have the team.<br />Let’s find the <span>next growth opportunity.</span></h2></div>
      <div className="argument-copy"><p>When trucks, equipment, and people are ready for more work, inconsistent lead flow holds the whole business back.</p><p>We’ll look at local demand, your Google presence, and your competition—then discuss a practical plan to generate more jobs and measure the revenue they bring in.</p><a href="#analysis" className="text-cta">Get my free growth plan</a></div>
    </section>
    <section className="faq-section"><h2>Before you book.</h2><details><summary>Who is this for?</summary><p>Owners and decision-makers at restoration companies generating at least $3 million annually, with the team and capacity to take on more work.</p></details><details><summary>What do we cover in the free call?</summary><p>Your service area, local competition, current marketing, and capacity. We’ll discuss your market opportunity, potential lead volume, and recommended next steps. Any projection is an estimate based on your situation.</p></details><details><summary>Will I need to commit to anything?</summary><p>No. The initial strategy call is free. If working together makes sense, you can review the scope, investment, and timeline before deciding.</p></details></section>
    <section className="closing-cta"><h2>Know your market. Plan your next move.</h2><a href="#analysis" className="primary-button">Get my free growth plan</a><p>For established restoration companies doing $3M+ annually.</p></section>
    <footer><span>© {new Date().getFullYear()} Restoration Growth Partners</span><span><a href="https://www.restorationgrowthpartners.com/" target="_blank" rel="noopener noreferrer">Main website</a><a href="https://restoration-growth-partners.vercel.app/privacy" target="_blank" rel="noopener noreferrer">Privacy</a></span></footer>
    <div className="mobile-cta"><a href="#analysis" className="primary-button">Get my free growth plan</a></div>
  </main>;
}
