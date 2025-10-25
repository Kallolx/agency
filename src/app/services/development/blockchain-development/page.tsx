import ServiceHero from "@/components/services/ServiceHero";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import ServiceProcess from "@/components/services/ServiceProcess";
import ServiceCTA from "@/components/services/ServiceCTA";
import { Blocks, Shield, Zap, Lock, Code, Network } from "lucide-react";

export default function BlockchainDevelopmentPage() {
  const features = [
    {
      icon: <Blocks size={32} />,
      title: "Smart Contracts",
      description: "Secure, audited smart contracts built with Solidity for Ethereum and other blockchain platforms.",
    },
    {
      icon: <Shield size={32} />,
      title: "Security Focused",
      description: "Rigorous security audits and best practices to protect against vulnerabilities and exploits.",
    },
    {
      icon: <Zap size={32} />,
      title: "DApp Development",
      description: "Full-stack decentralized applications with intuitive interfaces and blockchain integration.",
    },
    {
      icon: <Lock size={32} />,
      title: "Tokenization",
      description: "Custom token creation for cryptocurrencies, NFTs, and other blockchain-based assets.",
    },
    {
      icon: <Code size={32} />,
      title: "Web3 Integration",
      description: "Seamless integration with MetaMask, WalletConnect, and other Web3 wallets and services.",
    },
    {
      icon: <Network size={32} />,
      title: "Multi-Chain Support",
      description: "Development across Ethereum, Polygon, BSC, Solana, and other blockchain networks.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Concept & Strategy",
      description: "Understanding your blockchain use case, defining requirements, and planning the technical architecture.",
    },
    {
      number: "02",
      title: "Smart Contract Design",
      description: "Designing and developing smart contracts with security and gas optimization as top priorities.",
    },
    {
      number: "03",
      title: "DApp Development",
      description: "Building the frontend and backend components that interact with your smart contracts.",
    },
    {
      number: "04",
      title: "Testing & Audit",
      description: "Comprehensive testing on testnets and professional security audits before mainnet deployment.",
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "Mainnet deployment, monitoring, and ongoing support for your blockchain application.",
    },
  ];

  return (
    <main>
      <ServiceHero
        category="Development"
        title="Blockchain Development"
        description="Harness the power of blockchain technology. We build secure, scalable decentralized applications and smart contracts that revolutionize how business is done."
      />
      <ServiceFeatures features={features} />
      <ServiceProcess steps={processSteps} />
      <ServiceCTA
        title="Ready to build on blockchain?"
        description="Let's create innovative blockchain solutions that bring transparency, security, and efficiency to your business."
      />
    </main>
  );
}
