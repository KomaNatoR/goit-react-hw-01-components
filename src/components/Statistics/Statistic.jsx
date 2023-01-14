import PropTypes from 'prop-types';

import { Section, List } from "./statistics.styled";
import StatsList from "./List/List";


function Statistics({ title, stats }) {
    const statsMap = stats.map(stat => <StatsList
        key={stat.id}
        id={stat.id}
        label={stat.label}
        percentage={stat.percentage}
    />);

    return (
        <Section>

            {title && <h2>{title}</h2>}

            <List>
                {statsMap}
            </List>
        </Section>
    );
};
Statistics.defaultProps = {
    title: "no data",
    stats: [],
};
Statistics.propTypes = {
    text: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
};

export default Statistics;