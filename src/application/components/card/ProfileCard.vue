<template>
	<div class="profile">
		<div class="profile__image py-5 px-3">
			<img
				:src="profile.image"
				alt="user profile picture"
				class="profile__image-img"
			>
		</div>
		<div class="profile__points">
			{{ profile.points }}
			<img
				src="/icons/dollar-symbol.svg"
				alt="points"
				class="profile__points-img"
			>
		</div>
		<div class="profile__link">
			<a :href="profile.link" class="profile__link-btn btn btn-outline">
				View Profile
			</a>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'PersonalProfileMenu',
	data: () => ({
		profile: {
			image: 'images/user_profile.png',
			points: 135,
			name: 'Jerry Godwin',
			link: '/profile'
		}
	})
})
</script>
<style lang="scss" scoped>
.profile {
  text-align: center;
  padding: 2rem 1rem;
  box-shadow: 0px 3px 10px #00000019;
  &__image {
    &-img {
      width: 6rem;
      height: 6rem;
      border-radius: 10rem;
    }
  }
  &__points {
    margin: 0.25rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    &-img {
      margin: 0.25rem 0 0.25rem 0.25rem;
      width: 1rem;
      height: 1rem;
    }
  }
  &__link {
    &-btn {
      color: $color-green;
      border-color: $color-green;
    }
  }
}
</style>
