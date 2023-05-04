import { AuthRepositoryImpl } from "../../../Data/repositories/AuthRepository";
import { User } from "../../entities/User";

const { registrar } = new AuthRepositoryImpl();

export const RegistrarAuthUseCase = async (user: User) => {
    return await registrar(user);
}













