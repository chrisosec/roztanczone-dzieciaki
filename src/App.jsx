import { useEffect, useState } from "react";

const SIGNING_URL = "";
const REGISTRATION_URL = "https://forms.gle/kuGd6wpnk9NbqCJt9";
const PHONE_DISPLAY = "508 063 589";
const PHONE_LINK = "+48508063589";

function SigningButton({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => event.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  if (SIGNING_URL) {
    return <a className={`button button-primary ${className}`} href={SIGNING_URL}>Podpisz umowę online</a>;
  }

  return (
    <>
      <button className={`button button-primary ${className}`} type="button" onClick={() => setIsOpen(true)}>
        Podpisz umowę online
      </button>
      {isOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setIsOpen(false)}>
          <section aria-labelledby="signing-title" aria-modal="true" className="modal" role="dialog" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Zamknij" onClick={() => setIsOpen(false)}>×</button>
            <p className="eyebrow">Jeszcze chwila</p>
            <h2 id="signing-title">Uruchamiamy podpis online</h2>
            <p>Link do podpisania umowy pojawi się tutaj po konfiguracji. W pilnej sprawie napisz do nas przez WhatsApp.</p>
            <a className="button button-dark" href={`https://wa.me/${PHONE_LINK.replace("+", "")}`}>Napisz na WhatsApp</a>
          </section>
        </div>
      )}
    </>
  );
}

export function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#start" aria-label="Roztańczone Dzieciaki — początek strony">
          <span>Roztańczone</span><strong>Dzieciaki</strong>
        </a>
        <a className="topbar-contact" href={`tel:${PHONE_LINK}`}>tel. {PHONE_DISPLAY}</a>
      </header>

      <main id="start">
        <section className="hero" aria-labelledby="hero-title">
          <div className="poster-wrap">
            <img className="poster" src="./assets/roztanczone-plakat.png" alt="Plakat zajęć Roztańczone Dzieciaki w CKE w Czerwionce" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Zapisy na sezon 2026/2027</p>
            <h1 id="hero-title">Taniec, ruch, energia i <span>zabawa!</span></h1>
            <p className="hero-lead">Radosne zajęcia taneczne dla dzieci, prowadzone w swobodnej atmosferze i dopasowane do wieku grupy.</p>
            <dl className="quick-facts">
              <div><dt>Start</dt><dd>11 września 2026</dd></div>
              <div><dt>Miejsce</dt><dd>CKE w Czerwionce</dd></div>
              <div><dt>Koszt</dt><dd>100 zł / miesiąc</dd></div>
            </dl>
            <div className="hero-actions">
              <div className="hero-action">
                <a className="button button-registration" href={REGISTRATION_URL} target="_blank" rel="noreferrer">
                  Zapisz dziecko
                </a>
                <p>Formularz zgłoszeniowy</p>
              </div>
              <div className="hero-action">
                <SigningButton />
                <p className="signing-condition">Tylko po otrzymaniu potwierdzenia przyjęcia na zajęcia</p>
              </div>
            </div>
          </div>
        </section>

        <section className="schedule" aria-labelledby="schedule-title">
          <div className="section-intro"><p className="eyebrow">Każdy piątek</p><h2 id="schedule-title">Wybierz grupę</h2></div>
          <div className="group-grid">
            <article className="group-card group-card-yellow"><p className="group-time">16:00</p><h3>Dzieci 5–8 lat</h3><p>50 minut tańca, zabawy i ćwiczeń ogólnorozwojowych.</p></article>
            <article className="group-card group-card-pink"><p className="group-time">17:00</p><h3>Dzieci 9+</h3><p>50 minut ruchu, różnych stylów i budowania pewności siebie.</p></article>
          </div>
        </section>

        <section className="benefits" aria-labelledby="benefits-title">
          <div className="benefits-copy"><p className="eyebrow eyebrow-light">Wszystko dla dzieci</p><h2 id="benefits-title">Dużo ruchu. Dużo dobrej energii.</h2></div>
          <ul className="benefit-list"><li>Różne style tańca</li><li>Ćwiczenia ogólnorozwojowe</li><li>Rozwój koordynacji</li><li>Świetna atmosfera</li></ul>
        </section>

        <section className="details" aria-labelledby="details-title">
          <div><p className="eyebrow">Najważniejsze informacje</p><h2 id="details-title">Prosto i bez niespodzianek</h2></div>
          <div className="detail-grid">
            <article><p className="detail-number">33</p><h3>spotkania w sezonie</h3><p>Od września 2026 do czerwca 2027.</p></article>
            <article><p className="detail-number">100 zł</p><h3>miesięcznie</h3><p>W styczniu nie pobieramy opłaty.</p></article>
            <article><p className="detail-number">50 min</p><h3>jedne zajęcia</h3><p>CKE, ul. 3 Maja 36D, Czerwionka-Leszczyny.</p></article>
          </div>
        </section>

      </main>

      <footer>
        <p><strong>Roztańczone Dzieciaki</strong> · CKE w Czerwionce</p>
        <p><a href={`tel:${PHONE_LINK}`}>{PHONE_DISPLAY}</a><span aria-hidden="true"> · </span><a href="mailto:anna.hudek@gmail.com">anna.hudek@gmail.com</a></p>
      </footer>
    </div>
  );
}
