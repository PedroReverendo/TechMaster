"use client"

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-emerald-400/20 rounded-full animate-bounce delay-0"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-teal-400/20 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-cyan-400/20 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute top-3/4 right-1/6 w-5 h-5 bg-purple-400/20 rounded-full animate-bounce delay-3000"></div>

      {/* Floating code symbols */}
      <div className="absolute top-1/5 right-1/3 text-emerald-400/10 text-2xl animate-pulse delay-500">{"</>"}</div>
      <div className="absolute top-2/5 left-1/5 text-teal-400/10 text-xl animate-pulse delay-1500">{"{ }"}</div>
      <div className="absolute top-3/5 right-1/5 text-cyan-400/10 text-lg animate-pulse delay-2500">{"[ ]"}</div>
    </div>
  )
}
