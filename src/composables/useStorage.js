import { ref, watch } from "vue";

export function useStorage(key,val) {
    let storedVal =localStorage.getItem(key);
    if(storedVal){
        val = ref(storedVal);
    } else {
        val = ref(val);
        write();
    }
    

    watch(val,()=>{
        write();
    })

    function write() {
        if( val.value === null || val.value === ''){
            localStorage.removeItem(key);
        }else {
        localStorage.setItem(key,val.value);
        }
    }

    return val;
}