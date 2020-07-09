import React from "react";
import Transaction from "./Transaction";



class TransactionsList extends React.Component {
    // constructor(props) {
    //   super(props);
    // }


    render() {
        <div>
            <ul className="transactions">
                {transactions.map(transactions => (
                <Transaction key={transactions.id} {...transactions} />))}
            </ul>
      </div>
    }

}

export default TransactionsList;