const release = {
  name: "MALYRIC for macOS (.dmg)",
  note: "Single-file installer for macOS. Free trial is included.",
  url: "./releases/MusicPlayr.dmg"
};

const releaseName = document.getElementById("release-name");
const releaseNote = document.getElementById("release-note");
const releaseDownload = document.getElementById("release-download");
const downloadBtn = document.getElementById("download-btn");
const year = document.getElementById("year");

releaseName.textContent = release.name;
releaseNote.textContent = release.note;
releaseDownload.href = release.url;
releaseDownload.setAttribute("download", "MusicPlayr.dmg");
downloadBtn.href = release.url;
downloadBtn.setAttribute("download", "MusicPlayr.dmg");
year.textContent = new Date().getFullYear();

const revealNodes = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -40px 0px"
  }
);

revealNodes.forEach((node) => observer.observe(node));
