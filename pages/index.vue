<template>
	<div class="page-index">
		<div class="container">
			<section class="intro">
				<img src="/images/logo.svg" alt="mood-logo">
				<p class="title">mood tracker</p>
				<p class="description">
					track your mood & get assistance
				</p>
			</section>
			<section class="get-started">
				<p class="title">Login/Signup now to get started!</p>
			</section>
			<section>
				<Login/>
			</section>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
			Login: () => import('~/components/globals/Login'),
		},
	}
</script>

<style scoped lang="sass">
	.page-index
		.container
			padding-bottom: 70px
			section
				.title
					font-size: 40px
					font-famiy: Lato
					font-weight: 900
				.description
					font-size: 20px
					max-width: 100%
					width: 500px
			.intro
				padding: 20px 0
				text-align: center
				img
					max-width: 150px
					width: 100%
					box-shadow: 0 0 11px $teal
					border-radius: 50%
					margin-bottom: 15px
				p
					text-align: center
					width: 100%
			.get-started
				margin-top: 30px
				.title
					font-size: 25px
				
</style>