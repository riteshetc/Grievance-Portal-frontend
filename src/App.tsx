import React from 'react';
import { Menu, Search, User, ChevronDown, Facebook, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#00A651] text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-gray-200">SAP Portal</a>
            <a href="#" className="hover:text-gray-200">Library</a>
            <a href="#" className="hover:text-gray-200">Notices</a>
            <a href="#" className="hover:text-gray-200">Alumni</a>
            <a href="#" className="hover:text-gray-200">Staff</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200"><Facebook size={18} /></a>
            <a href="#" className="hover:text-gray-200"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-gray-200"><Instagram size={18} /></a>
            <a href="#" className="hover:text-gray-200"><Youtube size={18} /></a>
            <a href="#" className="hover:text-gray-200"><Twitter size={18} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Now Sticky */}
      <nav className="sticky top-0 bg-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="https://kiit.ac.in/wp-content/uploads/2019/11/KIIT-LOGO-ANIMATION-256x256-1.png"
                alt="KIIT Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <NavItem text="About KIIT" />
              <NavItem text="Academics" />
              <NavItem text="Research" />
              <NavItem text="Student Life" />
              <NavItem text="Admissions" />
            </div>
            <div className="flex items-center space-x-4">
              <Search className="text-gray-600" />
              <User className="text-gray-600" />
              <button className="md:hidden">
                <Menu className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=500&fit=crop" 
          alt="Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Student Affairs</h1>
            <p className="text-xl">Supporting Your Academic Journey</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-[#00A651] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <QuickLink title="Academic Support" description="Access resources and guidance for your studies" />
            <QuickLink title="Student Services" description="Health, housing, and wellness support" />
            <QuickLink title="Campus Life" description="Events, clubs, and activities" />
            <QuickLink title="Career Services" description="Internships and job placement assistance" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsSection />
          <EventsSection />
          <ResourcesSection />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#004D25] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>KIIT University</p>
              <p>Bhubaneswar, Odisha</p>
              <p>India - 751024</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-gray-300">Student Portal</a></li>
                <li><a href="#" className="hover:text-gray-300">Library Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Important Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms of Use</a></li>
                <li><a href="#" className="hover:text-gray-300">Student Handbook</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><Facebook /></a>
                <a href="#" className="hover:text-gray-300"><Twitter /></a>
                <a href="#" className="hover:text-gray-300"><Instagram /></a>
                <a href="#" className="hover:text-gray-300"><Linkedin /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-600 text-center">
            <p>&copy; {new Date().getFullYear()} KIIT University. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavItem({ text }: { text: string }) {
  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 text-gray-700 hover:text-[#00A651]">
        <span>{text}</span>
        <ChevronDown size={16} />
      </button>
    </div>
  );
}

function QuickLink({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function NewsSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#00A651]">Latest News</h2>
      <div className="space-y-4">
        <NewsItem 
          title="New Student Orientation 2024"
          date="March 1, 2024"
        />
        <NewsItem 
          title="Academic Excellence Awards"
          date="February 28, 2024"
        />
        <NewsItem 
          title="Campus Safety Updates"
          date="February 25, 2024"
        />
      </div>
    </div>
  );
}

function NewsItem({ title, date }: { title: string; date: string }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="font-semibold hover:text-[#00A651] cursor-pointer">{title}</h3>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
  );
}

function EventsSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#00A651]">Upcoming Events</h2>
      <div className="space-y-4">
        <EventItem 
          title="Student Leadership Summit"
          date="March 15, 2024"
          time="10:00 AM"
        />
        <EventItem 
          title="Career Fair Spring 2024"
          date="March 20, 2024"
          time="9:00 AM"
        />
        <EventItem 
          title="Cultural Festival"
          date="April 1, 2024"
          time="5:00 PM"
        />
      </div>
    </div>
  );
}

function EventItem({ title, date, time }: { title: string; date: string; time: string }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="font-semibold hover:text-[#00A651] cursor-pointer">{title}</h3>
      <p className="text-sm text-gray-600">{date} at {time}</p>
    </div>
  );
}

function ResourcesSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#00A651]">Student Resources</h2>
      <div className="space-y-4">
        <ResourceItem 
          title="Academic Calendar"
          description="Important dates and deadlines"
        />
        <ResourceItem 
          title="Student Handbook"
          description="Policies and procedures"
        />
        <ResourceItem 
          title="Health Services"
          description="Medical and wellness support"
        />
      </div>
    </div>
  );
}

function ResourceItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <h3 className="font-semibold hover:text-[#00A651] cursor-pointer">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default App;