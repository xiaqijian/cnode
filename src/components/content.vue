<template>
	<section>
		<sidebar></sidebar>
    <router-view></router-view>
	</section>
</template>

<script>
import leftContent from './leftContent'
import sidebar from './sidebar'

export default {
  components: {
    'left-content': leftContent,
    'sidebar': sidebar
  }
}
</script>

<style>
section {
	width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    /*border: 1px solid red;*/
}
</style>
