import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { EnvelopeClosedIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { timeline } from "../content/timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Separator } from "@/components/ui/separator";
import { FinanceProgress } from "@/components/finance-progress";
import { NewsletterSubscription } from "@/components/newsletter/newsletter-subscription";

import SVGRaceSquare from "../public/static/shapes/race-square.svg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <div className="bg-dark-red md:p-6 pb-0 flex flex-col md:min-h-[calc(80vh)] md:h-[776px] items-center justify-center relative overflow-hidden">
        {/* <Image
          className="invert-0 dark:invert-100 md:absolute top-9 left-0 z-30"
          src="/static/chur-film-festival-logo.png"
          alt="Next.js logo"
          width={400}
          height={200}
          priority
        /> */}
        <div className="max-w-[1200px] w-full z-10">
          <div className="w-100 flex justify-center">
            {/* mobile */}
            <div className="flex flex-col w-full md:hidden flex justify-center items-center relative">
              {/* Balance the blend mode text while loading the video content */}
              <span className="text-7xl font-extrabold text-black mt-4 absolute px-6">
                Chur <br />
                Film Festival
              </span>
              <div className="overflow-hidden -ml-[32px] w-[calc(100%+64px)] md:bg-stone-200/50 ">
                <iframe
                  src="https://fabiostecher.com/oembed/media?src=https%3a%2f%2fplayer.vimeo.com%2fvideo%2f893279290%3fdnt%3d1%26loop%3d1%26background%3d1%26app_id%3d122963&amp;url=https%3a%2f%2fvimeo.com%2f893279290%3fshare%3dcopy&amp;provider=Vimeo&amp;width=2440&amp;height=1373&amp;hostname=https%3a%2f%2ffabiostecher.com"
                  title="STECHER_Fabio_DirectorsReel_webpage"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  id="bg-vid"
                  className="w-[800px] h-[430px] opacity-90"
                ></iframe>
              </div>
              <h1 className="text-7xl font-extrabold text-white mt-4 absolute mix-blend-difference px-6">
                Chur <br />
                Film Festival
              </h1>
            </div>
            {/* desktop */}
            <div className="w-[1200px] h-[520px] bg-stone-200/50  hidden md:flex justify-center items-center relative">
              <span className="text-[160px] font-black text-white absolute -top-[104px] -left-[39px] z-0">
                Chur
              </span>
              <span className="text-[160px] font-black text-white absolute top-[140px] -left-[39px] z-0">
                Film
              </span>
              <span className="text-[160px] font-black text-white absolute -bottom-[102px] -left-[39px] z-0">
                Festival
              </span>
              <div className="flex justify-center items-center w-full h-full overflow-hidden relative">
                <span className="text-[160px] font-black text-white absolute -top-[104px] -left-[39px] mix-blend-difference z-20">
                  Chur
                </span>
                <span className="text-[160px] font-black text-white absolute top-[140px] -left-[39px] mix-blend-difference z-20">
                  Film
                </span>
                <span className="text-[160px] font-black text-white absolute -bottom-[102px] -left-[39px] mix-blend-difference z-20">
                  Festival
                </span>
                <span className="text-[160px] font-black text-white/80 absolute -top-[104px] -left-[39px] z-30">
                  Chur
                </span>
                <span className="text-[160px] font-black text-white/80 absolute top-[140px] -left-[39px] z-30">
                  Film
                </span>
                <span className="text-[160px] font-black text-white/80 absolute -bottom-[102px] -left-[39px] z-30">
                  Festival
                </span>
                <iframe
                  src="https://fabiostecher.com/oembed/media?src=https%3a%2f%2fplayer.vimeo.com%2fvideo%2f893279290%3fdnt%3d1%26loop%3d1%26background%3d1%26app_id%3d122963&amp;url=https%3a%2f%2fvimeo.com%2f893279290%3fshare%3dcopy&amp;provider=Vimeo&amp;width=2440&amp;height=1373&amp;hostname=https%3a%2f%2ffabiostecher.com"
                  title="STECHER_Fabio_DirectorsReel_webpage"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  id="bg-vid"
                  className="w-[1440px] h-[760px] opacity-90"
                ></iframe>
              </div>
            </div>
            <Image
              src={SVGRaceSquare}
              alt="this project needs some more money"
              width={64}
              height={64}
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8">
        <div className="max-w-[800px] w-full ">
          <h2 className="text-5xl md:text-6xl font-extralight mt-16 mb-6">
            Im Sommer, 2025
          </h2>
          <h3 className="text-3xl  font-bold leading-10 mb-4">
            Das Chur Film Festival als kulturelle Plattform, welche die
            Filmvielfalt zur Bündner Bevölkerung bringt.
          </h3>
          <p className="text-lg leading-9 mb-8">
            Als Knotenpunkt für Film- und Kunstliebhaber verbindet und
            inspiriert das Festival die Gemeinschaft und lokale
            Filmemacher:innen. Unser Hauptziel ist die Förderung des Schweizer
            Films, des Storytellings und die Bereitstellung eines vielfältigen,
            zugänglichen Filmprogramms.
          </p>
          <p className="text-lg leading-9 mb-8">
            Filmfestivals sind von grosser Bedeutung für die Filmbranche und
            bieten Filmemacher:innen eine wichtige Plattform für die Verbreitung
            ihrer Werke. Die erste Durchführung des Chur Film Festivals ist,
            <strong> nach erfolgreicher Finanzierung</strong>, im Spätsommer 2025 geplant.
          </p>
        </div>
      </section>

      {/* Partner */}
      <div className="px-8 flex flex-col items-center justify-center">
        <div className="max-w-[1440px] w-full ">
          <h2 className="text-xl font-bold mb-6">Unsere Partner</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-8 justify-center items-center w-full gap-8 md:gap-20 flex-wrap dark:invert mb-16">
        {partner.map((partner) => (
          <Image
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            width={200}
            height={200}
            priority
          />
        ))}
      </div>

      {/* Milestones */}
      <section className="bg-background px-8 md:px-12 flex flex-col min-h-[calc(50vh)] items-center justify-center gap-8">
        <div className="max-w-[800px] w-full ">
          <h2 className="text-5xl md:text-6xl font-extralight  mb-6">
            Von der Idee zum Fazit
          </h2>
          <h3 className="text-3xl  font-bold leading-10 mb-4">
            Das Programm setzt sich aus Langspielfilme, Kurzfilme,
            Dokumentationen und Musikvideos zusammen.
          </h3>
          <p className="text-lg leading-9">
            Unser Ziel als Zentrum für Film- und Kunstliebhaber ist es, nicht
            nur ein Festival zu kreieren, sondern ein Erlebnis zu gestalten, das
            die Gemeinschaft und regionale Filmemacher:innen zusammenbringt,
            unterstützt und inspiriert.
          </p>
        </div>
      </section>
      <section className="bg-background px-8 md:px-12 flex flex-col items-center justify-center mb-8 overflow-hidden">
        <div className="max-w-[1200px] w-full mb-12">
          <div className="flex justify-center mb-12">
            <p className="text-lg leading-9 max-w-[800px]">
              Ein offener Austausch über unsere Fortschritte und
              Herausforderungen ist uns dabei von grosser Bedeutung. Um die
              Erstausgabe des Chur Film Festivals erfolgreich zu realisieren,
              streben wir eine Gesamtfinanzierung von CHF 330&apos;000.– an.
            </p>
          </div>
          <FinanceProgress />
        </div>
      </section>

      {/* Finance */}
      <section className="p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8 mb-16">
        <div className="max-w-[800px] w-full ">
          <h2 className="text-5xl md:text-6xl font-extralight  mb-6">
            Mittel zur Förderung
          </h2>
          <h3 className="text-3xl  font-bold leading-10 mb-4">
            Die finanzielle Unterstützung von verschiedenen Stellen können die
            Durchführung ermöglichen.
          </h3>
          <p className="text-lg leading-9 mb-4">
            Das Chur Film Festival entfaltet sich in renommierten Kulturstätten
            wie dem Arcas Platz, dem Stadttheater, der Postremise und dem
            Marsöl. Besondere Highlights sind die Freiluftvorstellungen auf dem
            Arcas Platz. Neben einzigartigen Filmerlebnissen bietet das Festival
            ein abwechslungsreiches Rahmenprogramm mit Podiumsdiskussionen,
            Branchen-Screenings, Workshops und Partys.
          </p>
          <p className="text-lg leading-9">
            Unser ehrgeiziges Ziel bei der Planung dieses Festivals ist es, die
            Filmkunst zugänglich zu machen, den kulturellen Austausch zu fördern
            und Chur als pulsierenden Treffpunkt für Filmbegeisterte aus der
            gesamten Schweiz und darüber hinaus zu etablieren.
          </p>
        </div>
        <div className="max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-light">
                Öffentliche Fördermittel
              </CardTitle>
            </CardHeader>
            <CardContent>
              Öffentliche Fördermittel von lokalen und kantonalen Kulturbehörden
              bilden unsere erste Unterstützungssäule. Sie sind in den
              Anfangsjahren entscheidend, um das Chur Film Festival
              selbsttragend zu machen.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-light">
                Gelder von privaten Stiftungen
              </CardTitle>
            </CardHeader>
            <CardContent>
              Die zweite Säule bilden privaten Stiftungen, welche die
              künstlerische Freihheit und Innovation im Filmsektor unterstützen.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-light">
                Sponsoring und Partnerschaften
              </CardTitle>
            </CardHeader>
            <CardContent>
              Unsere dritte Säule bildet das Sponsoring durch engagierte
              Unternehmen und Organisationen aus der Region.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-light">Deine Unterstützung</CardTitle>
            </CardHeader>
            <CardContent>
              Unsere Festivalgemeinschaft stellt die letzte wesentliche
              Unterstützungsquelle dar. Besuche, Teilnahme an Veranstaltungen
              oder finanzielle Beiträge - jede Form der Unterstützung trägt dazu
              bei, das Chur Film Festival zu einem unvergesslichen Erlebnis zu
              gestalten.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="flex justify-center px-6 pt-12 pb-20 bg-artsy-off-white dark:bg-zinc-900">
        <div className="max-w-[1200px] w-full ">
          <Accordion type="single" collapsible defaultValue="Herbst 2024">
            {timeline.map((item, index) => (
              <AccordionItem key={index} value={item.time}>
                <AccordionTrigger className="font-light text-2xl">
                  {item.time}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid grid-cols-1 gap-6 mt-2 mb-6">
                    {item.description.map((desc, index) => (
                      <li key={index} className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold">{desc.title}</h3>
                        <p className="text-lg">{desc.description}</p>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-[calc(75vh)] p-8">
        <div className="flex flex-col row-start-2 items-center sm:items-start max-w-[1000px]">
          <h2 className="text-5xl md:text-6xl font-extralight mb-6">
            Hilf mit, das Festival zu realisieren
          </h2>
          <h3 className="text-3xl  font-bold leading-10 mb-4">
            Sei Teil dieses kulturellen Meilensteins. <br /> Erlebe eine
            Premiere mit dem Chur Film Festival.
          </h3>

          <div className="flex gap-4 items-center flex-col sm:flex-row w-full mt-8">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-md sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
              href="https://donate.raisenow.io/sptqm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spenden und unterstützen
              <ExternalLinkIcon width={16} height={16} />
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center gap-2 justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-md sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 w-full sm:w-auto"
              href="https://forms.gle/s4SsujrjdFeZxqoB7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ich will Mitglied werden
              <ExternalLinkIcon className="ml-1" width={16} height={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="relative w-full p-4 xl:p-0 flex justify-center mb-8 md:mb-0">
        <NewsletterSubscription className="relative xl:absolute xl:bottom-4 xl:right-4" />
      </div>

      <Separator />

      <footer className="flex flex-col items-center lg:items-end lg:flex-row p-6 gap-8 md:gap-16 flex-wrap relative bg-artsy-off-white dark:bg-zinc-900">
        <Image
          // logo is already greayish | may change opacity in darkmode when logo changes
          className="mix-blend-difference opacity-80 dark:opacity-100 pt-4"
          src="/static/chur-film-festival-logo.png"
          alt="Next.js logo"
          width={400}
          height={200}
          priority
        />
        <div className="flex flex-col gap-2 mb-6 justify-end">
          <h4 className="text-lg font-bold text-muted-foreground">Kontakt</h4>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-muted-foreground hover:text-foreground"
            href="mailto:reich@churfilmfestival.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Reich - Co-Präsident
            <EnvelopeClosedIcon width={16} height={16} />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-muted-foreground hover:text-foreground"
            href="mailto:reich@churfilmfestival.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fabio Stecher - Co-Präsident
            <EnvelopeClosedIcon width={16} height={16} />
          </a>
        </div>
        <div className="flex flex-col gap-2 mb-6 justify-end">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-muted-foreground hover:text-foreground"
            href="/impressum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Impressum <ExternalLinkIcon width={16} height={16} />
          </a>
        </div>
        <div className="absolute bottom-4 right-4 ">
          <ThemeToggleButton />
        </div>
      </footer>
    </>
  );
}

const partner = [
  {
    name: "RTR",
    logo: "/static/partner/RTR.png",
  },
  {
    name: "Somedia",
    logo: "/static/partner/somedia.png",
  },
  {
    name: "Communicaziun",
    logo: "/static/partner/communicaziun.png",
  },
  {
    name: "Chur Bus",
    logo: "/static/partner/chur-bus.png",
  },
  {
    name: "Transreno",
    logo: "/static/partner/transreno.png",
  },
] as const;
