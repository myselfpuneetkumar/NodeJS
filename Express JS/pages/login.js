export default function Login(){
    return `
    <div>
    <form action="/submit" method="post" >
        <input type="text" placeholder="Enter name" />
        <br />
        <br />
        <input type="text" placeholder="Enter password" />
        <br />
        <br />
        <button>LOGIN</button>
         <a href='/'>Got to Home</a>
        </form>
    <div>
    `
}