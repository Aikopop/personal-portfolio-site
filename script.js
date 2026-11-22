// Language translations
const translations = {
    en: {
        welcome:'Welcome', whatDo:'What do you want to see?', business:'Business', user:'User', aboutMe:'About Me', portfolio:'Portfolio', socials:'Socials', merch:'Merch', projects:'Projects', selectLanguage:'Select your language', language:'Language', confirm:'Confirm', donations:'Donations', donate:'Donate!', email:'Email', emailPlaceholder:'Enter your email', notificationsText:'I want to receive notifications about updates, news and discounts', login:'Login', enterVerificationCode:'Enter verification code', verificationTenSeconds:'You have 10 seconds to view the code', incorrectCode:'Incorrect code', successMessage:'Welcome! You can personalize your profile, comment on products or projects, and access purchases or commissions!', myPurchases:'My Purchases', notificationsTitle:'Notifications', purchases:'Purchases', personalizeProfile:'Personalize Profile', username:'Username', newUsername:'New username', codeNotice:'This is your code', aboutAccount:'About my account', accountInfo:'My account information', logout:'Log out', deleteAccount:'Delete account', createdAt:'Account creation date:', visits:'Times you have visited the page:', back:'Back', yes:'Yes', no:'No', deleteQuestion:'Are you sure you want to delete your account?', deleteRequest:'We have received your request. You will be notified when we have ended all ties with this page, after which you can permanently delete your account.', choosePhoto:'Choose photo', zoom:'Zoom', cropHint:'Drag the photo to adjust its position.'
    },
    ja: {
        welcome:'ようこそ', whatDo:'何を見たいですか？', business:'ビジネス', user:'ユーザー', aboutMe:'私について', portfolio:'ポートフォリオ', socials:'ソーシャル', merch:'グッズ', projects:'プロジェクト', selectLanguage:'あなたの言語を選択してください', language:'言語', confirm:'確認', donations:'寄付', donate:'寄付する！', email:'メール', emailPlaceholder:'メールアドレスを入力してください', notificationsText:'更新、ニュース、割引に関する通知を受け取りたいです', login:'ログイン', enterVerificationCode:'検証コードを入力してください', verificationTenSeconds:'コードを確認できる時間は10秒です', incorrectCode:'コードが正しくありません', successMessage:'ようこそ！プロフィールをカスタマイズし、製品やプロジェクトについてコメントし、購入や依頼にアクセスできます！', myPurchases:'私の購入', notificationsTitle:'通知', purchases:'購入', personalizeProfile:'プロフィールをカスタマイズ', username:'ユーザー名', newUsername:'新しいユーザー名', codeNotice:'こちらがあなたのコードです', aboutAccount:'アカウントについて', accountInfo:'アカウント情報', logout:'ログアウト', deleteAccount:'アカウントを削除', createdAt:'アカウント作成日:', visits:'ページへの訪問回数:', back:'戻る', yes:'はい', no:'いいえ', deleteQuestion:'アカウントを削除してもよろしいですか？', deleteRequest:'削除リクエストを受け付けました。ページとの関係を終了した際に通知します。その後、アカウントを完全に削除できます。', choosePhoto:'写真を選択', zoom:'ズーム', cropHint:'写真をドラッグして位置を調整してください。'
    },
    de: {
        welcome:'Willkommen', whatDo:'Was möchtest du sehen?', business:'Geschäft', user:'Benutzer', aboutMe:'Über Mich', portfolio:'Portfolio', socials:'Soziale Medien', merch:'Merchandise', projects:'Projekte', selectLanguage:'Wählen Sie Ihre Sprache', language:'Sprache', confirm:'Bestätigen', donations:'Spenden', donate:'Spenden!', email:'E-Mail', emailPlaceholder:'Geben Sie Ihre E-Mail-Adresse ein', notificationsText:'Ich möchte Benachrichtigungen über Updates, Nachrichten und Rabatte erhalten', login:'Anmelden', enterVerificationCode:'Verificationscode eingeben', verificationTenSeconds:'Sie haben 10 Sekunden Zeit, den Code anzusehen', incorrectCode:'Code ist falsch', successMessage:'Willkommen! Personalisiere dein Profil und greife auf Käufe oder Aufträge zu!', myPurchases:'Meine Käufe', notificationsTitle:'Benachrichtigungen', purchases:'Käufe', personalizeProfile:'Profil personalisieren', username:'Benutzername', newUsername:'Neuer Benutzername', codeNotice:'Dies ist dein Code', aboutAccount:'Über mein Konto', accountInfo:'Meine Kontoinformationen', logout:'Abmelden', deleteAccount:'Konto löschen', createdAt:'Erstellungsdatum des Kontos:', visits:'Seitenbesuche:', back:'Zurück', yes:'Ja', no:'Nein', deleteQuestion:'Möchtest du dein Konto wirklich löschen?', deleteRequest:'Wir haben deine Anfrage erhalten. Du wirst benachrichtigt, sobald alle Verbindungen zu dieser Seite beendet sind. Danach kannst du dein Konto endgültig löschen.', choosePhoto:'Foto auswählen', zoom:'Zoom', cropHint:'Ziehe das Foto, um die Position anzupassen.'
    },
    es: {
        welcome:'Bienvenido', whatDo:'¿Qué quieres ver?', business:'Negocios', user:'Usuario', aboutMe:'Sobre Mí', portfolio:'Portafolio', socials:'Redes Sociales', merch:'Mercancía', projects:'Proyectos', selectLanguage:'Selecciona tu idioma', language:'Idioma', confirm:'Confirmar', donations:'Donaciones', donate:'¡Donar!', email:'Correo', emailPlaceholder:'Ingresa tu correo', notificationsText:'Quiero recibir notificaciones sobre actualizaciones, noticias y descuentos', login:'Iniciar sesión', enterVerificationCode:'Ingresa el código de verificación', verificationTenSeconds:'Tienes 10 segundos para ver el código', incorrectCode:'Código incorrecto', successMessage:'¡Bienvenido! Puedes personalizar tu perfil, comentar sobre productos o proyectos y acceder a compras o comisiones.', myPurchases:'Mis compras', notificationsTitle:'Notificaciones', purchases:'Compras', personalizeProfile:'Personalizar perfil', username:'Nombre de usuario', newUsername:'Nuevo nombre', codeNotice:'Este es tu código', aboutAccount:'Sobre mi cuenta', accountInfo:'Información de mi cuenta', logout:'Cerrar sesión', deleteAccount:'Borrar cuenta', createdAt:'Fecha de creación de cuenta:', visits:'Veces que has entrado a la página:', back:'Regresar', yes:'Sí', no:'No', deleteQuestion:'¿Estás seguro de querer borrar la cuenta?', deleteRequest:'Hemos recibido tu solicitud, se te enviará una notificación cuando cortemos todo vínculo con esta página y entonces podrás eliminar tu cuenta definitivamente.', choosePhoto:'Elegir foto', zoom:'Zoom', cropHint:'Arrastra la foto para ajustar su posición.'
    }
};

let currentLanguage='en', selectedLanguage='en', currentPage='main', currentPageId=null, userSession=null;
let codeNoticeTimeout=null, cropSource=null, cropScale=1, cropX=0, cropY=0, dragStart=null;
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const languageLabel=$('.language-label'), languageSection=$('#languageSection'), overlay=$('#overlay'), whiteBox=$('#whiteBox');

function initialize(){
    loadSavedState();
    if(userSession){ userSession.createdAt ||= new Date().toISOString(); userSession.visitCount=(Number(userSession.visitCount)||0)+1; saveState(); }
    updatePageText(); setDefaultLanguageOption(); setupEventListeners();
    if(currentPage==='detail'&&currentPageId) restoreDetailPage();
}
function setupEventListeners(){
    languageSection.addEventListener('click',()=>showPanel('#languagePanel'));
    overlay.addEventListener('click',closeAllPanels);
    $$('.language-option').forEach(b=>b.addEventListener('click',e=>{ $$('.language-option').forEach(x=>x.classList.remove('selected')); e.currentTarget.classList.add('selected'); selectedLanguage=e.currentTarget.dataset.lang; $('#confirmButton').classList.add('active'); }));
    $('#confirmButton').addEventListener('click',()=>{currentLanguage=selectedLanguage;updatePageText();saveState();closeAllPanels();});
    $$('.nav-button').forEach(b=>b.addEventListener('click',e=>{ $('#business-submenu').classList.toggle('active',e.currentTarget.dataset.section==='business'); $('#user-submenu').classList.toggle('active',e.currentTarget.dataset.section==='user'); }));
    $$('.sub-button').forEach(b=>b.addEventListener('click',e=>{const id=e.currentTarget.dataset.page;goToDetailPage(getPageTitle(id),id);}));
    $('#backButton').addEventListener('click',goBackToMain);
    $('#donateButton').addEventListener('click',()=>goToDetailPage(translations[currentLanguage].donations,'donations'));
    $('#drawerCloseBtn').addEventListener('click',()=>$('#notificationsDrawer').classList.remove('open'));
    $('#accountCloseBtn').addEventListener('click',closeAllPanels);
    $('#accountInfoBtn').addEventListener('click',openAccountInfo);
    $('#backToAccountBtn').addEventListener('click',()=>showPanel('#accountPanel'));
    $('#logoutBtn').addEventListener('click',logOut);
    $('#deleteAccountBtn').addEventListener('click',()=>showPanel('#deleteConfirmPanel'));
    $('#cancelDeleteBtn').addEventListener('click',()=>showPanel('#accountPanel'));
    $('#confirmDeleteBtn').addEventListener('click',()=>showPanel('#deleteRequestPanel'));
    $('#deleteRequestCloseBtn').addEventListener('click',closeAllPanels);
    $('#profilePhotoInput').addEventListener('change',loadCropPhoto);
    $('#photoZoom').addEventListener('input',e=>{cropScale=Number(e.target.value);renderCropImage();});
    $('#cropPreview').addEventListener('pointerdown',startCropDrag);
    window.addEventListener('pointermove',moveCropPhoto); window.addEventListener('pointerup',()=>{dragStart=null;});
    $('#profileConfirmBtn').addEventListener('click',saveProfileChanges);
    // Delegation keeps dynamic profile controls working after every re-render.
    whiteBox.addEventListener('click',e=>{
        const button=e.target.closest('button'); if(!button)return;
        if(button.id==='loginBtn')handleLogin();
        if(button.id==='purchasesBtn')goToDetailPage(translations[currentLanguage].myPurchases,'my-purchases');
        if(button.id==='notificationsBtn')openNotificationsDrawer();
        if(button.id==='personalizeBtn')openProfileEdit();
        if(button.id==='aboutAccountBtn')showPanel('#accountPanel');
    });
}
function showPanel(selector){ $$('.panel').forEach(p=>p.classList.remove('active')); $(selector).classList.add('active'); overlay.classList.add('active'); }
function closeAllPanels(){ $$('.panel').forEach(p=>p.classList.remove('active')); overlay.classList.remove('active'); }
function setDefaultLanguageOption(){ $$('.language-option').forEach(b=>b.classList.toggle('selected',b.dataset.lang===currentLanguage)); selectedLanguage=currentLanguage; }
function updatePageText(){
    const t=translations[currentLanguage]||translations.en;
    $('.main-title').textContent=t.welcome;$('.subtitle').textContent=t.whatDo;languageLabel.textContent=t.language;$('#donateLabel').textContent=t.donate;
    const nav=$$('.nav-button');nav[0].textContent=t.business;nav[1].textContent=t.user;
    const b=$('#business-submenu').querySelectorAll('.sub-button');b[0].textContent=t.aboutMe;b[1].textContent=t.portfolio;
    const u=$('#user-submenu').querySelectorAll('.sub-button');[t.aboutMe,t.socials,t.merch,t.projects].forEach((v,i)=>u[i].textContent=v);
    $('#accountPanelTitle').textContent=t.aboutAccount;$('#accountInfoBtn').textContent=t.accountInfo;$('#logoutBtn').textContent=t.logout;$('#deleteAccountBtn').textContent=t.deleteAccount;
    $('#createdAtLabel').textContent=t.createdAt;$('#visitsLabel').textContent=t.visits;$('#backToAccountLabel').textContent=t.back;$('#confirmDeleteBtn').textContent=t.yes;$('#cancelDeleteBtn').textContent=t.no;$('#deleteConfirmTitle').textContent=t.deleteQuestion;$('#deleteRequestMessage').textContent=t.deleteRequest;
    $('#choosePhotoLabel').textContent=t.choosePhoto;$('#zoomLabel').textContent=t.zoom;$('#cropHint').textContent=t.cropHint;$('#profileEditTitle').textContent=t.personalizeProfile;$('#usernameLabel').textContent=t.username;$('#profileUsernameInput').placeholder=t.newUsername;$('#profileConfirmBtn').textContent=t.confirm;
    $('#verificationTitle').textContent=t.enterVerificationCode;$('#verificationSubtitle').textContent=t.verificationTenSeconds;
    if(currentPage==='detail'&&currentPageId){$('#detailTitle').textContent=getPageTitle(currentPageId);renderDetailPage();}
}
function getPageTitle(id){const t=translations[currentLanguage]||translations.en;return {'about-me-business':t.aboutMe,portfolio:t.portfolio,'about-me-user':t.aboutMe,socials:t.socials,merch:t.merch,projects:t.projects,donations:t.donations,'my-purchases':t.myPurchases}[id]||id;}
function goToDetailPage(title,id){currentPage='detail';currentPageId=id;$('#mainContainer').classList.add('hidden');$('#detailContainer').classList.add('show');$('#detailTitle').textContent=title;$('#backButton').classList.add('show');languageSection.classList.add('hidden');saveState();renderDetailPage();}
function renderDetailPage(){
    const t=translations[currentLanguage]||translations.en;
    if(!userSession){whiteBox.innerHTML=`<div class="form-group"><label for="emailInput">${t.email}</label><input type="email" id="emailInput" placeholder="${t.emailPlaceholder}"></div><div class="notification-group"><input type="checkbox" id="notificationCheckbox"><label for="notificationCheckbox">${t.notificationsText}</label></div><button class="login-button" id="loginBtn">${t.login}</button>`;return;}
    const avatar=userSession.avatar?`<img src="${userSession.avatar}" alt="Profile">`:'pfp';
    whiteBox.innerHTML=`<div class="user-profile"><div class="profile-avatar" id="profileAvatar">${avatar}</div><div class="profile-name">${escapeHtml(userSession.username)}</div><div class="profile-buttons"><button class="profile-button" id="purchasesBtn">${t.purchases}</button><button class="profile-button" id="notificationsBtn">${t.notificationsTitle}</button><button class="profile-button" id="personalizeBtn">${t.personalizeProfile}</button><button class="profile-button" id="aboutAccountBtn">${t.aboutAccount}</button></div></div>`;
}
function handleLogin(){const email=$('#emailInput').value.trim();if(!email||!$('#emailInput').checkValidity()){ $('#emailInput').reportValidity();return;}const previous=sessionStorage.getItem('verificationCode');let code;do{code=String(Math.floor(100000+Math.random()*900000));}while(code===previous);sessionStorage.setItem('verificationCode',code);sessionStorage.setItem('verificationEmail',email);showVerificationPanel();}
function showVerificationPanel(){const inputs=$$('.code-digit');$('#verificationError').classList.remove('show');inputs.forEach((input,i)=>{input.value='';input.oninput=e=>{e.target.value=e.target.value.replace(/\D/g,'').slice(-1);if(e.target.value&&i<inputs.length-1)inputs[i+1].focus();checkVerificationCode();};input.onkeydown=e=>{if(e.key==='Backspace'&&!input.value&&i>0)inputs[i-1].focus();};});showPanel('#verificationPanel');showCodeNotice(sessionStorage.getItem('verificationCode'));inputs[0].focus();}
function showCodeNotice(code){$('#codeNotice')?.remove();clearTimeout(codeNoticeTimeout);const box=document.createElement('div');box.id='codeNotice';box.className='code-notice';box.innerHTML=`<div class="code-notice-label">${translations[currentLanguage].codeNotice}</div><div class="code-notice-value">${code}</div>`;document.body.appendChild(box);codeNoticeTimeout=setTimeout(()=>{box.classList.add('hide');setTimeout(()=>box.remove(),500);},10000);}
function checkVerificationCode(){const value=$$('.code-digit').map(i=>i.value).join('');if(value.length!==6)return;if(value===sessionStorage.getItem('verificationCode'))createUserSession();else{$('#verificationError').textContent=translations[currentLanguage].incorrectCode;$('#verificationError').classList.add('show');}}
function createUserSession(){const id=Date.now();userSession={userId:id,email:sessionStorage.getItem('verificationEmail'),username:`Usuario${id}`,avatar:null,wantNotifications:$('#notificationCheckbox')?.checked||false,createdAt:new Date().toISOString(),visitCount:1};showPanel('#successPanel');$('#successMessage').textContent=translations[currentLanguage].successMessage;$('#successConfirmBtn').onclick=()=>{closeAllPanels();$('#codeNotice')?.remove();saveState();renderDetailPage();};}
function openNotificationsDrawer(){const t=translations[currentLanguage];$('#drawerTitle').textContent=t.notificationsTitle;$('#drawerContent').innerHTML='<div class="notification-item">New product launch!</div><div class="notification-item">Special discount 20%</div><div class="notification-item">Project update available</div>';$('#notificationsDrawer').classList.add('open');}
function openProfileEdit(){if(!userSession)return;$('#profileUsernameInput').value=userSession.username;resetCropEditor();showPanel('#profileEditPanel');if(userSession.avatar){const image=new Image();image.onload=()=>{cropSource=image;$('#cropImage').src=userSession.avatar;$('#cropImage').hidden=false;$('#cropPlaceholder').hidden=true;$('#photoZoom').disabled=false;renderCropImage();};image.src=userSession.avatar;}}
function resetCropEditor(){ $('#profilePhotoInput').value='';$('#cropImage').hidden=true;$('#cropPlaceholder').hidden=false;$('#photoZoom').value='1';$('#photoZoom').disabled=true;cropSource=null;cropScale=1;cropX=0;cropY=0; }
function loadCropPhoto(e){const file=e.target.files?.[0];if(!file||!file.type.startsWith('image/'))return;const reader=new FileReader();reader.onload=()=>{const image=new Image();image.onload=()=>{cropSource=image;cropScale=1;cropX=0;cropY=0;$('#cropImage').src=reader.result;$('#cropImage').hidden=false;$('#cropPlaceholder').hidden=true;$('#photoZoom').value='1';$('#photoZoom').disabled=false;renderCropImage();};image.src=reader.result;};reader.readAsDataURL(file);}
function renderCropImage(){if(!cropSource)return;const size=$('#cropPreview').clientWidth,fit=Math.max(size/cropSource.naturalWidth,size/cropSource.naturalHeight);const img=$('#cropImage');img.style.width=`${cropSource.naturalWidth*fit*cropScale}px`;img.style.height=`${cropSource.naturalHeight*fit*cropScale}px`;img.style.left=`calc(50% + ${cropX}px)`;img.style.top=`calc(50% + ${cropY}px)`;}
function startCropDrag(e){if(!cropSource||e.target!==$('#cropImage'))return;e.preventDefault();dragStart={x:e.clientX,y:e.clientY,offsetX:cropX,offsetY:cropY};}
function moveCropPhoto(e){if(!dragStart)return;cropX=dragStart.offsetX+e.clientX-dragStart.x;cropY=dragStart.offsetY+e.clientY-dragStart.y;renderCropImage();}
function getCroppedAvatar(){if(!cropSource)return userSession.avatar;const size=300,box=$('#cropPreview').clientWidth,fit=Math.max(box/cropSource.naturalWidth,box/cropSource.naturalHeight),w=cropSource.naturalWidth*fit*cropScale,h=cropSource.naturalHeight*fit*cropScale,ratio=size/box,canvas=document.createElement('canvas');canvas.width=size;canvas.height=size;canvas.getContext('2d').drawImage(cropSource,(box/2+cropX-w/2)*ratio,(box/2+cropY-h/2)*ratio,w*ratio,h*ratio);return canvas.toDataURL('image/jpeg',.88);}
function saveProfileChanges(){if(!userSession)return;const name=$('#profileUsernameInput').value.trim();if(name)userSession.username=name;if(cropSource)userSession.avatar=getCroppedAvatar();saveState();closeAllPanels();renderDetailPage();}
function openAccountInfo(){if(!userSession)return;const date=new Date(userSession.createdAt||Date.now());$('#accountCreatedAt').textContent=date.toLocaleString(currentLanguage);$('#accountVisits').textContent=String(userSession.visitCount||1);showPanel('#accountInfoPanel');}
function logOut(){userSession=null;sessionStorage.removeItem('verificationCode');sessionStorage.removeItem('verificationEmail');saveState();closeAllPanels();renderDetailPage();}
function restoreDetailPage(){$('#mainContainer').classList.add('hidden');$('#detailContainer').classList.add('show');$('#detailTitle').textContent=getPageTitle(currentPageId);$('#backButton').classList.add('show');languageSection.classList.add('hidden');renderDetailPage();}
function goBackToMain(){$('#mainContainer').classList.remove('hidden');$('#detailContainer').classList.remove('show');$('#backButton').classList.remove('show');languageSection.classList.remove('hidden');$('#business-submenu').classList.remove('active');$('#user-submenu').classList.remove('active');currentPage='main';currentPageId=null;saveState();}
function saveState(){localStorage.setItem('appState',JSON.stringify({language:currentLanguage,page:currentPage,pageId:currentPageId,userSession}));}
function loadSavedState(){try{const saved=JSON.parse(localStorage.getItem('appState'));if(saved){currentLanguage=translations[saved.language]?saved.language:'en';selectedLanguage=currentLanguage;currentPage=saved.page||'main';currentPageId=saved.pageId||null;userSession=saved.userSession||null;}}catch(e){console.warn('Could not restore saved state.',e);}}
function escapeHtml(value){const span=document.createElement('span');span.textContent=value;return span.innerHTML;}

initialize();
