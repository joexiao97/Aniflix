//entry file

import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchShows } from "./util/show_api_util";
import { fetchGenres } from "./util/genre_api_util";

document.addEventListener("DOMContentLoaded", () => {

    let store;

    if (window.currentUser) {
        const preloadedState = {
            entities: {
                user: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    //TESTING
    window.store = store;
    window.fetchShows = fetchShows;
    window.fetchGenres = fetchGenres;
    //TESTING

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})