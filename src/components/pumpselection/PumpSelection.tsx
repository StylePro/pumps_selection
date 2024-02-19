import { useState } from 'react';
import styles from './PumpSelection.module.css';

const PumpSelection = () => {
  const [typePump, setTypePump] = useState('');
  return (
    <div className={styles.pump_name}>
      <label>
        Выберите насос:
        <select
          value={'' || typePump}
          onChange={(e) => setTypePump(e.target.value)}
          className={styles.pump_select}
        >
          <option value="" disabled>
            select
          </option>
          <option value="ГХ">ГХ</option>
          <option value="ГХМ">ГХМ</option>
          <option value="ГХИ">ГХИ</option>
          <option value="ГХС">ГХС</option>
        </select>
      </label>
    </div>
  );
};

export default PumpSelection;
