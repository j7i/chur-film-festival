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
import { Cross1Icon } from "@radix-ui/react-icons";

export const SubscriptionForm = () => {
  const [isSubscribing, setIsSubscribing] = useState(false);

  return (
    <>
      {isSubscribing ? (
        <>
        <Button variant={"ghost"} onClick={() => setIsSubscribing(false)} className="absolute top-2 right-2">
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
  ["first-name"]: z.string().min(2, {
    message: "Dein Vorname muss mindestens 2 Zeichen lang sein.",
  }),
  ["last-name"]: z.string().min(2, {
    message: "Dein Nachname muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte gib eine gültige E-Mail-Adresse ein.",
  }),
});

const NewsletterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ["first-name"]: "",
      ["last-name"]: "",
    },
    mode: "onBlur",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 w-full pb-6">
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
        <Button type="submit" disabled className="w-full">
          Newsletter abbonieren
        </Button>
      </form>
    </Form>
  );
};
