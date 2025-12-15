"use client";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CgWebsite } from "react-icons/cg";
import { FaServer } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import Card from "@/components/ui/card/view/Card";
import { CardItemEntity } from "@/components/ui/card/domain/card.types";

const points: CardItemEntity[] = [
  {
    id: "1",
    icon: CgWebsite, // your SVG component
    title: "Frontend",
    description: "Crafting pixel-perfect, responsive user interfaces.",
    points: [
      { label: "React", color: "#2563EB" },
      { label: "Next.js", color: "#000000" },
      { label: "Tailwind CSS", color: "#06B6D4" },
      { label: "TypeScript", color: "#2563EB" },
      { label: "Redux", color: "#764ABC" },
      { label: "Bootstrap", color: "#7952B3" },
      { label: "jQuery", color: "#0769AD" },
    ],
  },
  {
    id: "2",
    icon: FaServer,
    title: "Backend",
    description: "Robust server-side logic and high-performance APIs.",
    points: [
      { label: "Node.js", color: "#16A34A" },
      { label: "Express.js", color: "#4B5563" },
      { label: "PHP", color: "#777BB4" },
      { label: "Laravel", color: "#FF2D20" },
      { label: "MySQL", color: "#4479A1" },
      { label: "Express.js", color: "#4B5563" },
      { label: "PostgreSQL", color: "#3B82F6" },
      { label: "Event-Driven", color: "#3B82F6" },
      { label: "Microservices", color: "#3B82F6" },
    ],
  },
  {
    id: "3",
    icon: FaCloud,
    title: "Cloud",
    description: "Secure, scalable, and cost-effective cloud infrastructure.",
    points: [
      { label: "AWS", color: "#F59E0B" },
      { label: "S3,CloudFront and Route 53", color: "#EF4444" },
      { label: "EC2, Lambda and API Gateway", color: "#10B981" },
      { label: "RDS and DynamoDB", color: "#3B82F6" },
      { label: "EKS and ECR", color: "#6366F1" },
      { label: "Azure", color: "#0078D4" },
      { label: "AKS and ACR", color: "#2563EB" },
    ],
  },
  {
    id: "4",
    icon: FaTools,
    title: "DevOps",
    description: "Automating deployment pipelines and ensuring code quality.",
    points: [
      { label: "GitHub Actions", color: "#111827" },
      { label: "Docker", color: "#2563EB" },
      { label: "Kubernetes", color: "#3B82F6" },
      { label: "Jenkins", color: "#D24939" },
      { label: "Terraform", color: "#7C3AED" },
      { label: "CI/CD", color: "#10B981" },
      { label: "Jira", color: "#0052CC" },
      { label: "Agile", color: "#EF4444" },
      { label: "Scrum", color: "#EF4444" },
      { label: "Argo CD", color: "#2563EB" },
      { label: "Git", color: "#F97316" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-20" id="techStack">
      <div className="container mx-auto">
        <SectionTitle subtitle="Expertise" title="Technical stack" />

        <Card items={points} />
      </div>
    </section>
  );
}
