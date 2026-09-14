import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Code2, Users, Trophy, Rocket, Sparkles, Bot, Eye, Camera, BookOpen, CalendarDays, Presentation, Building2, Lightbulb, Handshake, ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import headshotGarima from "@/assets/headshots/Garima_bajpai.png";
import headshotJohn from "@/assets/headshots/John_Willis_Image20260606195016.png";
import awsLogo from "@/assets/aws-logo.svg";
import heroCommunity from "@/assets/gallery/dev_54567114525_l.jpg";
import logoCrowdbyte from "@/assets/logos/logo new_version1.0_logo-main - white.png";
import logoAlgonquin from "@/assets/logos/Algonquin_logo_AC_WORDMARK_1C_GRN.png";
import logoWct from "@/assets/logos/wct-logo_dark.png";
import logoInvest from "@/assets/logos/io-logo-svg.svg";
import logoPackt from "@/assets/logos/packt-Dz-8EKdV.svg";
import logoLiatrio from "@/assets/logos/liatrio-logo-dark.svg";
import logoTEK from "@/assets/logos/teksystems-logo.svg";
import logoKodeKloud from "@/assets/logos/Kode_cloud_Screenshot 2026-06-06 220755.png";
import logoOreilly from "@/assets/logos/Oriely_download.png";
import logoNewFound from "@/assets/logos/NewFound_soultions_Screenshot 2026-06-11 000345.png";
import logoOpaque from "@/assets/logos/Opaque_Screenshot 2026-06-11 000302.png";
import logoTech2Step from "@/assets/logos/T2S logo variation_1 color P2.png";
import logoCycode from "@/assets/logos/Cycode_Logo.jpg";
import logoRedHat from "@/assets/logos/Logo-Red_Hat-C-Standard-RGB.Large_logo.jpeg";
import logoDryRun from "@/assets/logos/Dry_run_images.png";
import logoCavtera from "@/assets/logos/Cavtera-Horizontal-Normal.jpg";

const galleryImages = Object.values(
  import.meta.glob("@/assets/gallery/*.jpg", { eager: true, import: "default" })
) as string[];

const VENUE = "Invest Ottawa, 7 Bayview Rd, Ottawa, ON";
const NEXT_EVENT_DATE = "August 20–21, 2027";
const HACKATHON_THEMES_URL = "https://docs.google.com/document/d/1aq3uyKG3NAl9gHVTT86XYjolHzh01HvSt28aCSTdbk0/edit?tab=t.0";

const NAV_GROUPS = [
  {
    label: "Participate",
    items: [
      ["Build Projects", "#participate"],
      ["Open Challenge", "#challenges"],
      ["Hackathon Conference", "#conference"],
    ],
  },
  {
    label: "Organizers",
    items: [
      ["Hackathon Days", "#organize"],
      ["Organizer Guides", "#organize"],
      ["Partner With Us", "#sponsors"],
    ],
  },
  {
    label: "Community",
    items: [
      ["Event Gallery", "#gallery"],
      ["Common Questions", "#faq"],
      ["Community Partners", "#sponsors"],
    ],
  },
  {
    label: "About",
    items: [
      ["Founders", "#founders"],
      ["Sponsors", "#sponsors"],
      ["Ottawa 2027", "#next-event"],
    ],
  },
];

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;
  const visibleCount = 3;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) => (current + offset) % total;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">09 / Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Moments from past events.</h2>
          <p className="text-lg text-muted-foreground mt-4">A look back at the energy, collaboration, and community spirit from our previous gatherings.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
            {Array.from({ length: visibleCount }).map((_, offset) => (
              <div
                key={getIndex(offset)}
                className="gallery-frame relative aspect-[4/3] overflow-hidden rounded-xl border border-border group"
              >
                <img
                  src={galleryImages[getIndex(offset)]}
                  alt={`Community event photo ${getIndex(offset) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 shrink-0 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Previous photos"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            <div className="hidden gap-2 sm:flex">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 shrink-0 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Next photos"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 text-foreground backdrop-blur-md">
        <nav className="container mx-auto flex h-16 items-center px-6">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-gradient-primary text-primary-foreground">CH</span>
            <span>Community Hackathon</span>
          </a>
          <div className="ml-10 hidden flex-1 items-center gap-2 lg:flex">
            {NAV_GROUPS.map((group) => (
              <div key={group.label} className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors ${activeMenu === group.label ? "bg-secondary text-accent" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
                  aria-expanded={activeMenu === group.label}
                  aria-haspopup="true"
                  onClick={() => setActiveMenu((active) => active === group.label ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeMenu === group.label ? "rotate-180" : ""}`} />
                </button>
                {activeMenu === group.label && (
                  <div className="nav-dropdown absolute left-0 top-full z-50 mt-2 min-w-52 rounded border border-border bg-card p-2 shadow-elevated">
                    {group.items.map(([label, href]) => (
                      <a key={`${group.label}-${label}`} href={href} onClick={() => setActiveMenu(null)} className="block rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <a href="#sponsors" className="hidden px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent xl:inline">For Partners</a>
            <Button asChild size="sm" className="hidden rounded border-0 bg-primary text-white hover:bg-primary/90 sm:inline-flex">
              <a href="#next-event">Attend 2027</a>
            </Button>
          </div>
        </nav>
        <div className="border-t border-border bg-card/95 lg:hidden">
          <div className="horizontal-nav container mx-auto flex items-center gap-1 overflow-x-auto px-4 py-2">
            {[
              ["Build", "#participate"],
              ["Challenges", "#challenges"],
              ["Organize", "#organize"],
              ["Conference", "#conference"],
              ["Community", "#gallery"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="shrink-0 rounded px-3 py-2 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-accent">
                {label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="bg-background pt-28 text-foreground lg:pt-16">
        <div className="container mx-auto grid min-h-[calc(100vh-7rem)] items-center gap-10 px-6 py-12 md:grid-cols-[1.05fr_.95fr] md:py-16 lg:min-h-[calc(100vh-4rem)]">
          <div className="hero-sequence py-6">
            <p className="mb-6 font-mono text-xs font-semibold uppercase tracking-widest text-accent">Built in Ottawa. Open to everyone.</p>
            <h1 className="max-w-3xl font-mono text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">Community Hackathon</h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">A home for people who learn by building. Join a team, solve an open challenge, share your work, or bring a hackathon to your community.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 rounded border-0 bg-primary px-6 text-white hover:bg-primary/90">
                <a href="#participate">Participate <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded border-border bg-card px-6 text-foreground hover:bg-secondary hover:text-white">
                <a href="#organize">Organize a hackathon</a>
              </Button>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-border py-5">
              <div><strong className="block text-xl text-white">2 days</strong><span className="text-xs text-muted-foreground">to build together</span></div>
              <div className="border-l border-border pl-5"><strong className="block text-xl text-white">Open</strong><span className="text-xs text-muted-foreground">to all skill levels</span></div>
              <div className="border-l border-border pl-5"><strong className="block text-xl text-white">Ottawa</strong><span className="text-xs text-muted-foreground">community-led</span></div>
            </div>
          </div>
          <div className="hero-visual relative min-h-[380px] overflow-hidden rounded-lg md:min-h-[560px]">
            <img src={heroCommunity} alt="Developers collaborating at a Community Hackathon event" className="hero-photo absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-background/90 p-5 text-white">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">Community in motion</p>
              <p className="mt-2 text-sm text-white/80">Build alongside developers, mentors, students, and technology leaders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT EVENT */}
      <section id="next-event" className="bg-primary py-12 text-white">
        <div data-reveal className="reveal container mx-auto flex flex-col justify-between gap-8 px-6 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-white/75">Next community gathering</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">AWS Community Days Ottawa 2027</h2>
          </div>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <span className="flex items-center gap-2"><Calendar className="h-5 w-5 text-accent" /> {NEXT_EVENT_DATE}</span>
            <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-accent" /> Ottawa, Canada</span>
          </div>
        </div>
      </section>

      {/* PARTICIPATE */}
      <section id="participate" className="bg-card py-20 text-foreground md:py-28">
        <div className="container mx-auto px-6">
          <div data-reveal className="reveal max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">Participate</span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Find your way into the build.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Start with a project, take on a shared challenge, or learn alongside the community at a hackathon conference.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { icon: Code2, title: "Build projects", desc: "Form a team, turn an idea into a working prototype, and publish what you learn.", href: "#challenges", action: "Explore challenge areas" },
              { icon: Lightbulb, title: "Open Challenge", desc: "Bring a problem that matters to you or choose a community challenge without being boxed into one track.", href: HACKATHON_THEMES_URL, action: "View challenge guide", external: true },
              { icon: Presentation, title: "Hackathon Conference", desc: "Learn from builders, attend practical sessions, meet mentors, and see project demos.", href: "#conference", action: "See the format" },
            ].map(({ icon: Icon, title, desc, href, action, external }) => (
              <a key={title} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} data-reveal className="reveal community-card group flex min-h-[280px] flex-col rounded-lg border border-border bg-background p-7 transition-colors hover:border-primary">
                <div className="motion-icon flex h-11 w-11 items-center justify-center rounded bg-primary text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-xl font-bold">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{desc}</p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-accent">{action}<ArrowRight className="ml-2 h-4 w-4" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section id="challenges" className="bg-background py-20 text-white md:py-28">
        <div className="container mx-auto px-6">
          <div data-reveal className="reveal grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">Open challenges</span>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Build where your curiosity leads.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">Challenge areas give teams a starting point, not a box. Combine disciplines, choose your tools, and focus on a problem worth solving.</p>
          </div>
          <div data-reveal className="reveal mt-12 grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {["Autonomous DevOps", "AI reliability engineering", "PromptOps and developer experience", "GenAI platform engineering", "Unified AI observability", "AI red teaming and chaos"].map((title, index) => (
              <div key={title} className="challenge-tile bg-card p-6">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              </div>
            ))}
          </div>
          <a href={HACKATHON_THEMES_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center text-sm font-semibold text-accent">Read the challenge guide <ArrowRight className="ml-2 h-4 w-4" /></a>
        </div>
      </section>

      {/* ORGANIZE */}
      <section id="organize" className="bg-accent py-20 text-accent-foreground md:py-28">
        <div className="container mx-auto px-6">
          <div data-reveal className="reveal grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest">For organizers</span>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">Bring builders together.</h2>
              <p className="mt-5 text-lg leading-relaxed text-accent-foreground/75">Use tested formats and practical resources to create an inclusive, useful event for your local technology community.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: CalendarDays, title: "Hackathon Days", desc: "A repeatable event format for focused build days, demos, and community collaboration." },
                { icon: BookOpen, title: "Organizer guides", desc: "Planning checklists, team formation, judging, accessibility, communications, and event operations." },
                { icon: Building2, title: "Host locally", desc: "Bring a Community Hackathon to your workplace, school, user group, or innovation hub." },
                { icon: Handshake, title: "Partner with us", desc: "Support builders with mentors, technology, venues, challenge ideas, and prizes." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="community-card organizer-card rounded-lg border border-accent-foreground/20 bg-white/40 p-6">
                  <Icon className="motion-icon h-6 w-6" />
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent-foreground/75">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONFERENCE */}
      <section id="conference" className="bg-card py-20 text-foreground md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div data-reveal className="reveal media-reveal overflow-hidden rounded-lg">
              <img src={galleryImages[8]} alt="A speaker presenting to the hackathon community" className="aspect-[4/3] h-full w-full object-cover" />
            </div>
            <div data-reveal className="reveal">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">Hackathon Conference</span>
              <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">Learn while the community builds.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">The conference runs alongside the hackathon, connecting practical talks and workshops directly to the work happening in team rooms.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: Presentation, title: "Practical sessions", desc: "Technical talks grounded in real tools and working systems." },
                  { icon: Users, title: "Mentor access", desc: "Meet practitioners who can help unblock the next step." },
                  { icon: Code2, title: "Live demos", desc: "See prototypes, approaches, and lessons from the build floor." },
                  { icon: Trophy, title: "Project showcase", desc: "Celebrate teams and discover ideas worth carrying forward." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="border-t border-border pt-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY MODEL */}
      <section className="bg-background py-16 text-foreground">
        <div className="container mx-auto px-6">
          <div data-reveal className="reveal grid gap-6 border-y border-border py-10 md:grid-cols-3">
            {[
              { icon: Rocket, title: "Start with an idea", text: "Bring a challenge from your work, studies, or community." },
              { icon: Users, title: "Build with others", text: "Find teammates and mentors who add a different perspective." },
              { icon: Sparkles, title: "Share what worked", text: "Demo the result and make the learning useful to the next team." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">06 / FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Common questions.</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Who can participate?", a: "Anyone! Developers, DevOps engineers, data scientists, designers — all skill levels welcome. You can register solo and we'll help you find a team." },
              { q: "What's the team size?", a: "Teams of 2–5 people. You can form your own team or join one at the event." },
              { q: "What tools can we use?", a: "Any cloud services, GenAI APIs, open-source tools, or frameworks. AWS credits will be provided to participating teams." },
              { q: "What are the hackathon themes?", a: "Choose from Autonomous DevOps, AI Reliability Engineering, PromptOps & AI Developer Experience, Platform Engineering for GenAI, Unified AI Observability, AI Red Teaming & Chaos Engineering, or extending last year's winning projects.", link: HACKATHON_THEMES_URL },
              { q: "Is there a cost?", a: "Check the registration page for current pricing. Early bird discounts may be available." },
            ].map(({ q, a, link }, i) => (
              <div key={i} className="faq-card p-6 rounded-xl bg-gradient-card border border-border">
                <h4 className="font-bold text-lg mb-2">{q}</h4>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                    View full themes and project ideas <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">07 / Founders</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">The minds behind the movement.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Garima Bajpai", role: "Co-Founder", tag: "DevOps Executive of the Year", desc: "Senior Leader recognized at DevOps Dozen Awards. AWS User Group Ottawa lead. Author on Technology Leadership. Bridges DevOps and emerging AI communities.", linkedin: "https://www.linkedin.com/in/garimabajpai", aws: true, photo: headshotGarima },
              { name: "John Willis", role: "Co-Founder", tag: "DevOps Handbook Co-Author", desc: "Pioneer of the DevOps movement. Co-authored The DevOps Handbook & Beyond The Phoenix Project. Exploring synergy between GenAI and Deming's principles.", linkedin: "https://www.linkedin.com/in/johnwillisatlanta/", aws: false, photo: headshotJohn },
            ].map(({ name, role, tag, desc, linkedin, aws, photo }) => (
              <a key={name} href={linkedin} target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-5 p-6 rounded-2xl bg-gradient-card border border-accent/30 hover:shadow-glow transition-smooth">
                {aws && (
                  <span className="absolute top-3 right-3 px-1.5 py-0.5 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] font-mono text-[8px] font-bold">AWS</span>
                )}
                <div className={`w-20 h-20 rounded-full border-2 overflow-hidden shrink-0 transition-smooth ${aws ? "border-[#FF9900]/40 group-hover:border-[#FF9900]" : "border-accent/40 group-hover:border-accent"}`}>
                  <img src={photo} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-accent transition-smooth">{name}</h4>
                  <p className="text-muted-foreground text-sm">{role}</p>
                  <p className="text-muted-foreground/70 text-xs mt-1 leading-relaxed">{desc}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[10px]">{tag}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">08 / Sponsors</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our sponsors & partners.</h2>
            </div>

            {/* Title Sponsor */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Title Sponsor</p>
                <div className="flex justify-center">
                  <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="p-6 hover:opacity-80 transition-smooth">
                    <img src={awsLogo} alt="AWS" className="h-12 invert brightness-0 invert" />
                  </a>
                </div>
            </div>

            {/* Gold Sponsor */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Gold Sponsor</p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <a href="https://www.redhat.com" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-7 py-4 hover:opacity-80 transition-smooth">
                    <img src={logoRedHat} alt="Red Hat" className="h-24 w-48 object-contain" />
                  </a>
                  <a href="https://www.dryrun.security/" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-5 py-4 hover:opacity-80 transition-smooth">
                    <img src={logoDryRun} alt="DryRun Security" className="h-20 w-48 object-contain" />
                  </a>
                  <a href="https://cavtera.com/" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-5 py-4 hover:opacity-80 transition-smooth">
                    <img src={logoCavtera} alt="Cavtera" className="h-20 w-48 object-contain" />
                  </a>
                </div>
            </div>

            {/* Silver Partner */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Silver Partner</p>
                <div className="flex justify-center">
                  <a href="https://cycode.com" target="_blank" rel="noopener noreferrer" className="flex h-20 w-40 items-center justify-center rounded bg-white p-3 hover:opacity-80 transition-smooth">
                    <img src={logoCycode} alt="Cycode" className="max-h-full max-w-full object-contain" />
                  </a>
                </div>
            </div>

            {/* Organizing Partners */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Organizing Partners</p>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  <a href="https://www.meetup.com/aws-ottawa/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <span className="font-bold text-sm">AWS User Group Ottawa</span>
                  </a>
                  <a href="https://crowdbytesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoCrowdbyte} alt="Crowdbyte Solutions" className="h-14 object-contain" />
                  </a>
                </div>
            </div>

            {/* Community Partners */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Community Partners</p>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  <a href="https://www.algonquincollege.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <span className="flex h-12 w-40 items-center justify-center overflow-hidden">
                      <img src={logoAlgonquin} alt="Algonquin College" className="w-64 max-w-none brightness-0 invert" />
                    </span>
                  </a>
                  <a href="https://www.wct-fct.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoWct} alt="WCT" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://www.investottawa.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoInvest} alt="Invest Ottawa" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://www.packtpub.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoPackt} alt="Packt" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://ca.linkedin.com/company/tech2step" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoTech2Step} alt="Tech 2 Step" className="h-16 object-contain" />
                  </a>
                </div>
            </div>

            {/* Previous Sponsors */}
            <div className="mb-16">
              <h3 className="text-center text-lg font-bold mb-6">Previous Sponsors</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <a href="https://www.liatrio.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoLiatrio} alt="Liatrio" className="h-8 object-contain invert" />
                </a>
                <a href="https://www.teksystems.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoTEK} alt="TEKsystems" className="h-8 object-contain invert" />
                </a>
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={awsLogo} alt="AWS" className="h-6 invert brightness-0 invert" />
                </a>
                <a href="https://kodekloud.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoKodeKloud} alt="KodeKloud" className="h-8 object-contain" />
                </a>
                <a href="https://www.oreilly.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoOreilly} alt="O'Reilly" className="h-8 object-contain invert" />
                </a>
                <a href="https://www.packtpub.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoPackt} alt="Packt" className="h-7 object-contain invert" />
                </a>
                <a href="https://crowdbytesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoCrowdbyte} alt="Crowdbyte Solutions" className="h-10 object-contain" />
                </a>
                <a href="https://www.algonquincollege.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoAlgonquin} alt="Algonquin College" className="h-12 object-contain brightness-[3]" />
                </a>
                <a href="https://newfoundrecruiting.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoNewFound} alt="NewFound Recruiting" className="h-8 object-contain" />
                </a>
                <a href="https://opaque.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoOpaque} alt="Opaque" className="h-8 object-contain invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <GalleryCarousel />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-primary py-20 text-white md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Code2 className="mx-auto mb-6 h-12 w-12 text-accent" />
            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">There is a place for you in the build.</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/75 md:text-xl">
              Participate in Ottawa, bring a challenge, mentor a team, or organize the next Community Hackathon where you live.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="h-12 rounded border-0 bg-accent px-7 text-accent-foreground hover:bg-accent/90">
                <a href="#participate">
                  Participate <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded border-white/50 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white">
                <a href="#organize">Organize</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="font-mono">
            <span className="text-gradient font-bold">Community Hackathon</span> · Ottawa
          </div>
          <div>Next gathering: {NEXT_EVENT_DATE} · Ottawa, Canada</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
