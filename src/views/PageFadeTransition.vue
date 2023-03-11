<template>
	<page-transition>
		<transition name="fade">
			<slot />
		</transition>
	</page-transition>
</template>

<script>
import gsap from "gsap";
import PageTransition from "./PageTransition.vue";
export default {
	name: "PageFadeTransition",
	components: {
		PageTransition,
	},
	methods: {
		beforeEnter(el) {
			gsap.set(el, { opacity: 0 });
		},
		enter(el, done) {
			gsap.to(el, { opacity: 1, duration: 1.5, onComplete: done });
		},
		leave(el, done) {
			gsap.to(el, { opacity: 0, duration: 1.5, onComplete: done });
		},
	},
};
</script>
