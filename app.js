// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc,
  getDocs 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// إعدادات Firebase الخاصة بك - استبدلها بإعداداتك
const firebaseConfig = {
  apiKey: "AIzaSyABC123...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM Elements
const storiesList = document.getElementById('stories-list');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// جلب القصص من Firestore
async function loadStories() {
  try {
    const querySnapshot = await getDocs(collection(db, "stories"));
    storiesList.innerHTML = ''; // مسح المحتوى القديم
    
    querySnapshot.forEach((doc) => {
      const story = doc.data();
      storiesList.innerHTML += `
        <div class="story">
          <h3>${story.title}</h3>
          <p>${story.content || ''}</p>
          <small>بواسطة: ${story.author || 'مجهول'}</small>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error loading stories:", error);
    storiesList.innerHTML = '<p>حدث خطأ في تحميل القصص</p>';
  }
}

// تهيئة التطبيق
loadStories();