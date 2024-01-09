import { useAddAccountsMutation, useDeleteAccountsMutation, useGetAccountsQuery, useUpdateAccountsMutation } from "../../redux/api/adminSlice";



const Admin = () => {


    // ab me ise destructure kr raha hun object me jese data,error,isLoading
    // or ye prebuild hain sab
    const { data, error, isLoading, isSuccess } = useGetAccountsQuery();

    // jab request get krta hai to loading state or
    // jab request sucessfull ho jati hai or data me data ajataa hai or agr fail hoti hai to 
    // error ajata hai ye hook apne ap sb kr leta hai
    // apko kuch sochna nahi nai hai na he actions banane hai sab auto hota hai isme 



    // yaha 1 array hoga uper waly me object tha
    const [addAccount, response] = useAddAccountsMutation();


    const [deleteAccount] = useDeleteAccountsMutation();


    const [updateAccount] = useUpdateAccountsMutation();




    return (
        <div>
            <div className="container">
                <h4>
                    <b style={{ color: "red" }}>Admin Component</b>
                </h4>



                {
                    isLoading ? <p style={{color:'wheat'}}>Loading........</p> : null
                }




                {/* ab ham isko use krke dekhty hai to data me data ajaye ga */}
                {/* ab me manta ho agr data aye ga to 1 array me ayega */}
                {/* data && is se kya hoga ke jab tk data ke value nai ayege tb tk ye chalega nahi warna ye error through krne lag jaye ga */}


                {
                    isSuccess &&
                    data && data.map(accounts =>
                        <p style={{ color: "white" }}>{accounts.id} : {accounts.amount}

                            <button onClick={() => deleteAccount(accounts.id)}>Delete Account</button>


                            {/* is me id or balance 1 sath object me bhejna hoga */}
                            <button onClick={() => updateAccount({ id: accounts.id, amount: 777 })}>Update Account</button>
                        </p>)
                }

                {/* is me ham 2 chezen enter krenge 1 account ki raqam or dosre id */}
                <button onClick={() => addAccount(101, data.length + 1)}>Add Account</button>
            </div>
        </div>
    )
}

export default Admin;






