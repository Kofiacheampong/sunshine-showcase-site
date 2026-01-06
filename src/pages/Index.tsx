import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kofi Archer - Data Engineer & Cloud Developer</title>
        <meta name="description" content="Data Engineer & Cloud Developer specializing in scalable data pipelines, cloud infrastructure (Oracle Cloud, AWS, Azure), and full-stack development. Building end-to-end solutions with Python, Docker, and modern cloud technologies." />
        <meta name="keywords" content="Data Engineer, Cloud Developer, data pipelines, cloud infrastructure, Oracle Cloud, AWS, Azure, Docker, Python, Flask, Prometheus, Grafana, ETL, DevOps, Kofi Archer" />
        <meta name="author" content="Kofi Archer" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kofiarcher.com/" />
        <meta property="og:title" content="Kofi Archer - Data Engineer & Cloud Developer" />
        <meta property="og:description" content="Building scalable data pipelines and cloud applications using modern cloud infrastructure (Oracle Cloud, AWS, Azure)." />
        <meta property="og:image" content="https://kofiarcher.com/assets/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kofiarcher.com/" />
        <meta property="twitter:title" content="Kofi Archer - Data Engineer & Cloud Developer" />
        <meta property="twitter:description" content="Building scalable data pipelines and cloud applications using modern cloud infrastructure." />
        <meta property="twitter:image" content="https://kofiarcher.com/assets/og-image.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://kofiarcher.com/" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Kofi Archer",
            jobTitle: "Data Engineer & Cloud Developer",
            description:
              "Data Engineer and Cloud Developer specializing in scalable data pipelines, cloud infrastructure (Oracle Cloud, AWS, Azure), and full-stack development.",
            url: "https://kofiarcher.com",
            sameAs: [
              "https://linkedin.com/in/kofi-archer",
              "https://github.com/Kofiacheampong",
            ],
            knowsAbout: [
              "Data Engineering",
              "Cloud Development",
              "Data Pipelines",
              "Cloud Computing",
              "Docker",
              "Prometheus",
              "Grafana",
              "Python",
              "JavaScript",
              "Flask",
              "Infrastructure Management",
              "ETL",
              "DevOps",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
