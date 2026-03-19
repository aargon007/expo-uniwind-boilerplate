import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { useUniwind } from "uniwind";
import Button from "@/src/shared/components/ui/Button";
import Icon from "@/src/shared/components/ui/Icon";
import ScreenWrapper from "@/src/shared/components/ui/ScreenWrapper";
import Text from "@/src/shared/components/ui/Text";

const stats = [
    { label: "Projects", value: "24" },
    { label: "Tasks Done", value: "182" },
    { label: "Team", value: "8" },
];

const settings = [
    {
        id: "account",
        title: "Account Details",
        subtitle: "Manage your personal information",
        icon: "person-circle-outline" as const,
    },
    {
        id: "security",
        title: "Security",
        subtitle: "Password, 2FA and devices",
        icon: "shield-checkmark-outline" as const,
    },
    {
        id: "notifications",
        title: "Notifications",
        subtitle: "Control what updates you receive",
        icon: "notifications-outline" as const,
    },
    {
        id: "billing",
        title: "Billing",
        subtitle: "Invoices, cards and subscriptions",
        icon: "card-outline" as const,
    },
];

const ProfileScreen = () => {
    const { theme } = useUniwind();

    return (
        <ScreenWrapper withBottomInset={false}>
            <ScrollView
                key={theme}
                showsVerticalScrollIndicator={false}
                contentContainerClassName="gap-5 px-5 pb-4"
            >
                <View className="mt-2 rounded-3xl bg-primary p-5">
                    <View className="flex-row items-center justify-between">
                        <View className="h-14 w-14 items-center justify-center rounded-full bg-on-primary-surface">
                            <Icon name="person" size={30} textClassName="text-on-primary" />
                        </View>
                        <View className="rounded-full bg-on-primary-surface px-3 py-1">
                            <Text variant="caption" className="font-semibold text-on-primary">
                                Pro Member
                            </Text>
                        </View>
                    </View>

                    <Text variant="h4" className="mt-4 text-on-primary">
                        Md Muhaiminul
                    </Text>
                    <Text variant="body-sm" className="mt-1 text-on-primary-muted">
                        muhaiminul@demo.dev
                    </Text>

                    <View className="mt-5 flex-row gap-3">
                        <Button
                            label="Edit Profile"
                            variant="secondary"
                            size="sm"
                            className="flex-1"
                        />
                        <Button
                            label="Share"
                            variant="outline"
                            size="sm"
                            className="flex-1 border-on-primary-outline"
                            textClassName="text-on-primary"
                        />
                    </View>
                </View>

                <View className="flex-row gap-3">
                    {stats.map((item) => (
                        <View
                            key={item.label}
                            className="flex-1 items-center rounded-2xl border border-border bg-card p-4"
                        >
                            <Text variant="h4">{item.value}</Text>
                            <Text variant="caption" color="secondary" className="mt-1">
                                {item.label}
                            </Text>
                        </View>
                    ))}
                </View>

                <View className="gap-3 rounded-2xl border border-border bg-card p-4">
                    <Text variant="label" color="secondary">
                        QUICK ACTIONS
                    </Text>
                    <View className="flex-row flex-wrap gap-2">
                        <Button
                            label="Activity"
                            variant="ghost"
                            size="sm"
                            leftIcon={<Icon name="pulse-outline" size={16} textClassName="text-text" />}
                        />
                        <Button
                            label="Bookmarks"
                            variant="ghost"
                            size="sm"
                            leftIcon={<Icon name="bookmark-outline" size={16} textClassName="text-text" />}
                        />
                        <Button
                            label="Support"
                            variant="ghost"
                            size="sm"
                            leftIcon={<Icon name="headset-outline" size={16} textClassName="text-text" />}
                        />
                    </View>
                </View>

                <View className="overflow-hidden rounded-2xl border border-border bg-card">
                    {settings.map((item, index) => (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={0.8}
                            className={`flex-row items-center px-4 py-4 ${
                                index !== settings.length - 1 ? "border-b border-border" : ""
                            }`}
                        >
                            <View className="h-10 w-10 items-center justify-center rounded-xl bg-bg-secondary">
                                <Icon name={item.icon} size={20} textClassName="text-text" />
                            </View>

                            <View className="ml-3 flex-1">
                                <Text variant="body" weight="medium">
                                    {item.title}
                                </Text>
                                <Text variant="caption" color="secondary" className="mt-0.5">
                                    {item.subtitle}
                                </Text>
                            </View>

                            <Icon name="chevron-forward" size={18} textClassName="text-text-tertiary" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
};

export default ProfileScreen;
