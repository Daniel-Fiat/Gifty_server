const app = require("./app");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

function validParentheses(parens) {
  parens.split("").map((paren, i) => {
    switch (paren) {
      case 40:

        break;

      default:
        break;
    }

  })
  return false;
}