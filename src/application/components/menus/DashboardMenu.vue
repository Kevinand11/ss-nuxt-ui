<template>
	<div class="menu">
		<div class="menu__logo">
			<Logo />
			<div class="menu__logo--divider">
				<div class="menu__logo--divider-item" />
				<div class="menu__logo--divider-item" />
				<div class="menu__logo--divider-item" />
			</div>
		</div>
		<div class="menu__main">
			<div class="menu__main--item">
				<nuxt-link to="/dashboard" class="menu__main--item-link">
					<img
						src="/icons/dashboard.svg"
						alt="dashboard icon"
						class="menu__main--item-img"
					>
					<div class="menu__main--item-text">
						Dashboard
					</div>
				</nuxt-link>
			</div>
			<div class="menu__main--item">
				<nuxt-link to="/tutors" class="menu__main--item-link">
					<img
						src="/icons/tutors.svg"
						alt="dashboard icon"
						class="menu__main--item-img"
					>
					<div class="menu__main--item-text">
						Tutors
					</div>
				</nuxt-link>
			</div>
			<div class="menu__main--item">
				<nuxt-link to="/flashcards" class="menu__main--item-link">
					<img
						src="/icons/flashcards.svg"
						alt="dashboard icon"
						class="menu__main--item-img"
					>
					<div class="menu__main--item-text">
						Flashcards
					</div>
				</nuxt-link>
			</div>
			<div class="menu__main--item">
				<nuxt-link to="/test-prep" class="menu__main--item-link">
					<img
						src="/icons/testprep.svg"
						alt="dashboard icon"
						class="menu__main--item-img"
					>
					<div class="menu__main--item-text">
						Test Prep
					</div>
				</nuxt-link>
			</div>
			<div class="menu__main--item">
				<nuxt-link to="/shop" class="menu__main--item-link">
					<img
						src="/icons/shop.svg"
						alt="dashboard icon"
						class="menu__main--item-img"
					>
					<div class="menu__main--item-text">
						Shop
					</div>
				</nuxt-link>
			</div>
		</div>
		<div class="menu__upgrade">
			<UpgradeCard />
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import UpgradeCard from '../card/UpgradeCard'
export default defineComponent({
	name: 'DashboardMenu',
	components: { UpgradeCard }
})
</script>

<style lang="scss" scoped>
.menu {
  padding: 2rem 0;
  min-height: 100vh;
  // max-width: 200px;
  box-shadow: 3px 0px 10px #0000001a;
  text-align: center;

  &__logo {
    &--divider {
      &-item {
        margin: 0 0.4rem;
        width: 0.75rem;
        height: 0.75rem;
        background-color: $color-text-light;
        display: inline-block;
        border-radius: 10rem;
      }
    }

  }
  &__main {
    text-align: left;
    padding: 1rem 0;
    box-sizing: border-box;
    color: $color-text-light;
    &--item {
      &-link {
        display: flex;
        flex-wrap: nowrap;
        justify-content: left;
        width: 100%;
        padding: 1rem 1.75rem;
      }
      &-text {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 600;
        display: inline-block;
      }
      &-img {
        padding-right: 1rem;
        height: 1.2rem;
        width: 1.2rem;
      }
    }
  }
  &__upgrade {
    padding: 2rem 1.75rem;
  }
}
</style>
