import { List as ExpoList, ListItem as ExpoListItem } from "@expo/ui";
import type { ComponentProps } from "react";

export type ListProps = ComponentProps<typeof ExpoList>;
export type ListItemProps = ComponentProps<typeof ExpoListItem>;

export const List = ExpoList;
export const ListItem = ExpoListItem;
export default List;
