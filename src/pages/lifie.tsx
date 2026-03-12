import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent, AnalyticsEvents } from "@/lib/analytics";

const timelineSections = [
  {
    id: "what-is-lifie",
    title: "What is Lifie",
    content: [
      "Lifie builds voice and chat AI for businesses. Two product lines:",
    ],
    products: [
      {
        name: "REACH",
        description:
          "Voice AI for outbound customer engagement across verticals.",
      },
      {
        name: "ASSIST",
        description:
          "Chat AI for inbound support, appointments, and sales workflows.",
      },
    ],
    contentAfterProducts: ["Here's how we got here."],
  },
  {
    id: "how-it-started",
    title: "How it started",
    date: "Jul 2025",
    content: [
      "The original idea was simple — a personal AI assistant for consumers. Something that could negotiate with businesses, book services, make purchases on your behalf. Like having someone handle all the annoying parts of interacting with businesses.",
      "To make that work, businesses would also need their own AI systems that the consumer assistant could talk to. So we had two sides to build — consumer and business.",
      "We started building the consumer side first. But we quickly realized the industry wasn't ready — most businesses had no AI systems for an assistant to interact with. So we stepped back and decided to build the business side first.",
    ],
    lesson:
      "The vision wasn't wrong, the timing was. If the ecosystem isn't ready for what you're building, build the layer that's missing first.",
  },
  {
    id: "classification-trap",
    title: "The classification trap",
    content: [
      "So we switched to building the business side. We designed a clean system — four types of business AI based on what they'd handle:",
    ],
    list: [
      "Product (e-commerce, catalog)",
      "Professional services (consulting, freelancing)",
      "Bookings (appointments, reservations)",
      "Information (FAQs, knowledge base)",
    ],
    contentAfterList: [
      "Logically it made perfect sense. Clean separation, clear architecture.",
      "Then we talked to actual businesses. Not one of them wanted a single category. A restaurant needed bookings AND product info AND support. A salon needed appointments AND customer follow-ups AND FAQs. Everyone needed everything mixed together.",
    ],
    lesson:
      "Engineering truth and market truth are different things. A clean abstraction that users don't want is just wasted code. Build what the market needs, not what the architecture diagram prefers.",
  },
  {
    id: "the-pivot",
    title: "The pivot",
    content: [
      "We dropped the classification system and rebuilt around one idea — one unified system per business that handles whatever that business needs. No categories, just capabilities.",
      "We also dropped the consumer assistant entirely. It was too early. The market wasn't ready for it. Instead we focused fully on helping businesses automate their customer interactions.",
      "Around this time we connected with a team building voice AI — outbound and inbound calling systems. Their tech was complementary. They had the voice layer, we had the intelligence layer. We merged.",
    ],
    lesson:
      "Merging with the right team is faster than building everything yourself. And killing your original vision isn't failure — it's clarity.",
  },
  {
    id: "where-lifie-is-now",
    title: "Where Lifie is now",
    content: [
      "After the merger, we structured everything into two product lines:",
    ],
    products: [
      {
        name: "REACH",
        description:
          "Voice AI for outbound customer engagement. Covers different vertical use cases — reaching, qualifying, and engaging customers through voice.",
      },
      {
        name: "ASSIST",
        description:
          "Chat AI for inbound workflows. Handles appointments, sales conversations, and customer support through chat interfaces.",
      },
    ],
    contentAfterProducts: [
      "Both products share the same intelligence layer underneath.",
    ],
  },
  {
    id: "what-i-learned",
    title: "What I learned",
    content: [
      "Eight months of building Lifie taught me more than two years of coursework:",
    ],
    learnings: [
      {
        title: "Market over architecture",
        body: "The market doesn't care about your architecture. Build what solves the problem, not what looks clean on a whiteboard.",
      },
      {
        title: "Pivot early",
        body: "The longer you hold onto the wrong idea, the more it costs you. We pivoted twice in the first four months and each time the product got sharper.",
      },
      {
        title: "Supply side first",
        body: "If you're building something that connects two sides, figure out which side needs to exist first. We wasted time building the consumer side when businesses weren't ready.",
      },
      {
        title: "Merge when it makes sense",
        body: "Building everything yourself feels like ownership but finding the right team to combine with is a faster path to something real.",
      },
    ],
  },
];

function TimelineSection({
  section,
  index,
}: {
  section: (typeof timelineSections)[number];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      trackEvent(AnalyticsEvents.CASE_STUDY_SECTION, { section: section.id });
    }
  }, [isInView, section.id]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index === 0 ? 0 : 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-border" />
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-primary border-2 border-background" />

      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <h2 className="text-2xl font-bold">{section.title}</h2>
          {section.date && (
            <span className="text-sm text-muted-foreground">
              {section.date}
            </span>
          )}
        </div>

        {section.content.map((paragraph, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}

        {section.list && (
          <div className="grid grid-cols-2 gap-2 py-1">
            {section.list.map((listItem, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-md bg-secondary/50 px-3 py-2 text-sm text-muted-foreground"
              >
                <span className="text-primary font-semibold">{i + 1}.</span>
                {listItem}
              </div>
            ))}
          </div>
        )}

        {section.contentAfterList?.map((paragraph, i) => (
          <p
            key={`after-${i}`}
            className="text-muted-foreground leading-relaxed"
          >
            {paragraph}
          </p>
        ))}

        {section.products && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
            {section.products.map((product) => (
              <div
                key={product.name}
                className="rounded-lg border bg-card p-4 space-y-1.5"
              >
                <h3 className="text-base font-semibold text-primary">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {section.contentAfterProducts?.map((paragraph, i) => (
          <p
            key={`after-products-${i}`}
            className="text-muted-foreground leading-relaxed"
          >
            {paragraph}
          </p>
        ))}

        {section.learnings && (
          <div className="space-y-3 pt-1">
            {section.learnings.map((learning, i) => (
              <div key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <span className="font-medium text-foreground">
                    {learning.title}.
                  </span>{" "}
                  <span className="text-muted-foreground">{learning.body}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {section.lesson && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 mt-4"
          >
            <p className="text-sm font-medium text-foreground/90 italic">
              {section.lesson}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export function LifiePage() {
  useEffect(() => {
    trackEvent(AnalyticsEvents.CASE_STUDY_VIEW, { study: "lifie" });
  }, []);

  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <h1 className="text-5xl font-bold mb-3">The Lifie Story</h1>
        <p className="text-xl text-muted-foreground">
          How a consumer AI assistant became a voice and chat platform for
          businesses.
        </p>
      </motion.div>

      <div className="relative">
        {timelineSections.map((section, i) => (
          <TimelineSection key={section.id} section={section} index={i} />
        ))}
      </div>
    </div>
  );
}
