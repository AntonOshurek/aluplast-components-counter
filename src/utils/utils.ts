export const setVhVariable = (): void => {
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  })
}

export const onEscClickHandler = (evt: any, htmlElement: HTMLElement | null = null) => {
  if(evt.keyCode === 13 || evt.keyCode === 'enter') {
    evt.preventDefault();

    if(htmlElement && htmlElement !== null) {
      htmlElement.blur();
    }
  }
}
