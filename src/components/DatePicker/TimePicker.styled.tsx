import styled from 'styled-components';
import TimePanel from 'components/TimePanel';
import { Clock } from 'components/Icons';
import { rem } from 'utils/StyleHelper';

export const TimeSelector = styled(TimePanel)`
  position: absolute;
`;

export const ClockIcon = styled(Clock)`
  font-size: ${rem(20)};
`;
