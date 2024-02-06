function openVideo(videoUrl) {
    // Hide exercise sessions section
    document.getElementById('exercise-sessions').style.display = 'none';

    // Create a new video element and set its attributes
    var video = document.createElement('iframe');
    video.setAttribute('src', videoUrl);
    video.setAttribute('width', '560');
    video.setAttribute('height', '315');
    video.setAttribute('frameborder', '0');
    video.setAttribute('allowfullscreen', '');

    // Append the video element to the main section
    var mainSection = document.querySelector('main');
    mainSection.appendChild(video);
}
