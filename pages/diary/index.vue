<template>
    <div class="page-diary">
        <div class="container">
            <div class="diary-wrapper">
                <div class="title">
                    <div class="text">Diary</div>
                    <button class="button" @click="setShowAddModal(true)">Add Entry</button>
                </div>
                <nuxt-link :to="`/diary/${data.id}`" class="diary" v-for="(data, key) in diary" :key="key">
                    <p class="date">{{ data.date }}</p>
                </nuxt-link>
            </div>
        </div>
        <transition name="fade">
            <AddModal v-if="showAddModal"/>
        </transition>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        components: {
            AddModal: () => import('@/components/diary/AddModal.vue')
        },
        data: () => ({
            diary: null,
            showAddModal: false
        }),
        methods: {
            ...mapMutations({
                setShowLoading: 'globals/setShowLoading',
                setShowModal: 'globals/setShowModal',
            }),
            setShowAddModal (value) {
                this.showAddModal = value
                this.setShowModal(value)
            },
            fetchDiaries () {
                this.$axios.get(`/diaries`).then(res => {
                    this.diary = res.data.diaries
                }).catch(err => {
                    console.log(err)
                })
            },
            addEntry (data) {
                this.setShowLoading(true)
                this.$axios.post(`diaries`, data).then(res => {
                    this.fetchDiaries()
                }).catch(err => {
                    console.log(err)
                }).then(() => {
                    this.setShowLoading(false)
                })
            }
        },
        async asyncData ({ $axios }) {
            let data = await $axios.get(`/diaries`)

            return {
                diary: data.data.diaries
            }
        }
    }
</script>

<style lang="sass" scoped>
    .page-diary
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
