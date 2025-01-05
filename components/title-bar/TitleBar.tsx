import cn from "clsx";

export interface ITitleBar extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  children?: React.ReactNode;
}

export function TitleBar({ label, children, className, ...rest }: ITitleBar) {
  return (
    <div className={cn("p-12 flex items-center justify-between border-b border-b-zinc-200", className)} {...rest}>
      <p className="font-medium text-xl">{label}</p>
      {children}
    </div >
  )
}
