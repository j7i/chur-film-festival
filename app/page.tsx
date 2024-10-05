import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { EnvelopeClosedIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { timeline } from "../content/timeline";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { FinanceProgress } from "@/components/finance-progress";
import { NewsletterSubscription } from "@/components/newsletter-subscription";

export default function Home() {
  return (
    <>
      <div className="bg-dark-red p-4 md:p-6 pb-0 flex flex-col md:min-h-[calc(80vh)] md:h-[776px] items-center justify-center relative overflow-hidden">
        <Image
          className="invert-0 dark:invert-100 md:absolute top-9 left-0 z-30"
          src="/static/chur-film-festival-logo.png"
          alt="Next.js logo"
          width={400}
          height={200}
          priority
        />
        <div className="max-w-[1200px] w-full z-10">
          <div className="w-100 flex justify-center">
            {/* mobile */}
            <div className="flex flex-col w-full md:hidden flex justify-center items-center relative">
              <div className="w-full overflow-hidden -ml-6 mr-6 w-[calc(100%+6rem)] bg-stone-200/50 ">
              <iframe
                src="https://fabiostecher.com/oembed/media?src=https%3a%2f%2fplayer.vimeo.com%2fvideo%2f893279290%3fdnt%3d1%26loop%3d1%26background%3d1%26app_id%3d122963&amp;url=https%3a%2f%2fvimeo.com%2f893279290%3fshare%3dcopy&amp;provider=Vimeo&amp;width=2440&amp;height=1373&amp;hostname=https%3a%2f%2ffabiostecher.com"
                title="STECHER_Fabio_DirectorsReel_webpage"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                id="bg-vid"
                className="w-[864px] h-[430px] opacity-90"
              ></iframe>
              </div>
              <h1 className="text-7xl font-extrabold text-white mt-4 absolute mix-blend-difference">
                Chur <br/>Film Festival
              </h1>
            </div>
            {/* desktop */}
            <div className="w-[1200px] h-[520px] bg-stone-200/50  hidden md:flex justify-center items-center relative">
              <span className="text-[160px] font-extrabold text-white absolute -top-[137px] text-center z-0">
                Chur
              </span>
              <span className="text-[160px] font-extrabold text-white absolute -bottom-[115px] text-center z-0">
                Film Festival
              </span>
              <div className="flex justify-center items-center w-full h-full overflow-hidden relative">
                <span className="text-[160px] font-extrabold text-white absolute -top-[137px] text-center mix-blend-difference z-20">
                  Chur
                </span>
                <span className="text-[160px] font-extrabold text-white absolute -bottom-[115px] text-center mix-blend-difference z-20">
                  Film Festival
                </span>
                <span className="text-[160px] font-extrabold text-white/90 absolute -top-[137px] text-center z-30">
                  Chur
                </span>
                <span className="text-[160px] font-extrabold text-white/90 absolute -bottom-[115px] text-center z-30">
                  Film Festival
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
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8">
        <div className="max-w-[800px] w-full ">
          <h2 className="text-6xl font-extralight  mb-6">Sommer 2025</h2>
          <p className="text-3xl  font-bold leading-10 mb-4">
            Das Chur Film Festival als kulturelle Plattform, welche die
            Filmvielfalt zur Bündner Bevölkerung bringt.
          </p>
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
            nach erfolgreicher Finanzierung, im Spätsommer 2025 geplant.
          </p>
        </div>
      </div>

      {/* Partner */}
      <div className="px-8 flex flex-col items-center justify-center">
        <div className="max-w-[1440px] w-full ">
          <h2 className="text-xl font-bold  mb-6">Unsere Partner</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-8 justify-center items-center w-full gap-20 flex-wrap dark:invert mb-16">
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
      <div className="bg-background px-8 md:px-12 flex flex-col min-h-[calc(50vh)] items-center justify-center gap-8">
        <div className="max-w-[800px] w-full ">
          <h2 className="text-6xl font-extralight  mb-6">
            Von der Idee zum Fazit
          </h2>
          <p className="text-3xl  font-bold leading-10 mb-4">
            Das Programm setzt sich aus Langspielfilme, Kurzfilme,
            Dokumentationen und Musikvideos zusammen.
          </p>
          <p className="text-lg leading-9">
            Unser Ziel als Zentrum für Film- und Kunstliebhaber ist es, nicht
            nur ein Festival zu kreieren, sondern ein Erlebnis zu gestalten, das
            die Gemeinschaft und regionale Filmemacher:innen zusammenbringt,
            unterstützt und inspiriert.
          </p>
        </div>
      </div>
      <div className="bg-background px-8 md:px-12 flex flex-col items-center justify-center mb-16">
        <div className="max-w-[1200px] w-full mb-12">
          <div className="flex justify-center mb-8">
            <p className="text-lg leading-9 max-w-[800px]">
              Ein offener Austausch über unsere Fortschritte und
              Herausforderungen ist uns dabei von grosser Bedeutung. Um die
              Erstausgabe des Chur Film Festivals erfolgreich zu realisieren,
              streben wir eine Gesamtfinanzierung von CHF 330&apos;000.– an.
            </p>
          </div>
          <FinanceProgress className="my-16" />
        </div>
      </div>

      {/* Finance */}
      <div className="p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8">
        <div className="max-w-[800px] w-full ">
          <h2 className="text-6xl font-extralight  mb-6">
            Mittel zur Förderung
          </h2>
          <p className="text-3xl  font-bold leading-10 mb-4">
            Die finanzielle Unterstützung verschiedener Stellen können eine
            Durchführung des Chur Film Festivals ermöglichen.
          </p>
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
            gesamten Schweiz und darüber hinaus zu etablieren. Wir laden Sie
            ein, an dieser Reise teilzunehmen - sei es als Besucher,
            Filmschaffender oder Unterstützer.
          </p>
        </div>
      </div>

      <div className="overflow-x-hidden overflow-y-scroll p-12 pb-20 sm:p-20 bg-artsy-off-white dark:bg-zinc-900">
        <Carousel
          opts={{
            align: "start",
            inViewThreshold: 0.2,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {timeline.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col gap-8 mr-8">
                  <h2 className="text-2xl font-[family-name:var(--font-geist-mono)] leading-9">
                    {item.time}
                  </h2>
                  <ul className="grid grid-cols-1 gap-6">
                    {item.description.map((desc, index) => (
                      <li key={index} className="flex flex-col gap-2">
                        <h3 className="text-lg font-bold">{desc.title}</h3>
                        <p className="text-lg">{desc.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[calc(75vh)] p-8 pb-20 sm:p-20">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[1000px]">
          <h2 className="text-6xl font-extralight  mb-6">
            Hilf mit, das Festival zu realisieren
          </h2>
          <h3 className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] leading-9">
            Sei Teil dieses kulturellen Meilensteins. <br /> Erlebe eine
            Premiere mit dem Chur Film Festival.
          </h3>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://donate.raisenow.io/sptqm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spenden und Unterstützen
              <ExternalLinkIcon width={16} height={16} />
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center gap-2 justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href="https://forms.gle/s4SsujrjdFeZxqoB7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ich will Mitglied werden
              <ExternalLinkIcon className="ml-1" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative w-full p-4 xl:p-0">
        <NewsletterSubscription className="xl:absolute bottom-4 left-4" />
      </div>

      <Separator />

      <footer className="flex flex-col md:flex-row p-6 gap-8 md:gap-16 flex-wrap items-center justify-center bg-muted-background relative bg-artsy-off-white dark:bg-zinc-900 font-[family-name:var(--font-geist-mono)]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-muted-foreground hover:text-foreground"
          href="mailto:reich@churfilmfestival.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EnvelopeClosedIcon width={16} height={16} />
          Daniel Reich - Co-Präsident
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-muted-foreground hover:text-foreground"
          href="mailto:reich@churfilmfestival.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EnvelopeClosedIcon width={16} height={16} />
          Fabio Stecher - Co-Präsident
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-muted-foreground hover:text-foreground"
          href="/impressum"
          target="_blank"
          rel="noopener noreferrer"
        >
          Impressum
        </a>
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
