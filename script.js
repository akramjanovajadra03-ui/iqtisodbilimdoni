
// IQTISODIYOT BILIMDONI
// Muallif: AKRAMJONOVA JADRA MARATOVNA

const questionBank = {
  beginner: [
    {q:"Iqtisodiyot nimani o‘rganadi?",a:["Resurslardan foydalanish va ehtiyojlarni qondirishni","Faqat tarixiy voqealarni","Faqat tabiat hodisalarini","Faqat til qoidalarini"],c:0,e:"Iqtisodiyot cheklangan resurslardan samarali foydalanish va inson ehtiyojlarini qondirishni o‘rganadi."},
    {q:"Tovar nima?",a:["Faqat bepul beriladigan narsa","Sotish yoki ayirboshlash uchun ishlab chiqarilgan mahsulot","Faqat pul","Faqat xizmat"],c:1,e:"Tovar bozorda sotish yoki ayirboshlash uchun ishlab chiqariladi."},
    {q:"Pulning asosiy vazifalaridan biri qaysi?",a:["Ob-havoni o‘zgartirish","Mahsulot ishlab chiqarish","Qiymat o‘lchovi bo‘lish","Yer maydonini oshirish"],c:2,e:"Pul qiymat o‘lchovi, muomala vositasi va jamg‘arish vositasi vazifalarini bajaradi."},
    {q:"Bozor nima?",a:["Faqat savdo binosi","Faqat ishlab chiqarish korxonasi","Faqat bank","Sotuvchi va xaridorlar munosabatlari tizimi"],c:3,e:"Bozor xaridor va sotuvchilar o‘rtasidagi iqtisodiy munosabatlar tizimidir."},
    {q:"Talab nimani anglatadi?",a:["Xaridorning mahsulotni sotib olish istagi va imkoniyatini","Faqat ishlab chiqarish hajmini","Davlat xarajatlarini","Korxona foydasini"],c:0,e:"Talab — xaridorning muayyan narxda tovar yoki xizmatni sotib olish istagi va xarid qobiliyatidir."},
    {q:"Taklif nima?",a:["Xaridorlar soni","Sotuvchilarning bozorga chiqarishga tayyor mahsulot miqdori","Faqat narxlar ro‘yxati","Davlat qarzi"],c:1,e:"Taklif — sotuvchilar muayyan narxda sotishga tayyor bo‘lgan mahsulot miqdori."},
    {q:"Daromad nima?",a:["Faqat qarz","Faqat xarajat","Shaxs yoki tashkilot oladigan pul tushumi","Faqat soliq"],c:2,e:"Daromad — mehnat, mulk yoki tadbirkorlik faoliyati orqali olinadigan tushum."},
    {q:"Xarajat deb nimaga aytiladi?",a:["Faqat foydaga","Faqat jamg‘armaga","Faqat daromadga","Mahsulot yoki xizmat uchun sarflangan mablag‘ga"],c:3,e:"Xarajat — tovar, xizmat yoki faoliyat uchun sarflangan resurs va mablag‘."},
    {q:"Byudjet nima?",a:["Daromad va xarajatlar rejasi","Faqat bank binosi","Faqat mahsulot turi","Ishchilar ro‘yxati"],c:0,e:"Byudjet ma’lum davr uchun daromad va xarajatlarning rejasidir."},
    {q:"Tadbirkor kim?",a:["Faqat xaridor","Foyda olish maqsadida iqtisodiy faoliyat yurituvchi shaxs","Faqat soliq yig‘uvchi","Faqat bank mijozi"],c:1,e:"Tadbirkor biznes faoliyatini tashkil qiladi va uning tavakkalchiligini o‘z zimmasiga oladi."},
    {q:"Jamg‘arma nima?",a:["Barcha xarajatlar yig‘indisi","Faqat soliq to‘lovi","Kelajak uchun saqlab qo‘yilgan mablag‘","Faqat kredit"],c:2,e:"Jamg‘arma — daromadning sarflanmay, kelajak uchun saqlanadigan qismi."},
    {q:"Narx nima?",a:["Mahsulotning og‘irligi","Mahsulotning rangi","Ishchilar soni","Tovar yoki xizmat qiymatining puldagi ifodasi"],c:3,e:"Narx tovar yoki xizmat qiymatining pulda ifodalangan ko‘rinishidir."}
  ],

  intermediate: [
    {q:"Talab qonuniga ko‘ra, boshqa shartlar o‘zgarmasa, narx oshganda talab miqdori qanday o‘zgaradi?",a:["Kamayadi","Oshadi","O‘zgarmaydi","Cheksiz oshadi"],c:0,e:"Talab qonuniga ko‘ra, narx va talab miqdori odatda teskari bog‘liq."},
    {q:"Taklif qonuniga ko‘ra, narx oshishi odatda nimaga olib keladi?",a:["Taklifning yo‘qolishiga","Taklif miqdorining oshishiga","Talabning doimiy oshishiga","Ishlab chiqarishning to‘xtashiga"],c:1,e:"Boshqa shartlar o‘zgarmasa, yuqoriroq narx ishlab chiqaruvchilarni ko‘proq mahsulot taklif qilishga undaydi."},
    {q:"Inflyatsiya nima?",a:["Ishsizlikning yo‘qolishi","Ishlab chiqarishning to‘xtashi","Umumiy narxlar darajasining davomli oshishi","Soliqlarning bekor qilinishi"],c:2,e:"Inflyatsiya iqtisodiyotda tovar va xizmatlarning umumiy narxlar darajasi oshishidir."},
    {q:"Foyda qanday hisoblanadi?",a:["Daromad + xarajat","Xarajat − daromad","Daromad × xarajat","Daromad − xarajat"],c:3,e:"Soddalashtirilgan hisobda foyda daromaddan xarajatlarni ayirish orqali topiladi."},
    {q:"Raqobatning asosiy vazifalaridan biri nima?",a:["Korxonalarni samarali ishlashga undash","Barcha narxlarni bir xil qilish","Mahsulot ishlab chiqarishni taqiqlash","Talabni yo‘qotish"],c:0,e:"Raqobat sifatni oshirish, xarajatlarni kamaytirish va yangilik yaratishga undaydi."},
    {q:"Soliq nima?",a:["Bankdan olingan kredit","Davlat tomonidan qonun asosida undiriladigan majburiy to‘lov","Korxona foydasi","Shaxsiy jamg‘arma"],c:1,e:"Soliqlar davlat byudjetining muhim daromad manbalaridan biridir."},
    {q:"Kredit nima?",a:["Bepul sovg‘a","Soliq turi","Qaytarish va odatda foiz to‘lash sharti bilan beriladigan mablag‘","Faqat naqd pul"],c:2,e:"Kredit ma’lum muddatga, qaytarish sharti bilan beriladigan qarz mablag‘idir."},
    {q:"Ishsizlik darajasi odatda qanday aniqlanadi?",a:["Barcha aholining daromadi bilan","Korxonalar soni bilan","Faqat pensionerlar soni bilan","Ishsizlar sonining ishchi kuchiga nisbati bilan"],c:3,e:"Ishsizlik darajasi ishsizlar sonining ishchi kuchi soniga nisbati orqali hisoblanadi."},
    {q:"Agar daromad 500 000 so‘m, xarajat 350 000 so‘m bo‘lsa, qoldiq qancha?",a:["150 000 so‘m","850 000 so‘m","350 000 so‘m","200 000 so‘m"],c:0,e:"500 000 − 350 000 = 150 000 so‘m."},
    {q:"Monopoliya nima?",a:["Ko‘plab kichik sotuvchilar bozori","Bozorda bitta sotuvchining hukmron mavqei","Faqat davlat xaridi","Xaridorlar o‘rtasidagi raqobat"],c:1,e:"Monopoliya — muayyan bozorda bitta sotuvchining ustun yoki yakka mavqega ega bo‘lishidir."},
    {q:"Import nima?",a:["Mahsulotni mamlakat ichida ishlab chiqarish","Mahsulotni qayta ishlash","Tovar va xizmatlarni chetdan olib kirish","Tovarlarni ichki bozorda sotish"],c:2,e:"Import — boshqa mamlakatlardan tovar va xizmatlarni olib kirish."},
    {q:"Eksport nima?",a:["Chet eldan mahsulot sotib olish","Ichki bozorda mahsulot saqlash","Mahsulotni yo‘q qilish","Tovar va xizmatlarni chet elga sotish"],c:3,e:"Eksport — mamlakatda ishlab chiqarilgan tovar va xizmatlarni xorijga sotish."}
  ],

  advanced: [
    {q:"YaIM (Yalpi ichki mahsulot) nimani ifodalaydi?",a:["Mamlakat hududida ma’lum davrda ishlab chiqarilgan yakuniy tovar va xizmatlar qiymatini","Faqat davlat byudjetini","Faqat eksport hajmini","Faqat aholi jamg‘armasini"],c:0,e:"YaIM mamlakat hududida ma’lum davrda yaratilgan yakuniy mahsulot va xizmatlarning bozor qiymatidir."},
    {q:"Nominal YaIM real YaIMdan nimasi bilan farq qiladi?",a:["Faqat eksportni hisoblaydi","Joriy davr narxlarida hisoblanadi","Inflyatsiyani to‘liq chiqarib tashlaydi","Faqat xizmatlarni hisoblaydi"],c:1,e:"Nominal YaIM joriy narxlarda hisoblanadi, real YaIM esa narxlar o‘zgarishi ta’sirini hisobga oladi."},
    {q:"Pul-kredit siyosatini odatda qaysi tashkilot yuritadi?",a:["Maktab","Savdo markazi","Markaziy bank","Sug‘urta kompaniyasi"],c:2,e:"Markaziy bank pul-kredit siyosati va pul muomalasini tartibga solishda asosiy rol o‘ynaydi."},
    {q:"Fiskal siyosat asosan qaysi vositalar orqali amalga oshiriladi?",a:["Faqat reklama va marketing","Faqat import va eksport","Faqat ish haqi","Davlat xarajatlari va soliqlar"],c:3,e:"Fiskal siyosat davlat xarajatlari va soliqlar orqali iqtisodiyotga ta’sir ko‘rsatadi."},
    {q:"Elastiklik iqtisodiyotda nimani o‘lchaydi?",a:["Bir ko‘rsatkichning boshqasidagi o‘zgarishga sezgirligini","Faqat ishlab chiqarish hajmini","Faqat korxona sonini","Pulning rangini"],c:0,e:"Elastiklik bir iqtisodiy ko‘rsatkichning boshqa ko‘rsatkich o‘zgarishiga qay darajada javob berishini ifodalaydi."},
    {q:"Imkoniyat xarajati nima?",a:["Barcha xarajatlarning yig‘indisi","Tanlov natijasida voz kechilgan eng yaxshi muqobil imkoniyat qiymati","Faqat ijara to‘lovi","Faqat transport xarajati"],c:1,e:"Imkoniyat xarajati bir tanlovni amalga oshirishda voz kechilgan eng yaxshi muqobil variant qiymatidir."},
    {q:"Agar narx 20% oshib, talab miqdori 10% kamaygan bo‘lsa, talabning narx elastikligi moduli qancha?",a:["2","0,2","0,5","10"],c:2,e:"Elastiklik moduli = 10% / 20% = 0,5."},
    {q:"Bozor muvozanati qachon yuzaga keladi?",a:["Narx doimiy oshganda","Taklif butunlay yo‘qolganda","Faqat davlat narx belgilaganda","Talab miqdori taklif miqdoriga teng bo‘lganda"],c:3,e:"Muvozanat narxida xaridorlar sotib olmoqchi bo‘lgan miqdor sotuvchilar taklif qilayotgan miqdorga teng bo‘ladi."},
    {q:"Diversifikatsiya nima?",a:["Faoliyat yoki investitsiyalarni turli yo‘nalishlarga taqsimlash","Bitta mahsulotga to‘liq bog‘lanish","Faqat qarz olish","Narxlarni majburiy pasaytirish"],c:0,e:"Diversifikatsiya turli mahsulot, bozor yoki aktivlarga taqsimlanish orqali xavfni kamaytirishga yordam beradi."},
    {q:"Tashqi iqtisodiy samara (eksternaliya) nima?",a:["Faqat korxona ichidagi xarajat","Faoliyatning uchinchi tomonlarga bozor narxida to‘liq aks etmaydigan ta’siri","Faqat davlat daromadi","Faqat bank foizi"],c:1,e:"Eksternaliya iqtisodiy faoliyatning ushbu bitimda bevosita qatnashmaydigan tomonlarga ta’siridir."},
    {q:"Agar nominal foiz stavkasi 12%, inflyatsiya 5% bo‘lsa, taxminiy real foiz stavkasi qancha?",a:["17%","5%","7%","12%"],c:2,e:"Taxminiy real foiz stavkasi nominal stavkadan inflyatsiyani ayirish orqali topiladi: 12% − 5% = 7%."},
    {q:"Marjinal xarajat nima?",a:["Umumiy xarajatning barcha qismlari","O‘rtacha daromad","Doimiy xarajatlar yig‘indisi","Qo‘shimcha bir birlik mahsulot ishlab chiqarish xarajati"],c:3,e:"Marjinal xarajat ishlab chiqarish hajmini bir birlikka oshirish bilan yuzaga keladigan qo‘shimcha xarajatdir."}
  ],

  expert: [
    {q:"Markaziy bank asosiy foiz stavkasini oshirsa, boshqa shartlar o‘zgarmaganda, odatda qanday ta’sir kuzatilishi mumkin?",a:["Kredit olish qimmatlashib, talab susayishi mumkin","Barcha mahsulotlar bepul bo‘ladi","Inflyatsiya darhol nolga tushadi","Davlat xarajatlari avtomatik oshadi"],c:0,e:"Foiz stavkasining oshishi kredit narxini ko‘tarishi va iqtisodiy talabni pasaytirishi mumkin. Ta’sir vaqt talab qiladi."},
    {q:"Phillips egri chizig‘i qisqa muddatda qaysi ikki ko‘rsatkich o‘rtasidagi munosabatni ifodalaydi?",a:["Eksport va import","Inflyatsiya va ishsizlik","Jamg‘arma va soliq","Narx va valyuta kursi"],c:1,e:"Qisqa muddatli Phillips egri chizig‘i inflyatsiya va ishsizlik o‘rtasidagi teskari bog‘liqlikni tasvirlaydi."},
    {q:"To‘lov balansining joriy hisobiga odatda nimalar kiradi?",a:["Faqat oltin zaxiralari","Faqat davlat qarzi","Tovarlar, xizmatlar, birlamchi va ikkilamchi daromadlar oqimi","Faqat bank kreditlari"],c:2,e:"Joriy hisob savdo, xizmatlar va daromadlar bilan bog‘liq xalqaro operatsiyalarni qamrab oladi."},
    {q:"Lorens egri chizig‘i nimani tahlil qilishda ishlatiladi?",a:["Inflyatsiya tezligini","Valyuta kursini","Davlat qarzini","Daromad taqsimotidagi tengsizlikni"],c:3,e:"Lorens egri chizig‘i aholi daromadlari yoki boylik taqsimotidagi tengsizlikni ko‘rsatadi."},
    {q:"Gini koeffitsiyenti qanday oraliqda talqin qilinadi?",a:["0 dan 1 gacha","1 dan 10 gacha","−1 dan 0 gacha","0 dan 1000 gacha"],c:0,e:"Gini koeffitsiyenti odatda 0 dan 1 gacha: 0 to‘liq tenglikni, 1 esa maksimal tengsizlikni anglatadi."},
    {q:"IS-LM modelida IS egri chizig‘i nimani ifodalaydi?",a:["Pul bozoridagi muvozanatni","Tovar bozoridagi muvozanatni","Mehnat bozoridagi taklifni","Valyuta bozoridagi kursni"],c:1,e:"IS egri chizig‘i foiz stavkasi va daromadning tovar bozoridagi muvozanatga mos kombinatsiyalarini ko‘rsatadi."},
    {q:"IS-LM modelida LM egri chizig‘i nimani ifodalaydi?",a:["Faqat davlat xarajatlarini","Tovar eksportini","Pul bozoridagi muvozanatni","Ishlab chiqarish texnologiyasini"],c:2,e:"LM egri chizig‘i pulga talab va pul taklifi muvozanatidagi daromad hamda foiz stavkasi kombinatsiyalarini ko‘rsatadi."},
    {q:"Davlat byudjeti taqchilligi qachon yuzaga keladi?",a:["Daromad xarajatdan ko‘p bo‘lsa","Daromad va xarajat teng bo‘lsa","Soliqlar bekor qilinsa","Davlat xarajatlari daromadlardan oshsa"],c:3,e:"Byudjet taqchilligi davlat xarajatlari daromadlaridan yuqori bo‘lgan holatdir."},
    {q:"Laffer egri chizig‘i qaysi munosabatni tasvirlaydi?",a:["Soliq stavkasi va soliq tushumlari o‘rtasidagi bog‘liqlikni","Ish haqi va mehnat unumdorligini","Eksport va importni","Inflyatsiya va aholi sonini"],c:0,e:"Laffer egri chizig‘i soliq stavkasi bilan soliq tushumlari o‘rtasidagi nazariy munosabatni ko‘rsatadi."},
    {q:"Nominal valyuta kursi nima?",a:["Faqat inflyatsiya darajasi","Bir valyutaning boshqa valyutada ifodalangan narxi","Davlat byudjeti miqdori","Oltin zaxirasi"],c:1,e:"Nominal valyuta kursi bir mamlakat pul birligining boshqa mamlakat pul birligiga nisbatan qiymatidir."},
    {q:"Iqtisodiy o‘sishning ekstensiv turi nimaga asoslanadi?",a:["Faqat yangi texnologiyalarga","Faqat mehnat unumdorligini oshirishga","Ishlab chiqarish resurslari miqdorini ko‘paytirishga","Faqat narxlarni oshirishga"],c:2,e:"Ekstensiv o‘sish ko‘proq mehnat, kapital va boshqa resurslarni jalb qilish hisobiga yuz beradi."},
    {q:"Diskontlash nima?",a:["Kelajakdagi pul qiymatini cheksiz oshirish","Soliq stavkasini kamaytirish","Mahsulot narxini belgilash","Kelajakdagi pul oqimlarini bugungi qiymatga keltirish"],c:3,e:"Diskontlash kelajakda olinadigan pul oqimining bugungi qiymatini hisoblash usulidir."}
  ]
};

const levelNames = {
  beginner: "BOSHLANG‘ICH",
  intermediate: "O‘RTA",
  advanced: "YUQORI",
  expert: "EKSPERT"
};

const TOTAL_QUESTIONS = 10;
const TIME_PER_QUESTION = 20;

let selectedLevel = "";
let questions = [];
let currentIndex = 0;
let correctAnswers = 0;
let userResults = [];
let timerInterval = null;
let timeLeft = TIME_PER_QUESTION;
let answered = false;

const $ = id => document.getElementById(id);

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  $(screenId).classList.add("active");
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz(level) {
  selectedLevel = level;
  questions = shuffle(questionBank[level])
    .slice(0, TOTAL_QUESTIONS)
    .map(question => {
      const options = shuffle(
        question.a.map((text, index) => ({
          text,
          isCorrect: index === question.c
        }))
      );

      return {
        ...question,
        options,
        correctText: question.a[question.c]
      };
    });

  currentIndex = 0;
  correctAnswers = 0;
  userResults = [];

  $("currentLevel").textContent = levelNames[level];
  showScreen("quizScreen");
  renderQuestion();
}

function renderQuestion() {
  clearInterval(timerInterval);
  answered = false;
  timeLeft = TIME_PER_QUESTION;

  const question = questions[currentIndex];

  $("questionNumber").textContent =
    `${currentIndex + 1} / ${TOTAL_QUESTIONS}`;

  $("questionText").textContent = question.q;
  $("progressBar").style.width =
    `${(currentIndex / TOTAL_QUESTIONS) * 100}%`;

  $("feedback").className = "feedback";
  $("feedback").textContent = "";

  $("nextButton").disabled = true;
  $("nextButton").textContent =
    currentIndex === TOTAL_QUESTIONS - 1
      ? "Natijani ko‘rish →"
      : "Keyingi savol →";

  const answersBox = $("answers");
  answersBox.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = letters[index];

    const text = document.createElement("span");
    text.textContent = option.text;

    button.append(letter, text);
    button.addEventListener("click", () => chooseAnswer(index));
    answersBox.appendChild(button);
  });

  updateTimerDisplay();
  timerInterval = setInterval(tickTimer, 1000);
}

function updateTimerDisplay() {
  $("timer").textContent = `${timeLeft} soniya`;
  $("timer").classList.toggle("urgent", timeLeft <= 5);
}

function tickTimer() {
  timeLeft--;
  updateTimerDisplay();

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    chooseAnswer(-1);
  }
}

function chooseAnswer(selectedIndex) {
  if (answered) return;

  answered = true;
  clearInterval(timerInterval);

  const question = questions[currentIndex];
  const buttons = [...document.querySelectorAll(".answer-option")];

  const isCorrect =
    selectedIndex >= 0 &&
    question.options[selectedIndex].isCorrect;

  if (isCorrect) correctAnswers++;

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (question.options[index].isCorrect) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  const feedback = $("feedback");
  feedback.className = "feedback show";

  if (selectedIndex === -1) {
    feedback.innerHTML =
      `<strong>Vaqt tugadi!</strong> To‘g‘ri javob: ${escapeHTML(question.correctText)}<br>${escapeHTML(question.e)}`;
  } else if (isCorrect) {
    feedback.innerHTML =
      `<strong>To‘g‘ri javob!</strong> ${escapeHTML(question.e)}`;
  } else {
    feedback.innerHTML =
      `<strong>Noto‘g‘ri javob.</strong> To‘g‘ri javob: ${escapeHTML(question.correctText)}<br>${escapeHTML(question.e)}`;
  }

  userResults.push({
    question: question.q,
    selected: selectedIndex === -1
      ? "Javob berilmadi"
      : question.options[selectedIndex].text,
    correct: question.correctText,
    explanation: question.e,
    isCorrect
  });

  $("nextButton").disabled = false;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function nextQuestion() {
  if (!answered) return;

  currentIndex++;

  if (currentIndex < TOTAL_QUESTIONS) {
    renderQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  clearInterval(timerInterval);

  const wrong = TOTAL_QUESTIONS - correctAnswers;
  const percent = Math.round(correctAnswers / TOTAL_QUESTIONS * 100);

  $("scorePercent").textContent = `${percent}%`;
  $("correctCount").textContent = correctAnswers;
  $("wrongCount").textContent = wrong;
  $("totalCount").textContent = TOTAL_QUESTIONS;

  let message = "";

  if (percent === 100) {
    message = "Ajoyib! Barcha savollarga to‘g‘ri javob berdingiz!";
  } else if (percent >= 80) {
    message = "Juda yaxshi! Bilimingiz yuqori darajada!";
  } else if (percent >= 60) {
    message = "Yaxshi natija! Yana biroz mashq qiling!";
  } else if (percent >= 40) {
    message = "Yomon emas! Bilimlaringizni mustahkamlang!";
  } else {
    message = "Ko‘proq mashq qiling. Sizda albatta uddalash imkoniyati bor!";
  }

  $("resultMessage").textContent = message;
  $("progressBar").style.width = "100%";

  showScreen("resultScreen");
}

function showReview() {
  const list = $("reviewList");
  list.innerHTML = "";

  userResults.forEach((result, index) => {
    const item = document.createElement("div");
    item.className = `review-item ${
      result.isCorrect ? "correct-review" : "wrong-review"
    }`;

    const heading = document.createElement("h3");
    heading.textContent = `${index + 1}. ${result.question}`;

    const yourAnswer = document.createElement("p");
    yourAnswer.textContent = `Sizning javobingiz: ${result.selected}`;
    if (!result.isCorrect) yourAnswer.className = "your-answer";

    const rightAnswer = document.createElement("p");
    rightAnswer.textContent = `To‘g‘ri javob: ${result.correct}`;
    rightAnswer.className = "right-answer";

    const explanation = document.createElement("p");
    explanation.textContent = `Izoh: ${result.explanation}`;

    item.append(heading, yourAnswer, rightAnswer, explanation);
    list.appendChild(item);
  });

  showScreen("reviewScreen");
}

// Daraja tanlash
document.querySelectorAll(".level-card").forEach(button => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.level);
  });
});

// Tugmalar
$("nextButton").addEventListener("click", nextQuestion);

$("backButton").addEventListener("click", () => {
  clearInterval(timerInterval);
  showScreen("homeScreen");
});

$("reviewButton").addEventListener("click", showReview);

$("restartButton").addEventListener("click", () => {
  clearInterval(timerInterval);
  showScreen("homeScreen");
});

$("homeButton").addEventListener("click", () => {
  showScreen("homeScreen");
});

$("againButton").addEventListener("click", () => {
  startQuiz(selectedLevel);
});
