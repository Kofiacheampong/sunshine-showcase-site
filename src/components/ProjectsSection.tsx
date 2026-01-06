import { motion } from "framer-motion";
import { ExternalLink, Github, Globe, BarChart, Server, TrendingUp, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Homelab Monitoring Stack",
    icon: Server,
    description:
      "Production-ready monitoring solution for homelab infrastructure using Prometheus, Grafana, and Caddy. Features automatic HTTPS, real-time Pi-hole DNS metrics, system performance tracking, and automated backups.",
    highlights: [
      "92% reduction in documentation complexity",
      "Automatic HTTPS with Caddy reverse proxy",
      "Real-time monitoring with 15-second scrape intervals",
    ],
    tech: ["Docker", "Prometheus", "Grafana", "Caddy", "Node Exporter", "Linux"],
    link: "https://github.com/Kofiacheampong/homelab",
    type: "github",
  },
  {
    title: "Football Analytics Web App",
    icon: Globe,
    description:
      "A Flask-based web application that displays top scorers and stats across European leagues. Built with Bootstrap and hosted on Ubuntu with Nginx.",
    highlights: [
      "Integrated RapidAPI for real-time football data",
      "Responsive UI with Bootstrap design",
      "Dynamic filtering for player stats by name and season",
    ],
    tech: ["Flask", "Python", "Bootstrap", "Ubuntu", "Nginx"],
    link: "https://github.com/Kofiacheampong/footballwebapp",
    type: "github",
  },
  {
    title: "Investment Tracker",
    icon: TrendingUp,
    description:
      "A minimalist stock tracking application using Yahoo Finance data. Includes sparkline charts and portfolio breakdowns.",
    highlights: [
      "Real-time stock data from Yahoo Finance API",
      "Portfolio performance visualization with sparklines",
      "Clean, minimalist design for easy tracking",
    ],
    tech: ["Python", "Yahoo Finance API", "Matplotlib", "Pandas"],
    link: "https://github.com/Kofiacheampong/InvestmentTracker",
    type: "github",
  },
  {
    title: "Study Buddy Web App",
    icon: GraduationCap,
    description:
      "AI-powered web application that can summarize transcripts and provide study notes as well as generate flashcards.",
    highlights: [
      "Automatic transcript summarization",
      "AI-generated study notes and flashcards",
      "Built with transformer models for NLP",
    ],
    tech: ["Flask", "Tokenizers", "Transformers", "Python"],
    link: "https://studybuddy-6b0i.onrender.com/study/",
    type: "live",
  },
  {
    title: "JAM Construction Estimator",
    icon: Building2,
    description:
      "Estimating pipeline and business intelligence solution for a Black woman-owned startup construction company.",
    highlights: [
      "Project estimation and pipeline management",
      "Business analytics for construction workflows",
      "Custom solution for small business needs",
    ],
    tech: ["Business Analysis", "Excel", "Process Optimization"],
    link: "https://jamconst.com",
    type: "live",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills in data analysis, web development, and infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Icon Header */}
              <div className="h-32 bg-gradient-accent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                <project.icon className="w-16 h-16 text-primary-foreground/90 relative z-10" />
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.type === "live" ? (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </>
                    ) : (
                      <>
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </>
                    )}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
