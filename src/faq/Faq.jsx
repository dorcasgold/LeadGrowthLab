import Accordion from './Accordion'

const Faq = () => {
  return (
    <div className='w-full p-4 text-white flex flex-col gap-5'>
      <Accordion title="How much does it cost?" content='Our pricing plans vary based on your business needs. Please visit our pricing page for more details.' />
      <Accordion title="What payment methods do you accept?" content='We accept major credit cards, including Visa, Mastercard, and American Express.' />
      <Accordion title="What are your subscription models?" content='We offer monthly and annual subscription options, allowing you to choose the plan that best fits your needs.' />
      <Accordion title="What is your refund policy?" content='We have a 30-day money-back guarantee. If you’re not satisfied with our product, contact our support team for a refund.' />
      <Accordion title="How can I contact you?" content='You can reach out to our support team through email or by using the contact form on our website.' />
    </div>
  )
}

export default Faq