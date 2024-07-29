import { Calendar, Check, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, Tag, UserCog, X } from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

  function OpenCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function CloseCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-centern justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Rio Claro</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">16 a 20 de Outubro</span>
          </div>

          <div className='w-px h-6 bg-zinc-800' />

          <button className='bg-zinc-800 text-zinc-200 rounded-lg px-3 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
            Alterar local/data
            <Settings2 className='size-5' />
          </button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={OpenCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
              <Plus className='size-5' />
              Cadastrar Atividades
            </button>
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className=" flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">Nenhuma atividade encontrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
              <div className=" flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em Grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Almoço em Grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
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
            <button className='bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg  px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
              <Plus className='size-5' /> Cadastrar Novo Link </button>
          </div>
          <div className='w-full h-px bg-zinc-800' />
          <div></div>
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Jessica White</span>
                  <span className="block text-sm text-zinc-400 truncate">
                    jeswhite@yahoo.com
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">Steven Strange</span>
                  <span className="block text-sm text-zinc-400 truncate">
                    drstrange@gmail.com
                  </span>
                </div>
                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              </div>

            </div>
            <button className='bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg  px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
              <UserCog className='size-5' /> Gerenciar Convidados </button>
          </div>


        </div>
      </main>

      {isCreateActivityModalOpen && (

        <div className='fixed inset-0 bg-black/80 flex items-center justify-center'>
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900/90 space-y-5">
            <div className='space-y-2'>
              <div className="flex items-center justify-between">
                <h2 className='text lg font-semibold'>Cadastrar Atividade</h2>
                <button>
                  <X className='size-5  text-zinc-400' />
                </button>
              </div>
              <p className='text-sm text-zinc-400'>
                Todos os convidados podem visualizar as Atividades
              </p>
            </div>

            <form className='space-y-3'>
              <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                <Tag className='text-zinc-400 size-5' />
                <input
                  type="text" name='title'
                  placeholder="Qual a atividade"
                  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1" />
              </div>

              <div className="flex items-center gap-2">
                <div className='h-14 flex-1 px-4  bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                  <Calendar className='text-zinc-400 size-5' />
                  <input
                    type="datetime-local" name='occurs_at'
                    placeholder="Data e horario da atividade"
                    className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1 [color-scheme:dark]" />
                </div>

              </div>

              <button type='submit' className='bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Salvar Atividade
                <Check className='size-5' />
              </button>
            </form>
          </div>
        </div>
      )}


    </div>
  )
}