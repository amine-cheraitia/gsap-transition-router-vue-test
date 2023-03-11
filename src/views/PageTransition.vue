<template>
	<div class="page-transition">
		<slot />
	</div>
</template>

<style>
.page-transition {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
