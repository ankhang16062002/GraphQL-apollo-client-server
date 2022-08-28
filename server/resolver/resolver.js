const { books, authors } = require("../data/static");

const resolvers = {
  //QUERY
  Query: {
    books: () => books,
    book: (_parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (_parent, args) => authors.find((author) => author.id == args.id),
  },
  Book: {
    author: (parent, _args) =>
      authors.find((author) => author.id == parent.authorId),
  },
  Author: {
    books: (parent, _args) =>
      books.filter((book) => book.authorId == parent.id),
  },
  //MUTATION
  Mutation: {
    createAuthor: (_parent, args) => args,
    createBook: (_parent, args) => args,
  },
};

module.exports = resolvers;
