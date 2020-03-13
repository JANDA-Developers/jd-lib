declare const JDmrClass: (size?: "no" | "largest" | "huge" | "large" | "normal" | "small" | "tiny" | "superTiny" | null | undefined) => any;
declare const JDmbClass: (size?: "no" | "largest" | "huge" | "large" | "normal" | "small" | "tiny" | "superTiny" | undefined) => any;
declare const iconSizeClass: (boxName: string, size?: "largest" | "huge" | "large" | "normal" | "small" | "tiny" | "largest2" | null | undefined) => any;
declare const colorClass: (boxName: string, color?: "normal" | "darkPrimary" | "primary" | "third" | "point" | "new" | "warn" | "error" | "black" | "white" | "grey1" | "grey2" | "grey3" | "grey4" | "grey5" | "blue" | "positive" | null | undefined) => any;
declare const textAlignClass: (boxName: string, align?: "left" | "right" | "center" | undefined) => any;
declare const textSizeClass: (boxName: string, size?: "large" | "normal" | "small" | "tiny" | "superTiny" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined) => any;
declare const mbClass: (boxName: string, size?: "no" | "largest" | "huge" | "large" | "normal" | "small" | "tiny" | "superTiny" | undefined) => any;
export { iconSizeClass, JDmbClass, JDmrClass, mbClass, textAlignClass, colorClass, textSizeClass };
