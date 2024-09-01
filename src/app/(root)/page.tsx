import BannerSection from "@/components/home/banner";
import ExploreSection from "@/components/home/explore";
import FooterSection from "@/components/home/footer";
import HeroSection from "@/components/home/hero";
import PopularPropertySection from "@/components/home/popular";
import RecentPropertySection from "@/components/home/recent";

export default function Home() {
  return (
    <div className="absolute left-0 top-0 h-full w-full">
      <HeroSection />
      <PopularPropertySection />
      <RecentPropertySection />
      <ExploreSection />
      <BannerSection />
      <FooterSection />
    </div>
  );
}
