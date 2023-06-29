import React, { ReactElement } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Link from 'next/link';

import Layout from 'components/Common/Layout';
import Footer from 'components/Common/Footer';

const Container = tw.div`p-5`;
const ItemTitle = tw.h2`text-lg text-center my-5 font-bold`;
const StyledUl = styled.ul`
  ${tw`list-disc list-inside`}
  a { ${tw`text-blue-600 hover:underline`} }
`;
const StyledLi = tw.li`pl-4`;

export default function CookiePolicy () {
  return (
    <Container>
      <ItemTitle>Polityka Cookies</ItemTitle>
      <p>Cookies stanowią pliki tekstowe i powstają one w spos&oacute;b automatyczny
        za pomocą przeglądarek internetowych w momencie odwiedzania lub korzystania
        ze stron internetowych. Są one wysyłane przez stronę internetową i zapisywane
        na urządzeniu użytkownika. Za ich pomocą administrator otrzymuje informacje
        pozwalające między innymi na umożliwienie prawidłowego działania strony, zapewnienie
        bezpieczeństwa a także usprawnienie jej działania.</p>

      <ItemTitle>Administrator Danych</ItemTitle>
      <p>Administratorem danych osobowych jest FUNDACJA ROZWOJU PRZEDSIĘBIORCZOŚCI &bdquo;TW&Oacute;J
        STARTUP&rdquo; z siedzibą w Warszawie
        (adres siedziby: ul. Żurawia 6/12, lok. 766, 00-503 Warszawa), wpisana do
        Rejestru Przedsiębiorc&oacute;w Krajowego Rejestru Sądowego przez Sąd Rejonowy
        dla m.st. Warszawy w Warszawie, XII Wydział Gospodarczy KRS pod
        numerem 0000442857; NIP: 5213641211; REGON: 146433467, dane kontaktowe:
        numer telefonu (537896221), adres e-mail:
        (<a href="mailto:contact@adsylabs.com">contact@adsylabs.com</a>) w związku z
        realizowaną przez Jakuba Janiaka zorganizowaną częścią przedsiębiorstwa o nazwie Adsylabs.</p>

      <ItemTitle>Rodzaje plik&oacute;w cookies</ItemTitle>
      <p>W ramach naszych stron internetowych wykorzystujemy następujące rodzaje plik&oacute;w cookies:</p>

      <p><strong>Niezbędne/Techniczne: </strong>Niniejsze pliki są konieczne dla prawidłowego funkcjonowania
        strony internetowej. Pliki te są instalowane w szczeg&oacute;lności na potrzeby zapamiętywania sesji
        logowania lub wypełniania formularzy, a także w celu zapamiętania czy zostałeś poinformowany o
        wykorzystywaniu plik&oacute;w cookies.</p>

      <p><strong>Funkcjonalne: </strong>Zapamiętują i dostosowują platformę do Twoich wybor&oacute;w, np.
        pozwalają na automatyczne uzupełnienie adresu e-mail, z kt&oacute;rego ostatnio logowano się w ramach platformy.</p>

      <p><strong>Analityczne</strong>: Pozwalają na sprawdzenie liczby wizyt i źr&oacute;deł ruchu. Za ich
        pomocą jesteśmy w stanie ustalić kt&oacute;re strony cieszą się popularnością a kt&oacute;re nie.
        Za ich pomocą badamy statystyki i poprawiamy wydajność naszych stron. W ramach naszych stron
        korzystamy między innymi z rozwiązań firmy Google, Mailerchimp oraz Hotjar.</p>

      <p><strong>Marketingowych </strong>- Pozwalają na dopasowanie wyświetlanych treści reklamowych do
        zainteresowań użytkownika, nie tylko w ramach naszego portalu, ale też poza nim. Mogą być instalowane
        przez partner&oacute;w reklamowych. Na podstawie informacji z tych plik&oacute;w cookie i aktywności w
        innych serwisach jest budowany profil zainteresowań użytkownika.</p>

      <p><strong>Pliki cookies portali społecznościowych: </strong>Są to pliki cookie instalowane przez
        naszych partner&oacute;w, żeby dopasowywać wyświetlane treści reklamowe w mediach społecznościowych.
        Na ich podstawie budowany jest profil zainteresowań użytkownika. Dzięki temu wyświetlane treści są
        dopasowane do indywidualnych potrzeb użytkownika.</p>

      <ItemTitle>Czas Przechowywania plik&oacute;w Cookies</ItemTitle>
      <p>Sesyjne - są przechowywane na użytkowanym urządzeniu do czasu opuszczenia strony, np. poprzez
        wyłączenie przeglądarki internetowej.</p>
      <p>Stałe - istnieją do czasu ich ręcznego usunięcia bądź upłynięcia określonego w przeglądarce czasu.</p>

      <ItemTitle>Rodzaj zbieranych danych</ItemTitle>
      <p>Zaliczamy do nich:</p>
      <StyledUl>
        <StyledLi>adres IP urządzenia z kt&oacute;rego korzysta użytkownik</StyledLi>
        <StyledLi>typ urządzenia</StyledLi>
        <StyledLi>czas przebywania na stronie</StyledLi>
        <StyledLi>podjęte czynności na stronie</StyledLi>
        <StyledLi>lokalizację z kt&oacute;rej dokonywane jest połączenie</StyledLi>
      </StyledUl>

      <ItemTitle>Spos&oacute;b wycofania zgody</ItemTitle>
      <p>Niekt&oacute;re ciasteczka są pobierane przez przeglądarkę internetową w chwili wejścia na
        stronę internetową. W celu zablokowania możliwości pobierania ciasteczek należy zastosować
        metodę istniejącą dla danej przeglądarki internetowej:</p>
      <StyledUl>
        <StyledLi>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%25C5%2582%25C4%2585czanie+i+wy%25C5%2582%25C4%2585czanie+obs%25C5%2582ugi+ciasteczek&amp;redirectlocale=pl"
          >
            Firefox
          </Link>
        </StyledLi>
        <StyledLi>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform=Desktop&amp;hl=pl"
          >
            Chrome
          </Link>
        </StyledLi>
        <StyledLi>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.microsoft.com/pl-pl/help/17442/windows-internet-explorer-delete-manage-cookies"
          >
            Microsoft Edge
          </Link>
        </StyledLi>
        <StyledLi>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://support.apple.com/pl-pl/HT201265"
          >
            Safari
          </Link>
        </StyledLi>
      </StyledUl>
      <p>Brak możliwości zapisywania/odczytywania plik&oacute;w cookies może skutkować niepełnym i
        niepoprawnym działaniem strony internetowej, jednakże korzystanie ze strony będzie nadal możliwe.</p>

      <ItemTitle>Kontakt</ItemTitle>
      <p>W przypadku pytań dotyczących przetwarzania danych osobowych lub woli skorzystania z
        przysługujących praw, można skontaktować się z nami pod adresami wskazanymi w punkcie &ldquo;<strong>Administrator danych</strong>&rdquo;</p>
      <p>Ponadto informacje o nas i przysługujących Tobie prawach, można znaleźć pod wskazanym adresem: (adsylabs.com/polityka-cookies)</p>
      <p>W przypadku naruszenia przepis&oacute;w o ochronie danych osobowych, masz prawo do zgłoszenia skargi do Prezesa Urzędu Ochrony Danych Osobowych pod adresem
        <a href="https://uodo.gov.pl/">https://uodo.gov.pl/</a>
      </p>

      <Footer />
    </Container>
  );
}

CookiePolicy.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout
      meta={{
        title: 'Adsylabs - polityka cookies',
        description: 'Nasza polityka cookies',
      }}
    >
      {page}
    </Layout>
  );
};