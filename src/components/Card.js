export function Card(props) {
    return (
        <div className="w-[370px] px-2.5 py-5 m-2.5 mx-auto shadow shadow-slate-900/20 rounded-md">
            <div>
                <img src={props.image} alt="product" />
            </div>
            <p className="my-4 text-lg font-medium">{props.name}</p>
            <div className="flex justify-between">
                <p className="font-medium text-lg">${props.price}</p>
                <button className="text-lg text-white font-medium px-2 py-1 rounded bg-blue-700 hover:bg-blue-900">Add To Cart</button>
            </div>
        </div>
    )
}