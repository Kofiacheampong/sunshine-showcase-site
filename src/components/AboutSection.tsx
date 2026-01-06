import { motion } from "framer-motion";
import { Database, Cloud, Code2, BarChart3, GitBranch, FileSpreadsheet } from "lucide-react";

const skills = [
  {
    category: "Data Tools & Technologies",
    icon: Database,
    items: ["Python", "SQL", "Excel", "Power BI", "Tableau"],
  },
  {
    category: "Programming & Scripting",
    icon: Code2,
    items: ["HTML", "CSS", "Python", "Flask"],
  },
  {
    category: "Skills",
    icon: BarChart3,
    items: ["Data Analysis", "Data Cleaning", "Data Visualization", "Reporting", "Statistical Analysis"],
  },
  {
    category: "Tools",
    icon: GitBranch,
    items: ["Git", "GitHub", "MS Office Suite", "Prometheus", "Grafana"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Profile Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Detail-oriented Data Analyst with strong experience in IT support, front-end development, and project management. Skilled at analyzing data to solve user and business challenges, generating insights, and improving operational efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Proficient in leveraging data tools to gather, clean, and visualize data, with a track record of identifying opportunities for optimization in both technical and business environments. Seeking to apply a blend of data analysis and technical expertise in an innovative organization.
            </p>
            <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border">
              <FileSpreadsheet className="w-10 h-10 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Education</p>
                <p className="text-sm text-muted-foreground">B.A. in International Management</p>
                <p className="text-xs text-muted-foreground">Gustavus Adolphus College – May 2017</p>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Core Competencies
            </h3>
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="p-4 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
