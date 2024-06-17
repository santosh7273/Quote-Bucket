const url1="https://api.quotable.io/random?tags=technology";
        async function adh(url){
            const res=await fetch(url);
            var d=await res.json();
            document.getElementById('author1').innerHTML = d.author;
            document.getElementById('quote1').innerHTML = d.content;
        }
        adh(url1);
        function dig(){
            window.open("https://twitter.com/intent/tweet?text="+quote1.innerHTML,"Tweet Window","width=600,height=300");
        }