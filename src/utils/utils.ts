export const setVhVariable = (): void => {
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  })
}

export const onEscClickHandler = (evt: any, htmlElement: HTMLElement | null = null): void | boolean => {
  if (evt.keyCode === 13 || evt.keyCode === 'enter') {
    evt.preventDefault();

    if (htmlElement && htmlElement !== null) {
      htmlElement.blur();
    } else {
      return true;
    }
  }
}

export const getZero = (num: number): number | string => {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};

export const getFullDate = (): string => {
  const date: Date = new Date();
  const year: number = date.getFullYear();
  const dateMonth = +date.getMonth() + 1;
  const month: number | string = getZero(dateMonth);
  const day: number | string = getZero(date.getDate());

  const fullDate: string = `${day}-${month}-${year}`;

  return fullDate;
};

interface IBorderStyleType {
  border: string,
};

export const createBorderForItem = (color: string | undefined): IBorderStyleType => {
  if (typeof color === 'string' && color.length > 0) {
    const borderStyle: IBorderStyleType = { border: ` 4px solid ${color}` };
    return borderStyle;
  } else {
    return { border: `none` };
  };
};
