const feedbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

feedbackForm.addEventListener('input', onFeedbackFormInput);

function onFeedbackFormInput(evt) {
  const message = evt.currentTarget.elements.email.value;
  console.dir(message);
}
