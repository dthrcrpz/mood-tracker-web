<template>
	<div class="page-track">
		<div class="container">
			<div class="track-box">
				<div class="progress-container">
					<div class="numbers">4/10</div>
					<div class="bar">
						<div class="progress" style="width: 40%"></div>
					</div>
				</div>
				<div class="q-a" v-for="(question, key) in questions" :key="key">
					<div class="wrapper" v-if="question.active">
						<p class="question">{{ question.question }}</p>
						<ol class="choices" type="A">
							<li :class="{ 'active': choice.selected }" v-for="(choice, key) in question.choices" :key="key" @click="selectChoice(question, choice)">{{ choice.value }}</li>
						</ol>
						<div class="navigation">
							<button class="button back" v-if="key > 0" @click="navigate('prev', key, question)">Prev</button>
							<button :class="{'button': true, 'next': true, 'disabled': !question.chosen}" @click="navigate('next', key, question)" v-if="(key + 1) < questions.length">Next</button>
							<button :class="{'button': true, 'submit': true, 'disabled': !question.chosen}" @click="navigate('next', key, question)" v-if="(key + 1) == questions.length">Submit Answers</button>
						</div>
					</div>
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
					chosen: false,
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
					chosen: false,
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
					chosen: false,
					choices: [
						{ value: 'Of course, the only answer is yes', selected: false },
						{ value: 'Same with A', selected: false },
						{ value: 'Are you kidding me?', selected: false },
						{ value: 'FUCK YES', selected: false },
					]
				},
			]
		}),
		methods: {
			navigate (action, key, question) {
				if (!question.chosen) {
					return
				}

				switch (action) {
					case 'prev':
						this.questions[key].active = false
						this.questions[key - 1].active = true
						break
					case 'next':
						this.questions[key].active = false
						this.questions[key + 1].active = true
						break
				}
			},
			selectChoice (question, choice) {
				question.choices.forEach((item, key) => {
					item.selected = false
				})
				
				question.chosen = true
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
								width: unset
								background-color: $teal
								font-size: 18px
								padding: 10px
								color: $blue
								font-family: Lato
								border: 1px solid $teal
								max-width: 180px
								width: 100%
								margin-left: 10px
								&.disabled
									opacity: .4
									cursor: not-allowed
</style>