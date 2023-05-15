import React, { useState } from 'react';
import * as css from "./Metronome.module.css"
import { TriangleUp } from '../../Icons/TriangleUp';
import { TriangleDown } from '../../Icons/TriangleDown';

export const Metronome = () => {
    const [value, setValue] = useState(0);

    function handleChange(event) {
        setValue(event.target.value);
      }

    return (
        <div className={css.metronome}>
          <div className={css.buttonBox}>
            <button className={css.bpmButton}>
              <TriangleUp/>
            </button>
            <button className={css.bpmButton}>
              <TriangleDown/>
            </button>
          </div>
          <div className={css.bpmBox}>
            <span className={css.bpmValue}>120</span>
            <span className={css.bpmTitle}>BPM</span>
          </div>
          <input 
            type="range" 
            className={css.progressBar} 
            min="0" 
            max="100" 
            value={value} 
            onChange={handleChange} 
        />
        </div>
    )
}
