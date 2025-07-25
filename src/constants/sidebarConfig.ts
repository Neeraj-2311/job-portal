import { 
  FaBriefcase, FaFileAlt, FaChartLine, 
  FaUsers, FaComments, FaDiscord, FaBell, FaQuestionCircle
} from "react-icons/fa";
import type { SidebarItem, User } from "../types/types";

export const MAIN_SIDEBAR_ITEMS: SidebarItem[] = [
  { path: "/", label: "Jobs", icon: FaBriefcase },
  { path: "/resume", label: "Resume", icon: FaFileAlt },
  { path: "/career-advisor", label: "Career Advisor", icon: FaChartLine },
  { path: "/salary-predictor", label: "Salary Predictor", icon: FaChartLine, badge: "Free" },
  { path: "/interview-questions", label: "Interview Questions", icon: FaComments },
  { path: "/connect", label: "Connect", icon: FaUsers },
  { path: "/discover", label: "Discover", icon: FaDiscord },
];

export const BOTTOM_SIDEBAR_ITEMS: SidebarItem[] = [
  { path: "/notifications", label: "Notifications", icon: FaBell },
  { path: "/support", label: "Support & Feedback", icon: FaQuestionCircle },
];

export const USER_PROFILE: User = {
  name: "Xun Goku",
  title: "Sr. Consultant",
  initials: "X"
};