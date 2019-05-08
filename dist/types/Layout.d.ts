declare type TMediaSize = 'desktop' | 'tablet' | 'phone' | 'largeDesktop';
export declare const sizes: {
    [K in TMediaSize]: number;
};
export declare const media: any;
export declare const Row: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Col: import("styled-components").StyledComponent<"div", any, {
    flexGrow?: number | undefined;
    size?: number | undefined;
    xs?: number | undefined;
    sm?: number | undefined;
    md?: number | undefined;
}, never>;
export declare const Container: import("styled-components").StyledComponent<"section", any, {}, never>;
export declare const Content: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SubHeading: import("styled-components").StyledComponent<"h2", any, {}, never>;
export declare const Name: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Card: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CardBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SlidePanelBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Description: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Input: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const Button: import("styled-components").StyledComponent<"button", any, {
    size?: "sm" | "md" | "lg" | undefined;
    color?: string | undefined;
    hoverColor?: string | undefined;
    outline?: boolean | undefined;
}, never>;
export declare const FormGroup: import("styled-components").StyledComponent<"div", any, {
    checked?: boolean | undefined;
}, never>;
export declare const Label: import("styled-components").StyledComponent<"label", any, {}, never>;
export declare const TextArea: import("styled-components").StyledComponent<"textarea", any, {}, never>;
export declare const ModalBody: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const ModalFooter: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Alert: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
