
export interface User {
    id: number,
    username: string,
    password: string //probably don't want/need to store a password in the front end
}


//AppState is an object that will store one of each datatype in our global store 
//note the type keyword... it's like calling something an object in Java. It's a "data type"
export type AppState = {
    user: User,
 
}