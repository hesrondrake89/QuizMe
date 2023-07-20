// quiz.js
let questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
    category: "General Knowledge"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Earth"],
    correctAnswer: "Jupiter",
    category: "General Knowledge"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "N2"],
    correctAnswer: "H2O",
    category: "General Knowledge"
  },
  {
    question: "Which scientist is known for the theory of relativity?",
    options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie"],
    correctAnswer: "Albert Einstein",
    category: "General Knowledge"
  },
  {
    question: "What is the national flower of Japan?",
    options: ["Cherry Blossom", "Rose", "Sunflower", "Tulip"],
    correctAnswer: "Cherry Blossom",
    category: "General Knowledge"
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Mars", "Mercury", "Neptune"],
    correctAnswer: "Mars",
    category: "General Knowledge"
  },
  {
    question: "In which country can you find the ancient pyramids in Giza?",
    options: ["Egypt", "Mexico", "India", "China"],
    correctAnswer: "Egypt",
    category: "General Knowledge"
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
    category: "General Knowledge"
  },
  {
    question: "Which instrument is used to measure earthquakes?",
    options: ["Thermometer", "Seismograph", "Barometer", "Hygrometer"],
    correctAnswer: "Seismograph",
    category: "General Knowledge"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Cu"],
    correctAnswer: "Au",
    category: "General Knowledge"
  },
  {
    question: "Which mountain is the highest in the world?",
    options: ["Mount Kilimanjaro", "Mount McKinley", "Mount Everest", "Mount Fuji"],
    correctAnswer: "Mount Everest",
    category: "General Knowledge"
  },
  {
    question: "Which river is the longest in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    correctAnswer: "Nile River",
    category: "General Knowledge"
  },
  {
    question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: "Venus",
    category: "General Knowledge"
  },
  {
    question: "What is the largest species of shark?",
    options: ["Tiger Shark", "Great White Shark", "Hammerhead Shark", "Whale Shark"],
    correctAnswer: "Whale Shark",
    category: "General Knowledge"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare",
    category: "General Knowledge"
  },
  {
    question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"],
    correctAnswer: "Carbon Dioxide",
    category: "General Knowledge"
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Brain", "Skin"],
    correctAnswer: "Skin",
    category: "General Knowledge"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Yen", "Dollar", "Euro"],
    correctAnswer: "Yen",
    category: "General Knowledge"
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["China", "Japan", "India", "Australia"],
    correctAnswer: "Japan",
    category: "General Knowledge"
  },
  {
    question: "What is the symbol for the chemical element oxygen?",
    options: ["O", "Ox", "Oy", "On"],
    correctAnswer: "O",
    category: "General Knowledge"
  },
  {
    question: "What year was the movie 'Jurassic Park' released?",
    options: ["1990", "1993", "1996", "2001"],
    correctAnswer: "1993",
    category: "Movies"
  },
  {
    question: "Which movie won the Academy Award for Best Picture in 2020?",
    options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
    correctAnswer: "Parasite",
    category: "Movies"
  },
  {
    question: "In the movie 'The Shawshank Redemption', what was the name of the main character?",
    options: ["Andy Dufresne", "Ellis Boyd Redding", "Tommy Williams", "Sam Norton"],
    correctAnswer: "Andy Dufresne",
    category: "Movies"
  },
  {
    question: "Who played the role of Jack Dawson in the movie 'Titanic'?",
    options: ["Tom Hanks", "Leonardo DiCaprio", "Johnny Depp", "Brad Pitt"],
    correctAnswer: "Leonardo DiCaprio",
    category: "Movies"
  },
  {
    question: "Which movie is known for the quote, 'Here's looking at you, kid.'?",
    options: ["Casablanca", "Gone with the Wind", "The Godfather", "The Shawshank Redemption"],
    correctAnswer: "Casablanca",
    category: "Movies"
  },
  {
    question: "In the movie 'The Matrix', what color pill does Neo take?",
    options: ["Blue", "Red", "Green", "Yellow"],
    correctAnswer: "Red",
    category: "Movies"
  },
  {
    question: "Who directed the movie 'Pulp Fiction'?",
    options: ["Steven Spielberg", "Quentin Tarantino", "Martin Scorsese", "Christopher Nolan"],
    correctAnswer: "Quentin Tarantino",
    category: "Movies"
  },
  {
    question: "Which actress won an Oscar for her role in 'La La Land'?",
    options: ["Emma Watson", "Emma Thompson", "Emma Roberts", "Emma Stone"],
    correctAnswer: "Emma Stone",
    category: "Movies"
  },
  {
    question: "In the movie 'Forrest Gump', what does Forrest's mother say life is like?",
    options: ["A box of chocolates", "A box of roses", "A box of surprises", "A box of dreams"],
    correctAnswer: "A box of chocolates",
    category: "Movies"
  },
  {
    question: "Who played the role of Captain Jack Sparrow in the 'Pirates of the Caribbean' series?",
    options: ["Johnny Depp", "Brad Pitt", "Tom Cruise", "Will Smith"],
    correctAnswer: "Johnny Depp",
    category: "Movies"
  },
  {
    question: "Which movie features a man stuck on Mars and his struggle to survive?",
    options: ["Interstellar", "Gravity", "The Martian", "Apollo 13"],
    correctAnswer: "The Martian",
    category: "Movies"
  },
  {
    question: "Which movie is about a group of thieves trying to rob three Las Vegas casinos simultaneously?",
    options: ["Oceans Eleven", "Heat", "The Italian Job", "Inside Man"],
    correctAnswer: "Oceans Eleven",
    category: "Movies"
  },
  {
    question: "Who played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?",
    options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
    correctAnswer: "Robert Downey Jr.",
    category: "Movies"
  },
  {
    question: "Which movie is about a teacher who transforms the lives of his students through poetry?",
    options: ["Dead Poets Society", "Freedom Writers", "Stand and Deliver", "Good Will Hunting"],
    correctAnswer: "Dead Poets Society",
    category: "Movies"
  },
  {
    question: "Who played the role of Ellen Ripley in the movie 'Aliens'?",
    options: ["Sigourney Weaver", "Meryl Streep", "Jodie Foster", "Michelle Pfeiffer"],
    correctAnswer: "Sigourney Weaver",
    category: "Movies"
  },
  {
    question: "In the movie 'The Lion King', what type of animal is Timon?",
    options: ["Meerkat", "Warthog", "Lion", "Pumbaa"],
    correctAnswer: "Meerkat",
    category: "Movies"
  },
  {
    question: "Which movie tells the story of a clownfish named Marlin searching for his son Nemo?",
    options: ["Finding Nemo", "Toy Story", "Monsters, Inc.", "Cars"],
    correctAnswer: "Finding Nemo",
    category: "Movies"
  },
  {
    question: "Who won the Best Actor Oscar for his role in 'The Revenant'?",
    options: ["Johnny Depp", "Brad Pitt", "Leonardo DiCaprio", "Tom Hanks"],
    correctAnswer: "Leonardo DiCaprio",
    category: "Movies"
  },
  {
    question: "Which movie features a young girl who is accidentally transported to a magical world called Wonderland?",
    options: ["Alice in Wonderland", "Cinderella", "Beauty and the Beast", "Sleeping Beauty"],
    correctAnswer: "Alice in Wonderland",
    category: "Movies"
  },
  {
    question: "Who played the role of John McClane in the 'Die Hard' series?",
    options: ["Arnold Schwarzenegger", "Bruce Willis", "Sylvester Stallone", "Mel Gibson"],
    correctAnswer: "Bruce Willis",
    category: "Movies"
  },
  {
    question: "Which Nigerian artist is known as the 'African Giant'?",
    options: ["Wizkid", "Davido", "Burna Boy", "Tiwa Savage"],
    correctAnswer: "Burna Boy",
    category: "Music"
  },
  {
    question: "Who won the 'Best International Act' at the 2019 BET Awards?",
    options: ["Burna Boy", "Stonebwoy", "Sarkodie", "Shatta Wale"],
    correctAnswer: "Burna Boy",
    category: "Music"
  },
  {
    question: "Which American singer-songwriter released the album 'Lemonade'?",
    options: ["Beyoncé", "Rihanna", "Adele", "Taylor Swift"],
    correctAnswer: "Beyoncé",
    category: "Music"
  },
  {
    question: "Which Ghanaian musician is popularly known as the 'King of African Dancehall'?",
    options: ["Shatta Wale", "Stonebwoy", "Sarkodie", "Samini"],
    correctAnswer: "Shatta Wale",
    category: "Music"
  },
  {
    question: "In which city did the famous Woodstock Music & Art Fair take place in 1969?",
    options: ["New York City", "San Francisco", "Los Angeles", "Chicago"],
    correctAnswer: "New York City",
    category: "Music"
  },
  {
    question: "Which Nigerian artist released the hit song 'Fem' in 2020?",
    options: ["Wizkid", "Davido", "Burna Boy", "Tekno"],
    correctAnswer: "Davido",
    category: "Music"
  },
  {
    question: "Who is often referred to as the 'Queen of Pop'?",
    options: ["Madonna", "Beyoncé", "Britney Spears", "Rihanna"],
    correctAnswer: "Madonna",
    category: "Music"
  },
  {
    question: "Which Ghanaian musician won the 'Best International Act' at the 2012 BET Awards?",
    options: ["Shatta Wale", "Stonebwoy", "Sarkodie", "R2Bees"],
    correctAnswer: "Sarkodie",
    category: "Music"
  },
  {
    question: "Which American rapper released the debut album 'Good Kid, M.A.A.D City'?",
    options: ["Kendrick Lamar", "Drake", "J. Cole", "Travis Scott"],
    correctAnswer: "Kendrick Lamar",
    category: "Music"
  },
  {
    question: "Which Nigerian artist collaborated with Beyoncé on the song 'Brown Skin Girl'?",
    options: ["Burna Boy", "Wizkid", "Davido", "Tiwa Savage"],
    correctAnswer: "Wizkid",
    category: "Music"
  },
  {
    question: "Which American singer is known for hits like 'Hello' and 'Rolling in the Deep'?",
    options: ["Adele", "Taylor Swift", "Lady Gaga", "Rihanna"],
    correctAnswer: "Adele",
    category: "Music"
  },
  {
    question: "Which Ghanaian musician is also referred to as the '1Gad'?",
    options: ["Shatta Wale", "Stonebwoy", "Sarkodie", "Samini"],
    correctAnswer: "Stonebwoy",
    category: "Music"
  },
  {
    question: "Who is known for the single 'Formation' and the Super Bowl halftime show in 2016?",
    options: ["Rihanna", "Beyoncé", "Ariana Grande", "Lady Gaga"],
    correctAnswer: "Beyoncé",
    category: "Music"
  },
  {
    question: "Which Nigerian artist released the song 'Ye'?",
    options: ["Wizkid", "Davido", "Burna Boy", "Tekno"],
    correctAnswer: "Burna Boy",
    category: "Music"
  },
  {
    question: "Which American singer-songwriter released the album '1989'?",
    options: ["Beyoncé", "Rihanna", "Adele", "Taylor Swift"],
    correctAnswer: "Taylor Swift",
    category: "Music"
  },
  {
    question: "Which Ghanaian musician is known for hits like 'My Own' and 'Nominate'?",
    options: ["Shatta Wale", "Stonebwoy", "Sarkodie", "Kelvyn Boy"],
    correctAnswer: "Kelvyn Boy",
    category: "Music"
  },
  {
    question: "Which American rapper is known for albums like 'Views' and 'Take Care'?",
    options: ["Kendrick Lamar", "Drake", "J. Cole", "Travis Scott"],
    correctAnswer: "Drake",
    category: "Music"
  },
  {
    question: "Which Nigerian artist collaborated with Drake on the song 'One Dance'?",
    options: ["Wizkid", "Davido", "Burna Boy", "Tekno"],
    correctAnswer: "Wizkid",
    category: "Music"
  },
  {
    question: "Which American singer is known for hits like 'Umbrella' and 'Diamonds'?",
    options: ["Adele", "Taylor Swift", "Lady Gaga", "Rihanna"],
    correctAnswer: "Rihanna",
    category: "Music"
  },
  {
    question: "In which sport would you perform a slam dunk?",
    options: ["Basketball", "Soccer", "Tennis", "Golf"],
    correctAnswer: "Basketball",
    category: "Sports"
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["USA", "China", "Brazil", "Russia"],
    correctAnswer: "Brazil",
    category: "Sports"
  },
  {
    question: "Which sport is also known as football?",
    options: ["Rugby", "American Football", "Soccer", "Cricket"],
    correctAnswer: "Soccer",
    category: "Sports"
  },
  {
    question: "Which athlete is known as the 'Fastest Man on Earth'?",
    options: ["Michael Phelps", "Usain Bolt", "Serena Williams", "Lionel Messi"],
    correctAnswer: "Usain Bolt",
    category: "Sports"
  },
  {
    question: "In which sport would you perform a double fault?",
    options: ["Tennis", "Golf", "Badminton", "Table Tennis"],
    correctAnswer: "Tennis",
    category: "Sports"
  },
  {
    question: "Which team won the 2019 FIFA Women's World Cup?",
    options: ["Germany", "USA", "France", "Sweden"],
    correctAnswer: "USA",
    category: "Sports"
  },
  {
    question: "Which sport has positions called pitcher, catcher, and shortstop?",
    options: ["Baseball", "Cricket", "Ice Hockey", "Volleyball"],
    correctAnswer: "Baseball",
    category: "Sports"
  },
  {
    question: "Which country won the most gold medals in the 2020 Tokyo Olympics?",
    options: ["USA", "China", "Japan", "Russia"],
    correctAnswer: "USA",
    category: "Sports"
  },
  {
    question: "Which sport is known as 'The Gentleman's Game'?",
    options: ["Rugby", "Cricket", "Tennis", "Golf"],
    correctAnswer: "Cricket",
    category: "Sports"
  },
  {
    question: "Which athlete has won the most Grand Slam singles titles in tennis?",
    options: ["Roger Federer", "Rafael Nadal", "Serena Williams", "Novak Djokovic"],
    correctAnswer: "Serena Williams",
    category: "Sports"
  },
  {
    question: "In which sport would you perform a birdie or eagle?",
    options: ["Golf", "Skiing", "Snowboarding", "Figure Skating"],
    correctAnswer: "Golf",
    category: "Sports"
  },
  {
    question: "Which team won the Super Bowl in the 2020 NFL season?",
    options: ["Kansas City Chiefs", "San Francisco 49ers", "Tampa Bay Buccaneers", "New England Patriots"],
    correctAnswer: "Tampa Bay Buccaneers",
    category: "Sports"
  },
  {
    question: "Which sport has a playing area called the 'pitch'?",
    options: ["Hockey", "Rugby", "Baseball", "Soccer"],
    correctAnswer: "Soccer",
    category: "Sports"
  },
  {
    question: "Which country hosted the 2012 Summer Olympics?",
    options: ["USA", "China", "Brazil", "United Kingdom"],
    correctAnswer: "United Kingdom",
    category: "Sports"
  },
  {
    question: "In which sport would you perform a slam dunk?",
    options: ["Basketball", "Soccer", "Tennis", "Golf"],
    correctAnswer: "Basketball",
    category: "Sports"
  },
  {
    question: "Which athlete won the most Olympic gold medals in history?",
    options: ["Michael Phelps", "Usain Bolt", "Carl Lewis", "Jesse Owens"],
    correctAnswer: "Michael Phelps",
    category: "Sports"
  },
  {
    question: "Which sport is known as the 'King of Sports'?",
    options: ["Soccer", "Cricket", "Tennis", "Basketball"],
    correctAnswer: "Soccer",
    category: "Sports"
  },
  {
    question: "In which sport would you perform a 'slalom'?",
    options: ["Skiing", "Snowboarding", "Figure Skating", "Surfing"],
    correctAnswer: "Skiing",
    category: "Sports"
  },
  {
    question: "Which country won the 2019 Rugby World Cup?",
    options: ["New Zealand", "South Africa", "England", "Australia"],
    correctAnswer: "South Africa",
    category: "Sports"
  },
  {
    question: "In which sport would you perform a 'perfect 10'?",
    options: ["Gymnastics", "Swimming", "Diving", "Boxing"],
    correctAnswer: "Gymnastics",
    category: "Sports"
  }
];


const quizContainer = document.getElementById("quiz");
const categoryContainer = document.getElementById("categories");
const timerContainer = document.getElementById("timer");
let currentQuestion = 0;
let score = 0;
let timer = null;
let currentCategory = "";

// Add a function to start the quiz based on the selected category
function startQuiz(category) {
  // Filter questions based on the selected category
  const categoryQuestions = questions.filter((question) => question.category === category);
  
  // Shuffle the questions using Fisher-Yates algorithm
  const shuffledQuestions = shuffleArray(categoryQuestions);

  // Reset the quiz and display the first question
  currentQuestion = 0;
  score = 0;
  currentCategory = category;
  displayQuestion(shuffledQuestions[currentQuestion]);

  // Hide the category container by adding the "hidden" class
  categoryContainer.classList.add("hidden");
  // Show the quiz container by removing the "hidden" class
  quizContainer.classList.remove("hidden");

  // Update the category name in the HTML
  const categoryHeading = document.querySelector("h1");
  categoryHeading.textContent = category;

  // Start the timer
  startTimer();
}

function startTimer() {
  const duration = 20 * 60; // 20 minutes in seconds
  let remainingTime = duration;

  timer = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    timerContainer.textContent = `Time Remaining: ${minutes}:${seconds.toString().padStart(2, "0")}`;

    if (remainingTime <= 0) {
      clearInterval(timer);
      showResult();
    }

    remainingTime--;
  }, 1000);
}

function displayQuestion(questionData) {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = `<p>${questionData.question}</p>`;

  // Rest of the code for displaying question options...
  const optionsContainer = document.createElement("div");
  questionData.options.forEach((option) => {
    const optionElement = document.createElement("label");
    optionElement.innerHTML = `
      <input type="radio" name="answer" value="${option}">
      ${option}
    `;
    optionsContainer.appendChild(optionElement);
  });
  questionElement.appendChild(optionsContainer);

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  questionElement.appendChild(submitButton);

  submitButton.addEventListener("click", () => {
    checkAnswer(questionData);
  });

  // Remove the "hidden" class to show the question container
  questionElement.classList.remove("hidden");

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionElement);
}



function checkAnswer(questionData) {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (!selectedOption) {
    return; // If no option is selected, do nothing.
  }

  const userAnswer = selectedOption.value;
  const correctAnswer = questionData.correctAnswer;

  if (userAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;

  const categoryQuestions = questions.filter((question) => question.category === currentCategory);

  if (currentQuestion < categoryQuestions.length) {
    displayQuestion(categoryQuestions[currentQuestion]);
  } else {
    clearInterval(timer); // Stop the timer
    showResult();
  }
}


function showResult() {
  quizContainer.innerHTML = `<p>You've completed the ${currentCategory} quiz!</p><p>Your score: ${score} out of ${currentQuestion}</p>`;
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Event listener for the category buttons
const categoryButtons = document.querySelectorAll(".categoryBtn");
categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const selectedCategory = event.target.dataset.category;
    startQuiz(selectedCategory);
  });
});