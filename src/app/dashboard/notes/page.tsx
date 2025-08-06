"use client";

import { useState } from "react";
import { 
  Plus, 
  Folder, 
  FileText, 
  Search,
  Grid3X3,
  List,
  MoreVertical,
  Edit,
  Trash2,
  Star
} from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function NotesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("all");

  // Sample data - in real app, this would come from API
  const folders = [
    { id: "1", name: "Work", color: "#3B82F6", noteCount: 5 },
    { id: "2", name: "Personal", color: "#10B981", noteCount: 3 },
    { id: "3", name: "Ideas", color: "#F59E0B", noteCount: 8 },
    { id: "4", name: "Projects", color: "#8B5CF6", noteCount: 2 },
  ];

  const notes = [
    {
      id: "1",
      title: "Meeting Notes - Q1 Planning",
      content: "Discussed Q1 goals and objectives. Key points: revenue targets, new features, team expansion...",
      folderId: "1",
      folderName: "Work",
      folderColor: "#3B82F6",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15",
      tags: ["meeting", "planning"],
      starred: true
    },
    {
      id: "2",
      title: "Project Ideas for 2024",
      content: "1. AI-powered task manager\n2. Social media analytics tool\n3. Learning platform...",
      folderId: "3",
      folderName: "Ideas",
      folderColor: "#F59E0B",
      createdAt: "2024-01-10",
      updatedAt: "2024-01-12",
      tags: ["ideas", "projects"],
      starred: false
    },
    {
      id: "3",
      title: "Personal Goals",
      content: "Health: Exercise 3x per week\nLearning: Master TypeScript\nTravel: Visit 3 new countries...",
      folderId: "2",
      folderName: "Personal",
      folderColor: "#10B981",
      createdAt: "2024-01-05",
      updatedAt: "2024-01-08",
      tags: ["goals", "personal"],
      starred: true
    },
    {
      id: "4",
      title: "Website Redesign Notes",
      content: "Current issues:\n- Slow loading times\n- Poor mobile experience\n- Outdated design...",
      folderId: "4",
      folderName: "Projects",
      folderColor: "#8B5CF6",
      createdAt: "2024-01-03",
      updatedAt: "2024-01-06",
      tags: ["website", "design"],
      starred: false
    },
    {
      id: "5",
      title: "Team Retrospective",
      content: "What went well:\n- Improved communication\n- Better code reviews\n\nWhat to improve:\n- Documentation...",
      folderId: "1",
      folderName: "Work",
      folderColor: "#3B82F6",
      createdAt: "2024-01-02",
      updatedAt: "2024-01-02",
      tags: ["retro", "team"],
      starred: false
    },
    {
      id: "6",
      title: "Book Recommendations",
      content: "Technical:\n- Clean Code by Robert Martin\n- Design Patterns\n\nNon-technical:\n- Atomic Habits...",
      folderId: "2",
      folderName: "Personal",
      folderColor: "#10B981",
      createdAt: "2023-12-28",
      updatedAt: "2024-01-01",
      tags: ["books", "learning"],
      starred: true
    }
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFolder = selectedFolder === "all" || note.folderId === selectedFolder;
    
    return matchesSearch && matchesFolder;
  });

  const starredNotes = filteredNotes.filter(note => note.starred);
  const regularNotes = filteredNotes.filter(note => !note.starred);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notes</h1>
          <p className="text-gray-600 mt-2">
            Your personal workspace for thoughts and ideas
          </p>
        </div>
        <Link
          href="/dashboard/notes/new"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Note
        </Link>
      </div>

      {/* Folders */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Folders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => setSelectedFolder("all")}
            className={`p-4 rounded-lg border-2 transition-colors ${
              selectedFolder === "all"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <Folder className="w-4 h-4 text-gray-600" />
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">All Notes</div>
                <div className="text-sm text-gray-500">{notes.length} notes</div>
              </div>
            </div>
          </button>
          
          {folders.map((folder) => (
            <button
              key={folder.id}
              onClick={() => setSelectedFolder(folder.id)}
              className={`p-4 rounded-lg border-2 transition-colors ${
                selectedFolder === folder.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: folder.color + "20" }}
                >
                  <Folder className="w-4 h-4" style={{ color: folder.color }} />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{folder.name}</div>
                  <div className="text-sm text-gray-500">{folder.noteCount} notes</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Search and Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "grid"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "list"
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Starred Notes */}
      {starredNotes.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Star className="w-5 h-5 text-yellow-500 mr-2" />
            Starred Notes
          </h3>
          <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {starredNotes.map((note) => (
              <NoteCard key={note.id} note={note} viewMode={viewMode} />
            ))}
          </div>
        </div>
      )}

      {/* All Notes */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">All Notes</h3>
        {regularNotes.length > 0 ? (
          <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
            {regularNotes.map((note) => (
              <NoteCard key={note.id} note={note} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No notes found
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || selectedFolder !== "all" 
                ? "Try adjusting your search or filter criteria."
                : "Get started by creating your first note."
              }
            </p>
            {!searchTerm && selectedFolder === "all" && (
              <Link
                href="/dashboard/notes/new"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create First Note
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function NoteCard({ note, viewMode }: { note: any; viewMode: "grid" | "list" }) {
  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: note.folderColor }}
              ></span>
              <span className="text-sm text-gray-500">{note.folderName}</span>
              {note.starred && <Star className="w-4 h-4 text-yellow-500" />}
            </div>
            <h4 className="font-medium text-gray-900 mb-1">{note.title}</h4>
            <p className="text-sm text-gray-600 line-clamp-2">{note.content}</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-wrap gap-1">
                {note.tags.slice(0, 2).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500">
                {formatDate(note.updatedAt)}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 ml-4">
            <button className="text-gray-400 hover:text-gray-600">
              <Edit className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-red-600">
              <Trash2 className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: note.folderColor }}
          ></span>
          <span className="text-sm text-gray-500">{note.folderName}</span>
        </div>
        <div className="flex items-center space-x-2">
          {note.starred && <Star className="w-4 h-4 text-yellow-500" />}
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <h4 className="font-medium text-gray-900 mb-3">{note.title}</h4>
      <p className="text-sm text-gray-600 line-clamp-3 mb-4">{note.content}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {note.tags.slice(0, 3).map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
          {note.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
              +{note.tags.length - 3}
            </span>
          )}
        </div>
        <span className="text-xs text-gray-500">
          {formatDate(note.updatedAt)}
        </span>
      </div>
    </div>
  );
} 