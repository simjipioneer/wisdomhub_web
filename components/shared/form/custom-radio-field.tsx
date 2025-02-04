import InfoPopOver from "@/app/(artist)/add/artwork/_components/info-pop-over";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface CustomRadioFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  radioValue: {
    value: string;
    text: string;
  }[];
  label: string;
  defaultValue?: string;
  isEssential?: boolean; // 필수 여부
  direction: "vertical" | "horizontal";
  info?: "artwork" | "settlement"; // 정보 팝오버 종류
}

const CustomRadioField = <T extends FieldValues>({
  form,
  name,
  radioValue,
  label,
  isEssential,
  defaultValue,
  direction,
  info,
}: CustomRadioFieldProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-3">
          <FormControl>
            <>
              <FormLabel
                className="flex items-center gap-[2px] subtitle-2 web:subtitle-1"
                htmlFor={name}
              >
                <p>{label}</p>
                {isEssential && <span className="text-primary">{`*`}</span>}
                {info && <InfoPopOver type={info} />}
              </FormLabel>
              <RadioGroup
                defaultValue={defaultValue}
                onValueChange={field.onChange}
                className={
                  direction === "vertical"
                    ? "flex flex-col gap-4"
                    : "flex gap-8"
                }
              >
                {radioValue.map((value) => (
                  <Label
                    className="flex items-center gap-2 body-2"
                    key={value.value}
                  >
                    <RadioGroupItem value={value.value} id={value.value} />
                    <span>{value.text}</span>
                  </Label>
                ))}
              </RadioGroup>
            </>
          </FormControl>
        </FormItem>
      )}
    />
  );
};
export default CustomRadioField;
