import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useListStore = defineStore('ListStore', () => {
    const list = ref([])
    // 异步请求
    const getGoods = async () => {
        const res = await axios.get('http://localhost:3000/goods')
        list.value = res.data
        console.log(list.value)
    }
    return { list, getGoods }
})