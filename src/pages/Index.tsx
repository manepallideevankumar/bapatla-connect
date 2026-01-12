import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import SearchSection from '@/components/SearchSection';
import Dashboard from '@/components/Dashboard';
import Representatives from '@/components/Representatives';
import BatchList from '@/components/BatchList';
import OfficeStaffDetails from '@/components/OfficeStaffDetails';
import Gallery from '@/components/Gallery';
import EventsAnnouncements from '@/components/EventsAnnouncements';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Navigation />
      <main className="flex-1">
        <HeroSlider />
        <SearchSection />
        <Dashboard />
        <Representatives />
        <BatchList />
        <OfficeStaffDetails />
        <Gallery />
        <EventsAnnouncements />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
