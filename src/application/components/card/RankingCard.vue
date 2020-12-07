<template>
	<div class="ranking">
		<div class="ranking__head">
			Ranking
		</div>
		<div class="ranking__body">
			<div class="ranking__group">
				<div class="ranking__group--head">
					<div class="ranking__group--head-text">
						Top Ranking
					</div>
					<div class="ranking__group--head-filter">
						<AppSelect
							:remote="false"
							:options="['Monthly', 'Yearly', 'Daily']"
							:default-value="'Monthly'"
						/>
					</div>
				</div>
				<div v-for="(topFive, index) in topRankers" :key="index" class="ranking__item">
					<div class="ranking__item--user">
						<img
							:src="topFive.profileImage"
							:alt="topFive.name"
							class="ranking__item--user-img"
						>
						<div class="ranking__item--user-name">
							{{ topFive.name }}
						</div>
					</div>
					<div class="ranking__item--point">
						{{ topFive.points }}
						<img
							src="/icons/dollar-symbol.svg"
							alt="points"
							class="ranking__item--point-img"
						>
					</div>
				</div>
				<div class="ranking__button">
					<button class="ranking__button-btn btn btn-text">
						LOAD MORE
					</button>
				</div>
				<div class="ranking__group--head">
					<div class="ranking__group--head-text">
						Your Ranking
					</div>
				</div>
				<div class="ranking__item">
					<div class="ranking__item--user">
						<img
							:src="user.profileImage"
							:alt="user.name"
							class="ranking__item--user-img"
						>
						<div class="ranking__item--user-name">
							{{ user.name }}
						</div>
					</div>
					<div class="ranking__item--point">
						{{ user.points }}
						<img
							src="/icons/dollar-symbol.svg"
							alt="points"
							class="ranking__item--point-img"
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'RankingCard',
	data: () => ({
		topRankers: [
			{
				name: 'Juwon',
				profileImage: '/images/user_profile.png',
				points: 1187
			},
			{
				name: 'Sukky',
				profileImage: '/images/user_profile.png',
				points: 1043
			},
			{
				name: 'Freeman',
				profileImage: '/images/user_profile.png',
				points: 921
			},
			{
				name: 'Naelo',
				profileImage: '/images/user_profile.png',
				points: 876
			},
			{
				name: 'Timmy',
				profileImage: '/images/user_profile.png',
				points: 833
			}
		],
		user: {
			name: 'Jerry Godwin',
			profileImage: '/images/user_profile.png',
			points: 463
		}
	})
})
</script>
<style lang="scss" scoped>
.ranking {
  &__head {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
    padding: 0.5rem 0 0.1rem 0;
    text-align: center;
  }
  &__body {
    background-color: $color-background-grey;
    padding: 1rem;
  }

  &__group {
    &:not(:last-child) {
      border-bottom: 5px solid $color-border-grey;
    }

    &--head {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      padding: 0.5rem 0;

      &-text {
        font-size: 1.2rem;
        font-weight: bold;
      }
      &-filter {
        font-size: 0.75rem;
        line-height: 1rem;
      }
    }
  }
  &__item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-top: 1px solid $color-border-grey;
    border-bottom: 1px solid $color-border-grey;
    &--user {
      font-size: 1rem;
      display: flex;
      flex-wrap: nowrap;
      &-img {
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 10rem;
        margin-right: 0.5rem;
      }
    }
    &--point {
      display: flex;
      flex-wrap: nowrap;
      font-weight: 600;
      &-img {
        width: 1rem;
        margin: 0.25rem 0 0.25rem 0.5rem;
        height: 1rem;
        line-height: 1rem;
      }
    }
  }
  &__button {
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem 0;
    border-bottom: 5px solid $color-border-grey;
    &-btn {
    }
  }
}
</style>
