<template>
	<div class="transition-container">
		<div class="transition-overlay" ref="overlay"></div>
		<div class="transition-content" ref="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import { gsap } from "gsap";

export default {
	mounted() {
		// On définit la hauteur de l'overlay à la taille de l'écran
		gsap.set(this.$refs.overlay, { height: "100vh" });
	},
	methods: {
		// Fonction qui anime la transition
		animate(cb) {
			// On anime l'overlay pour le faire descendre
			gsap.to(this.$refs.overlay, {
				duration: 0.5,
				top: "100vh",
				ease: "power2.inOut",
			});

			// On anime le contenu pour le faire monter
			gsap.to(this.$refs.content, {
				duration: 0.5,
				top: 0,
				ease: "power2.inOut",
				onComplete: () => {
					cb();
				},
			});
		},
	},
};
</script>

<style>
/* Styles pour les éléments de transition */
.transition-container {
	position: relative;
	overflow: hidden;
	height: 100%;
}

.transition-overlay {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background-color: black;
	z-index: 9999;
}

.transition-content {
	position: absolute;
	top: 100vh;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
</style>
