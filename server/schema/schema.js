const { gql } = require("apollo-server-express");
/* 
    định nghĩa những kiểu dữ liệu mà ta sẽ có trong
    graphql server, các khung xương
*/
const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  # ROOT TYPE: là gốc của sở đồ, có kiểu viết cấu
  # trúc xác định

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(id: ID!, name: String, age: Int): Author
    createBook(id: ID!, name: String, genre: String, authorId: ID!): Book
  }
`;

module.exports = typeDefs;

//định nghĩa kiểu dữ liệu trả về khi trả trong resolver

/* ROOT TYPE là danh sách của những sách bên trên
  khi đặt một yêu cầu truy xuất dữ liệu
  dưới dạng Query và cái trường là books
  thì chúng ta phải trả lại danh sách những
  quyển sách
*/
