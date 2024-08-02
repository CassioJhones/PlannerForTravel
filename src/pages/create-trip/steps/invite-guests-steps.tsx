import { UserRoundPlus, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

//-- Interface com as propriedades que vem do componente pai
interface InviteGuestsStepProps {
  OpenGuestModal: () => void
  OpenConfirmTripModal: () => void
  emailsToEnvite: string[]
}
export function InviteGuestsStep({ OpenGuestModal, emailsToEnvite, OpenConfirmTripModal }: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <button type='button' onClick={OpenGuestModal} className='flex items-center gap-2 flex-1'>
        <UserRoundPlus className='size-5 text-zinc-400' />

        {emailsToEnvite.length > 0 ?
          (<span className="text-zinc-100 text-lg flex-1 text-left">{emailsToEnvite.length} pessoas convidadas</span>)
          : (<span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>)}
      </button>

      <div className='w-px h-6 bg-zinc-800' />

      <Button onClick={OpenConfirmTripModal} Cor="verde" Tamanho="padrao">
        Confirmar Viagem
        <ArrowRight className='size-5' />
      </Button>
    </div>

  )
}