import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { QuoteForm } from "@/components/quote-form";
import { JsonLd } from "@/components/json-ld";
import { Phone, CheckCircle2, ArrowRight, Star, ShieldCheck, MapPin, Clock, Trees } from "lucide-react";
import { PHONE_NUMBER, PHONE_HREF, COMPANY_NAME, ADDRESS } from "@/lib/constants";
import { WithContext, LocalBusiness } from "schema-dts";

const businessSchema: any = {
  "@context": "https://schema.org",
  "@type": "TreeService", // More specific than LocalBusiness
  "name": COMPANY_NAME,
  "image": "https://joplinmotreeservice.com/assets/joplin-tree-hero-main.jpg",
  "telephone": PHONE_NUMBER,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Joplin",
    "addressRegion": "MO",
    "postalCode": "64801",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.0842,
    "longitude": -94.5133
  },
  "url": "https://joplinmotreeservice.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "19:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Joplin" },
    { "@type": "City", "name": "Webb City" },
    { "@type": "City", "name": "Carl Junction" },
    { "@type": "City", "name": "Oronogo" },
    { "@type": "City", "name": "Carterville" }
  ]
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans selection:bg-green-200 selection:text-green-900">
      <JsonLd data={businessSchema} />
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION: Cinematic, Dark, Premium */}
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/assets/joplin-tree-hero-main.jpg" 
                alt="Arborist climbing a large oak tree at sunset in Joplin"
                fill
                className="object-cover object-center"
                priority
             />
             <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/90" />
          </div>
          
          <div className="container relative z-10 px-6 mx-auto text-center md:text-left pt-32">
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-sm text-stone-200 text-sm font-medium tracking-widest uppercase mb-8">
              <ShieldCheck className="w-4 h-4 text-green-500" /> Licensed & Insured in Joplin, MO
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
              PRECISION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">TREE SERVICE</span> <br />
              <span className="text-4xl md:text-6xl text-white block mt-2">IN JOPLIN, MO</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-10 max-w-2xl font-light leading-relaxed">
              We manage the most complex tree removals and ecosystem health in Jasper County. Fast, safe, and surgically precise.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold h-auto py-4 px-8 md:h-16 md:px-10 rounded-none uppercase tracking-wider whitespace-normal text-center">
                    Get Free Estimate <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] p-0 bg-transparent border-none shadow-none text-left">
                  <DialogTitle className="sr-only">Get a Free Estimate</DialogTitle>
                  <QuoteForm />
                </DialogContent>
              </Dialog>
              
              <Button asChild variant="outline" size="lg" className="h-auto py-4 px-8 md:h-16 md:px-10 rounded-none border-white/30 text-white hover:bg-white hover:text-stone-900 uppercase tracking-wider bg-transparent backdrop-blur-sm whitespace-normal text-center">
                <Link href="/#services">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* STATS BAR: Trust Anchors */}
        <div className="bg-green-950 text-white py-12 border-b border-white/5">
           <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
              <div>
                 <div className="text-4xl font-black text-green-500 mb-1">15+</div>
                 <div className="text-sm uppercase tracking-widest text-stone-400">Years Experience</div>
              </div>
              <div>
                 <div className="text-4xl font-black text-green-500 mb-1">24/7</div>
                 <div className="text-sm uppercase tracking-widest text-stone-400">Emergency Dispatch</div>
              </div>
              <div>
                 <div className="text-4xl font-black text-green-500 mb-1">100%</div>
                 <div className="text-sm uppercase tracking-widest text-stone-400">Licensed & Insured</div>
              </div>
              <div>
                 <div className="text-4xl font-black text-green-500 mb-1">5.0</div>
                 <div className="text-sm uppercase tracking-widest text-stone-400">Customer Rating</div>
              </div>
           </div>
        </div>

        {/* QUICK SERVICE MENU (Navigation Fix) */}
        <section className="py-20 bg-white">
           <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                 <h2 className="text-stone-900 font-black text-3xl uppercase tracking-tight">Our Core Services</h2>
                 <div className="h-1 w-20 bg-green-600 mx-auto mt-4" />
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* Item 1 */}
                 <Link href="/tree-removal" className="group block p-8 border border-stone-200 hover:border-orange-500 hover:shadow-xl transition-all bg-stone-50">
                    <div className="mb-6 bg-stone-200 w-14 h-14 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                       <Trees className="w-8 h-8 text-stone-700 group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-stone-900 mb-2 uppercase">Tree Removal</h3>
                    <p className="text-sm text-stone-600 mb-6 leading-relaxed">Complex takedowns, crane work, and hazardous removals.</p>
                    <span className="text-orange-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                       View Service <ArrowRight className="w-4 h-4" />
                    </span>
                 </Link>

                 {/* Item 2 */}
                 <Link href="/tree-trimming" className="group block p-8 border border-stone-200 hover:border-green-500 hover:shadow-xl transition-all bg-stone-50">
                    <div className="mb-6 bg-stone-200 w-14 h-14 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                       <CheckCircle2 className="w-8 h-8 text-stone-700 group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-stone-900 mb-2 uppercase">Trimming</h3>
                    <p className="text-sm text-stone-600 mb-6 leading-relaxed">Structural pruning, crown thinning, and health maintenance.</p>
                    <span className="text-green-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                       View Service <ArrowRight className="w-4 h-4" />
                    </span>
                 </Link>

                 {/* Item 3 */}
                 <Link href="/stump-grinding" className="group block p-8 border border-stone-200 hover:border-stone-900 hover:shadow-xl transition-all bg-stone-50">
                    <div className="mb-6 bg-stone-200 w-14 h-14 flex items-center justify-center group-hover:bg-stone-900 transition-colors">
                       <div className="text-2xl">🪵</div>
                    </div>
                    <h3 className="font-bold text-xl text-stone-900 mb-2 uppercase">Stump Grinding</h3>
                    <p className="text-sm text-stone-600 mb-6 leading-relaxed">Deep root removal and lawn reclamation.</p>
                    <span className="text-stone-900 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                       View Service <ArrowRight className="w-4 h-4" />
                    </span>
                 </Link>

                 {/* Item 4 */}
                 <Link href="/emergency-storm-damage" className="group block p-8 border border-stone-200 hover:border-red-600 hover:shadow-xl transition-all bg-stone-50">
                    <div className="mb-6 bg-stone-200 w-14 h-14 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                       <Clock className="w-8 h-8 text-stone-700 group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-stone-900 mb-2 uppercase">Emergency</h3>
                    <p className="text-sm text-stone-600 mb-6 leading-relaxed">24/7 Storm response for trees on houses or roads.</p>
                    <span className="text-red-600 font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                       View Service <ArrowRight className="w-4 h-4" />
                    </span>
                 </Link>
              </div>
           </div>
        </section>

        {/* SERVICE 1: REMOVAL (Checkerboard Right) */}
        <section id="removal" className="py-0">
           <div className="grid md:grid-cols-2 min-h-[600px]">
              <div className="bg-stone-100 flex items-center justify-center p-12 lg:p-24">
                 <div className="max-w-lg">
                    <div className="text-orange-600 font-bold uppercase tracking-widest mb-4 text-sm">Dangerous & Complex</div>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">SURGICAL TREE REMOVAL</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                       When a 100-year-old Oak is leaning over your master bedroom, you don't need a "guy with a chainsaw." You need an engineered takedown. We use cranes and rigging to dismantle trees piece by piece, ensuring zero impact on your home or lawn.
                    </p>
                    <ul className="space-y-3 mb-8">
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Crane-assisted removal
                       </li>
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Zero-impact lawn protection
                       </li>
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Hazardous limb removal
                       </li>
                    </ul>
                    <Link href="/tree-removal" className="inline-flex items-center text-stone-900 font-bold uppercase tracking-wide border-b-2 border-orange-500 hover:text-orange-600 transition-colors pb-1">
                       Learn More About Removal <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                 </div>
              </div>
              <div className="bg-[url('/assets/joplin-tree-removal-crane.jpg')] bg-cover bg-center min-h-[400px]" />
           </div>
        </section>

        {/* SERVICE 2: TRIMMING (Checkerboard Left) */}
        <section id="trimming" className="py-0">
           <div className="grid md:grid-cols-2 min-h-[600px]">
              <div className="bg-[url('/assets/joplin-tree-trimming-pruning.jpg')] bg-cover bg-center min-h-[400px] order-2 md:order-1" />
              <div className="bg-white flex items-center justify-center p-12 lg:p-24 order-1 md:order-2">
                 <div className="max-w-lg">
                    <div className="text-green-600 font-bold uppercase tracking-widest mb-4 text-sm">Health & Longevity</div>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">STRUCTURAL PRUNING</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                       Joplin winds are unforgiving. We don't just cut branches; we engineer the canopy. By "thinning" the crown, we allow wind to pass through the tree rather than pushing against it, saving your trees from storm damage.
                    </p>
                    <ul className="space-y-3 mb-8">
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Deadwood removal
                       </li>
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Crown thinning for wind resistance
                       </li>
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Oak Wilt prevention
                       </li>
                    </ul>
                    <Link href="/tree-trimming" className="inline-flex items-center text-stone-900 font-bold uppercase tracking-wide border-b-2 border-green-500 hover:text-green-600 transition-colors pb-1">
                       Learn More About Trimming <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* SERVICE 3: STUMP GRINDING (Checkerboard Right - NEW) */}
        <section id="stump-grinding" className="py-0">
           <div className="grid md:grid-cols-2 min-h-[600px]">
              <div className="bg-stone-100 flex items-center justify-center p-12 lg:p-24">
                 <div className="max-w-lg">
                    <div className="text-stone-500 font-bold uppercase tracking-widest mb-4 text-sm">Land Reclamation</div>
                    <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6 leading-tight">DEEP STUMP GRINDING</h2>
                    <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                       Stop mowing around that ugly stump. We grind 6-12 inches below grade, turning that tripping hazard into fresh mulch. Perfect for replanting grass or expanding your driveway.
                    </p>
                    <ul className="space-y-3 mb-8">
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Prevent termite nesting
                       </li>
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Immediate replanting
                       </li>
                       <li className="flex items-center gap-3 text-stone-700 font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-600" /> Complete root ball destruction
                       </li>
                    </ul>
                    <Link href="/stump-grinding" className="inline-flex items-center text-stone-900 font-bold uppercase tracking-wide border-b-2 border-stone-500 hover:text-stone-700 transition-colors pb-1">
                       Learn More About Grinding <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                 </div>
              </div>
              <div className="bg-[url('/assets/joplin-stump-grinding-machine.jpg')] bg-cover bg-center min-h-[400px]" />
           </div>
        </section>

        {/* SERVICE 3: EMERGENCY (Dark Mode) */}
        <section className="bg-stone-900 text-white py-24">
           <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-red-500 font-bold uppercase tracking-widest mb-4 text-sm">
                       <Clock className="w-4 h-4" /> 24/7 Response
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">STORM DAMAGE <span className="text-red-500">EMERGENCY</span></h2>
                    <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                       When a tree hits your roof, every minute counts. We prioritize emergency calls, deploying crews immediately to stabilize the situation and prevent water damage. We work directly with your insurance.
                    </p>
                    <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold h-14 px-10 rounded-none uppercase tracking-wider">
                       <Link href={PHONE_HREF}>
                          <Phone className="mr-2 h-5 w-5" /> Call Emergency Line
                       </Link>
                    </Button>
                 </div>
                 {/* Visual Element */}
                 <div className="w-full max-w-md h-[400px] relative">
                    <Image 
                       src="/assets/joplin-emergency-storm-damage.jpg" 
                       alt="Storm damaged tree on house in Joplin"
                       fill
                       className="object-cover border border-stone-800"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* LOCAL GUIDE: Editorial Style (Dark) */}
        <section id="about" className="py-24 bg-stone-900 text-white">
           <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                 <div>
                    <div className="text-green-500 font-bold uppercase tracking-widest mb-4 text-sm">The Local Territory</div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-none">ROOTED IN <br /> JOPLIN SOIL</h2>
                 </div>
                 <p className="text-xl text-stone-400 leading-relaxed">
                    Joplin isn't just any territory. The rocky chert soil of Jasper County and the post-2011 landscape present unique challenges. From the historic Elms in <strong>Murphysburg</strong> to the wind-swept Oaks of <strong>Webb City</strong>, we understand the specific care your trees need to survive our storms.
                 </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-left">
                 {/* Card 1 */}
                 <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                    <h3 className="font-bold text-xl text-green-400 mb-3">Ordinance 2008-212</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">We ensure all removals comply with Joplin city codes regarding hazardous trees, saving you from potential fines.</p>
                 </div>
                 {/* Card 2 */}
                 <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                    <h3 className="font-bold text-xl text-green-400 mb-3">Rocky Soil Expertise</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">We know how to grind stumps in the cherty soil of Newton County without damaging equipment or your lawn.</p>
                 </div>
                 {/* Card 3 */}
                 <div className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                    <h3 className="font-bold text-xl text-green-400 mb-3">Oak Wilt Protocol</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">We sterilize our tools between cuts to prevent the spread of deadly Oak Wilt, rampant in Southwest Missouri.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ SECTION: Minimalist */}
        <section id="faq" className="py-24 bg-white border-t border-stone-100">
           <div className="container mx-auto px-6 max-w-3xl">
              <h2 className="text-3xl font-black text-stone-900 mb-12 text-center uppercase">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                 <AccordionItem value="item-1" className="border-b-stone-200">
                    <AccordionTrigger className="text-lg font-bold text-stone-900 hover:text-green-800">How much does tree removal cost?</AccordionTrigger>
                    <AccordionContent className="text-stone-600 text-base leading-relaxed p-4 bg-stone-50">
                       The cost of tree removal varies depending on the size, location, and condition of the tree. We provide <strong>Free On-Site Estimates</strong> to give you an exact price before we start. We pride ourselves on offering competitive, affordable rates for Joplin homeowners.
                    </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-2" className="border-b-stone-200">
                    <AccordionTrigger className="text-lg font-bold text-stone-900 hover:text-green-800">Do I need a permit in Joplin?</AccordionTrigger>
                    <AccordionContent className="text-stone-600 text-base leading-relaxed p-4 bg-stone-50">
                       Generally, no permit is needed for private property. However, if the tree is in the "Right of Way" (between sidewalk and street) or you are in a historic district, city approval may be required. We handle this check for you.
                    </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-3" className="border-b-stone-200">
                    <AccordionTrigger className="text-lg font-bold text-stone-900 hover:text-green-800">Will you ruin my yard?</AccordionTrigger>
                    <AccordionContent className="text-stone-600 text-base leading-relaxed p-4 bg-stone-50">
                       Absolutely not. We use plywood mats to disperse the weight of our equipment and use cranes to lift logs <em>over</em> your lawn, not drag them across it. Your yard will look cleaner than when we arrived.
                    </AccordionContent>
                 </AccordionItem>
              </Accordion>
           </div>
        </section>

        {/* FOOTER CTA: Final Push */}
        <section className="py-32 bg-stone-900 text-white text-center">
           <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">Ready to Reclaim Your Yard?</h2>
              <p className="text-xl text-stone-400 mb-10 max-w-xl mx-auto">
                 Fast, professional service is just a phone call away. Licensed, Insured, and Local.
              </p>
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-base md:text-lg font-bold h-auto py-6 px-6 md:h-20 md:px-12 rounded-none uppercase tracking-widest shadow-2xl hover:shadow-green-900/20 transition-all whitespace-normal text-center">
                 <Link href={PHONE_HREF}>
                    Call {PHONE_NUMBER} Today
                 </Link>
              </Button>
           </div>
        </section>
      </main>

      <Footer />

      {/* Sticky Mobile Footer - Premium Style */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-16 text-lg rounded-none uppercase tracking-wider shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
          <Link href={PHONE_HREF}>
            <Phone className="mr-3 h-5 w-5" />
            Call for Estimate
          </Link>
        </Button>
      </div>
    </div>
  );
}