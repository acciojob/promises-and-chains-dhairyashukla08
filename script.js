const form = document.getElementById('ageForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('btn');

function checkEligibility(age, name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const ageValue = parseInt(ageInput.value, 10);

  if (nameValue === '' || isNaN(ageValue) || ageValue === null || ageValue < 0) {
    alert("Please enter valid details.");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = 'Processing...';

  checkEligibility(ageValue, nameValue)
    .then((successMessage) => {
      alert(successMessage);
    })
    .catch((errorMessage) => {
      alert(errorMessage);
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = 'Check Eligibility';
    });
});