import { useState } from "react";
import { View } from "react-native";
import { ScrollView, Text as NativeText } from "@expo/ui";
import {
    Checkbox,
    Collapsible,
    Column,
    FieldGroup,
    Host,
    List,
    ListItem,
    Picker,
    Row,
    Slider,
    Spacer,
    Switch,
} from "@/src/components/expo-ui";
import ScreenWrapper from "@/src/components/ui/ScreenWrapper";
import Text from "@/src/components/ui/Text";
import type { MainTabScreenProps } from "@/src/navigation/types";

type ExpoUIScreenProps = MainTabScreenProps<"ExpoUI">;

const FLAVOURS = [
    { label: "Vanilla", value: "vanilla" as const },
    { label: "Chocolate", value: "chocolate" as const },
    { label: "Strawberry", value: "strawberry" as const },
    { label: "Pistachio", value: "pistachio" as const },
];

type Flavour = (typeof FLAVOURS)[number]["value"];

const SIZES = [
    { label: "Small", value: 1 },
    { label: "Medium", value: 2 },
    { label: "Large", value: 3 },
];

const MENU_ITEMS = [
    { id: 1, name: "Appearance" },
    { id: 2, name: "Notifications" },
    { id: 3, name: "Privacy" },
    { id: 4, name: "Help" },
    { id: 5, name: "About" },
];

const sectionTitle = { fontSize: 18 as const, fontWeight: "bold" as const };
const sectionNote = { fontSize: 13 as const, color: "#6c6c70" };

const ExpoUIScreen = (_props: ExpoUIScreenProps) => {
    // Switch
    const [wifi, setWifi] = useState(true);
    const [bluetooth, setBluetooth] = useState(false);
    const [airplane, setAirplane] = useState(false);

    // Checkbox
    const [terms, setTerms] = useState(false);
    const [newsletter, setNewsletter] = useState(true);
    const [updates, setUpdates] = useState(false);

    // Slider
    const [basic, setBasic] = useState(0.5);
    const [ranged, setRanged] = useState(50);
    const [stepped, setStepped] = useState(20);

    // Picker
    const [menuFlavour, setMenuFlavour] = useState<Flavour>("vanilla");
    const [wheelFlavour, setWheelFlavour] = useState<Flavour>("chocolate");
    const [size, setSize] = useState(2);

    // Collapsible
    const [colOpen, setColOpen] = useState(false);
    const [advOpen, setAdvOpen] = useState(false);
    const [openPanel, setOpenPanel] = useState<"a" | "b" | "c" | null>(null);

    // FieldGroup
    const [fgWifi, setFgWifi] = useState(true);
    const [fgBluetooth, setFgBluetooth] = useState(false);
    const [location, setLocation] = useState(true);
    const [analytics, setAnalytics] = useState(false);

    // List
    const [lastTapped, setLastTapped] = useState("—");

    return (
        <ScreenWrapper withBottomInset={false}>
            <View className="mb-4 px-5">
                <Text variant="h4">Expo UI</Text>
                <Text variant="body-sm" color="secondary" className="mt-1">
                    Universal components from @expo/ui
                </Text>
            </View>

            <Host style={{ flex: 1 }}>
                <ScrollView style={{ padding: 16 }}>
                    <Column spacing={32}>

                        {/* ── Switch ────────────────────────────────── */}
                        <Column spacing={8}>
                            <NativeText textStyle={sectionTitle}>Switch</NativeText>
                            <Switch value={wifi} onValueChange={setWifi} label="Wi-Fi" />
                            <Switch value={bluetooth} onValueChange={setBluetooth} label="Bluetooth" />
                            <Switch value={airplane} onValueChange={setAirplane} label="Airplane Mode" />
                            <Switch value onValueChange={() => {}} label="Locked on" disabled />
                            <Switch value={false} onValueChange={() => {}} label="Locked off" disabled />
                        </Column>

                        {/* ── Checkbox ──────────────────────────────── */}
                        <Column spacing={8}>
                            <NativeText textStyle={sectionTitle}>Checkbox</NativeText>
                            <Checkbox value={terms} onValueChange={setTerms} label="Accept terms & conditions" />
                            <Checkbox value={newsletter} onValueChange={setNewsletter} label="Subscribe to newsletter" />
                            <Checkbox value={updates} onValueChange={setUpdates} label="Receive updates" />
                            <Checkbox value onValueChange={() => {}} label="Locked on" disabled />
                            <Checkbox value={false} onValueChange={() => {}} label="Locked off" disabled />
                        </Column>

                        {/* ── Slider ────────────────────────────────── */}
                        <Column spacing={12}>
                            <NativeText textStyle={sectionTitle}>Slider</NativeText>

                            <NativeText textStyle={sectionNote}>Basic (0–1)</NativeText>
                            <Slider value={basic} onValueChange={setBasic} />
                            <NativeText>{`Value: ${basic.toFixed(2)}`}</NativeText>

                            <NativeText textStyle={sectionNote}>Custom range (0–100)</NativeText>
                            <Slider value={ranged} onValueChange={setRanged} min={0} max={100} />
                            <NativeText>{`Value: ${ranged.toFixed(0)}`}</NativeText>

                            <NativeText textStyle={sectionNote}>Stepped (step=20, 0–100)</NativeText>
                            <Slider value={stepped} onValueChange={setStepped} min={0} max={100} step={20} />
                            <NativeText>{`Value: ${stepped}`}</NativeText>

                            <NativeText textStyle={sectionNote}>Disabled</NativeText>
                            <Slider value={0.3} onValueChange={() => {}} disabled />
                        </Column>

                        {/* ── Picker ────────────────────────────────── */}
                        <Column spacing={12}>
                            <NativeText textStyle={sectionTitle}>Picker</NativeText>

                            <NativeText textStyle={sectionNote}>Menu appearance (default)</NativeText>
                            <Row alignment="center" spacing={12}>
                                <NativeText>Flavour:</NativeText>
                                <Spacer flexible />
                                <Picker selectedValue={menuFlavour} onValueChange={v => setMenuFlavour(v as Flavour)}>
                                    {FLAVOURS.map(f => (
                                        <Picker.Item key={f.value} label={f.label} value={f.value} />
                                    ))}
                                </Picker>
                            </Row>
                            <NativeText>{`Selected: ${menuFlavour}`}</NativeText>

                            <NativeText textStyle={sectionNote}>
                                Wheel appearance — inline rotor on iOS; Android falls back to menu
                            </NativeText>
                            <Picker selectedValue={wheelFlavour} onValueChange={v => setWheelFlavour(v as Flavour)} appearance="wheel">
                                {FLAVOURS.map(f => (
                                    <Picker.Item key={f.value} label={f.label} value={f.value} />
                                ))}
                            </Picker>
                            <NativeText>{`Selected: ${wheelFlavour}`}</NativeText>

                            <NativeText textStyle={sectionNote}>Numeric values</NativeText>
                            <Row alignment="center" spacing={12}>
                                <NativeText>Size:</NativeText>
                                <Spacer flexible />
                                <Picker selectedValue={size} onValueChange={v => setSize(v as number)}>
                                    {SIZES.map(s => (
                                        <Picker.Item key={s.value} label={s.label} value={s.value} />
                                    ))}
                                </Picker>
                            </Row>
                            <NativeText>{`Selected: ${size}`}</NativeText>

                            <NativeText textStyle={sectionNote}>Disabled</NativeText>
                            <Row alignment="center" spacing={12}>
                                <NativeText>Flavour:</NativeText>
                                <Spacer flexible />
                                <Picker selectedValue={menuFlavour} onValueChange={() => {}} enabled={false}>
                                    {FLAVOURS.map(f => (
                                        <Picker.Item key={f.value} label={f.label} value={f.value} />
                                    ))}
                                </Picker>
                            </Row>
                        </Column>

                        {/* ── Collapsible ───────────────────────────── */}
                        <Column spacing={8}>
                            <NativeText textStyle={sectionTitle}>Collapsible</NativeText>

                            <NativeText textStyle={sectionNote}>Independent</NativeText>
                            <Collapsible label="Show preferences" isOpen={colOpen} onOpenChange={setColOpen}>
                                <Column spacing={8}>
                                    <Switch label="Wi-Fi" value={wifi} onValueChange={setWifi} />
                                    <Switch label="Bluetooth" value={bluetooth} onValueChange={setBluetooth} />
                                </Column>
                            </Collapsible>
                            <Collapsible label="Advanced" isOpen={advOpen} onOpenChange={setAdvOpen}>
                                <Checkbox label="Verbose logging" value={terms} onValueChange={setTerms} />
                            </Collapsible>

                            <NativeText textStyle={sectionNote}>Accordion (one open at a time)</NativeText>
                            <Collapsible
                                label="Panel A"
                                isOpen={openPanel === "a"}
                                onOpenChange={open => setOpenPanel(open ? "a" : null)}
                            >
                                <Switch label="Option" value={wifi} onValueChange={setWifi} />
                            </Collapsible>
                            <Collapsible
                                label="Panel B"
                                isOpen={openPanel === "b"}
                                onOpenChange={open => setOpenPanel(open ? "b" : null)}
                            >
                                <Checkbox label="Setting" value={terms} onValueChange={setTerms} />
                            </Collapsible>
                            <Collapsible
                                label="Panel C"
                                isOpen={openPanel === "c"}
                                onOpenChange={open => setOpenPanel(open ? "c" : null)}
                            >
                                <Slider value={basic} onValueChange={setBasic} />
                            </Collapsible>
                        </Column>

                        {/* ── FieldGroup ────────────────────────────── */}
                        <Column spacing={8}>
                            <NativeText textStyle={sectionTitle}>FieldGroup</NativeText>
                            <FieldGroup style={{ height: 280 }}>
                                <FieldGroup.Section title="CONNECTIVITY">
                                    <Switch label="Wi-Fi" value={fgWifi} onValueChange={setFgWifi} />
                                    <Switch label="Bluetooth" value={fgBluetooth} onValueChange={setFgBluetooth} />
                                </FieldGroup.Section>
                                <FieldGroup.Section title="PRIVACY" titleUppercase={false}>
                                    <Checkbox label="Location services" value={location} onValueChange={setLocation} />
                                    <Checkbox label="Analytics" value={analytics} onValueChange={setAnalytics} />
                                </FieldGroup.Section>
                            </FieldGroup>
                        </Column>

                        {/* ── List ──────────────────────────────────── */}
                        <Column spacing={8}>
                            <NativeText textStyle={sectionTitle}>List</NativeText>
                            <List>
                                {MENU_ITEMS.map(item => (
                                    <ListItem
                                        key={item.id}
                                        onPress={() => setLastTapped(item.name)}
                                        supportingText="Tap to select"
                                    >
                                        {item.name}
                                    </ListItem>
                                ))}
                                <ListItem supportingText={`Last tapped: ${lastTapped}`}>
                                    Status
                                </ListItem>
                            </List>
                        </Column>

                        {/* ── Column · Row · Spacer ─────────────────── */}
                        <Column spacing={8}>
                            <NativeText textStyle={sectionTitle}>Column · Row · Spacer</NativeText>

                            <NativeText textStyle={sectionNote}>Flexible spacer pushes to edges</NativeText>
                            <Row spacing={8} alignment="center">
                                <Checkbox label="Left" value={terms} onValueChange={setTerms} />
                                <Spacer flexible />
                                <Switch value={wifi} onValueChange={setWifi} />
                            </Row>

                            <NativeText textStyle={sectionNote}>Fixed 24dp gap</NativeText>
                            <Row spacing={8} alignment="center">
                                <Checkbox label="Left" value={newsletter} onValueChange={setNewsletter} />
                                <Spacer size={24} />
                                <Switch value={bluetooth} onValueChange={setBluetooth} />
                            </Row>

                            <NativeText textStyle={sectionNote}>Nested Column inside Row</NativeText>
                            <Row spacing={16} alignment="start">
                                <Column spacing={8}>
                                    <Switch label="Wi-Fi" value={wifi} onValueChange={setWifi} />
                                    <Switch label="Bluetooth" value={bluetooth} onValueChange={setBluetooth} />
                                </Column>
                                <Column spacing={8}>
                                    <Checkbox label="Terms" value={terms} onValueChange={setTerms} />
                                    <Checkbox label="Newsletter" value={newsletter} onValueChange={setNewsletter} />
                                </Column>
                            </Row>
                        </Column>

                    </Column>
                </ScrollView>
            </Host>
        </ScreenWrapper>
    );
};

export default ExpoUIScreen;
