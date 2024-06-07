{

    document.getElementById("sendButton").addEventListener('click',(e)=>{
        e.preventDefault()
        
        const inputs = document.querySelectorAll('input')
        

        const inputsArr = [...inputs].map(input=>input.value)
       

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "names": inputsArr,
          "message": document.querySelector('textarea').value
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
    })

}
