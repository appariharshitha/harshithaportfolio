
import React from 'react';
import {
  Mail,
  ArrowUpRight,
  Sparkles,
  Brain,
  Database,
  Code2,
  ExternalLink
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Responsive Web Design',
      'REST API Integration',
      'JSON'
    ]
  },
  {
    title: 'Full Stack Development',
    icon: Database,
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'MySQL',
      'REST APIs',
      'MERN Stack',
      'CRUD Operations'
    ]
  },
  {
    title: 'Data Analytics',
    icon: Database,
    skills: [
      'Python',
      'SQL',
      'Excel',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Power BI',
      'Tableau',
      'Data Cleaning',
      'Data Visualization',
      'Exploratory Data Analysis'
    ]
  },
  {
    title: 'UI/UX Design',
    icon: Sparkles,
    skills: [
      'Figma',
      'Wireframing',
      'Prototyping',
      'UI Design',
      'UX Fundamentals',
      'User-Centered Design',
      'Design Systems',
      'Visual Hierarchy'
    ]
  },
  {
    title: 'Python & AI/ML',
    icon: Brain,
    skills: [
      'Python Programming',
      'Object-Oriented Programming',
      'Scripting',
      'Scikit-learn',
      'Machine Learning',
      'Data Preprocessing',
      'Model Evaluation'
    ]
  },
  {
    title: 'Software Engineering',
    icon: Code2,
    skills: [
      'Java',
      'C',
      'C++ Basics',
      'R',
      'OOP',
      'DSA Fundamentals',
      'DBMS',
      'SDLC',
      'Debugging',
      'Problem Solving'
    ]
  },
  {
    title: 'Databases & Developer Tools',
    icon: Database,
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'VS Code',
      'MySQL'
    ]
  }
];

const projects = [
  {
    number: '01',
    title: 'AI Task Manager',
    category: 'ARTIFICIAL INTELLIGENCE',
    image: '/projects/agentic-ai.png',
    description:
      'An AI-focused project exploring intelligent task execution and automated workflows.',
    tech: ['Python', 'AI', 'Automation'],
    github: 'https://github.com/appariharshitha/AI-Task-Manager'
  },
  {
    number: '02',
    title: 'Campus Event Hub',
    category: 'FULL STACK DEVELOPMENT',
    image: '/projects/campus-event-hub.png',
    description:
      'A web application concept for organizing campus events and helping students discover activities.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/springboardmentor1317s-hub/campus-eventhub-team4'
  },
  {
    number: '03',
    title: 'Disaster Donation Management',
    category: 'SOCIAL IMPACT',
    image: '/projects/disaster-donation.png',
    description:
      'A web application concept for coordinating donations and supporting disaster relief efforts.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/appariharshitha/donationmanagementsystem'
  },
  {
    number: '04',
    title: 'Crop Prediction Model',
    category: 'MACHINE LEARNING',
    image: '/projects/crop-prediction.png',
    description:
      'A machine learning project for predicting suitable crops using agricultural input data.',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/appariharshitha/Crop_Prediction_Model'
  },
  {
    number: '05',
    title: 'Library Management System',
    category: 'DATABASE APPLICATION',
    image: '/projects/library-management.png',
    description:
      'A library management application for organizing book records and library operations.',
    tech: ['Python', 'MySQL'],
    github: 'https://github.com/appariharshitha/LMS'
  },
  {
    number: '06',
    title: 'Book My Trip',
    category: 'WEB DEVELOPMENT',
    image: '/projects/book-my-trip.png',
    description:
      'A travel-themed landing page designed to present travel information through a clean interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/appariharshitha/book-my-trip'
  }
];

const experience = [
  {
    period: 'MAY 2024 — JUN 2024',
    role: 'Web Development Intern',
    company: 'Octanet Private Limited',
    description:
      'Online web development internship. Add the specific tasks and deliverables you completed.'
  },
  {
    period: 'JUN 2024 — JUL 2024',
    role: 'Python Full Stack Training',
    company: 'ExcelR',
    description:
      'Online training focused on Python full-stack development and practical programming.'
  },
  {
    period: 'SEP 2025 — OCT 2025',
    role: 'Internship Program',
    company: 'Infosys Springboard',
    description:
      'Add the specific internship track, activities, and project details you completed.'
  }
];

const education = [
  {
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'Shri Vishnu Engineering College for Women',
    period: '2023 — 2026',
    score: 'CGPA: 9.16'
  },
  {
    degree: 'Diploma — Computer Science & Engineering',
    institution: 'Kakinada Institute of Engineering and Technology',
    period: '2020 — 2023',
    score: 'GPA: 9.03'
  },
  {
    degree: 'Secondary Education',
    institution: 'Z.P.P. High School, Battelanka',
    period: 'Completed',
    score: 'CGPA: 10.0'
  }
];

const certifications = [
  {
    name: 'Cybersecurity Essentials',
    issuer: 'Cisco'
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL'
  },
  {
    name: 'Data Science Using Python',
    issuer: 'HarvardX / edX'
  },
  {
    name: 'Java Programming',
    issuer: 'CodeTantra'
  },
  {
    name: 'Python',
    issuer: 'Edyst'
  },
  {
    name: 'Data Processing and Visualisation',
    issuer: 'Accenture AI ASCEND'
  }
];

function SectionLabel({ children }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project">
      <a
        className="projectImage"
        href={project.image}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} image`}
      >
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
        <span className="imageOpen">
          View image <ArrowUpRight size={14} />
        </span>
      </a>

      <div className="projectBody">
        <div className="projectTop">
          <span className="projectNo">{project.number}</span>
          <span className="category">{project.category}</span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="projectActions">
          {project.github ? (
            <a
              className="projectLink"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={15} />
              GitHub <ArrowUpRight size={13} />
            </a>
          ) : (
            <a
              className="projectLink"
              href="https://github.com/appariharshitha"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={15} />
              GitHub <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="site">
      <nav className="nav">
        <a href="#home" className="brand">
          H<span>.</span>A
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="navButton" href="#contact">
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>

      <main>
        <section className="hero section" id="home">
          <div className="heroText">
            <SectionLabel>
              AI & DATA SCIENCE GRADUATE
            </SectionLabel>

            <h1>
              Building
              <br />
              ideas into
              <br />
              <em>intelligent</em>
              <br />
              solutions.
            </h1>

            <p>
              Hi, I'm Appari Harshitha, an aspiring technology professional
              interested in
              software development, data analytics, artificial intelligence,
              and user interface design. I enjoy learning new technologies
              and building practical solutions.
            </p>

            <div className="heroActions">
              <a className="primary" href="#projects">
                Explore projects <ArrowUpRight size={16} />
              </a>

              <a
                className="secondary"
                href="https://github.com/appariharshitha"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={16} /> GitHub
              </a>
            </div>

            <div className="heroAvailability">
              <span />
              Open to entry-level opportunities
            </div>
          </div>

          <div
            className="heroVisual"
            aria-label="Decorative coding illustration"
          >
            <div className="orb" />

            <div className="codeCard">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>

              <p>
                <span>class</span> Developer:
              </p>
              <p>
                &nbsp;&nbsp;<span>def</span> build_solution(self):
              </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;skills = [</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>"Code"</b>, <b>"Data"</b>,
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>"Design"</b>
              </p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;]</p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span>return</span> impact
                <span className="cursor">_</span>
              </p>
            </div>

            <div className="floatCard">
              <Sparkles size={15} />
              Curious mind. Practical solutions.
            </div>
          </div>
        </section>

        <section className="section split" id="about">
          <div>
            <SectionLabel>01 / ABOUT ME</SectionLabel>
            <h2>
              Curious by nature.
              <br />
              <em>Driven by ideas.</em>
            </h2>
          </div>

          <div className="aboutCopy">
            <p>
              I am an Artificial Intelligence and Data Science graduate with
              a strong academic foundation and an interest in solving
              real-world problems using technology.
            </p>

            <p>
              My interests span frontend and full-stack development,
              Python programming, data analytics, machine learning, and
              UI/UX design. I enjoy exploring new tools and improving my
              problem-solving skills through practical projects.
            </p>

            <div className="miniStats">
              <div>
                <strong>9.16</strong>
                <span>B.Tech CGPA</span>
              </div>
              <div>
                <strong>6+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>8</strong>
                <span>Skill areas</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section skillsSection" id="skills">
          <SectionLabel>02 / SKILLS & TECHNOLOGIES</SectionLabel>

          <h2>
            My technical <em>toolkit.</em>
          </h2>

          <p className="skillsIntro">
            A versatile skill set spanning software development, data
            analytics, artificial intelligence, and UI/UX design.
          </p>

          <div className="skillCategoryGrid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article className="skillCategory" key={group.title}>
                  <div className="skillCategoryHeader">
                    <span className="skillCategoryIcon">
                      <Icon size={20} />
                    </span>

                    <span className="skillCategoryNumber">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3>{group.title}</h3>

                  <div className="skillTags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section projectsSection" id="projects">
          <div className="projectHeading">
            <div>
              <SectionLabel>03 / SELECTED WORK</SectionLabel>
              <h2>
                Projects with <em>purpose.</em>
              </h2>
            </div>

            <p>
              Projects across artificial intelligence, machine learning,
              databases, and web development.
            </p>
          </div>

          <div className="projectGrid">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>

          <p className="projectDisclaimer">
            Replace illustrative images and draft descriptions with actual
            project screenshots and verified project details before
            publishing.
          </p>
        </section>

        <section className="section experience" id="experience">
          <SectionLabel>04 / EXPERIENCE & TRAINING</SectionLabel>

          <h2>
            Learning through <em>experience.</em>
          </h2>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timelineItem" key={item.company}>
                <span className="time">{item.period}</span>

                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education" id="education">
          <SectionLabel>05 / EDUCATION</SectionLabel>

          <h2>
            Academic <em>foundation.</em>
          </h2>

          <div className="eduGrid">
            {education.map((item) => (
              <div key={item.degree}>
                <span className="time">{item.period}</span>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
                <b>{item.score}</b>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section certifications"
          id="certifications"
        >
          <SectionLabel>06 / CERTIFICATIONS</SectionLabel>

          <h2>
            Always <em>learning.</em>
          </h2>

          <div className="certGrid">
            {certifications.map((cert, index) => (
              <div className="certCard" key={cert.name}>
                <span className="certNo">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                </div>

                <ExternalLink size={15} />
              </div>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <SectionLabel>07 / GET IN TOUCH</SectionLabel>

          <h2>
            Let's create
            <br />
            something <em>meaningful.</em>
          </h2>

          <p>
            Interested in an opportunity or collaboration? Feel free to
            reach out. I'd love to connect.
          </p>

          <div className="contactActions">
            <a href="mailto:appariharshitha@gmail.com">
              <Mail size={16} /> Email me
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=appariharshitha%40gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail size={16} /> Open Gmail
            </a>

            <a
              href="https://github.com/appariharshitha"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={16} /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/harshitha-appari-2331a22b1"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Appari Harshitha</span>
        <span>Designed with curiosity & code.</span>
      </footer>
    </div>
  );
}

export default App;
