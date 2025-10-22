"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Download, ExternalLink, FileText, Video } from "lucide-react"

const documentationCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      {
        name: "Dashboard Overview",
        description: "Learn how to navigate and use the UseIT Process Optimization dashboard",
        type: "Guide",
        link: "#",
      },
      {
        name: "Quick Start Tutorial",
        description: "5-minute video walkthrough of key features and workflows",
        type: "Video",
        link: "#",
      },
    ],
  },
  {
    title: "AI Automation",
    icon: FileText,
    items: [
      {
        name: "AI Routing Setup",
        description: "Configure intelligent ticket routing and categorization",
        type: "Guide",
        link: "#",
      },
      {
        name: "Automation Best Practices",
        description: "Optimize your workflow automation for maximum efficiency",
        type: "Guide",
        link: "#",
      },
      {
        name: "Power Automate Integration",
        description: "Connect and configure Power Automate flows",
        type: "Tutorial",
        link: "#",
      },
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: FileText,
    items: [
      {
        name: "Understanding KPIs",
        description: "Deep dive into key performance indicators and metrics",
        type: "Guide",
        link: "#",
      },
      {
        name: "Custom Report Builder",
        description: "Create and export custom analytics reports",
        type: "Tutorial",
        link: "#",
      },
      {
        name: "Data Export Guide",
        description: "Export your data for external analysis and reporting",
        type: "Guide",
        link: "#",
      },
    ],
  },
]

const resources = [
  {
    name: "Process Optimization Playbook",
    description: "Complete guide to IT process improvement strategies",
    size: "2.4 MB",
    format: "PDF",
  },
  {
    name: "AI Implementation Checklist",
    description: "Step-by-step checklist for deploying AI automation",
    size: "156 KB",
    format: "PDF",
  },
  {
    name: "ROI Calculator Template",
    description: "Calculate the return on investment for your optimizations",
    size: "892 KB",
    format: "XLSX",
  },
]

export function DocumentationSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <Card className="bg-card border-border lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-card-foreground">Documentation & Guides</CardTitle>
          <p className="text-sm text-muted-foreground">Learn how to maximize your process optimization results</p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {documentationCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <AccordionItem key={category.title} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary/50">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-card-foreground font-medium">{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2 pl-12">
                      {category.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-start justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-medium text-card-foreground">{item.name}</p>
                              <Badge variant="outline" className="text-xs">
                                {item.type}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="flex-shrink-0 ml-2">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Downloadable Resources</CardTitle>
          <p className="text-sm text-muted-foreground">Templates and guides for your team</p>
        </CardHeader>
        <CardContent className="space-y-3">
          {resources.map((resource) => (
            <div key={resource.name} className="p-4 rounded-lg bg-secondary/30 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/20">
                  {resource.format === "PDF" ? (
                    <FileText className="h-4 w-4 text-primary" />
                  ) : (
                    <FileText className="h-4 w-4 text-accent" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground mb-1">{resource.name}</p>
                  <p className="text-xs text-muted-foreground mb-2">{resource.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="secondary" className="text-xs">
                      {resource.format}
                    </Badge>
                    <span>{resource.size}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent">
                <Download className="h-3 w-3" />
                Download
              </Button>
            </div>
          ))}

          <div className="pt-3 border-t border-border">
            <Button variant="ghost" size="sm" className="w-full gap-2 text-primary">
              <Video className="h-4 w-4" />
              Watch Video Tutorials
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
