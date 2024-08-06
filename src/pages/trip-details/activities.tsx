import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Activity {
  date: string
  acitivies: {
    id: string
    title: string
    occurs_at: string
  }[]
}

export function Activities() {
  const { tripId } = useParams()
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/activities`).then(Response => setActivities(Response.data.activities))
  }, [tripId])

  return (
    <div className="space-y-8">

      {activities.map(atividade => {
        return (
          <div className="space-y-2.5">
            <div className=" flex gap-2 items-baseline">
              <span className="text-xl text-zinc-300 font-semibold">Dia {format(atividade.date, 'd')}</span>
              <span className="text-xs text-zinc-500">{format(atividade.date, 'EEEE',{locale:ptBR})}</span>
            </div>
            {atividade.acitivies.length>0
            ?(
              <div></div>
            )
            :(<p className="text-zinc-500 text-sm">Nenhuma atividade encontrada nessa data.</p>)
            }
            
          </div>

        )
      })}



      
    </div>

  )
}