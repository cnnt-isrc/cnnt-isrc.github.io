// ============================================================================
// PROJECTS PAGE
// ============================================================================
// Edit these values to manage research projects displayed on your Projects page

/** The page heading - displayed at the top of the Projects page */
export const PROJECTS_PAGE_TITLE = "Projects";

// ============================================================================
// PROJECTS LIST
// ============================================================================
// Add, edit, or remove projects below
// To add a new project: copy one complete project block and paste it, then update the details
// To remove a project: delete the entire project block
//
// Each project needs:
//   - slug: A URL-friendly identifier (lowercase, use hyphens instead of spaces)
//           Example: "neural-architecture-search" becomes accessible at /projects/neural-architecture-search
//   - projectName: The official name of the project
//   - lead: Name(s) of the project leader(s)
//   - year: Year the project started
//   - funding: Grant information and amount
//   - description: What the project is about (detailed explanation)
//   - videoUrl: (Optional) Path to project video if available
//   - softwareLink: (Optional) Link to code/software repository
//
// EXAMPLE - To add a new project:
// {
//   slug: "quantum-computing-applications",
//   projectName: "Quantum Computing Applications",
//   lead: "Dr. Emily Rodriguez",
//   year: "2024",
//   funding: "NSF Grant #98765 - $800,000",
//   description: "Exploring practical applications of quantum computing in optimization problems.",
//   videoUrl: "/videos/quantum-project.mp4",
//   softwareLink: "https://github.com/cnnt-isrc/quantum-app",
// },

export const PROJECTS_DATA = [
  {
    slug: "neural-architecture-search-for-edge-devices",
    projectName: "Neural Architecture Search for Edge Devices",
    lead: "Dr. Sarah Mitchell",
    year: "2023",
    funding: "NSF Grant #12345 - $500,000",
    description:
      "Developing automated neural architecture search algorithms optimized for resource-constrained edge computing devices. This project aims to reduce model size by 80% while maintaining 95% accuracy for real-time inference on mobile and IoT platforms.",
    videoUrl: "/videos/project1.mp4",
    softwareLink: "https://github.com/cnnt-isrc/nas-edge",
  },
  {
    slug: "explainable-ai-for-medical-diagnosis",
    projectName: "Explainable AI for Medical Diagnosis",
    lead: "Prof. James Chen",
    year: "2022",
    funding: "NIH Grant #67890 - $750,000",
    description:
      "Creating interpretable deep learning models for medical imaging that provide clinicians with transparent reasoning behind diagnostic predictions. Focus areas include radiology, pathology, and dermatology applications with built-in uncertainty quantification.",
    videoUrl: "/videos/project2.mp4",
    softwareLink: "https://github.com/cnnt-isrc/xai-medical",
  },
  {
    slug: "federated-learning-for-privacy-preserving-healthcare",
    projectName: "Federated Learning for Privacy-Preserving Healthcare",
    lead: "Dr. Emily Rodriguez",
    year: "2024",
    funding: "Industry Partnership - Google Research - $400,000",
    description:
      "Implementing federated learning frameworks that enable collaborative machine learning across multiple hospitals without sharing sensitive patient data. Incorporates differential privacy and secure aggregation protocols.",
    softwareLink: "https://github.com/cnnt-isrc/fedhealth",
  },
  {
    slug: "multi-modal-learning-for-autonomous-robotics",
    projectName: "Multi-Modal Learning for Autonomous Robotics",
    lead: "Dr. Michael Park",
    year: "2021",
    funding: "DARPA Grant #45678 - $1,200,000",
    description:
      "Developing multi-modal perception systems combining vision, lidar, and tactile sensing for autonomous robotic manipulation in unstructured environments. Applications include disaster response, warehouse automation, and assistive robotics.",
    videoUrl: "/videos/project3.mp4",
    softwareLink: "https://github.com/cnnt-isrc/multimodal-robotics",
  },
  {
    slug: "graph-neural-networks-for-drug-discovery",
    projectName: "Graph Neural Networks for Drug Discovery",
    lead: "Dr. Lisa Wang",
    year: "2023",
    funding: "Pharmaceutical Industry Consortium - $600,000",
    description:
      "Applying graph neural networks to predict molecular properties and drug-target interactions. This computational approach accelerates the drug discovery pipeline by identifying promising candidates early in the development process.",
    videoUrl: "/videos/project4.mp4",
    softwareLink: "https://github.com/cnnt-isrc/gnn-drugs",
  },
  {
    slug: "sustainable-ai-energy-efficient-deep-learning",
    projectName: "Sustainable AI: Energy-Efficient Deep Learning",
    lead: "Dr. Robert Kim",
    year: "2024",
    funding: "Department of Energy Grant #23456 - $450,000",
    description:
      "Researching novel training techniques and model architectures that reduce the carbon footprint of deep learning by up to 90%. Includes work on sparse networks, quantization, and efficient hardware utilization strategies.",
    softwareLink: "https://github.com/cnnt-isrc/sustainable-ai",
  },
  {
    slug: "real-time-sign-language-translation",
    projectName: "Real-Time Sign Language Translation",
    lead: "Alex Johnson & Maria Garcia",
    year: "2022",
    funding: "Accessibility Foundation Grant - $300,000",
    description:
      "Building real-time sign language recognition and translation systems using advanced computer vision and NLP techniques. Supports multiple sign languages including ASL, BSL, and ISL with mobile deployment capabilities.",
    videoUrl: "/videos/project5.mp4",
    softwareLink: "https://github.com/cnnt-isrc/signlang-translate",
  },
  {
    slug: "ai-powered-climate-modeling-and-prediction",
    projectName: "AI-Powered Climate Modeling and Prediction",
    lead: "Dr. Sarah Mitchell & Prof. James Chen",
    year: "2023",
    funding: "NSF Climate Initiative - $900,000",
    description:
      "Leveraging deep learning to improve climate prediction models with focus on extreme weather events, sea level rise, and regional climate patterns. Integrates satellite imagery, sensor networks, and historical climate data.",
    videoUrl: "/videos/project6.mp4",
    softwareLink: "https://github.com/cnnt-isrc/climate-ai",
  },
];
