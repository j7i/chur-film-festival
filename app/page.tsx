import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { EnvelopeClosedIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-dark-red p-4 md:p-6 pb-20 md:pb-0 flex flex-col min-h-[calc(80vh)] md:h-[776px] items-center justify-center relative overflow-hidden">
        <Image
          className="invert-0 dark:invert-100 absolute top-9 left-0 z-30"
          src="/static/chur-film-festival-logo.png"
          alt="Next.js logo"
          width={400}
          height={200}
          priority
        />
        <div className="max-w-[1200px] w-full z-10">
          <div className="w-100 flex justify-center">
            <div className="w-[1200px] h-[520px] bg-stone-200/50 flex justify-center items-center relative">
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
                <span className="text-[160px] font-extrabold text-white/85 absolute -top-[137px] text-center z-30">
                  Chur
                </span>
                <span className="text-[160px] font-extrabold text-white/85 absolute -bottom-[115px] text-center z-30">
                  Film Festival
                </span>
                <iframe
                  src="https://fabiostecher.com/oembed/media?src=https%3a%2f%2fplayer.vimeo.com%2fvideo%2f893279290%3fdnt%3d1%26loop%3d1%26background%3d1%26app_id%3d122963&amp;url=https%3a%2f%2fvimeo.com%2f893279290%3fshare%3dcopy&amp;provider=Vimeo&amp;width=2440&amp;height=1373&amp;hostname=https%3a%2f%2ffabiostecher.com"
                  width="2440"
                  height="1373"
                  scrolling="no"
                  title="STECHER_Fabio_DirectorsReel_webpage"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  id="bg-vid"
                  style={{ width: "1440px", height: "760px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-background p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8">
        <div className="max-w-[800px] w-full ">
          <h1 className="text-6xl font-extralight  mb-8">Sommer 2025</h1>
          <p className="text-3xl  font-bold leading-10 mb-4">
            Das Chur Film Festival als kulturelle Plattform, welche die
            Filmvielfalt zur Bündner Bevölkerung bringt.
          </p>
          <p className="text-lg leading-10">
            Als Knotenpunkt für Film- und Kunstliebhaber verbindet und
            inspiriert das Festival die Gemeinschaft und lokale Filmemacher.
            Unser Hauptziel ist die Förderung des Schweizer Films, des
            Storytellings und die Bereitstellung eines vielfältigen,
            zugänglichen Filmprogramms.
          </p>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-background p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8">
        <div className="max-w-[800px] w-full ">
          <h1 className="text-6xl font-extralight  mb-8">
            Von der Idee zum Fazit
          </h1>
          <p className="text-3xl  font-bold leading-10 mb-4">
            Erhalte Einblick in die wichtigsten Meilensteine des Chur Film
            Festivals.
          </p>
          <p className="text-lg leading-10">To be continued...</p>
        </div>
      </div>

      {/* Finance */}
      <div className="bg-background p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8">
        <div className="max-w-[800px] w-full ">
          <h1 className="text-6xl font-extralight  mb-8">
            Mittel zur Förderung
          </h1>
          <p className="text-3xl  font-bold leading-10 mb-4">
            Wir sind auf finanzielle Unterstützung verschiedener Stellen
            angewiesen, um das Chur Film Festival durchzuführen.
          </p>
          <p className="text-lg leading-10">To be continued...</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[calc(80vh)] p-8 pb-20 sm:p-20">
        <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-[800px]">
          <h2 className="text-2xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Sei Teil dieses kulturellen Meilensteins. <br /> Erlebe eine
            Premiere mit dem Chur Film Festival.
          </h2>

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
      <footer className="flex flex-col md:flex-row p-6 gap-6 flex-wrap items-center justify-center">
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
      </footer>
      <div className="fixed bottom-2 right-2 ">
        <ThemeToggleButton />
      </div>
    </>
  );
}
