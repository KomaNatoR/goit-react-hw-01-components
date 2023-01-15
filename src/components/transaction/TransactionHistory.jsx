import PropTypes from 'prop-types';

import TransRender from "./TransList/TransRender"
import { Table } from "./TransactionHistory.styled";


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
                id={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
            />)}
        </Table>
    );
};
Transaction.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};