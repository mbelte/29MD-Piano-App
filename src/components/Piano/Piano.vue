<template>
    <div class="piano-wrap">
        <div class="piano">
            <div class="piano__top">
                <span class="piano__logo">YAMAHAHA</span>
            </div>
            <div class="piano__keys">
                <PianoKey
                    v-for="key in PianoKeys"
                    :key="key.key"
                    :note="key.note"
                    :pressedKey="state.pressedKey"
                    @click="playAudio(key.note)"
                >
                    <span>
                        {{ key.key.toUpperCase() }}
                    </span>
                </PianoKey>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { reactive, onMounted } from 'vue';
    import type { PianoKeyType } from '../../constants/piano'
    import { PianoKeys } from '../../constants/piano';
    import useKeyDown from '../../hooks/useKeyDown'

    import PianoKey from './PianoKey.vue';

    const   state = reactive({ 
                pianoSounds: {} as { [key: string]: HTMLAudioElement },
                pressedKey: ''
            })
    
    const setPianoSounds = (keys: PianoKeyType[]) => {
        keys.forEach((key) => {
            if (!state.pianoSounds[key.note]) {
                state.pianoSounds[key.note] = new Audio(`./sounds/piano/${ key.note }.mp3`)
            }
        })
    }

    const playAudio = (note: string) => {
        if (state.pianoSounds[note].paused == false) {
            state.pianoSounds[note].cloneNode(true).play()
        } else {
            state.pianoSounds[note].play()
        }

        state.pressedKey = note

        setTimeout(() => {
            state.pressedKey = ''
        }, 200);
    }
    
    useKeyDown(PianoKeys, playAudio);

    onMounted(() => {
        setPianoSounds(PianoKeys)
    })
</script>