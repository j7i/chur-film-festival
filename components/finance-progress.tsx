import { Progress } from "@/components/ui/progress";
import { FunctionComponent } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface FinanceProgressProps {
  className?: string;
}

export const FinanceProgress: FunctionComponent<FinanceProgressProps> = ({
  className,
}) => {
  const total = 330000;
  const financed = 52000;
  const restructuring = 250000;

  const financedPercentage = (financed / total) * 100;
  const restructuringPercentage = (restructuring / total) * 100;
  return (
    <div className={cn(className, "h-[160px] md:h-unset pr-[120px] md:pr-6")}>
      <div className="relative w-full">
        <div
          className="absolute top-12 left-0 transform -translate-x-1/2"
          style={{ left: `${financedPercentage}%` }}
        >
          <Badge className="border-dark-red" variant="outline">
            {formatCurrency(financed)}
          </Badge>
        </div>
        <div
          className="absolute top-0 z-20 bottom-12 h-11 border-dark-red border-l-2"
          style={{ left: `${financedPercentage}%` }}
        />

        <div
          className="absolute top-[80px] md:top-12 left-0 transform -translate-x-1/2"
          style={{ left: `${restructuringPercentage}%` }}
        >
          <Badge className="border-artsy-orange" variant="outline">
            {formatCurrency(restructuring)}
          </Badge>
          <div className="absolute mt-2 text-sm md:text-lg">
            Durchführung mit Umstrukturierung möglich
          </div>
        </div>
        <div
          className="absolute top-0 z-20 bottom-12 h-[76px] md:h-11 border-dashed border-foreground border-l-2"
          style={{ left: `${restructuringPercentage}%` }}
        />

        <div className="absolute -top-[2px] md:top-12 -right-[24px] md:right-0 transform translate-x-1/2 z-10">
          <Badge
            className="h-6 md:h-unset rounded-l-none md:rounded-l-full"
            variant="default"
          >
            {formatCurrency(total)}
          </Badge>
          <div className="absolute mt-[2px] md:mt-2 w-[220px] md:w-auto text-sm md:text-lg">
            Durchführung gesichert
          </div>
        </div>

        <Progress className="h-6" value={financedPercentage} max={total} />
      </div>
    </div>
  );
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
