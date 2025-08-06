import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer,
  Calendar,
  BarChart3,
  Activity
} from "lucide-react";

export default async function AnalyticsPage() {
  const session = await getServerSession(authOptions);

  // Fetch analytics data
  const [totalViews, totalVisitors, totalPosts, totalContacts] = await Promise.all([
    prisma.analytics.aggregate({
      _sum: { views: true }
    }),
    prisma.analytics.aggregate({
      _sum: { uniqueVisitors: true }
    }),
    prisma.post.count(),
    prisma.contact.count(),
  ]);

  // Sample analytics data for charts
  const pageViews = [
    { page: "Home", views: 1250, visitors: 890 },
    { page: "About", views: 890, visitors: 650 },
    { page: "Projects", views: 1100, visitors: 780 },
    { page: "Blog", views: 950, visitors: 620 },
    { page: "Contact", views: 450, visitors: 320 },
  ];

  const monthlyData = [
    { month: "Jan", views: 1200, visitors: 850 },
    { month: "Feb", views: 1350, visitors: 920 },
    { month: "Mar", views: 1100, visitors: 780 },
    { month: "Apr", views: 1600, visitors: 1100 },
    { month: "May", views: 1400, visitors: 950 },
    { month: "Jun", views: 1800, visitors: 1200 },
  ];

  const topPosts = [
    { title: "Building Modern Web Apps", views: 450, engagement: "8.5%" },
    { title: "React Performance Tips", views: 380, engagement: "7.2%" },
    { title: "TypeScript Best Practices", views: 320, engagement: "6.8%" },
    { title: "Next.js 14 Features", views: 290, engagement: "6.1%" },
    { title: "Database Design Patterns", views: 250, engagement: "5.9%" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Analytics</h1>
        <p className="text-[var(--foreground)] mt-2">
          Track your website performance and visitor insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--foreground)]">Total Views</p>
              <p className="text-3xl font-bold text-[var(--foreground)]">
                {totalViews._sum.views?.toLocaleString() || "0"}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+12.5% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--foreground)]">Unique Visitors</p>
              <p className="text-3xl font-bold text-[var(--foreground)]">
                {totalVisitors._sum.uniqueVisitors?.toLocaleString() || "0"}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+8.3% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--foreground)]">Blog Posts</p>
              <p className="text-3xl font-bold text-[var(--foreground)]">{totalPosts}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+3 new this month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--foreground)]">Contact Messages</p>
              <p className="text-3xl font-bold text-[var(--foreground)]">{totalContacts}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <MousePointer className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+15% from last month</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Page Views Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">Page Views</h3>
          <div className="space-y-4">
            {pageViews.map((page, index) => (
              <div key={page.page} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium text-[var(--foreground)]">{page.page}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-[var(--foreground)]">{page.views.toLocaleString()}</div>
                    <div className="text-xs text-[var(--foreground)]">{page.visitors.toLocaleString()} visitors</div>
                  </div>
                  <div className="w-24 bg-white rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(page.views / Math.max(...pageViews.map(p => p.views))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">Monthly Trends</h3>
          <div className="space-y-4">
            {monthlyData.map((month, index) => (
              <div key={month.month} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[var(--foreground)]" />
                  </div>
                  <span className="text-sm font-medium text-[var(--foreground)]">{month.month}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-[var(--foreground)]">{month.views.toLocaleString()}</div>
                    <div className="text-xs text-[var(--foreground)]">{month.visitors.toLocaleString()} visitors</div>
                  </div>
                  <div className="w-24 bg-white rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(month.views / Math.max(...monthlyData.map(m => m.views))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">Top Performing Posts</h3>
        <div className="space-y-4">
          {topPosts.map((post, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--foreground)]">{post.title}</h4>
                  <p className="text-sm text-[var(--foreground)]">{post.views.toLocaleString()} views</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-[var(--foreground)]">{post.engagement}</div>
                <div className="text-xs text-[var(--foreground)]">Engagement Rate</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic Sources */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--foreground)]">Direct</span>
              <span className="text-sm font-medium text-[var(--foreground)]">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--foreground)]">Search</span>
              <span className="text-sm font-medium text-[var(--foreground)]">35%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--foreground)]">Social</span>
              <span className="text-sm font-medium text-[var(--foreground)]">15%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--foreground)]">Referral</span>
              <span className="text-sm font-medium text-[var(--foreground)]">5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Device Types</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--foreground)]">Desktop</span>
              <span className="text-sm font-medium text-[var(--foreground)]">60%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--foreground)]">Mobile</span>
              <span className="text-sm font-medium text-[var(--foreground)]">35%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--foreground)]">Tablet</span>
              <span className="text-sm font-medium text-[var(--foreground)]">5%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Bounce Rate</h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--foreground)] mb-2">32%</div>
            <div className="text-sm text-[var(--foreground)]">Average bounce rate</div>
            <div className="mt-4 flex items-center justify-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>-2.1% from last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-green-500" />
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-[var(--foreground)]">New visitor from Google Search</span>
            <span className="text-xs text-[var(--foreground)] ml-auto">2 min ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-[var(--foreground)]">Contact form submitted</span>
            <span className="text-xs text-[var(--foreground)] ml-auto">5 min ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-[var(--foreground)]">Blog post shared on Twitter</span>
            <span className="text-xs text-[var(--foreground)] ml-auto">12 min ago</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-[var(--foreground)]">New subscriber to newsletter</span>
            <span className="text-xs text-[var(--foreground)] ml-auto">15 min ago</span>
          </div>
        </div>
      </div>
    </div>
  );
} 