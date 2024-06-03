import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

interface VideoProps {
  title: string;
  overview: string;
  youtube: string;
  state: boolean;
  changeState: any;
  release: number;
  age: number;
  duration: number;
}

const VideoPlayerModal = ({
  title,
  overview,
  youtube,
  state,
  changeState,
  release,
  age,
  duration,
}: VideoProps) => {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{release}</p>
            <p className="border py-0.5 border-gray-200 rounded">{age}+</p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>
        <iframe src={youtube} height={250} className="w-full" />
      </DialogContent>
    </Dialog>
  );
};
export default VideoPlayerModal;
