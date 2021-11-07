import React, {useReducer} from "react";
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_REPOS,
    CLEAR_USERS,
    GET_USER
} from '../types';

const GithubState = (props) => {
    const initialState = {
        users:[],
        user:{},
        loading:false,
        repos:[],
    }

    const [state,dispatch] = useReducer(GithubReducer,initialState);

    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
        dispatch({
            type:SEARCH_USERS,
            payload:res.data.items,
        });
    };
    
    const clearUser = () => {
        dispatch({type:CLEAR_USERS});
    }

    const getUser = async (username) => {
        setLoading();
        const res = await  axios.get(`https://api.github.com/users/${username}`);
        dispatch({
            type:GET_USER,
            payload:res.data
        });
    };

    const getUserRepos = async (username) => {
        setLoading();
        const res = await  axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        dispatch({
            type:GET_REPOS,
            payload:res.data
        })
    };

    const setLoading = () => {
        dispatch({
            type:SET_LOADING
        })
    };

    return <GithubContext.Provider
        value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            loading:state.loading,
            searchUsers,
            clearUser,
            getUser,
            getUserRepos
        }}>
        {props.children}
    </GithubContext.Provider>
};

export default GithubState;