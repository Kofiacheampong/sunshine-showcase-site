import { motion } from "framer-motion";
import { 
  Database, 
  Code2, 
  BarChart3, 
  Server, 
  Layout,
  FileCode2,
  GitBranch,
  Monitor
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Engineering",
    icon: Database,
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 90 },
      { name: "ETL Pipelines", level: 85 },
      { name: "Data Warehousing", level: 80 },
      { name: "Apache Spark", level: 75 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Server,
    skills: [
      { name: "Oracle Cloud", level: 85 },
      { name: "Docker", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "Prometheus", level: 80 },
      { name: "Terraform", level: 75 },
    ],
  },
];

const techStack = [
  { name: "Python", icon: FileCode2, color: "from-yellow-400 to-blue-500" },
  { name: "SQL", icon: Database, color: "from-blue-400 to-blue-600" },
  { name: "Docker", icon: Server, color: "from-blue-500 to-cyan-500" },
  { name: "Oracle Cloud", icon: Server, color: "from-red-500 to-orange-500" },
  { name: "Kubernetes", icon: GitBranch, color: "from-blue-600 to-indigo-600" },
  { name: "Prometheus", icon: BarChart3, color: "from-orange-500 to-red-500" },
  { name: "Grafana", icon: Monitor, color: "from-orange-400 to-yellow-500" },
  { name: "Terraform", icon: Layout, color: "from-purple-500 to-pink-500" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Expertise in data engineering, cloud infrastructure, and DevOps automation tools
          </p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 min-w-[90px]">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} text-white shadow-md group-hover:shadow-lg transition-shadow`}>
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Progress Bars */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: catIndex === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-6 lg:p-8 rounded-2xl border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-accent rounded-xl text-white">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + 0.1 * index, ease: "easeOut" }}
                        className="h-full bg-gradient-accent rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
