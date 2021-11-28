<template>
    <div class="login-form">
        <template v-if="action == 'register'">
            <div class="has-account">Already have an account? <a href="javascript:void(0)" @click="action = 'login'">Click here to Login</a></div>
            <ValidationObserver tag="div" ref="form" v-slot="{ valid, handleSubmit }">
                <form @submit.prevent="handleSubmit(register(valid))">
                    <ValidationProvider name="email" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true, email: true }">
                        <input type="text" placeholder="Email" name="email" v-model="registerForm.email">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <ValidationProvider name="first_name" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                        <input type="text" placeholder="First Name" name="first_name" v-model="registerForm.first_name">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <ValidationProvider name="last_name" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                        <input type="text" placeholder="Last Name" name="last_name" v-model="registerForm.last_name">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <ValidationProvider name="password" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }" vid="password">
                        <input type="password" name="password" placeholder="Password" v-model="registerForm.password">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <ValidationProvider name="password_confirmation" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true, confirmed: 'password' }">
                        <input type="password" name="password_confirmation" placeholder="Confirm Password" v-model="registerForm.password_confirmation">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <div class="form-group">
                        <button class="button" type="submit">Register</button>
                    </div>
                </form>
            </ValidationObserver>
        </template>

        <template v-if="action == 'login'">
            <div class="has-account">Don't have an account yet? <a href="javascript:void(0)" @click="action = 'register'">Click here to Register</a></div>
            <ValidationObserver tag="div" ref="form">
                <form @submit.prevent="login()">
                    <ValidationProvider name="email" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true, email: true }">
                        <input type="text" placeholder="Email" name="email" v-model="loginForm.email">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <ValidationProvider name="password" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                        <input type="password" name="password" placeholder="Password" v-model="loginForm.password">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <div class="form-group">
                        <button class="button yellow" type="submit">Login</button>
                    </div>
                    <a class="forgot-password" href="javascript:void(0)" @click="action = 'forgot-password'">Forgot Password</a>
                </form>
            </ValidationObserver>
            <div class="or">or</div>
            <div class="social-media-login">
                <p class="title">Login with your social media account</p>
                <a href="javascript:void(0)" class="sm-login fb" @click="fbLogin()">
                    <svg viewBox="0 0 56.693 56.693" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M40.43 21.739h-7.645v-5.014c0-1.883 1.248-2.322 2.127-2.322h5.395V6.125l-7.43-.029c-8.248 0-10.125 6.174-10.125 10.125v5.518h-4.77v8.53h4.77v24.137h10.033V30.269h6.77l.875-8.53z" fill="#ffffff" class="fill-000000"></path></svg>
                    <span>Facebook</span>
                </a>
            </div>
        </template>

        <template v-if="action == 'forgot-password'">
            <div class="has-account">Remember your account? <a href="javascript:void(0)" @click="action = 'login'">Click here to Login</a></div>
            <ValidationObserver tag="div" ref="form">
                <form @submit.prevent="forgotPassword()">
                    <ValidationProvider name="email" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true, email: true }">
                        <input type="text" placeholder="Email" name="email" v-model="forgotPasswordForm.email">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <div class="form-group">
                        <button class="button yellow" type="submit">Submit</button>
                    </div>
                </form>
            </ValidationObserver>
        </template>

        <template v-if="action == 'email-submitted'">
            <div class="has-account">Check you email to reset your password</div>
        </template>

        <transition name="fade">
            <Error :message="errorMessage" v-if="loginError"/>
        </transition>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        components: {
            Error: () => import('@/components/login/Error')
        },
        data: () => ({
            action: 'login',
            registerForm: {
                email: '',
                first_name: '',
                last_name: '',
                password: '',
                password_confirmation: ''
            },
            loginForm: {
                email: '',
                password: '',
            },
            forgotPasswordForm: {
                email: ''
            },
            loginError: false,
            errorMessage: ''
        }),
        methods: {
            ...mapMutations({
                setShowLoading: 'globals/setShowLoading',
            }),
            forgotPassword (valid) {
                this.setShowLoading(true)
                this.$axios('user/forgot-password', this.forgotPasswordForm).then(res => {
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                })
            },
            register (valid) {
                if (valid) {
                    this.setShowLoading(true)
                    this.$axios.post(`users/register`, this.registerForm).then(res => {
                        this.$auth.loginWith('local', {
                            data: this.registerForm
                        }).then(res => {
                            console.log(res)
                        }).catch(err => {
                            console.log(err)
                            this.setShowLoading(false)
                        })
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
            login () {
                this.setShowLoading(true)
                this.$auth.loginWith('local', {
                    data: this.loginForm
                }).then(res => {
                    console.log(res)
                }).catch(err => {
                    this.loginError = true
                    this.$store.commit('globals/setShowModal', true)
                    this.errorMessage = err.response.data.errors[0]
                }).then(() => {
                    this.setShowLoading(false)
                })
            },
            fbLogin () {
                let me = this

                this.setShowLoading(true)
                this.fbInit().then(res => {
                    FB.login(res => {
                        if (res.authResponse) {
                            FB.api('/me?fields=email,name,first_name,last_name,picture.width(500)', res => {
                                let data = res
                                let token = ''

                                me.$axios.post('users/login/facebook/', data).then(res => {
                                    this.$auth.setUserToken(res.data.token).then(res => {
                                        console.log(res)
                                    })
                                }).catch(err => {
                                    console.log(err)
                                }).then(() => {
                                    this.setShowLoading(false)
                                })
                            })
                        } else {
                            console.log('User cancelled login or did not fully authorize.')
                            this.setShowLoading(false)
                        }
                    }, {
                        scope: 'public_profile,email'
                    })
                })
            },
            fbInit () {
                return new Promise((resolve, reject) => {
                    FB.init({
                        appId            : process.env.fbAppId,
                        autoLogAppEvents : true,
                        xfbml            : true,
                        version          : 'v12.0'
                    })

                    resolve('ok')
                })
            }
        }
    }
</script>

<style scoped lang="sass">
    .login-form
        margin-top: 20px
        .has-account
            margin-bottom: 10px
            font-family: Montserrat
            a
                text-decoration: underline
    .form-group
        margin-bottom: 10px
        input
            width: 100%
            padding: 10px
            font-family: Lato
            font-size: 20px
    .forgot-password
        display: block
        margin: 5px auto 0
        text-align: center
        width: 100%
        font-size: 14px
        text-decoration: underline
    .or
        width: 100%
        position: relative
        padding: 0 10px
        background-color: $blue
        text-align: center
        margin-top: 20px
        &::before
            content: ''
            position: absolute
            height: 2px
            background-color: lighten($blue, 10%)
            width: 47%
            top: 0
            bottom: 0
            margin: auto
            right: 0
        &::after
            content: ''
            position: absolute
            height: 2px
            background-color: lighten($blue, 10%)
            width: 47%
            top: 0
            bottom: 0
            margin: auto
            left: 0
    .social-media-login
        .title
            margin: auto
            text-align: center
            margin: 20px auto 10px
        .sm-login
            border-radius: 3px
            display: flex
            flex-flow: row wrap
            padding: 10px
            max-width: 150px
            width: 100%
            margin: auto
            color: #fff
            align-items: center
            svg
                flex: 0 0 25px
            span
                flex: auto
                text-align: center
            &.fb
                background-color: #3b5998
</style>