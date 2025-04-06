type MoonEventType = "custom-solar-node-krai-click" | "custom-solar-animate" | "custom-solar-reset";
export const MoonEvent = {
    dispatchEvent(eventName: MoonEventType, detail: any) {
        const event = new CustomEvent(eventName, { detail });
        window.dispatchEvent(event);
    },
    addEventListener(eventName: MoonEventType, callback: (detail: any) => void) {
        window.addEventListener(eventName, (e) => {
            callback((e as CustomEvent).detail);
        });
    },
};
