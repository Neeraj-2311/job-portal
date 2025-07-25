import { JobStatus, type Job, type UserProfile } from "../types/types";

export const ProfileData: UserProfile = {
  name: "Aman Gupta",
  email: "amangupta@gmail.com",
  photo: "https://i.pravatar.cc/100?img=12",
  skills: ["React", "TypeScript", "CSS", "JavaScript", "Node.js"],
  bio: "Junior Consultant with 5 years 1 month of experience at Goldenfitch Studies. Passionate about technology and innovation.",
  title: "Junior Consultant",
  company: "Goldenfitch Studies",
  experience: "5 years 1 Month",
  location: "Delhi, India",
  phone: "+91 8161081910",
  linkedinUrl: "https://linkedin.com/in/aman-gupta"
};

export const DummyJobs: Job[] = [

  {
    id: 1,
    title: "UX Designer",
    company: "Facebook",
    logo: "",
    logoColor: "bg-red-600",
    location: "New York",
    experience: "5+ yrs exp",
    salary: "$120,000",
    type: "Full-time",
    remote: "Hybrid",
    posted: "1d ago",
    match: 78,
    status: "GREAT",
    connections: "15 connections",
    salaryNote: "Attractive Salary",
    actionText: "Apply now",
    growthOpportunities: true,
    activelyHiring: true,
    applied: false
  },
  {
    id: 2,
    title: "Risk Analytics",
    company: "Wells Fargo",
    logo: "",
    logoColor: "bg-red-600",
    location: "Bengaluru",
    experience: "4+ yrs exp",
    salary: "Not Disclosed",
    type: "Full-time",
    remote: "From Office",
    posted: "4d ago",
    match: 50,
    status: "AVERAGE",
    connections: "6 connections",
    salaryNote: "High Salary",
    actionText: "Apply early",
    growthOpportunities: true,
    activelyHiring: true,
    applied: false
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Facebook",
    logo: "",
    logoColor: "bg-red-600",
    location: "New York",
    experience: "5+ yrs exp",
    salary: "$120,000",
    type: "Full-time",
    remote: "Hybrid",
    posted: "1d ago",
    match: 78,
    status: "GREAT",
    connections: "15 connections",
    salaryNote: "Attractive Salary",
    actionText: "Apply now",
    growthOpportunities: true,
    activelyHiring: true,
    applied: true,
    appliedTime: "1h ago"
  },
  {
    id: 4,
    title: "Risk Analytics",
    company: "Wells Fargo",
    logo: "",
    logoColor: "bg-red-600",
    location: "Bengaluru",
    experience: "4+ yrs exp",
    salary: "",
    type: "Full-time",
    remote: "From Office",
    posted: "4d ago",
    match: 50,
    status: "POOR",
    connections: "6 connections",
    salaryNote: "High Salary",
    actionText: "Apply early",
    growthOpportunities: true,
    activelyHiring: false,
    applied: false
  }
];

export const DummyJobDetailsData = {
  id: 1,
  title: "Risk Analytics Consultant",
  company: "Wells Fargo",
  rating: 4.2,
  reviews: "3.1k Reviews",
  location: "Bengaluru",
  experience: "4+ yrs exp",
  salary: "Not Disclosed",
  type: "Full-time",
  remote: "From Office",
  connections: "6 connections",
  salaryNote: "High Salary",
  actionText: "Apply early",
  posted: "May 07, 2023",
  postedBy: "Jay Patel",
  openings: "04",
  applicants: "100+",
  match: 78,
  status: JobStatus.GREAT,
  about: "You will help us deliver on our vision and build strong relationships with Enterprise partners. You will also have the opportunity to demonstrate leadership through contributing to a company culture that supports customers in achieving their financial goals, team members in developing their careers, and communities in continuing to thrive. As part of a team that serves one in three American households, you will pl...",
  jobDetails: [
    "Generate precise and comprehensive customer lists for marketing campaigns with efficiency and adherence to policies in a timely manner.",
    "Using a GUI (HCL Unica Campaign) to connect to multiple databases, to design and run marketing and lead-generation campaigns which will be executed across many different data platforms with multiple distribution channels (direct mail, email, phone, ATM, online banners, etc.).",
    "Building and strengthening strong business relationships with peers and partners in order to identify, define, build, and execute complex direct marketing initiatives.",
    "Consulting with partners to identify and define technical business requirements based on marketing and business needs.",
    "Collaborating with a consultative approach and an ability to work independently.",
    "Ensuring adherence to privacy, information security, legal, compliance, and WF business policies and regulations, and ensuring that all audit requirements are met and documented."
  ],
  requiredQualifications: {
    skills: [
      "BS/BA Degree or higher",
      "1+ Years of Work Experience",
      "1+ years of SQL",
      "A+ in PowerPoint",
      "A+ in MS Excel",
      "A+ in MS Word",
      "Excellent Analytical Skills",
      "Excellent Problem Solving Skills",
      "Effective Communication",
      "Seamlessly Collaborative"
    ],
    details: [
      "2+ years of campaign execution, reporting and analytics experience, or a combination of both; or a BS/BA degree or higher in a quantitative field such as applied math, statistics, engineering, physics, accounting, finance, economics, econometrics, computer sciences, or business/social and behavioral sciences with a quantitative emphasis from tier 1 universities.",
      "1+ years of Experience with campaign management software, preferably used HCL Unica Campaign (formerly Unica Affinium/IBM Unica Campaign) from top tier banks.",
      "Ability to identify inefficiencies and opportunities to improve the process."
    ]
  },
  additionalQualifications: [
    "Experience in gathering, analyzing and interpreting large datasets.",
    "Strong analytical skills with high attention to detail and accuracy.",
    "End-to-end marketing campaign management experience."
  ],
  tags: ["Product Design", "Branding", "User Experience"],
  growthOpportunities: true,
  activelyHiring: false
};