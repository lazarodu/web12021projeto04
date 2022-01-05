import { ReactNode } from "react";

export interface IProject {
  children: ReactNode
}

export interface IProjectData {
  id?: number
  projeto?: string
  nome?: string
  user?: {
    email: string
  }
  projetoCurtirs?: {
    id: number
    icone: string
    projeto_id: number
    user_id: number
  }[]
  curtido?: {
    id: number
    icone: string
    projeto_id: number
    user_id: number
  }
}