- Mô hình graphQL gồm Apollo Client and Apollo GraphQL Server

* apollo client là 1 người đứng ở phía react để
  nói chuyện với server
* apollo graphql server là 1 người đứng bên phía
  server để nói chuyện với front-end

- bên server cài:

  - express: là 1 middleware để apollo server gắn
    nên đó
  - graphql: dùng cái này thì phải cài vào thôi
  - apollo-server-express: chỉ là 1 server để
    chạy cái graphql đấy
  - mongoose: dùng để kết nối tương tác với mongoDB

- tạo 1 folder schema, bên trong có file schema.js
  là sườn cơ cở dữ liệu của ta

* resolver là một cái hàm, nó trả lại những dữ liệu
  thật sự của ta, những dữ liệu hẳn hoi có số, có má, có chữ

---

- viết một mô hình query đầu tiên:

* query: đọc dữ liệu từ trong cơ sở dữ liệu
* mutation
* subscrip

- có kiểu ví dụ [Book] phải lựa chọn các trường con
  của Book

  \*\*lựa chọ sách theo id:

  1. tạo trong root type 1 yêu cầu truy xuất dữ liệu
  2. truyền vào một tham số dưới dạng một String để
     biết mình sẽ lấy cái nào
  3. trong file resolver, muốn lấy được tham số mà
     ta truyền vào từ query, ta dùng 2 tham số

  - tham số 1 là parent: nó đại diện cho việc tạo
    quan hệ tương quan
  - tham số thứ hai là args: nó là một object bao gồm tất cả những thứ ta truyền vào
  - chú ý, khi qua graphQL, server, tham số number, sẽ trả về string nha

  \*\* Tinh túy của graph QL

  \*chú ý: các field ta định nghĩa trong schema, sẽ là một trong những các field ta sẽ trả về, nó không phụ thuộc vào server của ta trả về cái gì, các field có thể khác nhau

  - tạo đường nối giữa hai đối tượng
  - Ví dụ tạo authorID là đường nối giữa tác giả và
    những quyển sách

  * khi yêu cầu truy xuất dữ liệu query, nó sẽ chạy sang resolver tương ứng, resolver trả về các danh
    sách các field, nếu cần select những field nào giống ở trong type mà khớp thì ta lấy luôn, nếu select mà không có trong đó, nó sẽ trả về null, hoặc nếu muốn lấy, ta sẽ tạo 1 resolver riêng để xử lý lấy field đó, chú ý: resolver trùng tên với field type ta cần lấy, ví dụ: Book => resolver Book. trong resolver book, các field có thể nhận lại kết quả khi ta query đầu tiên thông qua đối số parent, để từ đó lấy ra dữ liệu

    - Chú ý: các resolver property ở trong resolver phải chạy sau resolver Query, nó nhận tham số đầu tiên là cái gì mà resolver Query trả về(chưa chuẩn lắm, do cấp cha trả về)

    * lưu ý: trong 1 query có thể query sâu đa cấp
      độ
    * parent của cấp con sẽ là cái gì đó mà cấp cha trả về \***\*\*\*\*\*\*\***\*\*\*\*\***\*\*\*\*\*\*\***

---

một cái gọi là root type mới gọi là Mutation, để ghi dữ liệu vào server

- khi tạo tác giả, ở mutation createAuthor nhận các tham số và trả về Author
- => trong resolver trả về args là những cái truyền và, nhưng khi nó so sánh với field Author, nó thấy thiếu trường books, nó sẽ vào Author, trường books để nó chạy trả về giá trị gán cho books như trên, tương tự nó lấy parent dựa vào cha
- Tạo mutation thì tham số nhận vào tương ứng với các
  field trên server
- giá trị trả lại khi viết mutation chính là cái mà ta response ra client
