"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CardFooter } from "../ui/card";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

export const SubscriptionForm = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);

  return (
    <>
      {isSubscribing ? (
        <>
          <Button
            variant={"ghost"}
            onClick={() => setIsSubscribing(false)}
            className="absolute top-2 right-2"
          >
            <Cross1Icon width={16} height={16} />
          </Button>
          <NewsletterForm />
        </>
      ) : (
        <CardFooter>
          <Button
            variant={"outline"}
            onClick={() => setIsSubscribing(true)}
            className="w-full"
          >
            Ich will informiert bleiben
          </Button>
        </CardFooter>
      )}
    </>
  );
};

const formSchema = z.object({
  ["first-name"]: z
    .string({
      required_error: "Bitte gib deinen Vorname an.",
    })
    .min(2, {
      message: "Bitte gib deinen Vorname an.",
    }),
  ["last-name"]: z
    .string({
      required_error: "Bitte gib deinen Nachname an.",
    })
    .min(2, {
      message: "Bitte gib deinen Nachname an.",
    }),
  email: z
    .string({
      required_error: "Bitte gib deine E-Mail-Adresse an.",
    })
    .email({
      message: "Bitte gib eine gültige E-Mail-Adresse ein.",
    }),
});

const NewsletterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ["first-name"]: "",
      ["last-name"]: "",
      email: "",
    },
    mode: "onBlur",
  });
  const [subscribed, setSubscribed] = useState(false);

  if (subscribed) {
    return (
      <div className="bg-artsy-green rounded-b-lg">
        <div className="flex justify-center items-center p-6">
          <CheckIcon width={40} height={40} className="text-white -ml-6 mr-2" />
          <p className="text-white font-semibold">
            Vielen Dank für dein Interesse.
          </p>
        </div>
      </div>
    );
  }

  if (form.formState.isSubmitted && form.formState.errors) {
    return (
      <div className="bg-destructive rounded-b-lg">
        <div className="flex flex-col justify-center p-6 gap-4">
          <p className="text-white font-semibold">
            Ein unerwarteter Fehler ist aufgetreten. Mache uns bitte via E-Mail
            darauf aufmerksam.
          </p>
          <a
            className="text-white underline underline-offset-4 font-semibold"
            href="mailto:reich@filmfestivalchur.ch"
          >
            reich@filmfestivalchur.ch
          </a>
        </div>
      </div>
    );
  }

  /**
   * Checkout this articel for proper server action implementation later on:
   * @see https://medium.com/@ctrlaltmonique/how-to-use-react-hook-form-zod-with-next-js-server-actions-437aaca3d72d
   */

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async function onSubmit(
          values: z.infer<typeof formSchema>
        ) {
          try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubscribed(true);
            console.log(values);
          } catch {
            return {
              errors: {
                message:
                  "Ein unerwarteter Fehler ist aufgetreten. Mache uns bitte via E-Mail darauf aufmerksam.",
              },
              data: null,
            };
          }
        })}
        className="px-6 w-full pb-6"
      >
        <FormField
          control={form.control}
          name="first-name"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Vorname</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last-name"
          render={({ field }) => (
            <FormItem className="mb-2">
              <FormLabel>Nachname</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting && (
            <Spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Newsletter abbonieren
        </Button>
      </form>
    </Form>
  );
};

const Spinner = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

// We can use the following function to transform Zod errors into a more readable format:
// But we don't need it in this case.
//
// if (error instanceof z.ZodError) {
//   return {
//     errors: transformZodErrors(error),
//     data: null,
//   };
// }
// const transformZodErrors = (error: z.ZodError) => {
//   return error.issues.map((issue) => ({
//     path: issue.path.join("."),
//     message: issue.message,
//   }));
// };
