import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Deepak Kumar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-focused Software Engineer with 3 years of experience in backend systems and applied Machine Learning. 
            Specializing in Java, Python, LLM fine-tuning, RAG, and building scalable AI solutions.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <Link
              href="mailto:ramkumardeepak774@gmail.com"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </Link>
            <Link
              href="/projects"
              className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex justify-center space-x-6 text-gray-600">
            <a href="tel:+91-6204815090" className="flex items-center space-x-2 hover:text-blue-600">
              <Phone className="w-5 h-5" />
              <span>+91-6204815090</span>
            </a>
            <a href="mailto:ramkumardeepak774@gmail.com" className="flex items-center space-x-2 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              <span>ramkumardeepak774@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Performance</h3>
            <p className="text-blue-100">
              Reduced ML training time by 75%, improved system performance by 40%, 
              and achieved 20x API throughput
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Scale</h3>
            <p className="text-green-100">
              Managed 700+ production ML models with 99.9% uptime across distributed systems
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Recognition</h3>
            <p className="text-purple-100">
              Global Rank 306 in CodeChef May Challenge 2021 among 6,401 participants
            </p>
          </div>
        </div>

        {/* Current Role */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Current Role</h2>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Software Engineer at Krista AI
            </h3>
            <p className="text-gray-600 mb-4">November 2024 - Present</p>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Leading AI/ML initiatives including PRF-based query expansion, model versioning systems, 
              and high-performance caching strategies. Specializing in LLM fine-tuning, RAG systems, 
              and scalable ML infrastructure.
            </p>
          </div>
        </div>

        {/* Skills Overview */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                <p className="text-gray-600">Python, Java, C/C++, SQL, JavaScript, R, MATLAB</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">AI/ML</h4>
                <p className="text-gray-600">scikit-learn, FastText, Transformers, OpenAI API, LangChain, LLMs, GPT-4, BLOOM</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Frameworks</h4>
                <p className="text-gray-600">Spring Boot, Flask, Hibernate, JUnit, LangChain</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Infrastructure</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">DevOps</h4>
                <p className="text-gray-600">Docker, Kubernetes, AWS, Celery, Jenkins, Git</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Databases</h4>
                <p className="text-gray-600">PostgreSQL, MongoDB, Redis, ChromaDB</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                <p className="text-gray-600">BSc Mathematics & Scientific Computing, IIT Kanpur (2018-2022)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
