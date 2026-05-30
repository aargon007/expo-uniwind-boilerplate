import { FieldGroup as ExpoFieldGroup } from "@expo/ui";
import type { ComponentProps } from "react";

export type FieldGroupProps = ComponentProps<typeof ExpoFieldGroup>;
export type FieldGroupSectionProps = ComponentProps<typeof ExpoFieldGroup.Section>;

export const FieldGroup = ExpoFieldGroup;
export default FieldGroup;
