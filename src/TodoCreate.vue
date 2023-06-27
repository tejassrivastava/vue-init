<script setup>
import { ref } from 'vue';

const props = defineProps({
    todoadd : Function 
})
const emit = defineEmits(['todoAdd'])
const newTodo = ref('');
const addTodo = () => {

    console.log("in addTodo :", newTodo.value)
    emit("todoAdd",newTodo.value)
    // props.todoadd(newTodo.value)

    newTodo.value = ''
    
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo" type="text" />
        <button type="submit">+</button>
    </form>
</template>