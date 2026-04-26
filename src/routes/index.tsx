import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { LogosMarquee } from "@/components/site/LogosMarquee";
import { WhyJoin } from "@/components/site/WhyJoin";
import { VideoIntro } from "@/components/site/VideoIntro";
import { StudentReels } from "@/components/site/StudentReels";
import { Problems } from "@/components/site/Problems";
import { RealProblem } from "@/components/site/RealProblem";
import { CaseStudies } from "@/components/site/CaseStudies";
import { MyStory, PresentCourse } from "@/components/site/MyStory";
import { Reviews } from "@/components/site/Reviews";
import { Modules } from "@/components/site/Modules";
import { ForWhom, LessonsPreview } from "@/components/site/ForWhom";
import { Bonuses } from "@/components/site/Bonuses";
import { LiveSection } from "@/components/site/LiveSection";
import { Pricing } from "@/components/site/Pricing";
import { Author, FAQ, Footer } from "@/components/site/Author";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Header />
      <Hero />
      <LogosMarquee />
      <WhyJoin />
      <VideoIntro />
      <StudentReels />
      <Problems />
      <RealProblem />
      <CaseStudies />
      <MyStory />
      <PresentCourse />
      <Reviews />
      <Modules />
      <ForWhom />
      <LessonsPreview />
      <Bonuses />
      <LiveSection />
      <Pricing />
      <Author />
      <FAQ />
      <Footer />
    </main>
  );
}
