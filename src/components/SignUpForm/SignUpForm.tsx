"use client";

import { CustomButton, Input } from "@/components";
import { FORM_FIELDS, ISignUp } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { signUpFormValidationSchema } from "@/utils";
import { logIn, signUp } from "@/app/actions";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { usePathname, useRouter } from "next/navigation";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

import Link from "next/link";
import { ROUTES } from '@/constants';

const existedError = "P2002";

export const SignUpForm = () => {
  const router = useRouter();

  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<ISignUp>({
    mode: "onSubmit",
    resolver: zodResolver(signUpFormValidationSchema),
    defaultValues: { email: "", password: "" },
  });

  const isLogin = usePathname() === ROUTES.LOGIN;

  const [isSent, setIsSent] = useState<boolean>(false);
  const [isExisted, setIsExisted] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisible = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, [setIsPasswordVisible]);

  const onSignUpSubmit = async (data: ISignUp) => {
    const res = await signUp(data);
    setIsSent(true);
    if (res?.status === "ok") {
      setIsExisted(false);
      router.push("/");
    } else if (res?.status === existedError) {
      setIsExisted(true);
    }
  };

  const onLoginSubmit = async (data: ISignUp) => {
    const res = await logIn(data);
    if (res?.status === "ok") {
      router.push("/");
    }
  };

  const closeModal = useCallback(() => {
    setIsSent(false);
    if (!isExisted) {
      router.replace("/login");
    }
  }, [router, setIsSent, isExisted]);

  return (
    <form
      className="flex flex-col gap-6 mt-6 items-center"
      onSubmit={handleSubmit(isLogin ? onLoginSubmit : onSignUpSubmit)}
    >
      <Input
        control={control}
        placeholder="Введите адрес электронной почты"
        label="Ваш электронный адрес"
        id={FORM_FIELDS.EMAIL}
        type="email"
        error={errors?.email}
      />
      <div className="relative">
        <Input
          control={control}
          placeholder="Введите пароль"
          label="Ваш пароль"
          id={FORM_FIELDS.PASSWORD}
          type={isPasswordVisible ? "text" : "password"}
          error={errors?.password}
        />
        <button
          onClick={handlePasswordVisible}
          className="absolute text-_FFFFFF right-[13px] top-[53px]"
          type='button'
        >
          {isPasswordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </button>
      </div>

      {!isLogin && (
        <p className="text-_FFFFFF w-[400px]">
          Пароль должен содержать не менее 8 символов, минимум одну заглавную и
          прописную букву, минимум одну цифру и один специальный символ
        </p>
      )}

      <div className="mt-4">
        <CustomButton
          title={!isLogin ? "Зарегистрироваться" : "Войти"}
          disabled={!isValid}
        />
      </div>

      <Link className="text-_FFFFFF" href={isLogin ? "/signup" : "/login"}>
        {isLogin ? "Зарегистрироваться" : "Войти"}
      </Link>

      <Popup open={isSent} closeOnDocumentClick onClose={closeModal}>
        <div className="modal p-10">
          <a
            className="close absolute top-0 right-[15px] text-[25px] cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </a>
          {!isExisted
            ? "Вы успешно зарегистрировались!"
            : "Пользовательс такими данными уже существует!"}
        </div>
      </Popup>
    </form>
  );
};
