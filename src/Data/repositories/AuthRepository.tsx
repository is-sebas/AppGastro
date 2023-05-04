import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiGastro } from "../sources/remote/api/ApiGastro";
import { ResponseApiGastro } from "../sources/remote/api/models/ResponseApiGastro";


export class AuthRepositoryImpl implements AuthRepository {
    async registrar(user: User): Promise<ResponseApiGastro> {
        try {
            const response = await ApiGastro.post<ResponseApiGastro>('/users/create', user)
            return Promise.resolve(response.data);
        } catch (error) {
            let e =(error as AxiosError);
            console.log('ERROR: ' + JSON.stringify(e.response?.data ));
            const apiError:ResponseApiGastro = JSON.parse(JSON.stringify(e.response?.data ));
            return Promise.resolve(apiError)
        }
    }

}