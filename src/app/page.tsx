"use client";

import { type SVGProps, useEffect } from "react";
import {
  Crown,
  BadgeCheck,
  Briefcase,
  Plane,
  MessageCircle,
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Film,
  MapPin,
  Mountain,
  PawPrint,
  Route,
  Sparkles,
  Star,
  Users,
  Wine,
} from "lucide-react";

import Link from "next/link";

function Instagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function Facebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Youtube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
    </svg>
  );
}

const marketAdvantages = [
  "Huge weekend traveller base from Mumbai & Pune",
  "Strong road-trip and premium experience culture",
  "Coastal, hill station, vineyard and pilgrimage circuits",
  "Film, influencer, wedding shoot and VIP movement demand",
  "Corporate offsites, professionals and leadership retreats",
  "Solo travellers, trekkers, seniors and pet-friendly travel",
];

const markets = [
  {
    city: "Mumbai & Pune",
    label: "Biggest revenue market",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Luxury families, weekend groups and Gen Z travellers",
      "Celebrities, influencers, film and ad production teams",
      "Corporate offsites, weddings, senior and pet travel",
      "Alibaug, Lonavala, Mahabaleshwar, Nashik, Goa and Konkan routes",
    ],
  },
  {
    city: "Pune",
    label: "Fastest growing market",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Young adventure travellers and weekend tourism culture",
      "IT, startup and professional crowd with highway connectivity",
      "Pawna Lake, Mulshi, Nashik, Satara, Kolad and Goa circuits",
    ],
  },
  {
    city: "Nashik",
    label: "Premium niche",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Wine tourism, luxury stays and couples retreats",
      "Glamping-led experiences with higher-ticket positioning",
      "Smaller market, but strong premium-paying potential",
    ],
  },
  {
    city: "Konkan Belt",
    label: "Future coastal opportunity",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    points: [
      "Alibaug, Tarkarli and Sindhudurg beach tourism",
      "Coastal road trips and second-home travel demand",
      "Improving connectivity with rising luxury leisure activity",
    ],
  },
];

const eliteSegments = [
  {
    icon: Film,
    title: "Film & Ad Shoots",
    text: "Vanity vans, makeup rooms, celebrity lounges, political rallies, VIP movement and office-on-wheels sessions around Mumbai and Pune.",
  },
  {
    icon: Star,
    title: "Luxury Weekends",
    text: "Curated Mumbai to Alibaug style packages with caravan, driver, campsite, BBQ, activities, mini theatre and tenting.",
  },
  {
    icon: Building2,
    title: "Corporate Offsites",
    text: "Leadership retreats, IT teams, startup founders, trekking groups, community travel and mobile hospitality experiences.",
  },
  {
    icon: Camera,
    title: "Influencer Tourism",
    text: "Instagram-friendly caravans, creator collaborations, cinematic routes and customer content that turns every trip into lead generation.",
  },
];

const positioning = [
  "Luxury experiential tourism",
  "Corporate mobility hospitality",
  "Film, events and agencies",
  "Curated premium road trips",
  "Pet-friendly travel",
  "Senior citizen comfort travel",
  "Youth and celebration groups",
  "Office and house on wheels",
];

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".funnel-reveal");
    const progressBar = document.querySelector<HTMLElement>("#funnel-progress");
    const funnel = document.querySelector<HTMLElement>("#caravan-funnel");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const updateProgress = () => {
      if (!progressBar || !funnel) return;
      const rect = funnel.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const travelled = Math.min(Math.max(-rect.top, 0), total);
      progressBar.style.transform = `scaleX(${total > 0 ? travelled / total : 0})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black px-8 pt-36 pb-6">

      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <div className="relative flex items-center justify-between rounded-[15px] border border-[#2A2A2A] bg-gradient-to-r from-[#151515] to-[#101010] px-8 py-3 shadow-[0_0_40px_rgba(255,215,0,0.08)]">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/cars_logo.png"
              alt="Logo"
              className="w-12 h-auto object-contain"
            />
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-14">

            <div className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition duration-300 cursor-pointer">
              <Crown className="w-5 h-5 mb-2 text-yellow-400" />
              <span className="font-semibold text-sm">
                Luxury Rental
              </span>
            </div>

            <div className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition duration-300 cursor-pointer">
              <BadgeCheck className="w-5 h-5 mb-2 text-yellow-400" />
              <span className="font-semibold text-sm">
                Value Rental
              </span>
            </div>

            <div className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition duration-300 cursor-pointer">
              <Briefcase className="w-5 h-5 mb-2 text-yellow-400" />
              <span className="font-semibold text-sm">
                Corporate Rental
              </span>
            </div>

            <div className="flex flex-col items-center text-gray-300 hover:text-yellow-400 transition duration-300 cursor-pointer">
              <Plane className="w-5 h-5 mb-2 text-yellow-400" />
              <span className="font-semibold text-sm">
                Airport Rental
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="bg-yellow-400 hover:bg-yellow-300 transition duration-300 text-black text-sm font-bold tracking-[4px] px-5 py-3 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.45)]">
            BOOK NOW
          </button>
        </div>
      </nav>
      {/* Main Content */}
      <section
        id="caravan-funnel"
        className="relative mx-auto mt-10 max-w-7xl overflow-hidden rounded-[40px] border border-yellow-400/10 bg-[#070707] text-white shadow-[0_0_80px_rgba(212,175,55,0.08)]"
      >
        <style>{`
          html { scroll-behavior: smooth; }
          .funnel-reveal {
            opacity: 0;
            transform: translateY(34px) scale(0.98);
            transition: opacity 800ms ease, transform 800ms ease;
          }
          .funnel-reveal.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          .gold-text {
            background: linear-gradient(90deg, #D4AF37, #FFF3A4, #FFD700, #B8860B);
            background-size: 220% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: goldShimmer 5s linear infinite;
          }
          .gold-dust {
            background-image:
              radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.25) 0 1px, transparent 2px),
              radial-gradient(circle at 80% 30%, rgba(212, 175, 55, 0.18) 0 1px, transparent 2px),
              radial-gradient(circle at 45% 70%, rgba(255, 243, 164, 0.16) 0 1px, transparent 2px);
            background-size: 120px 120px, 180px 180px, 240px 240px;
            animation: dustFloat 18s linear infinite;
          }
          @keyframes goldShimmer {
            to { background-position: 220% center; }
          }
          @keyframes dustFloat {
            to { background-position: 120px 220px, -180px 120px, 240px -180px; }
          }
        `}</style>

        <div className="sticky top-0 z-40 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#FFF3A4]" id="funnel-progress"></div>

        <div className="absolute inset-0 gold-dust opacity-60"></div>

        <div
          className="relative min-h-[720px] bg-fixed bg-center bg-cover px-6 py-28 sm:px-10 lg:px-16 lg:py-36"
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(0,0,0,0.92), rgba(0,0,0,0.58), rgba(0,0,0,0.88)), url('https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1800&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,215,0,0.22),transparent_32%),radial-gradient(circle_at_80%_58%,rgba(212,175,55,0.14),transparent_34%)]"></div>
          <div className="relative z-10 max-w-4xl funnel-reveal">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-400/30 bg-black/35 px-5 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span className="text-xs font-semibold uppercase tracking-[4px] text-yellow-200">
                Caravan Pitch for Pune & Mumbai
              </span>
            </div>

            <h1 className="gold-text max-w-4xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Maharashtra&apos;s next premium travel category
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200 sm:text-xl">
              A luxury caravan and campervan rental funnel built for high-ticket, low-volume revenue across premium experiential travel, corporate outings, film shoots, political movement, ad agencies, luxury road trips and weekend tourism from Mumbai and Pune.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#markets"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 text-sm font-bold uppercase tracking-[3px] text-black shadow-[0_0_36px_rgba(255,215,0,0.35)] transition duration-300 hover:bg-yellow-300 hover:shadow-[0_0_52px_rgba(255,215,0,0.55)]"
              >
                View Markets
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#positioning"
                className="inline-flex items-center justify-center rounded-2xl border border-yellow-400/35 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[3px] text-yellow-100 backdrop-blur-xl transition duration-300 hover:border-yellow-300 hover:bg-yellow-400/10 hover:text-yellow-300"
              >
                Positioning
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-gradient-to-b from-[#080808] via-[#111] to-black px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["5-7 Years", "strong niche opportunity"],
              ["Premium TG", "high-ticket, low-volume model"],
              ["Phase 2", "Maharashtra expansion focus"],
            ].map(([number, text]) => (
              <div
                key={number}
                className="funnel-reveal rounded-[22px] border border-yellow-400/15 bg-white/[0.04] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-yellow-300/60 hover:shadow-[0_0_34px_rgba(212,175,55,0.20)]"
              >
                <p className="gold-text text-4xl font-bold">{number}</p>
                <p className="mt-3 text-sm uppercase tracking-[3px] text-gray-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="funnel-reveal mt-20 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-yellow-300">
                Why Maharashtra
              </p>
              <h2 className="gold-text text-4xl font-bold leading-tight sm:text-5xl">
                Built for premium roads, rich circuits and affluent demand.
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-300">
                Maharashtra has the audience, destinations and commercial use-cases to make caravan rental feel aspirational instead of ordinary. The strongest opportunity is not mass rental; it is curated hospitality on wheels.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {marketAdvantages.map((item) => (
                <div
                  key={item}
                  className="group rounded-[20px] border border-white/10 bg-black/35 p-5 backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-yellow-400/60 hover:bg-yellow-400/10"
                >
                  <CheckCircle2 className="mb-4 h-5 w-5 text-yellow-300" />
                  <p className="text-sm leading-6 text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="markets"
          className="relative z-10 bg-fixed bg-center bg-cover px-6 py-20 sm:px-10 lg:px-16"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.86), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1800&auto=format&fit=crop')",
          }}
        >
          <div className="funnel-reveal mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-yellow-300">
              Biggest Rental Markets
            </p>
            <h2 className="gold-text text-4xl font-bold leading-tight sm:text-5xl">
              Four Maharashtra zones with distinct premium demand.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {markets.map((market) => (
              <article
                key={market.city}
                className="funnel-reveal group overflow-hidden rounded-[26px] border border-yellow-400/15 bg-white/[0.05] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-yellow-300/70 hover:shadow-[0_0_45px_rgba(212,175,55,0.22)]"
              >
                <div
                  className="h-64 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.24), rgba(0,0,0,0.82)), url('${market.image}')`,
                  }}
                ></div>
                <div className="p-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white">{market.city}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[3px] text-yellow-300">
                        {market.label}
                      </p>
                    </div>
                    <MapPin className="h-7 w-7 text-yellow-300" />
                  </div>
                  <div className="space-y-3">
                    {market.points.map((point) => (
                      <p key={point} className="flex gap-3 text-sm leading-6 text-gray-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-300"></span>
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative z-10 bg-[#090909] px-6 py-20 sm:px-10 lg:px-16">
          <div className="funnel-reveal mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-yellow-300">
              Elite Premium TG
            </p>
            <h2 className="gold-text text-4xl font-bold leading-tight sm:text-5xl">
              Revenue streams beyond regular rentals.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {eliteSegments.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="funnel-reveal group rounded-[22px] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.025] p-6 backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-yellow-300/70 hover:shadow-[0_0_40px_rgba(255,215,0,0.16)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-300 transition duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative z-10 bg-fixed bg-center bg-cover px-6 py-20 sm:px-10 lg:px-16"
          style={{
            backgroundImage:
              "linear-gradient(100deg, rgba(0,0,0,0.92), rgba(0,0,0,0.62)), url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1800&auto=format&fit=crop')",
          }}
        >
          <div className="funnel-reveal grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-yellow-300">
                Promotional Plan
              </p>
              <h2 className="gold-text text-4xl font-bold leading-tight sm:text-5xl">
                Make every journey perform like a campaign.
              </h2>
              <p className="mt-6 text-base leading-8 text-gray-300">
                Focus on strong digital marketing, hotel and campsite collaborations, daily reels, customer testimonials, driver bites and cinematic real-life moments across unexplored Maharashtra.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Route, "SEO keywords", "Caravan rentals, vanity van rental, house on wheels, office on wheels and celebrity vanity."],
                [Camera, "Short-form content", "Instagram, Facebook and YouTube reels featuring locations, flash offers and client stories."],
                [Users, "Partnerships", "Hotels, government resorts, camping sites, agencies and other caravan renters."],
                [Mountain, "Scenic proof", "Real camping moments, routes, comfort, campsite energy and unexplored Bharat."],
              ].map(([Icon, title, text]) => {
                const LucideIcon = Icon as typeof Route;
                return (
                  <div
                    key={title as string}
                    className="rounded-[20px] border border-yellow-400/15 bg-black/45 p-5 backdrop-blur-xl transition duration-300 hover:scale-[1.02] hover:border-yellow-300/60 hover:bg-yellow-400/10"
                  >
                    <LucideIcon className="mb-4 h-6 w-6 text-yellow-300" />
                    <h3 className="text-lg font-bold text-white">{title as string}</h3>
                    <p className="mt-3 text-sm leading-6 text-gray-300">{text as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div id="positioning" className="relative z-10 bg-black px-6 py-20 sm:px-10 lg:px-16">
          <div className="funnel-reveal overflow-hidden rounded-[30px] border border-yellow-400/20 bg-gradient-to-br from-[#17120A] via-[#080808] to-black p-8 shadow-[0_0_60px_rgba(212,175,55,0.12)] sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-yellow-300">
                  Best Positioning
                </p>
                <h2 className="gold-text text-4xl font-bold leading-tight sm:text-5xl">
                  Luxury mobility, hospitality and content in one asset.
                </h2>
                <p className="mt-6 text-base leading-8 text-gray-300">
                  Position the service as a premium curated experience for discerning customers, not a standard transport rental. That gives Elite Prime Cars room to command stronger pricing and create differentiated demand.
                </p>
              </div>

              <div className="flex flex-wrap content-start gap-3">
                {positioning.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-3 text-sm font-semibold text-yellow-100 transition duration-300 hover:scale-105 hover:border-yellow-300 hover:bg-yellow-400 hover:text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [Wine, "Vineyard & glamping"],
                [PawPrint, "Pet-friendly escapes"],
                [Users, "Senior, youth & community travel"],
              ].map(([Icon, label]) => {
                const LucideIcon = Icon as typeof Wine;
                return (
                  <div
                    key={label as string}
                    className="rounded-[20px] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-yellow-300/60 hover:shadow-[0_0_28px_rgba(212,175,55,0.16)]"
                  >
                    <LucideIcon className="mb-4 h-6 w-6 text-yellow-300" />
                    <p className="text-sm uppercase tracking-[2px] text-gray-200">{label as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
<footer className="bg-black border-t border-white/5 mt-24">

  <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">

    {/* Left Section */}
    <div>

      {/* Logo + Brand */}
      <div className="flex items-center gap-3">

        <img
          src="/cars_logo.png"
          alt="Prime Cars"
          className="w-14 h-auto"
        />

        <div>
          <h2 className="text-white text-[28px] font-bold leading-none">
            PRIME CARS
          </h2>

          <p className="text-white text-[18px] mt-1">
            Travel Like a Star
          </p>
        </div>

      </div>

      {/* Description */}
      <p className="text-gray-400 text-[15px] leading-8 mt-8 max-w-sm">
        Pune&apos;s most trusted luxury car rental service.
        Chauffeur-driven elegance for every occasion.
      </p>

      {/* Contact */}
      <div className="mt-10 space-y-5 text-white text-[15px]">

        <div className="flex items-center gap-3">
          <span>☎</span>
          <span>+91 9920053379</span>
        </div>

        <div className="flex items-center gap-3">
          <span>✉</span>
          <span>book@eliteprimecars.com</span>
        </div>

        <div className="flex items-center gap-3">
          <span>📍</span>
          <span>Pune, Maharashtra, India</span>
        </div>

      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-3 mt-10">

        <div className="w-11 h-11 border border-yellow-400/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
          <Instagram className="w-4 h-4" />
        </div>

        <div className="w-11 h-11 border border-yellow-400/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
          <Facebook className="w-4 h-4" />
        </div>

        <div className="w-11 h-11 border border-yellow-400/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
          <MessageCircle className="w-4 h-4" />
        </div>

        <div className="w-11 h-11 border border-yellow-400/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
          <Youtube className="w-4 h-4" />
        </div>

      </div>

    </div>

    {/* Middle Section */}
    <div>

      <h3 className="text-yellow-400 text-[22px] font-bold tracking-[2px]">
        OCCASIONS
      </h3>

      <div className="w-10 h-[2px] bg-yellow-400 mt-4 mb-8"></div>

      <div className="space-y-6 text-gray-400 text-[16px]">

        <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          Wedding Car Rental
        </p>

        <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          Corporate Car Rental
        </p>

        <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          Airport Transfer Pune
        </p>

        <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          Anniversary Car Rental
        </p>

        <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          Outstation Luxury Trips
        </p>

      </div>

    </div>

    {/* Right Section */}
    <div>

      <h3 className="text-yellow-400 text-[22px] font-bold tracking-[2px]">
        OUR FLEET
      </h3>

      <div className="w-10 h-[2px] bg-yellow-400 mt-4 mb-8"></div>

      <div className="space-y-6 text-gray-400 text-[16px]">

        <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          Mercedes E-Class Pune
        </p>

        <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          BMW 7 Series Pune
        </p>

        <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
          Rolls Royce Rental Pune
        </p>

      </div>

    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/5">

    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

      <p className="text-gray-500 text-[14px]">
        © 2026 Elite Prime Cars. All rights reserved.
      </p>

      <div className="flex items-center gap-4 text-gray-500 text-[14px]">

  <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
    Privacy Policy
  </p>

  <p className="hover:text-yellow-400 transition duration-300 cursor-pointer">
    Terms of Service
  </p>

  {/* Fabulous Media */}
  <Link
    href="https://fabulousmedia.in/"
    target="_blank"
  >
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAq1BMVEVHcEwAAADxmjLdVS8AAAAAAACgoKDi3t3tjzTymjHub0bdPC+uKyKfJx+Li4v////q6urXmWXsVi/qNi7MNSu5LyafKCBjY2P4///x8fLqPjK8MSeeJh1ISEj5+vofHx/Rzs7qVEy9urrujIfrLBt6enrWq6m9Kh73x8XcGgC9IRO2dXOnU0+dDwQ4ODitY2CyQDqogYC4EAC4lpScAAC4GAQ0OjsAAAD///8RPPMVAAAAOXRSTlMAYGBgQf//////////UP//////////////////////////////////////////////////UP9QUGHElwbPAAABN0lEQVR4AWyRVRLDMAwFy9zKYU6Zme9/s9Z5ozTqZH93TXKlUpXUBPVKpdEUtNqdbk6vPxj+BSMiZcB2TMt23L/AIyI/ML62F1r9KHJiGSQpaXzDtMLQdqJoIHcYB5QRWCF85MqgDZ9+dT/S3pHBhMDU0ss1AxHMCPSsMIKP4mLQIjBf9LXGBoVgSWC1sNmv40LgEdhsI/a7/eGYB6cUvr1lHa3Pfno+IsgHoHY/fwmI/OsRQZsvcGPvOIo094cOJsTMng6CJw/tpYOEciaDdeZ5TfLmOzDty7e4rQh4TQS4BVCH3fNOYNREwIMG6XnPN2oiAK1fkVLGpMkBD1uimjLgcTNpUwb5wNmPRcAoYlR5UBhqkJQF4rleaYDnglFZIJ7bKgvE383KAvF3k9dnoOyPCSzggAEAuL07sDHFZu4AAAAASUVORK5CYII="
      alt="Fabulous Media"
      className="w-4 h-4 opacity-70 hover:opacity-100 transition duration-300"
    />
  </Link>

  {/* Go Commercially */}
  <Link
    href="https://gocommercially.com/"
    target="_blank"
  >
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAABJ0lEQVR4AZ3TEazDYBiF4ddlNJnNYTIv1DO8WpuUqks9KY2Gk2KhXKpXStVKrZ5C5b3QLLkX/i3ZsS955CTnww/5EqzvwDroOIWBCdHkGgY+gcIw0Aw4zmGgJ4AmDJwBKMLAEq6dhoGVGgbL1Lf1I0/OZBuoov1Pp1pGh3R2HsdhiACgUsyJiwOdZsQ32Pr1bJlkIdaVsyOJjlz/VIWztFSqq09a9ciryJaOmsaurGoLBvXC2jd1Vd2TNLvd8ryjoTbfsfNOr8b4PwzkKkcbSpW9qsbRo9+AB9p1ZKfQLxmlqhMAl/sizju2xiNA9hoFbBfq0PZu7dtZp7bMUwBIwqNdxq5+FIbA81Trpz2kSxhEAK1BUADnxSAoP636AoPvwNp9+7yB/AKHCUYfTsNJ9QAAAABJRU5ErkJggg=="
      alt="Go Commercially"
      className="w-4 h-4 opacity-70 hover:opacity-100 transition duration-300"
    />
  </Link>

</div>

    </div>

  </div>

</footer>
    </main>
  );
}
