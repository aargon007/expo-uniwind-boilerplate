import { Toaster } from "sonner-native";
import { useUniwind } from "uniwind";

const ToastProvider = () => {
    const { theme } = useUniwind();
    const toasterTheme = theme === "dark" ? "dark" : "light";

    return (
        <Toaster
            theme={toasterTheme}
            offset={50}
            closeButton
            visibleToasts={2}
            toastOptions={{
                style: {
                    width: "84%",
                    marginLeft: "auto",
                    marginRight: "auto",
                },
            }}
        />
    );
};

export default ToastProvider;
