import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, BookOpen, Code2, FileText, GraduationCap, Lightbulb, Mail, Send, Wrench,
} from 'lucide-react'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionArticle = motion.article

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const identity = {
  name: 'John Klien Villanueva',
  role: '4th Year BSIT Student | Aspiring Developer',
  heroTitle: '4th Year BSIT Student at Jose Rizal University',
  course: 'BSIT 402 — ITC-C508',
  email: 'johnklien.villanueva@my.jru.edu',
  github: 'https://github.com/johnklienvillanueva',
  aboutPreview: 'A fourth-year Information Technology student focused on building practical software solutions and documenting academic growth through this ePortfolio.',
  fullBio: 'I am John Klien Villanueva, a 4th year Bachelor of Science in Information Technology student at Jose Rizal University. I am building my foundation in software development, data analysis, and modern web technologies. This ePortfolio serves as a workspace and record of my academic learning for ITC-C508, showcasing my projects, reflections, and competencies.',
}

const technicalSkills = {
  core: ['Python', 'JavaScript', 'PHP', 'SQL', 'Data Structures'],
  web: ['React', 'Laravel', 'Tailwind CSS', 'REST APIs', 'Git'],
  tools: ['VS Code', 'GitHub', 'Jupyter Notebook', 'Figma', 'Postman'],
}

const education = [
  { school: 'Jose Rizal University', degree: 'Bachelor of Science in Information Technology', level: '4th Year (Currently Enrolled)' },
]

const courseQA = [
  {
    id: 'q-deep-learning',
    label: 'Deep Learning in Business',
    question: 'Identify and describe a specific business problem that can be addressed using deep learning-based predictive models.',
    answer: (
      <>
        <p>
          A pressing business problem that deep learning effectively addresses is <strong>customer churn prediction in the telecommunications industry</strong>. Telecom providers lose billions of dollars annually as subscribers switch to competitors. The challenge lies in analyzing massive volumes of unstructured customer data — call records, usage patterns, billing history, support interactions, and demographic information — to identify which customers are at risk of leaving before they actually churn.
        </p>
        <p className="mt-3">
          Deep learning models, particularly deep feed-forward neural networks, excel at this task because they can automatically learn hierarchical features from raw data without manual feature engineering. As demonstrated in the readings, a deep learning model trained on billions of call records achieved 77.9% AUC in predicting customer churn, significantly outperforming traditional machine learning approaches like random forests (73.2% AUC). This predictive capability enables companies to proactively intervene with targeted retention offers, improving customer retention by 5% — which studies show can increase profits by 25% to 95%.
        </p>
        <p className="mt-3">
          However, deep learning models are often criticized as &ldquo;black boxes&rdquo; because their internal decision-making processes are not easily interpretable. To address this challenge, organizations can implement <strong>LIME</strong> (Local Interpretable Model-agnostic Explanations) and <strong>SHAP</strong> (SHapley Additive exPlanations) — post-hoc explainability techniques that approximate which input features most influenced a specific prediction. For churn prediction, these tools reveal whether a customer&apos;s likelihood to churn was driven by factors like decreased usage, unresolved support tickets, or billing issues. Additionally, <strong>attention mechanisms</strong> in neural networks highlight which input parts the model focused on, while <strong>confidence scoring</strong> flags low-certainty predictions for human review. Combining these approaches makes deep learning systems more transparent, interpretable, and trustworthy for business decision-making.
        </p>
      </>
    ),
  },
  {
    id: 'q-nlp',
    label: 'NLP Conversational Systems',
    question: 'Discuss how modern organizations use advanced NLP models to develop intelligent, context-aware conversational systems.',
    answer: (
      <>
        <p>
          Modern organizations are leveraging advanced Natural Language Processing (NLP) models — including Recurrent Neural Networks (RNNs), Transformers, and large language models — to build sophisticated conversational AI systems that dynamically adapt to diverse user needs. These systems, commonly deployed as chatbots and virtual assistants (e.g., Apple Siri, Amazon Alexa, Microsoft Cortana), go beyond simple scripted responses by utilizing deep learning to understand context, sentiment, and user intent in real time.
        </p>
        <p className="mt-3">
          In <strong>commerce and customer service</strong>, companies like DigitalGenius deploy NLP-powered systems such as AutoPilot and CoPilot that autonomously resolve common customer inquiries by analyzing incoming questions, generating responses, and calculating confidence levels — automatically delivering answers with high confidence while routing uncertain cases to human agents. This hybrid approach reduced average handling time by 30% and increased customer satisfaction to 90% for companies like TravelBird. The models continuously improve by learning from human feedback, making them increasingly accurate over time.
        </p>
        <p className="mt-3">
          In <strong>education</strong>, conversational agents use NLP for tutoring, assessment, and personalized learning. Chatbots integrated with gaming technologies create engaging e-learning environments where virtual characters adapt their communication style based on the learner&apos;s proficiency, preferences, and emotional state. These systems assess student inputs — essays, short answers, or spoken responses — and provide instant, targeted feedback that supports individual learning paths. The key to adaptivity lies in <strong>sentiment analysis</strong> (detecting user frustration or satisfaction), <strong>intent classification</strong> (understanding user goals), and <strong>contextual memory</strong> (maintaining conversation state). Modern Transformer-based architectures like BERT and XLNet have significantly improved these capabilities, enabling conversational systems that feel natural, respond appropriately to diverse communication styles, and deliver personalized experiences at scale.
        </p>
      </>
    ),
  },
  {
    id: 'q-reflection',
    label: 'Course Expectations',
    question: 'What are your expectations for ITC-C508?',
    answer: (
      <>
        <p>
          After studying the required readings on deep learning and natural language processing, I have developed a clearer picture of what ITC-C508 — E-Business: Higher Education and Intelligence Applications — will entail. My primary expectation is to gain a strong, applied understanding of how deep learning and NLP technologies drive real business transformation, from customer experience to operational efficiency.
        </p>
        <p className="mt-3">
          Specifically, I hope to master the following: (1) building and evaluating deep learning models for predictive business applications, particularly in customer analytics and risk management; (2) understanding NLP architectures like RNNs, Transformers, and how they power conversational AI and sentiment analysis; (3) learning practical techniques for addressing the &ldquo;black box&rdquo; problem in deep learning, such as LIME and SHAP, so I can build models that are not only accurate but also explainable and trustworthy.
        </p>
        <p className="mt-3">
          Mastering these competencies will directly support my academic and professional goals. As a BSIT student aspiring to become a data-driven technologist, the ability to design intelligent systems that solve concrete business problems — while ensuring transparency and ethical use — is essential. This course will equip me with the tools to bridge the gap between cutting-edge AI research and practical, deployable solutions. I look forward to building projects that demonstrate both technical proficiency and thoughtful consideration of the broader business and societal impact of these technologies.
        </p>
      </>
    ),
  },
]

const c508Records = [
  {
    id: 'c508-1',
    title: 'Course Expectations Essay',
    type: 'Written Output',
    date: 'Due Week 2',
    description: 'Essay responses on deep learning business applications, NLP conversational systems, and personal course expectations.',
    status: 'Submitted',
  },
  {
    id: 'c508-2',
    title: 'ePortfolio Design & Implementation',
    type: 'Hands-on Exercise',
    date: 'Due Week 2',
    description: 'Design and implement an ePortfolio space for ITC-C508 that meets rubric criteria for navigation, usability, accessibility, and multimedia elements.',
    status: 'In Progress',
  },
]

const periodTabs = ['prelim', 'midterm', 'finals']

const futureProofing = {
  midterm: { heading: 'Midterm', status: 'No Outputs Yet', summary: 'Midterm outputs will appear here once published.', links: [] },
  finals: { heading: 'Finals', status: 'Coming Soon', summary: 'Final period outputs will appear in this section.', links: [] },
}

function HomePage() {
  const [outputTab, setOutputTab] = useState('prelim')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactErrors, setContactErrors] = useState({})
  const [contactSent, setContactSent] = useState(false)

  const outputMap = { prelim: [], midterm: [], finals: [] }

  const latestProjects = []

  const activeOutputs = outputMap[outputTab] ?? []

  const future = futureProofing[outputTab]

  const validateContact = () => {
    const e = {}
    if (!contactForm.name.trim()) e.name = 'Please enter your name.'
    if (!contactForm.email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) e.email = 'Invalid email format.'
    if (!contactForm.message.trim()) e.message = 'Please write a message.'
    else if (contactForm.message.trim().length < 10) e.message = 'At least 10 characters.'
    setContactErrors(e)
    return Object.keys(e).length === 0
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setContactSent(false)
    if (!validateContact()) return
    setContactSent(true)
    setContactForm({ name: '', email: '', message: '' })
    setContactErrors({})
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <MotionSection
        id="home"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 pt-20 pb-16 sm:px-6 lg:grid-cols-2"
      >
        <MotionDiv variants={fadeUp} className="space-y-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            {identity.course}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {identity.name}
          </h1>
          <p className="text-lg font-medium opacity-80">{identity.heroTitle}</p>
          <p className="max-w-xl leading-relaxed opacity-70">
            {identity.aboutPreview}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => scrollTo('c508')}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-[#0f172a] transition hover:brightness-110"
            >
              View C508 Records <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('outputs')}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--card-border)] bg-card px-6 py-3 text-base font-semibold transition hover:opacity-80"
            >
              All Outputs <FileText className="h-4 w-4" />
            </button>
          </div>
        </MotionDiv>

        <MotionDiv variants={fadeUp} className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          <div className="absolute inset-0 rounded-full bg-[var(--accent-subtle)] blur-3xl" />
          <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-2xl border border-[var(--card-border)] bg-card sm:h-72 sm:w-72">
            <span className="font-display text-6xl font-bold text-[var(--accent)]">JV</span>
          </div>
        </MotionDiv>
      </MotionSection>

      {/* ─── Course Expectations ─── */}
      <MotionSection
        id="course-expectations"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto w-full">
          <MotionDiv className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent-subtle)] p-6 sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              ITC-C508
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">Course Expectations</h2>
            <p className="mt-3 max-w-4xl leading-relaxed opacity-80">
              Based on required readings on deep learning and natural language processing,
              the following responses outline my understanding and expectations for ITC-C508:
              E-Business, Higher Education and Intelligence Applications.
            </p>
            <div className="mt-6 space-y-4">
              {courseQA.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-xl border border-[var(--card-border)] bg-card">
                  <div className="px-5 py-4">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium sm:text-base">{item.question}</p>
                  </div>
                  <div className="animate-in border-t border-[var(--card-border)] px-5 py-4 text-sm leading-relaxed opacity-80">
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── Latest Projects ─── */}
      <MotionSection
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto w-full">
          <MotionDiv variants={fadeUp} className="mb-6">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Latest Projects</h2>
            <p className="mt-1 text-sm opacity-60">Recent course outputs and artifacts.</p>
          </MotionDiv>
          <MotionDiv variants={stagger} className="grid gap-5 md:grid-cols-3">
            {latestProjects.length > 0 ? (
              latestProjects.map((project) => (
                <MotionArticle key={project.id} variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-5 hover-card">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">{project.exerciseLabel}</p>
                  <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 line-clamp-2 leading-relaxed opacity-80">{project.description?.problem}</p>
                </MotionArticle>
              ))
            ) : (
              <MotionDiv variants={fadeUp} className="col-span-full rounded-xl border border-[var(--card-border)] bg-card p-8 text-center opacity-60">
                <p className="font-display text-xl font-semibold text-[var(--accent)]">No projects yet</p>
                <p className="mt-2">Projects will appear here once published.</p>
              </MotionDiv>
            )}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── About ─── */}
      <MotionSection
        id="about"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto w-full space-y-12">
          <MotionDiv variants={fadeUp} className="space-y-4">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">About</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Background & Skills</h2>
            <p className="max-w-3xl leading-relaxed opacity-70">{identity.fullBio}</p>
          </MotionDiv>

          <MotionDiv variants={stagger} className="grid gap-6 md:grid-cols-3">
            <MotionDiv variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-6">
              <h3 className="mb-4 inline-flex items-center gap-2 font-display text-xl font-semibold">
                <Code2 className="h-5 w-5 text-[var(--accent)]" /> Core Skills
              </h3>
              <ul className="space-y-2 text-sm opacity-70">
                {technicalSkills.core.map((s) => (
                  <li key={s} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" />{s}</li>
                ))}
              </ul>
            </MotionDiv>

            <MotionDiv variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-6">
              <h3 className="mb-4 inline-flex items-center gap-2 font-display text-xl font-semibold">
                <BookOpen className="h-5 w-5 text-[var(--accent)]" /> Web Stack
              </h3>
              <ul className="space-y-2 text-sm opacity-70">
                {technicalSkills.web.map((s) => (
                  <li key={s} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" />{s}</li>
                ))}
              </ul>
            </MotionDiv>

            <MotionDiv variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-6">
              <h3 className="mb-4 inline-flex items-center gap-2 font-display text-xl font-semibold">
                <Wrench className="h-5 w-5 text-[var(--accent)]" /> Tools
              </h3>
              <ul className="space-y-2 text-sm opacity-70">
                {technicalSkills.tools.map((s) => (
                  <li key={s} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[var(--accent)]" />{s}</li>
                ))}
              </ul>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-6">
            <h3 className="mb-4 inline-flex items-center gap-2 font-display text-xl font-semibold">
              <GraduationCap className="h-5 w-5 text-[var(--accent)]" /> Education
            </h3>
            {education.map((entry) => (
              <div key={entry.school} className="space-y-1">
                <p className="font-semibold">{entry.school}</p>
                <p className="text-sm opacity-70">{entry.degree}</p>
                <p className="text-sm opacity-50">{entry.level}</p>
              </div>
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── C508 Records ─── */}
      <MotionSection
        id="c508"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <MotionDiv variants={fadeUp} className="space-y-3">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">ITC-C508</p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">E-Business: Higher Education & Intelligence Applications</h2>
            <p className="max-w-3xl leading-relaxed opacity-80">
              This section serves as the workspace and record of academic learning for ITC-C508.
              Course outputs, projects, and competency demonstrations are documented here as they are completed throughout the term.
            </p>
          </MotionDiv>

          <MotionDiv variants={stagger} className="grid gap-5 sm:grid-cols-2">
            {c508Records.map((record) => (
              <MotionArticle key={record.id} variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-6 hover-card">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{record.type}</p>
                    <h3 className="text-xl font-semibold">{record.title}</h3>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    record.status === 'Submitted'
                      ? 'bg-emerald-500/15 text-emerald-400'
                      : 'bg-[var(--accent-subtle)] text-[var(--accent)]'
                  }`}>
                    {record.status}
                  </span>
                </div>
                <p className="mt-3 leading-relaxed opacity-80">{record.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs opacity-40">
                  <span className="inline-flex items-center gap-1"><FileText className="h-3 w-3" />{record.date}</span>
                </div>
              </MotionArticle>
            ))}
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-6 sm:flex sm:items-start sm:gap-5 sm:p-8">
            <Lightbulb className="mb-3 h-6 w-6 shrink-0 text-[var(--accent)] sm:mb-0 sm:mt-1" />
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold">About This Course</h3>
              <p className="leading-relaxed opacity-80">
                ITC-C508 explores the intersection of e-business strategies, higher education
                frameworks, and intelligent technologies. The course covers deep learning,
                natural language processing, and how these technologies drive business
                innovation and educational transformation.
              </p>
              <div className="flex items-center gap-2 text-xs opacity-40">
                <BookOpen className="h-3 w-3" />
                Jose Rizal University &middot; BSIT 402
              </div>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── Outputs ─── */}
      <MotionSection
        id="outputs"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto w-full space-y-8">
          <MotionDiv variants={fadeUp} className="space-y-3">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              {outputTab.charAt(0).toUpperCase() + outputTab.slice(1)} Period
            </p>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Course Outputs</h2>
            <p className="max-w-3xl leading-relaxed opacity-80">
              Browse projects by period. Each entry includes the output, description, skills, and reflection.
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="flex flex-wrap gap-3">
            {periodTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setOutputTab(tab)}
                className={`rounded-lg px-5 py-2.5 text-base font-semibold transition ${
                  outputTab === tab
                    ? 'bg-[var(--accent)] text-[#0f172a]'
                    : 'border border-[var(--card-border)] bg-card hover:opacity-80'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </MotionDiv>

          {activeOutputs.length > 0 ? (
            <MotionDiv variants={stagger} className="grid gap-6">
              {activeOutputs.map((item) => (
                <MotionArticle key={item.id} variants={fadeUp} className="overflow-hidden rounded-2xl border border-[var(--card-border)] bg-card">
                  <div className="border-b border-[var(--card-border)] px-6 py-4">
                    <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      {[item.exerciseLabel, item.exerciseCode].filter(Boolean).join(' ')}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
                  </div>
                </MotionArticle>
              ))}
            </MotionDiv>
          ) : (
            <MotionArticle variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-8 text-center">
              <p className="font-display text-xl font-semibold text-[var(--accent)]">{future?.heading ?? 'Period'}</p>
              <h3 className="mt-2 text-2xl font-bold">{future?.status ?? 'Coming Soon'}</h3>
              <p className="mt-3 mx-auto max-w-2xl leading-relaxed opacity-80">{future?.summary ?? 'No projects published yet for this period.'}</p>
            </MotionArticle>
          )}
        </div>
      </MotionSection>

      {/* ─── Contact ─── */}
      <MotionSection
        id="contact"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6"
      >
        <div className="w-full max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <MotionDiv variants={fadeUp} className="space-y-4 rounded-xl border border-[var(--card-border)] bg-card p-6">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">Contact</p>
            <h2 className="font-display text-3xl font-bold">Get in Touch</h2>
            <p className="leading-relaxed opacity-80">Have a question or collaboration idea? Feel free to reach out.</p>
            <div className="space-y-2 pt-2">
              <a href={`mailto:${identity.email}`} className="inline-flex items-center gap-2 text-base font-medium text-[var(--accent)] hover:underline">
                <Mail className="h-5 w-5" /> {identity.email}
              </a>
            </div>
          </MotionDiv>

          <form onSubmit={handleContactSubmit} noValidate className="space-y-4 rounded-xl border border-[var(--card-border)] bg-card p-6" aria-label="Contact form">
            {['name', 'email', 'message'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="mb-1 block text-base font-medium capitalize">{field}</label>
                {field === 'message' ? (
                  <textarea id={field} name={field} rows={5} value={contactForm[field]} onChange={(e) => setContactForm({ ...contactForm, [field]: e.target.value })}
                    className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--page-bg)] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
                    aria-invalid={Boolean(contactErrors[field])} />
                ) : (
                  <input id={field} name={field} type={field === 'email' ? 'email' : 'text'} value={contactForm[field]}
                    onChange={(e) => setContactForm({ ...contactForm, [field]: e.target.value })}
                    className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--page-bg)] px-4 py-3 text-base outline-none transition focus:border-[var(--accent)]"
                    aria-invalid={Boolean(contactErrors[field])} />
                )}
                {contactErrors[field] && <p className="mt-1 text-base text-rose-400">{contactErrors[field]}</p>}
              </div>
            ))}
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-base font-semibold text-[#0f172a] transition hover:brightness-110">
              <Send className="h-5 w-5" /> Send
            </button>
            {contactSent && <p className="text-base text-emerald-500">Message drafted. This demo form is ready for backend integration.</p>}
          </form>
        </div>
      </MotionSection>
    </>
  )
}

export default HomePage
