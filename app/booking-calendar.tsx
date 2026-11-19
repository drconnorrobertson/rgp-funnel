'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
const calendarUrl = 'https://api.leadconnectorhq.com/widget/booking/XOMzwYYPPwonprc5gAA2';
export function BookingCalendar() {
 const [url, setUrl] = useState(calendarUrl);
 useEffect(() => {
  try {
   const details = JSON.parse(sessionStorage.getItem('rgp-booking') || '{}');
   const params = new URLSearchParams();
   for (const [field, query] of Object.entries({ firstName: 'first_name', lastName: 'last_name', email: 'email', phone: 'phone', company: 'company_name' })) {
    if (typeof details[field] === 'string') params.set(query, details[field]);
   }
   if (params.size) setUrl(`${calendarUrl}?${params}`);
  } catch { /* Booking remains available if storage is unavailable. */ }
 }, []);
 return <><iframe className="booking-frame" id="F8yizd8lKA788CETlCvL_1729197570697" src={url} title="Book your Restoration Growth Partners strategy call" scrolling="no" referrerPolicy="no-referrer" /><Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" /><p className="calendar-fallback"><a href={url} target="_blank" rel="noopener noreferrer">Open calendar in a new tab</a></p></>;
}
