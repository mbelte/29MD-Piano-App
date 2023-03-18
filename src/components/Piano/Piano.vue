<template>
    <div class="piano-wrap">
        <div class="piano">
            <div class="piano__top">
                <span class="piano__logo">
                    YAMAHAHA
                </span>
                <div class="piano__btns">
                    <button 
                        title="Play Demo"
                        class="piano__btn"
                        @click="playRecord(DemoRecord)"
                    ></button>

                    <button 
                        title="Play Record"
                        class="piano__btn"
                        @click="playRecord(state.record)"
                    ></button>

                    <button 
                        title="Record"
                        :class="[state.recordStart ? 'piano__btn piano__btn--recording' : 'piano__btn']"
                        @click="toggleRecord"
                    ></button>
                </div>
            </div>
            <div class="piano__keys">
                <PianoKey
                    v-for="key in PianoKeys"
                    :key="key.key"
                    :note="key.note"
                    :pressedKey="state.pressedKey"
                    :disabled="state.isKeysDisabled"
                    @click="playNote(key.note)"
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
    import { type PianoKeyType, type RecordType, DemoRecord } from '../../constants/piano'
    import { PianoKeys } from '../../constants/piano';
    import useKeyDown from '../../hooks/useKeyDown'

    import PianoKey from './PianoKey.vue';

    const   state = reactive({ 
                pianoSounds: {} as { [key: string]: HTMLAudioElement },
                isKeysDisabled: false,
                record: [] as RecordType[],
                recordStart: 0,
                pressedKey: ''
            })
    
    const setPianoSounds = (keys: PianoKeyType[]) => {
        keys.forEach((key) => {
            if (!state.pianoSounds[key.note]) {
                state.pianoSounds[key.note] = new Audio(`./sounds/piano/${ key.note }.mp3`)
            }
        })
    }

    const playNote = (note: string) => {
        if (state.pianoSounds[note].paused == false) {
            state.pianoSounds[note].pause()
            state.pianoSounds[note].currentTime = 0
        }

        state.pianoSounds[note].play()
        state.pressedKey = note

        recordPiano(note)

        setTimeout(() => {
            state.pressedKey = ''
        }, 200);
    }

    const toggleRecord = () => {
        if (state.recordStart) {
            state.recordStart = 0
        } else {
            state.recordStart = Date.now()
        }
    }

    const recordPiano = (note: string) => {
        if (state.recordStart) {
            const delay = Date.now() - state.recordStart
            state.record.push({ note, delay })
        }
    }

    const playRecord = (record: RecordType[]) => {
        state.isKeysDisabled = true        
        const totalKeys = record.length

        record.forEach(({ note, delay}, index) => {
            setTimeout(() => {
                playNote(note)

                if (index +1 === totalKeys) {
                    state.isKeysDisabled = false
                }
            }, delay);
        })
    }
    
    useKeyDown(PianoKeys, playNote);

    onMounted(() => {
        setPianoSounds(PianoKeys)
    })
</script>