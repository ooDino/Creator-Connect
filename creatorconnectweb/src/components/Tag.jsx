import '../index.css';

function Tag(props){

    return(
        <div class="flex justify-center items-center box-border border-white min-h-[50px] min-w-[50x] w-autp max-h-[50px] border-[10px] mx-[4px] px-[5px] rounded-2xl bg-slate-200">
            <h1>
                {props.tagname}
            </h1>
        </div>
    )
}

export default Tag;