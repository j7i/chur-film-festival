import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import { SubscriptionForm } from "./subsription-handling";

export const NewsletterSubscription: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <Card className={cn("md:max-w-[380px] w-full", className)}>
      <CardHeader>
        <CardTitle className="mb-2">Neuigkeiten</CardTitle>
        <CardDescription>
          Wir informieren dich mit Neuigkeiten rund um das Churer Filmfestival.
        </CardDescription>
      </CardHeader>
      <SubscriptionForm />
    </Card>
  );
};
