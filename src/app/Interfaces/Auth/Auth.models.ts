export interface RegisterRequest{
  Email:string,
  DisplayName:string,
  PhoneNumber:string,
  Password:string
}
export interface RegisterResponse{
  DisplayName:string,
  Email:string,
  Token:string
}
export interface LoginRequest{
    email: string,
    password: string
}