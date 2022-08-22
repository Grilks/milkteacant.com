declare module '*.scss' {
  interface IStyle {
    [className: string]: string;
  }

  const style: IStyle;

  export { IStyle };
  export default style;
}

declare module '*.woff' {
  const value: string;

  export default value;
}

declare module '*.svg' {
  const value: string;

  export default value;
}

declare module '*.jpg' {
  const value: string;

  export default value;
}

declare module '*.png' {
  const value: string;

  export default value;
}
