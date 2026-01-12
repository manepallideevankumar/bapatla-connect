import { ArrowRight, Users } from 'lucide-react';

const batchRanges = [
  { range: '1945–1960', reps: ['Dr. K. Ramachandra Rao', 'Sri. P. Venkata Reddy'] },
  { range: '1961–1965', reps: ['Dr. M. Suresh Kumar', 'Sri. R. Bhaskar'] },
  { range: '1966–1970', reps: ['Dr. S. Lakshmi Narayana', 'Sri. T. Appa Rao'] },
  { range: '1971–1975', reps: ['Dr. V. Krishna Murthy', 'Sri. G. Srinivas'] },
  { range: '1976–1980', reps: ['Dr. A. Raghunath', 'Sri. B. Subba Rao'] },
];

const Representatives = () => {
  return (
    <section className="py-12 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Users className="h-8 w-8 text-primary" />
          <h2 className="section-heading mb-0">
            THE REPRESENTATIVES – Alumni / Students
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card-elevated">
            <div className="overflow-x-auto">
              <table className="table-academic">
                <thead>
                  <tr>
                    <th className="w-1/3">Batch Range</th>
                    <th>Representatives</th>
                  </tr>
                </thead>
                <tbody>
                  {batchRanges.map((batch, index) => (
                    <tr key={index}>
                      <td className="font-semibold text-primary">{batch.range}</td>
                      <td>
                        <div className="flex flex-wrap gap-2">
                          {batch.reps.map((rep, i) => (
                            <span 
                              key={i}
                              className="inline-block bg-secondary px-3 py-1 rounded-full text-sm"
                            >
                              {rep}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 text-right">
              <a href="#" className="more-link flex items-center justify-end gap-1">
                View all representatives... <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Representatives;
