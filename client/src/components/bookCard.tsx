import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./bookCard.css"
import { useState } from 'react';

interface Props {
    key: string,
    image: string;
    authorName: string;
    description: string;
    link: string;
}
const BookCard: React.FC<Props> = ({ image, authorName, description, link }) => {
    const [ isHovered, setIsHovered ] = useState(false);

    const cardStyle = {
        width: '20rem',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '20px 10px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s ease', 
    }
    const hoverCardStyle = {
        transform: 'scale(1.1)', 
      }

    return (
        <Card  style={isHovered ? { ...cardStyle, ...hoverCardStyle } : cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <Card.Img style={{ height: "250px" }} variant="top" src={image} />
            <Card.Body>
                <Card.Title>{authorName}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className='as'>
                <Button variant="primary" href={link} target="_blank">
                    Buy at Amazon
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default BookCard;

     // // <div className='container'>
        //     {/* <div className='row-container'> */}
        //         {/* <div className='card-item'> */}

        //         {/* </div> */}
        //     {/* </div> */}

        // // </div>


// style={
//     {display: 'flex',
//     flexDirection: 'column',
//     border:'2px solid #FF9900',
//     backgroundColor: '#FF9900',
//     cursor: 'point',
// }}