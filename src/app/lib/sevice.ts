import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function register(data: {
  fullname: string;
  email: string;
  password: string;
  role?: string;
}) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return { status: false, statusCode: 400, message: "Email Already" };
  } else {
    data.role = "member";
    data.password = await bcrypt.hash(data.password, 10);

    try {
      await addDoc(collection(firestore, "users"), data);
      return { status: true, statusCode: 200, message: "Register Success" };
    } catch (error) {
      return { status: false, statusCode: 400, message: "register failed" };
    }
  }
}

export async function login(data:{email:string}){
  const q = query(
    collection(firestore, 'userss'),
    where('email', '==', data.email)
  )

  const snapshot = await getDocs(q)
  const users =snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  if(users){
    return users[0]
  }else{
    return null
  }
}

export async function loginWithGoogle(data:any, callback:any){
  const q = query(
    collection(firestore, 'users'),
    where('email', '==', data.email)
  )

  const snapshot = await getDocs(q)
  const users: any =snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  if(users.length > 0){
    data.role = users[0].role
    await updateDoc(doc(firestore, 'users', users[0].id), data).then(() => {
      callback({status: true, data: data})
    })
  }else{
    data.role = 'member'
    await addDoc(collection(firestore, 'users'), data).then(() => {
      callback({status: true, data: data})
    })
  }
  
}