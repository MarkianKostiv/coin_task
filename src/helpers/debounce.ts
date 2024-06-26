// функція використовується для затримки запитів до беку
// для уникнути реквест бомбінгу
export function debounce(func: (...args: any[]) => void, timeout = 400) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
