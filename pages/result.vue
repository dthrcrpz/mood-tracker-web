<template>
    <div class="page-result">
        <div class="container">
            <div class="texts">
                <p class="seems">It seems like you are</p>
                <p class="result negative">{{ result.result }}</p>
            </div>
            <div class="assistance" v-html="result.remarks"></div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                result: 'track/getResults'
            })
        }
    }
</script>

<style lang="sass" scoped>
    .page-result
        .container
            .texts
                text-align: center
                margin-top: 30px
                font-family: Montserrat
                .seems
                    font-size: 30px
                .result
                    font-size: 50px
                    font-weight: 900
                    &.positive
                        color: $yellow
                    &.negative
                        color: $red
            .assistance
                margin-top: 30px
                p
                    font-size: 20px
                    max-width: 400px
                    width: 100%
                    margin-bottom: 20px
                ul
                    li
                        margin-left: 20px
</style>