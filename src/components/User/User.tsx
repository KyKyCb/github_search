import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    DetailedUserDataInterface,
    RepositoryInfoInterface,
} from "../../constants/interfaces";
import {
    asyncSetFindRepos,
    asyncSetSelectedUser,
} from "../../redux/actions/userActions";
import {
    selectFindRepos,
    selectSelectedUser,
} from "../../redux/selectors/selectUserState";
import dateFormatter from "../../utils/dateFormatter";
import useDebounce from "../../utils/hooks/useDebounce";
import InputComponent from "../InputComponent/InputComponent";
import RepoListItem from "../RepoListItem/RepoListItem";
import SearchResultList from "../SearchResult/SearchResultList";
import "./User.scss";
const User: FC = () => {
    const { user } = useParams();

    const dispatch = useDispatch();

    const selectedUser: DetailedUserDataInterface | null =
        useSelector(selectSelectedUser);

    const findRepos = useSelector(selectFindRepos);

    const searchRepos = useDebounce((value: string) => {
        if (!value) {
            clearReposList();
        } else {
            dispatch(asyncSetFindRepos(value, user));
        }
    }, 600);

    const clearReposList = () => {
        dispatch(asyncSetFindRepos("", user));
    };

    useEffect(() => {
        dispatch(asyncSetSelectedUser(user));
        dispatch(asyncSetFindRepos("", user));
    }, []);

    if (!selectedUser) {
        return null;
    }

    return (
        <div className="user">
            <div className="user__info">
                <div className="user__info_two-columns">
                    <div className="user__info__img">
                        <img
                            src={selectedUser.avatar_url}
                            alt="account_image"
                        />
                    </div>
                    <div className="user__info__text">
                        <p className="user__text">
                            User name:{" "}
                            <span className="user__text_filled">
                                {selectedUser.login}
                            </span>
                        </p>
                        <p className="user__text">
                            Email:{" "}
                            {selectedUser.email ? (
                                <span className="user__text_filled">
                                    {selectedUser.email}
                                </span>
                            ) : (
                                <span className="user__text_not-filled">
                                    The user has not yet added this field or has
                                    hidden it.
                                </span>
                            )}
                        </p>
                        <p className="user__text">
                            Location:{" "}
                            {selectedUser.location ? (
                                <span className="user__text_filled">
                                    {selectedUser.location}
                                </span>
                            ) : (
                                <span className="user__text_not-filled">
                                    The user has not yet added this field or has
                                    hidden it.
                                </span>
                            )}
                        </p>
                        <p className="user__text">
                            Join Date:{" "}
                            <span className="user__text_filled">
                                {dateFormatter(
                                    new Date(selectedUser.created_at)
                                )}
                            </span>
                        </p>
                        <p className="user__text">
                            Followers:{" "}
                            <span className="user__text_filled">
                                {selectedUser.followers}
                            </span>
                        </p>
                        <p className="user__text">
                            Following:{" "}
                            <span className="user__text_filled">
                                {selectedUser.following}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="user__bio">
                    <p className="user__text">
                        {selectedUser.bio ? (
                            selectedUser.bio
                        ) : (
                            <span className="user__text_not-filled">
                                The user has not yet added this field or has
                                hidden it.
                            </span>
                        )}
                    </p>
                </div>
            </div>
            <InputComponent
                placeholder={`Search for ${selectedUser.login}'s Repositories`}
                storeValue={""}
                searchFunction={searchRepos}
            />
            <SearchResultList
                items={findRepos}
                renderItem={(item: RepositoryInfoInterface) => (
                    <RepoListItem
                        repoName={item.full_name}
                        forksCount={item.forks_count}
                        starsCount={item.stargazers_count}
                        githubUrl={item.html_url}
                        key={item.id}
                    />
                )}
            />
        </div>
    );
};

export default User;
