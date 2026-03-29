import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="mangaale-card-hover">
      <button
        type="button"
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="font-semibold text-mangaale-text text-[15px]">{item.question}</span>
        {open ? <ChevronUp size={18} className="text-mangaale-primary flex-shrink-0" /> : <ChevronDown size={18} className="text-mangaale-subtext flex-shrink-0" />}
      </button>
      {open && <p className="px-5 pb-4 text-sm text-mangaale-subtext leading-relaxed">{item.answer}</p>}
    </div>
  )
}

export default FAQItem
