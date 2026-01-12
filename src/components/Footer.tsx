import bacLogo from '@/assets/bac-logo.png';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <img 
              src={bacLogo} 
              alt="BAC Logo" 
              className="h-16 w-auto mb-4 bg-white p-2 rounded"
            />
            <h3 className="font-serif font-bold text-lg mb-2">
              Bapatla Agricultural College Alumni
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Connecting generations of agricultural excellence since 1945.
            </p>
          </div>

          {/* Access Rights */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 border-b border-primary-foreground/30 pb-2">
              Access Rights
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-highlight rounded-full"></span>
                Admin – All rights
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-foreground/50 rounded-full"></span>
                Batch Reps – Limited set of rights
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-foreground/30 rounded-full"></span>
                Users – Limited set of rights
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold text-sm mb-2">Academic Units</h5>
              <p className="text-xs text-primary-foreground/70">
                University Departments (Engineering, AH & English)
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 border-b border-primary-foreground/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {['About', "Founder's Message", 'Purpose', 'The Committee', 'Contact Us', 'Important Links'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-highlight transition-colors hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4 border-b border-primary-foreground/30 pb-2">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Bapatla Agricultural College, Bapatla, Andhra Pradesh - 522101</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 8643 222333</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>alumni@bacbapatla.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/70">
          <p>© 2026 Bapatla Agricultural College Alumni Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
