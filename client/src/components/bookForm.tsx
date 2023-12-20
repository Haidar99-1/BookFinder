import React, { useEffect, useState } from "react"
import useFetchData from "../hooks/useFetch";
import BookLibrary from "./bookLibrary";
import './bookForm.css'

export type Response = {
    status: string,
    copyright: string,
    num_results: string,
    results: {
        bestsellers_date: string,
        published_date: string,
        published_date_description: string,
        previous_published_date: string,
        next_published_date: string,
        lists: [
            {
                list_id: number,
                list_name: string,
                list_name_encoded: string,
                display_name: string,
                updated: string,
                list_image: string | null,
                list_image_width: string | null,
                list_image_height: string | null,
                books: Book[]
            }
        ]
    }
}
export type Book =
    { 
    age_group: string;
    amazon_product_url: string;
    article_chapter_link: string;
    author: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    book_review_link: string;
    contributor: string;
    contributor_note: string;
    created_date: string;
    description: string;
    first_chapter_link: string;
    price: string;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    rank: number;
    rank_last_week: number;
    sunday_review_link: string;
    title: string;
    updated_date: string;
    weeks_on_list: number;
    buy_links: Array<{
        name: string;
        url: string}>
}


const BookForm: React.FC = () => {
    const [ date, setDate ] = useState<string>("");
    const url: string = `http://localhost:3001/bestSeller?date=${date}`;
    const [ bookList, error ] = useFetchData(url);
     
    console.log("response from bookList", bookList)

    function handleSubmit() {
        console.log("handleSubmit ", bookList, error);
    }
   

    return (
        <> 
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Get all books for all the Best Sellers NYT list for specified Date</h2>
            <div className="form-group">
                <input
                    placeholder="YYYY-MM-DD"
                    id="input-author"
                    type="text"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                    maxLength={10}
                />
                <label className="label-author">Date</label>
            </div>

            <div className="form-group">
                <button>Submit</button>
            </div>
        </form>
        {bookList && <BookLibrary bookList={bookList} />}
        </>
    )
}

export default BookForm



//  async function handleSubmit(event: React.FormEvent<HTMLElement>) {
//         event.preventDefault();
//         try {
//             const response = await fetch(url, {
//                 method: "GET",
//             });

//             if (!response.ok) {
//                 throw new Error(`Request failed with status: ${response.status}`);
//             }

//             await response.json().then((responseData: Response) => {
//                 setBookList(responseData.results.lists.flatMap((list)=> list.books));
//             });


//         } catch (error) {
//             console.error("Error fetching data:", (error as Error).message);
//         }
//     }