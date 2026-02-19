import Hero from "@/components/ui/Hero";
import SectionWhatIsIBMath from "@/components/home/SectionWhatIsIBMath";
import SectionTwoPathways from "@/components/home/SectionTwoPathways";
import SectionAADetail from "@/components/home/SectionAADetail";
import SectionAIDetail from "@/components/home/SectionAIDetail";
import SectionSLvsHL from "@/components/home/SectionSLvsHL";
import SectionComparison from "@/components/home/SectionComparison";
import SectionCareers from "@/components/home/SectionCareers";
import SectionDecisionGuide from "@/components/home/SectionDecisionGuide";
import SectionFAQ from "@/components/home/SectionFAQ";

export default function Home() {
  return (
    <>
      <Hero
        title="IB Mathematics AA vs AI"
        subtitle="Which Path Is Right for You? A clear, honest guide for Grade 11 IB students choosing their math pathway."
        badge="For Students in Business, Economics, Engineering & Science"
      />
      <SectionWhatIsIBMath />
      <SectionTwoPathways />
      <SectionAADetail />
      <SectionAIDetail />
      <SectionSLvsHL />
      <SectionComparison />
      <SectionCareers />
      <SectionDecisionGuide />
      <SectionFAQ />
    </>
  );
}
