import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { useState } from "react";

const EVENTBRITE_URL = "https://www.eventbrite.ca/e/aws-leadership-community-day-tickets-2003704713737?aff=oddtdtcreator&keep_tld=true";

const events = [
  {
    id: "leadership-community-day",
    year: "2026",
    month: "NOV",
    days: "22",
    date: "November 22, 2026",
    title: "AWS Leadership Community Day",
    location: "Ottawa, Ontario, Canada",
    type: "Community day",
    href: EVENTBRITE_URL,
    status: "Registration open",
  },
  {
    id: "women-aws-summit",
    year: "2027",
    month: "MAR",
    days: "06",
    date: "March 6, 2027",
    title: "Women AWS Summit",
    subtitle: "North America - Eastern Canada Edition",
    location: "Eastern Canada",
    type: "Summit",
    status: "Details coming soon",
  },
  {
    id: "community-day-hackathon",
    year: "2027",
    month: "AUG",
    days: "20-21",
    date: "August 20-21, 2027",
    title: "AWS Community Day with Hackathon Day",
    location: "Ottawa, Ontario, Canada",
    type: "Hackathon",
    status: "Details coming soon",
  },
];

const navGroups = [
  { label: "Participate", items: [["Build Projects", "/#participate"], ["Open Challenge", "/#challenges"], ["Hackathon Conference", "/#conference"]] },
  { label: "Organizers", items: [["Hackathon Days", "/#organize"], ["Organizer Guides", "/#organize"], ["Partner With Us", "/#sponsors"]] },
  { label: "Community", items: [["Event Gallery", "/#gallery"], ["Common Questions", "/#faq"], ["Community Partners", "/#sponsors"]] },
  { label: "About", items: [["Founders", "/#founders"], ["Sponsors", "/#sponsors"], ["Ottawa 2027", "/events"]] },
];

type Filter = "All" | "Community day" | "Summit" | "Hackathon";

const Events = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("All");
  const filteredEvents = events.filter((event) => filter === "All" || event.type === filter);
  const years = [...new Set(filteredEvents.map((event) => event.year))];

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#12213c]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 text-[#12213c] backdrop-blur-md">
        <nav className="container mx-auto flex h-16 items-center px-6">
          <a href="/" className="flex items-center gap-2 font-mono text-sm font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-[#2246c9] text-white">CH</span>
            <span>Community Hackathon</span>
          </a>
          <div className="ml-8 hidden flex-1 items-center gap-2 lg:flex">
            <a href="/" className="rounded px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">Home</a>
            <a href="/events" aria-current="page" className="rounded bg-[#eef1ff] px-3 py-2 text-sm font-medium text-[#173bbd]">Events</a>
            {navGroups.map((group) => (
              <div key={group.label} className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors ${activeMenu === group.label ? "bg-[#eef1ff] text-[#173bbd]" : "text-slate-600 hover:bg-slate-100 hover:text-[#12213c]"}`}
                  aria-expanded={activeMenu === group.label}
                  aria-haspopup="true"
                  onClick={() => setActiveMenu((active) => active === group.label ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === group.label ? "rotate-180" : ""}`} />
                </button>
                {activeMenu === group.label && (
                  <div className="nav-dropdown absolute left-0 top-full z-50 mt-2 min-w-52 rounded border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/10">
                    {group.items.map(([label, href]) => (
                      <a key={`${group.label}-${label}`} href={href} onClick={() => setActiveMenu(null)} className="block rounded px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <a href="/#sponsors" className="hidden px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#173bbd] xl:inline">For Partners</a>
          </div>
        </nav>
        <div className="border-t border-slate-200 bg-white/95 lg:hidden">
          <div className="horizontal-nav container mx-auto flex items-center gap-1 overflow-x-auto px-4 py-2">
            <a href="/" className="shrink-0 rounded px-3 py-2 font-mono text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">Home</a>
            <a href="/events" aria-current="page" className="shrink-0 rounded bg-[#eef1ff] px-3 py-2 font-mono text-xs font-semibold text-[#173bbd]">Events</a>
            <a href="/#participate" className="shrink-0 rounded px-3 py-2 font-mono text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">Build</a>
            <a href="/#challenges" className="shrink-0 rounded px-3 py-2 font-mono text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">Challenges</a>
            <a href="/#organize" className="shrink-0 rounded px-3 py-2 font-mono text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">Organize</a>
            <a href="/#conference" className="shrink-0 rounded px-3 py-2 font-mono text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">Conference</a>
            <a href="/#gallery" className="shrink-0 rounded px-3 py-2 font-mono text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">Community</a>
            <a href="/#faq" className="shrink-0 rounded px-3 py-2 font-mono text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#173bbd]">FAQ</a>
          </div>
        </div>
      </header>

      <main className="pt-28 lg:pt-16">
        <section className="border-b border-slate-200 bg-white">
          <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-[1.3fr_.7fr] md:py-24">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#173bbd]">2026-2027 community season</p>
              <h1 className="events-display mt-5 text-5xl font-bold leading-[1.05] text-[#12213c] sm:text-6xl">Community events.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">Find the next Community Day, summit, or hackathon gathering across the Ottawa community calendar. Pick an event, bring a friend, and make something meaningful together.</p>
            </div>
            <div className="self-end border-l-0 border-slate-200 pt-6 md:border-l md:pl-8 md:pt-0">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500">Currently listed</span>
              <strong className="mt-2 block font-mono text-6xl font-medium text-[#2246c9]">{events.length.toString().padStart(2, "0")}</strong>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">More event details and registration links will appear here as each program is confirmed.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fb] py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-6 border-y border-slate-200 py-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 font-mono text-sm font-semibold text-[#12213c]"><CalendarDays className="h-5 w-5 text-[#2246c9]" /> Browse events</div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter events by type">
                {(["All", "Community day", "Summit", "Hackathon"] as Filter[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    className={`rounded border px-3 py-2 font-mono text-xs transition-colors ${filter === option ? "border-[#e6b514] bg-[#ffd45a] text-[#12213c]" : "border-slate-200 bg-white text-slate-600 hover:border-[#2246c9] hover:text-[#173bbd]"}`}
                    role="tab"
                    aria-selected={filter === option}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#173bbd]">Schedule</p>
                  <h2 className="events-display mt-3 text-3xl font-bold text-[#12213c] md:text-4xl">Upcoming events</h2>
                </div>
                <p className="font-mono text-xs text-slate-500">{filteredEvents.length.toString().padStart(2, "0")} event{filteredEvents.length === 1 ? "" : "s"} shown</p>
              </div>

              {years.length ? years.map((year) => (
                <section key={year} aria-labelledby={`year-${year}`} className="mb-14 last:mb-0">
                  <h3 id={`year-${year}`} className="events-display border-b border-slate-200 pb-4 text-2xl font-bold text-[#12213c]">{year}</h3>
                  <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filteredEvents.filter((event) => event.year === year).map((event) => {
                      const Card = (
                        <>
                          <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
                            <div className="font-mono leading-none text-[#2246c9]"><span className="block text-xs font-medium tracking-widest">{event.month}</span><span className="mt-2 block text-4xl font-medium text-[#12213c]">{event.days}</span></div>
                            <span className="rounded border border-emerald-200 bg-emerald-50 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-emerald-800">{event.type}</span>
                          </div>
                          <div className="flex min-h-64 flex-col px-6 py-6">
                            <h4 className="events-display text-xl font-bold leading-snug text-[#12213c]">{event.title}</h4>
                            {event.subtitle && <p className="mt-2 text-sm leading-relaxed text-slate-600">{event.subtitle}</p>}
                            <div className="mt-6 space-y-3 text-sm text-slate-600">
                              <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 shrink-0 text-[#2246c9]" />{event.date}</span>
                              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-[#2246c9]" />{event.location}</span>
                            </div>
                            <div className="mt-auto pt-7">
                              {event.href ? <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[#173bbd]">{event.status} <ArrowRight className="h-4 w-4" /></span> : <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-slate-600"><Sparkles className="h-4 w-4 text-[#e6b514]" />{event.status}</span>}
                            </div>
                          </div>
                        </>
                      );
                      return event.href ? (
                        <a key={event.id} href={event.href} target="_blank" rel="noopener noreferrer" className="event-directory-card group overflow-hidden rounded border border-slate-200 bg-white transition-colors hover:border-[#2246c9] hover:bg-[#f4f6ff]">{Card}</a>
                      ) : <article key={event.id} className="event-directory-card overflow-hidden rounded border border-slate-200 bg-white">{Card}</article>;
                    })}
                  </div>
                </section>
              )) : (
                <div className="border border-dashed border-slate-300 p-10 text-center text-slate-600">No events match this filter yet.</div>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-[#173bbd] bg-[#2246c9] py-16 text-white md:py-20">
          <div className="container mx-auto flex flex-col gap-7 px-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-widest text-white/70">Keep building</p><h2 className="events-display mt-3 text-3xl font-bold">Bring an idea to the next community gathering.</h2></div>
            <Button asChild size="lg" className="h-12 shrink-0 rounded border-0 bg-[#ffd45a] px-6 text-[#12213c] hover:bg-[#f6c744]"><a href="/#participate">Participate <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-12"><div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row"><div className="font-mono"><span className="font-bold text-[#173bbd]">Community Hackathon</span> · Ottawa</div><a href="/" className="transition-colors hover:text-[#173bbd]">Back to the community home</a></div></footer>
    </div>
  );
};

export default Events;
