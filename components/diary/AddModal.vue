<template>
    <div class="modal-container">
        <div class="modal" v-click-outside="hideMe">
            <div class="header">
                <p class="centered-title">Add Diary Entry</p>
            </div>
            <div class="body">
                <ValidationObserver tag="div" ref="form" v-slot="{ valid, handleSubmit }">
                    <form @submit.prevent="handleSubmit(submit(valid))">
                        <ValidationProvider name="body" tag="div" class="form-group" v-slot="{ errors }" :rules="{ required: true }">
                                <textarea name="body" placeholder="Type" v-model="diaryForm.body" rows="8"></textarea>
                                <transition name="fade"><span class="validation-errors" v-if="errors.length > 0">{{ properFormat(errors[0]) }}</span></transition>
                            </ValidationProvider>
                        <div class="form-group">
                            <button class="button yellow">Submit</button>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            diaryForm: {
                date: '',
                body: ''
            }
        }),
        methods: {
            submit (valid) {
                if (valid) {
                    this.diaryForm.body = this.diaryForm.body.replace(/\r?\n/g, '<br />')
                    this.diaryForm.date = this.$moment().format('YYYY-MM-DD hh:mm:ss A')
                    this.$parent.addEntry(this.diaryForm)
                    this.$parent.setShowAddModal(false)
                }
            },
            hideMe () {
                this.$parent.setShowAddModal(false)
            }
        }
    }
</script>

<style scoped lang="sass">
    .modal
        max-width: 700px
        .header
            padding: 20px
            .centered-title
                font-size: 25px
                margin: auto
                text-align: center
                font-family: Montserrat
                color: $teal
        .body
            // max-height: 50px
            overflow: auto
            padding: 10px
            form
                .form-group
                    input, textarea
                        width: 100%
                        padding: 10px
                        font-family: Lato
                        font-size: 16px
                        resize: none
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