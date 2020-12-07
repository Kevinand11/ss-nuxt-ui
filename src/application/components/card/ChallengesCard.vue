<template>
	<div class="challenges">
		<div class="challenges__head">
			Challenges
		</div>
		<div class="challenges__body">
			<div class="challenge__group">
				<div class="challenge">
					<div class="challenge__head">
						Current Challenges
					</div>
					<div class="challenge__body">
						<div class="challenge__body--text">
							Answer 100 questions in a week for 50 points.
						</div>
						<div class="challenge__body--other">
							<div class="challenge__body--duration">
								<img
									src="/icons/clock.svg"
									alt="challenge duration"
									class="challenge__body--duration-img"
								>
								24min
							</div>
							<div class="challenge__body--status">
								<button class="challenge__body--status-btn btn">
									75
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="challenge__group">
				<div class="challenge">
					<div class="challenge__head challenge__head--new">
						New Challenges
					</div>
					<div class="challenge__body challenge__body--new">
						<div class="challenge__body--text">
							Answer 100 questions in a week for 50 points.
						</div>
						<div class="challenge__body--other">
							<div class="challenge__body--duration">
								<img
									src="/icons/clock.svg"
									alt="challenge duration"
									class="challenge__body--duration-img"
								>
								24hrs
							</div>
							<div class="challenge__body--status">
								<button class="challenge__body--status-btn btn">
									Start
								</button>
							</div>
						</div>
					</div>
					<div class="challenge__body challenge__body--new">
						<div class="challenge__body--text">
							Answer 100 questions in a week for 50 points.
						</div>
						<div class="challenge__body--other">
							<div class="challenge__body--duration">
								<img
									src="/icons/clock.svg"
									alt="challenge duration"
									class="challenge__body--duration-img"
								>
								4 days
							</div>
							<div class="challenge__body--status">
								<button class="challenge__body--status-btn btn">
									Start
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'ChallengesCard'
})
</script>

<style lang="scss" scoped>
.challenges {
  text-align: center;
  display: block;
  flex-wrap: nowrap;
  justify-content: space-between;
  &__head {
    display: block;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
    padding: 0.5rem 0 0.1rem 0;
  }
  &__body {
    background-color: $color-background-grey;
    padding: 1rem;
  }
}
.challenge {
  text-align: left;
  &__group {
    padding: 1rem 0;
    &:not(:last-child) {
      border-bottom: 5px solid $color-border-grey;
    }
  }
  &__head {
    font-size: 0.8rem;
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    &--new {
      border-bottom: 1px solid $color-border-grey;
    }
  }
  &__body {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0.5rem 0;
    &--text {
      line-height: 1rem;
      font-size: 0.8rem;
    }
    &--new {
      border-bottom: 1px solid $color-border-grey;
    }
    &--other {
      display: flex;
      flex-wrap: nowrap;
      justify-content: right;
      font-size: 0.9rem;
      line-height: 1.25rem;
      align-content: flex-end;
    }
    &--status {
      padding-left: 1rem;
      margin-top: auto;
      &-btn {
        color: $color-white;
        background-color: $color-green;
        padding: 0.15rem 0.75rem;
      }
    }
    &--duration {
      display: flex;
      flex-wrap: nowrap;
      margin-top: auto;
      &-img {
        height: 1rem;
        width: 1rem;
        padding-right: 0.5rem;
      }
    }
  }
}
</style>
