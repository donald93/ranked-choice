import { useParams } from "react-router-dom";

const Vote = () => {

    const { id } = useParams();

    return (
        <div>Vote for poll with {id}</div>
    );
}

export default Vote;