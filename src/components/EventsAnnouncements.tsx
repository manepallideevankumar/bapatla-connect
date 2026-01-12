import { ArrowRight, Calendar, Cake, Newspaper, GraduationCap } from 'lucide-react';

const upcomingEvents = [
  { date: 'Jan 26, 2026', title: 'Republic Day Celebration', type: 'National' },
  { date: 'Feb 14, 2026', title: 'Annual Alumni Meet 2026', type: 'Alumni' },
  { date: 'Mar 8, 2026', title: 'International Women\'s Day', type: 'Special' },
  { date: 'Apr 15, 2026', title: 'Spring Harvest Festival', type: 'College' },
];

const birthdayGreetings = [
  'Happy Birthday to Dr. K. Ramachandra Rao (Batch 1952)',
  'Wishing Sri. P. Venkata Reddy a wonderful birthday!',
  'Birthday wishes to Dr. M. Suresh Kumar (Batch 1965)',
];

const newsItems = [
  'BAC Alumni Association receives Excellence Award 2025',
  'New Research Center inaugurated by Hon. Minister',
  'Alumni donation fund reaches ₹50 Lakhs milestone',
];

const EventsAnnouncements = () => {
  return (
    <section className="py-12 bg-section-alt">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Events & Announcements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Upcoming Events */}
          <div className="card-elevated">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-serif font-semibold text-primary">Upcoming Events</h3>
            </div>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-2 bg-secondary rounded-md hover:bg-secondary/80 transition-colors cursor-pointer">
                  <div className="text-xs text-primary font-semibold">{event.date}</div>
                  <div className="text-sm text-foreground">{event.title}</div>
                </div>
              ))}
            </div>
            <a href="#" className="more-link flex items-center gap-1 mt-4">
              Past Events... <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Birthday Greetings */}
          <div className="card-elevated">
            <div className="flex items-center gap-2 mb-4">
              <Cake className="h-5 w-5 text-primary" />
              <h3 className="font-serif font-semibold text-primary">Birthday Greetings</h3>
            </div>
            <div className="overflow-hidden h-32">
              <div className="animate-ticker space-y-2">
                {birthdayGreetings.map((greeting, index) => (
                  <p key={index} className="text-sm text-foreground whitespace-nowrap">
                    🎂 {greeting}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* News */}
          <div className="card-elevated">
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-5 w-5 text-primary" />
              <h3 className="font-serif font-semibold text-primary">News</h3>
            </div>
            <div className="space-y-3">
              {newsItems.map((news, index) => (
                <p key={index} className="text-sm text-foreground border-l-2 border-primary pl-3 hover:bg-secondary p-2 rounded-r cursor-pointer transition-colors">
                  {news}
                </p>
              ))}
            </div>
          </div>

          {/* Career Guidance */}
          <div className="card-elevated">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="font-serif font-semibold text-primary">Career Guidance</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Career Guidance to Students by Alumni – mentorship programs, workshops, and networking opportunities.
            </p>
            <a href="#" className="more-link flex items-center gap-1">
              Learn more... <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsAnnouncements;
