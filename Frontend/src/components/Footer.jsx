import React from "react";
import {
  Code,
  BookOpen,
  TrendingUp,
  Palette,
  Users,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Platform Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              NeoTrade
            </h3>
            <p className="text-sm text-gray-400">
              Master the art of trading through our comprehensive virtual
              trading platform. Practice with zero risk using virtual
              currency.
            </p>
          </div>

          {/* Features & Quick Links Combined */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" />
              Quick Access
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400"
              >
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <span>Trading Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400"
              >
                <Code className="w-4 h-4 text-blue-400" />
                <span>Educational Resources</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400"
              >
                <Users className="w-4 h-4 text-blue-400" />
                <span>Community Support</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400"
              >
                <Palette className="w-4 h-4 text-blue-400" />
                <span>Practice Account</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} NeoTrade. All
              rights reserved.
            </p>
            <div className="flex space-x-4 text-xs text-gray-400">
              <span className="hover:text-blue-400 cursor-pointer">Terms</span>
              <span className="hover:text-blue-400 cursor-pointer">
                Privacy
              </span>
              <span className="hover:text-blue-400 cursor-pointer">
                Disclaimer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
