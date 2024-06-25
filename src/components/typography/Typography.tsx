// export interface TypographyProps {
//   children: string;
// }

import { PropsWithChildren } from "react";

const Typography = (props: PropsWithChildren) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Typography;
