import { Button } from "@/components/ui/button";
// import type {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
//   tabsListVariants,
// } from "@base-ui/react";

import { Summary, LayoutGrid } from "lucide-react";

export function DashboardTabs() {
  return (
    <div className="w-full">
      <Button variant="outline">
        <Summary className="h-4 w-4" />
        Overview
      </Button>
      <Button variant="outline">
        <LayoutGrid className="h-4 w-4" />
        category
      </Button>
    </div>
  );
}
