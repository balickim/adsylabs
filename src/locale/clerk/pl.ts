import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Check your phone',
      subtitle: 'to continue to {{applicationName}}',
      formTitle: 'Verification code',
      formSubtitle: 'Enter the verification code sent to your phone number',
      resendButton: 'Resend code',
    },
  },
} as const;

export const pl: LocalizationResource = {
  socialButtonsBlockButton: 'Kontynuuj z {{provider|titleize}}',
  dividerText: 'albo',
  formFieldLabel__emailAddress: 'Adres email',
  formFieldLabel__emailAddresses: 'Adresy email',
  formFieldLabel__phoneNumber: 'Numer telefonu',
  formFieldLabel__username: 'Nazwa użytkownika',
  formFieldLabel__emailAddress_phoneNumber: 'Adres email albo numer telefonu',
  formFieldLabel__emailAddress_username: 'Adres email albo nazwa użytkownika',
  formFieldLabel__phoneNumber_username: 'Numer telefonu albo nazwa użytkownika',
  formFieldLabel__emailAddress_phoneNumber_username: 'Adres email, numer telefonu albo nazwa użytkownika',
  formFieldLabel__password: 'Hasło',
  // @ts-ignore
  formFieldLabel__currentPassword: 'Aktualne hasło',
  formFieldLabel__newPassword: 'Nowe hasło',
  formFieldLabel__confirmPassword: 'Potwierdź hasło',
  formFieldLabel__signOutOfOtherSessions: 'Wyloguj ze wszystkich innych urządzeń',
  formFieldLabel__firstName: 'Imię',
  formFieldLabel__lastName: 'Nazwisko',
  formFieldLabel__backupCode: 'Kod zapasowy',
  formFieldLabel__organizationName: 'Nazwa organizacji',
  formFieldLabel__organizationSlug: 'Adres URL slug organizacji',
  formFieldLabel__role: 'Rola',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    'Wprowadź lub wklej jedno lub więcej adresów e-mail, oddzielając je spacją lub przecinkami',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__phoneNumber_username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldAction__forgotPassword: 'Zapomniałem hasła',
  formFieldHintText__optional: 'Opcjonalne',
  formButtonPrimary: 'Kontynuuj',
  signInEnterPasswordTitle: 'Wprowadź swoje hasło',
  backButton: 'Powrót',
  footerActionLink__useAnotherMethod: 'Użyj innej metody',
  badge__primary: 'Główny',
  badge__thisDevice: 'To urządzenie',
  badge__userDevice: 'Urządzenie użytkownika',
  badge__otherImpersonatorDevice: 'Inne urządzenie osobiste',
  badge__default: 'Domyślne',
  badge__unverified: 'Niezweryfikowane',
  badge__requiresAction: 'Wymaga działania',
  badge__you: 'Ty',
  footerPageLink__help: 'Pomoc',
  footerPageLink__privacy: 'Prywatność',
  footerPageLink__terms: 'Warunki',
  paginationButton__previous: 'Wstecz',
  paginationButton__next: 'Dalej',
  paginationRowText__displaying: 'Wyświetlanie',
  paginationRowText__of: 'z',
  membershipRole__admin: 'Admin',
  membershipRole__basicMember: 'Użytkownik',
  membershipRole__guestMember: 'Gość',
  signUp: {
    start: {
      title: 'Utwórz swoje konto',
      subtitle: 'aby kontynuować w {{applicationName}}',
      actionText: 'Masz już konto?',
      actionLink: 'Zaloguj się',
    },
    emailLink: {
      title: 'Zweryfikuj swój adres e-mail',
      subtitle: 'aby kontynuować w {{applicationName}}',
      formTitle: 'Link weryfikacyjny',
      formSubtitle: 'Użyj linku weryfikacyjnego wysłanego na Twój adres e-mail',
      resendButton: 'Wyślij ponownie',
      verified: {
        title: 'Pomyślnie zarejestrowano',
      },
      loading: {
        title: 'Rejestrowanie...',
      },
      verifiedSwitchTab: {
        title: 'Pomyślnie zweryfikowano adres e-mail',
        subtitle: 'Powróć do nowo otwartej karty, aby kontynuować',
        subtitleNewTab: 'Powróć do poprzedniej karty, aby kontynuować',
      },
    },
    emailCode: {
      title: 'Zweryfikuj swój adres e-mail',
      subtitle: 'aby kontynuować w {{applicationName}}',
      formTitle: 'Kod weryfikacyjny',
      formSubtitle: 'Wprowadź kod weryfikacyjny wysłany na Twój adres e-mail',
      resendButton: 'Wyślij ponownie',
    },
    phoneCode: {
      title: 'Zweryfikuj swój numer telefonu',
      subtitle: 'aby kontynuować w {{applicationName}}',
      formTitle: 'Kod weryfikacyjny',
      formSubtitle: 'Wprowadź kod weryfikacyjny wysłany na Twój numer telefonu',
      resendButton: 'Wyślij ponownie',
    },
    continue: {
      title: 'Wypełnij brakujące pola',
      subtitle: 'aby kontynuować w {{applicationName}}',
      actionText: 'Masz już konto?',
      actionLink: 'Zaloguj się',
    },
  },
  signIn: {
    start: {
      title: 'Zaloguj się',
      subtitle: 'aby kontynuować do {{applicationName}}',
      actionText: 'Nie masz konta?',
      actionLink: 'Zarejestruj się',
      actionLink__use_email: 'Użyj adresu email',
      actionLink__use_phone: 'Użyj numeru telefonu',
      actionLink__use_username: 'Użyj nazwy użytkownika',
      actionLink__use_email_username: 'Użyj adresu email lub nazwy użytkownika',
    },
    password: {
      title: 'Wprowadź swoje hasło',
      subtitle: 'aby kontynuować do {{applicationName}}',
      actionLink: 'Użyj innego sposobu',
    },
    emailCode: {
      title: 'Sprawdź swoją skrzynkę e-mail',
      subtitle: 'aby kontynuować do {{applicationName}}',
      formTitle: 'Kod weryfikacyjny',
      formSubtitle: 'Wprowadź kod weryfikacyjny wysłany na Twój adres e-mail',
      resendButton: 'Wyślij ponownie kod',
    },
    emailLink: {
      title: 'Sprawdź swoją skrzynkę e-mail',
      subtitle: 'aby kontynuować do {{applicationName}}',
      formTitle: 'Link weryfikacyjny',
      formSubtitle: 'Użyj linku weryfikacyjnego wysłanego na Twój adres e-mail',
      resendButton: 'Wyślij ponownie link',
      unusedTab: {
        title: 'Możesz zamknąć to okno',
      },
      verified: {
        title: 'Pomyślnie zalogowano',
        subtitle: 'Zostaniesz przekierowany wkrótce',
      },
      verifiedSwitchTab: {
        subtitle: 'Powróć do pierwotnego okna, aby kontynuować',
        titleNewTab: 'Zalogowano w innym oknie',
        subtitleNewTab: 'Powróć do nowo otwartego okna, aby kontynuować',
      },
      loading: {
        title: 'Logowanie...',
        subtitle: 'Wkrótce zostaniesz przekierowany',
      },
      failed: {
        title: 'Ten link weryfikacyjny jest nieprawidłowy',
        subtitle: 'Powróć do pierwotnego okna, aby kontynuować.',
      },
      expired: {
        title: 'Ten link weryfikacyjny wygasł',
        subtitle: 'Powróć do pierwotnego okna, aby kontynuować.',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'Weryfikacja dwuetapowa',
      subtitle: '',
      formTitle: 'Kod weryfikacyjny',
      formSubtitle: 'Wpisz kod wygenerowany przez swoją aplikację autoryzacyjną',
    },
    backupCodeMfa: {
      title: 'Wpisz kod zapasowy',
      subtitle: 'aby kontynuować do {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Użyj innego sposobu',
      actionLink: 'Otrzymaj pomoc',
      blockButton__emailLink: 'Wyślij link na {{identifier}}',
      blockButton__emailCode: 'Wyślij kod na {{identifier}}',
      blockButton__phoneCode: 'Wyślij kod na {{identifier}}',
      blockButton__password: 'Zaloguj się hasłem',
      blockButton__totp: 'Użyj swojej aplikacji autoryzacyjnej',
      blockButton__backupCode: 'Użyj kodu zapasowego',
      getHelp: {
        title: 'Otrzymaj pomoc',
        content: 'Jeśli masz trudności z zalogowaniem się do swojego konta, napisz do nas e-mail, a my postaramy się jak najszybciej przywrócić dostęp do Twojego konta.',
        blockButton__emailSupport: 'Wsparcie e-mail',
      },
    },
    noAvailableMethods: {
      title: 'Nie można się zalogować',
      subtitle: 'Wystąpił błąd',
      message: 'Nie można kontynuować logowania. Nie ma dostępnych metod autoryzacji.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Menu', // Menu
    formButtonPrimary__continue: 'Kontynuuj', // Continue
    formButtonPrimary__finish: 'Zakończ', // Finish
    formButtonReset: 'Anuluj', // Cancel
    start: {
      headerTitle__account: 'Konto', // Account
      headerTitle__security: 'Bezpieczeństwo', // Security
      headerSubtitle__account: 'Zarządzaj swoimi danymi konta', // Manage your account information
      headerSubtitle__security: 'Zarządzaj preferencjami bezpieczeństwa', // Manage your security preferences
      profileSection: {
        title: 'Profil', // Profile
      },
      usernameSection: {
        title: 'Nazwa użytkownika', // Username
        primaryButton__changeUsername: 'Zmień nazwę użytkownika', // Change username
        primaryButton__setUsername: 'Ustaw nazwę użytkownika', // Set username
      },
      emailAddressesSection: {
        title: 'Adresy e-mail', // Email addresses
        primaryButton: 'Dodaj adres e-mail', // Add an email address
        detailsTitle__primary: 'Podstawowy adres e-mail', // Primary email address
        detailsSubtitle__primary: 'To jest podstawowy adres e-mail', // This email address is the primary email address
        detailsAction__primary: 'Ukończ weryfikację', // Complete verification
        detailsTitle__nonPrimary: 'Ustaw jako podstawowy adres e-mail', // Set as primary email address
        detailsSubtitle__nonPrimary:
          'Ustaw ten adres e-mail jako podstawowy, aby otrzymywać komunikaty dotyczące Twojego konta.',
        detailsAction__nonPrimary: 'Ustaw jako podstawowy', // Set as primary
        detailsTitle__unverified: 'Niezweryfikowany adres e-mail', // Unverified email address
        detailsSubtitle__unverified: 'Ten adres e-mail nie został zweryfikowany i może mieć ograniczoną funkcjonalność',
        detailsAction__unverified: 'Ukończ weryfikację', // Complete verification
        destructiveActionTitle: 'Usuń', // Remove
        destructiveActionSubtitle: 'Usuń ten adres e-mail i usuń go z konta', // Delete this email address and remove it from your account
        destructiveAction: 'Usuń adres e-mail', // Remove email address
      },
      phoneNumbersSection: {
        title: 'Numery telefonów',
        primaryButton: 'Dodaj numer telefonu',
        detailsTitle__primary: 'Główny numer telefonu',
        detailsSubtitle__primary: 'Ten numer telefonu jest głównym numerem telefonu',
        detailsAction__primary: 'Zakończ weryfikację',
        detailsTitle__nonPrimary: 'Ustaw jako główny numer telefonu',
        detailsSubtitle__nonPrimary:
          'Ustaw ten numer telefonu jako główny, aby otrzymywać komunikaty dotyczące Twojego konta.',
        detailsAction__nonPrimary: 'Ustaw jako główny',
        detailsTitle__unverified: 'Niezweryfikowany numer telefonu',
        detailsSubtitle__unverified: 'Ten numer telefonu nie został zweryfikowany i może mieć ograniczone funkcje',
        detailsAction__unverified: 'Zakończ weryfikację',
        destructiveActionTitle: 'Usuń',
        destructiveActionSubtitle: 'Usuń ten numer telefonu i usuń go z Twojego konta',
        destructiveAction: 'Usuń numer telefonu',
      },
      connectedAccountsSection: {
        title: 'Podłączone konta',
        primaryButton: 'Podłącz konto',
        title__conectionFailed: 'Ponów próbę nieudanej łączności',
        title__connectionFailed: 'Ponów próbę nieudanej łączności',
        title__reauthorize: 'Wymagana ponowna autoryzacja',
        subtitle__reauthorize:
          'Wymagane zakresy zostały zaktualizowane i możesz mieć ograniczone funkcjonalności. Proszę autoryzuj ponownie tę aplikację, aby uniknąć problemów.',
        actionLabel__conectionFailed: 'Spróbuj ponownie',
        actionLabel__connectionFailed: 'Spróbuj ponownie',
        actionLabel__reauthorize: 'Autoryzuj teraz',
        destructiveActionTitle: 'Usuń',
        destructiveActionSubtitle: 'Usuń to podłączone konto z Twojego konta',
        destructiveActionAccordionSubtitle: 'Usuń podłączone konto',
      },
      passwordSection: {
        title: 'Hasło',
        primaryButton__changePassword: 'Zmień hasło',
        primaryButton__setPassword: 'Ustaw hasło',
      },
      mfaSection: {
        title: 'Weryfikacja dwuetapowa',
        primaryButton: 'Dodaj weryfikację dwuetapową',
        phoneCode: {
          destructiveActionTitle: 'Usuń',
          destructiveActionSubtitle: 'Usuń ten numer telefonu z metod weryfikacji dwuetapowej',
          destructiveActionLabel: 'Usuń numer telefonu',
          title__default: 'Domyślny czynnik',
          title__setDefault: 'Ustaw jako domyślny czynnik',
          subtitle__default: 'Ten czynnik będzie używany jako domyślna metoda weryfikacji dwuetapowej podczas logowania.',
          subtitle__setDefault:
            'Ustaw ten czynnik jako domyślny, aby używać go jako domyślnej metody weryfikacji dwuetapowej podczas logowania.',
          actionLabel__setDefault: 'Ustaw jako domyślny',
        },
        backupCodes: {
          headerTitle: 'Kody zapasowe',
          title__regenerate: 'Wygeneruj nowe kody zapasowe',
          subtitle__regenerate:
            'Uzyskaj nowy zestaw bezpiecznych kodów zapasowych. Poprzednie kody zapasowe zostaną usunięte i nie będą działać.',
          actionLabel__regenerate: 'Wygeneruj kody',
        },
        totp: {
          headerTitle: 'Aplikacja autoryzująca',
          title: 'Domyślny czynnik',
          subtitle: 'Ten czynnik będzie używany jako domyślna metoda weryfikacji dwuetapowej podczas logowania.',
          destructiveActionTitle: 'Usuń',
          destructiveActionSubtitle: 'Usuń aplikację autoryzującą z metod weryfikacji dwuetapowej',
          destructiveActionLabel: 'Usuń aplikację autoryzującą',
        },
      },
      activeDevicesSection: {
        title: 'Aktywne urządzenia',
        primaryButton: 'Aktywne urządzenia',
        detailsTitle: 'Bieżące urządzenie',
        detailsSubtitle: 'Jest to urządzenie, którego aktualnie używasz',
        destructiveActionTitle: 'Wyloguj',
        destructiveActionSubtitle: 'Wyloguj się z konta na tym urządzeniu',
        destructiveAction: 'Wyloguj z urządzenia',
      },
      web3WalletsSection: {
        title: 'Portfele Web3',
        primaryButton: 'Portfele Web3',
        destructiveActionTitle: 'Usuń',
        destructiveActionSubtitle: 'Usuń ten portfel Web3 z Twojego konta',
        destructiveAction: 'Usuń portfel',
      },
    },
    profilePage: {
      title: 'Aktualizuj profil',
      imageFormTitle: 'Obraz profilowy',
      imageFormSubtitle: 'Wyślij obraz',
      imageFormDestructiveActionSubtitle: 'Usuń obraz',
      fileDropAreaTitle: 'Przeciągnij plik tutaj lub...',
      fileDropAreaAction: 'Wybierz plik',
      fileDropAreaHint: 'Wyślij obraz w formacie JPG, PNG, GIF lub WEBP o rozmiarze mniejszym niż 10 MB',
      successMessage: 'Twój profil został zaktualizowany.',
    },
    usernamePage: {
      title: 'Aktualizuj nazwę użytkownika',
      successMessage: 'Twoja nazwa użytkownika została zaktualizowana.',
    },
    emailAddressPage: {
      title: 'Dodaj adres e-mail',
      emailCode: {
        formHint: 'Na ten adres e-mail zostanie wysłany e-mail z kodem weryfikacyjnym.',
        formTitle: 'Kod weryfikacyjny',
        formSubtitle: 'Wprowadź kod weryfikacyjny wysłany na adres {{identifier}}',
        resendButton: 'Wyślij ponownie kod',
        successMessage: 'Adres e-mail {{identifier}} został dodany do Twojego konta.',
      },
      emailLink: {
        formHint: 'Na ten adres e-mail zostanie wysłany e-mail z linkiem weryfikacyjnym.',
        formTitle: 'Link weryfikacyjny',
        formSubtitle: 'Kliknij na link weryfikacyjny w e-mailu wysłanym na adres {{identifier}}',
        resendButton: 'Wyślij ponownie link',
        successMessage: 'Adres e-mail {{identifier}} został dodany do Twojego konta.',
      },
      removeResource: {
        title: 'Usuń adres e-mail',
        messageLine1: '{{identifier}} zostanie usunięty z tego konta.',
        messageLine2: 'Nie będziesz już mógł się logować używając tego adresu e-mail.',
        successMessage: '{{emailAddress}} został usunięty z Twojego konta.',
      },
    },
    phoneNumberPage: {
      title: 'Dodaj numer telefonu',
      successMessage: '{{identifier}} został dodany do Twojego konta.',
      infoText: 'Na ten numer zostanie wysłana wiadomość tekstowa z linkiem weryfikacyjnym.',
      infoText__secondary: 'Mogą obowiązywać opłaty za wiadomości i dane.',
      removeResource: {
        title: 'Usuń numer telefonu',
        messageLine1: '{{identifier}} zostanie usunięty z tego konta.',
        messageLine2: 'Nie będziesz już mógł się logować używając tego numeru telefonu.',
        successMessage: '{{phoneNumber}} został usunięty z Twojego konta.',
      },
    },
    connectedAccountPage: {
      title: 'Dodaj połączone konto',
      formHint: 'Wybierz dostawcę, aby połączyć swoje konto.',
      formHint__noAccounts: 'Nie ma dostępnych zewnętrznych dostawców kont.',
      socialButtonsBlockButton: 'Połącz konto {{provider|titleize}}',
      successMessage: 'Dostawca został dodany do Twojego konta',
      removeResource: {
        title: 'Usunięcie połączonego konta',
        messageLine1: '{{identifier}} zostanie usunięte z tego konta.',
        messageLine2:
          'Nie będziesz już mógł używać tego połączonego konta, a wszelkie zależne funkcje przestaną działać.',
        successMessage: '{{connectedAccount}} zostało usunięte z twojego konta.',
      },
    },
    web3WalletPage: {
      title: 'Dodaj portfel web3',
      subtitle__availableWallets: 'Wybierz portfel web3, aby połączyć go z Twoim kontem.',
      subtitle__unavailableWallets: 'Brak dostępnych portfeli web3.',
      successMessage: 'Portfel został dodany do Twojego konta.',
      removeResource: {
        title: 'Usuń portfel web3',
        messageLine1: '{{identifier}} zostanie usunięty z tego konta.',
        messageLine2: 'Nie będziesz już mógł się zalogować przy użyciu tego portfela web3 i wszelkie zależne funkcje przestaną działać.',
        successMessage: '{{web3Wallet}} został usunięty z Twojego konta.',
      },
    },
    passwordPage: {
      title: 'Ustaw hasło',
      changePasswordTitle: 'Zmień hasło',
      successMessage: 'Twoje hasło zostało ustawione.',
      changePasswordSuccessMessage: 'Twoje hasło zostało zaktualizowane.',
      sessionsSignedOutSuccessMessage: 'Wylogowano z wszystkich innych urządzeń.',
    },
    mfaPage: {
      title: 'Dodaj weryfikację dwuetapową',
      formHint: 'Wybierz metodę dodania.',
    },
    mfaTOTPPage: {
      title: 'Dodaj aplikację autentykatora',
      verifyTitle: 'Kod weryfikacyjny',
      verifySubtitle: 'Wprowadź kod weryfikacyjny wygenerowany przez autentykator',
      successMessage:
        'Dwustopniowa weryfikacja jest teraz włączona. Podczas logowania będziesz musiał wprowadzić kod weryfikacyjny z tego autentykatora jako dodatkowy krok.',
      authenticatorApp: {
        infoText__ableToScan:
          'Skonfiguruj nową metodę logowania w aplikacji autentykatora i zeskanuj poniższy kod QR, aby połączyć ją z Twoim kontem.',
        infoText__unableToScan: 'Skonfiguruj nową metodę logowania w autentykatorze i wprowadź poniższy klucz.',
        inputLabel__unableToScan1:
          'Upewnij się, że włączona jest funkcja jednorazowych haseł opartych na czasie, a następnie zakończ łączenie konta.',
        inputLabel__unableToScan2:
          'Alternatywnie, jeśli Twój autentykator obsługuje identyfikatory URI TOTP, możesz również skopiować pełny identyfikator URI.',
        buttonAbleToScan__nonPrimary: 'Zamiast tego zeskanuj kod QR',
        buttonUnableToScan__nonPrimary: 'Nie można zeskanować kodu QR?',
      },
      removeResource: {
        title: 'Usuń dwustopniową weryfikację',
        messageLine1: 'Podczas logowania nie będzie już wymagany kod weryfikacyjny z tego autentykatora.',
        messageLine2: 'Twoje konto może być mniej bezpieczne. Czy na pewno chcesz kontynuować?',
        successMessage: 'Dwustopniowa weryfikacja przez aplikację autentykatora została usunięta.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Dodaj weryfikację kodu SMS',
      primaryButton__addPhoneNumber: 'Dodaj numer telefonu',
      subtitle__availablePhoneNumbers: 'Wybierz numer telefonu, aby zarejestrować weryfikację dwustopniową kodem SMS.',
      subtitle__unavailablePhoneNumbers:
        'Nie ma dostępnych numerów telefonów do zarejestrowania weryfikacji dwustopniowej kodem SMS.',
      successMessage:
        'Dwustopniowa weryfikacja kodem SMS jest teraz włączona dla tego numeru telefonu. Podczas logowania będziesz musiał wprowadzić kod weryfikacyjny wysłany na ten numer telefonu jako dodatkowy krok.',
      removeResource: {
        title: 'Usuń dwustopniową weryfikację',
        messageLine1: '{{identifier}} nie będzie już otrzymywał kodów weryfikacyjnych podczas logowania.',
        messageLine2: 'Twoje konto może być mniej bezpieczne. Czy na pewno chcesz kontynuować?',
        successMessage: 'Kod SMS dwuetapowej weryfikacji został usunięty dla {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Dodaj weryfikację kodem zapasowym',
      title__codelist: 'Kody zapasowe',
      subtitle__codelist: 'Przechowuj je bezpiecznie i zachowaj tajemnicę.',
      infoText1: 'Kody zapasowe zostaną włączone dla tego konta.',
      infoText2:
        'Przechowuj kody zapasowe w tajemnicy i bezpieczeństwie. Możesz je odnowić, jeśli podejrzewasz, że zostały naruszone.',
      successSubtitle:
        'Możesz użyć jednego z nich, aby zalogować się do swojego konta, jeśli stracisz dostęp do swojego urządzenia uwierzytelniającego.',
      successMessage:
        'Kody zapasowe są teraz włączone. Możesz użyć jednego z nich, aby zalogować się do swojego konta, jeśli stracisz dostęp do swojego urządzenia uwierzytelniającego. Każdy kod może być użyty tylko raz.',
      actionLabel__copy: 'Skopiuj wszystkie',
      actionLabel__copied: 'Skopiowano!',
      actionLabel__download: 'Pobierz .txt',
      actionLabel__print: 'Drukuj',
    },
  },
  userButton: {
    action__manageAccount: 'Zarządzaj kontem',
    action__signOut: 'Wyloguj',
    action__signOutAll: 'Wyloguj ze wszystkich kont',
    action__addAccount: 'Dodaj konto',
  },
  organizationSwitcher: {
    personalWorkspace: 'Przestrzeń osobista',
    notSelected: 'Nie wybrano organizacji',
    action__createOrganization: 'Utwórz organizację',
    action__manageOrganization: 'Zarządzaj organizacją',
  },
  impersonationFab: {
    title: 'Zalogowany jako {{identifier}}',
    action__signOut: 'Wyloguj',
  },
  organizationProfile: {
    start: {
      headerTitle__members: 'Członkowie',
      headerTitle__settings: 'Ustawienia',
      headerSubtitle__members: 'Wyświetlaj i zarządzaj członkami organizacji',
      headerSubtitle__settings: 'Zarządzaj ustawieniami organizacji',
    },
    profilePage: {
      title: 'Profil organizacji',
      subtitle: 'Zarządzaj profilem organizacji',
      successMessage: 'Organizacja została zaktualizowana.',
      dangerSection: {
        title: 'Niebezpieczeństwo',
        leaveOrganization: {
          title: 'Opuść organizację',
          messageLine1:
            'Czy na pewno chcesz opuścić tę organizację? Stracisz dostęp do tej organizacji i jej aplikacji.',
          messageLine2: 'Ta czynność jest trwała i nieodwracalna.',
          successMessage: 'Opuściłeś organizację.',
        },
      },
    },
    invitePage: {
      title: 'Zaproś członków',
      subtitle: 'Zaproś nowych członków do tej organizacji',
      successMessage: 'Zaproszenia zostały pomyślnie wysłane',
      detailsTitle__inviteFailed: 'Nie udało się wysłać zaproszeń. Napraw poniższe problemy i spróbuj ponownie:',
      formButtonPrimary__continue: 'Wyślij zaproszenia',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Brak członków do wyświetlenia',
      action__invite: 'Zaproś',
      start: {
        headerTitle__active: 'Aktywni',
        headerTitle__invited: 'Zaproszeni',
      },
      activeMembersTab: {
        tableHeader__user: 'Użytkownik',
        tableHeader__joined: 'Dołączył',
        tableHeader__role: 'Rola',
        tableHeader__actions: '',
        menuAction__remove: 'Usuń członka',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Zaproszenie wysłane',
        menuAction__revoke: 'Odwołaj zaproszenie',
      },
    },
  },
  createOrganization: {
    title: 'Utwórz organizację',
    formButtonSubmit: 'Utwórz organizację',
    subtitle: 'Ustaw profil organizacji',
    invitePage: {
      formButtonReset: 'Pomiń',
    },
  },
  unstable__errors: {
    form_identifier_not_found: '',
    form_password_pwned: '',
    form_username_invalid_length: '',
    form_param_format_invalid: '',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Podane hasło jest nieprawidłowe',
    passwordComplexity: {
      sentencePrefix: 'Twoje hasło musi zawierać',
      minimumLength: '{{length}} lub więcej znaków',
      maximumLength: 'mniej niż {{length}} znaków',
      requireNumbers: 'cyfrę',
      requireLowercase: 'małą literę',
      requireUppercase: 'wielką literę',
      requireSpecialCharacter: 'znak specjalny',
    },
  },
} as const;