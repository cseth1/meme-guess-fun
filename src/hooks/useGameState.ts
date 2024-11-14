import { useState, useEffect } from 'react';
import { MemeQuestion, getMemeOfTheDay } from '@/lib/memeData';
import { useToast } from '@/components/ui/use-toast';

export const useGameState = () => {
  const [meme, setMeme] = useState<MemeQuestion | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameWon, setGameWon] = useState(false);
  const [showImageHint, setShowImageHint] = useState(false);
  const [showContextHint, setShowContextHint] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMeme(getMemeOfTheDay());
  }, []);

  const submitGuess = () => {
    if (!meme) return;
    
    if (currentGuess.toLowerCase() === meme.answer.toLowerCase()) {
      setGameWon(true);
      toast({
        title: "🎉 You got it!",
        description: "You're a true meme lord!",
      });
    } else {
      if (guesses.length >= 5) {
        toast({
          title: "Game Over",
          description: `The answer was: ${meme.answer}`,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Try again!",
          description: "That's not the right word...",
        });
      }
    }
    
    setGuesses([...guesses, currentGuess]);
    setCurrentGuess("");
  };

  return {
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
    isGameOver: guesses.length >= 6 || gameWon,
  };
};