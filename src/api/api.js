import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '702b1871-d30f-4ccc-bead-85cd52841026'
  }
}
)

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count${pageSize}`)
      .then(response => {
        return response.data;
      })
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },

  getAuthMe() {
    return instance.get(`auth/me`)
      .then(response => {
        return response.data;
      })
  },

  // getProfile(userId = 2) {
  //   // debugger
  //   return instance.get( userId )
  //     .then(response => {
  //       return response.data;
  //     })
  // }
}