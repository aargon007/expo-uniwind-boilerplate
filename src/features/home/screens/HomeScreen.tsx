import React, { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { toast } from "sonner-native";
import { Uniwind, useUniwind } from "uniwind";
import Button from "@/src/shared/components/ui/Button";
import Icon from "@/src/shared/components/ui/Icon";
import ScreenWrapper from "@/src/shared/components/ui/ScreenWrapper";
import Text from "@/src/shared/components/ui/Text";
import type { MainTabScreenProps } from "@/src/navigation/types";

type HomeScreenProps = MainTabScreenProps<"Home">;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const { theme } = useUniwind();
    const [isToastModalVisible, setIsToastModalVisible] = useState(false);

    const toggleTheme = () => {
        Uniwind.setTheme(theme === "dark" ? "light" : "dark");
    };

    const showHomeToast = () => {
        toast.success("Toast is working", {
            description: "This one was triggered directly from the Home screen.",
        });
    };

    const showModalToast = () => {
        toast("Toast from modal", {
            description: "The modal can trigger sonner-native toasts too.",
            action: {
                label: "Undo",
                onClick: () => {
                    toast.info("Undo tapped", {
                        description: "Action handlers can chain another toast.",
                    });
                },
            },
        });
    };

    const themeIcon = (
        <Icon
            name={theme === "dark" ? "sunny-outline" : "moon-outline"}
            size={16}
            textClassName="text-text"
        />
    );

    return (
        <ScreenWrapper>
            <View className="mb-6 flex-row items-center justify-between px-5">
                <Text variant="h4">Home</Text>

                <Button
                    size="sm"
                    variant="outline"
                    label={theme === "dark" ? "Light" : "Dark"}
                    leftIcon={themeIcon}
                    onPress={toggleTheme}
                    textClassName="uppercase"
                />
            </View>

            <View className="gap-4 px-5">
                <Text color="secondary" className="mb-4">
                    Welcome back. Choose where you want to go.
                </Text>

                <View className="gap-3 rounded-2xl border border-border bg-card p-4">
                    <Text weight="semibold">Toast test</Text>
                    <Text variant="body-sm" color="secondary">
                        Use these buttons to verify the global toaster on the home
                        screen and from inside a modal.
                    </Text>

                    <Button
                        label="Show home toast"
                        onPress={showHomeToast}
                        width="full"
                    />

                    <Button
                        label="Open toast modal"
                        onPress={() => setIsToastModalVisible(true)}
                        width="full"
                        variant="outline"
                    />
                </View>

                <Button
                    label="Text screen"
                    onPress={() => navigation.navigate("TextScreen")}
                    width="full"
                />

                <Button
                    label="Query screen"
                    onPress={() => navigation.navigate("QueryScreen")}
                    width="full"
                    variant="secondary"
                />
            </View>

            <Modal
                animationType="fade"
                transparent
                visible={isToastModalVisible}
                onRequestClose={() => setIsToastModalVisible(false)}
            >
                <View className="flex-1 items-center justify-center px-5">
                    <Pressable
                        className="absolute inset-0"
                        onPress={() => setIsToastModalVisible(false)}
                    />

                    <View className="w-full max-w-sm gap-4 rounded-3xl border border-border bg-card p-5">
                        <View className="gap-2">
                            <Text variant="h4">Toast modal</Text>
                            <Text variant="body-sm" color="secondary">
                                Trigger a toast here to confirm the provider works
                                above modal content too.
                            </Text>
                        </View>

                        <Button
                            label="Show modal toast"
                            onPress={showModalToast}
                            width="full"
                        />

                        <Button
                            label="Close"
                            onPress={() => setIsToastModalVisible(false)}
                            width="full"
                            variant="ghost"
                        />
                    </View>
                </View>
            </Modal>
        </ScreenWrapper>
    );
};

export default HomeScreen;
