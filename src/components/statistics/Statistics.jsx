import PropTypes from 'prop-types';

import { Section, List } from "./Statistics.styled";

function statsMap({id, label, percentage}) {
    return (
        <li key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
        </li>    
    );
}

export function Statistics({title, stats}) {
    return (
        <Section>

            {title && <h2>{title}</h2>}

            <List>
                {stats.map(statsMap)}
            </List>
        </Section>
    );
};
Statistics.propTypes = {
    text: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape),
};