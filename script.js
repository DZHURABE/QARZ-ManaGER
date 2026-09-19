const navButtons = document.querySelectorAll('.nav-btn');
const screens = document.querySelectorAll('.screen');
const addButton = document.querySelector('[data-go="add"]');
const debtorTableBody = document.getElementById('debtor-table-body');
const debtorForm = document.getElementById('debtor-form');
const debtorsCount = document.getElementById('debtors-count');
const searchToggleBtn = document.getElementById('searchToggleBtn');
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');
const smsPackageSummary = document.getElementById('smsPackageSummary');
const smsPackageButtons = document.querySelectorAll('.buy-package-btn');
const paymentModal = document.getElementById('paymentModal');
const closePayment = document.getElementById('closePayment');
const directPaymentForm = document.getElementById('directPaymentForm');
const payerPhone = document.getElementById('payerPhone');
const payerCard = document.getElementById('payerCard');
const paymentStatus = document.getElementById('paymentStatus');
const verifyIdentity = document.getElementById('verifyIdentity');
const verificationStatus = document.getElementById('verificationStatus');
const verifiedClient = document.getElementById('verifiedClient');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const fatherName = document.getElementById('fatherName');
const birthDate = document.getElementById('birthDate');
const verifiedClientName = document.getElementById('verifiedClientName');
const verifiedClientBirthDate = document.getElementById('verifiedClientBirthDate');
const appQrCode = document.getElementById('appQrCode');
const walletBalance = document.getElementById('walletBalance');
const openWithdraw = document.getElementById('openWithdraw');
const withdrawModal = document.getElementById('withdrawModal');
const closeWithdraw = document.getElementById('closeWithdraw');
const withdrawForm = document.getElementById('withdrawForm');
const withdrawCard = document.getElementById('withdrawCard');
const withdrawAmount = document.getElementById('withdrawAmount');
const withdrawStatus = document.getElementById('withdrawStatus');

let availableBalance = 540000;

const translations = {
  uz: {
    brandName: 'QARZ ManaGER',
    brandSub: 'Shaxsiy kabin',
    search: 'Qidiruv',
    notify: 'Bildirishnoma',
    totalDebt: 'Umumiy qarz',
    totalDebtTrend: '+12% oy bo\'yicha',
    paid: 'To\'langan',
    thisMonth: 'Bu oy',
    debtors: 'Qarzdorlar',
    newDebt: '12 ta yangi',
    activeClients: 'Faol mijozlar',
    goodRate: 'Ko\'rsatkich yaxshi',
    allData: 'Barcha ma\'lumotlar',
    debtListTitle: 'Qarzdorlar ro\'yxati',
    addDebtorBtn: '+ Qarzdor qo\'shish',
    fullName: 'F.I.Sh',
    phone: 'Telefon',
    debtAmount: 'Qarz miqdori',
    status: 'Status',
    lastPayment: 'Oxirgi to\'lov',
    action: 'Harakat',
    newClient: 'Yangi mijoz',
    addDebtorTitle: 'Qarzdor qo\'shish',
    namePlaceholder: 'Ism kiriting',
    phonePlaceholder: '+998 90 123 45 67',
    amountPlaceholder: '500000',
    save: 'Saqlash',
    journal: 'Jurnal',
    historyTitle: 'Tarix',
    paymentReceived: 'To\'lov qabul qilindi',
    reminderSent: 'Eslatma yuborildi',
    overdueMarked: 'Muddat o\'tgan',
    account: 'Akkaunt',
    edit: 'Tahrirlash',
    general: 'Umumiy',
    smsPackage: 'SMS paketi',
    identification: 'Identifikatsiya',
    verified: 'Tasdiqlandi',
    notVerified: 'Tasdiqlanmagan', passportData: 'Pasport ma\'lumotlari', verify: 'Tasdiqlash', identityHint: 'Barcha ma\'lumotlarni to\'ldiring', identitySuccess: 'Tasdiqlandi', identityError: 'Ma\'lumotlarni to\'g\'ri kiriting', clientName: 'Mijoz ismi', firstName: 'Ism', lastName: 'Familiya', fatherName: 'Otasining ismi', birthDate: 'Tug\'ilgan sana',
    settings: 'Sozlamalar',
    shop: 'Do\'kon',
    enabled: 'Yoqilgan',
    security: 'Xavfsizlik',
    language: 'Tillar',
    theme: 'Ko\'rinish',
    light: 'Yorqin',
    help: 'Yordam',
    rateApp: 'Ilovani baholang',
    faq: 'Tez-tez beriladigan savollar',
    terms: 'Foydalanish shartlari',
    socials: 'Ijtimoiy tarmoqlar',
    navHome: 'Bosh sahifa',
    navAdd: 'Қўшилок',
    navHistory: 'Tarix',
    navProfile: 'Profil',
    statusActive: 'Faol',
    statusWait: 'Kutilmoqda',
    statusLate: 'Muddat o\'tgan',
    view: 'Ko\'rish',
    paymentStep: 'To\'lov',
    buySmsTitle: '50 SMS sotib oling',
    paymentInstruction: 'Pulni Dushanbe City kartasiga o\'tkazing va to\'lov skrinshotini yuboring.',
    dushanbeCityCard: 'Dushanbe City kartasi',
    cardPlaceholder: 'Kartangiz raqamini index.html ichida almashtiring',
    sendTelegram: 'Telegram orqali yuborish',
    uploadProof: 'To\'lov skrinshotini tanlang',
    noFile: 'Fayl tanlanmagan',
    activateSms: 'Skrinshotni yuborish va faollashtirish',
    activated: 'SMS paketi faollashtirildi.',
    payerPhone: 'Telefon raqamingiz', payerCard: 'Karta raqamingiz', payNow: 'Hozir to\'lash', walletBalance: 'Hamyondagi pul', walletAvailable: 'Kartaga chiqarish uchun mavjud', withdraw: 'Kartaga chiqarish', withdrawStep: 'Pulni chiqarish', withdrawTitle: 'Pulni kartaga o\'tkazish', withdrawNote: 'Karta raqami va chiqariladigan summani kiriting.', withdrawCard: 'Qabul qiluvchi karta raqami', withdrawAmount: 'Summa', withdrawConfirm: 'Chiqarishni tasdiqlash', shareApp: 'Ilovani bo\'lishish', scanQr: 'QR-kodni boshqa telefonda skaner qiling', qrLocalNote: 'Veb-sayt manzili berilganda QR orqali ochiladi.'
  },
  ru: {
    brandName: 'QARZ ManaGER',
    brandSub: 'Личный кабинет',
    search: 'Поиск',
    notify: 'Уведомления',
    totalDebt: 'Общий долг',
    totalDebtTrend: '+12% за месяц',
    paid: 'Оплачено',
    thisMonth: 'В этом месяце',
    debtors: 'Должники',
    newDebt: '12 новых',
    activeClients: 'Активные клиенты',
    goodRate: 'Показатель хороший',
    allData: 'Все данные',
    debtListTitle: 'Список должников',
    addDebtorBtn: '+ Добавить должника',
    fullName: 'Ф.И.О',
    phone: 'Телефон',
    debtAmount: 'Сумма долга',
    status: 'Статус',
    lastPayment: 'Последний платёж',
    action: 'Действие',
    newClient: 'Новый клиент',
    addDebtorTitle: 'Добавить должника',
    namePlaceholder: 'Введите имя',
    phonePlaceholder: '+998 90 123 45 67',
    amountPlaceholder: '500000',
    save: 'Сохранить',
    journal: 'Журнал',
    historyTitle: 'История',
    paymentReceived: 'Оплата получена',
    reminderSent: 'Напоминание отправлено',
    overdueMarked: 'Просрочка',
    account: 'Аккаунт',
    edit: 'Редактировать',
    general: 'Общие',
    smsPackage: 'Пакет SMS',
    identification: 'Идентификация',
    verified: 'Подтверждено',
    notVerified: 'Не подтверждено', passportData: 'Паспортные данные', verify: 'Подтвердить', identityHint: 'Заполните все данные', identitySuccess: 'Подтверждено', identityError: 'Заполните данные правильно', clientName: 'Имя клиента', firstName: 'Имя', lastName: 'Фамилия', fatherName: 'Отчество', birthDate: 'Дата рождения',
    settings: 'Настройки',
    shop: 'Магазин',
    enabled: 'Включен',
    security: 'Безопасность',
    language: 'Язык',
    theme: 'Оформление',
    light: 'Светлый',
    help: 'Помощь',
    rateApp: 'Оценить приложение',
    faq: 'Часто задаваемые вопросы',
    terms: 'Условия использования',
    socials: 'Мы в соцсетях',
    navHome: 'Главная',
    navAdd: 'Добавить',
    navHistory: 'История',
    navProfile: 'Профиль',
    statusActive: 'Активен',
    statusWait: 'Ожидает',
    statusLate: 'Просрочка',
    view: 'Просмотр',
    paymentStep: 'Оплата',
    buySmsTitle: 'Купить 50 SMS',
    paymentInstruction: 'Переведите деньги на карту Душанбе Сити и отправьте скриншот оплаты.',
    dushanbeCityCard: 'Карта Душанбе Сити',
    cardPlaceholder: 'Замените номер карты в index.html',
    sendTelegram: 'Отправить через Telegram',
    uploadProof: 'Выберите скриншот оплаты',
    noFile: 'Файл не выбран',
    activateSms: 'Отправить скриншот и активировать',
    activated: 'SMS-пакет активирован.',
    payerPhone: 'Ваш номер телефона', payerCard: 'Номер вашей карты', payNow: 'Оплатить сейчас', walletBalance: 'Деньги в кошельке', walletAvailable: 'Доступно для вывода на карту', withdraw: 'Вывести на карту', withdrawStep: 'Вывод денег', withdrawTitle: 'Перевести деньги на карту', withdrawNote: 'Введите номер карты и сумму вывода.', withdrawCard: 'Номер карты получателя', withdrawAmount: 'Сумма', withdrawConfirm: 'Подтвердить вывод', shareApp: 'Поделиться приложением', scanQr: 'Сканируйте QR-код другим телефоном', qrLocalNote: 'QR откроет приложение после публикации веб-адреса.'
  },
  tg: {
    brandName: 'QARZ ManaGER',
    brandSub: 'Кабинети шахсӣ',
    search: 'Ҷустуҷӯ',
    notify: 'Огоҳӣ',
    totalDebt: 'Умумиҳои қарз',
    totalDebtTrend: '+12% дар моҳи гузашта',
    paid: 'Пардохта',
    thisMonth: 'Ин моҳ',
    debtors: 'Қарздорон',
    newDebt: '12 нав',
    activeClients: 'Мизоҷони фаъол',
    goodRate: 'Нишондиҳанда хуб аст',
    allData: 'Ҳама маълумот',
    debtListTitle: 'Рӯйхати қарздорон',
    addDebtorBtn: '+ Иловаи қарздор',
    fullName: 'Ном',
    phone: 'Телефон',
    debtAmount: 'Маблағи қарз',
    status: 'Ҳолат',
    lastPayment: 'Пардохти охирин',
    action: 'Амал',
    newClient: 'Мизоҷи нав',
    addDebtorTitle: 'Иловаи қарздор',
    namePlaceholder: 'Номро ворид кунед',
    phonePlaceholder: '+998 90 123 45 67',
    amountPlaceholder: '500000',
    save: 'Захира кардан',
    journal: 'Журнал',
    historyTitle: 'Таърих',
    paymentReceived: 'Пардохт қабул карда шуд',
    reminderSent: 'Ёддошт фиристода шуд',
    overdueMarked: 'Муддати гузашта',
    account: 'Аккаунт',
    edit: 'Таҳрир',
    general: 'Умумӣ',
    smsPackage: 'Пакети SMS',
    identification: 'Шиноснома',
    verified: 'Тасдиқ карда шуд',
    notVerified: 'Тасдиқ нашудааст', passportData: 'Маълумоти шиноснома', verify: 'Тасдиқ кардан', identityHint: 'Ҳама маълумотро пур кунед', identitySuccess: 'Тасдиқ карда шуд', identityError: 'Маълумотро дуруст пур кунед', clientName: 'Номи мизоҷ', firstName: 'Ном', lastName: 'Насаб', fatherName: 'Номи падар', birthDate: 'Санаи таваллуд',
    settings: 'Танзимот',
    shop: 'Дӯкон',
    enabled: 'Фаъол',
    security: 'Амният',
    language: 'Забон',
    theme: 'Оформление',
    light: 'Равшан',
    help: 'Кӯмак',
    rateApp: 'Ба барнома баҳо диҳед',
    faq: 'Саволҳои зуд-зуд',
    terms: 'Шартҳои истифода',
    socials: 'Дар шабакаҳои иҷтимоӣ',
    navHome: 'Асосӣ',
    navAdd: 'Кошилок',
    navHistory: 'Таърих',
    navProfile: 'Профил',
    statusActive: 'Фаъол',
    statusWait: 'Интизор',
    statusLate: 'Муддати гузашта',
    view: 'Дидан',
    paymentStep: 'Пардохт',
    buySmsTitle: '50 SMS харид кунед',
    paymentInstruction: 'Пулро ба корти Душанбе Сити гузаронед ва расиди пардохтро фиристед.',
    dushanbeCityCard: 'Корти Душанбе Сити',
    cardPlaceholder: 'Рақами корти худро дар index.html иваз кунед',
    sendTelegram: 'Ба Telegram фиристодан',
    uploadProof: 'Расиди пардохтро интихоб кунед',
    noFile: 'Файл интихоб нашудааст',
    activateSms: 'Фиристодани расид ва фаъол кардан',
    activated: 'Пакети SMS фаъол карда шуд.',
    payerPhone: 'Рақами телефони шумо', payerCard: 'Рақами корти шумо', payNow: 'Ҳозир пардохт кардан', walletBalance: 'Пул дар ҳамён', walletAvailable: 'Барои гузаронидан ба корт дастрас', withdraw: 'Ба корт гузаронидан', withdrawStep: 'Гирифтани пул', withdrawTitle: 'Пулро ба корт гузаронед', withdrawNote: 'Рақами корт ва маблағи гирифтанро ворид кунед.', withdrawCard: 'Рақами корти қабулкунанда', withdrawAmount: 'Маблағ', withdrawConfirm: 'Тасдиқи гирифтани пул', shareApp: 'Мубодилаи барнома', scanQr: 'QR-кодро бо телефони дигар скан кунед', qrLocalNote: 'Пас аз нашри суроғаи веб, QR барномаро мекушояд.'
  }
};

let currentLang = 'tg';

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(node => {
    const key = node.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(node => {
    const key = node.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      node.setAttribute('placeholder', translations[lang][key]);
    }
  });

  const statusSelect = document.getElementById('status');
  if (statusSelect) {
    const labels = {
      uz: { faol: 'Faol', wait: 'Kutilmoqda', late: 'Muddat o\'tgan' },
      ru: { faol: 'Активен', wait: 'Ожидает', late: 'Просрочка' },
      tg: { faol: 'Фаъол', wait: 'Интизор', late: 'Муддати гузашта' }
    };

    const options = statusSelect.querySelectorAll('option');
    options.forEach(option => {
      const value = option.value;
      option.textContent = labels[lang][value] || option.textContent;
    });
  }
}

function updateQrCode() {
  if (!appQrCode) return;

  const qrData = window.location.protocol === 'file:'
    ? 'DAFTAR | Tajikistan | Local preview'
    : window.location.href;
  appQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(qrData)}`;
}

function showScreen(name) {
  screens.forEach(screen => {
    screen.classList.toggle('active', screen.dataset.screen === name);
  });

  navButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.target === name);
  });
}

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    showScreen(button.dataset.target);
  });
});

if (addButton) {
  addButton.addEventListener('click', () => showScreen('add'));
}

debtorForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const statusKey = document.getElementById('status').value;
  const lastPayment = document.getElementById('last-payment').value;

  if (!name || !phone || !amount) {
    alert(currentLang === 'ru' ? 'Пожалуйста, заполните все поля.' : currentLang === 'tg' ? 'Лутфан, ҳама майдонҳоро пур кунед.' : 'Iltimos, barcha maydonlarni to\'ldiring.');
    return;
  }

  const statusMap = {
    uz: { faol: 'Faol', wait: 'Kutilmoqda', late: 'Muddat o\'tgan' },
    ru: { faol: 'Активен', wait: 'Ожидает', late: 'Просрочка' },
    tg: { faol: 'Фаъол', wait: 'Интизор', late: 'Муддати гузашта' }
  };

  const newRow = document.createElement('tr');
  const statusName = statusMap[currentLang][statusKey] || statusKey;
  const statusClass = statusKey === 'faol' ? 'active' : statusKey === 'wait' ? 'warning' : 'critical';

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
    <td>${Number(amount).toLocaleString()} сум</td>
    <td><span class="status ${statusClass}">${statusName}</span></td>
    <td>${lastPayment || '—'}</td>
    <td><button class="mini-btn">${translations[currentLang].view}</button></td>
  `;

  debtorTableBody.prepend(newRow);

  const currentCount = Number(debtorsCount.textContent.trim());
  debtorsCount.textContent = String(currentCount + 1);

  debtorForm.reset();
  showScreen('home');
});

const languageButtons = document.querySelectorAll('.lang');
languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    languageButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    applyLanguage(button.dataset.lang);
  });
});

searchToggleBtn?.addEventListener('click', () => {
  searchPanel.classList.toggle('hidden');
  if (!searchPanel.classList.contains('hidden')) {
    searchInput.focus();
  }
});

searchInput?.addEventListener('input', (event) => {
  const query = event.target.value.trim().toLowerCase();
  const rows = debtorTableBody.querySelectorAll('tr');

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
});

smsPackageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const offer = button.closest('.sms-offer');
    if (!offer) return;

    const packageName = offer.dataset.package === '50sms' ? '50 SMS' : 'SMS';
    const price = offer.dataset.price || '12';
    const days = offer.dataset.days || '60';
    const summary = `${packageName} • ${price} сомон • ${days} кун`;

    smsPackageSummary.textContent = summary;
    document.querySelectorAll('.sms-offer').forEach(card => {
      card.classList.toggle('active', card === offer);
    });

    paymentStatus.textContent = '';
    paymentStatus.className = 'payment-status';
    directPaymentForm.reset();
    paymentModal.classList.remove('hidden');
  });
});

closePayment?.addEventListener('click', () => paymentModal.classList.add('hidden'));

paymentModal?.addEventListener('click', event => {
  if (event.target === paymentModal) paymentModal.classList.add('hidden');
});

directPaymentForm?.addEventListener('submit', event => {
  event.preventDefault();

  if (!payerPhone.value.trim() || !payerCard.value.trim()) return;

  smsPackageSummary.textContent = currentLang === 'ru'
    ? '50 SMS • Активен • 60 дней'
    : currentLang === 'tg'
      ? '50 SMS • Фаъол • 60 рӯз'
      : '50 SMS • Faol • 60 kun';
  paymentStatus.textContent = translations[currentLang].activated;
  paymentStatus.className = 'payment-status success-message';
});

function formatBalance(amount) {
  return `${amount.toLocaleString()} ${currentLang === 'ru' ? 'сомони' : currentLang === 'tg' ? 'сомонӣ' : 'so\'m'}`;
}

openWithdraw?.addEventListener('click', () => {
  withdrawStatus.textContent = '';
  withdrawStatus.className = 'payment-status';
  withdrawForm.reset();
  withdrawModal.classList.remove('hidden');
});

closeWithdraw?.addEventListener('click', () => withdrawModal.classList.add('hidden'));

withdrawModal?.addEventListener('click', event => {
  if (event.target === withdrawModal) withdrawModal.classList.add('hidden');
});

withdrawForm?.addEventListener('submit', event => {
  event.preventDefault();

  const card = withdrawCard.value.replace(/\D/g, '');
  const amount = Number(withdrawAmount.value);
  const cardIsValid = card.length >= 16 && card.length <= 19;

  if (!cardIsValid || !Number.isFinite(amount) || amount <= 0 || amount > availableBalance) {
    withdrawStatus.textContent = currentLang === 'ru'
      ? 'Проверьте карту и сумму: она не может быть больше баланса.'
      : currentLang === 'tg'
        ? 'Корт ва маблағро санҷед: маблағ аз бақия зиёд шуда наметавонад.'
        : 'Karta va summani tekshiring: summa balansdan oshmasligi kerak.';
    withdrawStatus.className = 'payment-status error-message';
    return;
  }

  availableBalance -= amount;
  walletBalance.textContent = formatBalance(availableBalance);
  withdrawStatus.textContent = currentLang === 'ru'
    ? 'Заявка на вывод создана.'
    : currentLang === 'tg'
      ? 'Дархости гузаронидани пул сохта шуд.'
      : 'Pul chiqarish so\'rovi yaratildi.';
  withdrawStatus.className = 'payment-status success-message';
});

verifyIdentity?.addEventListener('click', () => {
  const isValid = firstName.value.trim() && lastName.value.trim() && fatherName.value.trim() && birthDate.value;

  verificationStatus.classList.remove('is-verified', 'is-error');
  if (isValid) {
    verificationStatus.textContent = translations[currentLang].identitySuccess;
    verificationStatus.classList.add('is-verified');
    verifiedClientName.textContent = `${firstName.value.trim()} ${lastName.value.trim()} ${fatherName.value.trim()}`;
    verifiedClientBirthDate.textContent = birthDate.value;
    verifiedClient.classList.remove('hidden');
  } else {
    verificationStatus.textContent = translations[currentLang].identityError;
    verificationStatus.classList.add('is-error');
    verifiedClient.classList.add('hidden');
  }
});

applyLanguage(currentLang);
updateQrCode();
