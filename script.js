// ============================================
// SPY x FAMILY HOME SERVER - MAIN SCRIPT
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  initializeTooltips()
  initializeEasterEgg()
  setupEventListeners()
  animateCounters()
})

// ============================================
// BOOTSTRAP TOOLTIPS
// ============================================

const bootstrap = window.bootstrap // Declare the bootstrap variable

function initializeTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
}

// ============================================
// MISSION TOAST NOTIFICATIONS
// ============================================

function showMissionToast(message) {
  const toastElement = document.getElementById("missionToast")
  const toastMessage = document.getElementById("toastMessage")

  toastMessage.textContent = message

  const toast = new bootstrap.Toast(toastElement)
  toast.show()
}

// ============================================
// EASTER EGG: BOND FLOATING HEARTS
// ============================================

function initializeEasterEgg() {
  // Declare the initializeEasterEgg function
  console.log("[v0] Easter egg initialized!")
}

function showBondEasterEgg() {
  console.log("[v0] Easter egg triggered!")
  showMissionToast("Alert: Future Danger Detected... Just Kidding! 🐕")

  // Create floating hearts
  for (let i = 0; i < 15; i++) {
    createFloatingHeart()
  }
}

function createFloatingHeart() {
  const heart = document.createElement("div")
  heart.innerHTML = "❤️"
  heart.style.position = "fixed"
  heart.style.left = Math.random() * window.innerWidth + "px"
  heart.style.top = window.innerHeight + "px"
  heart.style.fontSize = Math.random() * 20 + 20 + "px"
  heart.style.opacity = "1"
  heart.style.pointerEvents = "none"
  heart.style.zIndex = "9999"

  document.body.appendChild(heart)

  const duration = Math.random() * 2 + 2
  const xOffset = (Math.random() - 0.5) * 200

  const start = Date.now()
  const animate = () => {
    const progress = (Date.now() - start) / (duration * 1000)

    if (progress < 1) {
      heart.style.top = window.innerHeight - progress * window.innerHeight + "px"
      heart.style.left = Number.parseFloat(heart.style.left) + xOffset * 0.01 + "px"
      heart.style.opacity = 1 - progress
      requestAnimationFrame(animate)
    } else {
      heart.remove()
    }
  }

  animate()
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
  // Notification bell
  const notificationBell = document.querySelector(".bi-bell-fill")
  if (notificationBell) {
    notificationBell.addEventListener("click", () => {
      showMissionToast("Mission Download Complete.")
    })
  }

  // Device action buttons
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("device-action-btn")) {
      const action = e.target.textContent.trim()
      showMissionToast(`${action} initialized.`)
    }
  })
}

// ============================================
// ANIMATED COUNTERS
// ============================================

function animateCounters() {
  const counters = document.querySelectorAll("[data-counter]")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-counter"))
    const duration = 2000
    const increment = target / (duration / 16)

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        counter.textContent = target
        clearInterval(timer)
      } else {
        counter.textContent = Math.floor(current)
      }
    }, 16)
  })
}

// ============================================
// PROFILE SWITCHING
// ============================================

function switchProfile(profileName) {
  console.log("[v0] Switching to profile: " + profileName)

  // Disable all profile highlights
  document.querySelectorAll(".member-card").forEach((card) => {
    card.style.opacity = "0.6"
  })

  // Highlight selected profile
  const selectedCard = document.querySelector(`[data-profile="${profileName}"]`)
  if (selectedCard) {
    selectedCard.style.opacity = "1"
    showMissionToast(`Agent ${profileName} accessed.`)
  }
}

// ============================================
// FILE OPERATIONS
// ============================================

function downloadFile(fileName) {
  showMissionToast(`Downloading ${fileName}...`)
}

function shareFile(fileName) {
  showMissionToast(`Sharing ${fileName} to all devices.`)
}

function encryptFile(fileName) {
  showMissionToast(`Encrypting ${fileName}... Clearance Level Alpha required.`)
}

// ============================================
// MEDIA PLAYER
// ============================================

function playMedia(mediaTitle) {
  console.log("[v0] Playing media: " + mediaTitle)
  showMissionToast(`Now playing: ${mediaTitle}`)

  // In a real app, this would open a video player modal
  const modal = new bootstrap.Modal(document.getElementById("mediaPlayerModal") || createMediaModal())
  modal.show()
}

function createMediaModal() {
  const modal = document.createElement("div")
  modal.id = "mediaPlayerModal"
  modal.className = "modal fade"
  modal.innerHTML = `
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Media Player</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div style="background: #000; aspect-ratio: 16/9; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <i class="bi bi-play-circle" style="font-size: 4rem; color: var(--color-spy-green);"></i>
                    </div>
                </div>
            </div>
        </div>
    `
  document.body.appendChild(modal)
  return modal
}

// ============================================
// SECURITY TOGGLES
// ============================================

function toggleSecurity(toggleElement) {
  const toggle = toggleElement.querySelector(".toggle-switch")
  toggle.classList.toggle("active")

  const label = toggleElement.querySelector(".security-toggle-label").textContent
  const state = toggle.classList.contains("active") ? "enabled" : "disabled"

  showMissionToast(`${label}: ${state}`)
}

// ============================================
// DEVICE STATUS UPDATE
// ============================================

function updateDeviceStatus(deviceName, status) {
  console.log("[v0] Updated device status:", deviceName, status)
  showMissionToast(`${deviceName}: ${status}`)
}

// ============================================
// ENCRYPTED FOLDER ACCESS
// ============================================

function accessEncryptedFolder() {
  showMissionToast("Clearance Level Alpha Required. Please Authenticate.")

  // Show authentication modal
  if (document.getElementById("authModal")) {
    new bootstrap.Modal(document.getElementById("authModal")).show()
  }
}

// ============================================
// ANYA SAFE MODE
// ============================================

function enableAnyaSafeMode() {
  document.body.classList.add("anya-theme")
  showMissionToast("Waku Waku! Safe Mode activated!")
}

function disableAnyaSafeMode() {
  document.body.classList.remove("anya-theme")
  showMissionToast("Safe Mode deactivated.")
}

// ============================================
// THEME SWITCHING
// ============================================

function setTheme(theme) {
  console.log("[v0] Setting theme:", theme)
  localStorage.setItem("spyServerTheme", theme)

  if (theme === "anya") {
    enableAnyaSafeMode()
  } else {
    disableAnyaSafeMode()
  }
}

// Load saved theme on page load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("spyServerTheme")
  if (savedTheme === "anya") {
    enableAnyaSafeMode()
  }
})

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener("keydown", (e) => {
  // Alt + D: Dashboard
  if (e.altKey && e.key === "d") {
    window.location.href = "index.html"
  }
  // Alt + F: Files
  if (e.altKey && e.key === "f") {
    window.location.href = "files.html"
  }
  // Alt + M: Media
  if (e.altKey && e.key === "m") {
    window.location.href = "media.html"
  }
  // Alt + S: Security
  if (e.altKey && e.key === "s") {
    window.location.href = "security.html"
  }
})
