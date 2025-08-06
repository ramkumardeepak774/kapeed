import { User, Post, Project, Note, Folder, Tag, Technology, Contact } from "@prisma/client";

export type UserWithRole = User & {
  role: "USER" | "ADMIN";
};

export type PostWithAuthor = Post & {
  author: User;
  tags: Tag[];
};

export type ProjectWithTechnologies = Project & {
  technologies: Technology[];
};

export type NoteWithFolder = Note & {
  folder: Folder | null;
  tags: Tag[];
};

export type FolderWithChildren = Folder & {
  children: Folder[];
  notes: Note[];
};

export type ContactWithStatus = Contact & {
  read: boolean;
};

// NextAuth types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      role: string;
    };
  }

  interface User {
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
  }
} 