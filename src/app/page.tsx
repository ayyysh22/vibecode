"use client";
import React from "react";

const accentPurple = "#8B5CF6";
const accentPink = "#EC4899";
const bgDark = "#0F0F0F";
const green = "#22C55E";

const aiApps = [
  {
    title: "AI Podcast Summarizer",
    desc: "Upload any podcast and get concise, actionable summaries in seconds.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill={accentPurple} opacity="0.15" />
        <path d="M20 12v16M12 20h16" stroke={accentPurple} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Code Reviewer",
    desc: "Paste your code and get instant, smart feedback and suggestions.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill={accentPink} opacity="0.15" />
        <path d="M15 25l5-10 5 10" stroke={accentPink} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Moodboard Generator",
    desc: "Describe your vibe and get a stunning, shareable moodboard.",
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill={accentPurple} opacity="0.15" />
        <rect x="13" y="13" width="14" height="14" rx="3" stroke={accentPurple} strokeWidth="2.5" />
        <circle cx="20" cy="20" r="3" fill={accentPink} />
      </svg>
    ),
  },
];

const timeline = [
  {
    day: "Saturday Morning",
    color: accentPurple,
    title: "Ideate & Plan",
    desc: "Brainstorm, pick your AI app, and sketch your MVP.",
  },
  {
    day: "Saturday Afternoon",
    color: accentPink,
    title: "Build Core Features",
    desc: "Ship your main functionality. Focus on the magic moment.",
  },
  {
    day: "Saturday Night",
    color: green,
    title: "Polish & Integrate",
    desc: "Add polish, connect APIs, and make it delightful.",
  },
  {
    day: "Sunday",
    color: accentPurple,
    title: "Launch & Share",
    desc: "Deploy, share with the world, and celebrate your win.",
  },
];

const testimonials = [
  {
    name: "Alex Kim",
    text: "VibeCode made building my first AI app feel effortless. The weekend format kept me focused and creative.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    text: "I shipped a project I’m actually proud of! The method is fun, fast, and super motivating.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jordan Lee",
    text: "The community vibes and clear steps helped me go from idea to launch in just two days.",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

function VibeCodeLanding() {
  return (
    <main
      style={{
        background: bgDark,
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        letterSpacing: "-0.01em",
      }}
      className="flex flex-col items-center"
    >
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center pt-24 pb-20 px-4 text-center relative overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 400,
            background: `radial-gradient(circle at 50% 30%, ${accentPurple} 0%, transparent 70%)`,
            opacity: 0.25,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-6 z-10"
          style={{
            background: `linear-gradient(90deg, ${accentPurple}, ${accentPink})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Vibe with AI. <br className="hidden md:block" />
          Ship in a Weekend.
        </h1>
        <p className="text-lg md:text-2xl mb-10 z-10 text-gray-300 max-w-xl mx-auto">
          Build and launch your own AI-powered app in just 48 hours. No experience required. All vibes welcome.
        </p>
        <a
          href="#get-started"
          className="z-10 inline-block px-8 py-4 rounded-full font-semibold text-lg"
          style={{
            background: green,
            color: "#0F0F0F",
            boxShadow: `0 4px 24px 0 ${green}55`,
            transition: "transform 0.1s",
          }}
        >
          Get Started
        </a>
      </section>

      {/* What You'll Build */}
      <section className="w-full max-w-5xl px-4 py-16">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{
            color: accentPurple,
            letterSpacing: "-0.02em",
          }}
        >
          What You'll Build
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {aiApps.map((app, i) => (
            <div
              key={app.title}
              className="flex-1 bg-[#18181B] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg"
              style={{
                border: `1.5px solid ${i % 2 === 0 ? accentPurple : accentPink}`,
                minWidth: 260,
              }}
            >
              <div className="mb-4">{app.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
              <p className="text-gray-400">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VibeCode Method Timeline */}
      <section className="w-full max-w-4xl px-4 py-16">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{
            color: accentPink,
            letterSpacing: "-0.02em",
          }}
        >
          The VibeCode Method
        </h2>
        <ol className="relative border-l-2 border-gray-700 ml-4">
          {timeline.map((step, idx) => (
            <li key={step.day} className="mb-12 ml-6 relative">
              <span
                className="absolute -left-6 flex items-center justify-center w-8 h-8 rounded-full"
                style={{
                  background: step.color,
                  boxShadow: `0 0 0 4px ${bgDark}`,
                  top: 0,
                }}
              >
                <span className="text-lg font-bold text-[#0F0F0F]">{idx + 1}</span>
              </span>
              <div>
                <span className="uppercase text-xs font-bold tracking-widest" style={{ color: step.color }}>
                  {step.day}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-1">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="w-full max-w-5xl px-4 py-16">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{
            color: accentPurple,
            letterSpacing: "-0.02em",
          }}
        >
          What Makers Say
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex-1 bg-[#18181B] rounded-2xl p-8 flex flex-col items-center text-center shadow-lg"
              style={{
                border: `1.5px solid ${i % 2 === 0 ? accentPurple : accentPink}`,
                minWidth: 260,
              }}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-4"
                style={{
                  borderColor: i % 2 === 0 ? accentPurple : accentPink,
                  objectFit: "cover",
                }}
              />
              <p className="text-gray-300 mb-4" style={{ fontStyle: "italic" }}>
                “{t.text}”
              </p>
              <span className="font-semibold" style={{ color: i % 2 === 0 ? accentPurple : accentPink }}>
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="get-started"
        className="w-full max-w-3xl px-4 py-20 flex flex-col items-center text-center relative"
      >
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            width: 400,
            height: 200,
            background: `radial-gradient(circle at 50% 70%, ${accentPink} 0%, transparent 70%)`,
            opacity: 0.18,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-6 z-10"
          style={{
            background: `linear-gradient(90deg, ${accentPink}, ${accentPurple})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          Ready to Vibe with AI?
        </h2>
        <p className="text-lg md:text-xl mb-8 z-10 text-gray-300 max-w-xl mx-auto">
          Join the next VibeCode weekend and build something amazing. <br />
          Your AI journey starts now.
        </p>
        <a
          href="https://forms.gle/your-vibecode-signup"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 inline-block px-10 py-4 rounded-full font-semibold text-lg"
          style={{
            background: green,
            color: "#0F0F0F",
            boxShadow: `0 4px 24px 0 ${green}55`,
            transition: "transform 0.1s",
          }}
        >
          Sign Up for Updates
        </a>
      </section>
      <footer className="w-full text-center py-8 text-gray-600 text-sm">
        © {new Date().getFullYear()} VibeCode. All vibes reserved.
      </footer>
    </main>
  );
}

export default VibeCodeLanding;
