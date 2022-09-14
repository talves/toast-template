import { h } from "preact";
import { forwardRef } from "preact/compat";
import { Box } from "../Box.js";

export const Button = forwardRef(({ as = "button", ...props }, ref) => (
  <Box class="cmp-btn">
    <Box as={as} role="button" ref={ref} {...props}>
      <span class="btn__text">{props.children}</span>
    </Box>
  </Box>
));

// export const Button = forwardRef(
//   ({ children, as = "button", ...props }, ref) => {
//     return h(
//       "div",
//       { class: "cmp-btn" },
//       h(
//         as,
//         { ref: { ref }, ...props },
//         h("span", { class: "btn__text" }, children)
//       )
//     );
//   }
// );
