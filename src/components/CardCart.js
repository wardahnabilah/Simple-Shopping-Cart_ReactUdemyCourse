export function CardCart(props) {
    return (
        <div className="p-2.5 mx-2.5 mb-[30px] flex justify-between items-center shadow shadow-slate-900/20 rounded-md">
            <div className="w-[150px] h-[100px]">
                <img className="w-full h-full" src={props.image} alt="product" />
            </div>
            <p className="w-[350px]">{props.name}</p>
            <p className="w-[100px]">${props.price}</p>
            <button className="text-sm text-white px-2 py-1 rounded bg-red-600 hover:bg-red-800">Remove</button>
        </div>
    )
}