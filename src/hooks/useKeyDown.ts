import { onBeforeUnmount } from "vue";
import type { PianoKeyType } from "@/constants/piano";

let useKeyDown = (
        keyCombos: PianoKeyType[],
        fn: (note: string) => void, 
        repeat = false
    ) => {

    let onKeyDown = (event: KeyboardEvent) => {
        if(!repeat && event.repeat) return

        let kc = keyCombos.find(kc => kc.key === event.key);

        if(kc) {
            fn(kc.note);
        }
    }

    window.addEventListener('keydown', onKeyDown);
    onBeforeUnmount(() => {
        window.removeEventListener('keydown', onKeyDown);
    });
};

export default useKeyDown;
