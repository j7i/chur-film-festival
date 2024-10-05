import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MailCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";

export const NewsletterSubscription: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <Card className={cn("max-w-[380px] w-full", className)}>
      <CardHeader>
        <CardTitle>Newsletter</CardTitle>
        <CardDescription>
          Wir informieren dich mit Neuigkeiten rund um das Churer Filmfestival.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <MailCheck />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">E-Mail</p>
          </div>
          {/* <Switch /> */}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant={"default"} disabled className="w-full">
          Ja, ich will informiert bleiben
        </Button>
      </CardFooter>
    </Card>
  );
};
