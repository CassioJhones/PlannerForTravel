import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, Divide, X, Hand, AtSign, Plus } from 'lucide-react'
import { useState, type FormEvent } from 'react'
export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false)
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false)
  const [emailsToEnvite, setEmailsToEnvite] = useState([
    'cassioDeveloper@gmail.com',
    'cassioJhones@live.com',
  ])

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

    if (!email) return
    if (emailsToEnvite.includes(email)) return

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
                <span className="text-zinc-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
              </button>

              <div className='w-px h-6 bg-zinc-800' />

              <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
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

      {/* CRIAÇÃO DO MODAL */}

      {isGuestModalOpen && (
        <div className='fixed inset-0 bg-black/80 flex items-center justify-center'>
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900/90 space-y-5">
            <div className='space-y-2'>
              <div className="flex items-center justify-between">
                <h2 className='text lg font-semibold'>Selecionar Convidados</h2>
                <button>
                  <X onClick={CloseGuestModal} className='size-5  text-zinc-400' />
                </button>
              </div>
              <p className='text-sm text-zinc-400'>
                Os convidados irão receber e-mails para confirmar a participação na viagem.
              </p>
            </div>

            <div className='flex flex-wrap gap-2'>  {/* EMAILS */}

              {emailsToEnvite.map(email => {
                {/* PARA CADA ITEM DESSE ARRAY ELE CRIA ESSA DIV COM ITENS */ }
                return (
                  <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                    <span className='text-zinc-300'>{email}</span>
                    <button type='button' onClick={() => RemoveEmailFromInvites(email)}>
                      <X className='size-4 text-zinc-400 hover:text-zinc-200' />
                    </button>
                  </div>
                )
              })}

            </div>

            <div className='w-full h-px bg-zinc-800' />

            <form onSubmit={AddNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
              <div className='px-2 flex items-center flex-1 gap-2'>
                <AtSign className='text-zinc-400 size-5' />
                <input
                  type="email"
                  name='email'
                  placeholder="Digite o e-mail do convidado"
                  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1" />
              </div>
              <button type='submit' className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                Convidar
                <Plus className='size-5' />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  )
}
