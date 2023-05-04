import { ResponseApiGastro } from "../../Data/sources/remote/api/models/ResponseApiGastro";
import { User } from "../entities/User";

export interface AuthRepository {

    registrar(user: User): Promise<ResponseApiGastro>
}