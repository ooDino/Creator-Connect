import Navbar from '../components/Navbar'
import '../index.css';



function Landingpage({ user, logout }){
    return (
        <div class="min-h-[2000px] min-w-[900px] h-screen w-screen ">
            <Navbar user={user} logout={logout}/>
            <div class='bg-gradient-to-b from-stone-950 from-10% via-slate-800 via-40% to-stone-950 to-90% h-full'>
                <div class="bg-star-pattern box-border shadow-xl h-96 w-auto items-center border-2 text-white">
                    <div class=" h-50" >
                        <div class="flex justify-center mt-20 columns-2">
                            <div class="flex flex-col space-y-10 text-center tracking-widest font-mygasoek">
                                <div class="text-6xl">Creator Connect</div>
                                <div class="text-2xl">Connect with your ideal content creating partner!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center w-auto font-mygasoek">
                    <div class="my-20 text-center box-border rounded-full shadow-xl bg-white h-[250px] w-4/6 min-w-[800px] max-w-[1300px] border-4 rounded-lg my-10 truncate">             
                        <h1 class="text-3xl my-5">Welcome!</h1>
                        <p class="mysubtext whitespace-break-spaces text-xl">
                            Ever had trouble breaking the ice with other content creators?
                            Well look no further!
                            We aim to allow creators to connect to each other anxiety free!
                            We serve as the first step to creating your beautiful partnerships wether it is for business moves or friendships
                            we got you covered!
                        </p>
                    </div>
                </div>
                <div class="animate-infinitetransition h-[300px] w-full text-slate-50/20">
                    <div class="w-[1470px] text-8xl font-mygasoek font-white underline">CREATOR CREATE CONNECT</div>
                    <div class="w-[1470px] text-8xl font-mygasoek underline">CREATE CONNECT CREATOR</div>
                    <div class="w-[1470px] text-8xl font-mygasoek">CONNECT CREATOR CREATE</div>
                </div>
            </div>
        </div>
      );
}

export default Landingpage;