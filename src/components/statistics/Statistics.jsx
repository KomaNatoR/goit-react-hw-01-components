import PropTypes from 'prop-types';

import { Section, List } from "./Statistics.styled";
import StatsList from "./List/List";


export function Statistics({title, stats}) {
    return (
        <Section>

            {title && <h2>{title}</h2>}

            <List>
                {/* {stats.map(statsMap)} */}
                {stats.map(stat => <StatsList
                    key={stat.id}
                    label={stat.label}
                    percentage={stat.percentage}
                />)}
            </List>
        </Section>
    );
};
Statistics.propTypes = {
    text: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape),
};