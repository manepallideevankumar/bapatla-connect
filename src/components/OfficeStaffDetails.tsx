import { ArrowRight, Building2 } from 'lucide-react';

const OfficeStaffDetails = () => {
  return (
    <section className="py-12 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Building2 className="h-8 w-8 text-primary" />
          <h2 className="section-heading mb-0">
            LIST OF OFFICE STAFF (RETIRED & SERVING)
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <div className="card-elevated">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-border">
                <span className="font-medium text-foreground">Name of the Present Principal</span>
                <span className="text-primary font-semibold">Sri. K. Venkata Rao (from 2022...)</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-border">
                <span className="font-medium text-foreground">Name of the Present Dean</span>
                <span className="text-primary font-semibold">Dr. P. Lakshmi Reddy (from 2021...)</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between py-3 border-b border-border">
                <span className="font-medium text-foreground">Name of the Present PG Dean</span>
                <span className="text-primary font-semibold">Dr. R. Subrahmanyam (from 2023...)</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <a href="#" className="more-link flex items-center gap-1">
                  List of Earlier Principals – View... <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="more-link flex items-center gap-1">
                  List of Earlier Deans – View... <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="more-link flex items-center gap-1">
                  List of Earlier PG Deans – View... <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeStaffDetails;
