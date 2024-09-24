const callouts = [
    {
        name: 'Angular',
        description: 'VagoMX',
        imageSrc: '../public/img/proyectos/VAGOMX.png',
        imageAlt: '',
        href: 'https://vagomx-brandon.netlify.app/',
    },
    {
        name: 'React',
        description: 'GuitarLA - Venta de Guitarras',
        imageSrc: '../public/img/proyectos/GUITARLA.png',
        imageAlt: '',
        href: 'https://guitarla-brandon.netlify.app/',
    },
    {
        name: 'Angular',
        description: 'FrontEnd Store',
        imageSrc: '../public/img/proyectos/FRONTEND-STORE.png',
        imageAlt: '',
        href: 'https://web-store-brandon.netlify.app/',
    },
    {
        name: 'Angular',
        description: 'Pokedex',
        imageSrc: '../public/img/proyectos/POKEDEX.png',
        imageAlt: '',
        href: 'https://pokedex-brandon.netlify.app/pokemones/listado',
    },
    {
        name: 'React',
        description: 'Calculadora de Consumo',
        imageSrc: '../public/img/proyectos/CALCULADORACONSUMO.png',
        imageAlt: '',
        href: 'https://calculadora-consumo-brandon.netlify.app/',
    },
    {
        name: 'Angular',
        description: 'Web Freelancer',
        imageSrc: '../public/img/proyectos/WEB-FREELANCER.png',
        imageAlt: '',
        href: 'https://web-freelancer-brandon.netlify.app/',
    },
    {
        name: 'HTML + CSS',
        description: 'Bouncing DVD',
        imageSrc: '../public/img/proyectos/DVD.png',
        imageAlt: '',
        href: 'hhttps://bouncing-dvd-brandon.netlify.app/',
    }
]

export default function Proyectos() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-none">
                    <h2 className="text-4xl font-bold text-gray-900 flex justify-center">Portafolio</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.description} className="group relative lg:p-2 lg:last:-col-end-2">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 lg:shadow-2xl">
                                    <img
                                        alt={callout.imageAlt}
                                        src={callout.imageSrc}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href} target="_blank">
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
