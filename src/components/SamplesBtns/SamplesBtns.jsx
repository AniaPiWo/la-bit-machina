import React, { useState} from "react";
import * as css from "./SampleBtns.module.css"
import { Soundwave } from "../../Icons/SoundWave";

export const SampleBtns = ({valueBtn, sampleName}) => {
    const [buttons, setButtons] = useState(Array(valueBtn).fill(false));

    return (
        <div className={css.sampleBtnsBox}>
            <button className={css.sampleBtnMain}>
                {sampleName}
                < Soundwave />
            </button>
              {buttons.map((value, index) => (
              <button key={`${index}-${value}`} className={css.buttonItem}/>
            ))}
        </div>

    )
}