import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex);

const store= new Vuex.Store({
    state: {
        output:'0',
        selectedTag:'其他',
        type:'-',
        notes:'',
        recordList : [],
        budget :null,
    }as RootState,
    mutations: {
        //budget
        removeBudget(state){
            state.budget=null;
            store.commit('saveBudget');
        },
        fetchBudget(state){
            state.budget =JSON.parse(window.localStorage.getItem('budget') || '0');
        },
        createBudget(state,money: number) {
            state.budget=money;
            store.commit('saveBudget');
        },
        saveBudget(state){
            window.localStorage.setItem('budget',JSON.stringify(state.budget));
        },

        //record
        createRecord(state) {
            const record: recordItem={tag:state.selectedTag,notes:state.notes,type:state.type,amount:parseFloat( state.output)};
            const record2: recordItem = clone(record);
            record2.createAt = new Date().toISOString();
            state.recordList.push(record2);
            store.commit('saveRecords')
        },
        fetchRecords(state) {
            state.recordList =JSON.parse(window.localStorage.getItem('recordList') || '[]') as recordItem[];
        },
        saveRecords(state) {
            window.localStorage.setItem('recordList',
                JSON.stringify(state.recordList));
            state.output='0';
            state.notes='';
        },

        //numberPad
        inputContent(state, event: MouseEvent) {
            const button = (event.target as HTMLButtonElement);
            const input = button.textContent!;
            if (state.output.length === 16) {
                return
            }
            if (state.output === '0') {
                if ('0123456789'.indexOf(input) >= 0) {
                    state.output = input;
                } else {
                    state.output += input;
                }
                return;
            }
            if (state.output.indexOf('.') >= 0 && input === '.') {
                return;
            }
            state.output += input;
        },

        removeInput(state) {
            if (state.output.length === 1) {
                state.output = '0';
            } else {
                state.output = state.output.slice(0, -1);
            }
        },
        clearInput(state) {
            state.output = '0';
        },

        //tag
        updateTag(state,name: string){
            state.selectedTag=name;

        },

        // type
        selectType(state,type: string){
            if(type!=='-'&&type!=='+'){
                throw new Error('type is unknown');
            }
            state.type=type;
        }
    }
    });

export default store;