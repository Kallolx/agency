export interface CaseStudyProject {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  buttons?: {
    primary?: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
}

export const caseStudyProjects: CaseStudyProject[] = [
  {
    id: 1,
    category: "Influencer Marketing",
    title: "Global Launch for a Tech Gadget",
    description:
      "Executed a multi-platform influencer campaign that generated over 50 million impressions and drove a 300% surge in pre-orders for a new smart gadget.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=800&fit=crop",
    buttons: {
      primary: { text: "View full study", href: "#" },
      secondary: { text: "preview", href: "#" },
    },
  },
  {
    id: 2,
    category: "Brand Strategy & UX/UI",
    title: "Revitalizing a Heritage Automotive Brand",
    description:
      "We redefined the digital brand identity and redesigned the main corporate website, resulting in a 45% increase in lead generation and test drive bookings.",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&h=800&fit=crop",
    buttons: {
      primary: { text: "View full study", href: "#" },
      secondary: { text: "preview", href: "#" },
    },
  },
  {
    id: 3,
    category: "Data & Analytics",
    title: "Optimizing Healthcare Patient Acquisition",
    description:
      "Implemented an advanced data analytics pipeline and personalized ad strategy, reducing cost-per-acquisition (CPA) by 60% and increasing patient enrollment by 75%.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    buttons: {
      primary: { text: "View full study", href: "#" },
      secondary: { text: "preview", href: "#" },
    },
  },
  {
    id: 4,
    category: "Mobile App Development",
    title: "Building a Next-Gen Fitness Platform",
    description:
      "Designed and developed a highly-rated mobile fitness application with integrated AI coaching, achieving over 1 million downloads in the first year.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    buttons: {
      primary: { text: "View full study", href: "#" },
      secondary: { text: "preview", href: "#" },
    },
  },
  {
    id: 5,
    category: "Content Marketing",
    title: "Establishing Thought Leadership in Fintech",
    description:
      "Developed a comprehensive content strategy, producing high-value whitepapers and webinars that positioned a Fintech client as a key industry leader, boosting B2B leads by 120%.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    buttons: {
      primary: { text: "View full study", href: "#" },
      secondary: { text: "preview", href: "#" },
    },
  },
];