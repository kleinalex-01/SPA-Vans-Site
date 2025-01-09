import { React , useState , useEffect } from "react";
import { useParams } from "react-router-dom";
export default function VanType( { vans } ) {

    const { id } = useParams();
    const [van, setVan] = useState([])

    useEffect(() => {
        const selectedVan = vans.find((van) => van.id === id)
        setVan(selectedVan)
    }, [id, vans])

    if (!van) {
        return <h1>Loading...</h1>
    }
    return (
        <>
        <div>
            <img className="van-img" src={van.imageUrl} alt={van.name} />
            <h3>{van.name}</h3>
            <p>{van.description}</p>
            <p>${van.price}/day</p>
        </div>
        </>
    )
}