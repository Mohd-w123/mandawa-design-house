import ContactForm from '@/components/Global/ContactPage/ContactForm/ContactForm';
import ContactHero from '@/components/Global/ContactPage/ContactHero/ContactHero';
import ContactMap from '@/components/Global/ContactPage/ContactMap/ContactMap';
import MainLayout from '@/Layouts/MainLayout';
import React from 'react'

const ContactUs = () => {
  return (
<>
<ContactHero/>
<ContactMap/>
<ContactForm/>
</>
  )
}

ContactUs.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default ContactUs
