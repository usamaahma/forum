import HeroSection from "@/components/HeroSection";
// import LandingPage from "./landingPage";
// import TopicPage from "./TopicPage";
// import MembersPage from "./membersPage";
import MembersPageTwo from "./memberPageTwo";
import EventsPage from "./events";
import HeroSectionEvents from "@/components/eventpage/HeroSectionevents";
export default function Home() {
  return (
    <>
      <HeroSectionEvents />
      <EventsPage />
    </>
  );
}
