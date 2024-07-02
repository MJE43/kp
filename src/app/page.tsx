import { withLayout } from '../components/Layout';
import HeroSection from '../components/HeroSection';
import IntroductionSection from '../components/IntroductionSection';
import FeaturedServicesSection from '../components/FeaturedServicesSection';
import CallToActionSection from '../components/CallToActionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import RecentBlogPostsSection from '../components/RecentBlogPostsSection';
import SocialMediaSection from '../components/SocialMediaSection';
import Meta from '../components/Meta';

function Home() {
  return (
    <>
      <Meta 
        title="Kyle Price Power and Electrical Services" 
        description="Your Friendly Neighborhood Electrician in Tucson, Arizona"
      />
      <HeroSection phoneNumber="+15205551234" />
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
