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
                        <input type="text" placeholder="First Name" name="first_name" v-model="registerForm.firstName">
                        <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                    </ValidationProvider>
                    <ValidationProvider name="last_name" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                        <input type="text" placeholder="Last Name" name="last_name" v-model="registerForm.lastName">
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
                        <button class="button" type="submit">Login</button>
                    </div>
                </form>
            </ValidationObserver>
        </template>
    </div>
</template>

<script>
    export default {
        data: () => ({
            action: 'login',
            registerForm: {
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                password_confirmation: ''
            },
            loginForm: {
                email: '',
                password: '',
            }
        }),
        methods: {
            register (valid) {
                if (valid) {
                    
                }
            },
            login () {

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
</style>