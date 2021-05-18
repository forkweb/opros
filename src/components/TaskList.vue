<template>
  <div>
    <h1 class="title_list_opros">Список опросов</h1>

    <hr />

    <div
      class="list_tasks-items" 
      v-if="surveys.length">
      <div
        class="taks_itemI"
        v-for="(item, index) in surveys" :key="index">
        <span>{{ index }}</span>
        <span>{{ item.otherinfo.title }}</span>
        <span>{{moment(item.otherinfo.date).format('YYYY-MM-DD')}}</span>
        <router-link
          tag="button"
          class="btn btn-small"
          :to="{
            name: 'task',
            params: { searchTags: item, id: item.otherinfo.id },
          }"
        >
          Открыть
        </router-link>
      </div>
    </div>

    <p v-else>Нет задач</p>
    
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

// import Task from './Task'
import moment from 'moment'



export default {
  data: () => ({
    surveys: "",
    dateparse: ""
  }),
  // components: { Task },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
    displayTasks() {
      return this.tasks;
    },
    // surveysItems() {

    // }
  },
  mounted() {
    window.M.FormSelect.init(this.$refs.select);
  },
  beforeCreate() {
    // let ref = db.collection('surveys');

    const db = firebase.firestore();

    db.collection("surveys").onSnapshot((snap) => {
      // this.surveys = snap.docs.map(doc => doc.data().data);
      this.surveys = snap.docs.map((doc) => doc.data());

      //  this.$store.state.tasks.dispatch(this.surveys);
      //  console.log(this.$store.state)

      // let items = snap.docs.map(doc => {
      //     return { id: doc.data().id, title: doc.data().data.title }
      // })

      // console.log(this.surveys = snap.docs.map(doc => doc.data()));
      // console.log(items);
    });
  },
  methods: {
    moment: function () {
      return moment();
    }
},
};
</script>

<style lang="scss" scoped>
.td {
  max-width: 400px;
}

.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>