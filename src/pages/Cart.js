import { CardCart } from "../components";
import { products } from "../data";

export function Cart() {
    return (
        <main className="max-w-[1200px] mx-auto my-11">
            <section>
                <h1 className="mb-8 text-2xl font-bold text-center">Cart Items: 2</h1>
                <CardCart 
                    id={products[0].id}
                    name={products[0].name}
                    price={products[0].price}
                    image={products[0].image}
                />

                <CardCart 
                    id={products[1].id}
                    name={products[1].name}
                    price={products[1].price}
                    image={products[1].image}
                />
            </section>
        </main>
    )
}