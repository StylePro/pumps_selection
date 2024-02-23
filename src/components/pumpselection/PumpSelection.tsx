import TypeOfPump from '../typePump/TypePump';
import { useAppSelector } from '../hooks/hooks';
import PumpCharacteristics from '../pumpCharacteristics/PumpCharacteristics';

const PumpSelection = () => {
  const pump = useAppSelector((state) => state.pump.currentPump);
  return (
    <>
      <TypeOfPump />
      {pump && <PumpCharacteristics />}
    </>
  );
};

export default PumpSelection;
