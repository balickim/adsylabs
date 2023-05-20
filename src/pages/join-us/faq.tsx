import React, { ReactElement } from 'react';
import tw from 'twin.macro';

import Layout from 'components/Common/Layout';
import { Top } from 'components/Faq/Top';
import { Item } from 'components/Faq/Item';
import { Banner } from 'components/Faq/Banner';
import Footer from 'components/Common/Footer';

const Main = tw.main`flex flex-col mt-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32`;

export default function FaqPage () {
  return <Main>
    <Top
      text={`Pomagamy doświadczonym specjalistom marketingu oszczędzić czas oraz pozyskać 
      nowe ekscytujące współprace wyposażając ich w szereg narzędzi na naszej platformie.
      `}
    />
    <div id={'items'}>
      <Item
        index={'1.'}
        title={`
        Jak platforma łączy mnie z potencjalnymi klientami i jakie projekty mogę znaleźć za pośrednictwem platformy?
        `}
      >
        Platforma łączy Cię z potencjalnymi klientami poprzez umożliwienie im składania zapytań ofertowych na projekty
        związane z marketingiem. Po zarejestrowaniu się na platformie i utworzeniu profilu specjalisty, będziesz
        miał dostęp do zapytań ofertowych, które odpowiadają Twoim umiejętnościom i preferencjom.
        <br/>
        <br/>
        Projekty, które możesz znaleźć na platformie, zależą od potrzeb klientów, którzy korzystają z naszych
        usług. Mogą to być projekty związane z tworzeniem strategii marketingowej, projektowanie kampanii reklamowych,
        pozycjonowanie SEO, social media marketing, a także inne zadania związane z marketingiem.
        <br/>
        <br/>
        Wszystkie projekty na platformie są weryfikowane przez nasz zespół, aby zapewnić ich jakość i zgodność z
        wymaganiami klientów. Po zaakceptowaniu projektu, będziesz miał możliwość nawiązania kontaktu z klientem,
        przedstawienia swojej oferty i negocjacji warunków projektu.
      </Item>

      <Item
        index={'2.'}
        title={'Jakie narzędzia i funkcje zapewnia platforma aby pomóc mi zarządzać i współpracować z klientami, i jak mogą one usprawnić moją pracę?'}
      >
        Platforma dostarcza szereg narzędzi i funkcji, które mają na celu ułatwienie zarządzania projektem oraz komunikacji
        z klientami, oszczędzając Twój czas:
        <br/>
        <br/>
        Automatyczny system raportowania wyników kampanii reklamowych: Platforma umożliwia śledzenie wyników kampanii
        reklamowych i automatyczne generowanie raportów. Dzięki temu możesz w prosty sposób monitorować postępy kampanii
        i dostarczać klientowi raporty na bieżąco, co usprawni komunikację z klientem i pozwoli na oszczędzenie czasu,
        który możesz przeznaczyć na działania operacyjne.
        <br/>
        <br/>
        Komunikator: Platforma dostarcza komunikator, który umożliwia bezpośrednią komunikację z z wszystkimi Twoimi klientami.
        Dzięki temu możesz szybko odpowiadać na pytania, przedstawiać wyniki pracy, a także wyjaśniać wszelkie wątpliwości
        zleceniodawców z poziomu jednej platformy.
        <br/>
        <br/>
        Intuicyjny dashboard do zarządzania zleceniami: Platforma zapewnia intuicyjny dashboard, który pozwala na łatwe
        zarządzanie projektami. Możesz dzięki temu monitorować postępy pracy, weryfikować terminy i dostarczać klientowi
        raporty z postępów projektu. Dashboard usprawnia przepływ pracy i pozwala na szybsze podejmowanie decyzji.
        <br/>
        <br/>
        Społeczność specjalistów: nasza ekspercka społecznosc Slack na platformie pomaga w zdobywaniu wiedzy, wymianie
        pomysłów, rozwiązywaniu problemów, zrozumieniu potrzeb klientów oraz rozwoju zawodowym poprzez networking.
        Wymień pomysły i opinie z ludźmi, którzy mają różne perspektywy i podejścia do realizacji projektów marketingowych.
      </Item>

      <Banner text_1={'Gotowy na level-up Twojej kariery?'} text_2={'Aplikuj teraz'} text_3={'Liczba miejsc we wczesnym dostępie jest ograniczona'} link={'./pre-register'} />

      <Item
        index={'3.'}
        title={'Jakie funkcje analityczne i raportowe dostarcza platforma?'}
      >
        W zależności od kanału na którym są prowadzone kampanie marktingowe system monituruje i automatycznie
        raportuje najważniejsze metryki w jednym miejscu na naszej platformie:
        <br/>
        <br/>
        Dla kampanii social media m.in. koszt i współczynnik konwersji, zasięg posta lub kreacji reklamowej,
        zaanagażowanie klientów (polubienia, komentarze, udostępnienia), demografia, ruch płatny i organiczny posta lub konta, ROAS.
        <br/>
        <br/>
        Dla kampanii Google Ads/SEO m.in koszt i ilość konwersji oraz kliknięć, CTR, ruch płatny i organiczny
        na stronie, backlinki i domeny odsyłające, prędkość wczytywania strony, średnia pozycja strony w wyszukiwarce, ROAS.
        <br/>
        <br/>
        Dla kampanii email marketing m.in. współczynnik otwarć, kliknięć, odrzuceń, CTR, współczynnik odsubskrybowań,
        ROI, udostępnienia/przekazania wiadomości.
      </Item>

      <Item
        index={'4.'}
        title={`Czy platforma może być zintegrowana z innymi narzędziami i platformami, 
        których używam w mojej działalności marketingowej, a jeśli tak, to jaki jest proces integracji?`
        }
      >
        Oczywiście! Platformę AdsBridge zintegrujesz z Meta Business Managerem (Facebookiem oraz Instagramem),
        Google Ads oraz TikTokiem. Wszystkie integracje odbywają się za pomocą kilku kliknięć na
        pulpicie użytkownika a w razie jakichkolwiek problemów nasz zespół jest do dyspozycji aby
        rozwiać wszystkie wątpliwości i przygotować system do pracy.
      </Item>

      <Item
        index={'5.'}
        title={'Jaki jest model cenowy  korzystania z platformy i jak to się ma do innych rozwiązań na rynku?'}
      >
        We obecnej fazie rozwoju aplikacji oferujemy 3 miesiące darmowego triala dla naszych specjalistów.
        W zamian za używanie platformy oczekujemy jedynie feedbacku na temat funkcjonalnosci oraz uzytkowania produktu.
      </Item>

      <Item
        index={'6.'}
        title={'Jaki rodzaj wsparcia jest dostępny dla korzystania z platformy, i jak mogę uzyskać pomoc w razie potrzeby?'}
      >
        We wszystkich dostępnych planach udzielamy wsparcia mailowego oraz telefonicznego w
        razie potrzeby oraz konsultacje z naszym ekspertem strategii marketingowej.
        W razie potrzeby nasz zespół udzieli Ci wszelkich wskazówek do tego, aby osiągnąć Twoje cele marketingowo-sprzedażowe z naszą platformą.
      </Item>
    </div>

    <Banner text_1={'Gotowy na level-up Twojej kariery?'} text_2={'Aplikuj teraz'} text_3={'Liczba miejsc we wczesnym dostępie jest ograniczona'} link={'./pre-register'} />

    <Footer />
  </Main>;
}

FaqPage.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout
      meta={{
        title: 'AdsBridge - automatyzujemy współprace marketingowe',
        description: 'Sprawdź jak automatyzujemy zatrudnianie i zarządzanie sprawdzonymi specjalistami marketingu. Nie znajdziemy kandydata? Nie płacisz.',
      }}
    >
      {page}
    </Layout>
  );
};