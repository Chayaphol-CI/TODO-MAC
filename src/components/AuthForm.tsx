import React from "react";
import Text from "./Text";
import Input from "./Input";
import Image from "next/image";
import Chekbox from "@/src/components/Checkbox";
import ActionButton from "./ActionButton";
import Link from "next/link";
import FacebookIcon from "@/public/icons/facebook.svg";
import GoogleIcon from "@/public/icons/google.svg";
import XIcon from "@/public/icons/x.svg";

interface AuthFormComponentsProps {
  type: "sign-in" | "sign-up";
}

const classes = {
  flexRow: "flex flex-row",
};

const AuthFormComponents = ({ type }: AuthFormComponentsProps) => {
  return (
    <>
      {type === "sign-in" ? (
        <div className="flex flex-row ">
          <div className="flex-alignt-left flex-auto flex-col gap-6 ">
            <Text className={"text-3xl text-black font-bold"}>Sign In</Text>
            <Input
              icon={"/icons/user.svg"}
              className={
                "border border-black-input text-gray-placeholder rounded-lg"
              }
              placeholder="Enter Username"
            />
            <Input
              icon={"/icons/lock.svg"}
              className={
                "border border-black-input text-gray-placeholder rounded-lg"
              }
              placeholder="Enter Password"
            />
            <div className="flex flex-row flex-center gap-6">
              <Chekbox />
              <Text className={" text-black font-normal"}>Rememberme</Text>
            </div>
            <ActionButton
              type="normal"
              text="Login"
              className="bg-red-button rounded-lg h-[60px] w-[129px]"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <Text className="text-black mr-3">Or, Login with</Text>
                <div className="flex flex-row gap-2">
                  <FacebookIcon />
                  <GoogleIcon />
                  <XIcon />
                </div>
              </div>
              <Text className="text-black">
                {"Don't have an accout?"}{" "}
                <Link href={"sign-up"} className="text-[#008BD9] font-semibold">
                  Create one
                </Link>
              </Text>
            </div>
          </div>
          <div className="flex-center flex-auto">
            <div className="">
              <Image
                src="/images/auth-pic.png"
                width={400}
                height={400}
                alt="sign-in"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.flexRow}>
          <Text className={"text-3xl text-black font-bold"}>Sign Up</Text>
        </div>
      )}
    </>
  );
};
export default AuthFormComponents;
