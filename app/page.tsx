'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Splash from '@/components/Splash';
import { resumeData } from '@/data/resume';
import { ChevronDown, ExternalLink, Mail, MapPin, Download } from 'lucide-react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash is visible
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSplash]);

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-white/20">
      <AnimatedBackground />

      <AnimatePresence mode="wait">
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10"
        >
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="font-bold tracking-tighter text-xl">AN.</div>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for full-time & remote contract roles
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                {resumeData.basics.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-400 font-light mb-8">
                {resumeData.basics.title}
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl">
                I build and ship production systems, not side projects, not tutorials, real software used by real people. My stack spans web, mobile, and backend with hands-on production experience in spatial databases, real-time systems, and AI integrations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-white text-slate-950 font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2"
                >
                  View Projects
                  <ChevronDown className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="px-6 py-3 bg-white/5 border border-white/10 font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  Download Resume
                  <Download className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-6 mt-12 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {resumeData.basics.location}
                </div>
                <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  {resumeData.basics.email}
                </a>
                <a href={`https://${resumeData.basics.links[0]}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </section>

          {/* Skills Marquee */}
          <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-4 overflow-hidden flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
              className="flex w-max"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-12 pr-12">
                  {resumeData.skills.flatMap(g => g.skills).map((skill, j) => (
                    <div key={j} className="flex items-center gap-12">
                      <span className="text-xl font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                        {skill}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 flex items-center gap-4"
            >
              Projects
              <div className="h-px flex-1 bg-white/10" />
            </motion.h3>

            <div className="space-y-12">
              {resumeData.projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="hidden md:block absolute left-[-32px] top-2 w-3 h-3 rounded-full bg-white/20 border-2 border-slate-950" />
                  <div className="hidden md:block absolute left-[-27px] top-6 bottom-[-48px] w-px bg-white/10 last:hidden" />

                  <div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.stack.map((tech, j) => (
                            <span key={j} className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-medium text-slate-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-slate-400 whitespace-nowrap text-left md:text-right">
                        <div>{project.dates}</div>
                        <div>{project.company}</div>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {project.bullets.map((bullet, j) => (
                        <li key={j} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 flex items-center gap-4"
            >
              Experience
              <div className="h-px flex-1 bg-white/10" />
            </motion.h3>

            <div className="space-y-12">
              {resumeData.experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="hidden md:block absolute left-[-32px] top-2 w-3 h-3 rounded-full bg-white/20 border-2 border-slate-950" />
                  <div className="hidden md:block absolute left-[-27px] top-6 bottom-[-48px] w-px bg-white/10 last:hidden" />

                  <div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <div className="text-lg text-slate-300">{exp.company}</div>
                      </div>
                      <div className="text-sm text-slate-400 whitespace-nowrap text-left md:text-right">
                        <div>{exp.dates}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-slate-400 text-sm leading-relaxed flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto bg-white/[0.02] border-y border-white/5">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 flex items-center gap-4"
            >
              Achievements & Impact
              <div className="h-px flex-1 bg-white/10" />
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resumeData.achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="text-lg font-bold text-white mb-2">{ach.item}</div>
                  <div className="text-sm text-slate-400">{ach.context}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills & Education */}
          <section id="skills" className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 flex items-center gap-4"
              >
                Skills
                <div className="h-px flex-1 bg-white/10" />
              </motion.h3>

              <div className="space-y-8">
                {resumeData.skills.map((group, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">{group.group}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, j) => (
                        <span key={j} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 flex items-center gap-4"
              >
                Education
                <div className="h-px flex-1 bg-white/10" />
              </motion.h3>

              <div className="space-y-6">
                {resumeData.education.map((edu, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5">
                    <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                    <div className="text-slate-300 mb-2">{edu.institution}</div>
                    <div className="text-sm text-slate-500">{edu.dates}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">Certifications</h4>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 inline-block">
                  <div className="text-slate-300 font-medium">{resumeData.certifications[0]}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 text-center border-t border-white/5 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.</p>
          </footer>
        </motion.main>
      )}
    </div>
  );
}
