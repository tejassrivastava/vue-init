<script setup>
import { computed, ref } from 'vue';
import Button from './Button.vue';
// import MouseMove from './MouseMove.vue';
import { useMouse } from './composables/useMouse.js';
import { useStorage } from './composables/useStorage.js'
import TodoCreate from "@/TodoCreate.vue";
const todos = ref(
    [
        { id: 1, title: "Item 1", checked: false, tag: 'math' },
        { id: 2, title: "Item 2", checked: false, tag: 'science' },
        { id: 3, title: "Item 3", checked: false, tag: 'reading' },
    ]


)
const pick = ref()
const tags = ref([
   'all', 'science', 'math', 'reading'
])
let currentTag = ref('all')
const todoAdd = (newTodo) =>{
    console.log("in todoAdd : ", newTodo)
    todos.value.push({ id: todos.value.length + 1, title: newTodo.toString(), checked: false })
    
}
const completedTodos = computed(() => {
    return todos.value.filter(a => a.checked)
})
const inProgressTodos = computed(() => {
    return todos.value.filter(a => !a.checked)
})

const filteredTodos = computed(() => {
    
    return currentTag.value === 'all' ?  todos.value.filter(a => !a.checked)  : todos.value.filter(a => a.tag === currentTag.value)
    
})
const handleTagClick = (tag) => {
    currentTag.value = tag;
    

}
const { x, y } = useMouse();
let food = useStorage('food','salad')
let age = useStorage('age', 27)
</script>
<template>
    <h1>TODO</h1>
   <div> <button :class="{ activeTag : tag === currentTag }"  @click="handleTagClick(tag)" v-for="tag in tags">{{ tag }}</button></div>
    <section v-if="filteredTodos.length">
        <h2>In Progress <span>({{ filteredTodos.length }})</span></h2>
        <ul>
            <li v-for="todo in filteredTodos" :key="todo.id">
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
    <TodoCreate @todoAdd="todoAdd" :todoadd="todoAdd"></TodoCreate>
    
    <Button type="primary" :processing="true">
        <template #a>
        <h2>a</h2>
    </template>
        <h2>b</h2>
    
    </Button>
    <!-- <MouseMove></MouseMove> -->
  
    <!-- <template>Mouse position is at: {{ x }}, {{ y }}</template>
    <p>{{ x }} , {{ y }}</p> -->



<section>
    <p>
        What is your fav food ? <input type="text" v-model="food" />
    </p>

    <p>
        What is your age ? <input type="text" v-model="age" />
    </p>
</section>
<input type="radio" v-model="pick" :value="first" />
<input type="radio" v-model="pick" :value="second" />


</template>
