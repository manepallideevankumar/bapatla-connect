import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { label: 'About', href: '#about' },
  { label: "Founder's Message", href: '#founders' },
  { label: 'Purpose', href: '#purpose' },
  { label: 'The Committee', href: '#committee' },
  { label: 'Contact Us', href: '#contact' },
  { 
    label: 'Important Links', 
    href: '#links',
    subItems: [
      { label: 'University Website', href: '#' },
      { label: 'Academic Calendar', href: '#' },
      { label: 'Research Portal', href: '#' },
    ]
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-card">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.label} asChild>
                        <a href={subItem.href} className="cursor-pointer">
                          {subItem.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Register Button */}
          <div className="hidden lg:block">
            <Button 
              className="bg-highlight text-highlight-foreground hover:bg-highlight/90 font-semibold shadow-md"
            >
              REGISTER / SIGN-IN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Mobile Title */}
          <span className="lg:hidden text-primary-foreground font-serif font-bold text-sm">
            BAC ALUMNI
          </span>

          {/* Mobile Register Button */}
          <Button 
            size="sm"
            className="lg:hidden bg-highlight text-highlight-foreground hover:bg-highlight/90 font-semibold text-xs"
          >
            SIGN-IN
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
