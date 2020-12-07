<template>
	<div class="dashboard">
		<div class="dashboard-left">
			<DashboardMenu />
		</div>
		<div class="dashboard-main">
			<div class="answer">
				<DashboardHeader />
				<div class="answer__card card">
					<div class="answer__card--head">
						<h2>Get your answer today</h2>
					</div>
					<div class="answer__card--button">
						<button
							class="answer__card--button-btn btn btn-orange btn-uppercase"
							@click="toggleAskQuestionModal"
						>
							Ask a question
						</button>
					</div>
				</div>
				<div class="question-card">
					<QuestionCard />
				</div>
			</div>
		</div>
		<div class="dashboard-right">
			<SidebarRight />
		</div>
		<div v-if="showAskQuestionModal" class="">
			<AskQuestion
				@closeModal="closeAskQuestionModal"
			/>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import DashboardMenu from '@/components/menus/DashboardMenu'
import SidebarRight from '@/components/menus/SidebarRight'
import AskQuestion from '@/components/card/AskQuestion'
import DashboardHeader from '@/components/header/DashboardHeader'
export default defineComponent({
	name: 'DashboardIndex',
	components: {
		DashboardHeader,
		DashboardMenu,
		SidebarRight,
		AskQuestion
	},
	data: () => ({
		showAskQuestionModal: false
	}),
	methods: {
		toggleAskQuestionModal () {
			this.showAskQuestionModal = !this.showAskQuestionModal
		},
		closeAskQuestionModal () {
			this.showAskQuestionModal = false
		}
	}
})
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-wrap: nowrap;
  &-left {
    width: 22%;
    animation: moveInLeft 0.2s ease-out 0.05s;
    animation-fill-mode: backwards;
  }
  &-right {
    width: 25%;
    animation: moveInRight 0.3s ease-out 0.05s;
    animation-fill-mode: backwards;
  }
  &-main {
    width: 53%;
    padding: 0 2rem 2rem;
    background-color: #e6e6e6;
    animation: bottomUp 0.3s ease-out 0.05s;
    // animation-fill-mode: backwards;
  }
}
.answer {
  &__card {
    text-align: center;
    padding: 2.5rem 0;
    background-color: $color-white;
    &--head {
      font-weight: 800;
      font-size: 2rem;
      line-height: 3rem;
      color: $color-text;
    }
    &--button {
      margin: 1.5rem 0;
      &-btn {
        padding: 0.75rem 3rem;
      }
    }
  }
}
.question-card{
  margin: 2rem 0;
}
</style>
