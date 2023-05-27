import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

import { Item } from 'components/Faq/Item';

export function ExcerptCta ({ href }: {href: string}) {
  return (
    <Link href={href}>
      <span className={'mt-5 flex justify-center items-center text-base md:text-xl gap-x-3 text-secondary font-bold cursor-pointer hover:underline'}>
          Dowiedz się więcej <BsArrowRight />
      </span>
    </Link>
  );
}

export function CustomerExcerpt () {
  return (
    <>
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
    </>
  );
}

export function SpecialistExcerpt () {
  return (
    <>
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
    </>
  );
}

