"use client";

import {
  AudioWaveform,
  CircleStar,
  Command,
  Frame,
  GalleryVerticalEnd,
  ShieldUser,
  SquareUser,
  UserStar,
  Workflow,
} from "lucide-react";
import { BiCategory } from "react-icons/bi";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Vendors",
      url: "#",
      icon: UserStar,
      isActive: true,
      items: [
        {
          title: "Add New Vendor",
          url: "#",
        },
        {
          title: "All Vendors",
          url: "/vendors/all",
        },
      ],
    },
    {
      title: "Buyers",
      url: "#",
      icon: SquareUser,
      items: [
        {
          title: "Add New Buyers",
          url: "#",
        },
        {
          title: "All Buyers",
          url: "#",
        },
      ],
    },
    {
      title: "Orders",
      url: "#",
      icon: CircleStar,
      items: [
        {
          title: "Add New Group",
          url: "#",
        },
        {
          title: "Order Groups",
          url: "#",
        },
      ],
    },
    {
      title: "Agents",
      url: "#",
      icon: ShieldUser,
      items: [
        {
          title: "Add New Agent",
          url: "#",
        },
        {
          title: "All Agents",
          url: "#",
        },
      ],
    },

    {
      title: "Subcategories",
      url: "#",
      icon: Workflow,
      items: [
        {
          title: "Add New Category",
          url: "#",
        },
        {
          title: "All Categories",
          url: "#",
        },
      ],
    },

    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "User Roles",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <Link className="text-3xl px-5 font-bold" href={"/"}>
        <Image
          className="mx-auto w-52"
          priority
          src={"/logo.png"}
          width={200}
          height={45}
          alt="TijaraHub Logo"
        />
      </Link>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
