<template>
  <div>
    <h1>Список опросов</h1>

    <hr>

    <table v-if="surveys.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Заголовок</th>
        <th>Дата</th>
        <th>Описание</th>
        <th>Открыть</th>
      </tr>
      </thead>
      <tbody>


        <div v-for="survey of surveys" :key="survey.otherinfo.id">
          {{survey.otherinfo.title}}
          <!-- {{survey.data.titleglav.title}} -->
          <!-- {{survey.id}} -->
          <router-link tag="button" class="btn btn-small" :to="'/task/' + survey.otherinfo.id">
            Открыть
          </router-link>
        </div>


      <!-- <tr v-for="(task, idx) of displayTasks" :key="task.id">
        <td>{{idx + 1}}</td>
        <td>{{task.title}}</td>
        <td>{{new Date(task.date).toLocaleDateString()}}</td>
        <td class="td">
          <div class="text">{{task.description}}</div>
        </td>
        <td>
          <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">
            Открыть
          </router-link>
        </td>
      </tr> -->
      </tbody>
    </table>
    <p v-else>Нет задач</p>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
export default {
  data: () => ({
    surveys: ""
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks
    },
    // surveysItems() {

    // }
  },
  mounted() {
    window.M.FormSelect.init(this.$refs.select)
  },
  beforeCreate() {
    // let ref = db.collection('surveys');

    const db = firebase.firestore();

    db.collection("surveys").onSnapshot(snap => {
      // this.surveys = snap.docs.map(doc => doc.data().data);
      this.surveys = snap.docs.map(doc => doc.data());

      // let items = snap.docs.map(doc => {
      //     return { id: doc.data().id, title: doc.data().data.title }
      // })

      // console.log(this.surveys = snap.docs.map(doc => doc.data()));
      // console.log(items);
    });

  },
}
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