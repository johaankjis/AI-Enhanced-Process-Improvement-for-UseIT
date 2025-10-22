"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const turnaroundData = [
  { month: "Jan", before: 45, after: 28 },
  { month: "Feb", before: 48, after: 26 },
  { month: "Mar", before: 46, after: 25 },
  { month: "Apr", before: 47, after: 24 },
  { month: "May", before: 44, after: 22 },
  { month: "Jun", before: 45, after: 20 },
]

const automationAdoption = [
  { week: "W1", tasks: 120, automated: 35 },
  { week: "W2", tasks: 135, automated: 52 },
  { week: "W3", tasks: 128, automated: 68 },
  { week: "W4", tasks: 142, automated: 89 },
  { week: "W5", tasks: 138, automated: 102 },
  { week: "W6", tasks: 145, automated: 118 },
]

const efficiencyGains = [
  { category: "Routing", gain: 85 },
  { category: "Documentation", gain: 70 },
  { category: "Intake", gain: 60 },
  { category: "Assignment", gain: 40 },
  { category: "Resolution", gain: 25 },
]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Turnaround Time Trend</CardTitle>
          <p className="text-sm text-muted-foreground">Average resolution time (minutes)</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={turnaroundData}>
              <defs>
                <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--muted-foreground))" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="before"
                stroke="hsl(var(--muted-foreground))"
                fillOpacity={1}
                fill="url(#colorBefore)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="after"
                stroke="hsl(var(--accent))"
                fillOpacity={1}
                fill="url(#colorAfter)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Automation Adoption</CardTitle>
          <p className="text-sm text-muted-foreground">Weekly task automation rate</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={automationAdoption}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="tasks" fill="hsl(var(--muted))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="automated" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="bg-card border-border lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-card-foreground">Efficiency Gains by Category</CardTitle>
          <p className="text-sm text-muted-foreground">Percentage improvement across workflow stages</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={efficiencyGains} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis
                dataKey="category"
                type="category"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                width={100}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="gain" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
