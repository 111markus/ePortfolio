import "./App.css";
import EvilEye from "./components/EvilEye.tsx";
import Portfolio from "./Portfolio";
import {
  Footer,
  Navbar,
  PageLoadCurtain,
  ScrollProgress,
} from "./components/ui";

export default function App() {
  return (
    <div className="relative isolate">
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <EvilEye
          eyeColor="#6983ad"
          intensity={0.9}
          pupilSize={1.1}
          irisWidth={0.3}
          glowIntensity={0.25}
          scale={0.9}
          noiseScale={0.8}
          pupilFollow={0.6}
          flameSpeed={0.3}
          backgroundColor="#000000"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-10 bg-black/40"
      />

      <div style={{ position: "relative", zIndex: 20 }}>
        <PageLoadCurtain />
        <ScrollProgress />
        <Navbar />
        <div className="pt-[72px]">
          <Portfolio />
          <Footer />
        </div>
      </div>
    </div>
  );
}
