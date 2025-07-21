const phraseData = {
  phrase: "一石二鳥",
  romaji: "is-seki ni chou",
  english: "To kill two birds with one stone",
  kanji: ["一", "石", "二", "鳥"]
};

function loadPhrase() {
  document.querySelector(".phrase").textContent = phraseData.phrase;
  document.querySelector(".romaji").textContent = phraseData.romaji;
  document.querySelector(".english").textContent = phraseData.english;

  const kanjiBlock = document.getElementById("kanji");
  kanjiBlock.innerHTML = "";

  phraseData.kanji.forEach((kanji, index) => {
    const div = document.createElement("div");
    div.id = `writer-${index}`;
    div.style.width = "100px";
    div.style.height = "100px";
    kanjiBlock.appendChild(div);

    const writer = HanziWriter.create(div.id, kanji, {
      width: 100,
      height: 100,
      showOutline: true,
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 100,
      padding: 5
    });

    writer.loopCharacterAnimation();
  });
}

window.onload = loadPhrase;
