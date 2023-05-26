import { Card } from '../components';
import { products } from '../data';
import { useDocTitle } from '../hooks/useDocTitle.';

export function Home() {
    
    useDocTitle("Home")
    
    return (
        <main className="font-[poppins] max-w-container mx-auto my-11">
            <section className="flex flex-wrap justify-between">
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