const emailjs = require('emailjs-com')

const submitForm = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_mfz0aqc', 'template_lkkto0p', 'contact-form', 'user_8kKA2rSFilIqUQtJointB')
            .then(result => alert('Your message has been sent. I will be in contact with you soon.Thank you!'))
            .catch(err => alert('Oops! Please try again.'))

}

document.querySelector('.submitButton').addEventListener('click', submitForm)