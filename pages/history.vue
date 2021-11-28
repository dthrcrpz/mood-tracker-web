<template>
    <div class="page-history">
        <div class="container">
            <div class="history-wrapper">
                <div class="history" v-for="(data, key) in history" :key="key">
                    <p class="date">{{ data.date }}</p>
                    <p class="remarks">{{ data.result.result }}</p>
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
            let data = await $axios.get(`/history`)

            return {
                history: data.data.history
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