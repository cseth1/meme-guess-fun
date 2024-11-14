import { useState } from "react";
import { useGameState } from "@/hooks/useGameState";
import { HintSystem } from "./HintSystem";
import { ShareScore } from "./ShareScore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const MemeGame = () => {
  const {
    meme,
    guesses,
    currentGuess,
    setCurrentGuess,
    submitGuess,
    gameWon,
    showImageHint,
    setShowImageHint,
    showContextHint,
    setShowContextHint,
    isGameOver,
  } = useGameState();

  const getLetterClass = (letter: string, index: number, answer: string) => {
    if (!answer) return "bg-gray-200";
    
    const normalizedLetter = letter.toLowerCase();
    const normalizedAnswer = answer.toLowerCase();
    
    if (normalizedAnswer[index] === normalizedLetter) {
      return "bg-green-500 text-white";
    }
    
    if (normalizedAnswer.includes(normalizedLetter)) {
      return "bg-yellow-500 text-white";
    }
    
    return "bg-gray-400 text-white";
  };

  if (!meme) return null;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary animate-bounce-in">
        MemeWordle
      </h1>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <p className="text-2xl text-center mb-6">{meme.question}</p>

        <div className="space-y-4 mb-6">
          {guesses.map((guess, guessIndex) => (
            <div key={guessIndex} className="flex justify-center gap-1">
              {guess.split('').map((letter, letterIndex) => (
                <div
                  key={`${guessIndex}-${letterIndex}`}
                  className={`w-10 h-10 flex items-center justify-center font-bold rounded-md uppercase ${getLetterClass(
                    letter,
                    letterIndex,
                    meme.answer
                  )} animate-bounce-in`}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>

        {!isGameOver && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitGuess();
            }}
            className="flex gap-2"
          >
            <Input
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
              placeholder="Enter your guess..."
              className="flex-1"
              maxLength={meme.answer.length}
            />
            <Button type="submit">Guess</Button>
          </form>
        )}

        <HintSystem
          imageHint={meme.imageHint}
          contextHint={meme.contextHint}
          showImageHint={showImageHint}
          showContextHint={showContextHint}
          onShowImage={() => setShowImageHint(true)}
          onShowContext={() => setShowContextHint(true)}
        />

        {isGameOver && (
          <div className="text-center mt-6">
            <ShareScore guesses={guesses} won={gameWon} />
          </div>
        )}
      </div>

      <p className="text-center text-sm text-gray-500">
        Attempts remaining: {6 - guesses.length}
      </p>
    </div>
  );
};