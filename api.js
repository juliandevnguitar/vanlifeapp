// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { collection, getFirestore, getDocs, doc, getDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Supabase Import
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const url = "https://pwswyoblaxvcjufsyrpz.supabase.co"
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3c3d5b2JsYXh2Y2p1ZnN5cnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0Mjg3NzYsImV4cCI6MjAyMTAwNDc3Nn0.QGdaIAEcWJ_z7ITgx55zGrIi88OJi4aeJyCwf0Lwvcw"

const supabase = createClient(url, apiKey)

export async function getVans(){
    try {
        // Realiza la consulta a la tabla "vans"
        const { data, error } = await supabase
          .from('vans')
          .select('*'); // '*' selecciona todas las columnas, puedes especificar las columnas deseadas si lo prefieres
    
        if (error) {
          throw error;
        }
    
        // Muestra los datos obtenidos
       return data;
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
   
}

export async function getVan(id) {
    try {
        // Realiza la consulta a la tabla "vans" filtrando por la ID proporcionada
        const { data, error } = await supabase
          .from('vans')
          .select('*')
          .eq('id', id)
          .single(); // Devuelve solo un resultado ya que se espera una única coincidencia
    
        if (error) {
          throw error;
        }
    
        // Muestra los datos obtenidos
       return data;
      } catch (error) {
        console.error('Error al obtener la van:', error.message);
      }

  

}

export async function getHostVans() {

  try {
    const {data , error} = await supabase
    .from('vans')
    .select('*')
    .eq('hostid', "789")
    console.log(data)
    if (error) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  return data
  } catch(error) {
    console.error('Failed to get vans: ', error)
  }
  
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}