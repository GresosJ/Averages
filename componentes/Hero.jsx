import Image from 'next/image'

export default function Hero(){
    return(
    <div class="relative bg-primary">
    <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 sm:py-8">
      <div class="flex items-center flex-1">
        <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <Image src="/images/calculator.svg" width="50" height="100" />
            </a>
        </div>
        <div class="hidden md:block md:ml-10 md:space-x-10">
          <a href="#" class="font-medium text-secondary hover:text-gray-900">Cursos</a>
          <a href="https://github.com/GresosJ" class="font-medium text-secondary hover:text-gray-900">About me</a>  
        </div>
      </div>
    </nav>
  </div>
    )
}