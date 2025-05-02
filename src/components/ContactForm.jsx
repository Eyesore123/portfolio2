import React from 'react'
import '../styles/styles.css'
import { useTranslation } from 'react-i18next';

export default function ContactForm() {

    const { t } = useTranslation();

    // Handle form submission

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://fly.givenurlsomething.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        });
        const data = await response.json();
        document.getElementById('status-message').textContent = data.message;
    }

  return (
    <div>
    <h2 className='gradienttext flex flex-row justify-center items-center text-center font-bold !mt-20'>{t("contact.header2")}</h2>
      <form id='contact-form' onSubmit={handleSubmit} className='flex flex-col gap-10 md:gap-20 !mt-20'>
        <input type='text' name='name' placeholder={t("contact.name")} className='input-field' required />
        <input type="email" name='email' placeholder={t("contact.email")} className='input-field' required />
        <textarea name='message' placeholder={t("contact.message")} className='input-field' required></textarea>
        <button type='submit' className='submitbutton btn btn-primary !mt-6'>{t("contact.button")}</button>
        </form>
        <p id="status-message"></p>
    </div>
  )
}
