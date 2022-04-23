var consent = __md_get("__consent")
if (consent && consent.custom) {
  window.clarity('consent');
}
