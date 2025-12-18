import HomeHero from "./components/HomeHero";
import HomeOffers from "./components/HomeOffers";
import FeaturedFoods from "./components/FeaturedFoods";
import FeaturedRestaurants from "./components/FeaturedRestaurants";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeOffers />
      <FeaturedFoods />
      <FeaturedRestaurants />
    </>
  );
}
