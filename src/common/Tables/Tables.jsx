import React from 'react';
import { Table } from 'react-bootstrap';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Tables = ({columns,data}) => {
    return ( 
        
            <Table>
                <TableHeader columns={columns} />
                <TableBody columns={columns} data={data} />
            </Table>
       
     );
}
 
export default Tables;