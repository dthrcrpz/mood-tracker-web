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
					<p class="question">{{ question.question }}</p>
					<ol class="choices" type="A">
						<li :class="{ 'active': choice.selected }" v-for="(choice, key) in question.choices" :key="key" @click="selectChoice(question.choices, choice)">{{ choice.value }}</li>
					</ol>
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
					choices: [
						{ value: 'Super Yes!', selected: false },
						{ value: 'Kind of', selected: false },
						{ value: 'No', selected: false },
						{ value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos inventore nam labore voluptatibus quas mollitia vero hic nobis esse tempore provident, eum culpa velit, nostrum minima, facilis debitis incidunt.', selected: false },
					]
				}
			]
		}),
		methods: {
			selectChoice (choices, choice) {
				choices.forEach((item, key) => {
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
					.question
						font-size: 30px
						margin-bottom: 20px
						font-weight: 700
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
							&.active, &:active
								background-color: $teal
								color: $blue
								font-weight: 700
</style>