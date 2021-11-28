<template>
    <div class="page-reset-password">
        <div class="container">
            <div class="form" v-if="valid">
                <ResetPassword/>
            </div>
            <div class="error" v-else>
                Invalid password reset token
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        auth: false,
        components: {
            ResetPassword: () => import('@/components/login/ResetPassword')
        },
        data: () => ({
            valid: false
        }),
        methods: {
            validateToken () {
                let token = this.$route.query.token
                this.$axios.post(`users/validate-password-reset-token/${token}`).then(res => {
                    this.valid = true
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        mounted () {
            this.validateToken()
        }
    }
</script>

<style lang="sass" scoped>
    .page-reset-password
        .container
            .error
                color: $red
                font-size: 25px
                text-align: center
                margin-top: 30px
</style>