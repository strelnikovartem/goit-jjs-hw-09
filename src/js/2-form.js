const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', onForm);

function onForm(evt) {
  const massege = evt.target.value;
  console.dir(massege);
}
