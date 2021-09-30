<template>
    <div class="modal-container">
        <div class="modal" v-click-outside="close">
            <div class="header">
                <p class="centered-title">Submit the answers now?</p>
            </div>
            <div class="footer">
                <div class="buttons">
                    <button class="button red" @click="close()">No</button>
                    <button class="button teal">Yes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
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
        .header
            padding: 20px
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