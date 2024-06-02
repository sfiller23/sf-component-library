import { FC } from "react";
import { styled } from "styled-components";

interface ListProps {
  items: Array<object>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemComponent: FC<any>;
  $itemsMargin?: string;
}

const StyledList = styled.ul<Partial<ListProps>>`
  li:not(:last-child) {
    margin-bottom: ${({ $itemsMargin = "0.3rem" }) => $itemsMargin};
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
`;

const List = (props: ListProps) => {
  const { items, ItemComponent, $itemsMargin } = props;

  return (
    <StyledList $itemsMargin={$itemsMargin}>
      {items.map((item, i) => (
        <StyledListItem key={i}>
          <ItemComponent {...item} />
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
