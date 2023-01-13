
function StatsList({ label, percentage}) {
    return (
        <li>
            <span>{label}</span>
            <span>{percentage}%</span>
        </li>    
    );
};

export default StatsList;