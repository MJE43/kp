import { withLayout } from '../components/Layout';
import HeroSection from '../components/HeroSection';
import IntroductionSection from '../components/IntroductionSection';
import FeaturedServicesSection from '../components/FeaturedServicesSection';
import CallToActionSection from '../components/CallToActionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import RecentBlogPostsSection from '../components/RecentBlogPostsSection';
import SocialMediaSection from '../components/SocialMediaSection';

function Home() {
  return (
    <>
      <HeroSection phoneNumber="(520) 555-1234" />
      <IntroductionSection />
      <FeaturedServicesSection />
      <CallToActionSection />
      <TestimonialsSection />
      <RecentBlogPostsSection />
      <SocialMediaSection />
    </>
  );
}

export default withLayout(Home);
