// const postInfo = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }
// const configObj = {method: 'Post',
//     headers:{ 'Content-Type': 'application/json',
//                 "Accept":'application.json' },
//     body: JSON.stringify(postInfo)/*your data here*/}
// const url = 'http://localhost:3000/dogs'

// fetch(url, configObj ).then((res)=>res.json()).then(data=>console.log(data))


function submitData(name, email){

   let postInfo = {'name': name, 'email': email}
   let configOBJ = {method: 'Post', headers: {'Content-Type':'application/json', 'Accept':'application/json'},
    body: JSON.stringify(postInfo)
}

    return fetch('http://localhost:3000/users', configOBJ).then(res=>res.json()).then(data=>document.querySelector('body').textContent = `${data.id}`).catch(error=>document.querySelector('body').textContent = `${error.message}`)

}