<template>
	<div class="sidebar">
		<div class="sidebar-profile">
			<ProfileCard />
		</div>
		<div class="sidebar-challenges">
			<ChallengesCard />
		</div>
		<div class="sidebar-ranking">
			<RankingCard />
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProfileCard from '../card/ProfileCard'
import ChallengesCard from '../card/ChallengesCard'
import RankingCard from '../card/RankingCard'
export default defineComponent({
	name: 'SidebarRight',
	components: { ProfileCard, RankingCard, ChallengesCard }
})
</script>
<style lang="scss" scoped>
.sidebar {
  min-height: 100vh;
  box-shadow: -3px 0px 10px #0000001a;
  &-challenges {
    margin-top: 0.5rem;
  }
  &-ranking {
    margin-bottom: 2rem;
  }
}
</style>
