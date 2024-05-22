"use client";

import React, { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import { Icon } from "../Icon/Icon";
import { Input } from "../Input/Input";
import { useRouter } from "next/navigation";
import { FORM_FIELDS, IOrder } from "@/types";
import { sendOrder } from "@/app/actions";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderFormValidationSchema } from "@/utils";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const OrderForm = () => {
  const router = useRouter();

  const [isSent, setIsSent] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IOrder>({
    mode: "onBlur",
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: { name: "", phone: "", peopleCount: 0, isLegal: false },
  });
  const handleClose = () => {
    router.back();
  };

  async function onSubmit(data: IOrder) {
    const res = await sendOrder({
      name: data.name,
      phone: data.phone,
      peopleCount: Number(data.peopleCount),
      isLegal: data.isLegal,
    });

    if (res === 201) {
      setIsSent(true);
      reset();
    }
  }

  const closeModal = () => setIsSent(false);

  return (
    <form
      className=" p-8 h-[650px] w-[480px] bg-[#141414]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-2xl mb-10 font-extrabold text-_FFFFFF">
        Оставить заявку
      </h3>
      <div
        className="absolute top-10 right-[33px] cursor-pointer"
        onClick={handleClose}
      >
        <Icon name="icons/close" width={14} height={14} />
      </div>
      <div className="flex flex-col items-center gap-8">
        <Input
          error={errors?.name}
          control={control}
          id={FORM_FIELDS.NAME}
          placeholder="Имя"
          label="Ваше Имя"
          type="text"
        />
        <Input
          error={errors?.phone}
          control={control}
          id={FORM_FIELDS.PHONE}
          placeholder="Телефон"
          label="Контактный телефон"
          type="text"
        />
        <Input
          error={errors?.peopleCount}
          control={control}
          id={FORM_FIELDS.PEOPLE_COUNT}
          placeholder="Количество участников"
          label="Количество участников"
          type="number"
        />

        <CustomButton disabled={!isValid} title="ОТПРАВИТЬ ЗАЯВКУ" />
        <div className="flex gap-2 items-start">
          <Controller
            name={FORM_FIELDS.IS_LEGAL}
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <input
                onChange={onChange}
                value={value}
                className="h-[14px] mt-1 bg-_514321"
                type="checkbox"
                id={FORM_FIELDS.IS_LEGAL}
              />
            )}
          />
          <label
            htmlFor="agreement"
            className="text-_FFFFFF m-0 p-0 leading-none"
          >
            Я согласен с правилами обработки персональных данных и
            пользовательским соглашением
          </label>
        </div>
        {errors?.isLegal?.message && (
          <p className="text-red-500 text-left w-full -mt-6">
            * {errors?.isLegal?.message}
          </p>
        )}
      </div>
      {isSent && (
        <Popup open={isSent} closeOnDocumentClick onClose={closeModal}>
          <div className="modal p-10">
            <a
              className="close absolute top-0 right-[15px] text-[25px] cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </a>
            Ваша заявка отправлена!
          </div>
        </Popup>
      )}
    </form>
  );
};
