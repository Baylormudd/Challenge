import { httpClient } from '../httpClient'

export default {
    GetUsers(page) {
      return httpClient.get(`/users?page=${page}`)
    },
}
