<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<div id="sl"></div>
	<div id="sl2"></div>
	<router-view />
</template>

<style>
#sl {
	position: absolute;
	top: -100%;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: black;
	z-index: 9999;
}
#sl2 {
	position: absolute;
	top: -100%;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: #2c3e50;
	z-index: 9998;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
