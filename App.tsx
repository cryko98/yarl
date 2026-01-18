
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PROJECT_NAME, TICKER, CONTRACT_ADDRESS, LOGO_URL, ABOUT_TEXT, X_LINK } from './constants';

const TICKER_IMAGES = [
  "https://pbs.twimg.com/media/G-9m5FdWEAAjWXz?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-9mTHxXMAEXS_p?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-9ly56XwAAN-Ly?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-9k26KWAAAW7wC?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-9g2-FXUAAOceq?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-9YBPUXoAAKWsC?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-9XNHCXkAARQ1-?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-89cwjWAAA5P4F?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-8xSNOXwAAbHBB?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-8i-BdXAAAwvz0?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-8fJbiXoAAOUvw?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-8bNCJWIAAe9tx?format=jpg&name=240x240",
  "https://pbs.twimg.com/media/G-7J2muXsAENjBB?format=jpg&name=240x240"
];

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto sketch-border bg-white px-4 py-3 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} className="w-12 h-12 rounded-full border-2 border-[#4A3728] sketch-button" alt="logo" />
          <span className="text-3xl font-black text-[#8B4513] tracking-widest">{PROJECT_NAME}</span>
        </div>
        <div className="hidden lg:flex gap-6 text-xl text-[#8B4513]">
          <a href="#story" className="hover:text-[#D2B48C] transition-colors">Story</a>
          <a href="#vibes" className="hover:text-[#D2B48C] transition-colors">Vibes</a>
          <a href="#wardrobe" className="hover:text-[#D2B48C] transition-colors">Wardrobe</a>
          <a href="#buy" className="hover:text-[#D2B48C] transition-colors">Join</a>
        </div>
        <div className="flex items-center gap-2">
          <a href={X_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#4A3728] text-white p-2 border-2 border-[#4A3728] rounded-lg sketch-button hover:bg-[#2e2319] transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#buy" className="bg-[#8B4513] text-white border-2 border-[#4A3728] px-4 py-2 text-lg rounded-lg sketch-button hover:bg-[#6b350e]">
            BUY {TICKER}
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#FFF8F0]">
       {/* Background doodles */}
      <div className="absolute top-20 left-10 text-[#E6DCC8] text-9xl rotate-12 select-none pointer-events-none">MEOW</div>
      <div className="absolute bottom-10 right-10 text-[#E6DCC8] text-9xl -rotate-12 select-none pointer-events-none">LUNA</div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col gap-12 lg:gap-20">
        
        {/* Top: Badge & Title */}
        <div className="text-center space-y-8 z-20">
          <h1 className="text-6xl md:text-8xl xl:text-9xl text-outline leading-none text-[#8B4513]">
            LUNA |<br/>Queen of Solana
          </h1>
        </div>

        {/* Bottom: Grid with Image and Text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Image Side */}
           <div className="relative flex justify-center lg:justify-end order-1">
             <div className="relative w-full max-w-md transform transition-transform hover:scale-105 duration-300">
                <img 
                  src={LOGO_URL} 
                  alt="Luna" 
                  className="w-full sketch-border bg-white -rotate-2 p-3 rounded-3xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-[#8B4513] text-white p-3 sketch-border text-2xl -rotate-6 hidden md:block rounded-xl">
                  JUST VIBING
                </div>
             </div>
           </div>

           {/* Text Side */}
           <div className="space-y-8 text-center lg:text-left order-2">
             <p className="text-2xl md:text-3xl text-[#4A3728] leading-relaxed font-bold">
                The most popular cat on X. <br className="hidden md:block"/>
                She's judging your trades, but she loves you anyway. <br/>
                <span className="text-[#8B4513] font-bold bg-white px-2 mt-4 inline-block -rotate-1 text-xl md:text-3xl border-2 border-[#4A3728] rounded">WE ARE LUNA.</span>
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
               <div className="sketch-border bg-white text-black p-6 flex flex-col items-center lg:items-start w-full lg:w-auto hover:bg-[#FFF8F0] transition-colors">
                  <span className="text-sm font-bold mb-2 text-[#8B4513]">CONTRACT ADDRESS (CA):</span>
                  <code className="text-lg md:text-xl break-all select-all font-sans font-bold leading-tight hover:text-[#D2B48C] transition-colors cursor-pointer text-center md:text-left">{CONTRACT_ADDRESS}</code>
               </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}

const About = () => {
  return (
    <section id="story" className="py-24 px-4 bg-white border-y-4 border-[#4A3728] text-[#4A3728]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-[#E6DCC8] text-[#4A3728] px-4 py-1 text-xl sketch-border -rotate-1 inline-block mb-4">THE FACTS</span>
          <h2 className="text-4xl md:text-7xl text-[#8B4513] uppercase">
            WHY LUNA?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
             <div className="sketch-border bg-[#FFF8F0] p-8 transform rotate-1">
                <p className="text-xl leading-relaxed whitespace-pre-line">
                   {ABOUT_TEXT}
                </p>
             </div>
             <div className="flex gap-4 justify-center lg:justify-start">
                <div className="bg-[#D2B48C] text-white p-4 sketch-border -rotate-2">
                   <span className="text-3xl">🐟</span> Snacks
                </div>
                <div className="bg-[#A0522D] text-white p-4 sketch-border rotate-2">
                   <span className="text-3xl">💤</span> Naps
                </div>
                <div className="bg-[#8B4513] text-white p-4 sketch-border -rotate-1">
                   <span className="text-3xl">📈</span> Pumps
                </div>
             </div>
          </div>

          <div className="sketch-border bg-[#4A3728] text-white p-8 transform -rotate-1 h-full flex flex-col justify-center items-center text-center">
             <img src="https://pbs.twimg.com/media/G-8xSNOXwAAbHBB?format=jpg&name=240x240" className="w-48 h-48 rounded-full border-4 border-white mb-6" alt="Luna" />
             <p className="text-3xl text-[#D2B48C] font-bold mb-4">"I am not a cat. I am a financial advisor."</p>
             <p className="text-gray-300 text-sm font-sans">(Not actually financial advice)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommunityVibes = () => {
  return (
    <section id="vibes" className="py-24 px-4 bg-[#D2B48C] border-y-4 border-[#4A3728]">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        <h2 className="text-6xl text-outline-white mb-12">COMMUNITY VIBES</h2>
        
        <div className="grid gap-8 text-2xl md:text-3xl leading-relaxed">
          <p className="bg-white text-[#4A3728] p-6 sketch-border rotate-1">
            "Luna is the only green candle in my heart."
          </p>
          <p className="bg-[#4A3728] text-[#E6DCC8] p-6 sketch-border -rotate-1">
            "If Luna fits, Luna sits (on the moon)."
          </p>
          <div className="bg-white text-[#4A3728] p-6 sketch-border rotate-1">
             <span className="block text-sm font-bold mb-2 uppercase text-[#8B4513]">Status Update:</span>
             "Purring loudly. Charts look tasty."
          </div>
        </div>
      </div>
    </section>
  );
}

const MemeGallery = () => {
  return (
    <div className="py-20 overflow-hidden bg-white border-y-4 border-[#4A3728]">
      <div className="flex animate-marquee gap-8 w-max">
        {[...TICKER_IMAGES, ...TICKER_IMAGES].map((src, i) => (
          <div key={i} className="w-64 h-64 bg-[#FFF8F0] p-2 sketch-border rotate-2 hover:rotate-0 transition-transform">
            <img src={src} className="w-full h-full object-cover border border-[#4A3728] rounded-lg" alt="Luna Meme" />
          </div>
        ))}
      </div>
      <style>{`
        .animate-marquee { animation: marquee 30s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

const WARDROBE_PROMPTS = [
  "wearing a tiny astronaut suit",
  "wearing a wizard hat and holding a magic wand",
  "wearing sunglasses and a gold chain",
  "wearing a hawaiian shirt and straw hat",
  "wearing a superhero cape and mask",
  "wearing a royal crown and red velvet robe",
  "wearing a cyberpunk visor and neon jacket",
  "wearing a chef hat and holding a spatula",
  "wearing a detective trench coat and hat"
];

const LunaWardrobe = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedImg, setGeneratedImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cachedRefImage = useRef<string | null>(null);

  const getBase64FromUrl = async (url: string): Promise<string | null> => {
    if (cachedRefImage.current) return cachedRefImage.current;

    const blobToBase64 = (blob: Blob): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            resolve(reader.result.split(',')[1]);
          } else {
            reject(new Error("Failed to convert blob to base64"));
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };

    // Strategy 1: Direct Fetch (Best for Supabase Public Buckets if CORS allowed)
    try {
      console.log("Fetching logo directly...");
      const response = await fetch(url, { method: 'GET', mode: 'cors' });
      if (response.ok) {
        const blob = await response.blob();
        const base64 = await blobToBase64(blob);
        cachedRefImage.current = base64;
        return base64;
      }
    } catch (e) {
      console.warn("Direct fetch failed, attempting proxy...", e);
    }

    // Strategy 2: Reliable Proxy (Fall back if Vercel deployment has strict CORS issues)
    try {
      console.log("Fetching logo via proxy...");
      // Using corsproxy.io as a reliable fallback
      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      if (response.ok) {
        const blob = await response.blob();
        const base64 = await blobToBase64(blob);
        cachedRefImage.current = base64;
        return base64;
      }
    } catch (e) {
      console.error("Proxy fetch failed", e);
    }

    return null;
  };

  const generate = async () => {
    if (!prompt || loading) return;
    const apiKey = process.env.API_KEY || (window as any).process?.env?.API_KEY;
    if (!apiKey) {
        setError("API Key not found.");
        return;
    }

    setLoading(true);
    setGeneratedImg(null);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey });
      const base64Ref = await getBase64FromUrl(LOGO_URL);
      
      if (!base64Ref) {
        throw new Error("Could not load the reference image of Luna. Please check your connection.");
      }

      const parts: any[] = [];
      parts.push({ inlineData: { data: base64Ref, mimeType: 'image/png' } });
      
      parts.push({ text: `
      Role: Expert Image Editor.
      Input: You have been provided with a specific reference image of a cat named Luna.
      Command: Edit the image to make Luna appear as if she is ${prompt}.
      
      STRICT CONSTRAINTS (Zero Tolerance for Hallucination):
      1. PRESERVE IDENTITY: You must use the EXACT cat from the reference image. Do not generate a new cat. Do not change the cat's face, eye color, fur pattern, or body shape.
      2. PRESERVE STYLE: If the reference is a photo, keep it photorealistic. If it's a drawing, keep it a drawing.
      3. COMPOSITION: Keep the cat in the same pose if possible, just overlay the clothing/accessories naturally.
      4. OUTPUT: Return only the edited image.
      ` });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: { parts: parts },
      });

      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            setGeneratedImg(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong generating the outfit.");
    } finally {
      setLoading(false);
    }
  };

  const handleRandom = () => {
    const randomPrompt = WARDROBE_PROMPTS[Math.floor(Math.random() * WARDROBE_PROMPTS.length)];
    setPrompt(randomPrompt);
  };

  return (
    <section id="wardrobe" className="py-24 px-4 bg-[#FFF8F0]">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-5xl text-[#8B4513]">LUNA'S WARDROBE</h2>
          <p className="text-2xl text-[#4A3728]">Dress up the queen. Same cat, new drip.</p>
          
          <div className="sketch-border bg-white p-6 space-y-4 text-black rounded-xl">
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="E.g. wearing a pink tutu and ballet shoes..."
              className="w-full h-40 border-2 border-[#D2B48C] p-4 text-xl font-sans rounded-lg focus:border-[#8B4513] outline-none"
            />
            {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                </div>
            )}
            <div className="flex gap-4">
              <button 
                onClick={handleRandom}
                disabled={loading}
                className="w-1/3 bg-[#D2B48C] text-white text-xl py-4 sketch-button border-2 border-[#4A3728] rounded-lg hover:bg-[#b08d55] disabled:opacity-50"
              >
                RANDOM 🎲
              </button>
              <button 
                onClick={generate} 
                disabled={loading}
                className="w-2/3 bg-[#8B4513] text-white text-2xl py-4 sketch-button border-2 border-[#4A3728] rounded-lg hover:bg-[#6b350e] disabled:opacity-50"
              >
                {loading ? "STYLING..." : "DRESS UP LUNA"}
              </button>
            </div>
          </div>
        </div>

        <div className="sketch-border bg-white min-h-[400px] flex items-center justify-center p-4 relative rounded-xl">
          {generatedImg ? (
            <div className="relative w-full">
              <img src={generatedImg} className="w-full border-2 border-[#4A3728] rounded-lg" />
              <a 
                href={generatedImg} 
                download="luna-outfit.png" 
                className="absolute bottom-4 right-4 bg-[#8B4513] text-white border-2 border-[#4A3728] px-4 py-2 sketch-button rounded-lg"
              >
                SAVE OUTFIT
              </a>
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center gap-4 opacity-50">
               <img src={LOGO_URL} className="w-32 h-32 grayscale" />
               <div className="text-[#D2B48C] text-2xl text-center font-bold">
                 LUNA IS WAITING<br/>FOR HER OUTFIT
               </div>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

const BuySection = () => {
  return (
    <section id="buy" className="py-24 px-4 text-center bg-white">
      <h2 className="text-6xl text-[#8B4513] mb-16">HOW TO BUY</h2>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-[#4A3728]">
        <div className="bg-[#FFF8F0] p-8 sketch-border rotate-2 hover:rotate-0 transition-transform">
          <h3 className="text-4xl mb-4 bg-[#D2B48C] text-white inline-block px-2 border-2 border-[#4A3728] rounded">STEP 1</h3>
          <p className="text-2xl">Create a Wallet (Phantom or Solflare).</p>
        </div>
        <div className="bg-[#FFF8F0] p-8 sketch-border -rotate-2 hover:rotate-0 transition-transform">
          <h3 className="text-4xl mb-4 bg-[#D2B48C] text-white inline-block px-2 border-2 border-[#4A3728] rounded">STEP 2</h3>
          <p className="text-2xl">Send $SOL to your wallet.</p>
        </div>
        <div className="bg-[#FFF8F0] p-8 sketch-border rotate-1 hover:rotate-0 transition-transform">
          <h3 className="text-4xl mb-4 bg-[#8B4513] text-white inline-block px-2 border-2 border-[#4A3728] rounded">STEP 3</h3>
          <p className="text-2xl mb-4">Go to <a href={`https://pump.fun/${CONTRACT_ADDRESS}`} target="_blank" className="underline decoration-wavy decoration-[#8B4513]">PUMP.FUN</a></p>
          <p className="text-lg w-full">Connect wallet & swap SOL for $LUNA.</p>
        </div>
      </div>
    </section>
  );
};

const Chart = () => {
  return (
    <section className="px-4 pb-24 bg-white">
      <div className="max-w-6xl mx-auto sketch-border bg-[#4A3728] p-2 h-[600px] rounded-xl overflow-hidden">
        <iframe 
          src={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark`}
          className="w-full h-full border-0"
          loading="lazy"
          title="DexScreener Chart"
        />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />
      <Hero />
      <MemeGallery />
      <About />
      <MemeGallery />
      <CommunityVibes />
      <LunaWardrobe />
      <BuySection />
      <Chart />
      
      <footer className="bg-[#4A3728] text-[#D2B48C] py-12 text-center border-t-4 border-[#8B4513]">
        <div className="flex justify-center gap-4 mb-8">
           <img src={LOGO_URL} className="w-24 h-24 rounded-full border-4 border-white" />
        </div>
        <div className="flex justify-center gap-4 mb-6">
           <a href={X_LINK} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D2B48C]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
           </a>
        </div>
        <h2 className="text-6xl mb-4 text-white">LUNA</h2>
        <p className="text-xl">THE QUEEN OF SOLANA.</p>
        <p className="mt-8 text-sm text-gray-500 font-sans">© 2026 Luna Cult.</p>
      </footer>
    </div>
  );
};

export default App;
