import PropTypes from 'prop-types';

function StatsList({ label, percentage}) {
    return (
        <li>
            <span>{label}</span>
            <span>{percentage}%</span>
        </li>    
    );
};
StatsList.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatsList;