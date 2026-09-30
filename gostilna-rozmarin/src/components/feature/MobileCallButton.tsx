export default function MobileCallButton() {
  return (
    <a
      href="tel:+38641753335"
      className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center rounded-full bg-accent-500 text-background-50 shadow-lg hover:bg-accent-600 transition-all duration-300 cursor-pointer animate-pulse"
      aria-label="Pokliči in naroči"
    >
      <i className="ri-phone-line text-xl"></i>
    </a>
  );
}