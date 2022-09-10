import { useGetNewsQuery } from '../../features/api/apiSlice';
import NewsCard from '../../components/news-card/NewsCard';
import { Container } from 'react-bootstrap';
import './NewsPage.css'


function NewsPage() {

    const {
        data: news,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNewsQuery({ offset: 0, limit: 5 })

    let content

    if (isLoading) {
        content = <h2>Loading...</h2>
    } else if (isSuccess) {
        let newsCopy = news.slice();
        let sortedHotNews = newsCopy.sort((a, b) => {
            return (b.date > a.date) ? 1 : (a.date > b.date) ? -1 : 0;
        });

        content =
            <div className="block-content">
                {
                    sortedHotNews.map((item) => {
                        return (
                            <NewsCard card={item} key={item.id} />
                        )
                    })
                }
            </div>
    } else if (isError) {
        content = <div>{error.toString()}</div>
    }

    return (
        <Container className='page'>
            <div className='news-block'>
                <h2 className="block-title">
                    News
                </h2>
                {content}
            </div>
        </Container>
    );
}

export default NewsPage;