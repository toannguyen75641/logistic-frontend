import React from 'react';
import Card from "../../common/Card/Card.js";
import { Table } from "react-bootstrap";

const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];

function CustomerList() {
    return (
        <Card
            title = "Danh sách Khách hàng"
            category = "Khách hàng thân quen"
            content = {
                <div className="content">
                    <Table striped hover>
                        <thead>
                            <tr>
                                {thArray.map((value, key) => {
                                    return <th key={key}>{value}</th>;
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            {tdArray.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        {value.map((value, key) => {
                                            return <td key={key}>{value}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            }
        />
    );
}

export default CustomerList;