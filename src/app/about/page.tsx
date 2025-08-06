import Link from "next/link";
import { ArrowRight, Mail, Phone, Linkedin, Github, Code, Database, Brain, Zap, Target, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6">
            <Brain className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 text-sm font-medium">ML Engineer & Full Stack Developer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate Full Stack Developer with expertise in modern web technologies and a drive to create innovative solutions.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium text-white">ramkumardeepak774@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium text-white">+91-6204815090</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                <Linkedin className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <p className="font-medium text-white">Deepak Kumar</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-gray-500/20 rounded-lg group-hover:bg-gray-500/30 transition-colors">
                <Github className="w-5 h-5 text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="font-medium text-white">deepakkumar-dev</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="space-y-12">
          {/* Education Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Education Journey</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Bachelor of Technology in Computer Science</h3>
                    <span className="text-sm text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">2020 - 2024</span>
                  </div>
                  <p className="text-gray-300 mb-2">Guru Nanak Dev University, Amritsar</p>
                  <p className="text-sm text-blue-300">CGPA: 8.2/10</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Studied core computer science concepts including Data Structures, Algorithms, Database Management, 
                    Web Development, and Software Engineering principles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-28 h-28 bg-green-500/10 rounded-full -translate-y-14 -translate-x-14"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full translate-y-10 translate-x-10"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Full Stack Developer</h3>
                    <span className="text-sm text-green-300 bg-green-500/20 px-3 py-1 rounded-full border border-green-400/30">2024 - Present</span>
                  </div>
                  <p className="text-gray-300 mb-2">Freelance / Remote</p>
                  <ul className="text-sm text-gray-400 space-y-1 mt-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                      Developing full-stack web applications using modern technologies
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                      Building responsive and user-friendly interfaces
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                      Implementing RESTful APIs and database management
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                      Collaborating with clients to deliver high-quality solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Code className="w-5 h-5 text-blue-400 mr-2" />
                    Frontend Technologies
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">React.js</span>
                        <span className="text-blue-400 text-sm">90%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Next.js</span>
                        <span className="text-blue-400 text-sm">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">TypeScript</span>
                        <span className="text-blue-400 text-sm">80%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Tailwind CSS</span>
                        <span className="text-blue-400 text-sm">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Database className="w-5 h-5 text-green-400 mr-2" />
                    Backend Technologies
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Node.js</span>
                        <span className="text-green-400 text-sm">85%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">Express.js</span>
                        <span className="text-green-400 text-sm">80%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">PostgreSQL</span>
                        <span className="text-green-400 text-sm">75%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300">MongoDB</span>
                        <span className="text-green-400 text-sm">70%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full -translate-y-10 -translate-x-10"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-green-500/10 rounded-full translate-y-14 translate-x-14"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Key Achievements</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-purple-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white mb-2">Academic Excellence</h3>
                  <p className="text-gray-400">Maintained CGPA of 8.2/10 throughout B.Tech program</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white mb-2">Project Portfolio</h3>
                  <p className="text-gray-400">Developed multiple full-stack applications showcasing modern web technologies</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Skills</h3>
                  <p className="text-gray-400">Proficient in React, Next.js, Node.js, and database management</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-white mb-2">Problem Solving</h3>
                  <p className="text-gray-400">Strong analytical and problem-solving abilities in software development</p>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Summary */}
          <section className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Professional Summary</h2>
              </div>
              <div className="prose prose-lg text-gray-300">
                <p className="mb-4">
                  I am a passionate Full Stack Developer with a strong foundation in computer science and hands-on experience 
                  in building modern web applications. My journey began with a solid educational background at Guru Nanak Dev University, 
                  where I developed a deep understanding of software engineering principles.
                </p>
                <p className="mb-4">
                  Currently working as a freelance developer, I specialize in creating responsive, scalable applications using 
                  React, Next.js, Node.js, and various database technologies. I enjoy tackling complex problems and turning 
                  innovative ideas into reality through clean, efficient code.
                </p>
                <p>
                  I'm always eager to learn new technologies and take on challenging projects that push my boundaries. 
                  My goal is to contribute to meaningful projects that make a positive impact while continuously growing 
                  as a developer.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
} 