const form = document.querySelector('.login-form');
const submitButton = document.querySelector('.form-button');

const SUPABASE_URL = "https://zqzdgwgivleftrretkjc.supabase.co";
const SUPABASE_KEY  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxemRnd2dpdmxlZnRycmV0a2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUxMTAzNzksImV4cCI6MjAxMDY4NjM3OX0.n8nqO513dOkwe6D2rp81GQYZcZflVa6JKtvHmtfdMH4";
const { createClient } = supabase;

const client = createClient(SUPABASE_URL, SUPABASE_KEY);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById('password');  

const auth = sessionStorage.getItem('auth');

async function logIn() {
    const { user, error } = await client.auth.signInWithPassword({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    });

    if(error) {
        console.error("user login error:", error.message);
        alert(error.message);
    } else {
        console.log("user logged in", user);
        sessionStorage.setItem('authInfo', JSON.stringify(user))
        window.location.href = "/";
    }
}

async function signOut() {
    await client.auth.signOut();

    window.location.href = "/login/";
}

async function signUp() {
    const { user, error } = await client.auth.signUp({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    });

    if(error) {
         console.log(error);
         alert(error.message);
     } else {
         console.log('User signed up:', user);
         window.location.href = "/login";
     }
}