import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, DollarSign, GraduationCap, LineChart, User } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function ValueProposition() {
  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <AnimatedSection className="container relative z-10">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 ">
            Más que un precio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            ¿Por qué esta formación cuesta lo que cuesta?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Antes de hablar de precios, hablemos de{" "}
            <span className="text-emerald-400 font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              valor
            </span>
            . Esta no es una serie de videítos grabados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="relative group">
            <Card className="bg-slate-800/50 border-slate-700/50 h-full pl-4 hover:bg-slate-700/50 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <Brain className="h-8 w-8 text-emerald-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Formación completa y profunda</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      Aprenderás desde cómo funciona una computadora a nivel de bits hasta cómo implementar IA en el
                      frontend. No son "videítos" ni tutoriales sueltos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
              1
            </div>
          </div>

          <div className="relative group">
            <Card className="bg-slate-800/50 border-slate-700/50 h-full pl-4 hover:bg-slate-700/50 transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <Code className="h-8 w-8 text-teal-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Mentoría directa y personalizada</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      No es solo contenido. Recibirás feedback directo, correcciones de código y guía personalizada
                      durante todo el proceso.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className=" absolute -top-3 -left-3 w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
              2
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 md:p-10 max-w-5xl mx-auto mb-12 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">
            <LineChart className="h-6 w-6 inline-block mr-2 text-emerald-400" />
            ¿Y si lo comparamos?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: User,
                title: "Profesor Particular",
                price: "$10.000 ARS",
                period: "por hora",
                desc: "Sin estructura ni proyecto final",
                color: "orange",
              },
              {
                icon: DollarSign,
                title: "Curso en CoderHouse",
                price: "$39.000+ ARS",
                period: "por mes",
                desc: "Necesitas 12 para formación completa",
                color: "blue",
              },
              {
                icon: GraduationCap,
                title: "Bootcamp LATAM",
                price: "$300-1000 USD",
                period: "programa completo",
                desc: "Metodología genérica, poca profundidad",
                color: "purple",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900/50 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-${item.color}-500/20 mb-4 group-hover:bg-${item.color}-500/30 transition-all duration-300 group-hover:scale-110`}
                >
                  <item.icon className={`h-7 w-7 text-${item.color}-400`} />
                </div>
                <h4 className="font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-3xl font-bold mb-1 text-white">{item.price}</p>
                <p className="text-slate-400 text-sm">{item.period}</p>
                <p className="mt-3 text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Esta formación fue creada con otra filosofía
          </h3>
          <p className="text-lg text-slate-400 mb-6">
            La de construir{" "}
            <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold">
              creadores
            </span>
            , no solo coders. Vas a salir con la capacidad de pensar, construir y resolver como alguien que realmente
            entiende cómo funciona la tecnología moderna.
          </p>
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Esta inversión en tu futuro no tiene comparación
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
