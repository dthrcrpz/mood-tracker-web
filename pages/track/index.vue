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
			</div>
		</div>
	</div>
</template>

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
</style>