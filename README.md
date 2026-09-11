# Roztańczone Dzieciaki — strona informacyjna

Jednostronicowa, responsywna strona przeznaczona do publikacji w GitHub Pages.

## Uruchomienie lokalne

```bash
npm ci
npm run dev
```

## Podpięcie podpisu online

W pliku `src/App.jsx` ustaw adres szablonu SignWell w stałej `SIGNING_URL`:

```js
const SIGNING_URL = "https://www.signwell.com/new_doc/...";
```

Do czasu podania adresu przycisk pokazuje komunikat i kieruje rodzica do WhatsAppa, więc na stronie nie ma martwego linku.

## Publikacja

Repozytorium zawiera workflow `.github/workflows/deploy-pages.yml`. Po wysłaniu projektu do gałęzi `main` w repozytorium GitHub trzeba ustawić w **Settings → Pages → Build and deployment** źródło **GitHub Actions**. Kolejne zmiany będą publikowane automatycznie.
