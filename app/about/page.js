import ZoomableImage from "@/components/ZoomableImage";
import PageHeader from "@/components/PageHeader";
import LeadersSection from "@/components/LeadersSection";
// import TimelineSection from "@/components/TimelineSection";
import CtaBanner from "@/components/CtaBanner";
import { CheckCircle2 } from "lucide-react";
import GuidanceSection from "@/components/Guidemce";

export const metadata = {
  title: "About Us — Bharatiya Avijit Aawaz Party",
};

const coreValues = [
  "Honesty and accountability in politics.",
  "Equality and dignity in society.",
  "Employment and self-reliance for the youth.",
  "Safety and protection for women and children.",
  "Respect and welfare for farmers and senior citizens.",
  "A drug-free and crime-free society.",
  "Impartial justice and a transparent system.",
  "Development of capable and ethical leadership.",
  "Protection of all living beings on Earth.",
  "Protection and conservation of trees and plants.",
];

const visionPoints = [
  "Where no child remains hungry or malnourished, and every poor mother can provide nutritious food to her child.",
  "Where poor families get relief on cooking gas.",
  "Where public trust in the electoral process is strengthened.",
  "Where youth get employment in security services and other sectors.",
  "Where every youth becomes skilled and self-reliant.",
  "Where faith is respected, and no exploitation happens in the name of superstition.",
  "Where there is no fraud in the name of overseas jobs.",
  "Where everyone feels safe, safety for all is the top priority, and children and women feel the most secure. Where both rich and poor get equal justice.",
  "Where sons can be saved from drugs, crime, and bad company. Drug sales must stop so children don't fall victim to bad elements.",
  "Where public representatives are accountable to the people.",
  "Where every section of society has a voice in Parliament.",
  "Where mental health is taken as seriously as physical health.",
  "Where farmers get fair prices and respect.",
  "Where senior citizens get security and support.",
  "Where corruption and nepotism are eradicated.",
  "Where caste discrimination and social inequality are eliminated.",
  "Where every living being's life is valued, meaning the protection of all creatures on Earth.",
  "Where everyone respects trees and plants, ensuring their protection.",
];

const missionPoints = [
  {
    title: "Public Dialogue (Jansamvad)",
    desc: "Listening to the problems of the country's citizens and understanding their real situations.",
  },
  {
    title: "Policy Making (Neeti Nirmaan)",
    desc: "Preparing practical policies with suggestions from experts, social workers, youth, women, farmers, and affected citizens.",
  },
  {
    title: "Capable Leadership (Yogya Netritva)",
    desc: "Providing leadership opportunities to honest, disciplined, educated, and sensitive individuals.",
  },
  {
    title: "Organization Building (Sangathan Nirmaan)",
    desc: "Preparing a responsible organization from the national, state, district, assembly, ward, and booth levels.",
  },
  {
    title: "Accountability (Javabdehi)",
    desc: "Keeping the public informed about actions, decisions, and results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Know Us"
        title="Bharatiya Avijit Aawaz Party"
        crumb="About Us"
      />

      {/* ================= ABOUT PARTY SECTION ================= */}
      <section id="party" className="scroll-mt-24 bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* ================= ROW 1 (WHY BAAP) ================= */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* IMAGE 1 */}
            <div className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-8 border-white shadow-card-hover">
                <ZoomableImage
                  src="https://picsum.photos/seed/about-party-1/1000/750"
                  alt="Party workers at a village meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CONTENT 1 */}
            <div>
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                <span className="border-b-4 border-banyan pb-2">
                  Why Bharatiya Avijit Aawaz Party?
                </span>
              </h2>

              <div className="mb-6" />

              <p className="text-ink-soft leading-relaxed">
                India is a great democratic nation. Our country has made progress in science, technology, education, economy, and various other fields. However, even today, the common citizen faces basic challenges like <b>safety, health, employment, education, justice, and social dignity.</b>
              </p>

              <p className="mt-4 text-ink-soft leading-relaxed">
                We believe that until these problems are solved on a priority basis, the journey of development will remain incomplete.
              </p>

              <p className="mt-4 text-ink-soft leading-relaxed">
                With this thought, the <b>Bharatiya Avijit Aawaz Party (BAAP)</b> presents its thoughts and proposals to the country through 18 important internal chapters.
              </p>

              <p className="mt-4 text-ink-soft leading-relaxed">
                Our effort is to elevate politics above personal ambition and connect it with <b>public service, merit, accountability, and nation-building.</b>
              </p>

              <div className="mt-6 p-5 bg-gray-50 rounded-lg border-l-4 border-saffron">
                <p className="text-ink font-medium leading-relaxed italic">
                  "Our path will be the path of the Constitution. The public will be our strength, and our foundation will be education, organization, law, and truth."
                </p>
              </div>
            </div>
          </div>

          {/* ================= ROW 2 (OUR CORE VALUES) ================= */}
          <div className="mt-24 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* CONTENT 2 */}
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                <span className="border-b-4 border-banyan pb-2">
                  Our Core Values
                </span>
              </h2>

              <div className="mb-8" />

              <p className="text-ink-soft leading-relaxed mb-6">
                We stand against injustice, exploitation, corruption, crime, drugs, caste discrimination, and social inequality. Here are our core thoughts and priorities:
              </p>

              <ul className="mt-6 space-y-4">
                {coreValues.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-banyan"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE 2 */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-8 border-white shadow-card-hover">
                <ZoomableImage
                  src="https://picsum.photos/seed/about-party-2/1000/750"
                  alt="Community participation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* ================= ROW 3 (OUR VISION) ================= */}
          <div className="mt-24 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20">
            {/* IMAGE 3 (Left Side) */}
            <div className="sticky top-24">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-8 border-white shadow-card-hover">
                <ZoomableImage
                  src="https://picsum.photos/seed/about-party-3/1000/750"
                  alt="Vision for a better India"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* CONTENT 3 (Right Side) */}
            <div>
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                <span className="border-b-4 border-banyan pb-2">
                  Our Vision
                </span>
              </h2>

              <div className="mb-6" />

              <p className="text-lg font-bold text-ink mb-4">
                What kind of India is our dream?
              </p>

              <p className="text-ink-soft leading-relaxed mb-6">
                We want an India:
              </p>

              {/* 18 Points Grid */}
              <ul className="space-y-4 text-sm leading-relaxed text-ink-soft">
                {visionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-banyan/10 text-xs font-bold text-banyan">
                      {index + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Highlighted Conclusion */}
              <div className="mt-8 p-6 bg-saffron/10 rounded-xl border-l-4 border-saffron">
                <p className="text-ink font-bold text-base leading-relaxed">
                  Our goal is not just a developed India, but a <span className="text-saffron">Secure, Prosperous, Just, and Dignified India.</span>
                </p>
              </div>
            </div>
          </div>

          {/* ================= ROW 4 (OUR MISSION) ================= */}
          <div className="mt-24 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            {/* CONTENT 4 (Left Side) */}
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                <span className="border-b-4 border-banyan pb-2">
                  Our Mission
                </span>
              </h2>

              <div className="mb-6" />

              <p className="text-ink-soft leading-relaxed mb-6">
                Our mission is that the country's problems should not just be made into election issues, but actual work should be done for their permanent solutions.
                <br /><br />
                To achieve this, we want to move forward in five major ways:
              </p>

              <div className="space-y-6 mt-8">
                {missionPoints.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-banyan text-white font-bold text-sm shadow-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-base">{item.title}</h4>
                      <p className="text-sm text-ink-soft leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE 4 (Right Side) */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-8 border-white shadow-card-hover">
                <ZoomableImage
                  src="https://picsum.photos/seed/about-party-4/1000/750"
                  alt="Mission and Organization Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= OTHER SECTIONS ================= */}
      <LeadersSection />
      {/* <TimelineSection /> */}
      
      <GuidanceSection/>
      <CtaBanner />

    </>
  );
}