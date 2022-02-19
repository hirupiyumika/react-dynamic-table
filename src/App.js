import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tables from './common/Tables/Tables';
import { Col, Row } from 'react-bootstrap'; 

const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        jsonData()
    }, []);

    const jsonData = async () => {
        try {
            var response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            setData(data)
            console.log(data)
        }
        catch (ex) {
            console.log(ex)
        }
    }

    const columns = [
        { key: "1", path: "id", label: "NO" },
        { key: "2", path: "title", date: "Title" },
        { key: "3", path: "body", label: "Discription" },
        { key: "4", path: "userId", label: "User ID" },
        
    ]

    return (
        < >
            <Row className="justify-content-md-center"> 
                <Col md={10}>
                    <Tables
                        columns={columns}
                        data={data}
                        />
                </Col>
            </Row>
        </>
    );
}

export default App;
