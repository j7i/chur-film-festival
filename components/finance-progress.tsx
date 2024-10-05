import { Progress } from "@/components/ui/progress";
import { FunctionComponent } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface FinanceProgressProps {
  className: string;
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
    <div className={cn(className, "relative")}>
      <div
        className="absolute top-12 left-0 transform -translate-x-1/2"
        style={{ left: `${financedPercentage}%` }}
      >
        <Badge variant="outline">{formatCurrency(financed)}</Badge>
      </div>
      <div
        className="absolute -top-5 z-20 bottom-12 h-16 border-black border-l-2"
        style={{ left: `${financedPercentage}%` }}
      />

      <div
        className="absolute top-12 left-0 transform -translate-x-1/2"
        style={{ left: `${restructuringPercentage}%` }}
      >
        <Badge variant="outline">{formatCurrency(restructuring)}</Badge>
        <div className="absolute mt-2">
          Durchführung mit Umstrukturierung möglich
        </div>
      </div>
      <div
        className="absolute -top-5 z-20 bottom-12 h-16 border-dashed border-black border-l-2"
        style={{ left: `${restructuringPercentage}%` }}
      />

      <div className="absolute top-12 right-0 transform translate-x-1/2">
        <Badge variant="default">{formatCurrency(total)}</Badge>
        <div className="absolute mt-2">Durchführung gesichert</div>
      </div>

      <Progress className="h-6" value={financedPercentage} max={total} />
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
