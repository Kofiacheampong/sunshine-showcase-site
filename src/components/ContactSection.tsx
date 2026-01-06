import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kofiarcher62@gmail.com",
    href: "mailto:kofiarcher62@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (651) 440 6218",
    href: "tel:+16514406218",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-card"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Let's Work Together
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:kofiarcher62@gmail.com">
                    <Mail className="w-5 h-5" />
                    Send Me an Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
