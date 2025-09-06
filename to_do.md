### włączyć ssl
Wystarczy, że zalogujesz się do panelu klienta, przejdziesz do „Serwery → Strony WWW”, wybierzesz odpowiednią domenę, klikniesz „Opcje → Włącz SSL” i zaznaczysz Let's Encrypt.



### skonfigurować pocztę `kontakt@szkolaterapiizabawa.pl`

Tworzysz skrzynkę kontakt@szkolaterapiizabawa.pl w LH.pl.

POP3 ma swoje ograniczenia (np. problem z synchronizacją folderów, „przeczytane/nieprzeczytane”). IMAP nie obsługuje gmail, ale np thunderbird



🔹 Krok 1. Utwórz skrzynkę w LH.pl

Zaloguj się do panelu LH.pl.

Przejdź do Poczta → Skrzynki pocztowe.

Dodaj nową skrzynkę kontakt@szkolaterapiizabawa.pl i ustaw hasło.

🔹 Krok 2. Ustaw dane serwerów (POP3 + SMTP LH.pl)

Zapisz sobie te dane (standardowe dla LH.pl):

POP3 (odbiór poczty)

Serwer: poczta.lh.pl

Port: 995

Szyfrowanie: SSL/TLS

SMTP (wysyłanie poczty)

Serwer: poczta.lh.pl

Port: 465

Szyfrowanie: SSL/TLS

Login: pełny adres e-mail, czyli kontakt@szkolaterapiizabawa.pl

Hasło: to, które ustawiłeś w LH.pl

🔹 Krok 3. Dodaj konto do Gmaila (odbieranie)

Zaloguj się do Gmaila.

Kliknij ⚙️ Ustawienia → Zobacz wszystkie ustawienia → Konto i import.

W sekcji „Sprawdź pocztę w innych kontach” kliknij „Dodaj konto pocztowe”.

Wpisz kontakt@szkolaterapiizabawa.pl.

Wybierz: Importuj e-maile z mojego innego konta (POP3).

Wpisz dane serwera:

Nazwa użytkownika: kontakt@szkolaterapiizabawa.pl

Hasło: (to z LH.pl)

Serwer POP: poczta.lh.pl

Port: 995

✅ Zaznacz: Zostaw kopię pobranej wiadomości na serwerze (to właśnie pozwoli na podpięcie kilku Gmaili jednocześnie!)

✅ Zalecane: Używaj zawsze bezpiecznego połączenia (SSL).

Kliknij „Dodaj konto”.

🔹 Krok 4. Dodaj możliwość wysyłania jako kontakt@...

Nadal w Gmailu → Ustawienia → Konto i import.

W sekcji „Wyślij pocztę jako” kliknij „Dodaj inny adres e-mail”.

Wpisz:

Imię i nazwisko (np. „Szkoła Terapii Zabawa”)

Adres e-mail: kontakt@szkolaterapiizabawa.pl

Wybierz „Traktuj jako alias”.

Wpisz dane SMTP:

Serwer SMTP: poczta.lh.pl

Port: 465

Użytkownik: kontakt@szkolaterapiizabawa.pl

Hasło: (to samo, co w LH.pl)

Szyfrowanie: SSL

Gmail wyśle maila potwierdzającego → odbierzesz go (już w tym Gmailu) i klikniesz w link.