const btn = document.getElementById('btn');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.onstart = function(){
    console.log('You can speak now!!!');}
    recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);}
    function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('time')){
    speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";
    document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`}
    else if(text.includes('my birthday')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text = 'Do you think you\'re famous! How the heck would I know your birthday!';}
    else if(text.includes('love me')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text = 'Of course, not! You piece of junk!';}
    else if(text.includes('how are you')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text='I am fine how about you?'}
    else if(text.includes('good')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='Great!'}
    else if(text.includes('fine')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text='OK'}
    else if(text.includes('great')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text='great!'}
    else if(text.includes('bye')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text='bye!'}
    else if(text.includes('good bye')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text='bye!'}
    else if(text.includes('hey')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text='Hey!'}
    else if(text.includes('hello')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
    speech.text='Hi!'}
    else if(text.includes('hi')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='hi!'}
    else if(text.includes('Gmail')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='opening Gmail'}
    else if(text.includes("Google")){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='Opening Google'
    window.location.href="https://google.com"}
    else if(text.includes("Bing")){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='opening Bing'
        window.location.href="https://bing.com"}
    else if(text.includes("YouTube")){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='opening YouTube'
        window.location.href='https://youtube.com'}
    else if(text.includes('who are you')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='I am Bonzi Buddy a virtual assistant'}
    else if(text.includes('+')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='calculating'
        window.location.href="https://www.google.com/search?q="+text+"&rlz=1C1JZAP_enCA912CA912&oq=ko&aqs=chrome..69i57j35i39l2j0j69i60l3j69i61.598j0j7&sourceid=chrome&ie=UTF-8" }
    else if(text.includes('/')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='calculating'
        window.location.href="https://www.google.com/search?q="+text+"&rlz=1C1JZAP_enCA912CA912&oq=ko&aqs=chrome..69i57j35i39l2j0j69i60l3j69i61.598j0j7&sourceid=chrome&ie=UTF-8"}
    else if(text.includes('-')){
        speech.text='calculating'
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        window.location.href="https://www.google.com/search?q="+text+"&rlz=1C1JZAP_enCA912CA912&oq=ko&aqs=chrome..69i57j35i39l2j0j69i60l3j69i61.598j0j7&sourceid=chrome&ie=UTF-8"}
    else if(text.includes('*')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='calculating'
        window.location.href="https://www.google.com/search?q="+text+"&rlz=1C1JZAP_enCA912CA912&oq=ko&aqs=chrome..69i57j35i39l2j0j69i60l3j69i61.598j0j7&sourceid=chrome&ie=UTF-8" }
    else if(text.includes('weather')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='please wait'
        window.location.href="https://www.google.com/search?q="+text+"&rlz=1C1JZAP_enCA912CA912&oq=ko&aqs=chrome..69i57j35i39l2j0j69i60l3j69i61.598j0j7&sourceid=chrome&ie=UTF-8"}
    else if(text.incluedes('calender')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='please wait'
    window.location.href='https://calendar.google.com/calendar/'}
    else if(text.includes('play')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='please wait'
        window.location.href="https://www.google.com/search?q="+text+"&rlz=1C1JZAP_enCA912CA912&oq=ko&aqs=chrome..69i57j35i39l2j0j69i60l3j69i61.598j0j7&sourceid=chrome&ie=UTF-8"}
    else if(text.includes('thanks')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text="your welcome" }
    else if(text.includes('thank you')){
        document.getElementById('div').innerHTML=`<img src="https://thumbs.gfycat.com/LinearBossyAcornwoodpecker-size_restricted.gif" alt="">`
        speech.text='your welcome'}
//    else if(text.includes('yeah'||text.includes('yes'))){
//             window.location.href="https://www.google.com/search?q="+text+"&rlz=1C1JZAP_enCA912CA912&oq=ko&aqs=chrome..69i57j35i39l2j0j69i60l3j69i61.598j0j7&sourceid=chrome&ie=UTF-8"}  
    else{
        // window.location.href="https://www.google.com/search?q="+text+"&rlz=1C1JZAP_enCA912CA912&oq=ko&aqs=chrome..69i57j35i39l2j0j69i60l3j69i61.598j0j7&sourceid=chrome&ie=UTF-8"
        speech.text='I do not understand please rephrase that'    }
        window.speechSynthesis.speak(speech);
        }