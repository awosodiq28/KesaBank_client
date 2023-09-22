import Hero from '@/components/Hero';
import About from '@/components/About';
import DepositCard from '@/components/DepositCard';
import Services from '@/components/Services';
import Banner from '@/components/Banner';
import LoanCard from '@/components/LoanCard';
import ContactForm from '@/components/ContactForm';
import Spinner from '@/components/Spinner';

export default async function Home() {
  return (
    <>
      <Hero />
      <About />
      <DepositCard />
      <LoanCard />
      <Banner />
      <Services />
      <ContactForm />
      <Spinner />
      <h1>We served over 500+ Customers</h1>
      <div className='line'></div>
    </>
  );
}
