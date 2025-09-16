import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Plus, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { Avatar, AvatarFallback } from "./ui/avatar";
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
};
const MainHeader = () => {
  return (
    <div className="bg-white">
      <nav className="flex gap-5 p-5">
        {/* User */}
        <NavUser user={data.user} />
        {/* Search */}
        <label className="relative flex-4" htmlFor="globSearch">
          <Input id="globSearch" type="text" placeholder="Global Search..." />
          <Search className="absolute cursor-pointer  top-1/2 -translate-y-1/2 right-4" />
        </label>
        {/* Right Side */}
        <div className="flex items-center gap-1">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Bell />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 space-y-2" align="end">
              <DropdownMenuItem>
                <div>
                  {/* User */}
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm">Admin</h3>
                      <p className="text-[10px] text-gray-600">
                        Sept. 15, 2025, 12:07 p.m.{" "}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 ps-10 font-medium">
                    sales Changed Assign to.
                  </p>
                </div>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>
                <div>
                  {/* User */}
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm">Sales</h3>
                      <p className="text-[10px] text-gray-600">
                        Sept. 15, 2025, 12:07 p.m.{" "}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 ps-10 font-medium">
                    sales Changed Assign to.
                  </p>
                </div>
              </DropdownMenuItem>
              <Separator />
              <DropdownMenuItem>
                <div>
                  {/* User */}
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm">Sales</h3>
                      <p className="text-[10px] text-gray-600">
                        Sept. 15, 2025, 12:07 p.m.{" "}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 ps-10 font-medium">
                    sales Changed Assign to.
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button size={"sm"} className="w-full">
                  See All
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Add New ==> Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default">
                <Plus /> Add New
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuItem>Vendor</DropdownMenuItem>
              <DropdownMenuItem>Buyer</DropdownMenuItem>
              <DropdownMenuItem>Order Group</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Vendors</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>All</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
