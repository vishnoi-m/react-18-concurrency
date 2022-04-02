import { useState, useTransition } from "react";

import { generateProducts } from "./data";
import ProductList from "./components/ProductList";

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event) {
    //Comment in case of UseTransition()
    setFilterTerm(event.target.value);

    // UnComment When using useTransition
    // startTransition(() => {
    //   setFilterTerm(event.target.value);
    // });

    /** useTransition(): Try Change the CPU to 6x slowdown and than you will see that
     * sometimes even if the filterTerm is empty, while we are still seeing filter Data
     * in the list, So the list lags behind.
     * coz this is what exactly startTransition does, we tell React that updating the
     * filterTerm has lower priority than other State */

    /** UseDeferredValue(): Allows us to achieve similar results,
     * if we don’t have control over the state call that is related
     * to the laggish behaviour.If we have control,
     * its preferable that we should use useTransition() */
  }

  return (
    <div id="app">
      <input type="text" onChange={updateFilterHandler} />
      {/* {isPending && <p>Updating list....</p>}
      /* Can be use to show some fallback UI 
      comment down the isPending for useDeferredValue()*/}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
