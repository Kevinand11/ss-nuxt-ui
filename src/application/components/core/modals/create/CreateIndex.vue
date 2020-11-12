<template>
	<div />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useCreateModal } from '@app/hooks/core/modals'
export default defineComponent({
	name: 'CreateModalIndex',
	setup () {
		const { isCreateModalSubject } = useCreateModal()
		return { isCreateModalSubject }
	}
})
</script>
