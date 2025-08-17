const feedbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

feedbackForm.addEventListener('input', onForm);

function onForm(evt) {
  const message = evt.target.value;
  console.dir(massege);
}
