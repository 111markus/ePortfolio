import "./App.css";
import Portfolio from "./Portfolio";
import {
  Footer,
  Navbar,
  PageLoadCurtain,
  ScrollProgress,
} from "./components/ui";

export default function App() {
  return (
    <>
      <PageLoadCurtain />
      <ScrollProgress />
      <Navbar />
      <div className="pt-[72px]">
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}
