// ============================================================================
// SOFTWARE & PUBLICATIONS PAGE
// ============================================================================
// Edit these values to manage software tools and research publications

/** The page heading - displayed at the top of the Software & Publications page */
export const SOFTWARES_PUBLICATIONS_PAGE_TITLE = "Software & Publications";

// ============================================================================
// SOFTWARE TOOLS AND PUBLICATIONS LIST
// ============================================================================
// Add, edit, or remove items below
// To add a new item: copy one complete block and paste it, then update the details
// To remove an item: delete the entire block
//
// Each item needs:
//   - name: The name of the software or publication
//   - description: What it does or what it's about (brief but informative)
//   - link: The URL where users can access it
//            - For GitHub: https://github.com/username/repo
//            - For papers: https://arxiv.org/... or https://doi.org/...
//            - For journals: direct link to the publication
//   - year: The year it was released or published
//
// EXAMPLE - To add a new publication or software:
// {
//   name: "Data Preprocessing Toolkit",
//   description: "An open-source library for cleaning and preprocessing datasets for machine learning.",
//   link: "https://github.com/cnnt-isrc/data-preprocessing",
//   year: "2024",
// },

export const SOFTWARES_PUBLICATIONS_DATA = [
  {
    name: "Neural Network Optimization Toolkit",
    description:
      "An open-source toolkit for optimizing deep neural networks with energy-efficient algorithms and pruning techniques.",
    link: "https://github.com/cnnt-isrc/nn-optimization",
    year: "2024",
  },
  {
    name: "Sustainable AI Framework",
    description:
      "A comprehensive framework for developing and deploying energy-aware machine learning models with carbon footprint tracking.",
    link: "https://github.com/cnnt-isrc/sustainable-ai",
    year: "2024",
  },
  {
    name: "GreenCompute: Power-Aware Training Library",
    description:
      "Python library for monitoring and reducing energy consumption during model training with real-time power metrics.",
    link: "https://github.com/cnnt-isrc/greencompute",
    year: "2023",
  },
  {
    name: "EcoML: Carbon-Aware Model Selection",
    description:
      "Automated tool for selecting the most energy-efficient machine learning models based on task requirements and environmental impact.",
    link: "https://github.com/cnnt-isrc/ecoml",
    year: "2023",
  },
  {
    name: "Energy-Efficient Deep Learning: A Survey",
    description:
      "Comprehensive survey paper on techniques for reducing energy consumption in deep learning systems, published in ACM Computing Surveys.",
    link: "https://doi.org/10.1145/journal.2024",
    year: "2024",
  },
  {
    name: "Quantization Methods for Sustainable AI",
    description:
      "Research paper on novel quantization techniques that reduce model size and energy consumption while maintaining accuracy.",
    link: "https://arxiv.org/abs/2024.12345",
    year: "2024",
  },
  {
    name: "Carbon-Aware Training Scheduler",
    description:
      "Publication on adaptive training schedulers that optimize model training based on grid carbon intensity and renewable energy availability.",
    link: "https://doi.org/10.1109/conference.2023",
    year: "2023",
  },
  {
    name: "EdgeAI Optimization Suite",
    description:
      "Tools and techniques for deploying efficient AI models on edge devices with minimal power consumption.",
    link: "https://github.com/cnnt-isrc/edgeai-suite",
    year: "2023",
  },
  {
    name: "Federated Learning with Energy Constraints",
    description:
      "Research on federated learning algorithms optimized for energy-constrained devices in distributed environments.",
    link: "https://arxiv.org/abs/2023.67890",
    year: "2023",
  },
  {
    name: "GreenBench: Energy Efficiency Benchmark",
    description:
      "Standardized benchmark suite for evaluating the energy efficiency of machine learning models across different hardware platforms.",
    link: "https://github.com/cnnt-isrc/greenbench",
    year: "2022",
  },
];
