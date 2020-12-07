<template>
	<div class="question question-card card">
		{{ selectedSubject }}
		<div class="question__head">
			<div class="question__head--text">
				Questions
			</div>
			<div class="question__head--filters">
				<div class="question__head--filters-select">
					<AppSelect
						:remote="false"
						:options="['Answered', 'Unanswered']"
						:default-value="'Answered'"
					/>
				</div>
				<div class="question__head--filters-select">
					<AppSelect
						v-model="selectedSubject"
						:remote="false"
						:options="[
							'All Subjects',
							'Mathematics',
							'Chemistry',
							'English',
							'Physics'
						]"
						:default-value="'All Subjects'"
					/>
				</div>
			</div>
		</div>
		<div class="question__body">
			<div v-for="(question, index) in questions" class="">
				<Question :question="question" class="question-card__question" />
			</div>
		</div>
		<div class="question-card__button">
			<button class="question-card__button-btn btn btn-text">
				LOAD MORE
			</button>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { defineComponent } from '@vue/composition-api'
import AppSelect from '../base/AppSelect'
import Question from '../Question'
export default defineComponent({
	name: 'QuestionCard',
	components: { Question, AppSelect },
	data: () => ({
		selectedSubject: ''
	}),
	computed: {
		...mapGetters({
			questions: 'questionStore/questions'
		})
	},
	methods: {
		dothis () {
			console.log('yeah yeah')
		}
	}
})
</script>

<style lang="scss" scoped>
.question-card {
  padding: 2rem 1rem;
  box-shadow: 0px 3px 10px #00000019;
}
.question {
  background-color: $color-white;
  &__head {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding-bottom: 1rem;
    &--text {
      font-size: 2rem;
      line-height: 2.5rem;
    }
    &--filters {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-end;
      &-select {
        margin: 0 0.5rem;
      }
    }
  }
  &-card {
    &__button {
      text-align: center;
      font-size: 1rem;
      padding: 1rem 0;
      border-top: 5px solid $color-border-grey;
      &-btn {
      }
    }
  }
  &-card {
    &__question {
      border-top: 2px solid $color-border-grey;
    }
  }
}
</style>
