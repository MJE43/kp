import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function ServiceCarousel() {
  const services = [
    {
      title: "Residential Services",
      description: "Expert electrical solutions for your home, ensuring safety and efficiency.",
      image: "/images/residential-service.jpeg"
    },
    {
      title: "Commercial Services",
      description: "Powering businesses with reliable and innovative electrical installations.",
      image: "/images/commercial-services.jpg"
    },
    {
      title: "Emergency Services",
      description: "24/7 rapid response for all your urgent electrical needs.",
      image: "/images/emergency-service.png"
    },
    {
      title: "Smart Home Solutions",
      description: "Upgrade your home with cutting-edge smart technology integration.",
      image: "/images/smart-home-service.webp"
    },
    {
      title: "EV Charger Installation",
      description: "Future-proof your property with electric vehicle charging stations.",
      image: "/images/ev-charger-service.jpg"
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          {services.map((service, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-75 flex items-center justify-center">
                  <div className="text-center text-lightest">
                    <h3 className="text-3xl font-bold mb-2 text-brand">{service.title}</h3>
                    <p className="text-xl">{service.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 cursor-pointer transition-colors" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 cursor-pointer transition-colors" />
      </Carousel>
    </div>
  )
}