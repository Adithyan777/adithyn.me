
export const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  const offset = 40;
  const elementPosition = element?.getBoundingClientRect().top ?? 0;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};