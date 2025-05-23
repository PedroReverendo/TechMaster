"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Database, Server, Zap } from "lucide-react"
import ModuleAccordion from "@/components/module-accordion"
import { modules } from "@/lib/course-data"
import PriceComparison from "@/components/price-comparison"
import ValueProposition from "@/components/value-proposition"
import AnimatedSection from "@/components/animated-section"
import FloatingElements from "@/components/floating-elements"
import ContactModal from "@/components/contact-modal"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <FloatingElements />

      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white py-3 px-4 text-center text-sm font-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 animate-pulse"></div>
        <span className="relative z-10">¡ÚLTIMOS CUPOS DISPONIBLES! 🔥 Inscripciones cierran en 48 horas</span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <Code className="h-6 w-6 text-emerald-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              TechMaster
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#programa"
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:scale-105"
            >
              Programa
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-all duration-300 hover:scale-105"
            >
              Beneficios
            </a>
            <a
              href="#precios"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              Precios
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-300 hover:text-purple-400 transition-all duration-300 hover:scale-105"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
              onClick={() => setIsModalOpen(true)}
            >
              Inscribirme
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <AnimatedSection className="container relative z-10 py-20 md:py-32 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
              Conviértete en Programador Profesional en{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                2 Meses
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-3xl leading-relaxed">
              Desarrolla tus habilidades y comienza tu carrera soñada con nuestro bootcamp de programación de élite.
              Aprende desde cero con mentores expertos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                onClick={() => setIsModalOpen(true)}
              >
                ¡Quiero Inscribirme!
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-emerald-500 transition-all duration-300 hover:scale-105"
              >
                Ver Plan de Estudios
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl w-full">
              {[
                { icon: CheckCircle, text: "Clases en vivo con expertos (Pedro Reverendo)", color: "emerald" },
                { icon: CheckCircle, text: "Proyectos reales para tu portfolio + de 5 proyectos", color: "emerald" },
                { icon: CheckCircle, text: "Soporte personalizado 24/7 Comunidad de WhatsApp", color: "emerald" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div
                    className={`h-12 w-12 rounded-full bg-${item.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 group-hover:bg-${item.color}-500/30`}
                  >
                    <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                  </div>
                  <p className="text-center text-slate-300 group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <AnimatedSection className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 ">
                ¿Por qué elegirnos?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Beneficios exclusivos de nuestro bootcamp
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Diseñamos un programa completo que te dará todas las herramientas necesarias para triunfar en el mundo
                tech.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Code,
                  title: "Bootcamp de Alta Calidad",
                  desc: "Currículo actualizado con las tecnologías más demandadas y proyectos reales para tu portfolio.",
                  color: "emerald",
                },
                {
                  icon: Database,
                  title: "Opciones de Pago Flexibles",
                  desc: "Elige un plan de pago que funcione para ti y aprende sin preocupaciones financieras.",
                  color: "blue",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group backdrop-blur-sm"
                >
                  <CardHeader>
                    <div
                      className={`h-12 w-12 rounded-full bg-${benefit.color}-500/20 flex items-center justify-center mb-4 group-hover:bg-${benefit.color}-500/30 transition-all duration-300 group-hover:scale-110`}
                    >
                      <benefit.icon className={`h-6 w-6 text-${benefit.color}-400`} />
                    </div>
                    <CardTitle className="text-white group-hover:text-slate-100 transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {benefit.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Program Section */}
        <section id="programa" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <AnimatedSection className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 ">
                Plan de Estudios Completo
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Un programa diseñado para el éxito
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Nuestro currículo está diseñado por expertos de la industria para garantizar que aprendas exactamente lo
                que necesitas.
              </p>
            </div>

            <ModuleAccordion modules={modules} />
          </AnimatedSection>
        </section>

        {/* Value Proposition Section */}
        <ValueProposition />

        {/* Pricing Section */}
        <section id="precios" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <AnimatedSection className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 ">
                Inversión en tu Futuro
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Planes de pago accesibles
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Invierte en tu futuro con planes diseñados para todos los presupuestos.
              </p>
            </div>

            <PriceComparison />
          </AnimatedSection>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <AnimatedSection className="container">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 ">
                Preguntas Frecuentes
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Todo lo que necesitas saber
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Resolvemos tus dudas para que puedas tomar la mejor decisión para tu futuro.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "¿Necesito conocimientos previos de programación?",
                  a: "No, nuestro bootcamp está diseñado para comenzar desde cero. Lo único que necesitas es dedicación y ganas de aprender.",
                },
                {
                  q: "¿Cuál es la carga horaria semanal?",
                  a: "El bootcamp requiere aproximadamente 3-5 horas semanales, incluyendo clases en vivo y trabajo práctico. Las clases son en horarios flexibles para que puedas combinarlas con otras actividades.",
                },
                {
                  q: "¿Qué sucede si no puedo asistir a una clase?",
                  a: "Todas las clases quedan grabadas y disponibles en nuestra plataforma para que puedas verlas cuando te sea conveniente. Además, tendrás acceso a mentores para resolver dudas.",
                },
                {
                  q: "¿Qué tipo de proyectos realizaré durante el bootcamp?",
                  a: "Desarrollarás proyectos reales que podrás incluir en tu portfolio, desde aplicaciones web completas hasta integraciones con IA. Todos los proyectos están diseñados para demostrar tus habilidades a futuros empleadores.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-[1.02] group backdrop-blur-sm"
                >
                  <CardHeader>
                    <CardTitle className="text-lg text-white group-hover:text-slate-100 transition-colors duration-300">
                      {faq.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10"></div>
          <AnimatedSection className="container text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              ¿Listo para transformar tu carrera?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-300">
              Los cupos son limitados y se agotan rápidamente. ¡No pierdas la oportunidad de cambiar tu vida!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              onClick={() => setIsModalOpen(true)}
            >
              ¡Inscribirme Ahora!
            </Button>
          </AnimatedSection>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0 group">
              <Code className="h-6 w-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                TechMaster
              </span>
            </div>
            <div className="flex gap-4">
              {[
                {
                  name: "Facebook",
                  path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                },
                {
                  name: "Twitter",
                  path: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
                },
                {
                  name: "Instagram",
                  path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                },
                {
                  name: "GitHub",
                  path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-slate-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-sm text-center">
            <p className="text-slate-400">© 2025 TechMaster. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
