import { ArrowRight, CalendarDays, Check, Clock3, ShieldCheck, Users } from 'lucide-react';
import { BookingCalendar } from '../booking-calendar';

export default function ThankYou() {
  return (
    <main className="site-shell thank-you-page">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Restoration Growth Partners home">
          <img src="/rgp-logo.png" alt="Restoration Growth Partners" width="238" height="96" />
        </a>
        <div className="step-indicator complete" aria-label="Step 2 of 2">
          <span><Check size={15} /></span><i /><span className="active">2</span>
          <em>Book your call</em>
        </div>
      </header>

      <section className="thanks-hero">
        <div className="confirmation"><Check /> Choose your time</div>
        <h1>One last step: book your <span>strategy call.</span></h1>
        <p>Choose a time below to review your market, growth opportunities, and next steps. Your free 30-minute call comes with no obligation.</p>
      </section>

      <section className="booking-layout">
        <div className="booking-copy">
          <span className="section-label">On your call</span>
          <h2>We’ll focus on the numbers that actually move your business.</h2>
          <div className="call-points">
            <div><span><Users /></span><p><strong>Your market opportunity</strong>We’ll review local search demand and where competitors may be capturing jobs before you.</p></div>
            <div><span><Clock3 /></span><p><strong>Your capacity gap</strong>We’ll compare your current lead flow with the work your team and equipment can realistically handle.</p></div>
            <div><span><ShieldCheck /></span><p><strong>Your path to owned growth</strong>We’ll outline a mix of immediate demand capture and long-term assets that compound over time.</p></div>
          </div>
          <div className="call-prep"><strong>Bring your growth priorities.</strong><p>We’ll talk about your service area, available capacity, and what a profitable next stage could look like.</p></div>
        </div>

        <aside className="calendar-card" aria-labelledby="calendar-title">
          <div className="calendar-header">
            <div className="calendar-avatar">RGP</div>
            <div><small>RESTORATION GROWTH PARTNERS</small><h2 id="calendar-title">Growth Strategy Call</h2></div>
          </div>
          <div className="meeting-meta"><span><Clock3 /> 30 min</span><span><CalendarDays /> Video call</span></div>
          <BookingCalendar />
          <p className="calendar-note">No hard sell. If there’s a fit, we’ll show you the next step. If not, you’ll still leave with clarity.</p>
        </aside>
      </section>

      <footer><span>© 2026 Restoration Growth Partners</span><a href="/">Back to growth plan</a></footer>
    </main>
  );
}
