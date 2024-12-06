import Header from "../components/Header";
import SearchForm from "../components/SearchForm";




export default function HomeView() {
    return (
        <>
            <Header />

            <main className="bg-gray-100 min-h-screen py-5 bg-no-repeat bg-right-top lg:bg-home lg:bg-home-xl ">
                <div className="max-w-5xl mx-auto mt-10">
                    <div className="lg:w-1/2 px-10 lg:p-0 space-y-6">
                        <h1 className="text-6xl font-bold">Todas tus
                            <span className="text-blue-500"> Redes sociales</span> en un solo lugar
                        </h1>

                        <p className="text-xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <SearchForm />
                        
                    </div>
                </div>
            </main>
          
            
        </>
    )
}
