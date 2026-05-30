import { Picker as ExpoPicker } from "@expo/ui";
import type { ComponentProps } from "react";

export type PickerProps = ComponentProps<typeof ExpoPicker>;
export type PickerItemProps = ComponentProps<typeof ExpoPicker.Item>;

export const Picker = ExpoPicker;
export default Picker;
