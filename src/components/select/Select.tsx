import chroma from "chroma-js";
import RSelect, { StylesConfig } from "react-select";

export interface IOption {
  readonly value: string;
  readonly label: string;
  readonly color?: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

//// the styled select component is an example of how to style the select component without using the styles prop

// const StyledSelect = styled(RSelect)`
//   > div {
//     border-radius: 10px;
//   }

//   > div:hover {
//     /* border: 1px solid red; */
//   }
// `;

//// the dot function is an example of how to style the select component

// const dot = (color = "transparent") => ({
//   alignItems: "center",
//   display: "flex",

//   ":before": {
//     backgroundColor: color,
//     borderRadius: 10,
//     content: '" "',
//     display: "block",
//     marginRight: 8,
//     height: 10,
//     width: 10,
//   },
// });

export const colorStyles: StylesConfig<IOption> = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: isFocused ? "transparent" : "white", // Change background color on focus
    borderRadius: 10,
    borderColor: isFocused ? "#FFA920" : styles.borderColor, // Override borderColor on active/focus
    boxShadow: isFocused ? "0 0 0 1px #FFA920" : styles.boxShadow, // Optional: Add a box-shadow to mimic focus if needed
    // Ensure outline is none and apply other focus styles directly without using ":focus" pseudo-class
    outline: "none",
    ":hover": {
      ...styles[":focus"],
      outline: "none",
      borderColor: "#FFA920", // Your desired active border color
      backgroundColor: "transparent", // Your desired active background color
      color: "#FFA920", // Your desired active text color
    },
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma("#FFA920");
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  //// The code below is an example of using the dot function to style the select component

  // input: (styles) => ({ ...styles, ...dot() }),
  // placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
  // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),

  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles) => ({ ...styles }),
};

const Select = RSelect;

export default Select;
