export function getSessionSeed(): number {
  if (typeof window === "undefined") return 0;

  let seed = sessionStorage.getItem("listing_seed");
  if (!seed) {
    seed = String(Math.floor(Math.random() * 999999));
    sessionStorage.setItem("listing_seed", seed);
  }
  return Number(seed);
}
