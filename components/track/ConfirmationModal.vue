<template>
    <div class="modal-container">
        <div class="modal" v-click-outside="close">
            <div class="header">
                <p class="centered-title">Submit the answers now?</p>
            </div>
            <div class="footer">
                <div class="buttons">
                    <button class="button red" @click="close()">No</button>
                    <button class="button teal" @click="confirm()">Yes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            confirm () {
                this.$emit('confirm')
                this.close()
            },
            close () {
                this.$store.commit('globals/setShowModal', false)
                this.$store.commit('track/setShowConfirmationModal', false)
            }
        }
    }
</script>

<style scoped lang="sass">
    .modal
        max-width: 600px
        margin: 110px auto 0
        .header
            padding: 20px
            color: $teal
            .centered-title
                font-size: 25px
                margin: auto
                text-align: center
                font-family: Montserrat
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