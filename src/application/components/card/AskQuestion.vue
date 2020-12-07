<template>
	<div class="ask-question">
		<div class="modal">
			<div class="modal-close">
				<button class="modal-close-button" @click="closeShowQuestionModal">
					<img src="/icons/close.svg" alt="" class="modal-close-button-img">
				</button>
			</div>
			<div class="modal__head">
				Ask your question
			</div>
			<div class="modal__editor">
				<QuestionEditor :model="question.text" />
			</div>
			<div class="modal__select">
				<div class="modal__select--subject">
					<AppSelect
						v-model="question.subject"
						:remote="false"
						:options="[
							'Subject',
							'Mathematics',
							'Chemistry',
							'English',
							'Physics'
						]"
						:default-value="'Subject'"
					/>
				</div>
				<div class="modal__select--subject">
					<AppSelect
						v-model="question.points"
						:remote="false"
						:options="[10, 20, 30, 40, 50]"
						:prepend-icon="'icons/dollar-symbol.svg'"
						:default-value="10"
					/>
				</div>
			</div>
			<div class="modal__submit">
				<button
					class="modal__submit--button btn btn-orange"
					@click="submitQuestion"
				>
					Ask Question
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import AppSelect from '../base/AppSelect'
export default defineComponent({
	name: 'AskQuestion',
	components: { AppSelect },
	data: () => ({
		question: {
			text: '',
			subject: '',
			points: 10
		}
	}),
	methods: {
		closeShowQuestionModal () {
			this.$emit('close-modal')
		},
		submitQuestion () {
			console.log('the question => ', this.question)
		}
	}
})
</script>

<style lang="scss" scoped>
.ask-question {
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  position: absolute;
}
.modal {
  position: absolute;
  background-color: $color-white;
  text-align: center;
  width: 100%;
  margin: auto;
  max-width: 700px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  padding: 1rem 2rem;
  border-radius: 10px;
  &__head {
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 2.75rem;
    color: $color-text;
  }
  &__editor {
    margin: 2rem 0;
  }
  &-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    &-button {
      border: none;
      background-color: inherit;
      cursor: pointer;
      &-img {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }
  &__select {
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    &--subject,
    &--points {
      margin: 0 0.5rem;
    }
  }
  &__submit {
    padding-bottom: 1rem;
    &--button {
      padding: 0.75rem 3rem;
      font-weight: 600;
    }
  }
}
</style>
