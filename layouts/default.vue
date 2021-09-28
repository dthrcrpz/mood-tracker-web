<template>
	<div>
		<Navbar/>
		<Nuxt/>
	</div>
</template>

<script>
	export default {
		components: {
			Navbar: () => import('~/components/globals/Navbar'),
		}
	}
</script>

<style lang="sass">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap')
	// @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&display=swap')
	@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap')

	@font-face
		font-family: 'Montserrat', sans-serif
		font-style: normal
		font-display: auto

	@font-face
		font-family: 'Lato', sans-serif
		font-style: normal
		font-display: auto

	html
		box-sizing: border-box

	body
		color: $teal
		font-family: Montserrat
		padding-top: $navHeight
		background-image: url('/images/background.svg')
		background-size: cover
		background-position: center

	*, *:before, *:after
		box-sizing: inherit
		padding: 0
		margin: 0
		background-repeat: no-repeat

	a, a:link, a:active, a:visited, a:hover
		text-decoration: none
		color: $yellow

	a, button, input, select, textarea
		&:focus
			outline: none !important

	button
		cursor: pointer

	.button
		width: 100%
		background-color: $teal
		font-size: 20px
		padding: 10px
		color: $blue
		font-family: Lato
		border: 1px solid $teal

	.noselect
		user-select: none

	.t
		border: 1px  solid red

	.page-enter-active, .page-leave-active
		transition: opacity .3s

	.page-enter, .page-leave-to
		opacity: 0
		transform: translateY(50px)

	.no-scroll 
		overflow: hidden 

	.fade-enter-active, .fade-leave-active 
		transition: opacity .5s 

	.fade-enter, .fade-leave-to
		opacity: 0 

	.container 
		max-width: 768px
		width: 100%
		margin: 0 auto
		padding: 0 20px
		box-sizing: border-box

	.modal-background
		position: fixed
		z-index: 199
		width: 100vw
		height: 100vh
		top: 0
		right: 0
		left: 0
		bottom: 0
		background-color: rgba(0, 0, 0, 0.5)
		max-height: 100vh
		overflow-y: auto
		backdrop-filter: blur(1px)

	.modal-container
		position: fixed
		height: 100vh
		width: 100%
		display: block
		padding: 0 15px 140px
		top: 0
		left: 0
		z-index: 200
		overflow-y: auto
		.modal
			z-index: 200
			width: 100%
			display: table
			top: 10%
			left: 0
			right: 0
			margin: 6% auto 0
			background-color: rgba(255, 255, 255, 0.8)
			box-shadow: 0 0 11px rgba(0, 0, 0, 0.5)
			backdrop-filter: blur(5px)

	.btt
		position: fixed
		bottom: 30px
		right: 30px
		height: 45px
		width: 45px
		cursor: pointer
		background-color: #fff
		background-image: url('/images/btt.svg')
		background-position: center
		background-size: contain
		transition: .5s
		transform: translateY(20px)
		opacity: 0
		visibility: hidden
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4)
		border-radius: 100%
		border: 2px solid $blue
		&:hover
			transform: translateY(-5px) !important
		&.shown
			opacity: 1
			visibility: visible
			transform: translateY(0px)
		@media (max-width: 768px) 
			bottom: 20px
			right: 20px
			height: 35px
			width: 35px

	/*** Works on common browsers ***/
	::selection  
		background-color: $blue
		color: #fff

	/*** Mozilla based browsers ***/
	::-moz-selection  
		background-color: $blue
		color: #fff

	/***For Other Browsers ***/
	::-o-selection  
		background-color: $blue
		color: #fff

	::-ms-selection  
		background-color: $blue
		color: #fff

	/*** For Webkit ***/
	::-webkit-selection  
		background-color: $blue
		color: #fff
	/**	End */

	.section-title
		color: $blue
		text-align: center
		margin: 0 auto 30px
		font-size: 48px
		text-transform: uppercase
		position: relative
		display: table
		transition: .4s
		opacity: 1
		font-family: Lato
		font-weight: 600
		&:after
			position: absolute
			content: ''
			background-color: $blue
			height: 5px
			width: 0%
			top: 100%
			transition: .5s
			left: 0
			right: 0
			margin: auto
		&.ov
			opacity: 1
			&:after
				width: 60%

	.section-subtitle
		color: $blue
		text-align: center
		margin: 0 auto 30px
		font-size: 20px
		display: table

	.form-group
		position: relative

	.validation-errors
		position: absolute
		top: calc(100% + -4px)
		background: #ff5757
		color: #fff
		font-size: 13px
		z-index: 3
		padding: 5px 15px
		border-radius: 3px
		@extend .noselect
		left: 10px
		box-shadow: 0 2px 9px rgba(0, 0, 0, 0.4)
		&.with-textarea
			top: 100%
		&:before
			content: ""
			position: absolute
			bottom: calc(100% - 1px)
			width: 0
			height: 0
			border-left: 7px solid transparent
			border-right: 7px solid transparent
			border-bottom: 7px solid #ff5757
			left: 17px
			z-index: 1
		&.offset
			top: calc(100% - 25px)

	.loading
		position: fixed
		z-index: 9999
		width: 100vw
		height: 100vh
		top: 0
		right: 0
		left: 0
		bottom: 0
		background-color: $blue
		max-height: 100vh
		overflow-y: auto
		background-image: url('/loading.svg')
		background-repeat: no-repeat
		background-position: center
		background-size: 80px
		cursor: progress

	.banner-background
		opacity: 1
		position: fixed
		width: 100%
		height: 100%
		top: 0
		left: 0
		right: 0
		bottom: 0
		margin: auto
		z-index: 1

	section
		.mini-title
			font-size: 30px
			color: $blue

	.to-top
		position: fixed
		width: 50px
		height: 50px
		bottom: 20px
		right: 20px
		cursor: pointer
		transition: .4s
		svg
			width: 100%
			height: 100%
			background-color: #fff
			border-radius: 50%
			box-shadow: 0 3px 11px rgba(0, 0, 0, 0.5)
			polygon
				transition: .4s
		&:hover
			svg
				polygon
					transform: translateY(-5px)

	/* width */
	::-webkit-scrollbar
		width: 10px

	/* Track */
	::-webkit-scrollbar-track
		background: $blue
	
	/* Handle */
	::-webkit-scrollbar-thumb
		background: $blue

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover
		background: $blue

	.pre-load
		opacity: 0
		visibility: hidden
		pointer-events: none
</style>