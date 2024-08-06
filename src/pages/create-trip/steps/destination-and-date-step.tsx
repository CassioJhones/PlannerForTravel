import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

//-- Interface com as propriedades que vem do componente pai
interface DestinationAndDateSTepProps {
  isGuestInputOpen: boolean
  CloseGuestInput: () => void
  OpenGuestInput: () => void
}
export function DestinationAndDateSTep({ isGuestInputOpen, CloseGuestInput, OpenGuestInput }: DestinationAndDateSTepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [eventStartDate, setEventStartDate] = useState<DateRange | undefined>()

  function OpenDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function CloseDatePicker() {
    return setIsDatePickerOpen(false)
  }

  const DataExibida = eventStartDate && eventStartDate.from && eventStartDate.to
    ? format(eventStartDate.from, "d' de ' LLL").concat(' até ').concat(format(eventStartDate.to, "d ' de ' LLL"))
    : null

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400' />
        <input disabled={isGuestInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
      </div>

      <button onClick={OpenDatePicker} disabled={isGuestInputOpen} className='flex items-center gap-2 text-left w-[240px]'>
        <Calendar className='size-5 text-zinc-400' />
        <span className="text-lg text-zinc-400 w-40 flex-1" >
          {DataExibida || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center'>
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900/90 space-y-5">
            <div className='space-y-2'>
              <div className="flex items-center justify-between">
                <h2 className='text lg font-semibold'>Selecionar data</h2>
                <button type="button" onClick={CloseDatePicker}>
                  <X className='size-5  text-zinc-400' />
                </button>
              </div>

            </div>

            <DayPicker mode="range" selected={eventStartDate} onSelect={setEventStartDate} />
          </div>
        </div>
      )}

      <div className='w-px h-6 bg-zinc-800' />

      {isGuestInputOpen ? (
        <Button onClick={CloseGuestInput} Cor="cinza" Tamanho="padrao">
          Alterar local/data
          <Settings2 className='size-5' />
        </Button>
      ) : (
        <Button onClick={OpenGuestInput} Cor="verde" Tamanho="padrao">
          Continuar
          <ArrowRight className='size-5' />
        </Button>


      )}
    </div>

  )
}