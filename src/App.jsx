import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Heart, Send } from 'lucide-react'
import HeroSpline from './components/HeroSpline'
import AnimatedSection from './components/AnimatedSection'
import RSVPForm from './components/RSVPForm'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Spline */}
      <header className="relative">
        <div className="absolute inset-0">
          <HeroSpline />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="uppercase tracking-[0.4em] text-sm text-white/70 mb-6">Undangan Pernikahan</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Raka & Nanda
            </h1>
            <p className="mt-4 text-white/70">
              Merayakan cinta dalam sentuhan modern dan interaktif
            </p>
            <a href="#rundown" className="inline-flex items-center gap-2 mt-8 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
              Jelajahi Undangan <Send className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </header>

      {/* Couple Intro */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-3"><Heart className="w-6 h-6 text-pink-300"/> Raka Pratama</h2>
            <p className="text-white/70">Putra pertama dari Bpk. Ahmad dan Ibu Sari</p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-2 flex items-center gap-3"><Heart className="w-6 h-6 text-pink-300"/> Nanda Ayu</h2>
            <p className="text-white/70">Putri kedua dari Bpk. Budi dan Ibu Lina</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Date & Venue */}
      <AnimatedSection className="max-w-6xl mx-auto px-6 mt-12" id="rundown">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur border border-white/10">
            <Calendar className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Akad</h3>
            <p className="text-white/70">Sabtu, 12 Oktober 2025</p>
            <p className="text-white/70">08.00 WIB</p>
          </div>
          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur border border-white/10">
            <Calendar className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resepsi</h3>
            <p className="text-white/70">Sabtu, 12 Oktober 2025</p>
            <p className="text-white/70">11.00 - 14.00 WIB</p>
          </div>
          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur border border-white/10">
            <MapPin className="w-8 h-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lokasi</h3>
            <p className="text-white/70">Grand Hall Jakarta</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm text-white underline-offset-4 hover:underline">Lihat di Google Maps</a>
          </div>
        </div>
      </AnimatedSection>

      {/* RSVP */}
      <AnimatedSection className="max-w-3xl mx-auto px-6 mt-16 mb-24">
        <div className="rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 backdrop-blur border border-white/10">
          <h3 className="text-2xl font-semibold mb-2">Konfirmasi Kehadiran</h3>
          <p className="text-white/70 mb-6">Mohon isi formulir berikut untuk konfirmasi kehadiranmu.</p>
          <RSVPForm />
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="text-center text-white/60 pb-12">
        Dibuat dengan cinta • 2025
      </footer>
    </div>
  )
}

export default App
