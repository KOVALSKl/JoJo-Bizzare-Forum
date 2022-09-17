import './HomePage.css'
import disc from '../../assets/menu-dvd-disc.svg'
import { Container } from "react-bootstrap";
import { useGetNewsQuery } from "../../features/api/apiSlice";
import NewsCard from "../../components/news-card/NewsCard";
import EmbedYTVideo from "../../components/embed-youtube-video/EmbedYTVideo";
import { Link } from "react-router-dom";
import { useEffect } from 'react';

function HomePage({ children }) {
    const {
        data: news,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetNewsQuery({ offset: 0, limit: 2 });

    let content;

    if (isLoading) {
        content = <div>Loading...</div>
    } else if (isError) {
        content = <div>{error.toString()}</div>
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
    }

    return (
        <div className="home">
            <Container className='page'>
                <div className="welcome-block">
                    <div className="block-title">
                        <h1 id="main-title">
                            <span>
                                Welcome T<span id="z-index-alhpabet">o</span>
                                <img src={disc} alt='White Snakes Disc' />
                            </span>
                        </h1>
                        <h2 className="sub-title">
                            JoJo's Bizzare Forum
                        </h2>
                    </div>
                    <section className="created-by-fans">
                        <span className="section-title">
                            Created By Fans To Fans
                        </span>
                        <div className="section-body">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </section>
                </div>
                <div className="hot-news-block">
                    <h2 className="block-title">
                        Hot News
                    </h2>
                    {content}
                    <Link to='/news' className="more-articles-link">More Articles Here</Link>
                </div>
            </Container>
            <div className="new-series-trailer-block">
                <Container>
                    <h2 className="block-title">
                        New Series Trailer
                    </h2>
                </Container>
                <EmbedYTVideo videoID='fiNJEulukVY' />
                <Container>
                    <div className="premiere-date">
                        Premiere: 01.09.2022
                    </div>
                    <div className="block-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras congue justo non imperdiet lobortis. Donec pellentesque orci lorem,
                        a blandit urna egestas at. Morbi ac lectus vel arcu tristique sagittis.
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default HomePage;