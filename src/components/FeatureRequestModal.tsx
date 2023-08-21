"use client";
import MoneyBagEmoji from "@/assets/icons/emoji-money-bag.svg";
import { selectLayoutState, toggleShowFeatureRequest } from "@/redux/features";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Modal, Textarea } from "flowbite-react";

export default function FeatureRequestModal() {
  const dispatch = useAppDispatch();
  const { showFeatureRequest } = useAppSelector(selectLayoutState);
  return (
    <>
      <Modal
        size={"4xl"}
        show={showFeatureRequest}
        onClose={() => dispatch(toggleShowFeatureRequest())}
        dismissible
      >
        <Modal.Body className="min-h-[587px] p-0 relative">
          <button
            onClick={() => dispatch(toggleShowFeatureRequest())}
            className="absolute hover:bg-red-500 dark:hover:bg-red-500 dark:hover:bg-opacity-100 hover:text-white text-center right-5 top-5 rounded-full h-[41px] w-[41px] bg-black bg-opacity-5 dark:bg-opacity-100 dark:bg-white"
          >
            X
          </button>

          <div className="flex items-stretch h-[587px] max-h-[90vh]">
            <div className="w-full rounded-tl-[40px] rounded-bl-[40px] hidden sm:block  max-w-[390px] bg-[url(/request.png)] h-full bg-cover bg-no-repeat"></div>
            <div className="flex-grow p-4 justify-center flex items-center">
              <div className=" flex flex-col items-center justify-center w-full max-w-[436px] text-center">
                <h3 className="title flex font-bold">
                  <MoneyBagEmoji className="mr-4" /> Request for a Feature
                </h3>
                <p className="pri-text mt-[22px] mb-[30px] w-full max-w-[410px] mx-auto">
                  What feature do you suggest in ThinkMusik&apos;s next update ?
                </p>
                <Textarea
                  className="text-sm border-none min-h-[168px]"
                  rows={7}
                  placeholder="I would like to suggest "
                />

                <Button
                  color="dark"
                  size="lg"
                  className="w-full max-w-[308px] h-[46px] mt-[30px] text-base font-semibold text-white enabled:bg-primary-blue dark:enabled:bg-primary-blue"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
