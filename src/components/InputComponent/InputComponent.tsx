import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserLoading } from "../../redux/selectors/selectUserState";
import Loader from "../Loader/Loader";

import './InputComponent.scss'

interface InputInterface {
    placeholder: string;
    searchFunction: (value: string) => void;
    storeValue: string
}

const InputComponent: FC<InputInterface> = (props) => {
    const [value, setValue] = useState<string>(props.storeValue);
    const isLoading = useSelector(selectUserLoading);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.trim()) {
            setValue(event.target.value.trim());
        } else {
            setValue("");
        }
    };

    useEffect(() => {
        if (value) {
            props.searchFunction(value);
        } else {
            props.searchFunction("");
        }
    }, [value]);

    return (
        <>
            <input
                className="search__element"
                name="github-search"
                placeholder={props.placeholder}
                onChange={onChangeHandler}
                type="text"
                value={value}
            />
            {isLoading && <Loader />}
        </>
    );
};

export default InputComponent;
