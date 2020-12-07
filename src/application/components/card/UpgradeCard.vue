<template>
	<div class="upgrade card">
		<div class="upgrade-head">
			STRANERD <span class="upgrade-head-colored">Plus</span>
		</div>
		<div class="upgrade-info">
			boost your learning & fast track your progress!
		</div>
		<div class="upgrade-text">
			<p>Unlimited Access</p>
			<p>Expert Verified Solutions</p>
			<p>Fast Feedback</p>
			<p>No Ads</p>
			<p>7 Days Free Trial</p>
		</div>
		<div class="upgrade-button">
			<button class="upgrade-button-btn btn">
				Upgrade
			</button>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'UpgradeCard'
})
</script>

<style lang="scss" scoped>
.upgrade {
  background-color: $color-orange;
  padding: 2rem 1rem;
  color: $color-white;
  &-head {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    &-colored {
      color: $color-green;
    }
  }
  &-info {
    color: $color-black;
    font-weight: 600;
    font-size: 0.75rem;
    font-style: italic;
    line-height: 1rem;
  }
  &-text {
    margin: 0.5rem 0;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.2rem;
  }
  &-button {
    &-btn {
      background-color: $color-green;
      color: $color-black;
      padding: 0.5rem 1rem;

      -webkit-box-shadow: -0.5px 0px 0px 2px rgba(0, 0, 0, 0.12);
      -moz-box-shadow: -0.5px 0px 0px 2px rgba(0, 0, 0, 0.12);
      box-shadow: -0.5px 0px 0px 2px rgba(0, 0, 0, 0.12);
    }
  }
}
</style>
