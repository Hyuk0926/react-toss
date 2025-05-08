import CreditService from './credit-service';
import Description from './description';
import FinanceIntro from './finance-intro';
import FinanceService from './finance-service';
import Hero from './hero';
import HomeService from './home-service';
import InvestService from './invest-service';
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
      <InvestService />
      <FinanceIntro />
      <FinanceService />
    </>
  );
}
