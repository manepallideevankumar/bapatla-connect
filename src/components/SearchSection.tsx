import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const SearchSection = () => {
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { name, batch });
  };

  return (
    <section className="py-8 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-serif font-semibold text-primary">
                SEARCH BY NAME
              </h3>
            </div>
            
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter alumni name..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex-1">
                <label htmlFor="batch" className="block text-sm font-medium text-muted-foreground mb-2">
                  Batch
                </label>
                <Input
                  id="batch"
                  type="text"
                  placeholder="e.g., 1990"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="flex items-end">
                <Button type="submit" className="w-full md:w-auto px-8">
                  Go...
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
