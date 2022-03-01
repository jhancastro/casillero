export interface IRegisterResponse {
  id    : number;
  token : string;
  email    : string;
  password : string;
}

export interface ILogin {
  email    : string;
  password : string;
  id    : number;
  token : string;
}

