import React from 'react';
import _ from "lodash"

const TableBody = ({ columns, data }) => {
    
    const renderCell = (item, column) => {
        return _.get(item, column.path);
    };
    
    return ( 
        <>
        <tbody>
      {data && data.map((item, index) =>(
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key}>{renderCell(item,column)}</td>
              ))}
            </tr>
      ))}
    </tbody>
        </>
     );
}
 
export default TableBody;