import Hero from "@/components/Hero";
import TrajectorySection from "@/components/TrajectorySection";
import PracticeAreas from "@/components/PracticeAreas";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrajectorySection />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
