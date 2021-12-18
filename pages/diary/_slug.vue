<template>
    <div class="page-diary-slug">
        <div class="container">
            <div class="diary-wrapper">
                <div class="title">
                    <div class="text">Diary</div>
                    <button class="button">Edit Entry</button>
                </div>
                <div class="body" v-html="diary.body"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            diary: null
        }),
        async asyncData ({ $axios, params }) {
            let data = await $axios.get(`/diaries/${params.slug}`)

            return {
                diary: data.data.diary
            }
        }
    }
</script>

<style lang="sass" scoped>
    .page-diary-slug
        margin-top: 30px
        .container
            .diary-wrapper
                .title
                    margin-bottom: 30px
                    display: flex
                    align-items: center
                    justify-content: space-between
                    .text
                        font-size: 25px
                        font-weight: 600
                    .button
                        max-width: 150px
                        font-size: 16px
                .diary
                    display: block
                    padding: 15px
                    transition: .4s
                    &:hover
                        background-color: $teal
                        .date, .remarks
                            color: $blue
                    .date
                        color: $yellow
                        transition: .4s
                        font-weight: 600
</style>
