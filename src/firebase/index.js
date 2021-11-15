import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyCJf8mQoHpkhjlWZNrWhm9DZymlRTqcf8I',
	authDomain: 'cool-store-6d7b8.firebaseapp.com',
	projectId: 'cool-store-6d7b8',
	storageBucket: 'cool-store-6d7b8.appspot.com',
	messagingSenderId: '1025531634873',
	appId: '1:1025531634873:web:4fe6f477c3f71737722768',
};
const app = initializeApp(firebaseConfig);
export const getFirebase = () => app;
export { getFirestore };
