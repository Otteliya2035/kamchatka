import React, { useState } from 'react';
import '../../../components/Main/Contact/Contact.css'
/*import Bear from "../../../images/Bear.png"*/


function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [application, setApplication] = useState('');
  const [consent, setConsent] = useState(false);
  /*const [formData, setFormData] = useState({
    name: '',
    email: '',
    // ... другие поля формы
  });*/

  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };


  const handleApplicationChange = (e) => {
    setApplication(e.target.value);
  };
  const handleConsentChange = () => {
    setConsent(!consent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  логика для обработки отправки формы
    validateName();
    validateEmail();
    validatePhone();
    validateApplication();
    if (Object.keys(errors).length === 0) {
      //  логика для отправки данных
    } else {
      console.log('Форма содержит ошибки. Пожалуйста, исправьте их.');
    }
  };
  const validateName = (name) => {
  if (!name.trim()) {
    setErrors({ ...errors, name: 'Пожалуйста, введите свое имя' });
  } else {
    setErrors({ ...errors, name: '' });
  }
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.trim()) {
    setErrors({ ...errors, email: 'Пожалуйста, введите адрес электронной почты' });
  } else if (!emailRegex.test(email)) {
    setErrors({ ...errors, email: 'Пожалуйста, введите корректный адрес электронной почты' });
  } else {
    setErrors({ ...errors, email: '' });
  }
};
const validatePhone = () => {
  const phoneRegex = /^\+?[0-9]*$/;

  if (!phone.trim()) {
    setErrors({ ...errors, phone: 'Пожалуйста, введите номер телефона' });
  } else if (!phoneRegex.test(phone)) {
    setErrors({ ...errors, phone: 'Пожалуйста, введите корректный номер телефона' });
  } else {
    setErrors({ ...errors, phone: '' });
  }
};

const validateApplication = () => {
  if (!application.trim()) {
    setErrors({ ...errors, application: 'Пожалуйста, введите текст заявки' });
  } else {
    setErrors({ ...errors, application: '' });
  }
};

  return (
    <section className="contact__section" id="contact">
      <div className="contact__form">
        <h2 className='contact__title'>Есть вопросы? Задавайте!</h2>
        <form onSubmit={handleSubmit} className='contact__container'>
          <div className="input__group">
            <label htmlFor="name">Введите свое имя</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              onBlur={() => validateName(name)}
  />
  {errors.name && <p className="error__message">{errors.name}</p>}
</div>
          <div className="input__group">
            <label htmlFor="phone">Введите телефон</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={validatePhone}
              />
              {errors.phone && <p className="error__message">{errors.phone}</p>}
          </div>
          <div className="input__group">
            <label htmlFor="email">Введите E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              />
              {errors.email && <p className="error__message">{errors.email}</p>}
            </div>
          <div className="input__group">
  <label htmlFor="application">Заявка</label>
  <textarea
    id="application"
    value={application}
    onChange={handleApplicationChange}
    onBlur={validateApplication}
    />
    {errors.application && <p className="error__message">{errors.application}</p>}
  </div>
          <div className="input__group__group">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={handleConsentChange}
            />
            <label htmlFor="consent" className='contact__checkbox'>Я даю согласие на обработку моих данных</label>
          </div>

        </form>
        <div className="button-container_form">
      <button type="submit" className='contact__button_form'>Отправить заявку</button>
    </div>
      </div>
      <div className="contact__image">
    <div className="button-container">
      <button type="submit" className='contact__button'>Отправить заявку</button>
    </div>
  </div>
    </section>
  );
}
export default ContactForm;