<template>
	<div class="navbar-main">
		<div class="navbar-left">
			<Logo />
		</div>
		<div class="navbar-center">
			<SearchBar />
		</div>
		<div class="navbar-right">
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
					<img
						src="/icons/notification.svg"
						alt="notifications"
						class="btn-icon-icon"
					>
				</button>
			</div>
			<div class="header-item">
				<button class="header-btn btn btn-icon">
					<img src="/icons/logout.svg" alt="logout" class="btn-icon-icon">
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Logo from '../Logo'
export default defineComponent({
	name: 'NavHeader',
	components: { Logo }
})
</script>

<style lang="scss" scoped>
.navbar {
  box-sizing: border-box;
  &-main {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
    background: $color-white;
    padding: 1rem 2rem 0;
  }
  &-left {
  }
  &-right {
    display: flex;
    flex-wrap: nowrap;
  }
}
.header-item {
  margin: 0 0.5rem;
}
</style>
