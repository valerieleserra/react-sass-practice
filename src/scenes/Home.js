import { Carousel, Card, Button, Accordion } from 'react-bootstrap'

import slide1 from './../assets/slider1.jpg'
import slide2 from './../assets/slider2.jpg'
import slide3 from './../assets/slider3.jpg'

export default function Home(){
    return (
        <>

<Carousel>

<Carousel.Item>
    <img
    className="d-block w-100"
    src={slide1}
    alt="slider1"
    />
<Carousel.Caption>
    <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"
    src={slide2}
    alt="slider2"
    />

<Carousel.Caption>
    <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"
    src={slide3}
    alt="slider3"
    />

<Carousel.Caption>
    <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
<section className="container my-5 cards__section">
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={slide1}/>
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="secondary">Go somewhere</Button>
</Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={slide2}/>
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="secondary">Go somewhere</Button>
</Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={slide3}/>
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
    Some quick example text to build on the card title and make up the bulk of
    the card's content.
    </Card.Text>
    <Button variant="secondary">Go somewhere</Button>
</Card.Body>
</Card>
</section>
<section>
<Accordion className="container" defaultActiveKey="0">
<Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
    </Accordion.Body>
</Accordion.Item>
</Accordion>
</section>
</>
)
}

