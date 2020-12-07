<template>
	<div class="dashboard-header">
		<div class="header-item">
			<SearchBar />
		</div>
		<div class="header-item">
			<button class="header-btn btn btn-icon">
				<img src="/icons/chat.svg" alt="messages" class="btn-icon-icon">
			</button>
		</div>
		<div class="header-item">
			<button class="header-btn btn btn-icon">
				<img src="/icons/users.svg" alt="profile" class="btn-icon-icon">
			</button>
		</div>
		<div class="header-item">
			<button class="header-btn btn btn-icon">
				<img src="/icons/notification.svg" alt="notifications" class="btn-icon-icon">
			</button>
		</div>
		<div class="header-item">
			<button class="header-btn btn btn-icon">
				<img src="/icons/logout.svg" alt="logout" class="btn-icon-icon">
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import SearchBar from '../SearchBar'
export default defineComponent({
	name: 'DashboardHeader',
	components: { SearchBar }
})
</script>

<style lang="scss" scoped>
.dashboard-header{
  margin: 1rem 0;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
}
.header-item{
  margin: 0 0.25rem;
}
</style>
