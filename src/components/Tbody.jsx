import React from "react";
function Tbody({lastName, firstName, maidenName, age, gender, phone,city, address}) {
    return (
        <tbody className="table__body">
        <tr>
            <td className="table__body-lastname">{lastName}</td>
            <td className="table__body-name">{firstName}</td>
            <td className="table__body-maiden-name">{maidenName}</td>
            <td className="table__body-age">{age}</td>
            <td className="table__body-gender">{gender}</td>
            <td className="table__body-phone">{phone}</td>
            <td className="table__body-city">{city}</td>
            <td className="table__body-address">{address}</td>
        </tr>
        </tbody>
    )
}

export default Tbody;