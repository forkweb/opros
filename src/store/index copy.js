import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'





Vue.use(Vuex);
// const db2 = firebase.firestore();


export default new Vuex.Store({
  state: {
    // tasks: db.collection("surveys").onSnapshot(snap => {
    //   snap.docs.map(doc => doc.data());
    // })
    tasks: []
    // tasks: db2.collection("surveys").onSnapshot(snapshot => {
    //   return snapshot.val
    // })
    // tasks: db2.collection("surveys").onSnapshot(snap => {
    //   return snap.docs.map(doc => doc.data());
    // })
    // tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
    //   if (new Date(task.date) < new Date()) {
    //     task.status = 'outdated'
    //   }
    //   return task
    // })
  },
  mutations:{
    // LoadTask(state) {
      
    //   const db = firebase.firestore();
    //   db.collection("surveys").onSnapshot(snap => {
    //       let res = snap.docs.map(doc => doc.data());
    //       state.tasks = res;
    //       // commit('LoadTask',res);
    //   });
    // },
    // setLoadTask(state, value) {
    //   state.tasks = value;
    // },
    createTask(state, {task, otherinfo}) {
      state.tasks.push(task,otherinfo)
      // state.tasks.push()

      // localStorage.setItem('tasks', JSON.stringify(state.tasks));

      const db = firebase.firestore();

      db.collection('surveys').add({
        data: task,
        otherinfo: otherinfo
      });
    },
    updateTask(state, {id, description, date}) {
      const tasks = state.tasks.concat()

      const idx = tasks.findIndex(t => t.id === id)
      const task = tasks[idx]

      const status = new Date(date) > new Date() ? 'active' : 'outdated'

      tasks[idx] = {...task, date, description, status}

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id) {
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'completed'
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions:{
    // loadTask({commit}){
    //   firebase.database.ref('surveys').on('value', snapshot => {
    //     commit('loadTask', snapshot.val());
    //   })
    // },
    // loadTask({commit}) {
      // const list = [];
      // firebase.database().ref('surveys').on('value', data =>{
      //   for(var i = list.length -1; i>=0; i--) {
      //     list.splice(i,1);
      //   }
      //   data.forEach(obj =>{
      //     let m = obj.val();
      //     m.id = obj.key;
      //     list.push(m);
      //   })
      // });

      // const db = firebase.firestore();
      // db.collection("surveys").onSnapshot(snap => {
      //     let res = snap.docs.map(doc => doc.data());
      //     // state.tasks = list
      //     commit('setLoadTask',res);
      // });
    // },
    // LoadTask({commit}, task) {
    //   commit('LoadTask', task)
    // },
    createTask({commit}, task) {
      commit('createTask', task)
    },
    updateTask({commit}, task) {
      commit('updateTask', task)
    },
    completeTask({commit}, id) {
      commit('completeTask', id)
    }
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id),
    allTasks(state) {
      return state.tasks
    }
  },
  modules: {
    login
  }
})