import { useDeferredValue } from "react";

//Comment in case of useTransition.
function ProductList({ products }) {
  const deferredProducts = useDeferredValue(products);
  return (
    <ul>
      {deferredProducts.map((product) => (
        <li>{product}</li>
      ))}
    </ul>
  );
}

// UnComment when use useTransition()
// function ProductList({ products }) {
//   return (
//     <ul>
//       {products.map((product) => (
//         <li>{product}</li>
//       ))}
//     </ul>
//   );
// }

export default ProductList;
