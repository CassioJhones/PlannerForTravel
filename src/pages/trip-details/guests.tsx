import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface Participant {
  id: string
  name: string | null
  email: string
  isConfirmed: boolean
}

export function Guests() {

  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(Response => setParticipants(Response.data.participants))
  }, [tripId])
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">

        {participants.map((convidado,index) => {
          return (
            <div key={convidado.id} className="flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">{convidado.name?? `Convidado ${index}`}</span>
                <span className="block text-sm text-zinc-400 truncate">
                  {convidado.email}
                </span>
              </div>
              {convidado.isConfirmed
                ? (<CheckCircle2 className="text-green-400 size-5 shrink-0" />)
                : (<CircleDashed className="text-zinc-400 size-5 shrink-0" />)}

            </div>
          )
        })}





      </div>

      <Button Cor="cinza" Tamanho="cheio">
        <UserCog className='size-5' />
        Gerenciar Convidados
      </Button>
    </div>

  )
}