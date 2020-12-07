<template>
	<div class="answer">
		<div class="q-answer">
			<div class="q-answer__head">
				<div class="q-answer__head--author">
					<img
						:src="answer.author.image"
						alt="answer author image"
						class="q-answer__head--author-img"
					>
					<span class="q-answer__head--author-name">{{
						answer.author.name
					}}</span>
				</div>
				<div class="q-answer__head--rating">
					<StarRating
						class=" px-2"
						:rating="answer.rating"
						:star-style="answerReviewStyle"
					/>
				</div>
			</div>
			<div class="q-answer__text">
				<p class="q-answer__text-main">
					{{ answer.text }}
				</p>
			</div>
		</div>
		<div class="answer-comment">
			<div v-for="comment in answer.comments" :key="comment.text" class="">
				<p class="answer-comment__item">
					<img :src="comment.author.image" alt="comment author" class="answer-comment__item-img">
					<span class="answer-comment__item-text">{{ comment.text }}</span>
				</p>
			</div>
		</div>
		<div class="comment-field">
			<form class="form" @submit.prevent="submitComment(answer)">
				<div class="form__group">
					<div class="append__btn">
						<input type="text" placeholder="Add your comment..." class="form__input append__input">
						<div
							class="append__btn-icon"
						>
							<button type="submit" class="comment-btn btn btn-text" @click="submitComment(answer)">
								<img
									src="/icons/comment.svg"
									alt=""
									class="append__btn-icon-img"
								>
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	name: 'Answer',
	props: {
		answer: {
			type: Object,
			required: true
		}
	},
	data: () => ({
		answerReviewStyle: {
			styleStarWidth: 32,
			styleStarHeight: 32,
			styleEmptyStarColor: '#FFC107',
			styleFullStarColor: '#CCCCCC'
		}
	}),
	methods: {
		submitComment (answer) {
			console.log(answer)
		}
	}
})
</script>

<style lang="scss" scoped>
.q-answer {
  border: 3.5px solid $color-border-grey;
  margin: 2rem 0 0;
  border-radius: 1.5rem;
  &__head {
    display: flex;
    flex-wrap: nowrap;
    padding: 0.5rem 1rem;
    justify-content: space-between;

    &--author {
      &-img {
        width: 2rem;
        height: 2rem;
        border-radius: 12rem;
        padding-right: 1rem;
      }
      &-name {
        color: $color-orange;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 2rem;
      }
    }
  }
  &__text {
    padding: 0.5rem 1rem;
    border-top: 2px solid $color-border-grey;
    font-size: 0;
    white-space: pre-wrap;
    font-weight: lighter;
    line-height: 1rem;
    &-main {
      font-size: 0.8rem;
    }
  }
}
.answer-comment{
  padding-top: 1rem;
  white-space: pre-wrap;
  font-weight: lighter;
  line-height: 1rem;
  font-size: 0.8rem;
  &__item {
    padding: 0.25rem 1rem;
    &-img {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
    &-text {

    }
  }
}
.comment {
  &-field{
    margin: 1rem 0;
  }
  &-btn {
    height: 100%;
    width: 4rem;
    background-color: $color-text-light;
    text-align: center;
    padding: 0.25rem 0 0;
    display: inline-block;
  }
}
.append__btn-icon{
  background-color: transparent;
  text-align: center;
  &-img{
    height: 1.5rem;
    width: auto;
  }
}
</style>
