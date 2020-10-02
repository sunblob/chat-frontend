import Vue from 'vue';
import Vuex from 'vuex';
import ky from 'ky';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		chats: [],
	},
	mutations: {
		setChats(state, payload) {
			state.chats = payload;
		},
	},
	actions: {
		async getAllChats({ commit }) {
			const chats = await ky.get('http://localhost:3005/api/chats').json().catch(e => console.log(e));
			console.log('Chats: ', chats);
			commit('setChats', chats);
		},
	},
	getters: {
		getChats: state => state.chats,
	},
});
