import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { firebase, database as default };

  // child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });



//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });

//       console.log(expenses);
//     });

    // database.ref('expenses').on('value', (snapshot) => {
    //     const expenses = [];

    //     snapshot.forEach((childSnapshot) => {
    //       expenses.push({
    //           id: childSnapshot.key,
    //           ...childSnapshot.val()
    //       });
    //     });
  
    //     console.log(expenses);
    // });

  database.ref('expenses').push({
      description: 'Rent',
      note: '',
      amount: 1065800,
      createdAt: 5464646551615
  });




//   database.ref('notes/-MEA5Z_ouczbhhJ9Rnrs').remove();

//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: '.Net, Web Api, ReactJS, Angular 9'
//   });

//   const notes = [{
//     id: 45,
//     title: 'First Note!',
//     body: 'This is my Note'
//   }, {
//     id: '8674iopau',
//     title: 'Another Note!',
//     body: 'This is my other Note'
//   }];

//   database.ref('notes').set(notes);

//   database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error fetching data', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 3500);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 3500);

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

//   database.ref().set({
//       name: 'Ahmed Syed',
//       age: 29,
//       stressLevel: 6,
//       job: {
//         title: 'Software Developer',
//         company: 'Google'
//       },
//       location: {
//           city: 'Seattle',
//           country: 'United States of America'
//       }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//     console.log('This failed. ', e);
//   });

//   database.ref().update({
//      stressLevel: 9,
//      'job/company': 'Amazon',
//      'location/city': 'San Francisco'
//   });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Didnt remove the data', e);
//   });