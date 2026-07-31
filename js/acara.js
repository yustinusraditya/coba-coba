// Database Acara 1 sampai 8 (template lorem ipsum) untuk ke-5 Kartu
const databaseAcara = {
  1: {
    tag: "LOREM IPSUM 01",
    title: "Lorem Ipsum Dolor Sit Amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cards: {
      pre: { title: "Lorem Ipsum Dolor", sub: "Lorem ipsum dolor sit amet consectetur", link: "#" },
      tugas: { title: "Lorem Ipsum Dolor", sub: "Consectetur adipiscing elit sed do", link: "#" },
      laporan: { title: "Lorem Ipsum Dolor", sub: "Eiusmod tempor incididunt ut labore", link: "#" },
      data: { title: "Lorem Ipsum Dolor", sub: "Et dolore magna aliqua ut enim", link: "#" },
      panduan: { title: "Lorem Ipsum Dolor", sub: "Ad minim veniam quis nostrud", link: "#" }
    }
  },
  2: {
    tag: "LOREM IPSUM 02",
    title: "Consectetur Adipiscing Elit",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cards: {
      pre: { title: "Lorem Ipsum Dolor", sub: "Exercitation ullamco laboris nisi", link: "#" },
      tugas: { title: "Lorem Ipsum Dolor", sub: "Aliquip ex ea commodo consequat", link: "#" },
      laporan: { title: "Lorem Ipsum Dolor", sub: "Duis aute irure dolor in reprehenderit", link: "#" },
      data: { title: "Lorem Ipsum Dolor", sub: "In voluptate velit esse cillum", link: "#" },
      panduan: { title: "Lorem Ipsum Dolor", sub: "Fugiat nulla pariatur excepteur", link: "#" }
    }
  },
  3: {
    tag: "LOREM IPSUM 03",
    title: "Sed Do Eiusmod Tempor",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    cards: {
      pre: { title: "Lorem Ipsum Dolor", sub: "Sint occaecat cupidatat non proident", link: "#" },
      tugas: { title: "Lorem Ipsum Dolor", sub: "Sunt in culpa qui officia", link: "#" },
      laporan: { title: "Lorem Ipsum Dolor", sub: "Deserunt mollit anim id est", link: "#" },
      data: { title: "Lorem Ipsum Dolor", sub: "Laborum lorem ipsum dolor sit", link: "#" },
      panduan: { title: "Lorem Ipsum Dolor", sub: "Amet consectetur adipiscing elit", link: "#" }
    }
  },
  4: {
    tag: "LOREM IPSUM 04",
    title: "Incididunt Ut Labore",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
    cards: {
      pre: { title: "Lorem Ipsum Dolor", sub: "Unde omnis iste natus error", link: "#" },
      tugas: { title: "Lorem Ipsum Dolor", sub: "Voluptatem accusantium doloremque", link: "#" },
      laporan: { title: "Lorem Ipsum Dolor", sub: "Laudantium totam rem aperiam", link: "#" },
      data: { title: "Lorem Ipsum Dolor", sub: "Eaque ipsa quae ab illo", link: "#" },
      panduan: { title: "Lorem Ipsum Dolor", sub: "Inventore veritatis et quasi", link: "#" }
    }
  },
  5: {
    tag: "LOREM IPSUM 05",
    title: "Dolore Magna Aliqua",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    cards: {
      pre: { title: "Lorem Ipsum Dolor", sub: "Quia voluptas sit aspernatur", link: "#" },
      tugas: { title: "Lorem Ipsum Dolor", sub: "Aut odit aut fugit sed quia", link: "#" },
      laporan: { title: "Lorem Ipsum Dolor", sub: "Consequuntur magni dolores eos", link: "#" },
      data: { title: "Lorem Ipsum Dolor", sub: "Qui ratione voluptatem sequi", link: "#" },
      panduan: { title: "Lorem Ipsum Dolor", sub: "Nesciunt neque porro quisquam", link: "#" }
    }
  },
  6: {
    tag: "LOREM IPSUM 06",
    title: "Ut Enim Ad Minim",
    desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.",
    cards: {
      pre: { title: "Lorem Ipsum Dolor", sub: "Qui dolorem ipsum quia dolor", link: "#" },
      tugas: { title: "Lorem Ipsum Dolor", sub: "Sit amet consectetur adipisci", link: "#" },
      laporan: { title: "Lorem Ipsum Dolor", sub: "Velit sed quia non numquam", link: "#" },
      data: { title: "Lorem Ipsum Dolor", sub: "Eius modi tempora incidunt", link: "#" },
      panduan: { title: "Lorem Ipsum Dolor", sub: "Ut labore et dolore magnam", link: "#" }
    }
  },
  7: {
    tag: "LOREM IPSUM 07",
    title: "Quis Nostrud Exercitation",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    cards: {
      pre: { title: "Lorem Ipsum Dolor", sub: "Quis nostrum exercitationem ullam", link: "#" },
      tugas: { title: "Lorem Ipsum Dolor", sub: "Corporis suscipit laboriosam nisi", link: "#" },
      laporan: { title: "Lorem Ipsum Dolor", sub: "Ut aliquid ex ea commodi", link: "#" },
      data: { title: "Lorem Ipsum Dolor", sub: "Consequatur quis autem vel eum", link: "#" },
      panduan: { title: "Lorem Ipsum Dolor", sub: "Iure reprehenderit qui in ea", link: "#" }
    }
  },
  8: {
    tag: "LOREM IPSUM 08",
    title: "Ullamco Laboris Nisi",
    desc: "Voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    cards: {
      pre: { title: "Lorem Ipsum Dolor", sub: "Vel illum qui dolorem eum", link: "#" },
      tugas: { title: "Lorem Ipsum Dolor", sub: "Fugiat quo voluptas nulla pariatur", link: "#" },
      laporan: { title: "Lorem Ipsum Dolor", sub: "At vero eos et accusamus", link: "#" },
      data: { title: "Lorem Ipsum Dolor", sub: "Iusto odio dignissimos ducimus", link: "#" },
      panduan: { title: "Lorem Ipsum Dolor", sub: "Qui blanditiis praesentium voluptatum", link: "#" }
    }
  }
};

function switchAcara(nomorAcara) {
  // 1. Update status tombol aktif (tampilan desktop)
  const buttons = document.querySelectorAll('.btn-acara');
  buttons.forEach((btn, index) => {
    if (index + 1 === nomorAcara) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 1b. Sinkronkan dropdown "Pilih Acara" (tampilan handphone)
  const acaraSelect = document.getElementById('acaraSelect');
  if (acaraSelect && acaraSelect.value !== String(nomorAcara)) {
    acaraSelect.value = String(nomorAcara);
  }

  const selected = databaseAcara[nomorAcara];

  // 2. Refresh Header Acara dengan Efek Animasi
  const headerBox = document.getElementById('acara-header');
  headerBox.style.animation = 'none';
  headerBox.offsetHeight; // Trigger reflow
  headerBox.style.animation = 'fadeIn 0.4s ease';

  document.getElementById('display-tag').innerText = selected.tag;
  document.getElementById('display-title').innerText = selected.title;
  document.getElementById('display-desc').innerText = selected.desc;

  // 3. Refresh Isi ke-5 Kartu dengan Efek Animasi
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.classList.remove('animated-change');
  cardsContainer.offsetHeight; // Trigger reflow
  cardsContainer.classList.add('animated-change');

  // Update Card Pre-Praktikum
  document.getElementById('title-pre').innerText = selected.cards.pre.title;
  document.getElementById('sub-pre').innerText = selected.cards.pre.sub;
  document.getElementById('card-pre').href = selected.cards.pre.link;

  // Update Card Tugas
  document.getElementById('title-tugas').innerText = selected.cards.tugas.title;
  document.getElementById('sub-tugas').innerText = selected.cards.tugas.sub;
  document.getElementById('card-tugas').href = selected.cards.tugas.link;

  // Update Card Laporan
  document.getElementById('title-laporan').innerText = selected.cards.laporan.title;
  document.getElementById('sub-laporan').innerText = selected.cards.laporan.sub;
  document.getElementById('card-laporan').href = selected.cards.laporan.link;

  // Update Card Data
  document.getElementById('title-data').innerText = selected.cards.data.title;
  document.getElementById('sub-data').innerText = selected.cards.data.sub;
  document.getElementById('card-data').href = selected.cards.data.link;

  // Update Card Panduan
  document.getElementById('title-panduan').innerText = selected.cards.panduan.title;
  document.getElementById('sub-panduan').innerText = selected.cards.panduan.sub;
  document.getElementById('card-panduan').href = selected.cards.panduan.link;
}
