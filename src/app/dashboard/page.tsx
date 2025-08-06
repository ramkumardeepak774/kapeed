import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { 
  FileText, 
  FolderOpen, 
  Eye, 
  MessageSquare,
  TrendingUp,
  Calendar,
  Clock
} from "lucide-react";
import { formatDate } from "@/lib/utils";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // Fetch dashboard stats
  const [postsCount, projectsCount, notesCount, contactsCount, recentPosts, recentContacts] = await Promise.all([
    prisma.post.count(),
    prisma.project.count(),
    prisma.note.count({ where: { userId: session?.user?.id } }),
    prisma.contact.count(),
    prisma.post.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { author: true },
    }),
    prisma.contact.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const stats = [
    {
      name: "Total Posts",
      value: postsCount,
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      name: "Total Projects",
      value: projectsCount,
      icon: FolderOpen,
      color: "bg-green-500",
    },
    {
      name: "Personal Notes",
      value: notesCount,
      icon: FileText,
      color: "bg-purple-500",
    },
    {
      name: "Contact Messages",
      value: contactsCount,
      icon: MessageSquare,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back, {session?.user?.name}! Here's what's happening with your website.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Posts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Posts</h3>
            <a
              href="/dashboard/posts"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
            </a>
          </div>
          
          <div className="space-y-4">
            {recentPosts.length > 0 ? (
              recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {post.published ? "Published" : "Draft"} • {formatDate(post.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.published 
                        ? "bg-green-100 text-green-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {post.published ? "Live" : "Draft"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No posts yet</p>
                <a
                  href="/dashboard/posts"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Create your first post
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Recent Contacts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Messages</h3>
            <a
              href="/dashboard/contacts"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
            </a>
          </div>
          
          <div className="space-y-4">
            {recentContacts.length > 0 ? (
              recentContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{contact.name}</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {contact.email} • {formatDate(contact.createdAt)}
                    </p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {contact.message}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      contact.read 
                        ? "bg-gray-100 text-gray-700" 
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {contact.read ? "Read" : "New"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No messages yet</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/dashboard/posts/new"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
          >
            <FileText className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <h4 className="font-medium text-gray-900">New Post</h4>
              <p className="text-sm text-gray-500">Write a blog post</p>
            </div>
          </a>
          
          <a
            href="/dashboard/projects/new"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
          >
            <FolderOpen className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <h4 className="font-medium text-gray-900">New Project</h4>
              <p className="text-sm text-gray-500">Add a project</p>
            </div>
          </a>
          
          <a
            href="/dashboard/notes/new"
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
          >
            <FileText className="w-6 h-6 text-purple-600 mr-3" />
            <div>
              <h4 className="font-medium text-gray-900">New Note</h4>
              <p className="text-sm text-gray-500">Create a personal note</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
} 