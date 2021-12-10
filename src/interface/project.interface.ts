import { ReactNode } from "react";

export interface IProject {
  children: ReactNode
}

export interface IProjectData {
  id: number
  projeto: string
  user: {
    email: string
  }
}