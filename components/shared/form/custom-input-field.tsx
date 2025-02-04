import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { handlePhoneNumberInput } from "@/util/number";

interface CustomInputFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  placeholder: string;
  isValid?: boolean; // 유효성 검사 여부
  validText?: string; // 유효성 검사 텍스트
  maxLength?: number; // 최대 입력 가능 글자 수
  noSpace?: boolean; // 첫 글자 공백 입력 불가 여부
  label?: string; // 라벨
  disabled?: boolean; // 비활성화 여부
  type?: "number" | "email" | "text" | "password" | "tel";
  className?: string; // 클래스명
  noMessage?: boolean; // 메시지 미표시 여부
}

const CustomInputField = <T extends FieldValues>({
  form,
  name,
  placeholder,
  isValid,
  validText,
  maxLength,
  noSpace,
  label,
  disabled,
  type,
  className,
  noMessage,
}: CustomInputFieldProps<T>) => {
  const onChangeValue = (
    value: string,
    field: ControllerRenderProps<T, Path<T>>,
  ) => {
    if (value.includes(" ")) {
      const trimmedValue = value.trim();
      field.onChange(trimmedValue);
    } else {
      if (type === "tel") {
        const phone = handlePhoneNumberInput(value);
        return field.onChange(phone);
      }
      field.onChange(value);
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label ? (
            <FormLabel className="mb-3 web:mb-2" htmlFor={name}>
              {label}
            </FormLabel>
          ) : (
            <FormLabel htmlFor={name} />
          )}
          <FormControl>
            <>
              <Input
                type={type}
                disabled={disabled}
                id={name}
                maxLength={maxLength}
                className={`disabled:mt-3 disabled:bg-black/10 ${!isValid && validText ? "border-destructive focus-visible:border-destructive" : ""} ${className}`}
                {...field}
                onChange={
                  noSpace
                    ? (e) => onChangeValue(e.target.value, field)
                    : field.onChange
                }
                placeholder={placeholder}
              />
            </>
          </FormControl>
          {!noMessage && !isValid && validText && (
            <div className="mt-2">
              <FormMessage>
                <span>{validText}</span>
              </FormMessage>
            </div>
          )}
        </FormItem>
      )}
    />
  );
};
export default CustomInputField;
