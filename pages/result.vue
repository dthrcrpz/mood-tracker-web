<template>
    <div class="page-result">
        <div class="container">
            <div class="mood-score" v-if="result">
                <p class="label">Your mood score: </p>
                <p class="score">{{ result.score }}%</p>
            </div>
            <div class="texts">
                <p :class="`result ${(result.result == 'POSITIVE MOOD') ? 'positive' : 'negative'}`">{{ result.result }}</p>
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
        },
        mounted () {
            if (this.result == null) {
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="sass" scoped>
    .page-result
        .container
            .mood-score
                width: fit-content
                display: flex
                align-items: center
                border: 1px solid #000
                color: $blue
                padding: 10px
                margin: 20px auto 0
                .label
                    margin-right: 10px
                    font-size: 18px
                .score
                    font-size: 20px
                    font-weight: 600
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
                        color: $green
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