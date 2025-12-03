// app/page.jsx

import Image from 'next/image';
import Link from 'next/link';
import image1 from './images/image.jpg';
import Footer from './Components/Footer';
import Stats from './Components/Stats';
import UpcomingMatches from './Components/UpcomingMatches';
import WinnerSection from './Components/Winner';
import ContactPage from './Components/ContactPage';



// SEO Metadata (Next.js 13+ App Router)
export const metadata = {
  title: 'BGMI Elite - The Premier Esports Gaming Platform',
  description: 'Join the ultimate Battlegrounds Mobile India (BGMI) esports experience. Compete in high-stakes tournaments, climb the global leaderboard, and go pro!',
  keywords: ['BGMI', 'Esports', 'Gaming Platform', 'Battlegrounds Mobile India', 'Tournaments', 'Leaderboard', 'Pro Gaming'],
  openGraph: {
    title: 'BGMI Elite - The Premier Esports Gaming Platform',
    description: 'Compete in high-stakes tournaments, climb the global leaderboard, and go pro!',
    url: 'https://localhost:3000',
    type: 'website',
  },
};



// Main Page Component
export default function LandingPage() {
  
  
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      
      

      <main>
        
        {/* 2. Hero Section (High Conversion Focus) */}
        <section className="relative h-[95vh]  flex items-center justify-center pt-16" id="hero">
          {/* Background Image with Next.js Image for optimization */}
          <Image
            src={image1}
            alt="BGMI Pro Player in Action - High Quality"
            fill
            style={{ objectFit: 'cover'}}
            priority={true} // High priority for LCP (Largest Contentful Paint)
            className="opacity-20 saturate-150 top-10"
          />

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-4xl px-4">
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight text-white drop-shadow-lg leading-tight">
              THE <span className="text-neon-red">BATTLEGROUND </span> AWAITS 
  {/* Assuming you want an actual image tag here with alt text */}
            <img src="/gun-svgrepo-com.svg" alt="Gun icon"
             className="inline ml-4 h-15 w-15 bg-cyan-600 rounded-full" />


            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Dominate the Indian Esports scene. Compete in **official BGMI tournaments**, climb the ranks, and earn your legacy.
            </p>
            
            {/* Primary Call to Action */}
            <div className="flex justify-center space-x-6">
              <Link href="#tournaments" className="bg-neon-red hover:bg-neon-red/80 text-white text-lg px-10 py-3 rounded-lg font-bold transition duration-300 shadow-2xl shadow-neon-red/50 uppercase tracking-widest">
                Join Tournament 🥷
              </Link>
              <button className="border border-neon-blue text-neon-blue hover:bg-neon-blue/10 text-lg px-10 py-3 rounded-lg font-bold transition duration-300 uppercase tracking-widest">
                Watch Live 🖥️
              </button>
            </div>
          </div>
        </section>

        {/* 3. Upcoming Tournaments Section */}
        
        <UpcomingMatches/>
        
        {/* 4. Leaderboard & Stats Section (Engaging Data) */}
        <Stats/>
        {/*5. Winner section*/ }
        <WinnerSection/>

         {/*6. contact section*/ }
        <ContactPage/>
        

        {/* 6. footer section Section (Engaging Data) */}
        <Footer/>
      </main>
      
    </div>
  );
}