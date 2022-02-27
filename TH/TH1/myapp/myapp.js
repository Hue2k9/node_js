const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const users=[
    {id: 1, name: "Hoang Minh Hue", age: 19, gender: 0},
    {id: 2, name: "Truong Ngoc Anh", age: 19, gender: 0},
    {id: 3, name: "Tran Van Hoang", age: 19, gender: 1},
]

const products= [
    {name: "books"},
    {name: "smartphones"}
]

const books=[
    {id:1, name:"English", price:19000},
    {id:2, name:"Math", price:67000},
    {id:3, name:"Physics", price:55000},
]

const smartphones=[
    {id:1, name:"Samsung Galaxy Z Fold3 5G", price:41990000},
    {id:2, name:"iPhone 11", price:16490000},
    {id:3, name:"OPPO A95", price:6990000},
]

const requestListener = function (req, res){
    const {url}=req;

    for(i of users){
        let getId=i.id;
        if(url ===`/api/v1/users/${getId}`){
            const user = users.find(user => user.id == getId)
            return res.end(JSON.stringify(user));
        }
    }

    if (url ==="/api/v1/users")
       return res.end(JSON.stringify(users))

    if (url ==="/api/v1/products")
       return res.end(JSON.stringify(products))
    
    let nameProduct="";
    for(i of products){
        nameProduct=i.name;
        if(url===`/api/v1/products/${nameProduct}`){
            if(nameProduct=="books"){
               return res.end(JSON.stringify(books));
            }
            if(nameProduct=="smartphones")
               return res.end(JSON.stringify(smartphones));
        }
    }
    
    for(i of books){
        let getId=i.id;
        if(url===`/api/v1/products/books/${getId}`){
            const book=books.find(book => book.id==getId)
            return res.end(JSON.stringify(book));
        }
    }

    for(i of smartphones){
        let getId=i.id;
        if(url===`/api/v1/products/smartphones/${getId}`){
            const smartphone=smartphones.find(smartphone => smartphone.id==getId)
            return res.end(JSON.stringify(smartphone));
        }
    }
}

const server = http.createServer(requestListener);

/*
const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});
*/

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
