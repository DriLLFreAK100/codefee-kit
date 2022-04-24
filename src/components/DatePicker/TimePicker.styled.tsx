import styled from 'styled-components';
import TimePanel from 'components/TimePanel';
import { Clock } from 'components/Icons';
import { rem } from 'utils/StyleHelper';

export const TimeSelector = styled(TimePanel)`
  box-shadow: none;
  padding-bottom: 0;
`;

export const ClockIcon = styled(Clock)`
  font-size: ${rem(20)};
`;
