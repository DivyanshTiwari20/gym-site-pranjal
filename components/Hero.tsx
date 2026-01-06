import React from 'react';
import { Play, Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[80vh] pt-24 pb-12 flex items-center overflow-hidden bg-[#0A0A0A]">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full bg-gradient-to-l from-[#1f0b00] via-[#120500] to-[#0A0A0A] pointer-events-none opacity-90" />
            <div className="absolute top-[10%] right-[-10%] w-[1000px] h-[1000px] bg-brand-orange/15 blur-[150px] rounded-full pointer-events-none animate-pulse" />

            {/* Container widened to max-w-[96rem] (approx 8xl) */}
            <div className="max-w-[96rem] mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="flex flex-col justify-center order-2 lg:order-1 pt-12 lg:pt-0 relative z-20 pl-2 lg:pl-8">

                    <motion.div
                        initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="h-[2px] w-12 bg-brand-orange"></span>
                        <span className="text-brand-orange font-bold uppercase tracking-widest text-sm md:text-base">The Best Fitness Club</span>
                    </motion.div>

                    {/* Headline - Scaled up */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30, filter: 'blur(15px)', scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tight mb-8 font-sans text-white"
                    >
                        Push Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Limits with Us
                        </span>
                    </motion.h1>

                    {/* Subheadline - Scaled up */}
                    <motion.p
                        initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                        animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-gray-400 text-base sm:text-xl max-w-xl mb-8 leading-relaxed font-light"
                    >
                        From beginner to advanced, experience workouts designed to help you achieve peak performance and exceed your fitness goals.
                    </motion.p>

                    {/* Buttons - Scaled up */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: 'blur(8px)', scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex items-center gap-4 sm:gap-8 mb-12 flex-nowrap"
                    >
                        <button className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-6 sm:py-5 sm:px-12 rounded-full shadow-[0_10px_30px_rgba(255,77,0,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group text-base sm:text-lg whitespace-nowrap">
                            Join Now <span className="text-xl sm:text-2xl leading-none group-hover:translate-x-1 transition-transform">»</span>
                        </button>
                        <button className="flex items-center gap-2 sm:gap-4 text-white font-semibold hover:text-brand-orange transition-colors group text-base sm:text-lg whitespace-nowrap">
                            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-brand-orange flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-brand-orange/20">
                                <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-white text-white ml-0.5 sm:ml-1" />
                            </div>
                            <span className="tracking-wide">Watch Video</span>
                        </button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="flex items-center gap-6 mb-10"
                    >
                        <div className="flex -space-x-5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-2 border-[#0A0A0A] overflow-hidden bg-gray-800">
                                    <img src={`https://randomuser.me/api/portraits/men/${i * 20 + 5}.jpg`} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-14 h-14 rounded-full border-2 border-[#0A0A0A] bg-[#1A1A1A] flex items-center justify-center text-gray-400 border-white/10">
                                <Plus className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex text-brand-orange text-sm mb-1 gap-0.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-sm text-gray-400 font-medium">1.7k reviews</p>
                        </div>
                    </motion.div>

                    {/* Tags Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-3 max-w-2xl"
                    >
                        {['Personal Training', 'Strength', 'Group Classes', 'Functional'].map((tag) => (
                            <span key={tag} className="border border-white/10 text-sm text-gray-400 px-6 py-2.5 rounded-full hover:border-brand-orange hover:text-white transition-colors cursor-default backdrop-blur-sm bg-white/5">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Right Content - Animated Hero Image - Significantly Larger */}
                <div className="relative h-full hidden lg:flex items-center justify-end order-1 lg:order-2">

                    {/* Glowing Backlight - Larger */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute right-[-10%] w-[900px] h-[900px] bg-brand-orange/20 blur-[130px] rounded-full"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.9, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="relative z-10 w-full flex justify-end mt-8 lg:mt-12"
                    >
                        {/* Image updated to guy doing gym - high contrast with rounded corners */}
                        {/* Added mt-16/24 to container and object-top to image to fix cropping issues */}
                        <motion.img
                            src="/hero.jpg"
                            alt="Muscular Gym Athlete"
                            className="w-[110%] max-w-[950px] object-cover object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[3rem]"
                            animate={{ y: [-15, 15, -15] }}
                            transition={{
                                repeat: Infinity,
                                duration: 6,
                                ease: "easeInOut"
                            }}
                            style={{
                                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                                filter: 'contrast(1.1) brightness(1.1)'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;