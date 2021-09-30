import { Typography } from "antd";
import styled from "styled-components";
import { Stack } from "../../layout/Stack";

const { Text } = Typography;

export const MainStack = styled(Stack)`
  & > * {
    --gap: 0;
  }
`;

export const WelcomeStack = styled(Stack)`
  & > * {
    --gap: var(--s3);
  }
`;

export const LightText = styled(Text)`
  display: block;
  font-weight: lighter;
`;

export const ErrorText = styled(Text)`
  color: var(--color-red);
`;

export const CenterBox = styled.div`
  width: 100%;
  text-align: center;
  --gap: var(--s3)
`;

