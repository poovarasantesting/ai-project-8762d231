import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Build Something Amazing Today
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10">
          The easiest way to create, deploy, and scale your web applications.
          Start your journey with our powerful platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        <div className="mt-16 w-full max-w-4xl rounded-lg shadow-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop"
            alt="Dashboard Preview"
            className="w-full h-auto"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Globe className="h-10 w-10 text-blue-500" />}
              title="Global Scale"
              description="Deploy your applications worldwide with our high-performance infrastructure."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-blue-500" />}
              title="Enterprise Security"
              description="Rest easy with our advanced security features and compliance standards."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-500" />}
              title="Team Collaboration"
              description="Work together seamlessly with built-in tools for teams of any size."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Trusted by Thousands
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="This platform has transformed how we build and deploy our applications. Couldn't be happier!"
              author="Sarah Johnson"
              role="CTO, TechStart"
            />
            <TestimonialCard
              quote="The speed and reliability are unmatched. Our development time has been cut in half."
              author="Michael Chen"
              role="Lead Developer, Innovate Inc"
            />
            <TestimonialCard
              quote="Customer support is exceptional. Any issue we've had was resolved quickly and professionally."
              author="Emily Rodriguez"
              role="Product Manager, GrowthFast"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the plan that works best for your needs. All plans include our core features.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="$9"
              description="Perfect for individuals and small projects"
              features={[
                "Up to 3 projects",
                "Basic analytics",
                "Community support",
                "1GB storage"
              ]}
              buttonText="Get Started"
              isPrimary={false}
            />
            <PricingCard
              title="Professional"
              price="$29"
              description="Ideal for growing businesses and teams"
              features={[
                "Unlimited projects",
                "Advanced analytics",
                "Priority support",
                "10GB storage",
                "Custom domains"
              ]}
              buttonText="Get Started"
              isPrimary={true}
            />
            <PricingCard
              title="Enterprise"
              price="$99"
              description="For large organizations with advanced needs"
              features={[
                "Unlimited everything",
                "Dedicated support",
                "SLA guarantees",
                "100GB storage",
                "Team collaboration tools",
                "SSO Authentication"
              ]}
              buttonText="Contact Sales"
              isPrimary={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-blue-100">
            Join thousands of developers and companies building amazing things on our platform.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">Features</Link></li>
                <li><Link to="/" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/" className="hover:text-white">Integrations</Link></li>
                <li><Link to="/" className="hover:text-white">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">Documentation</Link></li>
                <li><Link to="/" className="hover:text-white">Tutorials</Link></li>
                <li><Link to="/" className="hover:text-white">Blog</Link></li>
                <li><Link to="/" className="hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">About</Link></li>
                <li><Link to="/" className="hover:text-white">Careers</Link></li>
                <li><Link to="/" className="hover:text-white">Contact</Link></li>
                <li><Link to="/" className="hover:text-white">Press</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">Privacy</Link></li>
                <li><Link to="/" className="hover:text-white">Terms</Link></li>
                <li><Link to="/" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
      <p className="text-gray-600 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  isPrimary 
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPrimary: boolean;
}) {
  return (
    <div className={`p-6 rounded-lg shadow-sm ${isPrimary ? 'bg-blue-50 border-blue-200 ring-2 ring-blue-500' : 'bg-white border border-gray-200'}`}>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full ${isPrimary ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
        variant={isPrimary ? "default" : "outline"}
      >
        {buttonText}
      </Button>
    </div>
  );
}