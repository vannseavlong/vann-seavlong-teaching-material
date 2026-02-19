import Section from "@/components/ui/Section";
import FAQ from "@/components/ui/FAQ";

const faqItems = [
  {
    question: "Is AA harder than AI?",
    answer:
      '<p>Not necessarily. <strong>AA and AI are different, not ranked by difficulty.</strong> AA is more abstract and calculus-heavy, which some find harder. AI is more applied and statistics-heavy, which others find challenging. At HL, both are demanding in their own way. Choose based on your strengths, not a perceived "difficulty level."</p>',
  },
  {
    question: "Can I switch from AA to AI (or vice versa) mid-year?",
    answer:
      "<p><strong>No.</strong> The two pathways diverge significantly. Switching mid-course is strongly discouraged and often not permitted by schools because you would miss foundational content from the other pathway. Your choice at the start of Grade 11 is your commitment for both years.</p>",
  },
  {
    question: "Do universities prefer AA over AI?",
    answer:
      "<p>It depends on the program. <strong>STEM-heavy programs</strong> (engineering, physics, mathematics) usually prefer or require AA HL. <strong>Business, social science, and humanities programs</strong> are generally happy with either. The key is to match your math choice with your intended field of study. Always check specific university requirements.</p>",
  },
  {
    question: 'Is AI SL the "easy" option?',
    answer:
      '<p><strong>AI SL is the most accessible of the four combinations</strong>, but calling it "easy" is misleading. It still covers substantial mathematics. More importantly, choosing it may limit your university options if you later decide on a quantitative field. Choose AI SL if it genuinely fits your goals, not because you want the "easiest" path.</p>',
  },
  {
    question: "What if I'm good at math but want to study Business?",
    answer:
      "<p>Great question! If you're strong in math and targeting business or economics, <strong>AI HL</strong> is an excellent choice — it covers statistics and modelling in depth, which are directly useful. However, if you're aiming at top economics programs (LSE, MIT, etc.), consider <strong>AA HL</strong> for the calculus foundation they expect.</p>",
  },
  {
    question: "How important is the Internal Assessment (IA)?",
    answer:
      "<p>The IA is worth <strong>20% of your final grade</strong> in both AA and AI. It's a mathematical exploration where you investigate a topic of your choice. Start thinking about it early! Choose a topic you're genuinely interested in — it makes the process much more enjoyable and leads to better work.</p>",
  },
  {
    question: "Can I take Math HL if I haven't been the strongest math student?",
    answer:
      "<p>HL requires significant dedication. If you find math challenging but are <strong>highly motivated and willing to put in extra work</strong>, it's possible to succeed. Talk honestly with your math teacher — they can give you the best advice based on your specific abilities and work ethic.</p>",
  },
];

export default function SectionFAQ() {
  return (
    <Section
      id="faq"
      label="Section 9"
      title="Common Questions & Myths"
      intro="Let's clear up some common misconceptions."
    >
      <FAQ items={faqItems} />
    </Section>
  );
}
