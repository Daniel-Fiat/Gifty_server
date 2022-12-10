| Path                       | METHOD | RESPONSE     | Description                    |
| -------------------------- | ------ | ------------ | ------------------------------ |
|/products                   | GET    |              | Get All Products               |
|/products/:id               | GET    |              | Get One Product by ID          |
|/products/TopTen            | GET    |              | Get top ten rating products    |
|/products/catalog/:userId   | GET    |              | Get products by user ID        |
|/products/category/:category| GET    |              | Get products by category       |
|/products/chance/:chance    | GET    |              | Get products by chance         |
|/products/new               | PUT    |              | Create one product             |
|/products/edit/:idProduct   | PUT    |              | Update one product             |
|/products/delete/:id        | DELETE |              | Delete one product             |
|/products/wishList/:userId  | GET    |              | Create review                  |
|/review/new                 | POST   |              | Create review                  |
|/user/wishList/add/:id      | PUT    |              | Add product wishList           |
|/user/wishList/remove/:id   | DELETE |              | Delete product wishList        |
|/user/:id                   | GET    |              | get user by Id                 |
|/user/edit/:id              | PUT    |              | Edit user by Id                |
|/user/new                   | POST   |              | Create new User                |
|/user/login                 | POST   |              | validate User                  |
|/orders/seller/:id          | GET    |              | Get orders by seller id        |
|/orders/client/:id          | GET    |              | Get order by Client id review  |
|/orders/update/:idOrder     | PUT    |              | Update Order state             |
|/orders/new                 | POST   |              | Create review                  |
