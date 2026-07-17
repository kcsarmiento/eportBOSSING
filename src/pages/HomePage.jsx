import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, BookOpen, CheckCircle, Code2, ExternalLink,
  GraduationCap, Mail, Send, Wrench,
} from 'lucide-react'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionArticle = motion.article

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const identity = {
  name: 'John Klien Villanueva',
  course: 'BSIT 402 — ITC-C508',
  email: 'johnklien.villanueva@my.jru.edu',
  aboutPreview: '4th year IT student building software solutions and documenting academic progress through this ePortfolio.',
  fullBio: 'I am a 4th year BSIT student at Jose Rizal University with a focus on software development and web technologies. This ePortfolio serves as my workspace and record of learning for ITC-C508 — showcasing projects, reflections, and competencies developed throughout the course.',
}

const skills = ['Python', 'JavaScript', 'PHP', 'React', 'Laravel', 'Tailwind CSS', 'REST APIs', 'Git']
const tools = ['VS Code', 'GitHub', 'Figma', 'Postman', 'Jupyter Notebook', 'SQL']

const education = [
  { school: 'Jose Rizal University', degree: 'BS Information Technology', level: '4th Year' },
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
    id: 'c508-1', title: 'Course Expectations Essay', type: 'Written Output', date: 'Due Week 2',
    description: 'Essay responses on deep learning business applications, NLP conversational systems, and personal course expectations.', status: 'Submitted',
  },
  {
    id: 'c508-2', title: 'ePortfolio Design & Implementation', type: 'Hands-on Exercise', date: 'Due Week 2',
    description: 'Design and implement an ePortfolio space for ITC-C508 compliant with rubric criteria.', status: 'In Progress',
  },
]

const periodTabs = ['prelim', 'midterm', 'finals']
const outputMap = { prelim: [], midterm: [], finals: [] }

const futureProofing = {
  midterm: { heading: 'Midterm', status: 'No Outputs Yet', summary: 'Midterm outputs will appear here once published.', links: [] },
  finals: { heading: 'Finals', status: 'Coming Soon', summary: 'Final period outputs will appear in this section.', links: [] },
}

function HomePage() {
  const [outputTab, setOutputTab] = useState('prelim')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactErrors, setContactErrors] = useState({})
  const [contactSent, setContactSent] = useState(false)

  const activeOutputs = outputMap[outputTab] ?? []
  const future = futureProofing[outputTab]

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const validateContact = () => {
    const e = {}
    if (!contactForm.name.trim()) e.name = 'Required'
    if (!contactForm.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) e.email = 'Invalid email'
    if (!contactForm.message.trim()) e.message = 'Required'
    else if (contactForm.message.trim().length < 10) e.message = 'At least 10 characters'
    setContactErrors(e)
    return Object.keys(e).length === 0
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setContactSent(false)
    if (!validateContact()) return
    setContactSent(true)
    setContactForm({ name: '', email: '', message: '' })
    setContactErrors({})
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <MotionSection
        id="home"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-5 pt-28 pb-16 sm:pt-36 sm:pb-24"
      >
        <MotionDiv variants={fadeUp} className="max-w-3xl">
          <span className="tag text-xs tracking-wider">{identity.course}</span>
          <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            {identity.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--page-text)]/60">
            {identity.aboutPreview}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => scrollTo('course-expectations')}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#0c0a09] transition hover:opacity-90"
            >
              Course Expectations <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('outputs')}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-card px-5 py-2.5 text-sm font-semibold transition hover:text-[var(--accent)]"
            >
              View Outputs <ExternalLink className="h-3.5 w-3.5" />
            </button>
          </div>
        </MotionDiv>

        <MotionDiv variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
          {skills.slice(0, 6).map((s) => (
            <span key={s} className="rounded-xl border border-[var(--card-border)] bg-card px-3 py-1.5 text-xs text-[var(--page-text)]/50">
              {s}
            </span>
          ))}
        </MotionDiv>
      </MotionSection>

      {/* ─── Course Expectations ─── */}
      <MotionSection
        id="course-expectations"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-5 py-20 sm:py-28"
      >
        <MotionDiv variants={fadeUp}>
          <span className="tag text-xs">ITC-C508</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Course Expectations</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--page-text)]/50">
            Responses to the required readings on deep learning and NLP for ITC-C508.
          </p>
        </MotionDiv>

        <div className="mt-10 space-y-6">
          {courseQA.map((item) => (
            <MotionDiv key={item.id} variants={fadeUp} className="overflow-hidden rounded-xl border border-[var(--card-border)] bg-card card-accent-top">
              <div className="p-5 sm:p-6">
                <p className="font-heading text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {item.label}
                </p>
                <p className="mt-1.5 font-heading text-lg font-semibold">{item.question}</p>
                <div className="mt-4 border-t border-[var(--card-border)] pt-4 text-sm leading-relaxed text-[var(--page-text)]/65">
                  {item.answer}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionSection>

      {/* ─── About ─── */}
      <MotionSection
        id="about"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-5 py-20 sm:py-28"
      >
        <MotionDiv variants={fadeUp}>
          <span className="tag text-xs">About</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Background</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--page-text)]/65">{identity.fullBio}</p>
        </MotionDiv>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <MotionDiv variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-5">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold"><Code2 className="h-4 w-4 text-[var(--accent)]" /> Skills</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <span key={s} className="rounded-lg border border-[var(--card-border)] px-2.5 py-1 text-xs text-[var(--page-text)]/60">{s}</span>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-5">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold"><Wrench className="h-4 w-4 text-[var(--accent)]" /> Tools</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {tools.map((s) => (
                <span key={s} className="rounded-lg border border-[var(--card-border)] px-2.5 py-1 text-xs text-[var(--page-text)]/60">{s}</span>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv variants={fadeUp} className="sm:col-span-2 rounded-xl border border-[var(--card-border)] bg-card p-5">
            <h3 className="flex items-center gap-2 font-heading text-base font-semibold"><GraduationCap className="h-4 w-4 text-[var(--accent)]" /> Education</h3>
            <div className="mt-2">
              {education.map((e) => (
                <p key={e.school} className="text-sm"><span className="font-medium">{e.school}</span> &middot; {e.degree} &middot; {e.level}</p>
              ))}
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── C508 Records ─── */}
      <MotionSection
        id="c508"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-5 py-20 sm:py-28"
      >
        <MotionDiv variants={fadeUp}>
          <span className="tag text-xs">ITC-C508</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Course Records</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--page-text)]/50">
            Academic workspace for ITC-C508 — E-Business: Higher Education and Intelligence Applications.
          </p>
        </MotionDiv>

        <MotionDiv variants={stagger} className="mt-10 space-y-4">
          {c508Records.map((record) => (
            <MotionArticle key={record.id} variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-5 transition hover:border-[var(--accent)]/30">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">{record.type}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      record.status === 'Submitted'
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'bg-[var(--accent-subtle)] text-[var(--accent)]'
                    }`}>
                      {record.status === 'Submitted' && <CheckCircle className="mr-0.5 inline h-2.5 w-2.5" />}
                      {record.status}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{record.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--page-text)]/60">{record.description}</p>
                  <p className="text-xs text-[var(--page-text)]/30">{record.date}</p>
                </div>
              </div>
            </MotionArticle>
          ))}
        </MotionDiv>
      </MotionSection>

      {/* ─── Outputs ─── */}
      <MotionSection
        id="outputs"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-5 py-20 sm:py-28"
      >
        <MotionDiv variants={fadeUp}>
          <span className="tag text-xs">{outputTab.charAt(0).toUpperCase() + outputTab.slice(1)}</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Outputs</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-[var(--page-text)]/50">
            Browse course projects by period.
          </p>
        </MotionDiv>

        <MotionDiv variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
          {periodTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setOutputTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                outputTab === tab
                  ? 'bg-[var(--accent)] text-[#0c0a09]'
                  : 'border border-[var(--card-border)] bg-card text-[var(--page-text)]/50 hover:text-[var(--page-text)]'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </MotionDiv>

        <MotionDiv variants={stagger} className="mt-8">
          {activeOutputs.length > 0 ? (
            <div className="space-y-4">
              {activeOutputs.map((item) => (
                <MotionArticle key={item.id} variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-5">
                  <p className="font-heading text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {[item.exerciseLabel, item.exerciseCode].filter(Boolean).join(' ')}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold">{item.title}</h3>
                </MotionArticle>
              ))}
            </div>
          ) : (
            <MotionArticle variants={fadeUp} className="rounded-xl border border-[var(--card-border)] bg-card p-8 text-center">
              <p className="font-heading text-lg font-semibold text-[var(--accent)]">{future?.heading ?? 'Period'}</p>
              <p className="mt-2 text-2xl font-bold">{future?.status ?? 'Coming Soon'}</p>
              <p className="mt-2 text-sm text-[var(--page-text)]/50">{future?.summary ?? 'No projects published yet.'}</p>
            </MotionArticle>
          )}
        </MotionDiv>
      </MotionSection>

      {/* ─── Contact ─── */}
      <MotionSection
        id="contact"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-5 py-20 sm:py-28"
      >
        <MotionDiv variants={fadeUp} className="text-center">
          <span className="tag text-xs">Contact</span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Get in Touch</h2>
          <p className="mt-3 text-[var(--page-text)]/50">Have a question? Feel free to reach out.</p>
        </MotionDiv>

        <MotionDiv variants={fadeUp} className="mt-10 rounded-xl border border-[var(--card-border)] bg-card p-6 sm:p-8">
          <form onSubmit={handleContactSubmit} noValidate aria-label="Contact form" className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {['name', 'email'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="mb-1.5 block text-sm font-medium capitalize">{field}</label>
                  <input id={field} name={field} type={field === 'email' ? 'email' : 'text'} value={contactForm[field]}
                    onChange={(e) => setContactForm({ ...contactForm, [field]: e.target.value })}
                    className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--accent)]"
                    aria-invalid={Boolean(contactErrors[field])} />
                  {contactErrors[field] && <p className="mt-1 text-xs text-rose-400">{contactErrors[field]}</p>}
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={4} value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--accent)]"
                aria-invalid={Boolean(contactErrors.message)} />
              {contactErrors.message && <p className="mt-1 text-xs text-rose-400">{contactErrors.message}</p>}
            </div>
            <div className="flex items-center gap-4">
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#0c0a09] transition hover:opacity-90">
                <Send className="h-3.5 w-3.5" /> Send
              </button>
              {contactSent && <p className="text-sm text-emerald-400/70">Ready for backend integration.</p>}
            </div>
          </form>
          <div className="mt-6 pt-6 border-t border-[var(--card-border)]">
            <a href={`mailto:${identity.email}`} className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:underline">
              <Mail className="h-4 w-4" /> {identity.email}
            </a>
          </div>
        </MotionDiv>
      </MotionSection>
    </>
  )
}

export default HomePage
