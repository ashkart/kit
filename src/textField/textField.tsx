import * as React from 'react'
import {ChangeEvent} from "react";

import cx from "classnames";

import "./style.scss";

interface IProps {
    value: string;
    onChange: (value: string | number) => void;
    placeholder?: string;
    label?: string;
    labelPosition?: "left" | "right" | "top" | "bottom";
    className?: string;
    labelClassName?: string;
}

const TextField: React.FC<IProps> = (props) => {
    const {
        value,
        onChange,
        placeholder,
        label,
        labelPosition = "left",
        className = "",
        labelClassName = ""
    } = props;

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <>
            <label className={cx(labelClassName, labelPosition)}>
                <span className="label-text">{label}</span>
                <input className={cx("input", className)} placeholder={placeholder} value={value} onChange={changeHandler} />
            </label>
        </>
    );
};

export default TextField;