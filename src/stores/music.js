import {defineStore} from 'pinia'

export const useMusic = defineStore(
    'music',
    {
        state:()=>({
            src:'',
            name:'',
        }),
        actions:{
            setName(name){
                this.name = name;
            },
            setSrc(src){
                this.src = src;
            }
        }
    }
)