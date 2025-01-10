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

const Header = () => {
  const { t } = useTranslation()

  const samplePageLinks = [
    { title: t("portfolio"), url: "/" },
    { title: t("about"), url: "/about" },
    { title: t("contact"), url: "/contact-us" },
    { title: t("services"), url: "/services" }]

  return (
    <div className="absolute top-0 right-0">
      <SidebarProvider>
        <SidebarTrigger className="m-8 z-10"/>
        <Sidebar side="right">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>
                <h1 className="text-lg text-gray-600 font-lighter font-dancingScript m-0">
                  {t("Im")}
                </h1>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {samplePageLinks.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url} key={item.url} text={item.title} />
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

export default Header
