import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Image, Info } from "lucide-react";

interface HintSystemProps {
  imageHint: string;
  contextHint: string;
  showImageHint: boolean;
  showContextHint: boolean;
  onShowImage: () => void;
  onShowContext: () => void;
}

export const HintSystem = ({
  imageHint,
  contextHint,
  showImageHint,
  showContextHint,
  onShowImage,
  onShowContext,
}: HintSystemProps) => {
  return (
    <div className="flex gap-4 justify-center my-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex gap-2"
            onClick={onShowImage}
            disabled={showImageHint}
          >
            <Image className="w-4 h-4" />
            Image Hint
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Image Hint</DialogTitle>
            <DialogDescription>
              <img src={imageHint} alt="Hint" className="w-full h-auto rounded-lg mt-4" />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex gap-2"
            onClick={onShowContext}
            disabled={showContextHint}
          >
            <Info className="w-4 h-4" />
            Context Hint
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Context Hint</DialogTitle>
            <DialogDescription className="mt-4">
              {contextHint}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};