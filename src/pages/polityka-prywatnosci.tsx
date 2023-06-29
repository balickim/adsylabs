import React, { ReactElement } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Layout from 'components/Common/Layout';
import Footer from 'components/Common/Footer';

const Container = tw.div`p-5`;
const Title = tw.h1`text-2xl text-center my-5 font-bold`;
const ItemTitle = tw.h2`text-lg text-center my-5 font-bold`;
const StyledUl = styled.ul`
  ${tw`list-disc list-inside`}
  a { ${tw`text-blue-600 hover:underline`} }
  &{${tw`pl-4`}}
`;
const StyledLi = tw.li`pl-4`;

export default function PrivacyPolicy () {
  return (
    <Container>
      <Title>POLITYKA PRYWATNOŚCI Adsylabs</Title>
      <ItemTitle>Kto jest administratorem państwa danych?</ItemTitle>
      <p>Administratorem Pani/ Pana danych osobowych jest <strong>FUNDACJA ROZWOJU
        PRZEDSIĘBIORCZOŚCI &bdquo;TW&Oacute;J STARTUP&rdquo;</strong> z siedzibą w Warszawie (adres siedziby: <br /> ul. Żurawia 6/12, lok. 766, 00-503 Warszawa).</p>
      <p>Powyższa polityka prywatności dotyczy usług Fundacji świadczonych
        przezzorganizowaną część przedsiębiorstwa Adsylabsdane kontaktowe:
        numer telefonu 537896221, adres e-mail: <a href="mailto:contact@adsylabs.com">contact@adsylabs.com</a> realizowanychprzez Jakuba Janiaka.</p>

      <ItemTitle>Dlaczego przetwarzamy Państwa Dane?</ItemTitle>
      <StyledUl>
        <StyledLi>W związku z usługami świadczonymi za pośrednictwem Adsylabs polegającymi na
          udzielaniu dostępu do platformy Adsylabs Tj. w celu zawarcia lub wykonania umowy
          (art.6 ust. 1 lit.b Rozporządzenia), Państwa dane będą przechowywane do czasu wykonania umowy</StyledLi>
        <StyledLi>W celach marketingowych i promocji produkt&oacute;w oferowanych przez Fundację
          Rozwoju Przedsiębiorczości &bdquo;Tw&oacute;j StartUp&rdquo; z siedzibą w Warszawie
          będących naszym prawnie uzasadnionym interesem (art. 6 ust. 1 lit. f Rozporządzenia).
          Państwa dane będą przetwarzane do czasu wyrażenia sprzeciwu.</StyledLi>
        <StyledLi>Wypełniania wszelkich ciążących na nas obowiązk&oacute;w prawnych w związku z
          podjętą wsp&oacute;łpracą (art. 6 ust. 1 lit. c Rozporządzenia), cel ten związany
          jest z obowiązkami prawnymi przechowania określonych dokument&oacute;w przez czas
          wskazany w przepisach prawa, np.:</StyledLi>
        <StyledUl>
          <StyledLi>Ustawy z 29.09.1994 r. o rachunkowości (Dz. U. z 2017 r. poz. 1858);</StyledLi>
          <StyledLi>Ustawy z dnia 29 sierpnia 1997 r. - Ordynacja podatkowa (Dz. U. 1997 nr 137 poz. 926);</StyledLi>
          <StyledLi>Ustawy z dnia 1 marca 2018 r. - o przeciwdziałaniu praniu pieniędzy oraz finansowaniu terroryzmu (Dz. U. 2018 poz. 723).</StyledLi>
        </StyledUl>
      </StyledUl>
      <StyledUl>
        <StyledLi>W celu ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami,
          co jest naszym prawnie uzasadnionym interesem (podstawa z art. 6 ust. 1 lit. f) Rozporządzenia).
          Dane będą przetwarzane do czasu przedawnienia roszczeń</StyledLi>
        <StyledLi>W przypadku wyrażenia zgody, Państwa dane będą przetwarzane w granicach i
          celu wskazanym w wyrażonej zgodzie (podstawa z art. 6 ust. 1 lit. a).Dane będą przetwarzane do czasu wycofania zgody</StyledLi>
      </StyledUl>

      <ItemTitle>Jakie dane podlegają przetwarzaniu?</ItemTitle>
      <p>Do zawarcia umowy wymagamy podania danych na formularzu umowy / zam&oacute;wienia
        (jeśli ich Państwo nie podadzą, nie zawrzemy umowy/ nie wykonamy zam&oacute;wienia).
        Dodatkowo możemy poprosić o dane opcjonalne, kt&oacute;re nie mają wpływu na zawarcie
        umowy (jeśli ich nie otrzymamy, nie będziemy mogli, np. dzwonić pod numer kontaktowy).</p>
      <p>W trakcie trwania umowy, świadcząc usługi, wchodzimy w posiadanie innych Pani/Pana
        danych. Pojawienie się u nas Pani/Pana danych osobowych jest konsekwencją działania
        naszych usług, z kt&oacute;rych Pan/Pani korzysta.</p>

      <ItemTitle>Komu zostaną udostępnione dane?</ItemTitle>
      <StyledUl>
        <StyledLi>Organy władzy publicznej, w zakresie, w kt&oacute;rym nie otrzymują danych w
          ramach konkretnego postępowania na podstawie prawa np. w związku z przeciwdziałaniem praniu pieniędzy;</StyledLi>
        <StyledLi>Podmioty, kt&oacute;re przetwarzają Pana/Pani dane osobowe w imieniu Fundacji na
          podstawie zawartej z Fundacją umowy powierzania przetwarzania danych osobowych
          (tzw. podmioty przetwarzające). Będą to, m.in.: Beneficjenci Fundacji, informatycy, firmy archiwizujące, firmy hostingowe;</StyledLi>
        <StyledLi>Zewnętrzni administratorzy danych (tzw. R&oacute;wnoległy Administrator, kt&oacute;remu
          dane są udostępniane, np. radcy prawni i adwokaci, podmioty prowadzące działalność kurierską
          lub pocztową, podmioty nabywające wierzytelności - w razie niezapłacenia przez Państwa naszych faktur w terminie),</StyledLi>
        <StyledLi>Podmioty znajdujące się poza EOG, lecz tylko wtedy, gdy jest to konieczne i z zapewnieniem odpowiedniego stopnia ochrony, przede wszystkim poprzez:</StyledLi>
        <StyledUl>
          <StyledLi>Wsp&oacute;łpracę z podmiotami w państwach, w odniesieniu, do kt&oacute;rych została wydana stosowna decyzja Komisji Europejskiej;</StyledLi>
          <StyledLi>Zastosowanie standardowych klauzul umownych wydanych przez Komisję Europejską.</StyledLi>
        </StyledUl>
      </StyledUl>
      <p>Administrator zawsze informuje o zamiarze przekazania danych osobowych poza EOG na etapie ich zbierania.</p>

      <ItemTitle>Czy Dane są profilowane?</ItemTitle>
      <p>Informujemy, iż Państwa dane nie będą podlegać profilowaniu, czyli zautomatyzowanej
        analizy Pana/Pani danych i opracowania przewidywań na temat preferencji lub
        przyszłych zachowań (profilowanie oznacza, np. w przypadku profilowania
        marketingowego określanie, kt&oacute;rą ofertą może być Pan/Pani najbardziej
        zainteresowany/a w oparciu o wcześniejsze Pana/Pani wybory).</p>

      <ItemTitle> Jakie przysługują Państwu prawa?</ItemTitle>
      <StyledUl>
        <StyledLi>Prawo dostępu do przetwarzanych przez nas danych osobowych (art. 15 Rozporządzenia),</StyledLi>
        <StyledLi>Prawo do sprostowania powierzonych danych osobowych, w tym ich poprawianie (art. 16 Rozporządzenia),</StyledLi>
        <StyledLi>Prawo do usunięcia danych osobowych z naszych system&oacute;w tzw. &bdquo;prawo <br />
          do bycia zapomnianym&rdquo; - jeżeli Państwa zdaniem nie ma podstaw do tego, abyśmy przetwarzali
          Państwa dane, mogą Państwo zażądać, abyśmy je usunęli (art. 17 Rozporządzenia),</StyledLi>
        <StyledLi>Prawo do ograniczenia przetwarzania danych osobowych - mogą Państwo zażądać, abyśmy ograniczyli
          przetwarzanie danych osobowych wyłącznie do ich przechowywania lub wykonywania uzgodnionych z
          Państwem działań, jeżeli posiadamy nieprawidłowe dane na Państwa temat lub przetwarzamy je bezpodstawnie;
          lub nie chcą Państwo, żebyśmy je usunęli, bo są Państwu potrzebne do ustalenia, dochodzenia lub
          obrony roszczeń; lub na czas wniesionego przez sprzeciwu względem przetwarzania danych (art. 18 Rozporządzenia),</StyledLi>
        <StyledLi>Prawo do przenoszenia danych &ndash; Mają Państwo prawo otrzymać od nas w ustrukturyzowanym,
          powszechnie używanym formacie nadającym się do odczytu maszynowego (np. format &bdquo;.csv&rdquo;)
          dane osobowe dotyczące Państwa, w kt&oacute;rych posiadaniu jesteśmy na podstawie umowy lub wyrażonej zgody.
          Uprawnienie to będzie przysługiwało, gdy będziemy posiadać dane w formacie elektronicznym &ndash; w przypadku
          posiadania danych jedynie w formie papierowej nie będą Państwo mieli możliwości skorzystania z tego uprawnienia.
          Mogą Państwo zlecić nam przesłanie tych danych bezpośrednio innemu podmiotowi (art. 20 Rozporządzenia),</StyledLi>
        <StyledLi>Prawo do cofnięcia zgody na przetwarzanie danych osobowych -w każdej chwili mają Państwo prawo cofnąć zgodę
          na przetwarzanie danych osobowych, kt&oacute;re przetwarzamy na podstawie zgody &ndash; art. 7 ust. 3 Rozporządzenia.
          Cofnięcie zgody nie będzie wpływać na zgodność z prawem przetwarzania, kt&oacute;rego dokonano na podstawie zgody
          przed jej wycofaniem. Cofnięcie zgody występuje poprzez wysłanie wiadomości mailowej na adres:
        <a href="mailto:contact@adsylabs.com">contact@adsylabs.com</a> Prawo do sprzeciwu - może Pan/Pani wnieść
          sprzeciw wobec przetwarzania Pana/Pani danych, jeśli podstawą wykorzystania danych jest nasz prawnie uzasadniony
          interes - art. 21 Rozporządzenia. W takiej sytuacji, po rozpatrzeniu Państwa wniosku, nie będziemy już mogli
          przetwarzać danych osobowych objętych sprzeciwem na tej podstawie, chyba, że wykażemy, istnienie prawnie uzasadnionych
          podstaw do przetwarzania danych, kt&oacute;re uznaje się za nadrzędne wobec Państwa interes&oacute;w, praw i wolności</StyledLi>
        <StyledLi>Jeżeli w Państwa opinii przetwarzanie danych osobowych narusza przepisy Rozporządzenia,
          przysługuje Państwu prawo do wniesienia skargi do organu nadzorczego tj. Prezesa Urzędu Ochrony Danych Osobowych</StyledLi>
      </StyledUl>

      <br/>

      <ItemTitle>Kontakt</ItemTitle>
      <p>Jeśli potrzebujecie Państwo dodatkowych informacji związanych z ochroną danych osobowych lub
        chcecie skorzystać z przysługujących praw, prosimy o kontakt na adres e-mail: <strong>rodo@twojstartup.pl</strong>
      </p>

      <Footer />
    </Container>
  );
}

PrivacyPolicy.getLayout = function getLayout (page: ReactElement) {
  return (
    <Layout
      meta={{
        title: 'Adsylabs - polityka prywatności',
        description: 'Nasza polityka prywatności',
      }}
    >
      {page}
    </Layout>
  );
};