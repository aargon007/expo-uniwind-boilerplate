import { Column as ExpoColumn, Host as ExpoHost } from "@expo/ui";
import type { ComponentProps } from "react";

export type ColumnProps = ComponentProps<typeof ExpoColumn>;
export type HostProps = ComponentProps<typeof ExpoHost>;

export const Column = ExpoColumn;
export const Host = ExpoHost;
export default Column;
