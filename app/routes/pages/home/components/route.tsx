import CreditService from './credit-service';
import Description from './description';
import Hero from './hero';
import HomeService from './home-service';
import LoanService from './loan-service';
import TransformService from './transform-service';

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <HomeService />
      <TransformService />
      <LoanService />
      <CreditService />
    </>
  );
}
