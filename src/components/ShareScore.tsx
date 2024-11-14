import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface ShareScoreProps {
  guesses: string[];
  won: boolean;
}

export const ShareScore = ({ guesses, won }: ShareScoreProps) => {
  const shareScore = () => {
    const emoji = won ? "🎉" : "😅";
    const score = `MemeWordle ${emoji}\nI got it in ${guesses.length}/6 tries!\n\nPlay at: yourdomain.com`;
    
    if (navigator.share) {
      navigator.share({
        title: "MemeWordle Score",
        text: score,
      });
    } else {
      navigator.clipboard.writeText(score);
      toast({
        title: "Copied to clipboard!",
        description: "Share your score with friends!",
      });
    }
  };

  return (
    <Button onClick={shareScore} className="flex gap-2">
      <Share2 className="w-4 h-4" />
      Share Score
    </Button>
  );
};