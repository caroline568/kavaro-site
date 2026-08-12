import smartImg from "@/assets/S Mart.png";
import smargoImg from "@/assets/smargo-homepage.webp";
import mediflowImg from "@/assets/mediflow.png";
import kavaroAiSupportImg from "@/assets/kavaro-ai-support.png";
import bookflowImg from "@/assets/bookflow.png";
import kavaroCommerceImg from "@/assets/kavaro-commerce.png";
import closeflowImg from "@/assets/closeflow.png";
import learnhubImg from "@/assets/learnhub.png";

export type Project = {
  title: string;
  type: string;
  problem: string;
  solution: string;
  tools: string[];
  outcome: string;
  accent: string;
  image?: string;
  link?: string;
};

// The first FEATURED_COUNT entries are the flagship proof-of-work projects
// shown by default on the Work page and in the homepage preview — the rest
// reveal after the "Load More" click on the Work page.
export const FEATURED_COUNT = 3;

export const projects: Project[] = [
  {
    title: "MediFlow",
    type: "Healthcare Booking Platform",
    problem:
      "Local clinics rely on phone calls for appointments - patients wait, lines drop, no-shows are high, and staff spend their day on the phone instead of with patients.",
    solution:
      "A patient-facing booking platform with live doctor availability, instant confirmation, free rescheduling, and a 24/7 AI patient assistant for common questions. Clinics get a console for schedules, patient records, and daily analytics.",
    tools: ["React", "Tailwind", "Supabase", "AI Assistant"],
    outcome:
      "Live product: booking takes under a minute, records are scoped so staff only see what their role allows, and the AI assistant handles the questions that used to tie up the front desk.",
    accent: "linear-gradient(135deg, #1e3a5f, #0a1929)",
    image: mediflowImg,
    link: "https://healthbuddy-appointments.lovable.app",
  },
  {
    title: "Kavaro AI Support",
    type: "AI Customer Support Product",
    problem:
      "Service businesses repeat the same 20 questions all day - pricing, hours, location, booking - and generic chatbots either invent answers or can't be trusted with customers.",
    solution:
      "An AI support widget trained only on a business's own documents - FAQs, policies, pricing. It answers from that content, escalates what it doesn't know, and embeds on any site with one line of code.",
    tools: ["React", "OpenAI API", "Node.js"],
    outcome:
      "Live Kavaro Agency product with a dashboard showing resolution rate, popular questions, gaps in the knowledge base, and every lead the assistant captures.",
    accent: "linear-gradient(135deg, #4a2d5f, #1a0f2a)",
    image: kavaroAiSupportImg,
    link: "https://kavaro-support-ai.lovable.app",
  },
  {
    title: "BookFlow",
    type: "Booking & Operations Dashboard",
    problem:
      "Kenyan service businesses - salons, studios, consultants - juggle bookings, staff schedules, and payments across notebooks, calls, and M-Pesa messages with no single source of truth.",
    solution:
      "An operational dashboard covering daily bookings, staff status, client history, and M-Pesa-ready payment tracking, built around a clear daily ledger instead of scattered records.",
    tools: ["React", "Tailwind", "Supabase"],
    outcome:
      "Live product tracking daily revenue, appointment status, and client retention in one view, with WhatsApp connected for confirmations.",
    accent: "linear-gradient(135deg, #6b2d2d, #2a0f0f)",
    image: bookflowImg,
    link: "https://my-biz-bookings.lovable.app",
  },
  {
    title: "Smargo - Farm-to-Institution Marketplace",
    type: "Web Development Project",
    problem:
      "Farmers often rely on middlemen who reduce their earnings, while institutions like schools and hospitals struggle to access fresh produce directly from reliable suppliers.",
    solution:
      "Built a responsive marketplace interface that connects farmers directly with institutions, focusing on clarity, usability, and smooth product browsing and ordering flow.",
    tools: ["React", "Vercel"],
    outcome:
      "Live deployed platform demonstrating real-world frontend development, UI structuring, and deployment of a functional marketplace interface.",
    accent: "linear-gradient(135deg, #0f172a, #1e293b)",
    image: smargoImg,
    link: "https://smargo.vercel.app",
  },
  {
    title: "S Mart",
    type: "UI/UX Design Project",
    problem:
      "Designed a mobile grocery shopping experience that makes it easy for customers to browse products, discover special offers, and order everyday essentials.",
    solution:
      "Designed a complete mobile shopping experience in Figma, including user flows, wireframes, high-fidelity screens, and an interactive prototype focused on simplicity and usability.",
    tools: ["Figma", "UI Design", "UX Design", "Prototyping"],
    outcome:
      "Created a modern grocery shopping app prototype with intuitive navigation, product browsing, promotions, and a streamlined shopping experience.",
    accent: "linear-gradient(135deg, #4CAF50, #2E7D32)",
    image: smartImg,
    link: "https://www.figma.com/proto/2DaNeg6c0ujjkAvPKUCtOt/Smart-App?node-id=61-61&t=OrQQHqf2bCYb9PeB-1",
  },
  {
    title: "Kavaro Commerce",
    type: "E-Commerce Platform",
    problem:
      "Small retailers need a storefront that lets customers browse and buy online without the overhead of a full custom build.",
    solution:
      "A deployed e-commerce storefront handling product browsing and checkout flow, built and hosted as a standalone commerce product.",
    tools: ["React"],
    outcome: "Live, deployed storefront demonstrating a complete commerce flow end to end.",
    accent: "linear-gradient(135deg, #2d4a2d, #0f1a0f)",
    image: kavaroCommerceImg,
    link: "https://kavaro-commerce--carolinenyawira.replit.app",
  },
  {
    title: "CloseFlow",
    type: "Sales CRM",
    problem:
      "Small businesses lose track of leads and client follow-ups once they outgrow a spreadsheet, but full enterprise CRMs are overkill.",
    solution:
      "A lightweight sales CRM that tracks every lead from first contact to signed deal - pipeline, follow-ups, customer history, and an AI assistant that knows the numbers - built for small teams who'd rather sell than configure software.",
    tools: ["React", "Supabase"],
    outcome: "Live product giving small teams a simple system of record for client relationships.",
    accent: "linear-gradient(135deg, #5f4a1e, #291f0a)",
    image: closeflowImg,
    link: "https://tiny-tiger-crm.lovable.app",
  },
  {
    title: "LearnHub",
    type: "Learning Management Platform",
    problem:
      "Course creators need students, instructors, and admins on one platform, not scattered across spreadsheets, email, and a separate video host.",
    solution:
      "A learning management platform with courses, lessons, assignments, quizzes, and certificates for students; authoring and grading tools for instructors; and full oversight for admins - plus an always-on AI tutor that re-explains any lesson.",
    tools: ["React", "Supabase", "AI Assistant"],
    outcome:
      "Live product covering all three sides of a classroom in one login, with an AI tutor available 24/7 alongside every lesson.",
    accent: "linear-gradient(135deg, #1e3a5f, #0a1929)",
    image: learnhubImg,
    link: "https://nurture-learning-space.lovable.app",
  },
];
