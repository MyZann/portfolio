/* ==========================================================
   LANDING SECTION & MOBILE RESPONSIVE STYLES
   ========================================================== */

.landing-section,
#landingDiv {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.landing-container {
  width: var(--cWidth, 90%);
  max-width: var(--cMaxWidth, 1920px);
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
}

.landing-intro h2 {
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 400;
  margin: 0;
  opacity: 0.8;
}

.landing-intro h1 {
  font-size: clamp(40px, 6vw, 90px);
  font-weight: 700;
  line-height: 1.1;
  margin: 10px 0 20px 0;
  text-transform: uppercase;
}

.landing-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.landing-info h3 {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 400;
  margin: 0;
}

.landing-info-h2,
.landing-h2-1,
.landing-h2-info {
  font-size: clamp(36px, 5vw, 70px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
  text-transform: uppercase;
}

/* Mobile photo styling (default hidden or positioned depending on your setup) */
.mobile-photo {
  display: none;
}

/* ==========================================================
   RESPONSIF KHUSUS MOBILE (UNTUK MEMPERBAIKI TAMPILAN HP)
   ========================================================== */
@media only screen and (max-width: 768px) {
  .landing-section,
  #landingDiv {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: flex-start !important;
    height: auto !important;
    min-height: 100vh !important;
    padding: 80px 20px 40px 20px !important;
    overflow-y: auto !important;
  }

  .landing-container {
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    position: relative !important;
  }

  .landing-intro {
    text-align: center !important;
    width: 100%;
    margin-bottom: 15px;
  }

  .landing-intro h2 {
    font-size: 16px !important;
  }

  .landing-intro h1 {
    font-size: clamp(32px, 8vw, 44px) !important;
    line-height: 1.15 !important;
    margin: 5px 0 15px 0 !important;
  }

  /* Perbaikan total bagian FULL-STACK agar rapi & tidak pecah */
  .landing-info {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-align: center !important;
    width: 100% !important;
    margin: 10px 0 !important;
    gap: 2px !important;
  }

  .landing-info h3 {
    font-size: 16px !important;
    margin: 0 !important;
  }

  .landing-info-h2,
  .landing-h2-1 {
    font-size: clamp(32px, 9vw, 48px) !important;
    white-space: normal !important;
    word-break: break-word !important;
    line-height: 1.1 !important;
    text-align: center !important;
    width: 100% !important;
  }

  .landing-h2-info {
    font-size: clamp(28px, 8vw, 40px) !important;
    text-align: center !important;
    width: 100% !important;
  }

  /* Mengatur tampilan foto di mobile agar proporsional */
  .mobile-photo {
    display: flex !important;
    width: 100% !important;
    justify-content: center !important;
    margin-top: 25px !important;
    position: relative !important;
    z-index: 2;
  }

  .mobile-photo img {
    width: 75% !important;
    max-width: 260px !important;
    height: auto !important;
    object-fit: contain !important;
    border-radius: 12px;
  }
}
