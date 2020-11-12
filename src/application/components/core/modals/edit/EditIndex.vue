<template>
	<div />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useEditModal } from '@app/hooks/core/modals'
export default defineComponent({
	name: 'EditModalIndex',
	setup () {
		const { isEditModalSubject, isEditModalTutorSubjects } = useEditModal()
		return { isEditModalSubject, isEditModalTutorSubjects }
	}
})
</script>
