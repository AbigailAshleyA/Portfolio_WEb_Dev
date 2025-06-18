// document.getElementById('contact-form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   const status = document.getElementById('form-status');
//   status.textContent = 'Sending...';

//   setTimeout(() => {
//     status.textContent = 'Message sent successfully!';
//     this.reset();
//   }, 1000);
// });
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const status = document.getElementById('form-status');

  const formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };

  status.textContent = 'Sending...';

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.success) {
      status.textContent = 'Message sent!';
      this.reset();
    } else {
      status.textContent = 'Failed to send. Try again.';
    }
  } catch (error) {
    console.error(error);
    status.textContent = 'An error occurred.';
  }
});
