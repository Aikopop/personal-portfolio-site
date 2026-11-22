// Language translations
const translations = {
    en: {
        welcome: 'Welcome', whatDo: 'What do you want to see?', business: 'Business', user: 'User',
        aboutMe: 'About Me', portfolio: 'Portfolio', socials: 'Socials', merch: 'Merch', projects: 'Projects',
        selectLanguage: 'Select your language', language: 'Language', confirm: 'Confirm', donations: 'Donations',
        donate: 'Donate!', email: 'Email', emailPlaceholder: 'Enter your email', notificationsText: 'I want to receive notifications about updates, news and discounts',
        login: 'Login', enterVerificationCode: 'Enter verification code', verificationTenSeconds: 'You have 10 seconds to view the code',
        incorrectCode: 'Incorrect code', successMessage: 'Welcome! You can personalize your profile, comment on products or projects, and access purchases or commissions!',
        myPurchases: 'My Purchases', notificationsTitle: 'Notifications', purchases: 'Purchases',
        personalizeProfile: 'Personalize Profile', photoProfile: 'Profile Photo', username: 'Username', newUsername: 'New username',
        codeNotice: 'This is your code'
    },
    ja: {
        welcome: 'ようこそ', whatDo: '何を見たいですか？', business: 'ビジネス', user: 'ユーザー',
        aboutMe: '私について', portfolio: 'ポートフォリオ', socials: 'ソーシャル', merch: 'グッズ', projects: 'プロジェクト',
        selectLanguage: 'あなたの言語を選択してください', language: '言語', confirm: '確認', donations: '寄付',
        donate: '寄付する！', email: 'メール', emailPlaceholder: 'メールアドレスを入力してください', notificationsText: '更新、ニュース、割引に関する通知を受け取りたいです',
        login: 'ログイン', enterVerificationCode: '検証コードを入力してください', verificationTenSeconds: 'コードを確認できる時間は10秒です',
        incorrectCode: 'コードが正しくありません', successMessage: 'ようこそ！プロフィールをカスタマイズし、製品やプロジェクトについてコメントし、購入や依頼にアクセスできます！',
        myPurchases: '私の購入', notificationsTitle: '通知', purchases: '購入',
        personalizeProfile: 'プロフィールをカスタマイズ', photoProfile: 'プロフィール写真', username: 'ユーザー名', newUsername: '新しいユーザー名',
        codeNotice: 'こちらがあなたのコードです'
    },
    de: {
        welcome: 'Willkommen', whatDo: 'Was möchtest du sehen?', business: 'Geschäft', user: 'Benutzer',
        aboutMe: 'Über Mich', portfolio: 'Portfolio', socials: 'Soziale Medien', merch: 'Merchandise', projects: 'Projekte',
        selectLanguage: 'Wählen Sie Ihre Sprache', language: 'Sprache', confirm: 'Bestätigen', donations: 'Spenden',
        donate: 'Spenden!', email: 'E-Mail', emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein', notificationsText: 'Ich möchte Benachrichtigungen über Updates, Nachrichten und Rabatte erhalten',
        login: 'Anmelden', enterVerificationCode: 'Verificationscode eingeben', verificationTenSeconds: 'Sie haben 10 Sekunden Zeit, den Code anzusehen',
        incorrectCode: 'Code ist falsch', successMessage: 'Willkommen! Personalisiere dein Profil und greife auf Käufe oder Aufträge zu!',
        myPurchases: 'Meine Käufe', notificationsTitle: 'Benachrichtigungen', purchases: 'Käufe',
        personalizeProfile: 'Profil personalisieren', photoProfile: 'Profilfoto', username: 'Benutzername', newUsername: 'Neuer Benutzername',
        codeNotice: 'Dies ist dein Code'
    },
    es: {
        welcome: 'Bienvenido', whatDo: '¿Qué quieres ver?', business: 'Negocios', user: 'Usuario',
        aboutMe: 'Sobre Mí', portfolio: 'Portafolio', socials: 'Redes Sociales', merch: 'Mercancía', projects: 'Proyectos',
        selectLanguage: 'Selecciona tu idioma', language: 'Idioma', confirm: 'Confirmar', donations: 'Donaciones',
        donate: '¡Donar!', email: 'Correo', emailPlaceholder: 'Ingresa tu correo', notificationsText: 'Quiero recibir notificaciones sobre actualizaciones, noticias y descuentos',
        login: 'Iniciar sesión', enterVerificationCode: 'Ingresa el código de verificación', verificationTenSeconds: 'Tienes 10 segundos para ver el código',
        incorrectCode: 'Código incorrecto', successMessage: '¡Bienvenido! Puedes personalizar tu perfil, comentar sobre productos o proyectos y acceder a compras o comisiones.',
        myPurchases: 'Mis compras', notificationsTitle: 'Notificaciones', purchases: 'Compras',
        personalizeProfile: 'Personalizar perfil', photoProfile: 'Foto de perfil', username: 'Nombre de usuario', newUsername: 'Nuevo nombre',
        codeNotice: 'Este es tu código'
    }
};

let currentLanguage = 'en';
let selectedLanguage = 'en';
let currentPage = 'main';
let currentPageId = null;
let userSession = null;
let nextUserId = 1;
let codeNoticeTimeout = null;

const languageLabel = document.querySelector('.language-label');
const languageSection = document.getElementById('languageSection');
const languagePanel = document.getElementById('languagePanel');
const verificationPanel = document.getElementById('verificationPanel');
const successPanel = document.getElementById('successPanel');
const profileEditPanel = document.getElementById('profileEditPanel');
const overlay = document.getElementById('overlay');
const confirmButton = document.getElementById('confirmButton');
const languageOptions = document.querySelectorAll('.language-option');
const businessSubmenu = document.getElementById('business-submenu');
const userSubmenu = document.getElementById('user-submenu');
const navButtons = document.querySelectorAll('.nav-button');
const subButtons = document.querySelectorAll('.sub-button');
const mainContainer = document.getElementById('mainContainer');
const detailContainer = document.getElementById('detailContainer');
const detailTitle = document.getElementById('detailTitle');
const backButton = document.getElementById('backButton');
const donateButton = document.getElementById('donateButton');
const donateLabel = document.getElementById('donateLabel');
const whiteBox = document.getElementById('whiteBox');
const notificationsDrawer = document.getElementById('notificationsDrawer');

initialize();

function initialize() {
    loadSavedState();
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
    document.getElementById('drawerCloseBtn').addEventListener('click', () => notificationsDrawer.classList.remove('open'));
}

function openLanguagePanel() { languagePanel.classList.add('active'); overlay.classList.add('active'); }
function closeAllPanels() {
    [languagePanel, verificationPanel, successPanel, profileEditPanel].forEach(panel => panel.classList.remove('active'));
    overlay.classList.remove('active');
}

function selectLanguageOption(event) {
    languageOptions.forEach(option => option.classList.remove('selected'));
    event.target.classList.add('selected');
    selectedLanguage = event.target.dataset.lang;
    confirmButton.classList.add('active');
}

function confirmLanguage() {
    if (selectedLanguage !== currentLanguage) {
        currentLanguage = selectedLanguage;
        updatePageText(currentLanguage);
        saveState();
    }
    closeAllPanels();
}

function updatePageText(lang) {
    const t = translations[lang];
    document.querySelector('.main-title').textContent = t.welcome;
    document.querySelector('.subtitle').textContent = t.whatDo;
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

    if (currentPage === 'detail' && currentPageId) {
        detailTitle.textContent = getPageTitle(currentPageId, lang);
        renderDetailPage();
    }
}

function setDefaultLanguageOption() {
    languageOptions.forEach(option => {
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('selected');
            selectedLanguage = currentLanguage;
        }
    });
}

function handleNavButtonClick(event) {
    businessSubmenu.classList.remove('active');
    userSubmenu.classList.remove('active');
    if (event.target.dataset.section === 'business') businessSubmenu.classList.add('active');
    if (event.target.dataset.section === 'user') userSubmenu.classList.add('active');
}

function handleSubButtonClick(event) {
    const pageId = event.target.dataset.page;
    goToDetailPage(getPageTitle(pageId, currentLanguage), pageId);
}

function getPageTitle(pageId, lang) {
    const t = translations[lang];
    return {
        'about-me-business': t.aboutMe, portfolio: t.portfolio, 'about-me-user': t.aboutMe,
        socials: t.socials, merch: t.merch, projects: t.projects,
        donations: t.donations, 'my-purchases': t.myPurchases
    }[pageId] || pageId;
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
    const t = translations[currentLanguage];
    whiteBox.innerHTML = '';

    if (!userSession) {
        whiteBox.innerHTML = `
            <div class="form-group"><label>${t.email}</label><input type="email" id="emailInput" placeholder="${t.emailPlaceholder}"></div>
            <div class="notification-group"><input type="checkbox" id="notificationCheckbox"><label for="notificationCheckbox">${t.notificationsText}</label></div>
            <button class="login-button" id="loginBtn">${t.login}</button>`;
        document.getElementById('loginBtn').addEventListener('click', handleLogin);
    } else {
        whiteBox.innerHTML = `
            <div class="user-profile">
                <div class="profile-avatar" id="profileAvatar">${userSession.avatar ? `<img src="${userSession.avatar}" alt="Profile">` : 'No Image'}</div>
                <div class="profile-name">${escapeHtml(userSession.username)}</div>
                <div class="profile-buttons">
                    <button class="profile-button" id="purchasesBtn">${t.purchases}</button>
                    <button class="profile-button" id="notificationsBtn">${t.notificationsTitle}</button>
                    <button class="profile-button" id="personalizeBtn">${t.personalizeProfile}</button>
                </div>
            </div>`;
        document.getElementById('purchasesBtn').addEventListener('click', () => goToDetailPage(t.myPurchases, 'my-purchases'));
        document.getElementById('notificationsBtn').addEventListener('click', openNotificationsDrawer);
        document.getElementById('personalizeBtn').addEventListener('click', openProfileEdit);
    }
}

function handleLogin() {
    const email = document.getElementById('emailInput').value;
    if (!email) return;
    const code = generateUniqueCode();
    sessionStorage.setItem('verificationCode', code);
    sessionStorage.setItem('verificationEmail', email);
    showVerificationPanel();
}

function generateUniqueCode() {
    let code;
    let previousCode = sessionStorage.getItem('verificationCode');
    do {
        code = String(Math.floor(100000 + Math.random() * 900000));
    } while (code === previousCode);
    return code;
}

function showVerificationPanel() {
    const t = translations[currentLanguage];
    document.getElementById('verificationTitle').textContent = t.enterVerificationCode;
    document.getElementById('verificationSubtitle').textContent = t.verificationTenSeconds;
    document.getElementById('verificationError').classList.remove('show');

    const codeInputs = document.querySelectorAll('.code-digit');
    codeInputs.forEach((input, index) => {
        input.value = '';
        input.oninput = event => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '').slice(-1);
            if (event.target.value && index < codeInputs.length - 1) codeInputs[index + 1].focus();
            checkVerificationCode();
        };
        input.onkeydown = event => {
            if (event.key === 'Backspace' && !input.value && index > 0) codeInputs[index - 1].focus();
        };
    });

    verificationPanel.classList.add('active');
    overlay.classList.add('active');
    showCodeNotice(sessionStorage.getItem('verificationCode'));
    codeInputs[0].focus();
}

function showCodeNotice(code) {
    const t = translations[currentLanguage];
    const oldNotice = document.getElementById('codeNotice');
    if (oldNotice) oldNotice.remove();
    if (codeNoticeTimeout) clearTimeout(codeNoticeTimeout);

    const notice = document.createElement('div');
    notice.id = 'codeNotice';
    notice.className = 'code-notice';
    notice.innerHTML = `<div class="code-notice-label">${t.codeNotice}</div><div class="code-notice-value">${code}</div>`;
    document.body.appendChild(notice);

    codeNoticeTimeout = setTimeout(() => {
        notice.classList.add('hide');
        setTimeout(() => notice.remove(), 500);
    }, 10000);
}

function checkVerificationCode() {
    const codeInputs = document.querySelectorAll('.code-digit');
    const enteredCode = Array.from(codeInputs).map(input => input.value).join('');
    if (enteredCode.length !== 6) return;

    if (enteredCode === sessionStorage.getItem('verificationCode')) {
        createUserSession();
    } else {
        const error = document.getElementById('verificationError');
        error.textContent = translations[currentLanguage].incorrectCode;
        error.classList.add('show');
    }
}

function createUserSession() {
    const email = sessionStorage.getItem('verificationEmail');
    const checkbox = document.getElementById('notificationCheckbox');
    userSession = {
        userId: nextUserId++, email, username: `Usuario${nextUserId - 1}`,
        avatar: null, wantNotifications: checkbox ? checkbox.checked : false
    };
    showSuccessPanel();
}

function showSuccessPanel() {
    const t = translations[currentLanguage];
    document.getElementById('successMessage').textContent = t.successMessage;
    verificationPanel.classList.remove('active');
    successPanel.classList.add('active');
    document.getElementById('successConfirmBtn').onclick = () => {
        successPanel.classList.remove('active');
        overlay.classList.remove('active');
        const notice = document.getElementById('codeNotice');
        if (notice) notice.remove();
        saveState();
        renderDetailPage();
    };
}

function openNotificationsDrawer() {
    document.getElementById('drawerTitle').textContent = translations[currentLanguage].notificationsTitle;
    document.getElementById('drawerContent').innerHTML = '<div class="notification-item">New product launch!</div><div class="notification-item">Special discount 20%</div><div class="notification-item">Project update available</div>';
    notificationsDrawer.classList.add('open');
}

function openProfileEdit() {
    const t = translations[currentLanguage];
    document.getElementById('profileEditTitle').textContent = t.personalizeProfile;
    document.getElementById('photoLabel').textContent = t.photoProfile;
    document.getElementById('usernameLabel').textContent = t.username;
    document.getElementById('profileUsernameInput').value = userSession.username;
    profileEditPanel.classList.add('active');
    overlay.classList.add('active');

    document.getElementById('profileConfirmBtn').onclick = () => {
        const newUsername = document.getElementById('profileUsernameInput').value;
        if (newUsername) userSession.username = newUsername;
        const fileInput = document.getElementById('profilePhotoInput');
        if (fileInput.files.length > 0) {
            const reader = new FileReader();
            reader.onload = event => {
                userSession.avatar = event.target.result;
                finishProfileEdit();
            };
            reader.readAsDataURL(fileInput.files[0]);
        } else finishProfileEdit();
    };
}

function finishProfileEdit() {
    saveState();
    profileEditPanel.classList.remove('active');
    overlay.classList.remove('active');
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

function saveState() {
    localStorage.setItem('appState', JSON.stringify({ language: currentLanguage, page: currentPage, pageId: currentPageId, userSession }));
}

function loadSavedState() {
    try {
        const saved = JSON.parse(localStorage.getItem('appState'));
        if (saved) {
            currentLanguage = saved.language || 'en';
            currentPage = saved.page || 'main';
            currentPageId = saved.pageId || null;
            userSession = saved.userSession || null;
        }
    } catch (error) {
        console.warn('Could not restore saved state.', error);
    }
}

function escapeHtml(value) {
    const element = document.createElement('span');
    element.textContent = value;
    return element.innerHTML;
}
