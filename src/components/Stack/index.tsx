import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const stack = cva(["flex"], {
  variants: {
    flexDirection: {
      row: ["flex-row"],
      column: ["flex-col"],
    },
    alignItems: {
      start: ["items-start"],
      center: ["items-center"],
      end: ["items-end"],
    },
    justifyContent: {
      start: ["justify-start"],
      center: ["justify-center"],
      end: ["justify-end"],
    },
    gap: {
      xs: ["gap-xs"],
      s: ["gap-s"],
      m: ["gap-m"],
      l: ["gap-l"],
    },
  },
  defaultVariants: {
    flexDirection: "row",
    gap: "s",
  },
});

type CVAProps = VariantProps<typeof stack>;

export function Stack({
  children,
  alignItems,
  flexDirection,
  justifyContent,
  gap,
  ...rest
}: Omit<ComponentPropsWithoutRef<"div">, "className"> & CVAProps) {
  return (
    <div
      className={stack({
        alignItems,
        flexDirection,
        justifyContent,
        gap,
      })}
      {...rest}
    >
      {children}
    </div>
  );
}
