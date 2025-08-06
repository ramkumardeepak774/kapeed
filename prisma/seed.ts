import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('password123', 12)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Deepak Kumar',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('✅ Admin user created:', adminUser.email)

  // Create sample posts
  const posts = await Promise.all([
    prisma.post.upsert({
      where: { slug: 'building-modern-web-app-nextjs-14' },
      update: {},
      create: {
        title: 'Building a Modern Web Application with Next.js 14',
        slug: 'building-modern-web-app-nextjs-14',
        content: 'This is a comprehensive guide on building modern web applications using Next.js 14...',
        excerpt: 'Learn how to build a scalable web application using Next.js 14, TypeScript, and modern development practices.',
        published: true,
        publishedAt: new Date(),
        authorId: adminUser.id,
      },
    }),
    prisma.post.upsert({
      where: { slug: 'future-fullstack-development' },
      update: {},
      create: {
        title: 'The Future of Full-Stack Development',
        slug: 'future-fullstack-development',
        content: 'Exploring the latest trends in full-stack development...',
        excerpt: 'Exploring the latest trends in full-stack development, from serverless architectures to AI-powered tools.',
        published: true,
        publishedAt: new Date(),
        authorId: adminUser.id,
      },
    }),
    prisma.post.upsert({
      where: { slug: 'optimizing-react-performance' },
      update: {},
      create: {
        title: 'Optimizing React Performance: Best Practices',
        slug: 'optimizing-react-performance',
        content: 'Discover the most effective techniques for optimizing React applications...',
        excerpt: 'Discover the most effective techniques for optimizing React applications, including code splitting and memoization.',
        published: true,
        publishedAt: new Date(),
        authorId: adminUser.id,
      },
    }),
  ])

  console.log('✅ Sample posts created:', posts.length)

  // Create sample projects
  const projects = await Promise.all([
    prisma.project.upsert({
      where: { id: 'project-1' },
      update: {},
      create: {
        id: 'project-1',
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with Next.js, Stripe, and PostgreSQL.',
        githubUrl: 'https://github.com/yourusername/ecommerce',
        liveUrl: 'https://ecommerce-demo.vercel.app',
        featured: true,
        order: 1,
      },
    }),
    prisma.project.upsert({
      where: { id: 'project-2' },
      update: {},
      create: {
        id: 'project-2',
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates.',
        githubUrl: 'https://github.com/yourusername/task-app',
        liveUrl: 'https://task-app-demo.vercel.app',
        featured: true,
        order: 2,
      },
    }),
    prisma.project.upsert({
      where: { id: 'project-3' },
      update: {},
      create: {
        id: 'project-3',
        title: 'AI Chat Application',
        description: 'An AI-powered chat application with natural language processing.',
        githubUrl: 'https://github.com/yourusername/ai-chat',
        liveUrl: 'https://ai-chat-demo.vercel.app',
        featured: true,
        order: 3,
      },
    }),
  ])

  console.log('✅ Sample projects created:', projects.length)

  // Create sample technologies
  const technologies = await Promise.all([
    prisma.technology.upsert({
      where: { name: 'Next.js' },
      update: {},
      create: { name: 'Next.js' },
    }),
    prisma.technology.upsert({
      where: { name: 'TypeScript' },
      update: {},
      create: { name: 'TypeScript' },
    }),
    prisma.technology.upsert({
      where: { name: 'React' },
      update: {},
      create: { name: 'React' },
    }),
    prisma.technology.upsert({
      where: { name: 'Tailwind CSS' },
      update: {},
      create: { name: 'Tailwind CSS' },
    }),
    prisma.technology.upsert({
      where: { name: 'PostgreSQL' },
      update: {},
      create: { name: 'PostgreSQL' },
    }),
  ])

  console.log('✅ Sample technologies created:', technologies.length)

  // Create sample folders for notes
  const folders = await Promise.all([
    prisma.folder.upsert({
      where: { id: 'folder-1' },
      update: {},
      create: {
        id: 'folder-1',
        name: 'Work',
        color: '#3B82F6',
        userId: adminUser.id,
      },
    }),
    prisma.folder.upsert({
      where: { id: 'folder-2' },
      update: {},
      create: {
        id: 'folder-2',
        name: 'Personal',
        color: '#10B981',
        userId: adminUser.id,
      },
    }),
    prisma.folder.upsert({
      where: { id: 'folder-3' },
      update: {},
      create: {
        id: 'folder-3',
        name: 'Ideas',
        color: '#F59E0B',
        userId: adminUser.id,
      },
    }),
  ])

  console.log('✅ Sample folders created:', folders.length)

  // Create sample notes
  const notes = await Promise.all([
    prisma.note.upsert({
      where: { id: 'note-1' },
      update: {},
      create: {
        id: 'note-1',
        title: 'Meeting Notes - Q1 Planning',
        content: 'Discussed Q1 goals and objectives. Key points: revenue targets, new features, team expansion...',
        folderId: folders[0].id,
        userId: adminUser.id,
      },
    }),
    prisma.note.upsert({
      where: { id: 'note-2' },
      update: {},
      create: {
        id: 'note-2',
        title: 'Project Ideas for 2024',
        content: '1. AI-powered task manager\n2. Social media analytics tool\n3. Learning platform...',
        folderId: folders[2].id,
        userId: adminUser.id,
      },
    }),
    prisma.note.upsert({
      where: { id: 'note-3' },
      update: {},
      create: {
        id: 'note-3',
        title: 'Personal Goals',
        content: 'Health: Exercise 3x per week\nLearning: Master TypeScript\nTravel: Visit 3 new countries...',
        folderId: folders[1].id,
        userId: adminUser.id,
      },
    }),
  ])

  console.log('✅ Sample notes created:', notes.length)

  // Create sample contact messages
  const contacts = await Promise.all([
    prisma.contact.upsert({
      where: { id: 'contact-1' },
      update: {},
      create: {
        id: 'contact-1',
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hi, I would like to discuss a potential project with you. Are you available for a call?',
        read: false,
      },
    }),
    prisma.contact.upsert({
      where: { id: 'contact-2' },
      update: {},
      create: {
        id: 'contact-2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        message: 'Great work on your portfolio! I have a similar project in mind.',
        read: true,
      },
    }),
  ])

  console.log('✅ Sample contacts created:', contacts.length)

  // Create sample analytics data
  const analytics = await Promise.all([
    prisma.analytics.upsert({
      where: { id: 'analytics-1' },
      update: {},
      create: {
        id: 'analytics-1',
        page: '/',
        views: 1250,
        uniqueVisitors: 890,
        date: new Date(),
      },
    }),
    prisma.analytics.upsert({
      where: { id: 'analytics-2' },
      update: {},
      create: {
        id: 'analytics-2',
        page: '/about',
        views: 890,
        uniqueVisitors: 650,
        date: new Date(),
      },
    }),
    prisma.analytics.upsert({
      where: { id: 'analytics-3' },
      update: {},
      create: {
        id: 'analytics-3',
        page: '/projects',
        views: 1100,
        uniqueVisitors: 780,
        date: new Date(),
      },
    }),
  ])

  console.log('✅ Sample analytics created:', analytics.length)

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 