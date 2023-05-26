import { Card } from '../components';
import { products } from '../data';

export function Home() {
    return (
        <main className="max-w-[1200px] mx-auto">
            <section className="my-11 flex flex-wrap justify-between">
                {
                    products.map(product => {
                        return <Card 
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                />
                    })
                }
            </section>
        </main>
    )
}