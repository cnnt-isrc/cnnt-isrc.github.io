// ============================================================================
// PEOPLE PAGE
// ============================================================================
// Edit these values to manage team members displayed on your People page

/** The page heading - displayed at the top of the People page */
export const PEOPLE_PAGE_TITLE = "Our People";

// ============================================================================
// CATEGORY TABS
// ============================================================================
// The tabs that appear on the People page to organize team members by role
// You can add/remove/rename categories here

export const PEOPLE_ACCORDION = ["Academics", "Researchers", "Students"];

// ============================================================================
// ACADEMICS (Faculty/Professors)
// ============================================================================
// Add, edit, or remove academic staff below
// To add a new person: copy one complete person block and paste it, then update details
// To remove a person: delete the entire person block
//
// Each person needs:
//   - imageUrl: Path to their photo (should be in /public/images/people/ folder)
//   - name: Full name
//   - designation: Title/position (e.g., "Professor", "Assistant Professor")
//   - researchInterest: Their main research areas (comma-separated)
//   - email: Email address
//   - biography: A short description of their background and work
//   - contactDetails: Phone number or other contact info
//   - publicationLink: Link to their publications (e.g., Google Scholar)
//   - projectLink or projectSoftwareLink: Links to their projects/code
//
// EXAMPLE - To add a new professor:
// {
//   imageUrl: "/images/people/professor-new.jpg",
//   name: "Dr. Michael Johnson",
//   designation: "Assistant Professor",
//   researchInterest: "Robotics, Computer Vision, AI Safety",
//   email: "michael.johnson@university.edu",
//   biography: "Dr. Michael Johnson is an expert in robotics with focus on safe AI systems.",
//   contactDetails: "+1 (555) 999-8888",
//   publicationLink: "https://scholar.google.com/citations?user=examplenew",
//   projectSoftwareLink: "https://projects.example.com/michael-johnson",
// },

export const ACADEMICS_DATA = [
  {
    imageUrl: "/images/people/academic1.jpg",
    name: "Dr. Sarah Mitchell",
    designation: "Professor & Lab Director",
    researchInterest: "Machine Learning, Computer Vision, Neural Networks",
    email: "sarah.mitchell@university.edu",
    biography:
      "Dr. Sarah Mitchell leads the CNNT-ISRC lab with over 15 years of experience in artificial intelligence and deep learning. Her groundbreaking work in neural network optimization has been published in top-tier conferences.",
    contactDetails: "+1 (555) 123-4567",
    publicationLink: "https://scholar.google.com/citations?user=example1",
    projectSoftwareLink: "https://projects.example.com/sarah-mitchell",
  },
  {
    imageUrl: "/images/people/academic2.jpg",
    name: "Prof. James Chen",
    designation: "Associate Professor",
    researchInterest: "Natural Language Processing, Deep Learning, AI Ethics",
    email: "james.chen@university.edu",
    biography:
      "Prof. James Chen specializes in natural language understanding and ethical AI development. He has published over 50 papers in leading AI journals and conferences.",
    contactDetails: "+1 (555) 234-5678",
    publicationLink: "https://scholar.google.com/citations?user=example2",
    projectLink: "https://projects.example.com/james-chen",
    softwareLink: "https://github.com/jameschen",
  },
  {
    imageUrl: "/images/people/academic3.jpg",
    name: "Dr. Emily Rodriguez",
    designation: "Assistant Professor",
    researchInterest: "Robotics, Reinforcement Learning, Computer Vision",
    email: "emily.rodriguez@university.edu",
    biography:
      "Dr. Emily Rodriguez focuses on autonomous systems and robotic perception. Her research combines deep learning with real-world robotics applications.",
    contactDetails: "+1 (555) 345-6789",
    publicationLink: "https://scholar.google.com/citations?user=example3",
    projectSoftwareLink: "https://projects.example.com/emily-rodriguez",
  },
];

// ============================================================================
// RESEARCHERS (PostDocs, Research Scientists, etc.)
// ============================================================================
// Add, edit, or remove research staff below using the same format as ACADEMICS_DATA

export const RESEARCHERS_DATA = [
  {
    imageUrl: "/images/people/researcher1.jpg",
    name: "Dr. Michael Park",
    designation: "Senior Research Scientist",
    researchInterest: "Generative AI, GANs, Image Synthesis",
    email: "michael.park@research.edu",
    biography:
      "Dr. Michael Park is a senior researcher specializing in generative models and creative AI. His work on novel GAN architectures has been featured in major AI publications.",
    contactDetails: "+1 (555) 456-7890",
    publicationLink: "https://scholar.google.com/citations?user=example4",
    projectSoftwareLink: "https://projects.example.com/michael-park",
  },
  {
    imageUrl: "/images/people/researcher2.jpg",
    name: "Dr. Lisa Wang",
    designation: "Research Scientist",
    researchInterest: "Speech Recognition, Audio Processing, Deep Learning",
    email: "lisa.wang@research.edu",
    biography:
      "Dr. Lisa Wang develops cutting-edge speech recognition systems using advanced neural architectures. Her research focuses on multilingual speech processing.",
    contactDetails: "+1 (555) 567-8901",
    publicationLink: "https://scholar.google.com/citations?user=example5",
    projectSoftwareLink: "https://projects.example.com/lisa-wang",
  },
  {
    imageUrl: "/images/people/researcher3.jpg",
    name: "Dr. Robert Kim",
    designation: "Postdoctoral Researcher",
    researchInterest:
      "Federated Learning, Privacy-Preserving AI, Edge Computing",
    email: "robert.kim@research.edu",
    biography:
      "Dr. Robert Kim investigates privacy-preserving machine learning techniques for distributed systems. His work enables secure AI deployment across edge devices.",
    contactDetails: "+1 (555) 678-9012",
    publicationLink: "https://scholar.google.com/citations?user=example6",
    projectSoftwareLink: "https://projects.example.com/robert-kim",
  },
];

// ============================================================================
// STUDENTS (PhD, Masters, Undergrad, etc.)
// ============================================================================
// Add, edit, or remove students below using the same format as ACADEMICS_DATA

export const STUDENTS_DATA = [
  {
    imageUrl: "/images/people/student1.jpg",
    name: "Alex Johnson",
    designation: "PhD Candidate",
    researchInterest: "Graph Neural Networks, Knowledge Graphs, Semantic Web",
    email: "alex.johnson@student.edu",
    biography:
      "Alex is a third-year PhD student working on graph-based deep learning methods. Their research aims to improve reasoning capabilities in AI systems.",
    contactDetails: "+1 (555) 789-0123",
    publicationLink: "https://scholar.google.com/citations?user=example7",
    projectSoftwareLink: "https://projects.example.com/alex-johnson",
  },
  {
    imageUrl: "/images/people/student2.jpg",
    name: "Maria Garcia",
    designation: "PhD Candidate",
    researchInterest: "Computer Vision, Medical Imaging, Healthcare AI",
    email: "maria.garcia@student.edu",
    biography:
      "Maria focuses on applying deep learning to medical image analysis. Her work on automated disease detection has shown promising results in clinical settings.",
    contactDetails: "+1 (555) 890-1234",
    publicationLink: "https://scholar.google.com/citations?user=example8",
    projectSoftwareLink: "https://projects.example.com/maria-garcia",
  },
  {
    imageUrl: "/images/people/student3.jpg",
    name: "David Lee",
    designation: "Master's Student",
    researchInterest: "Time Series Analysis, Predictive Modeling, IoT",
    email: "david.lee@student.edu",
    biography:
      "David is a master's student exploring deep learning approaches for time series forecasting in IoT applications. He combines signal processing with modern AI techniques.",
    contactDetails: "+1 (555) 901-2345",
    publicationLink: "https://scholar.google.com/citations?user=example9",
    projectSoftwareLink: "https://projects.example.com/david-lee",
  },
  {
    imageUrl: "/images/people/student4.jpg",
    name: "Sophie Martinez",
    designation: "Master's Student",
    researchInterest:
      "Explainable AI, Model Interpretability, Human-AI Interaction",
    email: "sophie.martinez@student.edu",
    biography:
      "Sophie researches methods to make AI systems more transparent and interpretable. Her work focuses on developing tools for understanding neural network decisions.",
    contactDetails: "+1 (555) 012-3456",
    publicationLink: "https://scholar.google.com/citations?user=example10",
    projectSoftwareLink: "https://projects.example.com/sophie-martinez",
  },
];
