<template>
    <div class="page-track">
        <div class="container">
            <div class="track-box">
                <div class="progress-container">
                    <div class="numbers">{{ computedQuestions.activeKey + 1 }}/{{ computedQuestions.total }}</div>
                    <div class="bar">
                        <div class="progress" :style="`width: ${computedQuestions.progress}`"></div>
                    </div>
                </div>
                <div class="q-a" v-for="(question, key) in questions" :key="key">
                    <div class="wrapper" v-if="computedQuestions.activeKey == key">
                        <p class="question">{{ question.question }}</p>
                        <ol class="choices" type="A">
                            <li :class="{ 'active': choice.selected }" v-for="(choice, key) in question.choices" :key="key" @click="selectChoice(question, choice)">{{ choice.value }}</li>
                        </ol>
                    </div>
                </div>
                <div class="navigation">
                    <button class="button prev" v-if="computedQuestions.activeKey > 0" @click="navigate('prev')">Prev</button>
                    <button :class="{'button': true, 'next': true, 'disabled': !computedQuestions.chosen}" @click="navigate('next')" v-if="computedQuestions.activeKey < (questions.length - 1)">Next</button>
                    <button :class="{'button': true, 'submit': true, 'disabled': !computedQuestions.chosen}" @click="navigate('submit')" v-if="computedQuestions.activeKey == (questions.length - 1)">Submit Answers</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            questions: [
                {
                    question: 'Do you feel like killing someone today?',
                    active: true,
                    choices: [
                        { value: 'Super Yes!', selected: false },
                        { value: 'Kind of', selected: false },
                        { value: 'No', selected: false },
                        { value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos inventore nam labore voluptatibus quas mollitia vero hic nobis esse tempore provident, eum culpa velit, nostrum minima, facilis debitis incidunt.', selected: false },
                    ]
                },
                {
                    question: 'Are you in the mood to socialize right now?',
                    active: false,
                    choices: [
                        { value: 'Super Yes!', selected: false },
                        { value: 'Kind of', selected: false },
                        { value: 'No', selected: false },
                        { value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos inventore nam labore voluptatibus quas mollitia vero hic nobis esse tempore provident, eum culpa velit, nostrum minima, facilis debitis incidunt.', selected: false },
                    ]
                },
                {
                    question: 'Are doggos cute?',
                    active: false,
                    choices: [
                        { value: 'Of course, the only answer is yes', selected: false },
                        { value: 'Same with A', selected: false },
                        { value: 'Are you kidding me?', selected: false },
                        { value: 'FUCK YES', selected: false },
                    ]
                },
            ]
        }),
        computed: {
            computedQuestions () {
                let activeKey = 0
                let chosen = false

                this.questions.forEach((question, key) => {
                    if (question.active) {
                        activeKey = key

                        let hasChosen = false
                        question.choices.forEach((choice, choiceKey) => {
                            if (choice.selected) {
                                hasChosen = true
                            }
                        })

                        chosen = hasChosen
                    } else {
                        activeKey = activeKey
                    }
                })

                let total = this.questions.length
                let progress = ((activeKey + 1) / total) * 100

                return {
                    activeKey: activeKey,
                    chosen: chosen,
                    total: total,
                    progress: `${progress}%`
                }
            }
        },
        methods: {
            navigate (action) {
                let targetKey = null

                switch (action) {
                    case 'prev':
                        targetKey = this.computedQuestions.activeKey - 1
                        this.questions[targetKey].active = true
                        this.disableQuestionsExcept(targetKey)
                        break
                    case 'next':
                        if (!this.computedQuestions.chosen) {
                            return
                        }

                        targetKey = this.computedQuestions.activeKey + 1
                        this.questions[targetKey].active = true
                        this.disableQuestionsExcept(targetKey)
                        break
                }
            },
            disableQuestionsExcept(targetKey) {
                this.questions.forEach((question, key) => {
                    if (key != targetKey) {
                        question.active = false
                    }
                })
            },
            selectChoice (question, choice) {
                question.choices.forEach((item, key) => {
                    item.selected = false
                })
                
                choice.selected = true
            }
        }
    }
</script>

<style scoped lang="sass">
    .page-track
        .container
            .track-box
                margin-top: 40px
                .progress-container
                    .numbers
                        font-size: 14px
                        margin-bottom: 5px
                    .bar
                        max-width: 500px
                        width: 100%
                        height: 10px
                        background-color: #656565
                        border-radius: 5px
                        position: relative
                        .progress
                            position: absolute
                            left: 0
                            top: 0
                            bottom: 0
                            height: 100%
                            transition: .3s
                            background-color: $teal
                            border-radius: 5px
                .q-a
                    margin-top: 20px
                    .wrapper
                        .question
                            font-size: 30px
                            margin-bottom: 20px
                            font-weight: 700
                            max-width: 500px
                            width: 500%
                            color: $yellow
                        .choices
                            li
                                width: 100%
                                padding: 10px
                                border: 1px solid $teal
                                border-radius: 10px
                                margin-bottom: 10px
                                list-style-position: inside
                                cursor: pointer
                                transition: .4s
                                user-select: none
                                &.active, &:active
                                    background-color: $teal
                                    color: $blue
                                    font-weight: 700
                .navigation
                    display: flex
                    justify-content: flex-end
                    .button
                        font-size: 18px
                        padding: 10px
                        color: $blue
                        max-width: 150px
                        margin-left: 10px
                        &.disabled
                            opacity: .4
                            cursor: not-allowed
                        &.submit
                            border: 1px solid $teal
                            background-color: $teal
                            max-width: 180px
                        &.prev
                            border: 1px solid $red
                            background-color: $red
</style>