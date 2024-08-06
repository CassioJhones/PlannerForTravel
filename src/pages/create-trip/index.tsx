import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateSTep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-steps'
import type { DateRange } from 'react-day-picker'
import { api } from '../../lib/axios'
export function CreateTripPage() {
  const navigate = useNavigate()
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  const [destination, setDestination] = useState('')
  const [ownerName, setOwnerName] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const [eventStartDate, setEventStartDate] = useState<DateRange | undefined>()

  const [emailsToEnvite, setEmailsToEnvite] = useState([
    'cassioDeveloper@gmail.com',
    'cassioJhones@live.com',
  ])

  async function CreateTrip(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()

    if (!destination) {
      return
    }
    if (!eventStartDate?.from || !eventStartDate?.to) {
      return
    }
    if (emailsToEnvite.length === 0) {
      return
    }
    if (!ownerName || !ownerEmail) {
      return
    }
    
    const response = await api.post('/trips', {
      destination,
      starts_at: eventStartDate.from,
      ends_at: eventStartDate.to,
      emails_to_invite: emailsToEnvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    })

    const { tripId } = response.data
    navigate(`/trips/${tripId}`)
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
          <DestinationAndDateSTep
            CloseGuestInput={CloseGuestInput}
            isGuestInputOpen={isGuestInputOpen}
            OpenGuestInput={OpenGuestInput}
            setDestination={setDestination}
            eventStartDate={eventStartDate}
            setEventStartDate={setEventStartDate}

          />

          {isGuestInputOpen && (
            <InviteGuestsStep
              emailsToEnvite={emailsToEnvite}
              OpenConfirmTripModal={OpenConfirmTripModal}
              OpenGuestModal={OpenGuestModal}
            />
          )}
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
          CreateTrip={CreateTrip}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  )
}
