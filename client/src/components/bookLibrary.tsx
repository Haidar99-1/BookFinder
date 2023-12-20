import BookCard from "./bookCard";
import { Book } from "./bookForm";

export interface BookLibraryProps {
    bookList: Book[]
}

const BookLibrary: React.FC<BookLibraryProps> = ({ bookList }) => {

    const cardsContainerStyle = {
        display: 'flex',
        flexFlow: 'row wrap',
        gap: '50px',
        marginTop: '7%',
        justifyContent: 'center',
    }

    return (
        <>
            <div style={cardsContainerStyle}>
                {bookList.map((bookObj) => {
                    return (<BookCard
                        key={bookObj.primary_isbn10}
                        image={bookObj.book_image}
                        authorName={bookObj.author}
                        description={bookObj.description}
                        link={bookObj.amazon_product_url} />
                    )
                })}
            </div>
        </>

    )
}
export default BookLibrary;
