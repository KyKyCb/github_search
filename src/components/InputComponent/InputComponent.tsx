import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserLoading } from "../../redux/selectors/selectUserState";
import Loader from "../Loader/Loader";

interface InputInterface {
    placeholder: string;
    searchFunction: (value: string) => void;
}

const InputComponent: FC<InputInterface> = (props) => {
    const [value, setValue] = useState<string>("");
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
