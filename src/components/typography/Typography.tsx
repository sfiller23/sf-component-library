export interface TypographyProps {
  children: React.ReactNode;
}

const Typography = (props: TypographyProps) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Typography;
