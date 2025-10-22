import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown, ArrowUp, Clock, TrendingUp, Users, Zap } from "lucide-react"

const kpis = [
  {
    title: "Turnaround Time",
    value: "35%",
    change: -35,
    icon: Clock,
    description: "Reduction in process time",
    color: "text-accent",
  },
  {
    title: "Time Savings",
    value: "24hrs",
    change: 20,
    icon: Zap,
    description: "Staff hours saved/month",
    color: "text-primary",
  },
  {
    title: "Reporting Speed",
    value: "50%",
    change: 50,
    icon: TrendingUp,
    description: "Faster executive reports",
    color: "text-chart-3",
  },
  {
    title: "Decision Making",
    value: "25%",
    change: 25,
    icon: Users,
    description: "Faster stakeholder decisions",
    color: "text-chart-2",
  },
]

export function KPICards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = kpi.icon
        const isPositive = kpi.change > 0
        const ChangeIcon = isPositive ? ArrowUp : ArrowDown

        return (
          <Card key={kpi.title} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                  <p className="text-3xl font-bold text-card-foreground">{kpi.value}</p>
                  <div className="flex items-center gap-1">
                    <ChangeIcon className={`h-4 w-4 ${isPositive ? "text-accent" : "text-accent"}`} />
                    <span className={`text-sm font-medium ${isPositive ? "text-accent" : "text-accent"}`}>
                      {Math.abs(kpi.change)}%
                    </span>
                    <span className="text-xs text-muted-foreground ml-1">{kpi.description}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-secondary/50`}>
                  <Icon className={`h-6 w-6 ${kpi.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
