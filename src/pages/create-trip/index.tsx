import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2} from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
export function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToEnvite, setEmailsToEnvite] = useState([
    'cassioDeveloper@gmail.com',
    'cassioJhones@live.com',
  ])

  function CreateTrip(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault
    navigate('/detalhes/0001')
  }

  function OpenConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function CloseConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function OpenGuestInput() {
    setIsGuestInputOpen(true);
  }

  function CloseGuestInput() {
    setIsGuestInputOpen(false);
  }

  function OpenGuestModal() {
    setIsGuestModalOpen(true);
  }

  function CloseGuestModal() {
    setIsGuestModalOpen(false);
  }

  function AddNewEmailToInvite(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const data = new FormData(evento.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return // se for vazio faz nada
    if (emailsToEnvite.includes(email)) return // se já existir na lista faz nada

    setEmailsToEnvite([...emailsToEnvite, email])
    console.log(email + " - Adicionado")

    evento.currentTarget.reset()
  }

  function RemoveEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToEnvite.filter(x => x !== emailToRemove)
    setEmailsToEnvite(newEmailList)
  }
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10" >
        <div className='flex flex-col items-center gap-3'>
          <img src="/Logo.svg" alt="" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje a próxima viagem!</p>
        </div>
        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400' />
              <input disabled={isGuestInputOpen} type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400' />
              <input disabled={isGuestInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            {isGuestInputOpen ? (
              <button onClick={CloseGuestInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-3 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                Alterar local/data
                <Settings2 className='size-5' />
              </button>
            ) : (
              <button onClick={OpenGuestInput} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Continuar
                <ArrowRight className='size-5' />
              </button>
            )}
          </div>

          {isGuestInputOpen ? (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button type='button' onClick={OpenGuestModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400' />

                {emailsToEnvite.length > 0 ?
                  (
                    <span className="text-zinc-100 text-lg flex-1 text-left">{emailsToEnvite.length} pessoas convidadas</span>
                  )
                  : (
                    <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
                  )}
              </button>

              <div className='w-px h-6 bg-zinc-800' />

              <button onClick={OpenConfirmTripModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Confirmar Viagem
                <ArrowRight className='size-5' />
              </button>
            </div>
          ) : null}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda<br />
          com nossos <a href="#" className="underline text-zinc-300"> termos de uso </a> e <a href="#" className="underline text-zinc-300"> políticas de privacidade</a>.
        </p>
      </div>

      {/* CRIAÇÃO DO MODAL DE EMAILS*/}
      {isGuestModalOpen && (
        <InviteGuestModal
          emailsToEnvite={emailsToEnvite}
          AddNewEmailToInvite={AddNewEmailToInvite}
          CloseGuestModal={CloseGuestModal}
          RemoveEmailFromInvites={RemoveEmailFromInvites}
        />
      )}

      {/* CRIAÇÃO DO MODAL DE CONFIRMAÇÃO */}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
        CloseConfirmTripModal={CloseConfirmTripModal}
        CreateTrip={CreateTrip}/>
      )}


    </div>
  )
}
