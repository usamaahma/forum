import HeroSection from "@/components/HeroSection";
// import LandingPage from "./landingPage";
// import TopicPage from "./TopicPage";
// import MembersPage from "./membersPage";
import MembersPageTwo from "./memberPageTwo";
import EventsPage from "./events";
import HeroSectionEvents from "@/components/eventpage/HeroSectionevents";
import Eventform from "@/components/eventpage/eventform";
import BlogForm from "@/components/Blog/BlogForm";
export default function Home() {
  return (
    <>
      <HeroSectionEvents />
      <Eventform />
    </>
  );
}
