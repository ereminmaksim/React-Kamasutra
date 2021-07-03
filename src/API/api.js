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
        "API-KEY": "8a58f9ca-9644-480f-8a91-fff2ea130754"
    }
})
// ДЛЯ ПОКАЗА USERS НА СТРАНИЦЕ И ЕГО НАСТРОЙКИ ВНУТРИ МЕТОДОВ!!!
/********************************************/
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=
        ${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
// ДЛЯ UNFOLLOWS
    /********************************************/
    unfollow(userId) {

        return instance.delete(`follow/${userId}`)
    },
// ДЛЯ FOLLOWS
    /********************************************/
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    //ДЛЯ ЗАПРОСА В PROFILE -ЗАПРОС ПРОФИЛЯ!!!
    /********************************************/
    getProfile(userId) {
        console.warn('Устаревший метод, просьба использовать - profileAPI')
        return profileAPI.getProfile(userId)
    }
    //
    /********************************************/
}

// ДЛЯ ПОКАЗА Profile/Status!!!

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}


export const authIPI = {
    me() {
        return instance.get(`auth/me`)
        // ОБЪЕКТ В КОТОРОМ СИДЯТ НАСТРОЙКИ ЗАПРОСА(МОЖНО ИЗМЕНЯТЬ)
    }

}


// ДЛЯ Login Login/Post/Delete!!!


export const LoginIp = {

    enterLogin() {
        return instance.post(`auth/login`)
        // ОБЪЕКТ В КОТОРОМ СИДЯТ НАСТРОЙКИ ЗАПРОСА(МОЖНО ИЗМЕНЯТЬ)
    },
    deleteLogin() {
        return instance.delete(`auth/login`)
        // ОБЪЕКТ В КОТОРОМ СИДЯТ НАСТРОЙКИ ЗАПРОСА(МОЖНО ИЗМЕНЯТЬ)
    }
}

