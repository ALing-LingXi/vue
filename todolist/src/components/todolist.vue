<template>
  <div class="todo-container">
    <h2>我的待办事项</h2>

    <!-- 添加任务 -->
    <div class="input-group">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="输入新任务..."
        class="todo-input"
      />
      <button @click="addTodo" class="btn">添加</button>
    </div>

    <!-- 任务列表 -->
    <ul class="todo-list">
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @click="toggleComplete(index)"
        class="todo-item"
      >
        {{ todo.text }}
        <button @click.stop="removeTodo(index)" class="delete-btn">删除</button>
      </li>
    </ul>

    <!-- 操作按钮 -->
    <div class="actions">
      <p>共 {{ todos.length }} 项任务，还有 {{ remainingCount }} 项未完成</p>
      <button @click="clearCompleted" class="btn">清除已完成</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'

// 初始化任务数组
const todos = ref(loadFromLocalStorage())

// 新增任务
const newTodo = ref('')
function addTodo() {
  const text = newTodo.value.trim()
  if (text === '') return
  todos.value.push({
    id: Date.now(),
    text,
    completed: false
  })
  newTodo.value = ''
}

// 切换完成状态
function toggleComplete(index) {
  todos.value[index].completed = !todos.value[index].completed
}

// 删除任务
function removeTodo(index) {
  todos.value.splice(index, 1)
}

// 清除已完成任务
function clearCompleted() {
  todos.value = todos.value.filter(todo => !todo.completed)
}

// 计算未完成任务数
const remainingCount = computed(() => {
  return todos.value.filter(todo => !todo.completed).length
})

// 监听数据变化并保存到 localStorage
watchEffect(() => {
  saveToLocalStorage(todos.value)
})

// 本地存储方法
function saveToLocalStorage(data) {
  localStorage.setItem('todos', JSON.stringify(data))
}
function loadFromLocalStorage() {
  const data = localStorage.getItem('todos')
  return data ? JSON.parse(data) : []
}
</script>

<style scoped>
.todo-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: Arial;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.todo-input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
}

.btn {
  padding: 8px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.todo-list {
  list-style: none;
  padding-left: 0;
}

.todo-item {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

.todo-item:hover .delete-btn {
  display: inline-block;
}

.todo-item.completed {
  text-decoration: line-through;
  color: greenyellow;
}

.delete-btn {
  position: absolute;
  right: 10px;
  top: 10px;
  display: none;
  background-color: #e74c3c;
}

.actions {
  margin-top: 20px;
}
</style>

