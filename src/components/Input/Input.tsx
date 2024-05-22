import { FORM_FIELDS, IOrder, ISignUp } from "@/types";
import React from "react";
import { Control, FieldError, Controller } from "react-hook-form";

interface IInput {
  control: Control<IOrder> | Control<ISignUp>;
  id:
    | FORM_FIELDS.NAME
    | FORM_FIELDS.PHONE
    | FORM_FIELDS.PEOPLE_COUNT
    | FORM_FIELDS.IS_LEGAL
    | FORM_FIELDS.EMAIL
    | FORM_FIELDS.PASSWORD;

  placeholder: string;
  type: string;
  label: string;
  error: FieldError | undefined;
}
export const Input = ({
  control,
  id,
  placeholder,
  type,
  label,
  error,
}: IInput) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-_E6E6E6 text-[15px]" htmlFor={id}>
        {label}
      </label>
      <Controller
        control={control}
        name={id}
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-1 items-start relative">
              <input
                id={id}
                placeholder={placeholder}
                type={type}
                className=" text-_FFFFFF rounded-[3px] w-[400px] h-[53px] border-[1px] border-_FFFFFF p-y-4 px-6 bg-transparent"
                {...field}
              />
              {error?.message && (
                <p className="text-red-500 absolute -bottom-[25px]">
                  * {error.message}
                </p>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};
