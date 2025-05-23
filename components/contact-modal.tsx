"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <Card
        className={`relative w-full max-w-lg bg-slate-800/95 border-slate-700/50 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <CardHeader className="relative z-10 text-center pb-4">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                <Sparkles className="h-8 w-8 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-lg opacity-50 animate-glow"></div>
            </div>
          </div>
          <CardTitle className="text-slate-100 ext-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text">
            ¡Excelente decisión! 🚀
          </CardTitle>

          <p className="text-slate-400 mt-2">Estás a un paso de comenzar tu carrera en tecnología</p>
        </CardHeader>

        <CardContent className="relative z-10 space-y-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Contáctame directamente para asegurar tu cupo:</h3>

            <div className="space-y-4">
              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300">
                  <MessageCircle className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-white">WhatsApp</p>
                  <p className="text-emerald-400 font-mono">+54 9 264 5267544</p>
                </div>
              </div>
            </div>
          </div>

        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg p-4 border border-emerald-500/20">
            <p className="text-sm text-slate-300 text-center">
              <span> DALE HDP NO SEAS RATA Y PAGA</span>
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all duration-300"
            >
              Cerrar
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5492645267544?text=Hola PEDRITOOOOOO! Vengo de la landing page y quiero inscribirme al bootcamp",
                  "_blank",
                )
              }
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contactar por WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
