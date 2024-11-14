export interface MemeQuestion {
  id: number;
  question: string;
  answer: string;
  imageHint: string;
  contextHint: string;
}

export const getMemeOfTheDay = (): MemeQuestion => {
  const memes: MemeQuestion[] = [
    {
      id: 1,
      question: "I can has ____?",
      answer: "cheezburger",
      imageHint: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      contextHint: "One of the earliest viral cat memes from 2007"
    },
    {
      id: 2,
      question: "But that's none of my ____",
      answer: "business",
      imageHint: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      contextHint: "Kermit the Frog sipping tea meme"
    },
    // Add more memes here
  ];

  // Get today's meme based on the date
  const today = new Date();
  const index = (today.getFullYear() * 365 + today.getMonth() * 31 + today.getDate()) % memes.length;
  return memes[index];
};