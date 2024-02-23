import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type typePumps = {
  id: string;
  name: string;
};

type InitialState = {
  currentPump: string;
  typesOfPumps: typePumps[];
};

const initialState: InitialState = {
  currentPump: '',
  typesOfPumps: [
    { id: uuidv4(), name: 'ГХ' },
    { id: uuidv4(), name: 'ГХМ' },
    { id: uuidv4(), name: 'ГХС' },
    { id: uuidv4(), name: 'ГХИ' },
  ],
};
const pumpSelectedSlice = createSlice({
  name: 'pump',
  initialState,
  reducers: {
    addPump(state, action: PayloadAction<string>) {
      state.currentPump = action.payload;
    },
    clearTypePump(state) {
      state.currentPump = '';
    },
  },
});

export const { addPump, clearTypePump } = pumpSelectedSlice.actions;
export default pumpSelectedSlice.reducer;
