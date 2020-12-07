<template>
  <div class="single-question">
    <div v-if="!$fetchState.pending && !$fetchState.error">
      <NavHeader />
      <div class="single-question__card card">
        <Question :question="question" />

        <div class="single-question__answer">
          <button
            v-if="!question.answered"
            class="single-question__answer-button btn btn-green"
            @click="showAnswerForm"
          >
            Answer
          </button>
          <button v-else class="single-question__answer-button color-green btn btn-text">
            Already Answered
          </button>
        </div>
      </div>
      <div v-if="question.answered" class="question-answer card">
        <div class="question-answer__head">
          Answers
        </div>
          <div class="">
            <Answer :answer="question.answer" />
          </div>
      </div>

      <div  class="other-question card">
        <div class="other-question__head">
          <div class="other-question__head-text">Recent Questions</div>
          <div class="other-question__head-input">
            <AppSelect
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
        <div v-for="(question, index) in questions">
          <div class="other-question__text">
          {{ question.text }}
          </div>
        </div>
        <div class="other-question__bottom">
          <button class="other-question__bottom-btn btn btn-text">
            LOAD MORE
          </button>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { mapGetters } from "vuex";
import NavHeader from "@/components/header/NavHeader";
import AppSelect from "@/components/base/AppSelect";
import Answer from "@/components/Answer";
export default defineComponent({
  name: "SingleQuestionPage",
  components:{ NavHeader, AppSelect, Answer },
  data: () => ({
    question: null,
    answer: null,
    showAnswerForm: false,
  }),

  computed: {
    ...mapGetters({
      questions: "questionStore/questions",
      getQuestion: "questionStore/getQuestionById"
    })
  },
  fetch() {
    const questionId = this.$route.params.questionId;
    this.question = this.getQuestion(questionId);
    this.showAnswerForm = this.question.answered !== null;
  }
});
</script>

<style lang="scss" scoped>
.single-question {
  display: block;
  position: relative;
  background-color: $color-background-grey;
  min-height: 100vh;
  width: 100%;
  &__card {

    // margin: 1rem auto;
    padding: 1rem 2rem;
    margin: 2rem auto;
    max-width: 600px;
    background-color: $color-white;
  }
  &__answer {
    text-align: center;
    font-size: 1rem;
    padding: 1rem 0;
    border-top: 5px solid $color-border-grey;
    padding: 1rem 0;
    &-button {
      font-size: 1.25rem;
      padding: 0.5rem 2rem;


    }
  }
}
.color-green {
  color: $color-green;
}
.other-question {
  margin: 1rem auto;
  padding: 1rem 2rem;
  max-width: 600px;
  background-color: $color-white;
  &-single {
    margin-bottom: 1px solid $color-border-grey;
  }
  &__head {
    display: flex;
    flex-wrap: nowrap;
    padding: 1rem 0;
    &-text {
      font-size: 1.5rem;
      font-weight: 600;
      color: $color-text;
      margin-right: 1rem;
    }
  }
  &__text {
    padding: 0.5rem 0;
    border-top: 1px solid $color-border-grey;
    border-bottom: 1px solid $color-border-grey;
    font-size: 0.75rem;
    line-height: 1rem;
    color: $color-text-dark;
  }
  &__bottom {
    text-align: center;
    font-size: 1rem;
    padding: 1rem 0;
    border-top: 5px solid $color-border-grey;
  }
}
.question-answer {
  margin: 1rem auto;
  padding: 1rem 2rem;
  max-width: 600px;
  background-color: $color-white;
  &__head{
    font-size: 1.5rem;
    font-weight: 600;
    color: $color-text-dark;
  }
}

</style>
