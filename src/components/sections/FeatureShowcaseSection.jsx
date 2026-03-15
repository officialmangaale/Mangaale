import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import { ChefHat, CreditCard, Boxes, Truck, QrCode, BarChart3 } from 'lucide-react'

const items = [
  {
    Icon: CreditCard,
    title: 'Billing + Inventory',
    text: 'Keep billing and stock in sync with one connected workflow.'
  },
  {
    Icon: ChefHat,
    title: 'Kitchen Display',
    text: 'Give kitchen teams a clean live view of every active order.'
  },
  {
    Icon: QrCode,
    title: 'QR Ordering',
    text: 'Let guests browse, order, and pay from their own phone.'
  },
  {
    Icon: Truck,
    title: 'Delivery',
    text: 'Manage online orders with a branded flow from cart to dispatch.'
  },
  {
    Icon: Boxes,
    title: 'Inventory',
    text: 'Track stock, low inventory, and purchase needs in real time.'
  },
  {
    Icon: BarChart3,
    title: 'Analytics',
    text: 'See the numbers that matter without digging through reports.'
  }
]

const FeatureShowcaseSection = () => {
  return (
    <SectionReveal className="mx-auto w-[92%] max-w-7xl">
      <div className="mangaale-shell p-8 md:p-10">
        <SectionHeader
          eyebrow="Inside the platform"
          title="Everything works as one system"
          description="Orders, stock, kitchen, and delivery stay connected in real time."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0f1320] p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mangaale-accent/15 text-mangaale-accent">
                <item.Icon size={22} />
              </div>
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="mt-3 text-sm text-mangaale-ink-soft">{item.text}</p>
              <div className="mt-6 h-36 rounded-xl border border-white/10 bg-[#151828]" />
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}

export default FeatureShowcaseSection
