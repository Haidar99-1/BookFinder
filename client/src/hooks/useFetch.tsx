import { useState, useEffect} from "react";
import { Book } from "../components/bookForm";
import { Response } from "../components/bookForm";
 
const useFetchData = (url: string) =>  {
    console.log("the url -> ", url);
    const [ bookList, setBookList] = useState<Book []>();
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
        nytApiCall();
    }, [url])

    async function nytApiCall() {
        try {
            const response = await fetch(url, {
                method: "GET",
            });
    
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            await response.json().then((responseData: Response) => {
                setBookList(responseData.results.lists.flatMap((list) => list.books));
            });
        } catch (error) {
            console.error("Error fetching data:", (error as Error).message);
            setError((error as Error).message)
        }
    }

    return [ bookList, error];
}

export default useFetchData