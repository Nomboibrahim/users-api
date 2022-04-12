const books =require ("../data/books")

const bookshandlers ={}
bookshandlers.byCategory =(req, res, next)=>{
    const category =req.query.category;
    if (category){
        let_books =books.filter((b)=>b.category ==category);
        return res.statuse(200).json({success:true, data:_books})
    }
    next()


};

    bookshandlers.byAuthor =(req, res, next)=>{
        const author =req.query.category;
        if (author){
            let_author =books.filter((b)=>b.author ==author);
            return res.statuse(200).json({success:true, data:_books})
        }


    next()
};module.exports =bookshandlers