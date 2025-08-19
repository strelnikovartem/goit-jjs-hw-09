const feedbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

feedbackForm.addEventListener('input', onFeedbackFormInput);

function onFeedbackFormInput(evt) {
  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;

  console.dir(email);
}

localStorage.setItem(STORAGE_KEY, message);
