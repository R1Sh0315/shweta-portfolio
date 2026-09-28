import type {
  Achievement,
  Education,
  Experience,
  Language,
  PersonalInfo,
  Project,
  SkillCategory,
} from '../types/portfolio'

export const personal: PersonalInfo = {
  name: 'Shweta Sabale',
  title: 'Big Data Developer',
  role: 'Data Engineer',
  experience: '5.8 years',
  location: 'Pune, India',
  email: 'shwetasabale3898@gmail.com',
  phone: '9834578905',
  linkedin: 'https://linkedin.com/in/shwetasabale793222143',
}

export const summary =
  'Data Engineer with 5.8 years of experience in PySpark, Apache Spark, Databricks, Python, SQL, Airflow, AWS and Hive. Experienced in developing end-to-end data pipelines, implementing complex business logic, optimizing Spark workloads, and building scalable data processing solutions.'

export const focusAreas = [
  'Data Engineering',
  'Big Data Processing',
  'ETL Pipeline Development',
  'Data Migration',
  'Spark Optimization',
  'Workflow Automation',
]

export const skillCategories: SkillCategory[] = [
  {
    label: 'Big data',
    description: 'Distributed processing and lakehouse tooling',
    skills: ['Apache Spark', 'PySpark', 'Databricks', 'Hive'],
  },
  {
    label: 'Programming',
    description: 'Production logic and analytical querying',
    skills: ['Python', 'SQL', 'Oracle PL/SQL', 'Dynamic SQL'],
  },
  {
    label: 'Cloud',
    description: 'AWS-based data processing workflows',
    skills: ['AWS', 'Amazon S3', 'AWS EMR'],
  },
  {
    label: 'Data engineering',
    description: 'Reliable movement, orchestration and optimization',
    skills: ['Apache Airflow', 'ETL', 'Data Migration', 'Data Pipeline Automation', 'Spark Optimization'],
  },
  {
    label: 'Databases',
    description: 'Relational systems and data stores',
    skills: ['MySQL', 'Oracle'],
  },
]

export const experience: Experience[] = [
  {
    company: 'Gspann Technologies',
    role: 'Data Engineer (Senior Software Engineer)',
    location: 'Pune, India',
    startDate: '10/2021',
    endDate: 'Present',
    description: 'Working on end-to-end data engineering solutions involving data pipelines, Spark processing, AWS and workflow automation.',
    responsibilities: [
      'Built and maintained end-to-end data pipelines using Apache Airflow.',
      'Automated data movement and recurring month-end processing activities.',
      'Developed PySpark DataFrame transformations for ingesting, transforming and analysing data from Amazon S3.',
      'Implemented complex business logic using PySpark and Apache Spark.',
      'Developed and executed Spark jobs using Databricks.',
      'Built scalable data processing workflows using Spark and PySpark.',
      'Optimized Spark and PySpark jobs to improve processing efficiency and performance.',
      'Developed Spark applications on AWS EMR.',
      'Managed data processing workflows with output stored in Amazon S3.',
      'Implemented automated job-completion alerts to monitor pipeline execution and notify downstream stakeholders.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    role: 'Data Engineer',
    location: 'Pune, India',
    startDate: '11/2020',
    endDate: '10/2021',
    description: 'Worked on treasury stress calculation workloads for an investment banking and financial services environment.',
    responsibilities: [
      'Worked on Treasury stress calculation workloads.',
      'Processed financial scenarios to assess institutional resilience under potential stressed conditions.',
      'Analysed complex Oracle PL/SQL procedures and dynamic SQL logic.',
      'Migrated calculation logic from Oracle PL/SQL to Apache Spark.',
      'Translated existing business rules into scalable Spark-based transformations.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'End-to-End Inventory Forecasting',
    company: 'Gspann Technologies',
    period: '10/2021 — Present',
    type: 'Data Engineering',
    description: 'An end-to-end data engineering solution focused on building automated data pipelines, processing large datasets and implementing scalable data transformations for inventory forecasting.',
    technologies: ['Apache Airflow', 'PySpark', 'Apache Spark', 'Databricks', 'AWS S3', 'AWS EMR', 'Python', 'SQL'],
    highlights: [
      'Automated recurring month-end processing using Apache Airflow.',
      'Built PySpark transformations for data ingestion and processing from Amazon S3.',
      'Implemented complex business logic using Spark DataFrames.',
      'Optimized Spark workloads for improved processing efficiency.',
      'Developed Spark applications using AWS EMR.',
      'Implemented automated pipeline completion alerts.',
    ],
  },
  {
    name: 'Treasury Stress Calculation',
    company: 'Cognizant Technology Solutions',
    period: '11/2020 — 10/2021',
    type: 'Financial Data Engineering',
    description: 'Data engineering work involving treasury stress calculation workloads and migration of complex financial calculation logic from Oracle PL/SQL to Apache Spark.',
    technologies: ['Apache Spark', 'PySpark', 'Oracle PL/SQL', 'SQL'],
    highlights: [
      'Analysed complex PL/SQL procedures and dynamic SQL.',
      'Migrated calculation logic to Apache Spark.',
      'Translated financial business rules into scalable Spark transformations.',
      'Processed financial stress scenarios.',
    ],
  },
  {
    name: 'Intrusion Detection and Crop Prediction',
    type: 'Academic Project',
    description: 'A web application developed for intrusion detection and crop prediction.',
    technologies: ['Python', 'Machine Learning', 'HTML', 'CSS', 'K-NN', 'SMTP'],
  },
  {
    name: 'Online Quiz Application',
    type: 'Academic Project',
    description: 'An Android application for conducting online quizzes with time constraints and the ability to dynamically add questions through the UI into a backend database.',
    technologies: ['Android', 'Database'],
    features: ['Time-constrained quizzes', 'Dynamic question management', 'Backend database integration'],
  },
]

export const achievements: Achievement[] = [
  { title: 'Ace Alliance Award', description: 'Received for Exceptional Contribution, Dedication and Professionalism.' },
  { title: 'Star of the Quarter Award', description: 'Received for Exceptional Contribution, Dedication and Professionalism.' },
  { title: 'High Five Award', description: 'Received from Client Partner.' },
  { title: 'First Rank in Engineering College', description: 'Secured first rank in engineering college.' },
]

export const education: Education[] = [
  {
    degree: 'B.E. Computer Science',
    institution: 'Savitribai Phule Pune University',
    location: 'Pune',
    startDate: '08/2016',
    endDate: '08/2020',
    grade: '9.29 CGPA',
  },
  { degree: 'HSC', institution: 'Maharashtra State Board', location: 'Pune', year: '2014', grade: '86.46%' },
  { degree: 'SSC', institution: 'Maharashtra State Board', location: 'Pune', year: '2014', grade: '96.4%' },
]

export const languages: Language[] = [
  { name: 'English', proficiency: 'Native or Bilingual Proficiency' },
  { name: 'Marathi', proficiency: 'Native or Bilingual Proficiency' },
  { name: 'Hindi', proficiency: 'Native or Bilingual Proficiency' },
]