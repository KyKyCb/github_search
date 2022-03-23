import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectUserLoading } from "../../redux/selectors/selectUserState";
import Loader from "../Loader/Loader";

interface SearchResultListInterface<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

function SearchResultList<T>(props: SearchResultListInterface<T>) {
    const isLoading = useSelector(selectUserLoading);
    return (
        <>
            {props.items.length === 0 && !isLoading && <h1 className="empty-list__message">List is empty</h1>}
            {props.items.map(props.renderItem)}
        </>
    );
}

export default SearchResultList;
