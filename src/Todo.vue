<script setup>
import { computed, ref } from 'vue';

const todos = ref(
    [
        { id: 1, title: "Item 1", checked: false },
        { id: 2, title: "Item 2", checked: false },
        { id: 3, title: "Item 3", checked: false },
    ]

    
)

const completedTodos = computed(()=>{
    return todos.value.filter(a => a.checked)
})
const inProgressTodos = computed(()=>{
    return todos.value.filter(a => ! a.checked)
})
</script>
<template>
    <h1>TODO</h1>
    <section v-if="inProgressTodos.length">
        <h2>In Progress</h2>
        <ul>
            <li v-for="todo in inProgressTodos" :key="todo.id">
                <label>
                    {{ todo.title }}
                    <input type="checkbox" v-model="todo.checked" :checked="todo.checked" />

                </label>

            </li>
        </ul>
    </section>
    <section v-if="completedTodos.length">
        <h2>Completed</h2>
        <ul>
            <li style="text-decoration: line-through;" v-for="todo in completedTodos" :key="todo.id">
                <label>
                    {{ todo.title }}
                    <input type="checkbox" v-model="todo.checked" :checked="todo.checked" />

                </label>

            </li>
        </ul>
    </section>
</template>