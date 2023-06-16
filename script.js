/* Animations */
gsap.from('.form', { duration: 1, delay: 2, ease: 'bounce', x: '-100vw' });
gsap.from('.text', { duration: 1, delay: 1, ease: 'bounce', y: '-100vh' });

/* Get the error messages */
const fError = document.getElementById('f-name__error');
const lError = document.getElementById('l-name__error');
const emailError = document.getElementById('email__error');
const passwordError = document.getElementById('password__error');

/* Get the input values */
const fName = document.getElementById('f-name');
const lName = document.getElementById('l-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const submit = document.getElementById('SubmitBtn');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  const fNameValue = fName.value;
  const lNameValue = lName.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  if (fNameValue === '') {
    fError.style.display = 'block';
  } else {
    fError.style.display = 'none';
  }

  if (lNameValue === '') {
    lError.style.display = 'block';
  } else {
    lError.style.display = 'none';
  }

  if (emailValue === '') {
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }

  if (passwordValue === '') {
    passwordError.style.display = 'block';
  } else {
    passwordError.style.display = 'none';
  }

  
  setTimeout(() => {
    alert("Form Submitted");
    location.reload();
  }, 1000); 
});
