import Hero from "@/components/Hero";
import Classes from "@/components/Classes"
import Instructors from "@/components/Instructors";
import Booking from "@/components/Booking";
import SwimAssetsSection from "@/components/SwimAssetSection";
import SchedulePricing from "@/components/SchedulePricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Classes/>
      <Instructors/>
      <SwimAssetsSection/>
      <SchedulePricing/>
      <Booking/>
      <Contact/>
    </main>
  );
}
