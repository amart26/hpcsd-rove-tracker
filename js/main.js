document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('bathroom-tracker');
  const nameInput = document.getElementById('staffName');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    let nameValue = nameInput.value;
    localStorage.setItem('user-name', nameValue);

    console.log('Saved name:', localStorage.getItem('user-name'));
  });
});