export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  link: string
  technologies: string[]
  gradient: string
  features: string[]
  status: 'Live' | 'Development' | 'Beta'
  launchDate?: string
}

export const projects: Project[] = [
  {
    id: "v-dex",
    title: "V-Dex",
    category: "Blockchain",
    description: "Decentralized exchange platform enabling secure and efficient token trading with advanced liquidity management",
    longDescription: "V-Dex is a cutting-edge decentralized exchange that provides secure, efficient token trading with advanced liquidity management features. Built on the latest DeFi protocols, it offers users a seamless trading experience while maintaining the highest security standards and providing innovative liquidity solutions.",
    image: "/images/v-dex-preview.jpg",
    link: "https://temp-v-dex-website-main.vercel.app",
    technologies: ["Solidity", "Web3.js", "React", "Uniswap", "Chainlink"],
    gradient: "from-gray-800 to-gray-900",
    features: [
      "Advanced trading algorithms",
      "Multi-chain support",
      "Liquidity mining rewards",
      "Low slippage trading",
      "Real-time market data"
    ],
    status: "Live",
    launchDate: "2025"
  },
  {
    id: "techvitta-main",
    title: "TechVitta.in",
    category: "Business",
    description: "Main corporate website showcasing TechVitta's services and portfolio",
    longDescription: "TechVitta.in is our main corporate website that serves as the central hub for all our services, portfolio, and company information. It provides comprehensive details about our blockchain solutions, team, and contact information for potential clients and partners.",
    image: "/images/techvitta-preview.jpg",
    link: "https://techvitta.in",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    gradient: "from-gray-500 to-gray-600",
    features: [
      "Corporate branding",
      "Service showcase",
      "Portfolio display",
      "Contact information",
      "Responsive design"
    ],
    status: "Live",
    launchDate: "2025"
  },
  {
    id: "hrms",
    title: "HRMS.techvitta.in",
    category: "Business",
    description: "Human Resource Management System for efficient workforce management",
    longDescription: "HRMS.techvitta.in is a comprehensive Human Resource Management System designed to streamline HR operations. It provides tools for employee management, payroll processing, attendance tracking, and performance evaluation, making it easier for organizations to manage their workforce effectively.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center",
    link: "https://hrms.techvitta.in",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-gray-400 to-gray-500",
    features: [
      "Employee management",
      "Payroll processing",
      "Attendance tracking",
      "Performance evaluation",
      "Report generation"
    ],
    status: "Live",
    launchDate: "2025"
  },
  {
    id: "techvittahms",
    title: "TechVittaHMS.in",
    category: "Healthcare",
    description: "Hospital Management System for comprehensive healthcare facility management",
    longDescription: "TechVittaHMS.in is a comprehensive Hospital Management System designed to streamline healthcare operations. It provides tools for patient management, appointment scheduling, medical records, billing, and inventory management, helping healthcare facilities operate more efficiently.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center",
    link: "https://techvittahms.in",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    gradient: "from-gray-300 to-gray-400",
    features: [
      "Patient management",
      "Appointment scheduling",
      "Medical records",
      "Billing system",
      "Inventory management"
    ],
    status: "Live",
    launchDate: "2025"
  },
  {
    id: "nurseryshop",
    title: "NurseryShop.in",
    category: "E-commerce",
    description: "Online nursery and plant shop for gardening enthusiasts",
    longDescription: "NurseryShop.in is an e-commerce platform specializing in plants, gardening tools, and nursery supplies. It provides a comprehensive online shopping experience for gardening enthusiasts, offering a wide variety of plants, seeds, tools, and expert advice for successful gardening.",
    image: "/images/nurseryshop-preview.jpg",
    link: "https://nurseryshop.in",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-gray-600 to-gray-700",
    features: [
      "Plant catalog",
      "Online shopping",
      "Expert advice",
      "Delivery tracking",
      "Gardening tips"
    ],
    status: "Live",
    launchDate: "2025"
  },
  {
    id: "pulasa",
    title: "Pulasa.com",
    category: "E-commerce",
    description: "Specialized e-commerce platform for premium fish and seafood",
    longDescription: "Pulasa.com is a specialized e-commerce platform focused on premium fish and seafood products. It provides fresh, high-quality fish and seafood with proper packaging and delivery, ensuring customers receive the best products for their culinary needs.",
    image: "/images/pulasa-preview.jpg",
    link: "https://pulasa.com",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    gradient: "from-gray-700 to-gray-800",
    features: [
      "Fresh fish delivery",
      "Quality assurance",
      "Proper packaging",
      "Fast delivery",
      "Customer support"
    ],
    status: "Live",
    launchDate: "2025"
  },
  {
    id: "fishpulusu",
    title: "FishPulusu.com",
    category: "E-commerce",
    description: "Online marketplace for traditional fish curry and seafood products",
    longDescription: "FishPulusu.com is an online marketplace specializing in traditional fish curry and seafood products. It offers authentic regional fish dishes, spices, and ingredients, bringing traditional flavors to customers' doorsteps with proper packaging and delivery.",
    image: "/images/fishpulusu-preview.jpg",
    link: "https://fishpulusu.com",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-gray-800 to-gray-900",
    features: [
      "Traditional recipes",
      "Authentic ingredients",
      "Regional flavors",
      "Proper packaging",
      "Home delivery"
    ],
    status: "Live",
    launchDate: "2025"
  },
  {
    id: "macroworkers",
    title: "Macroworkers.com",
    category: "Community",
    description: "Task marketplace connecting professionals with micro and macro opportunities to earn and grow",
    longDescription: "Macroworkers.com is a comprehensive task marketplace that bridges the gap between skilled professionals and businesses seeking specific expertise. Our platform facilitates both micro and macro opportunities, enabling professionals to find work that matches their skills and schedule while helping businesses access top talent efficiently.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center",
    link: "https://macroworkers.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    gradient: "from-gray-400 to-gray-500",
    features: [
      "Skill-based matching",
      "Flexible work arrangements",
      "Secure payment processing",
      "Quality assurance system",
      "Professional networking"
    ],
    status: "Live",
    launchDate: "2025"
  },
  {
    id: "macrostudents",
    title: "Macrostudents.com",
    category: "Education",
    description: "Platform for working and earning opportunities for students and colleges",
    longDescription: "Macrostudents.com is dedicated to empowering students and educational institutions by providing access to meaningful work opportunities and earning potential. Our platform connects students with projects that enhance their learning while providing financial support for their education.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center",
    link: "https://macrostudents.com",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Vercel", "Stripe"],
    gradient: "from-gray-700 to-gray-800",
    features: [
      "Student-friendly opportunities",
      "Academic integration",
      "Skill development programs",
      "Mentorship connections",
      "Career guidance resources"
    ],
    status: "Live",
    launchDate: "2025"
  }
]

export const categories = [
  {
    id: "blockchain",
    name: "Blockchain",
    description: "Decentralized applications and blockchain solutions",
    icon: "🔗",
    count: projects.filter(p => p.category === "Blockchain").length
  },
  {
    id: "business",
    name: "Business",
    description: "Business management systems and corporate solutions",
    icon: "💼",
    count: projects.filter(p => p.category === "Business").length
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Healthcare management and medical systems",
    icon: "🏥",
    count: projects.filter(p => p.category === "Healthcare").length
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    description: "Online marketplaces and e-commerce platforms",
    icon: "🛒",
    count: projects.filter(p => p.category === "E-commerce").length
  },
  {
    id: "community",
    name: "Community",
    description: "Community platforms and social applications",
    icon: "👥",
    count: projects.filter(p => p.category === "Community").length
  },
  {
    id: "education",
    name: "Education",
    description: "Educational platforms and learning solutions",
    icon: "🎓",
    count: projects.filter(p => p.category === "Education").length
  }
]
