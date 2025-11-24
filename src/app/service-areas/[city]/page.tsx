import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { QuoteForm } from '@/components/quote-form';
import { Phone, CheckCircle2, ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER, COMPANY_NAME } from '@/lib/constants';

// Data for our Service Areas (The Spokes)
const CITIES = {
  'webb-city': {
    name: 'Webb City',
    zip: '64870',
    description: 'Expert tree care for Webb City homeowners. From the historic neighborhoods near King Jack Park to new developments, we understand the local soil and tree species.',
    landmarks: ['King Jack Park', 'Webb City High School', 'Cardinal Stadium'],
  },
  'carl-junction': {
    name: 'Carl Junction',
    zip: '64834',
    description: 'Protecting properties in Carl Junction from storm damage. We specialize in wind-proofing trees in open residential areas and clearing post-storm debris.',
    landmarks: ['Briarbrook Golf Course', 'Center Creek', 'Bulldog Stadium'],
  },
  'carterville': {
    name: 'Carterville',
    zip: '64835',
    description: 'Affordable tree removal and trimming in Carterville. We handle the unique challenges of older, mature trees common in the area.',
    landmarks: ['Carterville City Park', 'Route 66'],
  },
  'oronogo': {
    name: 'Oronogo',
    zip: '64855',
    description: 'Rural and residential tree services for Oronogo. Large lot clearing, hazardous removals, and fence-line trimming.',
    landmarks: ['Circle Park', 'Oronogo City Hall'],
  },
};

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const data = CITIES[city as keyof typeof CITIES];

  if (!data) {
    return { title: 'Page Not Found' };
  }

  return {
    title: `Tree Service ${data.name}, MO | Removal & Trimming`,
    description: `#1 Rated Tree Service in ${data.name}, MO (${data.zip}). Professional tree removal, trimming, and stump grinding near ${data.landmarks[0]}. Licensed & Insured.`,
    alternates: {
      canonical: `/service-areas/${city}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(CITIES).map((city) => ({
    city,
  }));
}

export default async function ServiceAreaPage({ params }: Props) {
  const { city } = await params;
  const data = CITIES[city as keyof typeof CITIES];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 bg-stone-900 text-white overflow-hidden">
           <div className="absolute inset-0 bg-stone-950/80 z-0" />
           {/* Decorative Background Image (Reused/Generic for now) */}
            <div className="absolute inset-0 z-0 opacity-40">
             <Image 
                src="/assets/joplin-tree-hero-main.jpg" 
                alt={`Tree service in ${data.name}`}
                fill
                className="object-cover"
             />
           </div>

           <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm text-stone-200 text-sm font-medium tracking-widest uppercase mb-6">
              <MapPin className="w-4 h-4 text-green-500" /> Serving {data.name}, MO {data.zip}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase leading-tight">
              Tree Service in <br/> <span className="text-green-500">{data.name}</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              {data.description} Licensed, Insured, and Local.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold h-16 px-10 rounded-none uppercase tracking-wider">
                <Link href={PHONE_HREF}>
                  Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </div>
        </section>

        <div className="bg-white py-20">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
            
            {/* Local Context Content */}
            <div className="space-y-8">
              <div>
                 <h2 className="text-3xl font-black text-stone-900 mb-6 uppercase tracking-tight">Why Choose Us in {data.name}?</h2>
                 <p className="text-stone-600 text-lg leading-relaxed mb-6">
                    Unlike out-of-town storm chasers, we are rooted in the Joplin metro area. We know the specific challenges homeowners in <strong>{data.name}</strong> face, from the soil conditions near {data.landmarks[0]} to the wind patterns affecting mature oaks.
                 </p>
                 <p className="text-stone-600 text-lg leading-relaxed">
                    We provide full-service arboriculture, not just "cutting down trees." Whether you are near {data.landmarks[1]} or the outskirts of town, our crew arrives on time, respects your property, and cleans up every twig.
                 </p>
              </div>

              <div className="grid gap-4">
                  <div className="p-6 bg-stone-50 border border-stone-100 rounded-lg">
                    <h3 className="font-bold text-xl text-stone-900 mb-2">Fast Response in {data.zip}</h3>
                    <p className="text-stone-600">We have crews stationed nearby for rapid emergency response in {data.name}.</p>
                  </div>
                  <div className="p-6 bg-stone-50 border border-stone-100 rounded-lg">
                    <h3 className="font-bold text-xl text-stone-900 mb-2">Local Regulations</h3>
                    <p className="text-stone-600">We handle all necessary checks for working near city streets or utility lines in {data.name}.</p>
                  </div>
              </div>

              <div className="pt-8 border-t border-stone-100">
                 <h3 className="font-bold text-lg text-stone-900 uppercase mb-4">Services Available in {data.name}</h3>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Tree Removal', 'Stump Grinding', 'Tree Trimming', 'Emergency Storm Damage', 'Lot Clearing', 'Tree Health Assessment'].map((service) => (
                       <li key={service} className="flex items-center gap-2 text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-green-600" /> {service}
                       </li>
                    ))}
                 </ul>
              </div>
            </div>

            {/* Form Side */}
            <div className="relative">
               <div className="sticky top-32">
                  <QuoteForm />
                  <div className="mt-8 text-center">
                     <p className="text-stone-500 text-sm mb-2">Prefer to talk to a human?</p>
                     <a href={PHONE_HREF} className="text-2xl font-black text-stone-900 hover:text-green-600 transition-colors block">
                        {PHONE_NUMBER}
                     </a>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
