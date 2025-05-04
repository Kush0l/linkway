// import SplitScrollSections from "./HomeComp/Hero";
// import Clients from "./HomeComp/Clients";
// import AgenticAISection from "./HomeComp/Video";
// import CaseStudyCard from "./HomeComp/Casestudy";
// import ChatbotPromo from "./components/Cbhero";
// import ChatbotPromo1 from "./components/Chabtbotpromo";
// import Workflow from "./components/Workflow";
// import CustomerGrid from "./components/gallery";// ✅ Make sure Footer is imported

// const App = () => {
//   return (
//     <div>
//       <Clients />
//       <SplitScrollSections />
//       <AgenticAISection />
//       <CaseStudyCard />
//       <ChatbotPromo />
//       <ChatbotPromo1 />
//       <Workflow />
//       <CustomerGrid />
//     </div>
//   );
// };

// export default App;





import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ChatBot from "./pages/Chatbot";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chatbot" element={<ChatBot />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
