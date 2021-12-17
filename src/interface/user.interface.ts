export interface IUser {
  email: string
  password: string
}

export interface IResponseUser {
  user: {
    id: number
    email: string
  }
  token: string
}

export interface IAuthContextData {
  registry(credentials: IUser): Promise<void>
  signIn(credentials: IUser): Promise<void>
  signOut(): Promise<void>
  token: string
  user: {
    id: number
    email: string
  }
}