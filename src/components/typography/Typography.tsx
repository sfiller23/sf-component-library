export interface TypographyProps {
  children: string;
}

const Typography = (props: TypographyProps) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Typography;
