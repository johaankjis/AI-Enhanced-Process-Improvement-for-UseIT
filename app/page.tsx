import { DashboardHeader } from "@/components/dashboard-header"
import { KPICards } from "@/components/kpi-cards"
import { ProcessWorkflow } from "@/components/process-workflow"
import { AutomationTracker } from "@/components/automation-tracker"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { DocumentationSection } from "@/components/documentation-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <KPICards />
        <div className="grid gap-6 lg:grid-cols-2">
          <ProcessWorkflow />
          <AutomationTracker />
        </div>
        <AnalyticsCharts />
        <DocumentationSection />
      </main>
    </div>
  )
}
