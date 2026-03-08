import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const PHOTOS = [
  { src: '/assets/photo1.jpg', caption: 'Love' },
  { src: '/assets/photo2.jpg', caption: 'Soul' },
  { src: '/assets/photo3.jpg', caption: 'Gem' },
  { src: '/assets/photo4.jpg', caption: 'Everything' },
];

export default function PhotoMemoryPage({ onNext }) {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center p-4 md:p-8 w-full min-h-screen pb-24"
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-romantic-200 to-pink-300 drop-shadow-md mb-12 flex items-center gap-4"
      >
        <Heart className="text-pink-400 w-8 h-8 fill-current animate-pulse" />
        Our Memories
        <Heart className="text-pink-400 w-8 h-8 fill-current animate-pulse" />
      </motion.h2>

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
      >
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            variants={itemVars}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2, zIndex: 10 }}
            className={`group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border-4 border-romantic-800/50 bg-romantic-950`}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            
            {/* Caption */}
            <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col items-center translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-3xl font-serif italic font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                {photo.caption}
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '40%' }}
                transition={{ duration: 1 }}
                className="h-1 bg-gradient-to-r from-transparent via-romantic-400 to-transparent mt-2"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="mt-16 group flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-romantic-600 to-pink-500 text-white rounded-full font-bold text-xl cursor-pointer shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all z-20 relative"
      >
        Next
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </motion.div>
  );
}
