import styled from "styled-components";

interface ItemProps {
  children: React.ReactNode; // Esta definição permite que qualquer conteúdo seja passado como filho do componente
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 14px;
`;

export const Item = styled.div<ItemProps>`
  padding: 10px 16px;
  & + div {
    border-top: 1px solid var(--outline);
  }
  &:first-child {
    padding-top: 13px;
  }
  &:last-child {
    padding-bottom: 17px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;
