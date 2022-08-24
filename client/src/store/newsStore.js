import { makeAutoObservable } from "mobx";

export default class NewsStore {
    constructor() {
        this._news = [
            {
                title: "Made In Heaven",
                description: "just test this fucking app",
                image: "test.png"
            },
            {
                title: "Stone Freee",
                description: "just test this fucking app",
                image: "test.png"
            },
            {
                title: "JOJOLands",
                description: "just test this fucking app",
                image: "test.png"
            }
        ]
        makeAutoObservable(this);
    }

    setNews(news) {
        this._news = news;
    }

    get news() {
        return this._news;
    }

}