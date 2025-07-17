
import { Navigation } from '@/components/Navigation';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { StickyFooter } from '@/components/StickyFooter';
import { Sofa, Sparkles, Building, Car, Home, Clock, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const residentialServices = [
  {
    icon: Sofa,
    title: 'Sofa & Upholstery Deep Clean',
    description: 'Professional steam cleaning and stain removal for all types of furniture.',
    duration: '2-3 hours',
    price: 'from KES 2,500',
    features: ['Steam cleaning', 'Stain removal', 'Fabric protection', 'Odor elimination']
  },
  {
    icon: Sparkles,
    title: 'Window & Glass Cleaning',
    description: 'Streak-free window cleaning inside and out, including frames and sills.',
    duration: '1-2 hours',
    price: 'from KES 1,200',
    features: ['Interior & exterior', 'Frame cleaning', 'Sill cleaning', 'Streak-free finish']
  },
  {
    icon: Building,
    title: 'Carpet & Rug Shampooing',
    description: 'Deep extraction cleaning that removes dirt, stains, and allergens.',
    duration: '3-4 hours',
    price: 'from KES 3,000',
    features: ['Deep extraction', 'Stain treatment', 'Quick drying', 'Allergen removal']
  },
  {
    icon: Home,
    title: 'Full House Cleaning',
    description: 'Complete home cleaning service covering all rooms and surfaces.',
    duration: '4-6 hours',
    price: 'from KES 8,000',
    features: ['All rooms', 'Kitchen deep clean', 'Bathroom sanitizing', 'Floor cleaning']
  }
];

const commercialServices = [
  {
    icon: Building,
    title: 'Office Deep Cleaning',
    description: 'Comprehensive office cleaning to maintain a productive workspace.',
    duration: '4-8 hours',
    price: 'from KES 5,000',
    features: ['Workstation cleaning', 'Floor maintenance', 'Restroom sanitizing', 'Window cleaning']
  },
  {
    icon: Car,
    title: 'Retail Space Cleaning',
    description: 'Specialized cleaning for retail environments to impress customers.',
    duration: '3-6 hours',
    price: 'from KES 4,000',
    features: ['Display cleaning', 'Floor polishing', 'Glass surfaces', 'Customer areas']
  },
  {
    icon: Sparkles,
    title: 'Post-Construction Cleanup',
    description: 'Thorough cleaning after construction or renovation projects.',
    duration: '6-12 hours',
    price: 'from KES 15,000',
    features: ['Dust removal', 'Paint splatter cleanup', 'Floor preparation', 'Window restoration']
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Professional cleaning solutions tailored to your needs. From residential deep cleans to commercial maintenance.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-16">
              <TabsTrigger value="residential" className="text-lg">Residential</TabsTrigger>
              <TabsTrigger value="commercial" className="text-lg">Commercial</TabsTrigger>
            </TabsList>

            <TabsContent value="residential">
              <div className="grid md:grid-cols-2 gap-8">
                {residentialServices.map((service, index) => (
                  <div key={service.title} className="group">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>{service.duration}</span>
                            </div>
                            <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                              {service.price}
                            </span>
                          </div>
                          
                          <div className="space-y-2">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid md:grid-cols-2 gap-8">
                {commercialServices.map((service, index) => (
                  <div key={service.title} className="group">
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {service.description}
                          </p>
                          
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>{service.duration}</span>
                            </div>
                            <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                              {service.price}
                            </span>
                          </div>
                          
                          <div className="space-y-2">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-emerald-500" />
                                <span className="text-sm text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free quote today. Same-day service available across Nairobi, Kiambu, Machakos, and Kajiado.
          </p>
          <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105">
            WhatsApp for Quote
          </button>
        </div>
      </section>

      <WhatsAppFloat />
      <StickyFooter />
    </div>
  );
};

export default Services;
