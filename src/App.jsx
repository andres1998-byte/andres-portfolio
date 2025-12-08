import './App.css'
import Navbar from './components/NavBar'
import Experience from './components/Experience'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from './components/Hero'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function AppContent() {

  return (
    <div
      className="
        min-h-screen 
       bg-slate-50 text-slate-900 
       dark:bg-slate-950 dark:text-slate-100
       transition-colors duration-300
      "
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 space-y-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
