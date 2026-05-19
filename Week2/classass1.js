class Book {
    title;
    author;
    pages;
    isAvailable;
    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow(){
        if(!this.isAvailable) {
            return 'Book not available'
        }
    }
    returnBook() {
        return 'Book available'
    }
    getInfo() {
        return this.title+" "+(this.pages)
    }
    isLongBook() {
        if(this.pages>300){
            return true
        }
        return false
    }
}
//1. Create at least 5 book objects using the class:
const b1=new Book("Harry Potter","Samhita",300,true);
const b2=new Book("Hobbit","Sam",450,false);
const b3=new Book("Harry Tales","Peter",200,true);
const b4=new Book("Development","Henry",560,false);
const b5=new Book("Life of an Ant","Ram",210,false);


// 2. Perform the following operations:
     // i. Display info of all books
const books=[b1, b2, b3, b4, b5];
books.forEach(book=>{
    console.log(book.getInfo());
});

      //ii. Borrow 2 books and show their availability status
      Book.prototype.borrow=function() {
    if(!this.isAvailable){
        return "Book not available";
    }
    this.isAvailable=false;
    return "Book borrowed";
};
console.log(b1.borrow());
console.log(b3.borrow());
console.log(b1.title, b1.isAvailable);
console.log(b3.title, b3.isAvailable);
     
      //iii. Return 1 book and show updated status
      Book.prototype.returnBook=function() {
    this.isAvailable=true;
    return "Book returned";
};
console.log(b1.returnBook());
console.log(b1.title, b1.isAvailable);

      //iv. Count how many books are "long books" (more than 300 pages)
const longBooks=books.filter(book=>book.isLongBook());
console.log("Number of long books:",longBooks.length);

      //v. List all available books
      const availableBooks=books.filter(book=>book.isAvailable);
availableBooks.forEach(book=>{
    console.log(book.title);
});