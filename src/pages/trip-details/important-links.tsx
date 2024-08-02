import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do AirbNb</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/6541894651651964s32d1as56113a1sd9
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">Reserva do Instagram</span>
            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.instagram.com.br/rooms/654erter516519648ertert5461ertert
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

      </div>

      <Button Cor="cinza" Tamanho="cheio">
        <Plus className='size-5' />
        Cadastrar Novo Link
      </Button>
    </div>
  )
}