import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Restaurant IT Support Technician",
    company: "Pretsl",
    location: "Remote",
    period: "August 2022 – Present",
    description: [
      "Provided technical support to restaurant teams across multiple locations, focusing on software, hardware, and network issues.",
      "Collaborated with business teams to gather data on customer behavior and sales trends, leveraging insights for targeted improvements.",
      "Implemented and maintained IT systems, ensuring reliable communication of sales data across platforms.",
      "Provided data-driven insights to the leadership team to improve restaurant sales, by optimizing menu through data analysis.",
    ],
  },
  {
    title: "UX/UI Designer",
    company: "Scolpta",
    location: "Remote",
    period: "September 2021 – June 2022",
    description: [
      "Collaborated with cross-functional teams to design, test, and maintain software, integrating feedback from user testing to improve the UX.",
      "Conducted data analysis from usability tests to inform design decisions, ensuring that interfaces aligned with user expectations and business goals.",
      "Led team efforts in conducting A/B testing, generating user insights, and refining the digital product to improve user engagement by 20%.",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Nolle Design",
    location: "Remote",
    period: "July 2020 – June 2021",
    description: [
      "Created visual designs and branding materials for clients across various industries.",
      "Collaborated with clients to understand their vision and translate it into compelling visual content.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative mb-8 sm:mb-12 ${
                index % 2 === 0 ? "lg:pr-8 lg:text-right lg:ml-0 lg:mr-auto lg:w-1/2" : "lg:pl-8 lg:text-left lg:ml-auto lg:mr-0 lg:w-1/2"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 lg:left-auto lg:right-0 top-0 w-4 h-4 bg-primary rounded-full border-4 border-card shadow-lg hidden sm:block transform lg:translate-x-1/2" 
                style={{ 
                  left: index % 2 === 0 ? 'auto' : '0',
                  right: index % 2 === 0 ? '0' : 'auto',
                  transform: index % 2 === 0 ? 'translateX(50%)' : 'translateX(-50%)'
                }}
              />

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/30 ml-6 sm:ml-8 lg:ml-0">
                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {exp.title}
                  </h3>
                </div>

                <div className={`flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                  <span className="font-medium text-primary">{exp.company}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>

                <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "lg:text-right" : ""}`}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
