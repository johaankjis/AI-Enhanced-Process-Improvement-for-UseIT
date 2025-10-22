"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Bot, CheckCircle2, Clock } from "lucide-react"

const automations = [
  {
    name: "Ticket Categorization",
    type: "AI Summarization",
    status: "active",
    efficiency: 92,
    timeSaved: "8hrs/month",
  },
  {
    name: "Auto-Routing",
    type: "Power Automate",
    status: "active",
    efficiency: 88,
    timeSaved: "6hrs/month",
  },
  {
    name: "Report Generation",
    type: "Python Script",
    status: "active",
    efficiency: 95,
    timeSaved: "10hrs/month",
  },
  {
    name: "SLA Monitoring",
    type: "Power Automate",
    status: "testing",
    efficiency: 78,
    timeSaved: "4hrs/month",
  },
]

export function AutomationTracker() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-card-foreground">Task Automation</CardTitle>
          <Badge variant="secondary" className="bg-accent/20 text-accent border-0">
            4 Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {automations.map((automation) => (
          <div key={automation.name} className="space-y-2">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-secondary/50 mt-0.5">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{automation.name}</p>
                  <p className="text-xs text-muted-foreground">{automation.type}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {automation.status === "active" ? (
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                ) : (
                  <Clock className="h-4 w-4 text-primary" />
                )}
                <span className="text-xs text-muted-foreground capitalize">{automation.status}</span>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Efficiency</span>
                <span className="text-card-foreground font-medium">{automation.efficiency}%</span>
              </div>
              <Progress value={automation.efficiency} className="h-1.5" />
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Time Saved</span>
              <span className="text-accent font-medium">{automation.timeSaved}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
