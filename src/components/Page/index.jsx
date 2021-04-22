import { Container } from 'react-bootstrap';
import Card from '../Card'


function TU2 ({title, children}) {
    return (
        <Container className="mt-4">    <Card title={title}> {children}  </Card>  </Container>
    )
}


export default TU2;