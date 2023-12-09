import Navbar from '../components/Navbar'
import '../index.css';



function Landingpage(){
    return (
        <div class="min-h-[2000px] min-w-[900px] h-screen w-screen">
            <Navbar />
            <div class='bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-full'>
                <div class="box-border shadow-xl h-96 w-auto items-center border-4 text-white">
                    <div class=" h-50" >
                        <div class="flex justify-center mt-20 columns-2">
                            <div class="flex flex-col space-y-10 text-center tracking-widest">
                                <div class="text-6xl">Creator Connect</div>
                                <div class="text-2xl">Connect with your ideal content creating partner!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center w-auto">
                    <div class="my-20 text-center box-border rounded-full shadow-xl bg-white h-96 w-4/6 min-w-[800px] max-w-[1300px] border-4 rounded-lg my-10 truncate">             
                        <h1 class="text-6xl my-5 font-extrabold">Welcome!</h1>
                        <p class="mysubtext whitespace-break-spaces">
                            Ever had trouble breaking the ice with other content creators?
                            Well look no further!
                            We aim to allow creators to connect to each other anxiety free!
                            We serve as the first step to creating your beautiful partnerships wether it is for business moves or friendships
                            we got you covered!
                        </p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
      );
}

export default Landingpage;