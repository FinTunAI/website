import { Button } from '../ui/button';
import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">FinTun AI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-sm">
              Accelerate your team’s innovation with our AI-driven development tools.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Middle: Join the Waitlist CTA */}
          {/* <div className="flex justify-start md:justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-md">
              Join the Waitlist
            </Button>
          </div> */}

          {/* Right: Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-2">Contact</h3>
            <a
              href="mailto:support@fintun.ai"
              className="text-gray-400 hover:text-white flex items-center space-x-2 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>support@fintun.ai</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 FinTun AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
