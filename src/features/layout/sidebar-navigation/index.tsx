import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";
import Link from "@/components/base/link"

const SidebarNavigation = () => {
  const { t } = useTranslation()

  const samplePageLinks = [
    { title: t("portfolio"), url: "/" },
    { title: t("about"), url: "/about" },
    { title: t("contact"), url: "/contact-us" },
    { title: t("subscribe"), url: "/subscribe" },
    { title: t("services"), url: "/services" },
  ]

  return (
    <div className="absolute top-0 right-0">
      <SidebarProvider>
        <SidebarTrigger className="m-8 z-10 text-3xl hover:bg-transparent hover:text-pink-400"/>
        <Sidebar side="right">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="my-3.5">
                <h1 className="text-3xl text-gray-600 font-medium font-dancingScript">
                  {t("Im")}
                </h1>
              </SidebarGroupLabel>
              <SidebarGroupContent className="py-5">
                <SidebarMenu>
                  {samplePageLinks.map((item) => (
                    <SidebarMenuItem key={item.title} className="py-1">
                      <SidebarMenuButton asChild>
                        <Link to={item.url} key={item.url} text={item.title}
                              className="text-base font-josefinSans" />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  )
}

export default SidebarNavigation;
