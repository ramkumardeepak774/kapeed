"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import { 
  Search, 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  Clock
} from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Building a Modern Web Application with Next.js 14",
      excerpt: "Learn how to build a scalable web application using Next.js 14, TypeScript, and modern development practices. This comprehensive guide covers everything from setup to deployment.",
      content: "Full article content here...",
      slug: "building-modern-web-app-nextjs-14",
      author: "Deepak Kumar",
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      tags: ["Next.js", "TypeScript", "Web Development"],
      featured: true
    },
    {
      id: 2,
      title: "The Future of Full-Stack Development",
      excerpt: "Exploring the latest trends in full-stack development, from serverless architectures to AI-powered tools that are shaping the future of web development.",
      content: "Full article content here...",
      slug: "future-fullstack-development",
      author: "Deepak Kumar",
      publishedAt: "2024-01-10",
      readTime: "6 min read",
      tags: ["Full-Stack", "Trends", "Technology"],
      featured: false
    },
    {
      id: 3,
      title: "Optimizing React Performance: Best Practices",
      excerpt: "Discover the most effective techniques for optimizing React applications, including code splitting, memoization, and performance monitoring strategies.",
      content: "Full article content here...",
      slug: "optimizing-react-performance",
      author: "Deepak Kumar",
      publishedAt: "2024-01-05",
      readTime: "10 min read",
      tags: ["React", "Performance", "JavaScript"],
      featured: false
    },
    {
      id: 4,
      title: "Database Design Patterns for Scalable Applications",
      excerpt: "Learn about essential database design patterns that help build scalable applications, from normalization strategies to caching techniques.",
      content: "Full article content here...",
      slug: "database-design-patterns",
      author: "Deepak Kumar",
      publishedAt: "2023-12-28",
      readTime: "12 min read",
      tags: ["Database", "Architecture", "Scalability"],
      featured: false
    },
    {
      id: 5,
      title: "Getting Started with TypeScript in 2024",
      excerpt: "A comprehensive guide to TypeScript for developers who want to add type safety to their JavaScript projects and improve code quality.",
      content: "Full article content here...",
      slug: "getting-started-typescript-2024",
      author: "Deepak Kumar",
      publishedAt: "2023-12-20",
      readTime: "7 min read",
      tags: ["TypeScript", "JavaScript", "Tutorial"],
      featured: false
    },
    {
      id: 6,
      title: "Deploying Applications with Docker and Kubernetes",
      excerpt: "Step-by-step guide to containerizing and deploying applications using Docker and Kubernetes for production environments.",
      content: "Full article content here...",
      slug: "deploying-docker-kubernetes",
      author: "Deepak Kumar",
      publishedAt: "2023-12-15",
      readTime: "15 min read",
      tags: ["Docker", "Kubernetes", "DevOps"],
      featured: false
    }
  ];

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
              Blog
            </h1>
            <p className="text-xl text-[var(--foreground)] max-w-3xl mx-auto leading-relaxed">
              Thoughts, tutorials, and insights about web development, 
              technology, and the future of software engineering.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--foreground)] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--foreground)] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Tag Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag("all")}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    selectedTag === "all"
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-[var(--background)] text-[var(--foreground)] border-[var(--foreground)] hover:border-blue-400 hover:bg-[var(--background)]"
                  }`}
                >
                  All Posts
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      selectedTag === tag
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-[var(--background)] text-[var(--foreground)] border-[var(--foreground)] hover:border-blue-400 hover:bg-[var(--background)]"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">Featured Post</h2>
              <div className="bg-[var(--background)] rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">Featured</h3>
                      <p className="text-blue-100">Must Read</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center space-x-4 text-sm text-[var(--foreground)] mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-[var(--foreground)] mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[var(--background)] rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-lg font-bold mb-2">Blog Post</h3>
                    <p className="text-blue-100 text-sm">{post.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-[var(--foreground)] mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                    {post.title}
                  </h3>
                  <p className="text-[var(--foreground)] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[var(--background)] text-[var(--foreground)] rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-[var(--background)] text-[var(--foreground)] rounded-full text-xs font-medium">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-[var(--background)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-[var(--foreground)]" />
              </div>
              <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                No articles found
              </h3>
              <p className="text-[var(--foreground)]">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles and insights delivered to your inbox. 
            No spam, unsubscribe at any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-[var(--background)] text-blue-400 rounded-lg hover:bg-[var(--background)] transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 