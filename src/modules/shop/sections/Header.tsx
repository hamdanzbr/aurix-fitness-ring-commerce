import { ShieldHalf, Ship, Truck } from "lucide-react"

const Header = () => {
  return (
    <div className="p-3" >
        <div className="flex justify-between">
            <div className="space-y-3">
                <h1 className="text-3xl font-bold">Smart Fitness Rings</h1>
                <p className="text-sm text-[#A19CA5]">Discover the next generation of wearable wellness. Aerospace-grade materials meeting clinical grade insights.</p>
            </div>
            <div className="flex items-end gap-4">
                <div className="flex gap-2 items-center">
                    <Truck size={18} className="text-[#A19CA5]" />
                    <h1 className="text-sm text-[#A19CA5]">Free express shipping</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <ShieldHalf size={18} className="text-[#A19CA5]" />
                    <h1 className="text-sm text-[#A19CA5]">1 year warranty</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header