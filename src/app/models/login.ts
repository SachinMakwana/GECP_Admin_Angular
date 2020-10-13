import { Role } from "../models/authorization/role.model";

export class Login {
  public id: number;
  public username: string;
  public password: string;
  public role: Role;
  public token?: string;
}

