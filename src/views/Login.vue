<template>
    <div class="container">
        <div class="row">
            <div class="col s12 m4 l2"></div>
                <div class="col s12 m4 l8">
                    <div class="card blue darken-2">
                        <div class="card-content white-text">
                            <span class="card-title">Login</span>
                            <input class="white-text" type="text" placeholder="E-mail" v-model="user.email">
                            <input class="white-text" type="password" placeholder="Password" v-model="user.password">
                        </div>
                        <div class="card-action">
                            <button class="waves-effect blue darken-4 waves-light btn" @click="login()">Login</button>
                        </div>
                    </div>
                </div>
            <div class="col s12 m4 l2"></div>
        </div>
    </div>
</template>

<script>
import User from '../service/user'

export default {
    name: "Login",
    data() {
        return {
            user: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        login() {
            // eslint-disable-next-line no-console
            console.log(this.user)
            /* eslint no-unused-vars: ["error", { "args": "none" }] */
            User.auth(this.user).then(response => {
                this.user = { }
                if (response.data.message.includes('Logged In')) {
                    this.$notify({
                        group: 'foo',
                        title: 'Important message',
                        text: response.data.message + "... Redirecting!",
                        type: 'success'
                    })
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "home" });
                    setTimeout(() => {
                        this.$router.push({
                            name: 'home'
                        })
                    }, 1500)
                } else {
                    this.$notify({
                        group: 'foo',
                        title: 'Important message',
                        text: response.data.message,
                        type: 'error'
                    })
                }
            }).catch(e => {
                this.$notify({
                    group: 'foo',
                    title: 'Important message',
                    text: e.response.data.message,
                    type: 'error'
                })
            })
        },
    }
}
</script>

<style>

</style>