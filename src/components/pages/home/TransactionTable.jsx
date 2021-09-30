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
                <td><Status status="Approved"/></td>
            </tr>

            <tr>
                <td><User name="mohamed"/></td>
                <td>23 May 2021</td>
                <td>$122.00</td>
                <td><Status status="Approved"/></td>
            </tr>

            <tr>
                <td><User name="mohamed"/></td>
                <td>23 May 2021</td>
                <td>$122.00</td>
                <td><Status status="Approved"/></td>
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
    return <div>
        {status}
    </div>
}