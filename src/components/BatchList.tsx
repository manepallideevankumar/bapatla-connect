import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const years = Array.from({ length: 12 }, (_, i) => 1945 + i);

const departments = [
  'Agronomy',
  'Entomology',
  'Soil Science',
  'Pathology',
  'Breeding',
  'Physiology',
];

const BatchList = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 space-y-12">
        {/* Batchwise Lists */}
        <div>
          <h2 className="section-heading text-center">Alumni & Students – Batchwise Lists</h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {years.map((year) => (
              <Button
                key={year}
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {year}
              </Button>
            ))}
            <Button
              variant="default"
              size="sm"
              className="flex items-center gap-1"
            >
              More... <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Department Wise */}
        <div>
          <h2 className="section-heading text-center">Faculty Worked / Working – Department Wise</h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant="secondary"
                className="hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {dept}
              </Button>
            ))}
            <Button
              variant="default"
              className="flex items-center gap-1"
            >
              More... <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchList;
