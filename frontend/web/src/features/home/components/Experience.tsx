"use client";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline, TimelineItemEntity } from "@/components/ui/timeline";
import { LuBriefcase } from "react-icons/lu";

const items: TimelineItemEntity[] = [
  {
    id: "1",
    icon: LuBriefcase,
    title: "Senior Full Stack Developer",
    subtitle: "Simbiotik Technologies SDN BHD, Malaysia",
    description:
      "Architected and migrated legacy monolith systems into scalable microservices using React, Node.js, Kubernetes, AWS, and Azure. Built a Kafka-based payment synchronization log system ensuring accurate payment capture validation before reservation processing. Implemented CI/CD pipelines, optimized backend performance, and enhanced system reliability through event-driven design.",
    tags: [
      "React",
      "Node.js",
      "TypeScript",
      "Next.js",
      "PHP",
      "MySQL",
      "AWS",
      "Azure",
      "Kubernetes",
      "Kafka",
      "Microservices",
      "DevOps",
      "CI/CD",
      "Event-Driven",
    ],
    period: "Jan 2020 - Present",
    isOngoing: true,
  },

  {
    id: "2",
    icon: LuBriefcase,
    title: "Principal Full Stack Developer",
    subtitle: "Zurdox Inc, India",
    description:
      "Built a SaaS-based sports coach networking platform with authentication, scheduling, messaging, and community modules. Developed a sports apparel e-commerce application including catalog, cart, checkout, and order management. Created a content aggregator system that fetched, normalized, and displayed articles and videos using RSS feeds and YouTube API.",
    tags: [
      "PHP",
      "SaaS",
      "React",
      "Node.js",
      "MySQL",
      "REST API",
      "YouTube API",
      "RSS Feeds",
      "E-commerce",
      "Full Stack",
    ],
    period: "Jul 2019 - Dec 2020",
    isOngoing: false,
  },

  {
    id: "3",
    icon: LuBriefcase,
    title: "Web Developer",
    subtitle: "Orbiten Technologies, India",
    description:
      "Contributed to a high-volume concurrent event ticket booking system with seat allocation logic and race-condition-safe availability checks. Developed custom plugins and backend modules for a fashion accessories e-commerce platform, including dynamic variants, coupons, and custom checkout workflows.",
    tags: [
      "React",
      "Node.js",
      "PHP",
      "MySQL",
      "E-commerce",
      "Plugins",
      "Event System",
      "Concurrency",
    ],
    period: "Nov 2017 - Jun 2019",
    isOngoing: false,
  },

  {
    id: "4",
    icon: LuBriefcase,
    title: "Junior Web Developer",
    subtitle: "Cartzapp, India",
    description:
      "Developed core e-commerce modules including product listing, shopping cart, and admin dashboards using PHP, MySQL, jQuery, HTML, and CSS. Customized storefront themes, enhanced performance, and integrated third-party payment gateways.",
    tags: ["PHP", "MySQL", "jQuery", "HTML", "CSS", "E-commerce"],
    period: "Jun 2015 - Oct 2017",
    isOngoing: false,
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="container mx-auto">
        <SectionTitle title="Professional Experience" subtitle="My Journey " />
        {/* Experience items can be added here in the future */}
        <Timeline items={items} />
      </div>
    </section>
  );
}
