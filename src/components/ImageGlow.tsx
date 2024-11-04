import { cn } from "../utils/cn";

export interface ImageGlowProps extends React.HTMLProps<HTMLDivElement> {
  url: string;
  size?: number;
  blurAmount?: number;
  shadowSize?: number;
}

export default function ImageGlow({
  url,
  size = 40,
  shadowSize = 0,
  blurAmount = 10,
  ...rest
}: ImageGlowProps) {
  return (
    <div
      {...rest}
      style={
        {
          "--url": `url("${url}")`,
          "--size": size,
          "--shadowSize": shadowSize,
          "--blurAmount": blurAmount,
        } as React.CSSProperties
      }
      className={cn(
        "bg-[image:var(--url)] relative",
        "w-[calc(var(--size)*1px)] h-[calc(var(--size)*1px)]",
        "bg-contain bg-center bg-no-repeat",
        "after:content-['']",
        "after:absolute after:top-[calc((var(--shadowSize)*-1rem)/2)] after:left-[calc((var(--shadowSize)*-1rem)/2)]",
        "hover:after:bg-[image:var(--url)]",
        "after:w-[calc(100%+var(--shadowSize)*1rem)] after:h-[calc(100%+var(--shadowSize)*1rem)]",
        "after:bg-contain after:bg-no-repeat after:blur-[calc(var(--blurAmount)*1px)] after:-z-[1]",
        rest?.className
      )}
    />
  );
}
