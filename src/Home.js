import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";
// import { Link } from "react-router-dom";

const Home = () => (
    <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
            if (loading) return 'loading';
            if (error) return 'error';
            return data.movies.map(movie => (
                <Movie
                    id={movie.id}
                    key={movie.id}
                    poster={movie.medium_cover_image}
                    title={movie.title}
                    rating={movie.rating}
                />
            ))
        }}
    </Query>
);

export default Home;