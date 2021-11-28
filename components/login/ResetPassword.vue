<template>
    <div class="login-form">
        <h2>Reset password</h2><br>
        <ValidationObserver tag="div" ref="form">
            <form @submit.prevent="login()">
                <ValidationProvider name="password" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                    <input type="password" name="password" placeholder="Password" v-model="resetPasswordForm.password">
                    <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                </ValidationProvider>
                <ValidationProvider name="password_confirmation" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true, confirmed: 'password' }">
                        <input type="password" name="password_confirmation" placeholder="Confirm Password" v-model="resetPasswordForm.password_confirmation">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                <div class="form-group">
                    <button class="button yellow" type="submit">Submit</button>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        components: {
            Error: () => import('@/components/login/Error')
        },
        data: () => ({
            resetPasswordForm: {
                password: '',
                password_confirmation: '',
            },
        }),
        methods: {
            ...mapMutations({
                setShowLoading: 'globals/setShowLoading',
            }),
            submit () {
                this.setShowLoading(true)
                this.$auth.loginWith('local', {
                    data: this.resetPasswordForm
                }).then(res => {
                    console.log(res)
                }).catch(err => {
                    this.loginError = true
                    this.$store.commit('globals/setShowModal', true)
                    this.errorMessage = err.response.data.errors[0]
                }).then(() => {
                    this.setShowLoading(false)
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