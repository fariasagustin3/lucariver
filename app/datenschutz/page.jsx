import React from 'react';
import Navbar from '../components/Navbar';
import { raleway } from '../fonts';
import './page.css';
import Footer from '../components/Footer';

const Page = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col px-5 items-center text-center sm:mt-10 sm:px-56 pt-20'>
        <h1 className={`${raleway.className} sm:text-5xl`}>{"Datenschutzerklärung"}</h1>
        <h3>{"Geltungsbereich"}</h3>
        <p>
          {`Diese Datenschutzerklärung soll die Nutzer dieser Webseite gemäß EU DSGVO, Bundesdatenschutzgesetz
          und Telemediengesetz über die Art, den Umfang und den Zweck der Erhebung und Verwendung
          personenbezogener Daten durch den Websitebetreiber`}
        </p>
        <h3>{"Andreas Zimmermann informieren."}</h3>
        <p>
          {`Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten
          vertraulich und entsprechend der gesetzlichen Vorschriften. Bedenken Sie, daß die Datenübertragung
          im Internet grundsätzlich mit Sicherheitslücken bedacht sein kann. Ein vollumfänglicher Schutz vor
          dem Zugriff durch Fremde ist nicht realisierbar.`}
        </p>
        <h3>{"Zugriffsdaten"}</h3>
        <p>
          {`Der Websitebetreiber bzw. Seitenprovider erhebt Daten über Zugriffe auf die Seite und speichert
          diese als "Server-Logfiles" ab. Folgende Daten werden protokolliert:`}
        </p>
        <p>{"- Besuchte Website"}</p>
        <p>{"- Uhrzeit zum Zeitpunkt des Zugriffes"}</p>
        <p>{"- Menge der gesendeten Daten in Byte"}</p>
        <p>{"- Quelle/Verweis, von welchem Sie auf die Seite gelangten"}</p>
        <p>{"- Verwendeter Browser"}</p>
        <p>{"- Verwendetes Betriebssystem"}</p>
        <p>{"- Verwendete IP-Adresse"}</p>
        <p>
          {`Die erhobenen Daten dienen lediglich statistischen Auswertungen und zur Verbesserung der Website.
          Der Websitebetreiber behält sich allerdings vor, die Server-Logfiles nachträglich zu überprüfen,
          sollten konkrete Anhaltspunkte auf rechtswidrige Nutzung hinweisen.`}
        </p>
        <h3>{"Cookies"}</h3>
        <p>
          {`Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, welche auf Ihrem
          Endgerät gespeichert werden. Ihr Browser greift auf diese Daten zu. Durch den Einsatz von Cookies
          erhöht sich die Benutzerfreundlichkeit und Sicherheit dieser Website. Gängige Browser bieten
          Einstellungsoptionen, Cookies nicht zuzulassen. Hinweis: Es ist nicht gewährleistet, daß Sie
          auf allen Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn Sie entsprechende
          Einstellungen vornehmen.Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien,
          welche auf Ihrem Endgerät gespeichert werden. Ihr Browser greift auf diese Daten zu. Durch den
          Einsatz von Cookies erhöht sich die Benutzerfreundlichkeit und Sicherheit dieser Website.
          Gängige Browser bieten Einstellungsoptionen, Cookies nicht zuzulassen. Hinweis: Es ist nicht
          gewährleistet, daß Sie auf allen Funktionen dieser Website ohne Einschränkungen zugreifen
          können, wenn Sie entsprechende Einstellungen vornehmen.`}
        </p>
        <h3>{"Umgang mit personenbezogenen Daten"}</h3>
        <p>
          {`Der Websitebetreiber erhebt, nutzt und gibt Ihre personenbezogenen Daten nur dann weiter,
          wenn dies im gesetzlichen Rahmen erlaubt ist, oder sie der Datenerhebung einwilligen.
          Als personenbezogene Daten gelten sämtliche Informationen, welche dazu dienen, Ihre Person
          zu bestimmen und welche zu Ihnen zurückverfolgt werden können - also beispielsweise Ihr
          Name, Ihre E-Mail-Adresse und Telefonnummer.`}
        </p>
        <h3>{"Datenschutzerklärung Google Maps"}</h3>
        <p>
          {`Diese Webseite verwendet das Produkt Google Maps von Google Inc. Durch Nutzung dieser Webseite
          erklären Sie sich mit der Erfassung, Bearbeitung, sowie Nutzung der automatisiert erhobenen Daten
          durch Google Inc, deren Vertreter sowie Dritter einverstanden. Die Nutzungsbedingungen von Google
          Maps finden sie unter "Nutzungsbedingungen von Google
          Maps": http:// www.google.com/int/de_de/help/terms_maps.html
          mit Kontaktdaten`}
        </p>
        <p>
          {`Nehmen Sie mit dem Websitebetreiber durch die angebotene Kontaktmöglichkeiten Verbindung auf,
          werden Ihre Angaben gespeichert, damit auf diese zur Bearbeitung und Beantwortung Ihrer
          Anfrage zurückgegriffen werden kann. Ohne Ihre Einwilligung werden diese Daten nicht an
          Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
          der Daten vor dem Zugriff durch Dritte ist nicht möglich.`}
        </p>
        <h3>{"Widerspruch Werbe-Mails"}</h3>
        <p>
          {`Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung
          von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
          Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.`}
        </p>
        <h3>{"Umgang mit Kommentaren und Beiträgen"}</h3>
        <p>
          {`Hinterlassen Sie auf dieser Website einen Beitrag oder Kommentar, wird Ihre IP-Adresse gespeichert.
          Dies dient der Sicherheit des Websitebetreibers: verstößt Ihr Text gegen das Recht, möchte er Ihre
          Identität nachverfolgen können.`}
        </p>
        <h3>{"Auskunftsrecht"}</h3>
        <p>
          {`Sie als Nutzer erhalten auf Antrag Ihrerseits kostenlose Auskunft darüber, welche personenbezogene
          Daten über Sie gespeichert wurden. Sofern Ihr Wunsch nicht mit einer gesetzlichen Pflicht zur
          Aufbewahrung von Daten (z.B. Vorratsdatenpeicherung) kollidiert, haben Sie Anrec}ht auf Berichtigung
          falscher Daten und die Sperrung oder Löschung Ihrer personenbezogenen Daten.`}
        </p>
        <p>
          {`Ihr Vertrauen ist uns wichtig. Daher möchten wir Ihnen Rede und Antwort bezüglich der Verarbeitung
          Ihrer personenbezogenen Daten stehen. Wenn Sie Fragen haben, die Ihnen diese Datenschutzerklärung
          nicht beantworten konnte, oder wenn Sie zu einem Punkt vertiefte Informationen wünschen, wenden Sie
          sich bitte an Andreas Zimmermann, Mail: a-z@mailbox.org, Tel: 0159 015 00 311`}
        </p>

        <h2 className={`${raleway.className} sm:text-[36px] py-20 font-light`}>{"Google Analytics Ergänzung"}</h2>
        <p>
          {`Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“).
          Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert
          werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den
          Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an
          einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung
          der IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb
          von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens
          über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle
          IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag
          des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung
          der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um
          weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen
          gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von
          Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
          Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
          Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
          Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden
          nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten
          und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google
          sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem
          folgenden Link verfügbare Browser-Plugin herunterladen und installieren:
          http://tools.google.com/dlpage/gaoptout`}
        </p>
        <p>
          {"Sie können die Erfassung durch Google Analytics verhindern, indem Sie auf folgenden Link klicken."}
        </p>
        <p>
          {`Es wird ein Opt-Out-Cookie gesetzt, der die zukünftige Erfassung Ihrer Daten beim Besuch dieser
          Website verhindert`}
        </p>
        <p>
          {`Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter den Google
          Analytics Bedingungen bzw. unter der Google Analytics Übersicht. Wir weisen Sie darauf
          hin, dass auf dieser Webseite Google Analytics um den Code "gat._anonymizeIp();"
          erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.`}
        </p>
        <h2 className='text-[36px] font-light my-10'>{"reCAPTCHA"}</h2>
        <p>
          {`Zum Schutz Ihrer Anfragen per Internetformular verwenden wir den Dienst reCAPTCHA des Unternehmens
          Google Inc. (Google). Die Abfrage dient der Unterscheidung, ob die Eingabe durch einen Menschen oder
          missbräuchlich durch automatisierte, maschinelle Verarbeitung erfolgt. Die Abfrage schließt den
          Versand der IP-Adresse und ggf. weiterer von Google für den Dienst reCAPTCHA benötigter Daten an
          Google ein. Zu diesem Zweck wird Ihre Eingabe an Google übermittelt und dort weiter verwendet.
          Ihre IP-Adresse wird von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder
          in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
          Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen
          und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen
          benutzen, um Ihre Nutzung dieses Dienstes auszuwerten. Die im Rahmen von reCaptcha von Ihrem
          Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Für
          diese Daten gelten die abweichenden Datenschutzbestimmungen des Unternehmens Google. Weitere
          Informationen zu den Datenschutzrichtlinien von Google finden Sie unter:
          https://policies.google.com/privacy?hl=de`}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
