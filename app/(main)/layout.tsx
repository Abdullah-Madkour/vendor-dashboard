import { AppSidebar } from "@/components/app-sidebar";
import MainHeader from "@/components/MainHeader";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <MainHeader />
        <div className="px-5">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
