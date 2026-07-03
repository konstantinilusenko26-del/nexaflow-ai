import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { WorkflowDemo } from "@/components/sections/WorkflowDemo";
import { Process } from "@/components/sections/Process";
import { Results } from "@/components/sections/Results";
import { DashboardDemo } from "@/components/sections/DashboardDemo";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Problems />
        <Services />
        <WorkflowDemo />
        <Process />
        <Results />
        <DashboardDemo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
