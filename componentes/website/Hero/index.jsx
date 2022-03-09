import Image from 'next/image'

export default function Hero(){
    return(
        <div className="relative bg-red-600 rounded right-0 top-12">
        <a href="/" className=" ml-5">
          <Image src="/images/calculator.svg" width="50" height="100" />
        </a>
      </div>
    )
}