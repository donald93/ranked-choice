import { useParams } from "react-router-dom";

const PollResults = () => {

    const { id } = useParams();

    return (
        <div>Results for {id}</div>
    );
}

export default PollResults;