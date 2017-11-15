<template>

<div class="ui inverted vertical masthead center aligned segment">
  <div class="ui text container">
    <h2>You've been logged out. {{ message }}</h2>
  </div>
</div>

</template>

<script>
export default {

	data() {

		return {
			message: "You'll be redirected shortly."
		}

	},

	created() {

		this.redirect();

	},

	methods: {
		redirect() {
			var self = this;
			setTimeout(function() {self.$router.push("/");}, 2000);
		}
	}
}
</script>



<style scoped>

.text.container {
	margin-bottom: 10em;
	margin-top: 8em;
}

</style>
