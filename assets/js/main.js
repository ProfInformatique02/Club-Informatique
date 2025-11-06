// Language toggle + simple dynamic text for bilingual site
const translations = {
  fr: {
    // nav
    home: "Accueil",
    activities: "Activités",
    contact: "Contact",
    // hero
    welcome: "Bienvenue au Club Informatique",
    intro: "Nous développons des compétences en programmation, design et réseaux.",
    see_activities: "Voir les activités",
    join: "Rejoindre le club",
    // features
    proj: "Projets pratiques",
    proj_desc: "Sites, robots, bases de données, et jeux éducatifs.",
    skills: "Compétences",
    skills_desc: "HTML/CSS/JS, Python, Arduino, Design graphique.",
    events: "Ateliers & Présentations",
    events_desc: "Ateliers pratiques et démonstrations.",
    // contact
    contact_title: "Coordonnées",
    follow: "Suivez-nous",
    contact_heading: "Contactez-nous",
    contact_intro: "Pour rejoindre ou poser une question, contactez le responsable."
  },
  ar: {
    home: "الرئيسية",
    activities: "الأنشطة",
    contact: "اتصل بنا",
    welcome: "مرحبًا بكم في نادي الإعلام الآلي",
    intro: "نطوّر مهارات البرمجة، التصميم، والشبكات. مشاريع عملية، عمل جماعي، ومسابقات.",
    see_activities: "شاهد الأنشطة",
    join: "انضم للنادي",
    proj: "مشاريع عملية",
    proj_desc: "مواقع، روبوتات، قواعد بيانات، وألعاب تعليمية.",
    skills: "مهارات",
    skills_desc: "HTML/CSS/JS، بايثون، Arduino، تصميم جرافيك.",
    events: "عروض وورشات",
    events_desc: "ورش عملية وعروض أمام الإدارة والزملاء.",
    contact_title: "معلومات الاتصال",
    follow: "تابعنا",
    contact_heading: "اتصل بنا",
    contact_intro: "للانضمام أو طرح سؤال، اتصل بمسؤول النادي."
  }
};

function setYear(id){ const el=document.getElementById(id); if(el) el.textContent=new Date().getFullYear(); }
setYear('year'); setYear('year2'); setYear('year3');

function applyLang(lang){
  // set html lang and dir
  const html = document.documentElement;
  if(lang === 'fr'){ html.lang='fr'; html.dir='ltr'; }
  else { html.lang='ar'; html.dir='rtl'; }

  // small translations by data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    // convert keys like "welcome_ar" to "welcome"
    const k = key.replace(/_(ar|fr)$/,'').replace(/_ar$/,'').replace(/_fr$/,'');
    const txt = translations[lang][k];
    if(txt) el.textContent = txt;
  });

  // toggle button label
  document.querySelectorAll('#langToggle, #langToggle2, #langToggle3').forEach(btn=>{
    btn.textContent = (lang==='fr') ? 'العربية' : 'Français';
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  // default is Arabic
  let lang = localStorage.getItem('siteLang') || 'ar';
  applyLang(lang);

  document.querySelectorAll('#langToggle, #langToggle2, #langToggle3').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      lang = (lang==='ar') ? 'fr' : 'ar';
      localStorage.setItem('siteLang', lang);
      applyLang(lang);
    });
  });
});

// fake form submit (no backend)
function fakeSubmit(e){
  e.preventDefault();
  alert('تم إرسال النموذج (تجريبي). / Formulaire envoyé (démo).');
}
