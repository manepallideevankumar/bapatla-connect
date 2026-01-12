import { ArrowRight } from 'lucide-react';

interface StatTableProps {
  title: string;
  data: { label: string; value: string | number }[];
}

const StatTable = ({ title, data }: StatTableProps) => (
  <div className="card-elevated animate-slide-up">
    <div className="flex items-center justify-between mb-4">
      <h4 className="font-serif font-semibold text-lg text-primary">{title}</h4>
      <a href="#" className="more-link flex items-center gap-1">
        More... <ArrowRight className="h-4 w-4" />
      </a>
    </div>
    <div className="overflow-x-auto">
      <table className="table-academic">
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="font-medium text-foreground">{item.label}</td>
              <td className="text-right font-semibold text-primary">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Dashboard = () => {
  const alumniStats = [
    { label: 'Total Number Registered', value: 2847 },
    { label: 'Total No. of PGs', value: 1234 },
    { label: 'PG in Bapatla College', value: 567 },
    { label: 'Total number of PhDs', value: 189 },
    { label: 'PhD in Bapatla College', value: 78 },
    { label: 'Number residing Abroad', value: 342 },
  ];

  const facultyStats = [
    { label: 'Total Number Registered', value: 456 },
    { label: 'Degree in Bapatla College', value: 234 },
    { label: 'PG in Bapatla College', value: 156 },
    { label: 'PhD in Bapatla College', value: 89 },
    { label: 'Presently working in BAC', value: 67 },
    { label: 'Number residing Abroad', value: 23 },
  ];

  const officeStaffStats = [
    { label: 'Clerical', value: 45 },
    { label: 'Managerial', value: 23 },
    { label: 'Administrative', value: 18 },
  ];

  const studentStats = [
    { label: 'No. of 1st Year Students', value: 120 },
    { label: 'No. of 2nd Year Students', value: 115 },
    { label: 'No. of 3rd Year Students', value: 118 },
    { label: 'No. of 4th Year Students', value: 112 },
    { label: 'Number pursuing PG', value: 89 },
    { label: 'Number pursuing PhD', value: 34 },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-10">DASH BOARD</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <StatTable title="Alumni Statistics" data={alumniStats} />
          <StatTable title="Faculty Statistics" data={facultyStats} />
          <StatTable title="Office Staff (Including College Farm)" data={officeStaffStats} />
          <StatTable title="Students Statistics" data={studentStats} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
