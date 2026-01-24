import Link from "next/link";

const steps = [
  {
    title: "You express interest",
    desc: "Let us know a little about yourself and what you’re looking for in a club. We’ll find the local clubs in your area and let them know you’re interested.",
  },
  {
    title: "Rotary matches you with a club",
    desc: "Based on your preferences and interests, Rotary leaders in your community will match you with the local club that fits you best.",
  },
  {
    title: "A local club contacts you",
    desc: "A Rotary or Rotaract club member will contact you by email or phone to discuss your interest. You’ll be invited to attend a meeting, social event, or service project.",
  },
  {
    title: "The club invites you to join",
    desc: "After spending time together and determining a good fit, you’ll be invited to join. Each club welcomes new members in its own way.",
  },
  {
    title: "You’re a member!",
    desc: "Enjoy getting involved in your new club as a Rotary member. Join a committee, lead a service project, organize events, and contribute to your community.",
  },
];

export default function MembershipPage() {
  return (
    <div className="bg-white max-w-[1400px] mx-auto rounded-[24px] shadow-md overflow-hidden">
      {/* HERO */}
      <div className="relative h-[280px] bg-gradient-to-b from-[#0067c8] to-[#00a2e0] rounded-b-3xl">
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-end pb-10">
          <h1 className="text-white text-3xl md:text-4xl font-bold border-l-4 border-white pl-5">
            Membership
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-[900px] mx-auto px-6 py-16">
        {/* Intro */}
        <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-3">
          How our membership works
        </h2>

        <p className="text-lg text-gray-700 mb-14">
          We can connect you with a club that’s right for you and make it easy
          to get involved and on your way to membership immediately.
        </p>

        <div className="space-y-14">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="relative flex gap-6 items-start">
                <div className="relative flex flex-col items-center">
                  <span className="w-6 h-6 rounded-full border-2 border-[#00a2e0] bg-white z-10" />

                  {!isLast && (
                    <span
                      className="
                absolute
                top-6
                h-[calc(100%+95px)]
                border-l-2
                border-dotted
                border-[#00a2e0]
              "
                    />
                  )}
                </div>
                <div className="pt-0.5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-6 mt-16">
          <Link href="/membership/apply">
            <span className="inline-flex justify-center rounded-full bg-[#c8102e] px-10 py-4 text-white font-semibold hover:bg-[#a50d26] transition">
              GET STARTED
            </span>
          </Link>

          <Link href="/about">
            <span className="inline-flex justify-center rounded-full bg-[#c8102e] px-10 py-4 text-white font-semibold hover:bg-[#a50d26] transition">
              LEARN MORE
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
