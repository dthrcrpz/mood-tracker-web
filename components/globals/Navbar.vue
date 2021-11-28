<template>
    <nav>
        <div class="container">
            <div class="col logo-wrapper">
                <nuxt-link class="logo" to="/">mood-tracker</nuxt-link>
            </div>
            <div class="col links-wrapper">
                <div class="user" v-if="$store.state.auth.loggedIn" @click="showOptions ^= true">
                    <img src="/user.svg">
                    <transition name="fade">
                        <div class="options" v-if="showOptions">
                            <nuxt-link to="/history">History</nuxt-link>
                            <a href="javascript:void(0)" @click="logout()">Logout</a>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data: () => ({
            showOptions: false
        }),
        methods: {
            logout () {
                this.$auth.logout('local').then(res => {
                    this.$router.push('/login')
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="sass">
    nav
        user-select: none
        padding: 15px 0
        background-color: rgba(0, 18,32, 0.8)
        position: fixed
        top: 0
        left: 0
        right: 0
        width: 100%
        z-index: 10
        .container
            display: flex
            justify-content: space-between
            .col
                &.logo-wrapper
                    .logo
                        color: $teal
                        font-family: Montserrat
                        font-size: 25px
                        font-weight: 600
                &.links-wrapper
                    display: flex
                    align-items: center
                    .user
                        margin-right: 20px
                        cursor: pointer
                        position: relative
                        img
                            width: 30px
                        .options
                            position: absolute
                            background-color: $teal
                            right: 0
                            top: calc(100% + 5px)
                            a
                                display: block
                                color: $blue
                                padding: 10px 20px
                                width: 100%
                                text-align: right
                                transition: .4s
                                &:hover
                                    background-color: $yellow
            
</style>