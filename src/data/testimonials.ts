export interface Testimonial {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  achievements: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    title: "Our Clients Win With Our Campaigns.",
    subtitle: "Our award-winning strategies have set the standard in social media engagement and brand growth.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    achievements: [
      "Global Influencer Marketing Agency of the Year (IMA 2025 Bronze)",
      "Best Travel Campaign (bCreator2024)",
      "Best Travel and Lifestyle Campaign (IMA 2023)",
    ],
  },
  {
    id: 2,
    title: "Trusted by Leading Brands Worldwide.",
    subtitle: "We've helped Fortune 500 companies and startups achieve remarkable growth through innovative digital strategies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    achievements: [
      "200% increase in client conversion rates on average",
      "Managed campaigns for over 100+ global brands",
      "Generated $50M+ in revenue for our clients",
    ],
  },
  {
    id: 3,
    title: "Innovation Meets Excellence.",
    subtitle: "Our cutting-edge approach combines data-driven insights with creative excellence to deliver outstanding results.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    achievements: [
      "Featured in Forbes, TechCrunch, and The Verge",
      "Industry-leading 98% client retention rate",
      "Recognized for innovation in digital marketing 5 years running",
    ],
  },
  {
    id: 4,
    title: "See Real, Measurable Results.",
    subtitle: "We focus on data-backed strategies to ensure every campaign delivers a high return on investment (ROI).",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    achievements: [
      "Achieved a 5:1 average ROI for clients",
      "Increased organic traffic by 150% in 12 months for a major e-commerce client",
      "Reduced cost-per-acquisition (CPA) by 30% for B2B services",
    ],
  },
  {
    id: 5,
    title: "Partnership for Long-Term Success.",
    subtitle: "We build lasting relationships, acting as an extension of your team to ensure sustained market dominance.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    achievements: [
      "Voted 'Most Collaborative Agency' by industry peers (2024)",
      "Executed 5+ successful brand pivots for clients",
      "Longest client relationship: 8 years and counting",
    ],
  },
];