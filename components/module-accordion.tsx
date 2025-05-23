"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

interface Module {
  id: string
  title: string
  description: string
  topics: {
    title: string
    subtopics?: string[]
  }[]
}

interface ModuleAccordionProps {
  modules: Module[]
}

export default function ModuleAccordion({ modules }: ModuleAccordionProps) {
  const [openModule, setOpenModule] = useState<string | null>("module-1")

  const colors = ["emerald", "teal", "cyan", "blue", "indigo", "purple", "pink"]

  return (
    <Accordion
      type="single"
      collapsible
      value={openModule || undefined}
      onValueChange={setOpenModule}
      className="w-full"
    >
      {modules.map((module, index) => {
        const color = colors[index % colors.length]
        return (
          <AccordionItem
            key={module.id}
            value={module.id}
            className="border border-slate-700/50 rounded-lg mb-4 overflow-hidden bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-slate-700/30 transition-colors">
              <div className="flex items-center text-left">
                <div
                  className={`bg-${color}-500/20 text-${color}-400 h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-${color}-500/30`}
                >
                  {module.id.split("-")[1]}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">{module.title}</h3>
                  <p className="text-sm text-slate-400">{module.description}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="mt-4 space-y-6">
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex}>
                    <h4 className="font-medium text-lg mb-2 text-white">{topic.title}</h4>
                    {topic.subtopics && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {topic.subtopics.map((subtopic, idx) => (
                          <li key={idx} className="flex items-start gap-2 group">
                            <CheckCircle
                              className={`h-5 w-5 text-${color}-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300`}
                            />
                            <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                              {subtopic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
