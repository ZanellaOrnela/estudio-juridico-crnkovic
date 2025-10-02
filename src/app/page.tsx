import Hero from "@/components/Hero";
import TrajectorySection from "@/components/TrajectorySection";
import PracticeAreas from "@/components/PracticeAreas";
import HowWeWork from "@/components/HowWeWork";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import LocationContact from "@/components/LocationContact";
import FAQs from "@/components/FAQs";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Team />
      <PracticeAreas />
      <HowWeWork />
      <TrajectorySection />
      <LocationContact />
      <FAQs />
      <ContactForm />
      <FloatingWhatsApp />
    </main>
  );
}
