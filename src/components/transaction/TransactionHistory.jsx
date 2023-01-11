import PropTypes from 'prop-types';

import { Table } from "./TransactionHistory.styled";

function TransRender({id, type, amount, currency}) {
    return (
        <tbody key={id}>
            <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </tbody>
    );
};
TransRender.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export function Transaction({items}) {
    return (
        <Table>

            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            {items.map(item => <TransRender
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
            />)}
        </Table>
    );
};
Transaction.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape),
};