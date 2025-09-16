import { ChartAreaInteractive } from "@/components/ui/chart-area";
import { SectionCards } from "@/components/ui/section-cards";

export default function Home() {
  return (
    <section className="space-y-4">
      <SectionCards />
      <ChartAreaInteractive />
    </section>
  );
}
