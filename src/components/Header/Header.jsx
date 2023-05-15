import React from "react";
import { TriangleLeft } from '../../Icons/TriangleLeft';
import * as css from "./Header.module.css"

export const Header = () => {

    return (
        <div className={css.header}>
            <h1 className={css.headerTitle}>La bit machina</h1>
            <button className={css.headerButton}>
                Play
                <TriangleLeft />
                </button>
        </div>
    )
}