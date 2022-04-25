const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
]

explorers.forEach((explorer) => {
  console.log(`name: ${explorer.name}`);
  console.log(`stacks:`);
  explorer.stack.forEach((stack) => {
    console.log(stack);
  })
})

const explorersStackJs = explorers.filter((explorer) => explorer.stack.includes('js'))
//console.log(explorersStackJs);

const CDMXExplorers = explorers.find((explorer) => explorer.city == "CDMX")
//console.log(CDMXExplorers);

const exercisesCompleted = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(exercisesCompleted);

const some = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished)
console.log(some);

const every = explorers.every((explorer) => explorer.missions.onboarding.isFinished)
console.log(every);

