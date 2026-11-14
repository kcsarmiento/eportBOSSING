import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, ChevronDown, ExternalLink, Send } from 'lucide-react'

const MotionSection = motion.section
const MotionDiv = motion.div
const MotionArticle = motion.article

const entranceVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

const staggerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const viewport = { once: true, amount: 'some' }

const identity = {
  name: 'John Klien Villanueva',
  course: 'BSIT 402 — ITC-C508',
  email: 'johnklien.villanueva@my.jru.edu',
  tagline:
    'Final-year IT student at Jose Rizal University, building accessible web applications with React and shipping them to real users.',
  about:
    'I am in my final year of BS Information Technology at Jose Rizal University, where I focus on full-stack web development. Most of my work starts as a plain layout and grows into a React interface backed by a REST API — I care about components that are easy to read, markup that works with a keyboard, and finishing something that actually runs. Between coursework I build small tools for student organisations and keep notes on what broke along the way and why.',
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
          Deep learning models, particularly deep feed-forward neural networks, excel at this task because they can automatically learn hierarchical features from raw data without manual feature engineering. The assigned course reading on deep learning in business reports that a model trained on billions of call records reached 77.9% AUC in predicting customer churn, compared with 73.2% AUC for a traditional approach such as a random forest. The same reading reports that a 5% improvement in customer retention can raise profits by 25% to 95%, which is what makes accurate churn scoring commercially valuable.
        </p>
        <p className="mt-3">
          However, deep learning models are often criticized as &ldquo;black boxes&rdquo; because their internal decision-making processes are not easily interpretable. To address this challenge, organizations can implement <strong>LIME</strong> (Local Interpretable Model-agnostic Explanations) and <strong>SHAP</strong> (SHapley Additive exPlanations) — post-hoc explainability techniques that approximate which input features most influenced a specific prediction. For churn prediction, these tools reveal whether a customer&apos;s likelihood to churn was driven by factors like decreased usage, unresolved support tickets, or billing issues. Additionally, <strong>attention mechanisms</strong> in neural networks highlight which input parts the model focused on, while <strong>confidence scoring</strong> flags low-certainty predictions for human review. Combining these approaches makes deep learning systems more transparent, interpretable, and trustworthy.
        </p>
        <p className="mt-4 border-t border-[var(--card-border)] pt-3 text-xs text-[var(--muted)]">
          Figures quoted from the ITC-C508 assigned reading on deep learning in business.
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
        <p className="mt-4 border-t border-[var(--card-border)] pt-3 text-xs text-[var(--muted)]">
          Figures quoted from the ITC-C508 assigned reading on NLP in business.
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

const periodLabel = {
  prelim: 'Prelim',
  midterm: 'Midterm',
  finals: 'Finals',
}

const statusLabel = {
  returned: 'Returned',
  submitted: 'Submitted',
}

const prelimOutputs = [
  {
    id: 'ww-p1',
    exerciseLabel: 'Hands-on Exercise',
    exerciseCode: 'WW-P1',
    title: 'ePortfolio — Readings and Expectations',
    author: identity.name,
    date: 'Jul 17th',
    week: 'WEEK 01 · Jul 13–18',
    status: 'returned',
    description: 'Design and build a personal ePortfolio for ITC-C508 that shows course skills, technical writing, and project work using React, Tailwind CSS, and Framer Motion, deployed on Vercel.',
    skills: [
      'React component structure and state management',
      'Tailwind CSS styling and responsive design',
      'Framer Motion animations',
      'Dark mode with system preference detection',
      'Structuring page content as data the view can map over',
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
  },
  {
    id: 'ww-p2',
    exerciseLabel: 'Written Output',
    exerciseCode: 'WW-P2',
    title: 'Introduction to NLP Concepts',
    author: identity.name,
    date: 'Jul 22nd',
    week: 'WEEK 02 · Jul 20–25',
    status: 'returned',
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
  },
  {
    id: 'pt-p1',
    exerciseLabel: 'Hands-on Exercise',
    exerciseCode: 'PT-P1',
    title: 'Deep Learning (Neural Networks)',
    author: identity.name,
    date: 'Jul 29th',
    week: 'WEEK 03 · Jul 27–Aug 01',
    status: 'returned',
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
  },
  {
    id: 'pt-p2',
    exerciseLabel: 'Performance Task',
    exerciseCode: 'PT-P2',
    title: 'Neural Network Training and Testing (Hyperparameters)',
    author: identity.name,
    date: 'Aug 5th',
    week: 'WEEK 04 · Aug 03–08',
    status: 'returned',
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
      href: 'https://drive.google.com/file/d/19uADROHaJl2LE3Cno25ps7dCl_Edzih5/view?usp=sharing',
    },
  },
  {
    id: 'prelim-exam',
    kind: 'exam',
    exerciseLabel: 'Examination',
    title: 'Prelim Exam',
    author: identity.name,
    score: { earned: 12, total: 30 },
  },
]

const midtermOutputs = [
  {
    id: 'pt-m1-rag',
    exerciseLabel: 'Performance Task',
    exerciseCode: 'PT-M1',
    title: 'Building and Evaluating a RAG Chatbot',
    author: identity.name,
    date: 'Sep 3rd',
    week: 'WEEK 08 · Aug 31–Sep 05',
    status: 'submitted',
    description: 'Build and evaluate a domain-restricted RAG chatbot for Aetherfall Chronicles lore. The paper documents how three source documents become 32 searchable chunks using all-MiniLM-L6-v2 embeddings and ChromaDB, with openai/gpt-oss-20b generating answers from the retrieved context.',
    skills: [
      'Document chunking, embeddings, and vector retrieval',
      'Grounding answers in retrieved source passages',
      'Testing in-domain answers and out-of-domain refusals',
      'Interpreting fallback behavior and evaluation limits',
    ],
    reflection: {
      growth: 'Building the Aetherfall Chronicles chatbot helped me connect document chunking, embeddings, retrieval, and generation into one working pipeline. The most useful lesson came from the stress test: removing the fallback instruction and raising the temperature still produced refusals, but their wording changed. I learned to distinguish the observed benefit of a consistent, machine-readable refusal from an assumption that the instruction alone prevented hallucinations.',
      critique: 'The four in-domain questions and one out-of-domain question provide a useful starting point, but they do not establish reliability across a wider range of inputs. No factual hallucinations or false refusals were observed in the reported tests, yet retrieving three chunks can still miss an answer that exists in the corpus. Changing both temperature and the fallback instruction also limits how confidently I can attribute the behavior to either change alone.',
      alternative: 'I would test temperature and the fallback instruction separately, then expand the question set with ambiguous prompts and answerable questions whose evidence spans multiple chunks. I would compare chunk sizes, retrieval depth, and a reranking stage while recording retrieved passages, factual support, and false refusals for each run.',
      goals: {
        shortTerm: 'Create a broader evaluation set, test one configuration change at a time, and check whether each answer or refusal is justified by the retrieved evidence.',
        longTerm: 'Apply these retrieval and evaluation practices to useful AI applications with traceable answers, clear handling of unanswered questions, and securely managed credentials.',
      },
    },
    previews: [{
      label: 'PDF Preview',
      href: 'https://drive.google.com/file/d/1t7a2KkCl8svJ0uLLPTLF-t2dfSZYOGly/preview',
    }],
  },
  {
    id: 'ww-m2',
    exerciseLabel: 'Written Work',
    exerciseCode: 'WW-M2',
    title: 'Project Proposal — HandaBot RAG Chatbot',
    author: 'Carl Angelo Patano, Jonas Joaquin Sibug, and John Klien Villanueva',
    group: true,
    status: 'submitted',
    description: 'A group concept paper proposing HandaBot, a retrieval-augmented generation chatbot grounded in three official Philippine DRRM documents, the DILG-LGA Disaster Preparedness Manual, the NDRRMP 2020–2030, and the NDRP for Hydro-Meteorological Hazards, that gives residents of Antipolo City fast, traceable answers to disaster-preparedness questions. The study tests whether retrieval measurably improves answer correctness and groundedness over a non-RAG baseline on the same model, with SEA-LION v4 as the preliminary generator.',
    skills: [
      'Scoping a RAG system to a fixed, authoritative knowledge base',
      'Writing a comparative research question that isolates one variable',
      'Justifying source documents and checking their reliability',
      'Defining metrics: Precision@k, Recall@k, correctness, groundedness, abstention',
      'Matching a language model to Filipino and Taglish users',
    ],
    reflection: {
      growth: 'Writing this paper was the first time I had to defend a design before building anything. Our first draft argued that a disaster chatbot would be useful; the version we submitted had to argue something narrower and testable, whether retrieval improves correctness and groundedness over the same model answering without retrieval. Fixing the three source documents, writing the gold answers, and naming Precision@k, Recall@k, groundedness and abstention first meant the project had a scoreboard before it had a line of code.',
      critique: 'The weakness is that we settled two large decisions on judgement rather than evidence. We picked SEA-LION v4 because it handles Filipino and Taglish, but we never ran a second model against it before writing it into the plan, and the Antipolo City scope came from familiarity rather than a needs assessment. Our questions also grew out of the documents themselves, which makes retrieval look easier than it will once residents ask short, messy questions about their own barangay.',
      alternative: 'I would spend the first week with one document and ten real questions gathered from residents, then let whatever broke decide the metrics, the chunking and the model, instead of promising all of it in the proposal.',
      goals: {
        shortTerm: 'Build the gold question set from questions people actually ask, and check retrieval on that set before generation.',
        longTerm: 'Put official, high-stakes information within reach of people who will never read a hundred-page manual.',
      },
    },
    previews: [
      {
        label: 'Proposal Paper',
        href: 'https://docs.google.com/document/d/17Mbc7g0x33L3PITbLeAQGDN7k3ox4_hr/preview',
      },
      {
        label: 'Slide Deck',
        href: 'https://docs.google.com/presentation/d/1IEhec1_O2Z-Pwob4SDI0Jw82Rxc0f9U6/embed?start=false&loop=false&delayms=3000',
      },
      {
        label: 'Revised Proposal Deck',
        href: 'https://docs.google.com/presentation/d/1w3vHwrCHMfVFlnrh4FlMVb_0eRE5fXk2/embed?start=false&loop=false&delayms=3000',
      },
    ],
  },
  {
    id: 'ww-m2-ext',
    exerciseLabel: 'Lab Exercise',
    exerciseCode: 'WW-M2 Ext',
    title: 'WW-M2 Extension — Updated HandaBot Proposal',
    author: 'Carl Angelo Patano, Jonas Joaquin Sibug, and John Klien Villanueva',
    group: true,
    description: 'The revised concept paper proposes a RAG chatbot for flood preparedness and response information in Marikina City. It adds the Marikina Citizen’s Charter 2022 as the local source, proposes the NDRRMP 2020–2030 and NDRP 2024 as national references, and uses a dated DSWD Carina report as supplementary historical context. The planned evaluation compares the same language model with and without retrieval on a separate development set and a 60-question test set. Live river levels, evacuation status, and rescue dispatch are outside the proposed document-based scope.',
    skills: [
      'Narrowing a research problem to a defined community and information need',
      'Checking source editions, dates, geographic coverage, and evidence limits',
      'Designing a controlled RAG versus non-RAG comparison',
      'Planning English, Filipino, and Taglish evaluation questions',
      'Separating correctness, groundedness, citation support, and abstention',
    ],
    reflection: {
      growth: 'Revising the proposal helped me connect the intended user to the actual source material. Moving the focus to Marikina flood preparedness and response made a city-issued service document necessary, alongside the national plans. I learned to specify which questions the corpus could support and when the chatbot should direct someone to current official channels.',
      critique: 'The revised plan is more specific, but the source manifest, local editions, annotated questions, and model feasibility still need to be checked before the proposed experiment. A published procedure or historical situation report cannot establish what is happening during a current emergency, and a planned 60-question benchmark is not a completed evaluation.',
      alternative: 'I would first freeze a small, verified corpus and test representative resident questions against it. I would use the development questions to finalize retrieval settings, reserve the test set for the final comparison, and have two reviewers independently check the reference answers and evidence locations.',
      goals: {
        shortTerm: 'Verify the proposed local and national sources, document their inclusion decisions, and prepare the development questions with page-level evidence.',
        longTerm: 'Build locally relevant information tools with clear source boundaries and evaluation results that support the claims being made.',
      },
    },
    previews: [{
      label: 'Updated Proposal Paper',
      href: 'https://docs.google.com/document/d/1N20VT52cM73o-8G9mDfso8nN8K0X-bW1/preview',
      openHref: 'https://docs.google.com/document/d/1N20VT52cM73o-8G9mDfso8nN8K0X-bW1/edit',
    }],
  },
  {
    id: 'midterm-exam',
    kind: 'exam',
    exerciseLabel: 'Examination',
    title: 'Midterm Exam',
    author: identity.name,
    score: { earned: 13, total: 30 },
  },
]

const finalsOutputs = [
  {
    id: 'pt-f1',
    exerciseLabel: 'Performance Task',
    exerciseCode: 'PT-F1',
    title: 'Optimizing Chunk Size and Overlap for RAG',
    author: identity.name,
    status: 'submitted',
    description: 'A laboratory exercise on the DOLE-BWC 2023 Handbook on Workers Statutory Monetary Benefits: the 80-page PDF is split into chunks, embedded with all-MiniLM-L6-v2 into a FAISS index, and probed with three graded questions while chunk size and overlap change one at a time. The second half answers those questions with Phi-4-mini-instruct and tests the guardrails.',
    skills: [
      'Chunking a long PDF into overlapping passages with page traceability',
      'Building a FAISS index over sentence-transformer embeddings',
      'Scoring retrieval with Precision@3, Recall@3 and MRR@3',
      'Setting a selection rule before looking at the results',
      'Grounding generation in retrieved passages with refusal rules',
    ],
    reflection: {
      growth: 'The part I did not expect to matter was the question set. I ran five configurations, 1000/0, the 1000/200 baseline, 1000/450, 1800/200 and 300/200, and four of them scored exactly the same overall, 0.463, with the same evidence coverage of 0.5. Only the 300-character chunks fell behind at 0.370, because 1,459 chunks diluted the top three. With three questions I could tell which setting broke retrieval but not which one was best, and that is the lesson: the evaluation set is part of the experiment, not paperwork written after it.',
      critique: 'The two fixes in Part 2 were real fixes that I found by reading failures. With three chunks the sentence about December 24 never reached the model, so generation now retrieves five, and comparison questions pulled from only one section, so the model splits them into sub-queries. But I made both changes while looking at those same three questions, and the correctness column in my export was filled in by hand, once, without a second reader. A pipeline tuned on three questions is a demonstration, not a measurement.',
      alternative: 'I would write ten to fifteen questions first, tune on half, and judge the final configuration only on the half I held back, so that tuning and evaluation stop sharing the same examples.',
      goals: {
        shortTerm: 'Rebuild the ground-truth set with held-out questions and re-score the final pipeline on those alone.',
        longTerm: 'Treat evaluation as something I design alongside the pipeline, not something I run at the end to confirm it worked.',
      },
    },
    previews: [{
      label: 'Lab Exercise',
      href: 'https://drive.google.com/file/d/1_zr38_-jkVe7uzytRGGLJHgV3MKDjKHZ/preview',
    }],
    notebook: {
      href: 'https://drive.google.com/file/d/1FWCnQs6ObFzNzQkOV2TiGzl2WowNW1Vw/view?usp=sharing',
    },
  },
  {
    id: 'pt-f2',
    exerciseLabel: 'Performance Task',
    exerciseCode: 'PT-F2',
    title: 'Determining the Best Chunk Size and Overlap (IEEE Report)',
    author: identity.name,
    status: 'submitted',
    description: 'The full twelve-configuration sweep over the same DOLE-BWC handbook, scored on nine questions and sixteen evidence units, with the selection rule fixed in advance and the near-tie reported as a near-tie instead of a winner.',
    skills: [
      'Running a twelve-configuration grid with a fresh index per run',
      'Writing a selection rule before seeing the results',
      'Separating precision, recall and rank from a single overall score',
      'Reporting a near-tie honestly in an IEEE-format report',
    ],
    reflection: {
      growth: 'This is the experiment where the numbers finally separated the configurations. Across nine questions and sixteen evidence units, 800/160 had the best Precision@3 at 0.407, four settings tied at Recall@3 0.778 and five tied at MRR@3 0.833. That spread told me what the PT-F1 trial could not: chunk size moves precision far more than recall, and the setting that wins one metric is usually not the setting that wins another. Writing the rule down before opening the results also kept me from picking whichever row matched what I already believed.',
      critique: 'The rule still ended in a near-tie and I have to present it as one. 1000/0, 1000/100 and 1000/200 all scored 0.648 overall, and the recommendation is 1000/0 only because it builds the smallest index at 179 chunks against 216. That is a defensible tie-break and a thin finding at the same time. Nine questions also means one difficult item moves Difficult Recall@3 by more than a tenth, so the ordering inside the comparable set is closer to noise than to a ranking.',
      alternative: 'I would grow the question set before growing the grid. Each extra configuration costs a full re-index, but only a larger question set actually reduces the noise I am comparing across.',
      goals: {
        shortTerm: 'Re-run the recommended configuration against a bigger question set and see whether the near-tie survives.',
        longTerm: 'Make parameter choices from evidence another person could reproduce and challenge.',
      },
    },
    previews: [{
      label: 'IEEE Report',
      href: 'https://drive.google.com/file/d/1FP0CDTJWKw_Ql_enzo4Ib-EkGBjMV4Do/preview',
    }],
    notebook: {
      href: 'https://drive.google.com/file/d/1ETi1pwL5D-5O9dnoAuVewx_xygCWt9jp/view?usp=sharing',
    },
  },
  {
    id: 'ww-f1',
    exerciseLabel: 'Written Work',
    exerciseCode: 'WW-F1',
    title: 'Tuning Chunk Size, Overlap and Top-K on HandaBot',
    author: identity.name,
    status: 'submitted',
    description: 'The optimization pass for the HandaBot capstone: the NDRRMP 2020–2030 PDF is split with LangChain, embedded into Chroma, and answered with Qwen2.5-1.5B-Instruct under three configurations, 400/50 with top-k 3, 800/100, and 1200/150, which were used for the lab chatbot. The later final-project experiment compares five configurations and selects its own settings.',
    skills: [
      'Running a full RAG pipeline over official DRRM documents',
      'Comparing chunk size and overlap with a fresh index per configuration',
      'Separating indexing cost from per-question latency',
      'Evaluating retrieved passages against expected answers',
    ],
    reflection: {
      growth: 'The three configurations changed the index far more than they changed the answers. 400/50 with top-k 3 produced 912 chunks, 800/100 produced 479, and 1200/150 produced 334, and indexing fell from about 2.1 s to 1.35 s along the way, but retrieval stayed at roughly 0.010 s per question in all three. What actually cost time was generation, 3.9 s per answer at 400/50 and 5.0 s at 800/100. Seeing that split is what made the choice for the final chatbot obvious: pick the configuration that keeps the context clean and the index small, then stop worrying about retrieval speed.',
      critique: 'Three configurations is a small grid for the number of decisions I was making. Chunk size, overlap and top-k all moved at once between the first two settings, so I cannot say which one caused 912 chunks to become 479 until I read the code again. The answer quality column is also weak: correctness was scored by hand on a zero-to-two scale by one member, and the automatic keyword and support checks only catch obvious failures, so one person reading nine answers is standing in for the judgement of the group.',
      alternative: 'I would hold top-k fixed and vary one parameter per run, then add a second independent scorer and an agreement check before trusting the quality column.',
      goals: {
        shortTerm: 'Re-run the sweep one variable at a time so each row has a single cause.',
        longTerm: 'Spend generation only on questions the retrieval step can actually support.',
      },
    },
    previews: [{
      label: 'Experiment Report',
      href: 'https://drive.google.com/file/d/1s5SXyC1Z1hkf81W6XI4iVe7O3sfNud5T/preview',
    }],
    notebook: {
      href: 'https://drive.google.com/file/d/1YSv-MggJNDexhNhD5zNm3auGwdCetx4U/view?usp=sharing',
    },
  },
  {
    id: 'ww-f2',
    exerciseLabel: 'Written Work',
    exerciseCode: 'WW-F2',
    title: 'CPU vs T4 GPU: Where HandaBot Actually Spends Its Time',
    author: identity.name,
    status: 'submitted',
    description: 'The comparison half of the pair: the identical three-configuration sweep run twice, once on a Colab CPU runtime and once on a T4 GPU, then joined into one table to measure speedup, answer quality and answer consistency across the two devices.',
    skills: [
      'Running the same experiment on two runtimes and joining the results',
      'Measuring tokens per second instead of guessing at speedup',
      'Checking that repeated runs give identical answers before comparing them',
      'Explaining experimental results to a non-technical reader',
    ],
    reflection: {
      growth: 'Running the same sweep on CPU and again on a T4 GPU made the cost structure concrete. The GPU answered at about 23.8 tokens per second, and the same job on CPU stretched into a one-to-two-hour run. Retrieval did not move at all between the two devices, which confirmed what the optimization pass suggested: the device only matters where the model is generating. Greedy decoding also returned the same answer across all three repeats, and my consistency flag came out at 1.0, so comparing the two runtimes was actually fair rather than a comparison of two different pipelines.',
      critique: 'The two runs happened in separate sessions and the results met in an Excel file that I joined by hand, so the speedup figure is only as good as that join. If a row were mismatched the number would still look plausible in the report. The correctness column has the same problem as the first half, one scorer and a zero-to-two scale, and the CPU run took long enough that I did not repeat it, which means I have one timing sample on that side and three on the other.',
      alternative: 'I would log both runtimes from one script into a single dataframe and export it once, so the join is code instead of manual copy-paste, and I would time at least two CPU repeats to see how much the slower side varies.',
      goals: {
        shortTerm: 'Rebuild the comparison table from a single logged export and recheck the speedup.',
        longTerm: 'Design experiments so the results table is produced by the experiment, not assembled after it.',
      },
    },
    previews: [{
      label: 'Experiment Report',
      href: 'https://drive.google.com/file/d/1s5SXyC1Z1hkf81W6XI4iVe7O3sfNud5T/preview',
    }],
    notebook: {
      href: 'https://drive.google.com/file/d/1YSv-MggJNDexhNhD5zNm3auGwdCetx4U/view?usp=sharing',
    },
  },
]

const finalProject = {
  id: 'p-f1-handabot',
  exerciseLabel: 'Group Final Project',
  exerciseCode: 'P-F1',
  title: 'HandaBot — A RAG Chatbot for the NDRRMP 2020–2030',
  author: 'Carl Angelo Patano, Jonas Joaquin Sibug, and John Klien Villanueva',
  group: true,
  description: 'The final HandaBot project turns the 136-page National Disaster Risk Reduction and Management Plan 2020–2030 into a question-answering system using LangChain, all-MiniLM-L6-v2 embeddings, Chroma, and Qwen2.5-1.5B-Instruct on a Colab T4 GPU. Five configurations were compared on 15 questions: 12 answerable and 3 deliberately unanswerable. The recorded experiment selected 800-character chunks, 100-character overlap, and top-k 5. The IEEE paper reports a final manual chatbot evaluation of 19/30 points and 10 of 15 answers supported by the retrieved passages.',
  skills: [
    'Logging each pipeline stage and saving inspectable checkpoints',
    'Comparing configurations with a documented selection rule',
    'Exporting experiment logs, evaluation tables, and reproducibility files',
    'Building a notebook chat interface with source pages and response times',
    'Explaining retrieval failures and generation errors separately',
    'Writing an IEEE report with results, tables, and figures',
  ],
  reflection: {
    growth: 'My work connected the experiment to its evidence. I wrote the stage logging, checkpoint and export code, the configuration comparison and selection, and the notebook chatbot interface, then documented the results in the IEEE report. Recording what happened at each stage made the final choice easier to explain: configuration E tied B on automatic correct behaviour, while its retrieval recall rose from 0.542 to 0.625.',
    critique: 'The final result still has clear limits. The paper reports only 2 of 8 possible points on difficult questions, and several answers mixed up agencies even when useful pages were retrieved. Fifteen questions, one manual scorer, and one Colab session are a narrow basis for a recommendation. The one-point manual-score difference between E and B does not establish a decisive winner.',
    alternative: 'I would expand the evaluation set, add an independent reviewer, and inspect errors before changing more parameters. I would test hybrid retrieval and reranking for missed evidence, then separately test a pillar-aware prompt for agency confusion. The saved logs and checkpoints would let me compare each change against the same recorded baseline.',
    goals: {
      shortTerm: 'Add held-out questions and a second scorer, then verify that the exported files can reproduce the comparison from a fresh environment.',
      longTerm: 'Build information systems whose answers, limitations, and configuration choices can be checked by another person.',
    },
  },
  previews: [{
    label: 'IEEE Paper',
    href: 'https://docs.google.com/document/d/1CZgYWjfyn_X7K59HuX4jTlOQTPUyG7Zl/preview',
    openHref: 'https://docs.google.com/document/d/1CZgYWjfyn_X7K59HuX4jTlOQTPUyG7Zl/edit',
  }],
  notebook: {
    href: 'https://drive.google.com/file/d/1_p0hAwNRmGqQ1z7I0AU450LgboltWSKT/view?usp=sharing',
  },
}

const finalProjectReflection = {
  id: 'final-project-reflection',
  kind: 'reflection',
  exerciseLabel: 'Final Project Reflection',
  title: 'Final Project Learning Reflection Post',
  author: identity.name,
  description: 'My contributions to HandaBot, what the experiment taught me about trustworthy answers, and the skills I developed while turning a notebook run into inspectable evidence.',
  sections: [
    {
      title: 'My contributions',
      text: 'My main responsibility was making the work traceable and understandable. I wrote the stage logging, checkpoint and export code, the comparison and configuration-selection logic, and the notebook chatbot interface. I also prepared the experiment log workbook and wrote the IEEE report with its tables and figures. Carl built and ran the main RAG pipeline, while Jonas prepared the evaluation questions and carried out the manual scoring. Seeing those responsibilities come together taught me that a final project needs a clear connection between the implementation, the evidence, and the explanation.',
    },
    {
      title: 'What I learned',
      text: 'The most useful lesson was that a configuration choice needs more than a good-looking answer. Run E used 800-character chunks, 100-character overlap, and five retrieved chunks. Its retrieval recall was 0.625, compared with 0.542 for the three-chunk reference setting, while both had an automatic correct-behaviour rate of 0.667. The paper reports a manual chatbot score of 19/30, including 7 fully correct, 5 partly correct, and 3 incorrect answers. Those different views of the same run showed me why retrieval coverage, correctness, and faithfulness need to be explained separately.',
    },
    {
      title: 'Skills I developed',
      text: 'I became more deliberate about recording timestamps, settings, stage timings, retrieved passages, and generated answers. I practiced exporting that information into spreadsheets and checkpoints that another person could inspect, and translating the comparison into tables, figures, and a written argument. The notebook interface also gave me a practical way to present source pages, response times, and errors alongside an answer. I learned to treat the interface and the report as ways of exposing the evidence, rather than simply presenting the best result.',
    },
    {
      title: 'What I would improve next',
      text: 'I would start the next iteration with more held-out questions and two independent scorers. Difficult questions remained the weakest part of HandaBot, and the paper shows that even a retrieved passage can be used incorrectly when the model confuses agencies or pillars. I would use the saved outputs to separate missing evidence from generation mistakes, then change one part at a time. My goal is to make each improvement reproducible and to explain what the system can support without treating a small experiment as proof of general reliability.',
    },
  ],
}

const finalsById = Object.fromEntries(finalsOutputs.map((item) => [item.id, item]))

const optimizationLab = {
  id: 'ww-f1-f2',
  exerciseLabel: 'Lab Exercise',
  exerciseCode: 'WW1 & WW2',
  title: 'Optimizing RAG Parameters and Comparing CPU and GPU Performance',
  author: identity.name,
  status: 'submitted',
  previews: finalsById['ww-f1'].previews,
  notebook: finalsById['ww-f1'].notebook,
  parts: [
    { ...finalsById['ww-f1'], partLabel: 'Part A — RAG parameter optimization' },
    { ...finalsById['ww-f2'], partLabel: 'Part B — CPU and GPU comparison' },
  ],
}

const outputMap = {
  prelim: [...prelimOutputs].reverse(),
  midterm: [...midtermOutputs].reverse(),
  finals: [finalProjectReflection, finalProject, optimizationLab, finalsById['pt-f2'], finalsById['pt-f1']],
}

function getDocumentHref(preview) {
  if (preview.openHref) return preview.openHref
  const destination = preview.href.includes('docs.google.com/') ? '/edit' : '/view'
  return preview.href.replace(/\/(preview|embed)(\?.*)?$/, destination)
}

function ActivityContent({ item }) {
  return (
    <div className="mt-5 border-t border-[var(--card-border)] pt-5">
      {item.partLabel && <h4 className="mb-4 text-lg font-semibold">{item.partLabel}</h4>}
      <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
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

        <details className="group self-start rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] p-4">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-semibold marker:hidden">
            <BookOpen className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
            <span>{item.partLabel ? `Read reflection: ${item.partLabel.split(' — ')[0]}` : 'Read reflection'}</span>
            <ChevronDown className="ml-auto h-4 w-4 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
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
      </div>
    </div>
  )
}

function LearningReflectionPost({ item }) {
  return (
    <div className="mt-5 border-t border-[var(--card-border)] pt-5">
      <p className="max-w-[72ch] text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
      <details className="group mt-5">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-semibold marker:hidden">
          <BookOpen className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
          <span>Read full post</span>
          <ChevronDown className="ml-2 h-4 w-4 text-[var(--muted)] transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>
        <div className="mt-5 max-w-[72ch] space-y-6">
          {item.sections.map((section) => (
            <section key={section.title}>
              <h4 className="text-lg font-semibold">{section.title}</h4>
              <p className="mt-2 text-base leading-relaxed text-[var(--muted)]">{section.text}</p>
            </section>
          ))}
        </div>
      </details>
    </div>
  )
}

const contactFields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
]

function HomePage() {
  const reduceMotion = useReducedMotion()
  const fadeUp = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : entranceVariants
  const stagger = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : staggerVariants
  const [outputTab, setOutputTab] = useState('prelim')
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [contactErrors, setContactErrors] = useState({})
  const [contactMailto, setContactMailto] = useState('')
  const tabRefs = useRef({})

  const getContactErrors = () => {
    const errors = {}
    if (!contactForm.name.trim()) errors.name = 'Please enter your name.'
    if (!contactForm.email.trim()) errors.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) errors.email = 'Enter a valid email address, like name@example.com.'
    if (!contactForm.message.trim()) errors.message = 'Please write a message.'
    else if (contactForm.message.trim().length < 10) errors.message = 'Please write at least 10 characters.'
    return errors
  }

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((previous) => ({ ...previous, [name]: value }))
    setContactMailto('')
    if (contactErrors[name]) {
      setContactErrors((previous) => {
        const next = { ...previous }
        delete next[name]
        return next
      })
    }
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setContactMailto('')
    const errors = getContactErrors()
    setContactErrors(errors)
    const firstInvalid = Object.keys(errors)[0]
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus()
      return
    }

    const name = contactForm.name.trim()
    const subject = encodeURIComponent(`ePortfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${contactForm.message.trim()}\n\n— ${name} (${contactForm.email.trim()})`)
    const mailto = `mailto:${identity.email}?subject=${subject}&body=${body}`
    setContactMailto(mailto)
    window.location.href = mailto
  }

  const handleTabKeyDown = (event, index) => {
    const last = periodTabs.length - 1
    let next = null
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    if (next === null) return
    event.preventDefault()
    setOutputTab(periodTabs[next])
    tabRefs.current[periodTabs[next]]?.focus()
  }

  return (
    <>
      {/* ─── Hero ─── */}
      <MotionSection
        id="home"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="min-h-[min(900px,100svh)] flex items-center px-6 py-24 sm:px-10 sm:py-32"
      >
        <div className="w-full max-w-6xl mx-auto grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,1fr),auto] items-center">
          <div className="min-w-0">
            <MotionDiv variants={fadeUp} className="max-w-4xl">
              <span className="chip text-xs tracking-widest uppercase">{identity.course}</span>
              <h1 className="huge-text mt-6 text-[clamp(2rem,9vw,3.5rem)] leading-[1.05] lg:text-[clamp(3rem,5.1vw,5rem)]">
                {identity.name.split(' ')[0]}<br />
                {identity.name.split(' ').slice(1).join(' ')}
              </h1>
            </MotionDiv>

            <MotionDiv variants={fadeUp} className="mt-6 max-w-xl">
              <p className="text-base sm:text-lg leading-relaxed text-[var(--muted)]">{identity.tagline}</p>
            </MotionDiv>

            <MotionDiv variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#outputs" className="btn-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:brightness-110">
                View outputs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={`mailto:${identity.email}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--card-border)] bg-card px-5 py-2.5 text-sm font-semibold transition hover:text-[var(--accent)]">
                Email me
              </a>
            </MotionDiv>
          </div>

          <MotionDiv variants={fadeUp} className="shrink-0">
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-72 lg:w-72 overflow-hidden rounded-2xl border border-[var(--card-border)] bg-card">
              <img src="/bossing.png" width="288" height="288" fetchPriority="high" alt="John Klien Villanueva, BSIT student, standing outdoors" className="h-full w-full object-cover" />
            </div>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* ─── Course Expectations ─── */}
      <MotionSection
        id="course-expectations"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="scroll-mt-20 bg-section-b border-y border-[var(--card-border)] transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <MotionDiv variants={fadeUp}>
            <h2 id="c508" className="huge-text scroll-mt-24 text-[clamp(1.5rem,8vw,2.25rem)] sm:text-5xl">Course<br />Expectations</h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">
              Responses to the required readings on deep learning and NLP.
            </p>
          </MotionDiv>

          <div className="mt-12 space-y-6">
            {courseQA.map((item) => (
              <MotionDiv key={item.id} variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">{item.label}</p>
                <h3 className="mt-2 max-w-[55ch] text-xl font-semibold sm:text-2xl">{item.question}</h3>
                <div className="mt-5 max-w-[72ch] border-t border-[var(--card-border)] pt-5 text-base leading-relaxed text-[var(--muted)]">
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
        whileInView="show"
        viewport={viewport}
        className="scroll-mt-20 bg-section-a transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <MotionDiv variants={fadeUp}>
            <h2 className="huge-text text-[clamp(1.5rem,8vw,2.25rem)] sm:text-5xl">
              Background<br />&amp; Skills
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">{identity.about}</p>
          </MotionDiv>

          <MotionDiv variants={stagger} className="mt-12 grid gap-5 sm:grid-cols-2">
            <MotionDiv variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-6">
              <h3 className="font-heading text-base font-semibold">Skills</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li key={s} className="rounded-full border border-[var(--card-border)] px-3 py-1 text-xs text-[var(--muted)]">{s}</li>
                ))}
              </ul>
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
        whileInView="show"
        viewport={viewport}
        className="scroll-mt-20 bg-section-a transition-colors"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <MotionDiv variants={fadeUp}>
            <h2 className="huge-text text-[clamp(1.5rem,8vw,2.25rem)] sm:text-5xl">Outputs</h2>
            <p className="mt-4 max-w-2xl text-[var(--muted)]">Browse exams, lab activities, and project work by period, with the latest entries first. Find the final project and learning reflection in Finals.</p>
          </MotionDiv>

          <MotionDiv variants={fadeUp}>
            <div role="tablist" aria-label="Output period" className="mt-8 flex gap-1.5 sm:gap-2">
              {periodTabs.map((tab, index) => {
                const selected = outputTab === tab
                return (
                  <button
                    key={tab}
                    ref={(node) => { tabRefs.current[tab] = node }}
                    id={`outputs-tab-${tab}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="outputs-panel"
                    aria-label={`${periodLabel[tab]} outputs, ${outputMap[tab].length} entries`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setOutputTab(tab)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className={`min-h-11 min-w-0 flex-1 rounded-full px-2 py-2 text-sm font-semibold transition sm:flex-none sm:px-5 ${
                      selected
                        ? 'btn-accent'
                        : 'border border-[var(--card-border)] bg-card text-[var(--muted)] hover:text-[var(--page-text)]'
                    }`}
                  >
                    {periodLabel[tab]}
                    <span className="ml-1.5 text-xs tabular-nums">{outputMap[tab].length}</span>
                  </button>
                )
              })}
            </div>
          </MotionDiv>

          <div
            id="outputs-panel"
            role="tabpanel"
            aria-labelledby={`outputs-tab-${outputTab}`}
            tabIndex={0}
            className="mt-8 focus-visible:outline-offset-8"
          >
            <MotionDiv key={outputTab} variants={stagger} initial="hidden" animate="show">
              {outputMap[outputTab].length > 0 ? (
                <div className="space-y-4">
                  {outputMap[outputTab].map((item) => (
                    <MotionArticle key={item.id} id={`output-${item.id}`} variants={fadeUp} className="scroll-mt-24 rounded-2xl border border-[var(--card-border)] bg-card p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                              {[item.exerciseLabel, item.exerciseCode].filter(Boolean).join(' ')}
                            </p>
                            {item.status && (
                              <span className={`status-pill ${item.status === 'submitted' ? 'status-pill--neutral' : ''}`}>
                                {statusLabel[item.status]}
                              </span>
                            )}
                          </div>
                          <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{item.title}</h3>
                          <p className="mt-2 text-xs font-semibold text-[var(--page-text)]">{item.group ? 'Authors' : 'Author'}: {item.author}</p>
                          {(item.week || item.date) && (
                            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">{[item.week, item.date].filter(Boolean).join(' · ')}</p>
                          )}
                        </div>
                      </div>

                      {item.kind === 'exam' && (
                        <dl className="mt-5 flex flex-wrap items-baseline justify-between gap-3 border-t border-[var(--card-border)] pt-5">
                          <dt className="text-sm font-medium text-[var(--muted)]">Exam score</dt>
                          <dd className="text-3xl font-semibold tabular-nums">
                            {item.score.earned}<span className="text-xl font-normal text-[var(--muted)]"> / {item.score.total}</span>
                          </dd>
                        </dl>
                      )}
                      {item.previews?.length > 0 && (
                        <div className="mt-5 space-y-4 border-t border-[var(--card-border)] pt-5">
                          {item.previews.map((preview) => (
                            <div key={preview.label}>
                              <div className="flex flex-wrap items-center justify-between gap-x-4">
                                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">{preview.label}</p>
                                <a href={getDocumentHref(preview)} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} ${preview.label} in a new tab`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--accent)] underline hover:no-underline">
                                  Open document <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                </a>
                              </div>
                              <div className="mt-3 overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)]">
                                <iframe
                                  src={preview.href}
                                  title={`${item.title} ${preview.label.toLowerCase()}`}
                                  loading="lazy"
                                  className="h-[360px] w-full sm:h-[460px]"
                                />
                              </div>
                            </div>
                          ))}
                          {item.notebook && (
                            <div>
                              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--card-border)] py-4">
                                <div className="flex items-center gap-3">
                                  <BookOpen className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                                  <div>
                                    <p className="text-sm font-semibold">Notebook</p>
                                    <p className="text-sm text-[var(--muted)]">Open the notebook file to view the activity.</p>
                                  </div>
                                </div>
                                <a href={item.notebook.href} target="_blank" rel="noreferrer" className="btn-accent inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition hover:brightness-110">
                                  Open notebook
                                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {item.kind === 'reflection' && <LearningReflectionPost item={item} />}
                      {item.kind !== 'exam' && item.kind !== 'reflection' && (
                        (item.parts || [item]).map((part) => <ActivityContent key={part.id} item={part} />)
                      )}
                    </MotionArticle>
                  ))}
                </div>
              ) : (
                <MotionArticle variants={fadeUp} className="rounded-2xl border border-[var(--card-border)] bg-card p-10 text-center">
                  <p className="huge-text text-2xl text-[var(--accent)]">{periodLabel[outputTab]}</p>
                  <p className="mt-2 text-xl font-semibold">No outputs yet</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">Projects will appear here once published.</p>
                </MotionArticle>
              )}
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* ─── Contact ─── */}
      <MotionSection
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="scroll-mt-20 bg-section-b border-t border-[var(--card-border)] transition-colors"
      >
        <div className="max-w-3xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
          <MotionDiv variants={fadeUp} className="text-center">
            <h2 className="huge-text text-[clamp(1.5rem,8vw,2.25rem)] sm:text-5xl">Get in Touch</h2>
            <p className="mt-4 text-[var(--muted)]">Have a question? Send a message and it will open in your email app.</p>
          </MotionDiv>

          <MotionDiv variants={fadeUp} className="mt-12 rounded-2xl border border-[var(--card-border)] bg-card p-6 sm:p-8">
            <form onSubmit={handleContactSubmit} noValidate aria-label="Contact form" className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {contactFields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium">{field.label}</label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      required
                      autoComplete={field.autoComplete}
                      value={contactForm[field.name]}
                      onChange={handleContactChange}
                      aria-invalid={contactErrors[field.name] ? 'true' : undefined}
                      aria-describedby={contactErrors[field.name] ? `${field.name}-error` : undefined}
                      className="min-h-11 w-full rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] px-4 py-2.5 text-base transition focus:border-[var(--accent)]"
                    />
                    {contactErrors[field.name] && (
                      <p id={`${field.name}-error`} role="alert" className="mt-1 text-xs text-danger">
                        {contactErrors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  minLength={10}
                  value={contactForm.message}
                  onChange={handleContactChange}
                  aria-invalid={contactErrors.message ? 'true' : undefined}
                  aria-describedby={contactErrors.message ? 'message-error' : 'message-hint'}
                  className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--page-bg)] px-4 py-2.5 text-base transition focus:border-[var(--accent)]"
                />
                {contactErrors.message ? (
                  <p id="message-error" role="alert" className="mt-1 text-xs text-danger">{contactErrors.message}</p>
                ) : (
                  <p id="message-hint" className="mt-1 text-xs text-[var(--muted)]">At least 10 characters.</p>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition hover:brightness-110">
                  <Send className="h-3.5 w-3.5" aria-hidden="true" /> Open email app
                </button>
                {contactMailto && (
                  <p role="status" className="text-sm text-[var(--muted)]">
                    Opening your email app. If nothing happens,{' '}
                    <a href={contactMailto} className="font-semibold text-[var(--accent)] underline">send it manually</a>.
                  </p>
                )}
              </div>
            </form>
            <div className="mt-6 border-t border-[var(--card-border)] pt-6">
              <a href={`mailto:${identity.email}`} className="inline-flex min-h-11 items-center break-all text-sm text-[var(--accent)] hover:underline">{identity.email}</a>
            </div>
          </MotionDiv>
        </div>
      </MotionSection>
    </>
  )
}

export default HomePage
