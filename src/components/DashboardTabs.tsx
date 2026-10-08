import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Summary, LayoutGrid } from "lucide-react";

import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="Overview">
      <TabsList>
        <TabsTrigger value={"Overview"}>
          <Summary className="h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value={"Category"}>
          <LayoutGrid className="h-4 w-4" />
          By Category
        </TabsTrigger>
      </TabsList>
      <TabsContent value={"Overview"}>
        <OverviewCards />
      </TabsContent>
      <TabsContent value={"Category"}>
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
