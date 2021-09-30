<template>
    <div class="modal-container">
        <div class="modal">
            <p class="centered-title">Centered title</p>
            <div class="footer">
                <div class="buttons">
                    <button class="button red">Cancel</button>
                    <button class="button teal">Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
    .modal
        max-width: 600px
        .centered-title
            font-size: 25px
            margin: auto
            padding: 20px
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