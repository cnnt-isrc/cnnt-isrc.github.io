// ============================================================================
// CAREERS PAGE
// ============================================================================
// Edit these values to manage job postings on your Careers page

/** The main heading of the Careers page */
export const CAREERS_PAGE_TITLE = "Careers";

/** The description that appears at the top of the Careers page */
export const CAREERS_PAGE_DESCRIPTION =
  "Join our team and contribute to cutting-edge research in sustainable AI and green computing. We offer exciting opportunities for researchers, engineers, and students passionate about making AI more environmentally responsible.";

/** Message shown when there are no job openings available */
export const CAREERS_EMPTY_MESSAGE =
  "No open positions at the moment. Please check back later.";

// ============================================================================
// JOB POSTINGS
// ============================================================================
// Add, edit, or remove job listings below
// To add a new job: copy one complete job block and paste it, then update the details
// To remove a job: delete the entire job block
//
// Each job posting needs:
//   - position: Job title (e.g., "Senior Developer", "Research Scientist")
//   - type: Employment type (e.g., "Full-time", "Part-time", "Internship")
//   - location: Where the job is (e.g., "Remote", "On-site", "Hybrid")
//   - description: Brief overview of the role
//   - responsibilities: List of main duties and requirements
//   - qualifications: What experience and skills are needed
//   - salaryRange: Pay (or empty if not specified)
//
// EXAMPLE - To add a new job posting:
// {
//   position: "Software Engineer - Frontend",
//   type: "Full-time",
//   location: "Remote",
//   description: "We are looking for an experienced frontend developer to build our web applications.",
//   responsibilities: [
//     "Develop responsive web interfaces",
//     "Collaborate with design and backend teams",
//     "Optimize application performance",
//   ],
//   qualifications: [
//     "5+ years experience with React or Vue.js",
//     "Strong JavaScript/TypeScript knowledge",
//     "Experience with modern CSS frameworks",
//   ],
//   salaryRange: "$100,000 - $150,000",
// },

export const CAREERS_DATA = [
  {
    position: "Research Scientist - Sustainable AI",
    type: "Full-time",
    location: "On-site / Hybrid",
    description:
      "We are seeking a talented research scientist to lead cutting-edge research in energy-efficient machine learning algorithms and sustainable AI systems. You will work on developing novel approaches to reduce the environmental impact of AI technologies.",
    responsibilities: [
      "Conduct research on energy-efficient deep learning techniques",
      "Publish findings in top-tier conferences and journals",
      "Collaborate with industry partners on sustainable AI projects",
      "Mentor graduate students and junior researchers",
    ],
    qualifications: [
      "Ph.D. in Computer Science, Machine Learning, or related field",
      "Strong publication record in ML/AI conferences",
      "Experience with PyTorch, TensorFlow, or similar frameworks",
      "Passion for environmental sustainability and green computing",
    ],
    posted: "2025-10-15",
    deadline: "2026-01-15",
    applyLink:
      "https://www.linkedin.com/jobs/view/research-scientist-sustainable-ai-3891234567",
  },
  {
    position: "Postdoctoral Researcher - Green Computing",
    type: "Postdoctoral",
    location: "On-site",
    description:
      "Join our team as a postdoctoral researcher focusing on carbon-aware computing and renewable energy integration in high-performance computing systems. This position offers opportunities to collaborate with leading researchers in the field.",
    responsibilities: [
      "Design and implement carbon-aware training schedulers",
      "Conduct experiments on energy consumption optimization",
      "Write and submit research papers to premier venues",
      "Present research at international conferences",
    ],
    qualifications: [
      "Recent Ph.D. in Computer Science, Electrical Engineering, or related field",
      "Strong background in systems or machine learning",
      "Experience with distributed computing and HPC systems",
      "Excellent written and verbal communication skills",
    ],
    posted: "2025-09-28",
    deadline: "2025-12-31",
    applyLink:
      "https://www.linkedin.com/jobs/view/postdoctoral-researcher-green-computing-3891234568",
  },
  {
    position: "Software Engineer - AI Infrastructure",
    type: "Full-time",
    location: "On-site / Hybrid",
    description:
      "We are looking for a skilled software engineer to build and maintain infrastructure for sustainable AI research. You will develop tools and platforms that enable researchers to track, measure, and optimize the energy footprint of machine learning workloads.",
    responsibilities: [
      "Design and develop energy monitoring tools for ML workflows",
      "Build scalable infrastructure for AI research projects",
      "Integrate carbon footprint tracking into existing systems",
      "Maintain and improve open-source software libraries",
    ],
    qualifications: [
      "Bachelor's or Master's degree in Computer Science or related field",
      "3+ years of software development experience",
      "Proficiency in Python, Go, or Rust",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Familiarity with ML frameworks and containerization",
    ],
    posted: "2025-10-01",
    deadline: "2026-02-28",
    applyLink:
      "https://www.linkedin.com/jobs/view/software-engineer-ai-infrastructure-3891234569",
  },
  {
    position: "Ph.D. Student - Energy-Efficient Machine Learning",
    type: "Ph.D. Position",
    location: "On-site",
    description:
      "We have multiple Ph.D. positions available for highly motivated students interested in researching energy-efficient machine learning, model compression, and sustainable AI. Full funding including tuition, stipend, and health benefits provided.",
    responsibilities: [
      "Conduct original research in sustainable AI",
      "Take advanced coursework in machine learning and systems",
      "Publish research findings in top conferences",
      "Collaborate with lab members on research projects",
      "Assist with teaching undergraduate courses",
    ],
    qualifications: [
      "Master's degree in Computer Science, Engineering, or related field",
      "Strong mathematical and programming skills",
      "Research experience in ML, computer systems, or related areas",
      "Excellent academic record",
      "Strong motivation to pursue research career",
    ],
    posted: "2025-08-15",
    deadline: "2026-03-01",
    applyLink:
      "https://www.linkedin.com/jobs/view/phd-student-energy-efficient-ml-3891234570",
  },
  {
    position: "Research Assistant - Carbon-Aware ML Systems",
    type: "Part-time / Internship",
    location: "On-site / Remote",
    description:
      "Seeking undergraduate or graduate students to work as research assistants on projects related to carbon-aware machine learning systems. This is an excellent opportunity to gain research experience and contribute to impactful projects.",
    responsibilities: [
      "Assist with experimental setup and data collection",
      "Implement and test carbon-aware algorithms",
      "Conduct literature reviews and surveys",
      "Support senior researchers with ongoing projects",
    ],
    qualifications: [
      "Currently enrolled in undergraduate or graduate program",
      "Background in computer science, engineering, or related field",
      "Programming experience in Python or C++",
      "Interest in sustainability and environmental computing",
      "Minimum commitment of 15 hours per week",
    ],
    posted: "2025-10-10",
    deadline: "2026-04-01",
    applyLink:
      "https://www.linkedin.com/jobs/view/research-assistant-carbon-aware-ml-3891234571",
  },
];
