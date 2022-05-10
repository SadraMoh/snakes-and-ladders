import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface Map {
  imageUrl: string
  rows: Cell[][]
}

export interface Cell {
  index: number
  to?: number
}

const initialState: Map = {
  imageUrl: '',
  rows: [
    [{ index: 0 }, { index: 1 }, { index: 2 }, { index: 3, to: 24 }, { index: 4 }, { index: 5 }, { index: 6 }, { index: 7 }, { index: 8 }, { index: 9 }], // 0
    [{ index: 10 }, { index: 11 }, { index: 12, to: 45 }, { index: 13 }, { index: 14 }, { index: 15 }, { index: 16 }, { index: 17 }, { index: 18 }, { index: 19 }], // 1
    [{ index: 20 }, { index: 21 }, { index: 22 }, { index: 23 }, { index: 24 }, { index: 25 }, { index: 26, to: 4 }, { index: 27 }, { index: 28 }, { index: 29 }], // 2
    [{ index: 30 }, { index: 31 }, { index: 32, to: 48 }, { index: 33 }, { index: 34 }, { index: 35 }, { index: 36 }, { index: 37 }, { index: 38 }, { index: 39, to: 2 }], // 3
    [{ index: 40 }, { index: 41, to: 62 }, { index: 42, to: 17 }, { index: 43 }, { index: 44 }, { index: 45 }, { index: 46 }, { index: 47 }, { index: 48 }, { index: 49, to: 68 }], // 4
    [{ index: 50 }, { index: 51 }, { index: 52 }, { index: 53, to: 30 }, { index: 54 }, { index: 55 }, { index: 56 }, { index: 57 }, { index: 58 }, { index: 59 }], // 5
    [{ index: 60 }, { index: 61, to: 80 }, { index: 62 }, { index: 63 }, { index: 64 }, { index: 65, to: 44 }, { index: 66 }, { index: 67 }, { index: 68 }, { index: 69 }], // 6
    [{ index: 70 }, { index: 71 }, { index: 72 }, { index: 73 }, { index: 74, to: 91 }, { index: 75 }, { index: 76, to: 58 }, { index: 77 }, { index: 78 }, { index: 79 }], // 7
    [{ index: 80 }, { index: 81 }, { index: 82 }, { index: 83 }, { index: 84 }, { index: 85 }, { index: 86 }, { index: 87 }, { index: 88, to: 52 }, { index: 89 }], // 8
    [{ index: 90 }, { index: 91 }, { index: 92 }, { index: 93 }, { index: 94 }, { index: 95 }, { index: 96 }, { index: 97 }, { index: 98, to: 40 }, { index: 99 }], // 9
  ]
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {

  }
})

export const selectMap = (state: RootState) => state.map;

export default mapSlice.reducer;