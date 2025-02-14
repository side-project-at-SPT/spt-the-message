import { Dialog, DialogContent } from "@mui/material";
import penguinImg from "@/assets/logout-penguin.webp";
import Button, { ButtonType } from "../../../../common-components/Button";

type Props = {
  open: boolean;
  onCancel: () => void;
  onSubmit: () => void;
};

const LogoutModal = ({ open, onCancel, onSubmit }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "var(--modal-overlay)",
          },
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: "var(--overlay)",
          boxShadow: "0px 0px 0px 0px",
          maxWidth: "fit-content",
        },
      }}
    >
      <DialogContent className="flex">
        <img src={penguinImg} alt="" className="w-[320px] h-[320px]" />
        <div>
          <p className="text-center text-white text-2xl mb-8 mt-12">是否登出</p>
          <p className="text-center text-white text-lg">確定要登出嗎？</p>
          <div className="mt-16 flex justify-between">
            <Button
              buttonType={ButtonType.Submit}
              buttonText="登出"
              onClick={onSubmit}
              className="mr-5"
            />
            <Button
              buttonType={ButtonType.Cancel}
              buttonText="取消"
              onClick={onCancel}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
