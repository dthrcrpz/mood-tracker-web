<template>
    <div class="page-history">
        <div class="container">
            <div class="history-wrapper">
                <div class="history" v-for="(n, key) in 5" :key="key">
                    <p class="date">(Wednesday) Nov. 5, 2021 - 11:30 PM</p>
                    <p class="remarks">Happy</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            history: null
        }),
        async asyncData ({ $axios }) {
            history = await $axios.get(`/history`)

            return {
                history: history
            }
        }
    }
</script>

<style lang="sass">
    .page-history
        margin-top: 30px
        .container
            .history-wrapper
                .history
                    margin-bottom: 20px
                    .remarks
                        color: $yellow
                        font-size: 20px
</style>