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
      text={`Pomagamy przedsiębiorcom oszczędzić czas oraz budżet reklamowy łącząc 
      ich ze sprawdzonymi specjalistami marketingu i oferując szereg narzędzi do zarządzania projektami.
      `}
    />
    <div id={'items'}>
      <Item
        index={'1.'}
        title={`
      Jakich specjalistów ds. marketingu mogę znaleźć za pomocą AdsBridge i jak mogę się upewnić, 
      że ich umiejętności i doświadczenie odpowiadają moim potrzebom?
      `}
      >
      W AdsBridge możesz znaleźć i zatrudnić sprawdzonych specjalistów ds. marketingu, którzy posiadają
      szeroki zakres umiejętności, sprawdzony w trakcie restrykcyjnego procesu rekrutacji, który przechodzi
      jedynie niewielki odsetek kandydatów. Na platformie możesz znaleźć specjalistów w dziedzinach
      takich jak PPC, SEO, social media marketing, email marketing, content marketing i wiele innych.
        <br/>
      Każdy specjalista jest przez nas rzetelnie sprawdzany pod kątem doswiadczenia i realnych umiejętności
      wykorzystanych w poprzednich projektach. Więcej o procesie weryfikacji piszemy w tej sekcji strony.
      </Item>

      <Item
        index={'2.'}
        title={'W jaki sposób rozwiązanie AdBridge dopasowuje mnie do specjalistów ds. marketingu?'}
      >
      Nasza platforma na podstawie wywiadu przeprowadzonego przy pierwszym logowaniu rekomenduje
      najlepszych specjalistów dla Twojego Biznesu, mając na uwadze wszystkie najważniejsze paremetry
      takie jak cel kampanii, budżet, specyfika Twojej branży, wymagania dotyczące rodzaju współpracy
      ze specjalistą, przybliżone terminy rozpoczęcia i realizacji projektów itd.
        <br/>
        <br/>
      Poza rekomendacjami, każdego naszego użytkownika wyposażamy w rozbudowane funkcje filtrowania i
      dedykowanego eksperta, który w razie potrzeby poprowadzi proces rekrutacji i rozpoczęcia współpracy.
        <br/>
        <br/>
      Ponadto udzielamy 60-dniowej gwarancji sukcesu - jesteśmy pewni jakości naszych usług i
      umiejetności specjalistów dlatego jeśli w ciągu pierwszych dwóch miesięcy uznasz,
      ze platforma nie jest dla Ciebie, zwrócimy Ci pieniądze za subskrypcję naszej platformy.
      </Item>

      <Item
        index={'3.'}
        title={'Jakie narzędzia i funkcje zapewnia rozwiązanie AdsBridge do zarządzania specjalistami marketingu i jak mogą one usprawnić mój biznes?'}
      >
      Nasza platforma dostarcza rozbudowaną wyszukiwarkę zweryfikowanych specjalistów,
      łatwy system rekrutacji, automatyczny system raportowania wyników kampanii marketingowych,
      wygodny komunikator oraz wsparcie ekspertów w ramach jednego, intuicyjnego pulpitu.
        <br/>
        <br/>
      Dzięki tym funkcjom możesz śledzić postępy swojego zespołu marketingowego,
      oszczędzać czas i regularnie oceniać ich wyniki, aby upewnić się, że osiągasz swoje cele biznesowe.
      </Item>

      <Item
        index={'4.'}
        title={'Jak mogę śledzić wydajność specjalistów za pomocą platformy i jakie funkcje analityczne i raportowe są dostępne?'}
      >
        W zależności od kanału na którym są prowadzone kampanie marktingowe system monituruje i automatycznie
        raportuje najważniejsze metryki w jednym miejscu na naszej platformie:
        <br/>
        <br/>
        Dla kampanii social media m.in. koszt i współczynnik konwersji, zasięg posta lub kreacji reklamowej,
        zaanagażowanie klientów (polubienia, komentarze, udostępnienia), demografia, ruch płatny i organiczny
        posta lub konta, ROAS.
        <br/>
        <br/>
        Dla kampanii Google Ads/SEO m.in koszt i ilość konwersji oraz kliknięć, CTR, ruch płatny i organiczny
        na stronie, backlinki i domeny odsyłające, prędkość wczytywania strony, średnia pozycja strony w wyszukiwarce, ROAS.
        <br/>
        <br/>
        Dla kampanii email marketing m.in. współczynnik otwarć, kliknięć, odrzuceń, CTR, współczynnik
        odsubskrybowań, ROI, udostępnienia/przekazania wiadomości.
      </Item>

      <Banner text_1={'Gotowy na level-up Twojego marketingu?'} text_2={'Znajdź specjalistę'} text_3={'Odkryj naszą 60-dniową gwarancję'} link={'/#pricing'} />

      <Item
        index={'5.'}
        title={'Czy platformę można zintegrować z najpopularniejszymi serwisami społecznościowymi i wyszukiwarkami oraz jaki jest proces integracji?'}
      >
        Oczywiście! Platformę AdsBridge zintegrujesz z Meta Business Managerem (Facebookiem oraz Instagramem),
        Google Ads oraz TikTokiem. Wszystkie integracje odbywają się za pomocą kilku kliknięć na pulpicie
        użytkownika a w razie jakichkolwiek problemów nasz zespół jest do dyspozycji aby rozwiać wszelkie
        wątpliwości i przygotować system do pracy.
      </Item>

      <Item
        index={'6.'}
        title={'Jaki jest model cenowy i jak wypada w porównaniu z innymi rozwiązaniami na rynku?'}
      >
        AdsBridge jest pierwszym tego typu rozwiązaniem łączącym możliwość wyszukania,
        zatrudnienia, komunikacji i zarządzania specjalistami marketingu. Nasze systemy
        oszczędzają czas Twojej firmy a zweryfikowani specjaliści rozwijają jej
        sprzedaż i marketing. Subskrypcje zaczynają się od 200 zł netto za miesiąc w
        trybie testowym do 400 zł netto miesięcznie za pełen pakiet z 60-dniową
        gwarancją uzyskania pozytywnych wyników rekrutacji oraz kampanii reklamowych,
        automatycznym systemem raportowania i dostępem do wsparcia ekspertów marketingu.
      </Item>

      <Item
        index={'7.'}
        title={'Jakie wsparcie i szkolenia są dostępne, i jak mogę uzyskać pomoc w razie potrzeby?'}
      >
        We wszystkich dostępnych planach udzielamy wsparcia mailowego oraz telefonicznego
        w razie potrzeby oraz konsultacje z naszym ekspertem strategii marketingowej.
        W razie potrzeby nasz zespół udzieli Ci wszelkich wskazówek do tego, aby
        osiągnąć Twoje cele marketingowo-sprzedażowe z naszą platformą.
      </Item>

      <Item
        index={'8.'}
        title={'Jakie wsparcie i szkolenia są dostępne, i jak mogę uzyskać pomoc w razie potrzeby?'}
      >
        W zależności od wielkości Twojego zespołu wdrożenie nie powinno trwać dłużej niż
        tydzień, nasz zespół dołoży wszelkich starań aby proces onboardingu przebiegł
        sprawnie, służąc pomocą i odpowiadając na pytania.
      </Item>

      <Banner text_1={'Gotowy na level-up Twojego marketingu?'} text_2={'Znajdź specjalistę'} text_3={'Odkryj naszą 60-dniową gwarancję'} link={'/#pricing'} />
    </div>

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