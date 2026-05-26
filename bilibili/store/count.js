import { defineStore } from "pinia"
import { computed, ref } from "vue"
/*
    定义 Setup-Store
    defineStore('仓库唯一标识',() => {...})
 */
export const useCounterStore = defineStore('count', () => {
    // ref() 就是 state 
    const count = ref(100)
    // computed() 就是 getters
    const double = computed(() => count.value * 2)
    // function() 就是 actions (支持异步)
    const addCount = (n) => count.value += n
    const subCount = (n) => count.value -= n

    return { count, addCount, subCount, double }
})