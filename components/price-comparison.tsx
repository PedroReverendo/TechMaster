"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

export default function PriceComparison() {
  const [isMonthly, setIsMonthly] = useState(false)

const plans = [
  {
    name: "Universidades (Austral)",
    description: "Carrera tradicional de 5 años",
    priceMonthly: "ARS 1.500.000",
    priceTotal: "ARS 10.500.000/año",
    features: [
      { text: "Título universitario", included: true },
      { text: "Duración: 5 años", included: false },
      { text: "Enfoque teórico tradicional", included: true },
      { text: "Poca práctica aplicada", included: false },
      { text: "Sin proyectos reales", included: false },
      { text: "Sin mentorías personalizadas", included: false },
    ],
    summary: "🧠 Formación tradicional, lenta y costosa",
    popular: false,
    cta: "Comparar",
    ctaVariant: "outline" as const,
    color: "slate",
  },
  {
    name: "TechMaster Bootcamp",
    description: "Programa intensivo de 4 meses",
    priceMonthly: "ARS 78.869 / 2.7 HYPE",
    priceTotal: "ARS 119.789 / 4 HYPE",
    features: [
      { text: "Certificado profesional", included: true },
      { text: "Duración: 2 meses", included: true },
      { text: "Contenido teórico y práctico", included: true },
      { text: "5 proyectos reales", included: true },
      { text: "Mentorías personalizadas", included: true },
      { text: "Acceso de por vida al contenido", included: true },
      { text: "Todas las clases quedan grabadas", included: true },
    ],
    summary: "⚡ Formación moderna, técnica y accesible",
    popular: true,
    cta: "¡Inscribirme Ahora!",
    ctaVariant: "default" as const,
    discount: "Menos de 1/10 del costo universitario",
    color: "emerald",
  },
  {
    name: "Cursos Online",
    description: "Plataformas de aprendizaje online",
    priceMonthly: "ARS 80.000",
    priceTotal: "ARS 389.000+",
    features: [
      { text: "Certificados sin validez profesional", included: true },
      { text: "Duración sin estructura definida", included: false },
      { text: "Contenido teórico grabado", included: true },
      { text: "Ejercicios limitados", included: true },
      { text: "Proyectos guiados básicos", included: true },
      { text: "Sin mentorías personalizadas", included: false },
    ],
    summary: "🎥 Contenido grabado sin seguimiento real",
    popular: false,
    cta: "Comparar",
    ctaVariant: "outline" as const,
    color: "blue",
  },
]

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="bg-slate-800/50 p-1 rounded-full flex items-center backdrop-blur-sm border border-slate-700/50">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              !isMonthly
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                : "text-slate-300 hover:text-white"
            }`}
            onClick={() => setIsMonthly(false)}
          >
            Precio Total
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isMonthly
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                : "text-slate-300 hover:text-white"
            }`}
            onClick={() => setIsMonthly(true)}
          >
            Precio Mensual
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative bg-slate-800/50 border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 group ${
              plan.popular ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10" : "hover:border-slate-600/50"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg">
                  Más Popular
                </Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-white group-hover:text-slate-100 transition-colors duration-300">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-3xl font-bold text-white">{isMonthly ? plan.priceMonthly : plan.priceTotal}</p>
                {plan.discount && (
                  <p className="text-emerald-400 text-sm font-medium mt-1 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    {plan.discount}
                  </p>
                )}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 group/item">
                    {feature.included ? (
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                    ) : (
                      <XCircle className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`transition-colors duration-300 ${
                        feature.included ? "text-slate-300 group-hover/item:text-white" : "text-slate-500"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={plan.ctaVariant}
                className={`w-full transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-emerald-500/25"
                    : "border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500"
                }`}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
