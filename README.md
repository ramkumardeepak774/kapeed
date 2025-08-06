# Personal Website - Deepak Kumar

A modern, full-stack personal website built with Next.js 14, TypeScript, and Tailwind CSS. Features both public-facing content and a private dashboard for content management.

## 🚀 Features

### Public Website
- **Homepage** - Beautiful hero section with featured projects
- **About Page** - Personal information, skills, and experience
- **Projects Page** - Portfolio with filtering and search
- **Blog** - Article showcase with tags and search
- **Contact Page** - Contact form with email integration
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, Open Graph, and structured data

### Private Dashboard
- **Authentication** - Secure login with NextAuth.js
- **Content Management** - Blog posts, projects, and notes
- **Notes System** - Notion-like personal notes with folders
- **Analytics** - Website performance tracking
- **Contact Management** - View and manage contact submissions

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animations (ready to integrate)

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma ORM** - Database management
- **PostgreSQL** - Relational database
- **NextAuth.js** - Authentication

### Database
- **PostgreSQL** - Primary database
- **Prisma** - Type-safe database client

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── dashboard/         # Dashboard pages
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # UI components
│   ├── dashboard/        # Dashboard components
│   └── Navigation.tsx    # Navigation component
├── lib/                  # Utility libraries
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Utility functions
└── types/                # TypeScript types
```

## 🗄️ Database Schema

The application uses a comprehensive database schema with the following main entities:

- **Users** - Authentication and user management
- **Posts** - Blog articles with tags and author relationships
- **Projects** - Portfolio items with technologies
- **Notes** - Personal notes with folder organization
- **Contacts** - Contact form submissions
- **Analytics** - Website performance tracking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kapeed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/kapeed_db"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key-here"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Usage

### First Time Setup

1. **Create your admin account**
   - Visit `/auth/signup` to create your first admin account
   - This account will have full access to the dashboard

2. **Access the dashboard**
   - Sign in at `/auth/signin`
   - Navigate to `/dashboard` to access the admin panel

3. **Customize your content**
   - Update personal information in the About page
   - Add your projects to the Projects page
   - Create blog posts in the Posts section
   - Use the Notes feature for personal organization

### Dashboard Features

- **Posts Management** - Create, edit, and manage blog posts
- **Notes System** - Organize personal notes with folders and tags
- **Analytics** - Track website performance and visitor insights
- **Contact Management** - View and respond to contact form submissions

## 🎨 Customization

### Personal Information
Update the following files to customize your personal information:

- `src/app/page.tsx` - Homepage content
- `src/app/about/page.tsx` - About page content
- `src/app/projects/page.tsx` - Projects data
- `src/app/blog/page.tsx` - Blog posts data

### Styling
The application uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Component-specific styles in individual components

### Database Content
Use the dashboard to manage your content, or directly update the database:

```bash
# Access Prisma Studio
npx prisma studio
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Database Management

```bash
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema to database
npx prisma studio    # Open database GUI
npx prisma migrate   # Run migrations
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- **Netlify** - Static export
- **Railway** - Full-stack deployment
- **DigitalOcean App Platform** - Container deployment

### Environment Variables for Production

```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-production-secret"
```

## 📊 Analytics Integration

The application includes built-in analytics tracking. To enhance analytics:

1. **Google Analytics** - Add GA4 tracking code
2. **Vercel Analytics** - Enable in Vercel dashboard
3. **Custom Events** - Track specific user interactions

## 🔒 Security

- **Authentication** - Secure login with NextAuth.js
- **CSRF Protection** - Built-in CSRF protection
- **Rate Limiting** - API route protection
- **Input Validation** - Form validation and sanitization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Prisma** - Database toolkit
- **NextAuth.js** - Authentication
- **Lucide** - Beautiful icons

## 📞 Support

If you have any questions or need help:

- Create an issue in the repository
- Contact: deepak@example.com
- Documentation: [Add your docs URL]

---

Built with ❤️ by Deepak Kumar
