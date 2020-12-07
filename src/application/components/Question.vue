<template>
	<div class="question">
		<div class="question__info">
			<div class="question__right">
				<div class="question__right--author-image">
					<img
						:src="question.author.image"
						alt="question author"
						class="question__right--author-image-img"
					>
				</div>
				<div class="question__right1">
					<div class="question__right--author-name">
						{{ question.author.name }}
					</div>
					<div class="question__right--details">
						<span
							class="question__right--details-subject"
						>{{ question.subject }}
						</span>
						|
						<span class="question__right--details-time">{{
							question.datePosted | moment
						}}</span>
					</div>
				</div>
			</div>
			<div class="question__details">
				<div class="question__details--points">
					<img
						src="/icons/dollar-symbol.svg"
						alt="question points"
						class="question__details--points-img"
					>
					<button class="question__details--points-btn btn btn-outline">
						+ {{ question.points }}
					</button>
				</div>
				<div class="question__details--button">
					<button class="question__details--button-btn btn btn-green">
						Answer
					</button>
				</div>
			</div>
		</div>
		<div class="question__text" @click="goToQuestion(question.id)">
			<p class="question__text-main">
				{{ question.text }}
			</p>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'Question',
	filters: {
		moment (date) {
			return moment(date).fromNow()
		}
	},
	props: {
		question: {
			type: Object,
			required: true
		}
	},
	methods: {
		goToQuestion (questionID) {
			this.$router.push(`/question/${questionID}`)
		}
	}
})
</script>

<style lang="scss" scoped>
.question {
  padding: 1rem 0;
  &__info {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
		padding: 0 1rem;
  }
  &__right {
    display: flex;
    flex-wrap: nowrap;
    &--author {
      &-image {
        margin-right: 1rem;
        &-img {
          width: 2rem;
          height: 2rem;
          border-radius: 12rem;
        }
      }
      &-name {
        color: $color-orange;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 2rem;
      }
    }
    &--details {
      font-size: 0.75rem;
      font-weight: lighter;
    }
  }
  &__details {
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    &--points {
      &-img {
        position: absolute;
        top: 0.1rem;
        left: -0.35rem;
        z-index: 1;
        width: 1.5rem;
        height: 1.5rem;
      }
      &-btn {
        font-size: 0.75rem;
        font-weight: lighter;
        color: $color-black;
        border-color: $color-black;
        background-color: $color-white;
        padding: 0.15rem 0.75rem 0.15rem 1.3rem;
      }
    }
    &--button {
      margin-left: 1rem;
      &-btn {
        font-size: 0.75rem;
        padding: 0.25rem 0.75rem;
      }
    }
  }
  &__text {
    // margin: 1rem 0 0;
    padding: 0 0.5rem;
		font-size: 0;
    font-weight: lighter;
    line-height: 1.5rem;
    white-space: pre-wrap;
		cursor: pointer;
		&-main{
			font-size: 0.8rem;
		}
  }
}
</style>
