import type { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg px-3 font-medium flex justify-center items-center gap-2',

  variants: {
    Cor: {
      verde: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      cinza: 'bg-zinc-800 text-zinc-200  hover:bg-zinc-700',
      branco: 'bg-zinc-100 text-zinc-950  hover:bg-zinc-300'
    },

    Tamanho:{
      padrao:'py-2',
      cheio:'w-full h-11',
    },
  },
  defaultVariants: {
    Cor: 'verde',
    Tamanho:'padrao',
  }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}
export function Button({ children, Cor,Tamanho ,...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ Cor,Tamanho })}>
      {children}
    </button>

  )
}