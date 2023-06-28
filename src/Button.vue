<script setup>

const props = defineProps({
    type:{
        type: String,
        default: 'primary'
    },
    processing:{
        type: Boolean,
        default: false
    }
})



</script>

<template>

<button :class="{
    
    btnDefault : !type,
    btnPrimary : type === 'primary',
    btnMuted: type === 'muted',
    btnIsLoading: processing === true

}" :disabled="processing"> Button </button>
<slot></slot>
<slot name="a"></slot>
</template>
