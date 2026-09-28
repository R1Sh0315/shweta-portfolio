import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Quote,
  ServerCog,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'
import {
  achievements,
  education,
  experience,
  focusAreas,
  languages,
  personal,
  projects,
  skillCategories,
  summary,
} from './data/portfolio'
import type { Project } from './types/portfolio'

const navItems = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['achievements', 'Achievements'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ResumeButton({ compact = false, onNotice }: { compact?: boolean; onNotice: () => void }) {
  return (
    <button className={`button button-outline resume-button ${compact ? 'button-small' : ''}`} onClick={onNotice}>
      <Download size={compact ? 15 : 17} />
      Download resume
    </button>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('shweta-theme') === 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeNotice, setResumeNotice] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('shweta-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    document.title = 'Shweta Sabale | Big Data Developer & Data Engineer'
  }, [])

  const showResumeNotice = () => {
    setResumeNotice(true)
    window.setTimeout(() => setResumeNotice(false), 5000)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Shweta Sabale home">
            <span className="brand-mark">SS</span>
            <span className="brand-copy">
              <strong>Shweta Sabale</strong>
              <small>Data Engineer</small>
            </span>
          </a>

          <button
            className="icon-button mobile-menu-button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            <div className="nav-links">
              {navItems.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </div>
            <div className="nav-actions">
              <button
                className="icon-button"
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <ResumeButton compact onNotice={showResumeNotice} />
            </div>
          </nav>
        </div>
      </header>

      {resumeNotice && (
        <div className="toast" role="status">
          <Download size={17} />
          <span>The resume PDF has not been added yet. Add it as <strong>public/resume.pdf</strong> to enable downloads.</span>
          <button className="toast-close" aria-label="Dismiss resume notice" onClick={() => setResumeNotice(false)}>
            <X size={15} />
          </button>
        </div>
      )}

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="status-pill"><span className="status-dot" /> Open to data engineering conversations</div>
              <p className="hero-kicker">Big Data Developer <span className="slash">/</span> Data Engineer</p>
              <h1>Building scalable data solutions that turn <em>complex data</em> into business value.</h1>
              <p className="hero-summary">{summary}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#experience">
                  View my experience <ArrowUpRight size={17} />
                </a>
                <a className="button button-quiet" href="#projects">
                  Explore projects <ArrowDownRight size={17} />
                </a>
              </div>
              <div className="hero-contact">
                <a href={`mailto:${personal.email}`}><Mail size={15} /> {personal.email}</a>
                <a href={personal.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ExternalLink size={13} /></a>
              </div>
            </div>
            <div className="hero-aside">
              <div className="hero-orbit">
                <span className="orbit-ring ring-one" />
                <span className="orbit-ring ring-two" />
                <span className="orbit-node node-one"><Database size={17} /></span>
                <span className="orbit-node node-two"><Cloud size={16} /></span>
                <span className="orbit-node node-three"><BarChart3 size={16} /></span>
                <div className="hero-monogram"><span>SS</span><small>DATA<br />SYSTEMS</small></div>
              </div>
              <div className="hero-aside-caption"><span>01</span><span>Data systems<br />with purpose</span></div>
            </div>
          </div>
          <div className="container hero-bottom">
            <div className="scroll-cue"><span className="scroll-line" /> Scroll to explore</div>
            <div className="hero-location"><MapPin size={15} /> Based in {personal.location}</div>
          </div>
        </section>

        <section className="stats-bar" aria-label="Quick profile">
          <div className="container stats-grid">
            <div className="stat-item"><span className="stat-value">5.8<span className="stat-plus">+</span></span><span className="stat-label">Years of experience</span></div>
            <div className="stat-item"><span className="stat-value">01</span><span className="stat-label">Core discipline · Data engineering</span></div>
            <div className="stat-item"><span className="stat-value">∞</span><span className="stat-label">Big data &amp; Spark workflows</span></div>
            <div className="stat-item"><span className="stat-value">02</span><span className="stat-label">Cloud environments · AWS &amp; Databricks</span></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-grid">
            <SectionHeading eyebrow="01 / Profile" title="About me" description="Reliable data work starts with understanding the system around it." />
            <div className="about-content">
              <p className="large-copy">I build the pipelines, transformations and workflows that help teams work with complex data confidently.</p>
              <p>{summary} My work spans data migration, cloud processing, automation and performance optimization, with a focus on solutions that are practical to operate and ready to scale.</p>
              <div className="focus-list">
                {focusAreas.map((focus, index) => <span key={focus}><span className="focus-index">0{index + 1}</span>{focus}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="experience">
          <div className="container">
            <SectionHeading eyebrow="02 / Experience" title="Where I’ve made an impact" description="A record of building dependable data processing systems across financial services and inventory forecasting." />
            <div className="experience-list">
              {experience.map((job, index) => <ExperienceCard key={job.company} job={job} index={index} />)}
            </div>
            <div className="career-strip">
              <div className="career-label"><span className="eyebrow">Career timeline</span><span>From foundations to scalable systems</span></div>
              <div className="career-track">
                <div className="career-point"><strong>2020</strong><span>Cognizant<br /><small>Data Engineer</small></span></div>
                <div className="career-line" />
                <div className="career-point"><strong>2021</strong><span>Gspann<br /><small>Data Engineer</small></span></div>
                <div className="career-line" />
                <div className="career-point"><strong>Present</strong><span>Gspann<br /><small>Senior Software Engineer</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <SectionHeading eyebrow="03 / Toolkit" title="Technical skills" description="The tools I use to move from raw data to dependable, usable systems." />
            <div className="skills-grid">
              {skillCategories.map((category, index) => {
                const Icon = [Layers3, Code2, Cloud, ServerCog, Database][index]
                return <div className="skill-card" key={category.label}>
                  <div className="skill-card-top"><span className="icon-square"><Icon size={18} /></span><span className="skill-number">0{index + 1}</span></div>
                  <h3>{category.label}</h3>
                  <p>{category.description}</p>
                  <div className="tag-list">{category.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div>
                </div>
              })}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="projects">
          <div className="container">
            <div className="section-heading heading-on-dark">
              <span className="eyebrow">04 / Selected work</span>
              <h2>Projects that solve<br /><em>real problems.</em></h2>
              <p>Hands-on work across data engineering, financial calculations and academic applications.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} onOpen={() => setSelectedProject(project)} />)}
            </div>
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="container">
            <SectionHeading eyebrow="05 / Recognition" title="Work that has been noticed" description="A few milestones from my professional and academic journey." />
            <div className="achievements-grid">
              {achievements.map((achievement, index) => <div className="achievement-card" key={achievement.title}><span className="achievement-icon"><Award size={19} /></span><span className="achievement-index">0{index + 1}</span><h3>{achievement.title}</h3><p>{achievement.description}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="education">
          <div className="container education-grid">
            <SectionHeading eyebrow="06 / Foundation" title="Education" description="The academic foundation behind my engineering practice." />
            <div className="education-list">
              {education.map(item => <div className="education-item" key={item.degree}><span className="education-icon"><GraduationCap size={18} /></span><div><h3>{item.degree}</h3><p>{item.institution}</p><span>{item.startDate && `${item.startDate} — ${item.endDate}`} {item.year && item.year} · {item.location}</span></div><strong>{item.grade}</strong></div>)}
            </div>
          </div>
          <div className="container language-row"><span className="eyebrow">Languages</span>{languages.map(language => <span className="language" key={language.name}><Check size={14} /> {language.name}</span>)}</div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">07 / Get in touch</span>
              <h2>Let’s connect.</h2>
              <p>Interested in discussing a data engineering opportunity or collaborating on a project? Feel free to get in touch.</p>
              <div className="contact-actions"><a className="button button-primary" href={`mailto:${personal.email}`}>Email me <Mail size={17} /></a><a className="button button-outline" href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={16} /></a></div>
            </div>
            <div className="contact-details">
              <a href={`mailto:${personal.email}`}><span className="contact-icon"><Mail size={17} /></span><span><small>Email</small>{personal.email}</span><ArrowUpRight size={17} /></a>
              <a href={`tel:${personal.phone}`}><span className="contact-icon"><Phone size={17} /></span><span><small>Phone</small>{personal.phone}</span><ArrowUpRight size={17} /></a>
              <div><span className="contact-icon"><MapPin size={17} /></span><span><small>Location</small>{personal.location}</span></div>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={17} /></span><span><small>LinkedIn</small>shwetasabale793222143</span><ExternalLink size={17} /></a>
            </div>
          </div>
          <div className="container resume-callout"><div><span className="eyebrow">One more thing</span><h3>Keep the conversation moving.</h3></div><ResumeButton onNotice={showResumeNotice} /></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-wrap"><span>© {new Date().getFullYear()} Shweta Sabale</span><span>Built around data, clarity and continuous learning.</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></div></footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}

function ExperienceCard({ job, index }: { job: (typeof experience)[number]; index: number }) {
  const [expanded, setExpanded] = useState(index === 0)
  const visibleResponsibilities = expanded ? job.responsibilities : job.responsibilities.slice(0, 4)
  return <article className="experience-card">
    <div className="experience-meta"><span className="experience-index">0{index + 1}</span><span>{job.startDate} — {job.endDate}</span></div>
    <div className="experience-main"><div className="experience-title"><h3>{job.role}</h3><p>{job.company} <span>·</span> {job.location}</p></div><p className="experience-description">{job.description}</p><ul>{visibleResponsibilities.map(point => <li key={point}>{point}</li>)}</ul><button className="text-button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show less' : 'View more'} <ChevronDown size={15} className={expanded ? 'rotated' : ''} /></button></div>
  </article>
}

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return <article className={`project-card project-${index + 1}`}>
    <div className="project-card-top"><span className="project-index">0{index + 1}</span><span>{project.type}</span></div>
    <div className="project-card-body"><h3>{project.name}</h3>{project.company && <p className="project-company">{project.company} <span>·</span> {project.period}</p>}<p className="project-description">{project.description}</p><div className="tag-list">{project.technologies.slice(0, 5).map(technology => <span className="tag" key={technology}>{technology}</span>)}{project.technologies.length > 5 && <span className="tag tag-more">+{project.technologies.length - 5}</span>}</div></div>
    <button className="project-link" onClick={onOpen}>View details <ChevronRight size={16} /></button>
  </article>
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [onClose])
  return <div className="modal-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button className="modal-close icon-button" onClick={onClose} aria-label="Close project details"><X size={19} /></button><span className="eyebrow">{project.type}</span><h2 id="project-modal-title">{project.name}</h2>{project.company && <p className="modal-company">{project.company} <span>·</span> {project.period}</p>}<p className="modal-description">{project.description}</p><h3>Technologies</h3><div className="tag-list">{project.technologies.map(technology => <span className="tag" key={technology}>{technology}</span>)}</div>{(project.highlights || project.features) && <><h3>{project.highlights ? 'Key contributions' : 'Features'}</h3><ul className="modal-list">{(project.highlights || project.features || []).map(item => <li key={item}><Check size={16} />{item}</li>)}</ul></>}</div></div>
}

export default App