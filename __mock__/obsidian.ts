export class Notice {
  constructor(msg: string) {
    console.log("Mock Notice:", msg);
  }
}

export type EditorPosition = {
    line: number;
    ch: number;
};