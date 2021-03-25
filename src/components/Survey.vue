<template>
  <div>
    <h1>Опрос</h1>


    



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

  },
  mounted() {
    
  },
  beforeCreate() {
    // let ref = db.collection('surveys');

    const db = firebase.firestore();

    db.collection("surveys").onSnapshot(snap => {
      this.surveys = snap.docs.map(doc => doc.data());
      // console.log(snap.docs[0].data());
    });

  },
}
</script>

<style lang="scss" scoped>

  .text {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>