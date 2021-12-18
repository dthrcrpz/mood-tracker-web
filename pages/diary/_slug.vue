<template>
    <div class="page-diary-slug">
        <div class="container">
            <div class="diary-wrapper">
                <div class="title">
                    <div class="text">Diary</div>
                    <button class="button" @click="setShowEditModal(true)">Edit Entry</button>
                </div>
                <div class="body" v-html="diary.body"></div>
            </div>
        </div>
        <transition name="fade">
            <EditModal v-if="showEditModal" :diaryData="diary"/>
        </transition>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        components: {
            EditModal: () => import('@/components/diary/EditModal.vue')
        },
        data: () => ({
            diary: null,
            showEditModal: false,
        }),
        methods: {
            ...mapMutations({
                setShowLoading: 'globals/setShowLoading',
                setShowModal: 'globals/setShowModal',
            }),
            setShowEditModal (value) {
                this.showEditModal = value
                this.setShowModal(value)
            },
            addEntry (data) {
                this.setShowLoading(true)
                this.$axios.post(`diaries`, data).then(res => {
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                }).then(() => {
                    this.setShowLoading(false)
                })
            }
        },
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
