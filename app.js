// بيانات وهمية للقصص (ستستبدلها لاحقًا ببيانات حقيقية من قاعدة بيانات)
const stories = [
    { title: "قصة الأول", author: "محمد" },
    { title: "قصة الثاني", author: "أحمد" }
];

// عرض القصص في الصفحة
const storiesList = document.getElementById('stories-list');
stories.forEach(story => {
    storiesList.innerHTML += `
        <div class="story">
            <h3>${story.title}</h3>
            <p>بواسطة: ${story.author}</p>
        </div>
    `;
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
const firebaseConfig = { /* إعداداتك من Firebase */ };
const app = initializeApp(firebaseConfig);
