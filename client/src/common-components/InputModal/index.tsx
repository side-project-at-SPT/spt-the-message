import { ChangeEvent, useState } from "react";
import { TextField, Dialog, DialogContent } from "@mui/material";
import Button from "../Button";

type Props = {
  defaultName: string;
  open: boolean;
  title: string;
  submitBtnText?: string;
  onSubmit: (newName: string) => void;
  onCancel: () => void;
};

const InputModal = ({
  onCancel,
  onSubmit,
  defaultName,
  open,
  title,
  submitBtnText,
}: Props) => {
  const [userName, setUserName] = useState<string>(defaultName);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(userName);
  };

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
          backgroundColor: "#ffffff00",
          boxShadow: "0px 0px 0px 0px",
        },
      }}
    >
      <DialogContent className="flex">
        <div>
          <p className="text-center text-white text-2xl mb-8 mt-12">{title}</p>
          <TextField
            value={userName}
            onChange={handleInputChange}
            className="w-[296px] h-12 rounded-[40px] text-center font-medium bg-white"
            slotProps={{
              input: {
                sx: {
                  "& .MuiInputBase-input": {
                    color: "var(--text-primary)",
                    fontWeight: "700",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderWidth: "0px",
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "0px",
                    },
                  },
                },
              },
            }}
          />
          <div className="mt-16 flex justify-between">
            <Button buttonType="cancel" buttonText="取消" onClick={onCancel} />
            <Button
              buttonType="submit"
              buttonText={submitBtnText ?? "確認修改"}
              onClick={handleSubmit}
            />
          </div>
        </div>
        <img
          src="src/assets/edit-penguin.webp"
          alt=""
          className="w-[320px] h-[320px]"
        />
      </DialogContent>
    </Dialog>
  );
};

export default InputModal;
