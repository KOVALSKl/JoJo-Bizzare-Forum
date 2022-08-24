import { NewsContext } from "../utils/contexts";
import { useContext } from "react";

function NewsPage() {
    const { news } = useContext(NewsContext)
    return (
        <div>
            {news.news.map(item => {
                <div>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                </div>
            })}
        </div>
    );
}

export default NewsPage;