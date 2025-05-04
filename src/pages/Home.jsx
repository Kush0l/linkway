import Clients from "../HomeComp/clients";
import HeroSection from "../HomeComp/Body";
import SplitScrollSections from "../HomeComp/hero";
import AgenticAISection from "../HomeComp/Video";
import CaseStudyCarousel from "../HomeComp/Casestudy";


const Home = () => (
    <>
      <HeroSection/>
      <Clients/>
      <SplitScrollSections/>
      <AgenticAISection/>
      <CaseStudyCarousel/>
      
    </>
  );
  
  export default Home;
