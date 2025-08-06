"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  Settings, 
  BarChart3, 
  LogOut,
  User,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Posts",
      href: "/dashboard/posts",
      icon: FileText,
    },
    {
      name: "Projects",
      href: "/dashboard/projects",
      icon: FolderOpen,
    },
    {
      name: "Notes",
      href: "/dashboard/notes",
      icon: FileText,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DK</span>
          </div>
          <span className="font-semibold text-gray-900">Dashboard</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-900 hover:text-gray-900 hover:bg-gray-100"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {session?.user?.name || "User"}
            </p>
            <p className="text-xs text-gray-900 truncate">
              {session?.user?.email}
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <Link
            href="/"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-900 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>View Site</span>
          </Link>
          
          <button
            onClick={() => signOut()}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-900 hover:text-red-400 hover:bg-gray-100 transition-colors w-full"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar; 