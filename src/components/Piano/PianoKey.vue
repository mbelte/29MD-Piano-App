<template>
    <button :class="className">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
    import { computed, onMounted } from 'vue';

    const props = defineProps({
        note: {
            type: String,
            required: true
        },
        pressedKey: {
            type: String,
            required: true
        }
    })

    const className = computed(() => {
        let keyClass = ''

        if (props.note.length === 2) {
            keyClass = 'piano__key-white'
        } else {
            keyClass = 'piano__key-black'
        }

        if (props.pressedKey === props.note) {
            return `${ keyClass } ${ keyClass }-active`
        }

        return keyClass
    })

    onMounted(() => {
        className
    })
</script>