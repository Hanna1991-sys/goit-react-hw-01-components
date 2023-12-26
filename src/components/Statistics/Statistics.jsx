import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomHexColor';
import {
  StatisticsSection,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

const Statistics = ({ stats }) => {
  return (
    <StatisticsSection>
      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;