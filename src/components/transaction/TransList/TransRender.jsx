import PropTypes from 'prop-types';

function TransRender({ type, amount, currency }) {
    return (
        <tbody>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </tbody>
    );
};
TransRender.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransRender;