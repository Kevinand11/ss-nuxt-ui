import moment from "moment";
export const namespaced = true;

export const state = function() {
  return {
    questions: [
      {
        id: "12345",
        author: {
          name: "Timmy O.S",
          image: "/images/user_profile.png"
        },
        subject: "Physics",
        datePosted: moment()
          .subtract(30, "m")
          .toDate(),
        points: 15,
        text:
          "From the top of a building with a height of 16m, a ball is thrown at an angle of 30 degree to the horizontal plane at a speed of 21 m/s. Calculate the total time the ball is in the air?"
      },
      {
        id: "12346",
        author: {
          name: "Timmy O.S",
          image: "/images/user_profile.png"
        },
        subject: "Physics",
        datePosted: moment()
          .subtract(1, "d")
          .toDate(),
        points: 15,
        text: `From the top of a building with a height of 16m, a ball is thrown at an
      angle of 30 degree to the horizontal plane at a speed of 21 m/s. Calculate
      the total time the ball is in the air?`
      },
      {
        id: "12347",
        author: {
          name: "Timmy O.S",
          image: "/images/user_profile.png"
        },
        subject: "Physics",
        datePosted: moment()
          .subtract(2, "h")
          .toDate(),
        points: 15,
        text:
          "From the top of a building with a height of 16m, a ball is thrown at an angle of 30 degree to the horizontal plane at a speed of 21 m/s. Calculate the total time the ball is in the air?",
        answered: true,
        answer: {
          author: {
            name: "Timmy O. S.",
            image: "/images/user_profile.png"
          },
          rating: 3,
          text: `I’m just kiddin too\ntired to solve it\naiit, bye...`,
          comments: [
            {
              author: {
                name: 'Kunle O. S.',
                image: "/images/user_profile.png"
              },
              text: "This na the so called comment lol"
            },
            {
              author: {
                name: 'Adeyinka E. A.',
                image: "/images/user_profile.png"
              },
              text: "Wahala be like bicycle"
            },
            {
              author: {
                name: 'Shile P. T',
                image: "/images/user_profile.png"
              },
              text:
                "Make I tell you wetin happen for abule, From the top of a building with a height of 16m, a ball is thrown at an angle of 30"
            }
          ]
        }
      }
    ],
    question: {
      id: 12348,
      author: {
        name: "Timmy O.S",
        image: "/images/user_profile.png"
      },
      subject: "Physics",
      datePosted: moment()
        .subtract(2, "h")
        .toDate(),
      points: 15,
      text: `From the top of a building with a height of 16m, a ball is thrown at an
      angle of 30 degree to the horizontal plane at a speed of 21 m/s. Calculate
      the total time the ball is in the air?`
    }
  };
};

export const getters = {
  questions(state) {
    return state.questions;
  },
  getQuestionById: state => id =>
    state.questions.find(question => question.id === id)
};
