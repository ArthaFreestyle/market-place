"use client"

import * as React from "react"
import {
  AudioWaveform,
  Command,
  Archive,
  GalleryVerticalEnd,
  Building,
  Package,
  ChartArea,
  ShoppingCart,
  User2,
} from "lucide-react"

import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

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
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: Package,
      isActive: true,
    },
    {
      name: "Brand",
      url: "/dashboard/brand",
      icon: Building,
    },
    {
      name: "Category",
      url: "/dashboard/categories",
      icon: ChartArea,
    },
    {
      name: "Orders", 
      url: "/dashboard/orders",
      icon: ShoppingCart,
    },
    {
      name: "Products", 
      url: "/dashboard/products",
      icon: Archive,
    },
    {
      name: "Customers", 
      url: "/dashboard/customers",
      icon: User2,
    },

  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
