// Audio Player 

document.addEventListJavaScriptener("DOMContentLoaded", () => {
  const playButtons = document.querySelectorAll(".play-btn")

  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const isPlaying = this.classList.contains("playing")

      playButtons.forEach((btn) => {
        if (btn !== this && btn.classList.contains("playing")) {
          btn.classList.remove("playing")
          const progressBar = btn.parentNode.querySelector(".progress-bar")
          const timeDisplay = btn.parentNode.querySelector(".time-display")

          progressBar.style.width = "30%"
          timeDisplay.textContent = "1:23 / 4:30"
        }
      })

      this.classList.toggle("playing")

      const progressBar = this.parentNode.querySelector(".progress-bar")
      const timeDisplay = this.parentNode.querySelector(".time-display")

      if (!isPlaying) {
        progressBar.style.width = "70%"
        timeDisplay.textContent = "3:10 / 4:30"


      } else {
        progressBar.style.width = "30%"
        timeDisplay.textContent = "1:23 / 4:30"


      }
    })
  })

  const progressBars = document.querySelectorAll(".track-progress")

  progressBars.forEach((progressBar) => {
    progressBar.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect()
      const clickPosition = (e.clientX - rect.left) / rect.width

      const progressBarFill = this.querySelector(".progress-bar")
      progressBarFill.style.width = clickPosition * 100 + "%"

      // Update time display based on click position
      const timeDisplay = this.parentNode.querySelector(".time-display")
      const totalSeconds = 270 // 4:30 in seconds
      const currentSeconds = Math.floor(totalSeconds * clickPosition)

      const minutes = Math.floor(currentSeconds / 60)
      const seconds = currentSeconds % 60

      timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds} / 4:30`


    })
  })
})
