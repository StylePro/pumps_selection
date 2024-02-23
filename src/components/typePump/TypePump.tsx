import { addPump, clearTypePump } from '../../redux/slices/pumpSelectedSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import styles from './TypePump.module.css';

const TypeOfPump = () => {
  const typesPumps = useAppSelector((state) => state.pump.typesOfPumps);
  const pump = useAppSelector((state) => state.pump.currentPump);
  const dispatch = useAppDispatch();

  function addChangeHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(addPump(e.target.value));
  }
  function clearTypePumpHandler() {
    dispatch(clearTypePump());
  }
  return (
    <div className={styles.pump_name}>
      <label>
        Выберите насос:
        <select
          className={styles.pump_select}
          value={'' || pump}
          onChange={addChangeHandler}
        >
          <option value="" disabled>
            -select-
          </option>
          {typesPumps.map((typePump) => (
            <option key={typePump.id} value={typePump.name}>
              {typePump.name}
            </option>
          ))}
        </select>
      </label>
      <button className={styles.pump_button} onClick={clearTypePumpHandler}>
        Очистить
      </button>
    </div>
  );
};

export default TypeOfPump;
