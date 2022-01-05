export interface ICurtirData {
  id?: number
  user_id?: number
  projeto_id?: number
  icone?: string
  updated_at?: string
  projeto?: {
    projeto: string
  }
  user?: {
    email: string
  }
}

export interface ICurtido {
  id?: number
  nome?: string
  projeto?: string
  curtido?: {
    id: number
    icone: string
    projeto_id: number
    user_id: number
  }
}

