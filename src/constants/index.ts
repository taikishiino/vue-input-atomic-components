interface Option {
  label: string;
  value: number;
}
export const INPUT_RADIO_OPTIONS: Record<string, Array<Option>> = {
  DEFAULT: [
    { label: "有り", value: 1 },
    { label: "無し", value: 0 }
  ]
};

export const INPUT_SELECT_OPTIONS: Record<string, Array<Option>> = {
  DEFAULT: [
    { label: "選択してください", value: 0 },
    { label: "hoge", value: 1 },
    { label: "huga", value: 2 }
  ]
};

export const INPUT_CHECKBOX_OPTIONS: Record<string, Array<Option>> = {
  DEFAULT: [
    { label: "hoge", value: 1 },
    { label: "huga", value: 2 }
  ]
};
