function calculateScore() {
  
   let score = 0;

   const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

   questions.forEach(questionName => {
       const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);

       if (selectedOption) {
           score += parseInt(selectedOption.value);
       }
   });

   
   displayResults(score);
}

function displayResults(score) {
   const resultContainer = document.getElementById('result-container');
   const resultText = document.getElementById('result-text');

   if (score <= 10) {
       resultText.textContent = "Your mental health seems to be in a good state. However, if you ever need support, don't hesitate to reach out.";
   } else if (score <= 20) {
       resultText.textContent = "You're experiencing some stress. Consider talking to friends, family, or seeking professional help.";
   } else if (score <= 30) {
       resultText.textContent = "It seems like you're under significant stress. Please consider reaching out to a mental health professional for support.";
   } else if (score <= 40) {
       resultText.textContent = "Your mental health needs attention. It's recommended to seek professional help as soon as possible.";
   } else {
       resultText.textContent = "Your mental health is a priority. It's crucial to seek professional help for a thorough evaluation and support.";
   }

   
   resultContainer.classList.remove('hidden');
}
