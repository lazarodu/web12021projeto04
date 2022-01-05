export interface IFaqData {
  id?: number
  pergunta?: string
  resposta?: string
  user?: {
    email: string
  }
}