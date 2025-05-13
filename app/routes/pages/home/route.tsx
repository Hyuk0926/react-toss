import { useRef } from 'react';

import BusinessCall from './components/business-call';
import Business from './components/business-service';
import CreditService from './components/credit-service';
import Description from './components/description';
import FinanceIntro from './components/finance-intro';
import FinanceService from './components/finance-service';
import Hero from './components/hero';
import HomeService from './components/home-service';
import InvestService from './components/invest-service';
import LoanService from './components/loan-service';
import PaymentService from './components/payment-service';
import TransferService from './components/transform-service';

export default function Home() {
  const ref = useRef(null);

  return (
    <div>
      <Hero />
      <Description />
      <HomeService />
      <TransferService />
      <LoanService />
      <CreditService />
      <div ref={ref}>
        <InvestService />
        <FinanceIntro />
      </div>
      <FinanceService />
      <PaymentService />
      <Business />
      <BusinessCall />
    </div>
  );
}
