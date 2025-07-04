
import { Job } from "@/contexts/SavedJobsContext";

export const mockJobs: Job[] = [
  {
    id: "job1",
    title: "Senior React Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    salary: "$120k - $160k",
    type: "Full-time",
    posted: "2 days ago",
    description: "Join our innovative team building next-generation web applications using React, TypeScript, and modern development practices. We are looking for experienced developers who can contribute to our growing platform and mentor junior team members.",
    skills: ["React", "TypeScript", "Redux", "Node.js", "GraphQL"],
    featured: true
  },
  {
    id: "job2",
    title: "UX/UI Designer", 
    company: "DesignHub",
    location: "Remote",
    salary: "$90k - $120k",
    type: "Full-time",
    posted: "1 week ago",
    description: "Create beautiful, intuitive interfaces for web and mobile applications. Work with a collaborative team of designers and developers to deliver exceptional user experiences.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "UI Design"],
    featured: true
  },
  {
    id: "job3",
    title: "DevOps Engineer",
    company: "CloudSystems",
    location: "Chicago, IL", 
    salary: "$110k - $140k",
    type: "Full-time",
    posted: "3 days ago",
    description: "Manage our cloud infrastructure and CI/CD pipelines. Implement automation and ensure high availability of our services across multiple environments.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    featured: true
  },
  {
    id: "job4",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    salary: "$130k - $170k", 
    type: "Full-time",
    posted: "Just now",
    description: "Apply machine learning and statistical modeling to solve complex business problems. Work with large datasets and create actionable insights for our clients.",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization", "Statistics"],
    featured: false
  },
  {
    id: "job5",
    title: "Product Manager",
    company: "InnovateCo",
    location: "New York, NY",
    salary: "$115k - $150k",
    type: "Full-time", 
    posted: "2 weeks ago",
    description: "Lead product development from conception to launch. Work with cross-functional teams to define product vision and roadmap for our suite of applications.",
    skills: ["Product Strategy", "Agile", "User Stories", "Market Research", "Roadmapping"],
    featured: false
  },
  {
    id: "job6", 
    title: "Backend Engineer",
    company: "ServerStack",
    location: "Seattle, WA",
    salary: "$125k - $155k",
    type: "Full-time",
    posted: "3 days ago",
    description: "Design and implement scalable backend services. Work with databases, APIs, and server-side technologies to build robust applications.",
    skills: ["Java", "Spring Boot", "PostgreSQL", "RESTful APIs", "Microservices"],
    featured: false
  },
  {
    id: "job7",
    title: "Frontend Developer", 
    company: "WebWorks",
    location: "Austin, TX",
    salary: "$90k - $120k",
    type: "Contract",
    posted: "1 week ago",
    description: "Create responsive and interactive user interfaces using modern frontend technologies. Collaborate with designers to implement pixel-perfect designs.",
    skills: ["JavaScript", "React", "CSS", "HTML", "Responsive Design"],
    featured: false
  },
  {
    id: "job8",
    title: "Mobile App Developer",
    company: "AppGenius", 
    location: "Remote",
    salary: "$100k - $130k",
    type: "Part-time",
    posted: "5 days ago",
    description: "Develop native mobile applications for iOS and Android platforms. Focus on performance and user experience to deliver high-quality mobile solutions.",
    skills: ["Swift", "Kotlin", "Mobile UI Design", "API Integration", "App Store Deployment"],
    featured: false
  },
];
