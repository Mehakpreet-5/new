import Books from "../model/books.js"

export const getBook=async(req,res)=> {
    try{
        const book = await Books.find()
        res.status(200).json(book)
    } catch (error){
 console.log("error :", error)
 res.status(500).json(error)
    }
};

export default getBook;