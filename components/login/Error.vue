<template>
    <div class="modal-container">
        <div class="modal" v-click-outside="close">
            <div class="header">
                <p class="centered-title">{{ message }}</p>
            </div>
            <div class="footer">
                <div class="buttons">
                    <button class="button teal" @click="close()">Okay</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: {
                type: String,
                default: ''
            }
        },
        methods: {
            close () {
                this.$parent.loginError = false
                this.$store.commit('globals/setShowModal', false)
            }
        }
    }
</script>

<style scoped lang="sass">
    .modal
        max-width: 600px
        .header
            padding: 20px
            .centered-title
                font-size: 20px
                margin: 10px auto 0
                text-align: center
                font-family: Montserrat
                color: $red
        .footer
            width: 100%
            padding: 10px
            .buttons
                display: flex
                justify-content: flex-end
                .button
                    margin-left: 10px
                    font-size: 15px
                    max-width: 150px
</style>