import { Card } from 'react-bootstrap';

function TU ({title, children}) {
    return (
        <Card>
            <Card.Header> <Card.Title> {title} </Card.Title> </Card.Header>
            <Card.Body> {children} </Card.Body>
        </Card>
    )
}


export default TU;