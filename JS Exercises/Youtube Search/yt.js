

const search_form=document.querySelector("#search-form")
const search_input=document.querySelector("#search-input")

search_form.addEventListener("submit", async function(e){
  e.preventDefault();


  
	// console.log("....Form Submitted")
  // console.log(search_input.value)
  const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${search_input.value}&type=video`;


const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dcb38e32a7msh7e7f4e312c9159ep13c211jsnaabfca7049a3',
		'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com',
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	 console.log(result.data);

	displayVideo(result.data)
} catch (error) {
	console.error(error);
}

})

function displayVideo(videos){
	const video_list =document.querySelector("#video-list")
	video_list.innerHTML="";

	videos.forEach(video=>{
		const video_item=document.createElement("div");
		video_item.classList="video-item";
		video_item.innerHTML=`

		<div class="video-thumbnail" style="background-image:url(${video.thumbnail[0].url});widht:300px; height:250px">
		</div>

		<div class="video-info">
		<div class="video-title"> ${video.title}</div>
		<div class="video-channel"> ${video.channelTitle}</div>
		
		</div>

		`;

video_item.addEventListener("click", () => openModel(video.videoId));
		video_list.appendChild(video_item)

	})
}


 function openModel(videoId) {
  const modal = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('video-player');
	// videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  console.log('Opening video:', videoId, videoUrl); // Debugging information

  // videoPlayer.src = videoUrl;
		videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  modal.style.display = 'block';

// fallback if embed fails
  videoPlayer.onerror = () => {
    alert("This video cannot be played here. Opening on YouTube...");
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

 document.getElementById('download-mp3').onclick = async function () {
    const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '9452172446msh620b23d249c353fp16dad9jsn7b983901f89b',
        'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.status === 'ok') {
        window.location.href = result.link;
      } else {
        alert('Error downloading MP3: ' + result.msg);
      }
    } catch (error) {
      console.error('Error downloading MP3:', error);
    }
  };

	document.getElementById('close-modal').addEventListener('click', closeModal);

window.onclick = function (event) {
  const modal = document.getElementById('video-modal');
  if (event.target == modal) {
    closeModal();
  }
};

function closeModal() {
  const modal = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('video-player');
  videoPlayer.src = '';
  modal.style.display = 'none';
}












}


 





