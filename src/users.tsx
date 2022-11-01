export default function Users(){
    const kullanicilar:string[]=["user1","user2","user3","user4"];

    return(
        <>
            {kullanicilar.map((kullanici,index)=>
                <h1 key={index}>{kullanici}</h1>
            )}
        </>
    )
}