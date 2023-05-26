export function Card(props) {
    const {name, price, image} = props.product

    return (
        <div className="w-[370px] px-2.5 py-5 m-2.5 mx-auto shadow shadow-slate-900/20 rounded-md">
            <div className="w-[350px] h-[250px]">
                <img className="w-full h-full" src={image} alt={name} />
            </div>
            <p className="my-4 text-lg font-medium">{name}</p>
            <div className="flex justify-between">
                <p className="font-medium text-lg">${price}</p>
                <button className="text-md text-white font-medium p-2 rounded bg-blue-700 hover:bg-blue-900">Add To Cart</button>
            </div>
        </div>
    )
}