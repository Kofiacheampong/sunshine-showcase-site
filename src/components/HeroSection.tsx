import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-hero flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-none"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl rotate-3 opacity-20" />
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Kofi Archer - Data Engineer and Cloud Developer"
                  className="w-64 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl shadow-xl border-4 border-card"
                />
                <div className="absolute -bottom-3 -right-3 w-full h-full border-4 border-primary/30 rounded-2xl -z-10" />
              </div>
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <p className="text-muted-foreground text-sm sm:text-base mb-4 font-medium">
              Data Engineer &amp; Cloud Developer
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Data Engineer</span>
              <span className="text-foreground"> &amp;</span>
              <br />
              <span className="text-gradient">Cloud Developer</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Hi, I'm <strong className="text-foreground">Kofi Archer</strong>. I build scalable data pipelines and cloud applications using modern cloud infrastructure (Oracle Cloud, AWS, Azure), and create end-to-end solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center mt-16 lg:mt-24"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
