

// export async function uploadUserProfileImage(
//     supabase,
//     userId,
//     file,
//     bucket,
//     profileColumn,

//     ){
//         return new Promise(async (resolve,reject)=>{
//             const newName = Date.now() + file.name;
//       const { data, error } = await supabase.storage
//         .from(bucket)
//         .upload(newName, file);

      

//       if (error) throw error;
//       if (data) {
//         const url =
//           process.env.NEXT_PUBLIC_SUPABASE_URL +
//           `/storage/v1/object/public/covers/${bucket}` +
//           data.path;
//         supabase
//           .from("profiles")
//           .update({
//             [profileColumn]: url,
//           })
//           .eq("id", userId)
//           .then(result =>{
//             if(!result.error){
//               resolve();
//             }else{
//                 throw result.error;
//             }
//           });
//       }
//         })
    
      
// }
// export default function UserSessionY(){
//     return getSession = () => {
//             return new Promise(async (resolve, reject) => {
//                 try {
//                     const {
//                         data: {
//                             session
//                         }
//                     } = await supabase.auth.getSession();
        
//                     resolve(session.user.id);
//                 } catch (error) {
//                     reject(error);
//                 }
//             });
//         }
        
        // Call the function and handle the result using then/catch
    //     getSession()
    // .then(sessionObject => {
    //     // Now you can use the sessionObject as needed
    //     console.log("session object: ",sessionObject);
    //     // console.log("Session object id: ",sessionObject.user.id);
    // })
    // .catch(error => {
    //     console.error("Error getting session:", error);
    // });
             
// }