import axios from "axios";
/********************************************/
//ВЫВЕЛИ ОТДЕЛЬНО ЗАПРОСЫ НА СЕРВЕР!!!
/********************************************/

//СТОКОВЫЙ URL-API // КАК БЫЛО РАНЕЕ
/********************************************/
// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

//СТОКОВЫЙ ДЛЯ НАДСТРОЕК AXIOS (withCredentials, API-KEY)
/********************************************/
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9006ea8b-c937-4dc2-8791-c9a20678f73c"
    }
})
// ДЛЯ ПОКАЗА USERS НА СТРАНИЦЕ И ЕГО НАСТРОЙКИ ВНУТРИ МЕТОДОВ!!!
/********************************************/
export const usersAPI = {
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=
        ${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
// ДЛЯ UNFOLLOWS
    /********************************************/
    getUsersUnFollows(user){
        return instance.delete(`follow/${user.id}`)
    },
// ДЛЯ FOLLOWS
    /********************************************/
    getUsersFollows(user){
        return instance.post(`/follow/${user.id}`)
    }
}
/********************************************/