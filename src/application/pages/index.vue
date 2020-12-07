<template>
	<div class="" />
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'HomePage',
	beforeMount () {
		this.$router.push('/dashboard')
	}
})
</script>

<style scoped></style>
