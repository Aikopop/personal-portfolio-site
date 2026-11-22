// Language translations
const translations = {
    en: {
        welcome: 'Welcome', whatDo: 'What do you want to see?', business: 'Business', user: 'User',
        aboutMe: 'About Me', portfolio: 'Portfolio', socials: 'Socials', merch: 'Merch', projects: 'Projects',
        selectLanguage: 'Select your language', language: 'Language', confirm: 'Confirm', donations: 'Donations',
        donate: 'Donate!', email: 'Email', emailPlaceholder: 'Enter your email', notificationsText: 'I want to receive notifications about updates, news and discounts',
        login: 'Login', enterVerificationCode: 'Enter verification code', verificationTenSeconds: 'You have 10 seconds to view the code',
        incorrectCode: 'Incorrect code', successMessage: 'Welcome! You can personalize your profile, comment on products or projects, and access purchases or commissions!',
        myPurchases: 'My Purchases', notificationsTitle: 'Notifications', purchases: 'Purchases', personalizeProfile: 'Personalize Profile',
        photoProfile: 'Profile Photo', username: 'Username', newUsername: 'New username', codeNotice: 'This is your code',
        aboutAccount: 'About my account', accountInfo: 'My account information', logout: 'Log out', deleteAccount: 'Delete account',
        createdAt: 'Account creation date:', visits: 'Times you have visited the page:', back: 'Back', yes: 'Yes', no: 'No',
        deleteQuestion: 'Are you sure you want to delete your account?', deleteRequest: 'We have received your request. You will be notified when we have ended all ties with this page, after which you can permanently delete your account.', choosePhoto: 'Choose photo', zoom: 'Zoom', cropHint: 'Drag the photo to adjust its position.'
    },
    ja: {
        welcome: 'ようこそ', whatDo: '何を見たいですか？', business: 'ビジネス', user: 'ユーザー', aboutMe: '私について', portfolio: 'ポートフォリオ', socials: 'ソーシャル', merch: 'グッズ', projects: 'プロジェクト',
        selectLanguage: 'あなたの言語を選択してください', language: '言語', confirm: '確認', donations: '寄付', donate: '寄付する！', email: 'メール', emailPlaceholder: 'メールアドレスを入力してください', notificationsText: '更新、ニュース、割引に関する通知を受け取りたいです', login: 'ログイン', enterVerificationCode: '検証コードを入力してください', verificationTenSeconds: 'コードを確認できる時間は10秒です', incorrectCode: 'コードが正しくありません', successMessage: 'ようこそ！プロフィールをカスタマイズし、製品やプロジェクトについてコメントし、購入や依頼にアクセスできます！', myPurchases: '私の購入', notificationsTitle: '通知', purchases: '購入', personalizeProfile: 'プロフィールをカスタマイズ', photoProfile: 'プロフィール写真', username: 'ユーザー名', newUsername: '新しいユーザー名', codeNotice: 'こちらがあなたのコードです',
        aboutAccount: 'アカウントについて', accountInfo: 'アカウント情報', logout: 'ログアウト', deleteAccount: 'アカウントを削除', createdAt: 'アカウント作成日:', visits: 'ページへの訪問回数:', back: '戻る', yes: 'はい', no: 'いいえ', deleteQuestion: 'アカウントを削除してもよろしいですか？', deleteRequest: '削除リクエストを受け付けました。ページとの関係を終了した際に通知します。その後、アカウントを完全に削除できます。', choosePhoto: '写真を選択', zoom: 'ズーム', cropHint: '写真をドラッグして位置を調整してください。'
    },
    de: {
        welcome: 'Willkommen', whatDo: 'Was möchtest du sehen?', business: 'Geschäft', user: 'Benutzer', aboutMe: 'Über Mich', portfolio: 'Portfolio', socials: 'Soziale Medien', merch: 'Merchandise', projects: 'Projekte',
        selectLanguage: 'Wählen Sie Ihre Sprache', language: 'Sprache', confirm: 'Bestätigen', donations: 'Spenden', donate: 'Spenden!', email: 'E-Mail', emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein', notificationsText: 'Ich möchte Benachrichtigungen über Updates, Nachrichten und Rabatte erhalten', login: 'Anmelden', enterVerificationCode: 'Verificationscode eingeben', verificationTenSeconds: 'Sie haben 10 Sekunden Zeit, den Code anzusehen', incorrectCode: 'Code ist falsch', successMessage: 'Willkommen! Personalisiere dein Profil und greife auf Käufe oder Aufträge zu!', myPurchases: 'Meine Käufe', notificationsTitle: 'Benachrichtigungen', purchases: 'Käufe', personalizeProfile: 'Profil personalisieren', photoProfile: 'Profilfoto', username: 'Benutzername', newUsername: 'Neuer Benutzername', codeNotice: 'Dies ist dein Code',
        aboutAccount: 'Über mein Konto', accountInfo: 'Meine Kontoinformationen', logout: 'Abmelden', deleteAccount: 'Konto löschen', createdAt: 'Erstellungsdatum des Kontos:', visits: 'Seitenbesuche:', back: 'Zurück', yes: 'Ja', no: 'Nein', deleteQuestion: 'Möchtest du dein Konto wirklich löschen?', deleteRequest: 'Wir haben deine Anfrage erhalten. Du wirst benachrichtigt, sobald alle Verbindungen zu dieser Seite beendet sind. Danach kannst du dein Konto endgültig löschen.', choosePhoto: 'Foto auswählen', zoom: 'Zoom', cropHint: 'Ziehe das Foto, um die Position anzupassen.'
    },
    es: {
        welcome: 'Bienvenido', whatDo: '¿Qué quieres ver?', business: 'Negocios', user: 'Usuario', aboutMe: 'Sobre Mí', portfolio: 'Portafolio', socials: 'Redes Sociales', merch: 'Mercancía', projects: 'Proyectos',
        selectLanguage: 'Selecciona tu idioma', language: 'Idioma', confirm: 'Confirmar', donations: 'Donaciones', donate: '¡Donar!', email: 'Correo', emailPlaceholder: 'Ingresa tu correo', notificationsText: 'Quiero recibir notificaciones sobre actualizaciones, noticias y descuentos', login: 'Iniciar sesión', enterVerificationCode: 'Ingresa el código de verificación', verificationTenSeconds: 'Tienes 10 segundos para ver el código', incorrectCode: 'Código incorrecto', successMessage: '¡Bienvenido! Puedes personalizar tu perfil, comentar sobre productos o proyectos y acceder a compras o comisiones.', myPurchases: 'Mis compras', notificationsTitle: 'Notificaciones', purchases: 'Compras', personalizeProfile: 'Personalizar perfil', photoProfile: 'Foto de perfil', username: 'Nombre de usuario', newUsername: 'Nuevo nombre', codeNotice: 'Este es tu código',
        aboutAccount: 'Sobre mi cuenta', accountInfo: 'Información de mi cuenta', logout: 'Cerrar sesión', deleteAccount: 'Borrar cuenta', createdAt: 'Fecha de creación de cuenta:', visits: 'Veces que has entrado a la página:', back: 'Regresar', yes: 'Sí', no: 'No', deleteQuestion: '¿Estás seguro de querer borrar la cuenta?', deleteRequest: 'Hemos recibido tu solicitud, se te enviará una notificación cuando cortemos todo vínculo con esta página y entonces podrás eliminar tu cuenta definitivamente.', choosePhoto: 'Elegir foto', zoom: 'Zoom', cropHint: 'Arrastra la foto para ajustar su posición.'
    }
};

let currentLanguage = 'en';
let selectedLanguage = 'en';
let currentPage = 'main';
let currentPageId = null;
let userSession = null;
let nextUserId = 1;
let codeNoticeTimeout = null;
let cropSource = null;
let cropImageScale = 1;
let cropOffsetX = 0;
let cropOffsetY = 0;
let dragStart = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const languageLabel = $('.language-label');
const languageSection = $('#languageSection');
const languagePanel = $('#languagePanel');
const verificationPanel = $('#verificationPanel');
const successPanel = $('#successPanel');
const profileEditPanel = $('#profileEditPanel');
const overlay = $('#overlay');
const confirmButton = $('#confirmButton');
const languageOptions = $$('.language-option');
const businessSubmenu = $('#business-submenu');
const userSubmenu = $('#user-submenu');
const navButtons = $$('.nav-button');
const subButtons = $$('.sub-button');
const mainContainer = $('#mainContainer');
const detailContainer = $('#detailContainer');
const detailTitle = $('#detailTitle');
const backButton = $('#backButton');
const donateButton = $('#donateButton');
const donateLabel = $('#donateLabel');
const whiteBox = $('#whiteBox');
const notificationsDrawer = $('#notificationsDrawer');
const allPanels = $$('.panel');

initialize();

function initialize() {
    loadSavedState();
    if (userSession) {
        userSession.createdAt ||= new Date().toISOString();
        userSession.visitCount = (Number(userSession.visitCount) || 0) + 1;
        saveState();
    }
    updatePageText(currentLanguage);
    setDefaultLanguageOption();
    setupEventListeners();
    if (currentPage === 'detail' && currentPageId) restoreDetailPage();
}

function setupEventListeners() {
    languageSection.addEventListener('click', openLanguagePanel);
    overlay.addEventListener('click', closeAllPanels);
    languageOptions.forEach(option => option.addEventListener('click', selectLanguageOption));
    confirmButton.addEventListener('click', confirmLanguage);
    navButtons.forEach(button => button.addEventListener('click', handleNavButtonClick));
    subButtons.forEach(button => button.addEventListener('click', handleSubButtonClick));
    backButton.addEventListener('click', goBackToMain);
    donateButton.addEventListener('click', goToDonations);
    $('#drawerCloseBtn').addEventListener('click', () => notificationsDrawer.classList.remove('open'));
    $('#accountCloseBtn').addEventListener('click', closeAllPanels);
    $('#accountInfoBtn').addEventListener('click', openAccountInfo);
    $('#backToAccountBtn').addEventListener('click', () => showPanel('#accountPanel'));
    $('#logoutBtn').addEventListener('click', logOut);
    $('#deleteAccountBtn').addEventListener('click', () => showPanel('#deleteConfirmPanel'));
    $('#cancelDeleteBtn').addEventListener('click', () => showPanel('#accountPanel'));
    $('#confirmDeleteBtn').addEventListener('click', () => showPanel('#deleteRequestPanel'));
    $('#deleteRequestCloseBtn').addEventListener('click', closeAllPanels);
    $('#profilePhotoInput').addEventListener('change', loadCropPhoto);
    $('#photoZoom').addEventListener('input', event => { cropImageScale = Number(event.target.value); renderCropImage(); });
    $('#cropPreview').addEventListener('pointerdown', startCropDrag);
    window.addEventListener('pointermove', moveCropPhoto);
    window.addEventListener('pointerup', () => { dragStart = null; });
    $('#profileConfirmBtn').addEventListener('click', saveProfileChanges);
}

function showPanel(selector) {
    allPanels.forEach(panel => panel.classList.remove('active'));
    $(selector).classList.add('active');
    overlay.classList.add('active');
}

function openLanguagePanel() { showPanel('#languagePanel'); }
function closeAllPanels() { allPanels.forEach(panel => panel.classList.remove('active')); overlay.classList.remove('active'); }

function selectLanguageOption(event) {
    languageOptions.forEach(option => option.classList.remove('selected'));
    event.target.classList.add('selected');
    selectedLanguage = event.target.dataset.lang;
    confirmButton.classList.add('active');
}

function confirmLanguage() {
    currentLanguage = selectedLanguage;
    updatePageText(currentLanguage);
    saveState();
    closeAllPanels();
}

function updatePageText(lang) {
    const t = translations[lang] || translations.en;
    $('.main-title').textContent = t.welcome;
    $('.subtitle').textContent = t.whatDo;
    languageLabel.textContent = t.language;
    donateLabel.textContent = t.donate;
    navButtons[0].textContent = t.business;
    navButtons[1].textContent = t.user;
    const businessButtons = businessSubmenu.querySelectorAll('.sub-button');
    businessButtons[0].textContent = t.aboutMe;
    businessButtons[1].textContent = t.portfolio;
    const userButtons = userSubmenu.querySelectorAll('.sub-button');
    userButtons[0].textContent = t.aboutMe;
    userButtons[1].textContent = t.socials;
    userButtons[2].textContent = t.merch;
    userButtons[3].textContent = t.projects;
    $('#accountPanelTitle').textContent = t.aboutAccount;
    $('#accountInfoBtn').textContent = t.accountInfo;
    $('#logoutBtn').textContent = t.logout;
    $('#deleteAccountBtn').textContent = t.deleteAccount;
    $('#createdAtLabel').textContent = t.createdAt;
    $('#visitsLabel').textContent = t.visits;
    $('#backToAccountLabel').textContent = t.back;
    $('#confirmDeleteBtn').textContent = t.yes;
    $('#cancelDeleteBtn').textContent = t.no;
    $('#deleteConfirmTitle').textContent = t.deleteQuestion;
    $('#deleteRequestMessage').textContent = t.deleteRequest;
    $('#choosePhotoLabel').textContent = t.choosePhoto;
    $('#zoomLabel').textContent = t.zoom;
    $('#cropHint').textContent = t.cropHint;
    $('#profileEditTitle').textContent = t.personalizeProfile;
    $('#usernameLabel').textContent = t.username;
    $('#profileUsernameInput').placeholder = t.newUsername;
    $('#profileConfirmBtn').textContent = t.confirm;
    $('#verificationTitle').textContent = t.enterVerificationCode;
    $('#verificationSubtitle').textContent = t.verificationTenSeconds;
    if (currentPage === 'detail' && currentPageId) {
        detailTitle.textContent = getPageTitle(currentPageId, lang);
        renderDetailPage();
    }
}

function setDefaultLanguageOption() {
    languageOptions.forEach(option => {
        option.classList.toggle('selected', option.dataset.lang === currentLanguage);
        if (option.dataset.lang === currentLanguage) selectedLanguage = currentLanguage;
    });
}

function handleNavButtonClick(event) {
    businessSubmenu.classList.remove('active');
    userSubmenu.classList.remove('active');
    if (event.currentTarget.dataset.section === 'business') businessSubmenu.classList.add('active');
    if (event.currentTarget.dataset.section === 'user') userSubmenu.classList.add('active');
}

function handleSubButtonClick(event) {
    const pageId = event.currentTarget.dataset.page;
    goToDetailPage(getPageTitle(pageId, currentLanguage), pageId);
}

function getPageTitle(pageId, lang) {
    const t = translations[lang] || translations.en;
    return { 'about-me-business': t.aboutMe, portfolio: t.portfolio, 'about-me-user': t.aboutMe, socials: t.socials, merch: t.merch, projects: t.projects, donations: t.donations, 'my-purchases': t.myPurchases }[pageId] || pageId;
}

function goToDetailPage(title, pageId) {
    mainContainer.classList.add('hidden');
    detailContainer.classList.add('show');
    detailTitle.textContent = title;
    backButton.classList.add('show');
    languageSection.classList.add('hidden');
    currentPage = 'detail';
    currentPageId = pageId;
    saveState();
    renderDetailPage();
}

function renderDetailPage() {
    const t = translations[currentLanguage] || translations.en;
    whiteBox.innerHTML = '';
    if (!userSession) {
        whiteBox.innerHTML = `<div class="form-group"><label for="emailInput">${t.email}</label><input type="email" id="emailInput" placeholder="${t.emailPlaceholder}"></div><div class="notification-group"><input type="checkbox" id="notificationCheckbox"><label for="notificationCheckbox">${t.notificationsText}</label></div><button class="login-button" id="loginBtn">${t.login}</button>`;
        $('#loginBtn').addEventListener('click', handleLogin);
        return;
    }

    const avatarMarkup = userSession.avatar ? `<img src="${userSession.avatar}" alt="Profile">` : 'pfp';
    whiteBox.innerHTML = `<div class="user-profile"><div class="profile-avatar" id="profileAvatar">${avatarMarkup}</div><div class="profile-name">${escapeHtml(userSession.username)}</div><div class="profile-buttons"><button class="profile-button" id="purchasesBtn">${t.purchases}</button><button class="profile-button" id="notificationsBtn">${t.notificationsTitle}</button><button class="profile-button" id="personalizeBtn">${t.personalizeProfile}</button><button class="profile-button" id="aboutAccountBtn">${t.aboutAccount}</button></div></div>`;
    $('#purchasesBtn').addEventListener('click', () => goToDetailPage(t.myPurchases, 'my-purchases'));
    $('#notificationsBtn').addEventListener('click', openNotificationsDrawer);
    $('#personalizeBtn').addEventListener('click', openProfileEdit);
    $('#aboutAccountBtn').addEventListener('click', () => showPanel('#accountPanel'));
}

function handleLogin() {
    const email = $('#emailInput').value.trim();
    if (!email) return;
    const code = generateUniqueCode();
    sessionStorage.setItem('verificationCode', code);
    sessionStorage.setItem('verificationEmail', email);
    showVerificationPanel();
}

function generateUniqueCode() {
    let code;
    const previousCode = sessionStorage.getItem('verificationCode');
    do { code = String(Math.floor(100000 + Math.random() * 900000)); } while (code === previousCode);
    return code;
}

function showVerificationPanel() {
    const codeInputs = $$('.code-digit');
    $('#verificationError').classList.remove('show');
    codeInputs.forEach((input, index) => {
        input.value = '';
        input.oninput = event => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '').slice(-1);
            if (event.target.value && index < codeInputs.length - 1) codeInputs[index + 1].focus();
            checkVerificationCode();
        };
        input.onkeydown = event => { if (event.key === 'Backspace' && !input.value && index > 0) codeInputs[index - 1].focus(); };
    });
    showPanel('#verificationPanel');
    showCodeNotice(sessionStorage.getItem('verificationCode'));
    codeInputs[0].focus();
}

function showCodeNotice(code) {
    const existing = $('#codeNotice');
    if (existing) existing.remove();
    if (codeNoticeTimeout) clearTimeout(codeNoticeTimeout);
    const notice = document.createElement('div');
    notice.id = 'codeNotice';
    notice.className = 'code-notice';
    notice.innerHTML = `<div class="code-notice-label">${translations[currentLanguage].codeNotice}</div><div class="code-notice-value">${code}</div>`;
    document.body.appendChild(notice);
    codeNoticeTimeout = setTimeout(() => {
        notice.classList.add('hide');
        setTimeout(() => notice.remove(), 500);
    }, 10000);
}

function checkVerificationCode() {
    const enteredCode = Array.from($$('.code-digit')).map(input => input.value).join('');
    if (enteredCode.length !== 6) return;
    if (enteredCode === sessionStorage.getItem('verificationCode')) createUserSession();
    else {
        $('#verificationError').textContent = translations[currentLanguage].incorrectCode;
        $('#verificationError').classList.add('show');
    }
}

function createUserSession() {
    const userId = nextUserId++;
    userSession = { userId, email: sessionStorage.getItem('verificationEmail'), username: `Usuario${userId}`, avatar: null, wantNotifications: $('#notificationCheckbox')?.checked || false, createdAt: new Date().toISOString(), visitCount: 1 };
    showSuccessPanel();
}

function showSuccessPanel() {
    $('#successMessage').textContent = translations[currentLanguage].successMessage;
    showPanel('#successPanel');
    $('#successConfirmBtn').onclick = () => {
        closeAllPanels();
        $('#codeNotice')?.remove();
        saveState();
        renderDetailPage();
    };
}

function openNotificationsDrawer() {
    const t = translations[currentLanguage];
    $('#drawerTitle').textContent = t.notificationsTitle;
    $('#drawerContent').innerHTML = '<div class="notification-item">New product launch!</div><div class="notification-item">Special discount 20%</div><div class="notification-item">Project update available</div>';
    notificationsDrawer.classList.add('open');
}

function openProfileEdit() {
    $('#profileUsernameInput').value = userSession.username;
    resetCropEditor();
    if (userSession.avatar) {
        cropSource = new Image();
        cropSource.onload = () => { $('#cropImage').src = userSession.avatar; $('#cropImage').hidden = false; $('#cropPlaceholder').hidden = true; $('#photoZoom').disabled = false; renderCropImage(); };
        cropSource.src = userSession.avatar;
    }
    showPanel('#profileEditPanel');
}

function resetCropEditor() {
    $('#profilePhotoInput').value = '';
    $('#cropImage').hidden = true;
    $('#cropPlaceholder').hidden = false;
    $('#photoZoom').value = '1';
    $('#photoZoom').disabled = true;
    cropSource = null;
    cropImageScale = 1;
    cropOffsetX = 0;
    cropOffsetY = 0;
}

function loadCropPhoto(event) {
    const file = event.target.files && event.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
        const image = new Image();
        image.onload = () => {
            cropSource = image;
            cropImageScale = 1;
            cropOffsetX = 0;
            cropOffsetY = 0;
            $('#cropImage').src = reader.result;
            $('#cropImage').hidden = false;
            $('#cropPlaceholder').hidden = true;
            $('#photoZoom').value = '1';
            $('#photoZoom').disabled = false;
            renderCropImage();
        };
        image.src = reader.result;
    };
    reader.readAsDataURL(file);
}

function renderCropImage() {
    if (!cropSource) return;
    const preview = $('#cropPreview');
    const size = preview.clientWidth;
    const baseScale = Math.max(size / cropSource.naturalWidth, size / cropSource.naturalHeight);
    const width = cropSource.naturalWidth * baseScale * cropImageScale;
    const height = cropSource.naturalHeight * baseScale * cropImageScale;
    const image = $('#cropImage');
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.left = `calc(50% + ${cropOffsetX}px)`;
    image.style.top = `calc(50% + ${cropOffsetY}px)`;
}

function startCropDrag(event) {
    if (!cropSource || event.target !== $('#cropImage')) return;
    event.preventDefault();
    $('#cropPreview').setPointerCapture?.(event.pointerId);
    dragStart = { x: event.clientX, y: event.clientY, offsetX: cropOffsetX, offsetY: cropOffsetY };
}

function moveCropPhoto(event) {
    if (!dragStart) return;
    cropOffsetX = dragStart.offsetX + event.clientX - dragStart.x;
    cropOffsetY = dragStart.offsetY + event.clientY - dragStart.y;
    renderCropImage();
}

function getCroppedAvatar() {
    if (!cropSource) return userSession.avatar;
    const size = 300;
    const previewSize = $('#cropPreview').clientWidth;
    const baseScale = Math.max(previewSize / cropSource.naturalWidth, previewSize / cropSource.naturalHeight);
    const displayedWidth = cropSource.naturalWidth * baseScale * cropImageScale;
    const displayedHeight = cropSource.naturalHeight * baseScale * cropImageScale;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    const ratio = size / previewSize;
    context.drawImage(cropSource, (previewSize / 2 + cropOffsetX - displayedWidth / 2) * ratio, (previewSize / 2 + cropOffsetY - displayedHeight / 2) * ratio, displayedWidth * ratio, displayedHeight * ratio);
    return canvas.toDataURL('image/jpeg', 0.88);
}

function saveProfileChanges() {
    const username = $('#profileUsernameInput').value.trim();
    if (username) userSession.username = username;
    if (cropSource) userSession.avatar = getCroppedAvatar();
    saveState();
    closeAllPanels();
    renderDetailPage();
}

function openAccountInfo() {
    const created = new Date(userSession.createdAt || Date.now());
    $('#accountCreatedAt').textContent = created.toLocaleString(currentLanguage);
    $('#accountVisits').textContent = String(userSession.visitCount || 1);
    showPanel('#accountInfoPanel');
}

function logOut() {
    userSession = null;
    sessionStorage.removeItem('verificationCode');
    sessionStorage.removeItem('verificationEmail');
    saveState();
    closeAllPanels();
    renderDetailPage();
}

function restoreDetailPage() {
    mainContainer.classList.add('hidden');
    detailContainer.classList.add('show');
    detailTitle.textContent = getPageTitle(currentPageId, currentLanguage);
    backButton.classList.add('show');
    languageSection.classList.add('hidden');
    renderDetailPage();
}

function goBackToMain() {
    mainContainer.classList.remove('hidden');
    detailContainer.classList.remove('show');
    backButton.classList.remove('show');
    languageSection.classList.remove('hidden');
    businessSubmenu.classList.remove('active');
    userSubmenu.classList.remove('active');
    currentPage = 'main';
    currentPageId = null;
    saveState();
}

function goToDonations() { goToDetailPage(translations[currentLanguage].donations, 'donations'); }
function saveState() { localStorage.setItem('appState', JSON.stringify({ language: currentLanguage, page: currentPage, pageId: currentPageId, userSession })); }

function loadSavedState() {
    try {
        const saved = JSON.parse(localStorage.getItem('appState'));
        if (saved) {
            currentLanguage = translations[saved.language] ? saved.language : 'en';
            currentPage = saved.page || 'main';
            currentPageId = saved.pageId || null;
            userSession = saved.userSession || null;
        }
    } catch (error) { console.warn('Could not restore saved state.', error); }
}

function escapeHtml(value) {
    const element = document.createElement('span');
    element.textContent = value;
    return element.innerHTML;
}
