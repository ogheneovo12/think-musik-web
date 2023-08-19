"use client";
import MoneyBagEmoji from "@/assets/icons/emoji-money-bag.svg";
import { Button, Modal } from "flowbite-react";
import ClipboardIcon from "@/assets/icons/clipboard.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectLayoutState, toggleReferralModal } from "@/redux/features";

export default function ReferalModal() {
  const dispatch = useAppDispatch();
  const { showReferralModal } = useAppSelector(selectLayoutState);
  return (
    <>
      <Modal
        size={"5xl"}
        show={showReferralModal}
        onClose={() => dispatch(toggleReferralModal())}
        className="p-0"
      >
        <Modal.Body className="min-h-[587px] p-0 relative">
          <button
            onClick={() => dispatch(toggleReferralModal())}
            className="absolute text-center right-5 top-5 rounded-full h-[41px] w-[41px] bg-white"
          >
            X
          </button>
          <div className="flex items-stretch h-[587px] max-h-[90vh]">
            <div className="w-full rounded-tl-[40px] rounded-bl-[40px] hidden sm:block  max-w-[500px] bg-[url(/invite_bg.png)] h-full bg-cover bg-no-repeat"></div>
            <div className="flex-grow flex-shrink-0 justify-center flex items-center">
              <div className=" flex flex-col items-center justify-center max-w-[373px] text-center">
                <h3 className="title flex font-bold">
                  <MoneyBagEmoji className="mr-4" /> Invite a Friend
                </h3>
                <p className="pri-text mt-[22px]">
                  Share the great news with your friends by inviting them to
                  join ThinkMusik.
                </p>
                <p className="title text-lg mt-[34px]">Your Referral Link</p>

                <Button
                  color="dark"
                  className="w-full h-[54px] mt-3 text-base font-semibold"
                >
                  https://thinkmusik.com/dh48djdrd
                </Button>

                <CopyToClipboard
                  text={"https://thinkmusik.com/dh48djdrd"}
                  onCopy={() => toast.success("Link Copied")}
                >
                  <Button className="w-full max-w-[308px] h-[55px] mt-[40px] text-base font-semibold">
                    Copy Link <ClipboardIcon className="ml-2" />
                  </Button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
