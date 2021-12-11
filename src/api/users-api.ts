import { APIResponseType, config, instance } from "./api"


export const usersAPI = {
    searchUser( email: string ) {
        return instance.get<APIResponseType<any>>(`search-users?query=${email}`,config).then(res => res.data)
    }
}