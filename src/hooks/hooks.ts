import axios from "axios";

export const resetMail = (token:string |null)=> {
    return (axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/reset`,{
        headers: {
            'authorization': `Bearer ${token}`
        }
    }).then ((res) => {
        console.log(res)
        return res
    })
    .catch(err => console.log(err)))
};