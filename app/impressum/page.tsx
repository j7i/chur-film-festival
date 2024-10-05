import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Impressum = () => {
  return (
    <>
      <header className="h-[56px] w-full sticky top-0 flex flex-col bg-background z-10 space-between">
        <Link
          href="/"
          className="hover:underline hover:underline-offset-4 text-muted-foreground hover:text-foreground p-4"
        >
          <ArrowLeftIcon width={16} height={16} className="mr-1 inline mb-1" />{" "}
          Zurück zur Startseite
        </Link>
        <Separator />
      </header>
      <div>
        <div className="p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8">
          <div className="max-w-[800px] w-full ">
            <h1 className="text-6xl font-extralight  mb-6">Impressum</h1>
            <h2 className="text-3xl  font-bold leading-10 mb-4">
              Verantwortlich für den Inhalt
            </h2>
            <p className="text-lg leading-9 mb-8">
              Reich Film
              <br />
              Via Casti 52
              <br />
              7151 Schluein
              <br />
              Schweiz
            </p>
            <p className="text-lg leading-9 mb-8">
              <a
                href="mailto:reich@churfilmfestival.ch"
                className="text-blue-500"
              >
                reich@churfilmfestival.ch
              </a>
            </p>

            <h3 className="text-3xl  font-bold leading-10 mb-4">
              Urheberrechte
            </h3>
            <p className="text-lg leading-9 mb-8">
              Die Inhalte dieser Webseite, einschließlich Texte, Bilder und
              Grafiken, sind urheberrechtlich geschützt. Die Verwendung,
              Reproduktion oder Modifikation der Inhalte außerhalb der
              urheberrechtlichen Schranken erfordert die vorherige schriftliche
              Zustimmung von Reich Film.
            </p>

            <h3 className="text-3xl  font-bold leading-10 mb-4">
              Haftungsausschluss
            </h3>
            <p className="text-lg leading-9 mb-8">
              Reich Film übernimmt keine Haftung für die Richtigkeit,
              Vollständigkeit und Aktualität der bereitgestellten Inhalte. Für
              den Inhalt der verlinkten Seiten sind ausschliesslich deren
              Betreiber verantwortlich.
            </p>
          </div>
        </div>
        <div className="p-8 md:p-12 flex flex-col min-h-[calc(60vh)] items-center justify-center gap-8">
          <div className="max-w-[800px] w-full ">
            <h2 className="text-6xl font-extralight  mb-6">
              Datenschutzerklärung
            </h2>
            <h3 className="text-3xl  font-bold leading-10 mb-4">Allgemein</h3>
            <p className="text-lg leading-9 mb-8">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-3xl  font-bold leading-10 mb-4">Hosting</h3>
            <p className="text-lg leading-9 mb-8">
              Unsere Webseite wird auf Servern von Infomaniak
              (www.infomaniak.ch) gehostet. Infomaniak ist ein Schweizer
              Anbieter, der hohe Datenschutzstandards erfüllt und sich
              verpflichtet, die Daten unserer Websitebesucher zu schützen.
            </p>

            <h3 className="text-3xl  font-bold leading-10 mb-4">Newsletter</h3>
            <p className="text-lg leading-9 mb-8">
              Wenn Sie den auf der Website angebotenen Newsletter abonnieren
              möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
              Informationen, welche uns die Überprüfung gestatten, dass Sie der
              Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang
              des Newsletters einverstanden sind. Weitere Daten werden nicht
              bzw. nur auf freiwilliger Basis erhoben. Für den Versand unseres
              Newsletters verwenden wir das Newsletter-Tool von Infomaniak
              (https://newsletter.infomaniak.com). Ihre Daten werden daher an
              Infomaniak übermittelt. Infomaniak wird diese Daten nicht an
              Dritte weitergeben oder für andere Zwecke als für den Versand des
              Newsletters verwenden. Jeder versendete Newsletter ist mit einem
              &quot;Abmelde-Link&quot; versehen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Impressum;
