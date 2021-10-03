import React from "react";

export default function TransactionTable(){
    return <table className="transactions-table">
        <thead>
            <tr>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><User name="mohamed"/></td>
                <td>23 May 2021</td>
                <td>$122.00</td>
                <td><Status status="approved"/></td>
            </tr>

            <tr>
                <td><User name="mohamed"/></td>
                <td>23 May 2021</td>
                <td>$122.00</td>
                <td><Status status="pending"/></td>
            </tr>

            <tr>
                <td><User name="mohamed"/></td>
                <td>23 May 2021</td>
                <td>$122.00</td>
                <td><Status status="rejected"/></td>
            </tr>
        </tbody>
    </table>
}

function User({name}){
    return <div>
        {name}
    </div>

}
function Status({status}){
    var className = status === "approved" 
                    ? "status approved"
                    : status === "pending"
                    ? "status pending"
                    : status === "rejected"
                    ? "status rejected"
                    : null;

    return <div className={className}>
        {status}
    </div>
}