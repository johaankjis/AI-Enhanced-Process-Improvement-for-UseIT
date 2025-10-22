"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Clock, AlertCircle } from "lucide-react"

const workflowSteps = [
  {
    name: "Request Intake",
    status: "completed",
    time: "2min",
    improvement: "60% faster",
    aiEnabled: true,
  },
  {
    name: "AI Routing",
    status: "completed",
    time: "< 1min",
    improvement: "85% faster",
    aiEnabled: true,
  },
  {
    name: "Task Assignment",
    status: "in-progress",
    time: "5min",
    improvement: "40% faster",
    aiEnabled: true,
  },
  {
    name: "Resolution",
    status: "pending",
    time: "15min",
    improvement: "25% faster",
    aiEnabled: false,
  },
  {
    name: "Documentation",
    status: "pending",
    time: "3min",
    improvement: "70% faster",
    aiEnabled: true,
  },
]

export function ProcessWorkflow() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground">Process Workflow</CardTitle>
          <Badge variant="secondary" className="bg-primary/20 text-primary border-0">
            AI-Optimized
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {workflowSteps.map((step, index) => (
          <div key={step.name}>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                {step.status === "completed" && <CheckCircle2 className="h-6 w-6 text-accent" />}
                {step.status === "in-progress" && <Clock className="h-6 w-6 text-primary" />}
                {step.status === "pending" && <AlertCircle className="h-6 w-6 text-muted-foreground" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-card-foreground">{step.name}</p>
                  {step.aiEnabled && (
                    <Badge variant="outline" className="text-xs border-primary/50 text-primary">
                      AI
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{step.time}</span>
                  <span className="text-accent">↓ {step.improvement}</span>
                </div>
              </div>

              {index < workflowSteps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              )}
            </div>

            {index < workflowSteps.length - 1 && <div className="ml-3 mt-2 mb-2 h-8 w-0.5 bg-border" />}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
