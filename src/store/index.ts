import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        output:'0',
        selectedTag:'其他',
        type:'-'
    }as RootState,
    mutations: {
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
