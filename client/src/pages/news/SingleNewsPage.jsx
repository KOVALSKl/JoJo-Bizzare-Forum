import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleNewsQuery } from "../../features/api/apiSlice";
import { BASE_URL } from '../../utils/consts'

function SingleNewsPage() {
    let { id } = useParams();
    let navigate = useNavigate()

    const {
        data: singleNews,
        isFetching,
        isSuccess,
        error
    } = useGetSingleNewsQuery(id);

    let content;

    if (isFetching) {
        content = <h1>Loading...</h1>
    } else if (isSuccess) {
        content =
            <div>
                <p>Title: {singleNews.title}</p>
                <p>Date: {singleNews.date}</p>
                <img src={`${BASE_URL}/static/news/${singleNews.image}`} />
                <br />
                <p>{singleNews.description}</p>
                <p>{singleNews.userNickname}</p>
                <button onClick={() => {
                    navigate("/news")
                }}>
                    Back to news
                </button>
            </div>
    } else {
        content = <div>{error.data.message}</div>
    }

    return (
        <div className="page">
            {content}
        </div>
    );
}

export default SingleNewsPage
