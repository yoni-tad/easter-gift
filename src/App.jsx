import { useEffect, useState } from "react";
import eggAnimation from "./assets/egg.json";
import eggCrack from "./assets/egg-crack.json";
import Lottie from "lottie-react";

export default function App() {
  const [selected, setSelected] = useState();

  const quoteList = [
    "From death comes life — that is the hope of Fasika.",
    "The tomb is empty, but hearts are full.",
    "Christ’s light has risen — may it shine within you always.",
    "Resurrection is not just a moment, it’s a promise.",
    "This Fasika, rise above fear — just as He rose in glory.",
    "Grace rolled the stone away. Love walked out.",
    "Every new dawn echoes the miracle of resurrection.",
    "Hope didn’t die — it rose again.",
    "Let your soul bloom with the joy of the risen King.",
    "Peace flows where Christ has walked.",
    "Let Fasika be the season your heart awakens again.",
    "God’s greatest gift was wrapped in sacrifice and risen in love.",
    "Like the stone that rolled away, may burdens be lifted from you.",
    "He lives — and so does hope, faith, and joy.",
    "Where there was sorrow, Fasika brings singing.",
    "The light of the resurrection brings peace to every soul.",
    "This Fasika, may your heart be renewed like the dawn.",
    "From the tomb comes triumph — grace, love, and new life.",
    "Fasika is a reminder: darkness never wins.",
    "In every broken moment, God plants new life.",
  ];
  const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];

  function onClick(value) {
    setSelected(value);
  }

  useEffect(() => {
    if (selected) {
      setTimeout(() => {
        setSelected("finished");
      }, 6000);
    }
  }, [selected]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-white bg-black gap-8 py-4 overflow-hidden max-w-md">
      <p className="text-7xl text-center">
        <span className="text-blue-400">Happy </span>
        <span className="text-pink-400">Easter</span>
      </p>
      {selected == null ? (
        <div className="flex flex-col items-center" id="eggs">
          <p id="quote" className="text-xl w-76 text-center">
            Pick an egg and discover a quote just for you
          </p>
          <Lottie
            animationData={eggAnimation}
            className="h-36 cursor-pointer"
            onClick={() => onClick("one")}
          />

          <Lottie
            animationData={eggAnimation}
            className="h-36 cursor-pointer"
            onClick={() => onClick("two")}
          />
          <Lottie
            animationData={eggAnimation}
            className="h-36 cursor-pointer"
            onClick={() => onClick("three")}
          />
        </div>
      ) : selected == "finished" ? (
        <div className="flex flex-col items-center gap-8">
          <div
            className="p-4 text-xl bg-white/10 text-center rounded-xl m-4 flex flex-col gap-4"
            id="quote"
          >
            <p>🎉 You found a Lucky Charm! 🍀</p>
            <p>{randomQuote}</p>
          </div>

          <p>📨 Want your friends to try their luck?</p>
          <a href={`https://t.me/share/url?url=${encodeURIComponent('#fasikagift\n\n' + '✨' + randomQuote + '\n\nTry your luck 👇 \n\n@easter_gift_bot')}`} className="text-xl px-6 py-2 bg-blue-400 rounded-xl cursor-pointer flex items-center gap-2">
            Share
            <svg
              className="h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fill="#ffffff"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m20 12-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19l6.4-7z"
              />
            </svg>
          </a>
          <p className="my-6">Built with ❤️ by Yoni Tad</p>
        </div>
      ) : (
        <div className="flex flex-col items-center" id="cracked-egg">
          <Lottie animationData={eggCrack} className="h-80 cursor-pointer" />
          <p className="text-xl text-center" id="loading">
            ✨ Cracking your egg... 🐣{" "}
          </p>
        </div>
      )}
    </div>
  );
}
