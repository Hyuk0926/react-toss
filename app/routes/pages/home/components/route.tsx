import Description from './description';
import Hero from './hero';
import HomeService from './home-service';
import TransformService from './transform-service';

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <HomeService />
      <TransformService />
    </>
  );
}
