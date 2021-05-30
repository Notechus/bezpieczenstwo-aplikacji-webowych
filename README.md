# Bezpieczeństwo aplikacji internetowych

## Opis
Repozytorium zawiera przykłady i aplikacje wykonane w ramach przedmiotu Bezpieczeństwo aplikacji internetowych.

## Aplikacje

### 1-MVC
Pierwsza aplikacja znajdująca się w katalogu `1-mvc` to aplikacja MVC napisana w technologii Spring oraz Spring Security.
Do uruchomienia aplikacji nie jest wymagana baza danych.

### 2-API
Katalog `2-api` zawiera 3 aplikacje, które razem pozwalają zautoryzować się za pomocą grantów OAuth2
u zewnętrznych dostawców (Okta, Github) lub za pomocą własnego IDP

### 3-EXTERNAL-IDP
Bonus: Przykład integracji backendu Firebase Auth z systemem sesji Django

### 4-OAUTH-CLIENT
Bonus: Przykład aplikacji w angularze, która jest bezpośrednio związana z backendem Firebase Auth oraz Firebase Datastore

### 5-REACT-CLIENT
Klient w technologii ReactJS, który komunikuje się z API w projekcie 7-auth0-example-express oraz posiada połączenie z backendem Auth0

### 6-AUTH0-EXAMPLE-REACT
Projekt, który był robiony w trakcie zajęć

### 7-AUTH0-EXAMPLE-EXPRESS
API, które jest zabezpieczone tokenem JWT oraz dostarcza danych klientowi z punktu 5