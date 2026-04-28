import { ProductProvider } from "@/data/Product";
import { HomeScreenTemplate } from "@/presentation/atomic/templates/HomeScreenTemplate";

function App() {
  return (
    <ProductProvider>
      <HomeScreenTemplate />;
    </ProductProvider>
  );
}

export default App;
