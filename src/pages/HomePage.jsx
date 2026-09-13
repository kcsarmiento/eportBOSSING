import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ChevronDown, ExternalLink, FileText, Send } from 'lucide-react'

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
  bio: '4th year IT student at Jose Rizal University focused on software development. This ePortfolio is a workspace and record of my learning for ITC-C508.',
}

const skills = ['Python', 'JavaScript', 'React', 'PHP', 'Laravel', 'Tailwind CSS', 'REST APIs', 'Git', 'SQL', 'Figma']

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
          However, deep learning models are often criticized as &ldquo;black boxes&rdquo; because their internal decision-making processes are not easily interpretable. To address this challenge, organizations can implement <strong>LIME</strong> (Local Interpretable Model-agnostic Explanations) and <strong>SHAP</strong> (SHapley Additive exPlanations) — post-hoc explainability techniques that approximate which input features most influenced a specific prediction. For churn prediction, these tools reveal whether a customer&apos;s likelihood to churn was driven by factors like decreased usage, unresolved support tickets, or billing issues. Additionally, <strong>attention mechanisms</strong> in neural networks highlight which input parts the model focused on, while <strong>confidence scoring</strong> flags low-certainty predictions for human review. Combining these approaches makes deep learning systems more transparent, interpretable, and trustworthy.
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

const periodTabs = ['prelim', 'midterm', 'finals']

const prelimOutputs = [
  {
    id: 'ww-p1',
    exerciseLabel: 'Hands-on Exercise',
    exerciseCode: 'WW-P1',
    title: 'ePortfolio — Readings and Expectations',
    date: 'Jul 17th',
    week: 'WEEK 01 · Jul 13–18',
    status: 'Returned',
    description: 'Design and build a personal ePortfolio for ITC-C508 that shows course skills, technical writing, and project work using React, Tailwind CSS, and Framer Motion, deployed on Vercel.',
    skills: [
      'React component structure and state management',
      'Tailwind CSS styling and responsive design',
      'Framer Motion animations',
      'Dark mode with system preference detection',
      'Data-driven content using separate data files',
      'Web accessibility: headings, alt text, keyboard navigation',
    ],
    reflection: {
      growth: 'I learned to treat an ePortfolio as a real interface rather than a collection of screenshots. I practiced turning course requirements into reusable sections, responsive layouts, accessible controls, and a consistent visual system.',
      critique: 'My first priority was making the page feel complete, so the content structure and academic evidence could have been planned more deliberately before styling the interface.',
      alternative: 'I would begin with a content map and an accessibility checklist, then build the smallest working version before adding animation, theme switching, and visual polish.',
      goals: {
        shortTerm: 'Review the portfolio with keyboard navigation and tighten the organization of each activity record.',
        longTerm: 'Build polished, accessible web applications that communicate technical work clearly to both technical and non-technical audiences.',
      },
    },
    resources: [],
  },
  {
    id: 'ww-p2',
    exerciseLabel: 'Written Output',
    exerciseCode: 'WW-P2',
    title: 'Introduction to NLP Concepts',
    date: 'Jul 17th',
    week: 'WEEK 02 · Jul 20–25',
    status: 'Returned',
    description: 'A written output on natural language processing: what NLP is, its main concepts, and how NLP research is applied in business. It covers text processing, RNNs, Transformers, and sentiment analysis.',
    skills: [
      'Explaining NLP concepts in plain language',
      'Understanding tokenization, embeddings, and language models',
      'Comparing RNNs and Transformers',
      'Connecting NLP research to business use cases like chatbots',
    ],
    reflection: {
      growth: 'I developed a clearer mental model of how language moves through an NLP system, from preprocessing and representation to prediction. I can now explain why model architecture affects how context is handled.',
      critique: 'The discussion explains the concepts well, but it remains mostly theoretical and does not yet demonstrate how the ideas behave on an actual text dataset or product workflow.',
      alternative: 'I would pair the written explanation with a small comparison using the same text samples, showing how tokenization, sentiment scoring, and context change the result.',
      goals: {
        shortTerm: 'Create a small sentiment analysis script and document what happens when the input text is ambiguous or informal.',
        longTerm: 'Apply NLP to a useful business tool where language data can support faster, clearer, and more informed decisions.',
      },
    },
    previews: [{
      label: 'PDF Preview',
      href: 'https://drive.google.com/file/d/1pRnyWby-CAK_5VjjxWADHBFV3yg7J2no/preview',
    }],
    resources: [],
  },
  {
    id: 'pt-p1',
    exerciseLabel: 'Hands-on Exercise',
    exerciseCode: 'PT-P1',
    title: 'Deep Learning (Neural Networks)',
    date: 'Jul 23rd',
    week: 'WEEK 03 · Jul 27–Aug 01',
    status: 'Returned',
    description: 'An exercise introducing deep learning and modelling: building and training a neural network, understanding layers, activation functions, loss, and how a model learns from data.',
    skills: [
      'Building neural network models',
      'Understanding layers, weights, and activation functions',
      'Training and evaluating a model',
      'Interpreting training results',
    ],
    reflection: {
      growth: 'I moved from describing neural networks to working with their actual building blocks: layers, weights, activations, loss, and evaluation. Seeing the training process change the model made the theory more concrete.',
      critique: 'Getting the network to train successfully can make the task feel finished, but a working run alone does not explain whether the model learned a useful pattern or simply fit the training data.',
      alternative: 'I would establish a simple baseline first, record both training and validation behavior, and explain one prediction so the final result is supported by evidence rather than output alone.',
      goals: {
        shortTerm: 'Practice reading loss and accuracy curves and write a short explanation of what they reveal about model learning.',
        longTerm: 'Develop reliable machine learning solutions that combine implementation skill with careful interpretation of results.',
      },
    },
    previews: [{
      label: 'PDF Preview',
      href: 'https://drive.google.com/file/d/1lcO8esEgqBJVAZ-GdtLSDNus9JyjS0LH/preview',
    }],
    resources: [],
  },
  {
    id: 'pt-p2',
    exerciseLabel: 'Performance Task',
    exerciseCode: 'PT-P2',
    title: 'Neural Network Training and Testing (Hyperparameters)',
    date: 'Jul 30th',
    week: 'WEEK 04 · Aug 03–08',
    status: 'Returned',
    description: 'A performance task on neural network training and testing: tuning hyperparameters such as learning rate, batch size, and number of layers to improve a model’s performance, then testing the trained model.',
    skills: [
      'Hyperparameter tuning: learning rate, batch size, and layers',
      'Training versus testing evaluation',
      'Reading training curves and metrics',
      'Systematic experimentation',
    ],
    reflection: {
      growth: 'I learned that model improvement is an experimental process. Learning rate, batch size, and layer choices each influence training behavior, so performance needs to be compared using consistent measurements.',
      critique: 'It is easy to focus on the best score and overlook why a configuration performed differently. The experiment would be stronger with a clearer record of each run and a discussion of trade-offs such as speed, stability, and generalization.',
      alternative: 'I would change one major variable at a time, keep an experiment table, and select the final configuration using validation results instead of relying only on the final test outcome.',
      goals: {
        shortTerm: 'Run a small controlled set of hyperparameter experiments and summarize the result of each change.',
        longTerm: 'Use reproducible evaluation practices when developing data-driven systems for real users and business needs.',
      },
    },
    previews: [
      {
        label: 'PDF Preview',
        href: 'https://drive.google.com/file/d/1du6pIigU2I0OeYATRO4DGZwjsQcX3C9t/preview',
      },
    ],
    notebook: {
      href: 'https://colab.research.google.com/drive/19uADROHaJl2LE3Cno25ps7dCl_Edzih5',
    },
    resources: [],
  },
]

const midtermOutputs = [
  {
    id: 'pt-m1-rag',
    exerciseLabel: 'Lab Exercise',
    exerciseCode: 'PT-M1',
    title: 'Building and Evaluating a RAG Chatbot',
    date: 'Sep 9th',
    week: 'WEEK 08 · Aug 31–Sep 05',
    status: 'Turned in',
    description: 'Build and evaluate a Retrieval-Augmented Generation (RAG) chatbot as an introduction to large language models and LLM operations.',
    skills: [
      'RAG chatbot design and implementation',
      'Connecting retrieval with large language model responses',
      'Evaluating chatbot answers for relevance and quality',
      'Understanding foundational LLM Ops workflows',
    ],
    reflection: {
      growth: 'I learned how retrieval and generation work together in a RAG chatbot. The activity helped me see that a useful answer depends not only on the language model, but also on the quality and relevance of the information retrieved for it.',
      critique: 'A chatbot can sound convincing even when its retrieved context is incomplete or poorly matched. The evaluation should therefore challenge the system with questions that expose unsupported answers, missing information, and retrieval mistakes.',
      alternative: 'I would create a small evaluation set before improving the chatbot, compare answers with and without retrieved context, and record evidence for relevance, groundedness, and reliability.',
      goals: {
        shortTerm: 'Expand the chatbot evaluation with edge cases and inspect which retrieved passages support each answer.',
        longTerm: 'Build trustworthy AI applications that combine strong user experience with measurable, grounded, and maintainable LLM Ops practices.',
      },
    },
    resources: [],
  },
]

const outputMap = { prelim: prelimOutputs, midterm: midtermOutputs, finals: [] }

function HomePage() {
  const [outputTab, setOutputTab] = useState('prelim')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactErrors, setContactErrors] = useState({})
  const [contactSent, setContactSent] = useState(false)

  const validateContact = () => {
    const e = {}
    if (!contactForm.name.trim()) e.name = 'Required'
    if (!contactForm.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) e.email = 'Invalid'
    if (!contactForm.message.trim()) e.message = 'Required'
    else if (contactForm.message.trim().length < 10) e.message = 'Too short'
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
        className="min-h-screen flex items-center px-6 sm:px-10"
      >
        <div className="w-full max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr,auto] items-center">
          <div>
            <MotionDiv variants={fadeUp} className="max-w-4xl">
              <span className="chip text-xs tracking-widest uppercase">{identity.course}</span>
              <h1 className="huge-text mt-6 text-[clamp(2.8rem,12vw,7rem)] leading-[0.9]">
                {identity.name.split(' ')[0]}<br />
                {identity.name.split(' ').slice(1).join(' ')}
              </h1>
            </MotionDiv>

            <MotionDiv variants={fadeUp} className="mt-6 max-w-xl">
              <p className="text-base sm:text-lg leading-relaxed text-[var(--muted)]">{identity.bio}</p>
            </MotionDiv>

            <MotionDiv variants={fadeUp} className="mt-10 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-[var(--card-border)] bg-card px-3 py-1 text-xs text-[var(--muted)]">{s}</span>
              ))}
            </MotionDiv>
          </div>

          <MotionDiv variants={fadeUp} className="shrink-0">
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 overflow-hidden rounded-3xl border border-[var(--card-border)] bg-card">
              <img src="/bossing.png" alt="Profile" className="h-full w-full object-cover" />
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── Course Expectations ─── */}
      <MotionSection
        id="course-expectations"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="bg-section-b border-y border-[var(--card-border)] transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <MotionDiv variants={fadeUp}>
            <span className="chip text-xs">ITC-C508</span>
            <h2 className="huge-text mt-4 text-4xl sm:text-5xl">Course<br />Expectations</h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Responses to the required readings on deep learning and NLP.
            </p>
          </MotionDiv>

          <div className="mt-12 space-y-6">
            {courseQA.map((item) => (
              <MotionDiv key={item.id} variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">{item.label}</p>
                <p className="mt-2 text-xl font-semibold sm:text-2xl">{item.question}</p>
                <div className="mt-5 border-t border-[var(--card-border)] pt-5 text-sm leading-relaxed text-[var(--muted)]">
                  {item.answer}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* ─── About ─── */}
      <MotionSection
        id="about"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="bg-section-a transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <MotionDiv variants={fadeUp}>
            <span className="chip text-xs">About</span>
            <h2 className="huge-text mt-4 text-4xl sm:text-5xl">
              Background<br />&amp; Skills
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">{identity.bio}</p>
          </MotionDiv>

          <MotionDiv variants={stagger} className="mt-12 grid gap-5 sm:grid-cols-2">
            <MotionDiv variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-6">
              <h3 className="font-heading text-base font-semibold">Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full border border-[var(--card-border)] px-3 py-1 text-xs text-[var(--muted)]">{s}</span>
                ))}
              </div>
            </MotionDiv>
            <MotionDiv variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-6">
              <h3 className="font-heading text-base font-semibold">Education</h3>
              <div className="mt-3 text-sm text-[var(--muted)]">
                <p className="text-[var(--page-text)] font-medium">Jose Rizal University</p>
                <p>BS Information Technology &middot; 4th Year</p>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── Outputs ─── */}
      <MotionSection
        id="outputs"
        variants={stagger}
        initial="hidden"
        animate="show"
        className="bg-section-a transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <MotionDiv variants={fadeUp}>
            <span className="chip text-xs">{outputTab.charAt(0).toUpperCase() + outputTab.slice(1)}</span>
            <h2 className="huge-text mt-4 text-4xl sm:text-5xl">Outputs</h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">Browse lab activities, written outputs, and performance tasks by period. Each entry includes its learning reflection.</p>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {periodTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setOutputTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  outputTab === tab
                    ? 'bg-[var(--accent)] text-white'
                    : 'border border-[var(--card-border)] bg-card text-[var(--muted)] hover:text-[var(--page-text)]'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </MotionDiv>

          <MotionDiv variants={stagger} className="mt-8">
            {outputMap[outputTab]?.length > 0 ? (
              <div className="space-y-4">
                {outputMap[outputTab].map((item) => (
                  <MotionArticle key={item.id} variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                            {[item.exerciseLabel, item.exerciseCode].filter(Boolean).join(' ')}
                          </p>
                          <span className="chip !text-[10px] !bg-emerald-500/10 !text-emerald-600">{item.status}</span>
                        </div>
                        <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{item.title}</h3>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">{item.week} · {item.date}</p>
                      </div>
                    </div>

                    {item.previews?.length > 0 && (
                      <div className={`mt-5 border-t border-[var(--card-border)] pt-5 ${item.notebook ? 'grid gap-4 md:grid-cols-2' : ''}`}>
                        {item.previews.map((preview) => (
                          <div key={preview.label}>
                            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">{preview.label}</p>
                            <div className="mt-3 overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)]">
                              <iframe
                                src={preview.href}
                                title={`${item.title} ${preview.label.toLowerCase()}`}
                                className="h-[360px] w-full sm:h-[460px]"
                              />
                            </div>
                          </div>
                        ))}
                        {item.notebook && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">Notebook</p>
                            <div className="mt-3 flex min-h-[360px] flex-col items-center justify-center rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] p-6 text-center sm:min-h-[460px]">
                              <BookOpen className="h-8 w-8 text-[var(--accent)]" aria-hidden="true" />
                              <p className="mt-4 text-sm font-semibold">No preview available</p>
                              <p className="mt-1 max-w-xs text-xs text-[var(--muted)]">Open the notebook file to view the activity.</p>
                              <a href={item.notebook.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white transition hover:brightness-110">
                                Open notebook
                                <ExternalLink className="h-3 w-3" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="mt-5 grid gap-6 border-t border-[var(--card-border)] pt-5 lg:grid-cols-[1.1fr,0.9fr]">
                      <div>
                        <p className="text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
                        <div className="mt-5">
                          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">Skills developed</p>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {item.skills.map((skill) => (
                              <li key={skill} className="flex gap-2 text-sm text-[var(--muted)]">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <details className="group rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] p-4">
                          <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-semibold marker:hidden">
                            <BookOpen className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
                            <span>Read reflection</span>
                            <ChevronDown className="ml-auto h-4 w-4 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
                          </summary>
                          <div className="mt-4 space-y-4 border-t border-[var(--card-border)] pt-4">
                            {[
                              ['Growth', item.reflection.growth],
                              ['Critique', item.reflection.critique],
                              ['Alternative approach', item.reflection.alternative],
                            ].map(([label, text]) => (
                              <div key={label}>
                                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">{label}</p>
                                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{text}</p>
                              </div>
                            ))}
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">Goals</p>
                              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]"><span className="font-semibold text-[var(--page-text)]">Short-term:</span> {item.reflection.goals.shortTerm}</p>
                              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]"><span className="font-semibold text-[var(--page-text)]">Long-term:</span> {item.reflection.goals.longTerm}</p>
                            </div>
                          </div>
                        </details>

                        {item.resources.length > 0 ? (
                          <div className="flex flex-wrap gap-2">
                            {item.resources.map((resource) => (
                              <a key={resource.label} href={resource.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] px-4 py-2 text-xs font-semibold text-[var(--accent)] transition hover:bg-[var(--accent-subtle)]">
                                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                                {resource.label}
                                <ExternalLink className="h-3 w-3" aria-hidden="true" />
                              </a>
                            ))}
                          </div>
                        ) : !item.previews?.length ? (
                          <p className="text-xs text-[var(--muted)]">PDF and notebook links will be added here.</p>
                        ) : null}
                      </div>
                    </div>
                  </MotionArticle>
                ))}
              </div>
            ) : (
              <MotionArticle variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-10 text-center">
                <p className="huge-text text-2xl text-[var(--accent)]">{outputTab === 'midterm' ? 'Midterm' : outputTab === 'finals' ? 'Finals' : 'Prelim'}</p>
                <p className="mt-2 text-xl font-semibold">No Outputs Yet</p>
                <p className="mt-2 text-sm text-[var(--muted)]">Projects will appear here once published.</p>
              </MotionArticle>
            )}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── Contact ─── */}
      <MotionSection
        id="contact"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="bg-section-b border-t border-[var(--card-border)] transition-colors"
      >
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <MotionDiv variants={fadeUp} className="text-center">
            <span className="chip text-xs">Contact</span>
            <h2 className="huge-text mt-4 text-4xl sm:text-5xl">Get in Touch</h2>
            <p className="mt-4 text-[var(--muted)]">Have a question? Reach out.</p>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="mt-12 rounded-2xl border border-[var(--card-border)] bg-card p-6 sm:p-8">
            <form onSubmit={handleContactSubmit} noValidate aria-label="Contact form" className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="mb-1.5 block text-sm font-medium capitalize">{field}</label>
                    <input id={field} name={field} type={field === 'email' ? 'email' : 'text'} value={contactForm[field]}
                      onChange={(e) => setContactForm({ ...contactForm, [field]: e.target.value })}
                      className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--accent)]"
                      aria-invalid={Boolean(contactErrors[field])} />
                    {contactErrors[field] && <p className="mt-1 text-xs text-rose-500">{contactErrors[field]}</p>}
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea id="message" name="message" rows={4} value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] px-4 py-2.5 text-sm outline-none transition focus:border-[var(--accent)]"
                  aria-invalid={Boolean(contactErrors.message)} />
                {contactErrors.message && <p className="mt-1 text-xs text-rose-500">{contactErrors.message}</p>}
              </div>
              <div className="flex items-center gap-4">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
                  <Send className="h-3.5 w-3.5" /> Send
                </button>
                {contactSent && <p className="text-sm text-emerald-600 dark:text-emerald-400">Ready for backend.</p>}
              </div>
            </form>
            <div className="mt-6 pt-6 border-t border-[var(--card-border)]">
              <a href={`mailto:${identity.email}`} className="text-sm text-[var(--accent)] hover:underline">{identity.email}</a>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>
    </>
  )
}

export default HomePage
