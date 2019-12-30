import { http } from './config'

export default {
    auth: (user) => {
        return http.post('user/auth.php', user)
    },
    signup: (user) => {
        return http.post('user/signup.php', user)
    },
}