**🚀 Brian Dista S.B. — Personal Portfolio**  
Portfolio pribadi **Brian Dista Setya Budi**, seorang  **Technician Support & Server Engineer**.  
   
 Di-deploy menggunakan **GitHub Pages** sebagai static website.  
🌐 **Live:** [https://devopsbrian.github.io](https://devopsbrian.github.io "https://devopsbrian.github.io")  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OQQmAABRAsSdYxZ4/mJjEsxE8W8GbCFuCLTOzVXsAAPzFuVZ3dXw9AQDgtesBxPEF3bv7x0IAAAAASUVORK5CYII=)  
**📁 Struktur Folder**  
portfolio/  
 ├── index.html          
 ├── style.css  
 ├── script.js  
 ├── foto.jpg  
 └── README.md  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANElEQVR4nO3OUQmAABBAsSdYxKbXxlpGEAOIFfwTYUuwZWa2ag8AgL841uquzq8nAAC8dj05VAYO3phhoQAAAABJRU5ErkJggg==)  
**✨ Fitur**  
- **Sidebar navigasi** dengan avatar foto, nama, role, dan social links  
- **Typewriter effect** — teks profesi berganti otomatis  
- **Tech stack badges** — Kubernetes, PostgreSQL, Docker, Redis, Terraform  
- **Stats bar** — tahun pengalaman, proyek, dan tools  
- **Dark & elegant theme** dengan font Rajdhani + Share Tech Mono  
- **Responsive** — tampil baik di desktop maupun mobile  
- **Fully static** — tidak butuh backend atau server  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANElEQVR4nO3OUQmAABBAsSeILQSjXgcrmkOs4J8IW4ItM7NXZwAA/MW1Vlt1fBwBAOC9+wEukwQ+V/SggAAAAABJRU5ErkJggg==)  
**🔗 Social Links**  
| | |  
|-|-|  
| **Platform** | **Link** |   
| GitHub | https://github.com/briandista24/ |   
| Email | [briandista024@gmail.com](mailto:briandista024@gmail.com "mailto:briandista024@gmail.com") |   
| WhatsApp | [wa.me/qr/YGTVTSKI42HWM1](https://wa.me/qr/YGTVTSKI42HWM1 "https://wa.me/qr/YGTVTSKI42HWM1") |   
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANUlEQVR4nO3OQQmAABRAsSd4NIGBzPXBmAawhhW8ibAl2DIze3UGAMBf3Gu1VcfXEwAAXrsehaQEN+8fLHEAAAAASUVORK5CYII=)  
**🛠️ Tech Stack**  
| | |  
|-|-|  
| **Teknologi** | **Kegunaan** |   
| HTML5 | Struktur halaman |   
| CSS3 | Styling, animasi, layout |   
| JavaScript (Vanilla) | Typewriter effect, nav aktif |   
| Google Fonts | Rajdhani + Share Tech Mono |   
| GitHub Pages | Hosting static site gratis |   
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsSfYxZo/kC1sYQLPJrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA4qzBdC53Vr8AAAAAElFTkSuQmCC)  
**🚀 Deploy ke GitHub Pages**  
**1. Clone / Upload repo**  
git clone https://github.com/devopsbrian/devopsbrian.github.io  
 cd devopsbrian.github.io  
   
**2. Tambahkan foto profil**  
Taruh foto kamu di root folder dengan nama foto.jpg:  
portfolio/  
 └── foto.jpg   ← taruh di sini  
   
Pastikan di index.html bagian avatar sudah pakai:  
<div class="avatar-ring">  
   <img class="avatar-img" src="foto.jpg" alt="Brian Dista" />  
 </div>  
   
**3. Push ke GitHub**  
git add .  
 git commit -m "feat: initial portfolio"  
 git push origin main  
   
**4. Aktifkan GitHub Pages**  
1. Buka repo di GitHub  
2. Klik **Settings** →  **Pages**  
3. Source: pilih **Deploy from a branch**  
4. Branch: **main** → folder:  **/ (root)**  
5. Klik **Save**  
Tunggu 1–2 menit, portfolio live di:  
https://devopsbrian.github.io  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsSfYxZo/jVEMYQLPJrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA4rLBc059ysnAAAAAElFTkSuQmCC)  
**✏️ Cara Kustomisasi**  
**Ganti teks typewriter**  
Edit file script.js, ubah array roles:  
const roles = [  
   'DevOps Engineer',  
   'Database Engineer',  
   'CI/CD Specialist',  
   'Infrastructure Architect',  
   'Cloud Engineer',  
 ];  
   
**Ganti warna aksen**  
Edit file style.css, ubah variabel di :root:  
:root {  
   --accent:  #4f8ef7;   /* warna biru utama */  
   --accent2: #7de8c8;   /* warna hijau/teal */  
 }  
   
**Ganti angka statistik**  
Edit file index.html, cari bagian .stats-row:  
<p class="stat-num">3<span class="stat-plus">+</span></p>  
 <p class="stat-label">Tahun Pengalaman</p>  
   
**Ganti tech stack badges**  
Edit file index.html, cari bagian .tech-strip:  
<div class="tech-badge"><span class="tech-dot" style="background:#f0b429"></span>Kubernetes</div>  
   
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OMQ2AABAAsSNBACPq8MH2NpGACyywEZJWQZeZ2aszAAD+4l6rrTq+ngAA8Nr1AL/KBEe6dElaAAAAAElFTkSuQmCC)  
**📄 Lisensi**  
MIT License — bebas digunakan dan dimodifikasi.  
![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnEAAAACCAYAAAA3pIp+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAANklEQVR4nO3OQQmAABRAsSfYxZo/kC1sYQLPJrCCNxG2BFtmZquOAAD4i3Ot7mr/egIAwGvXA4qzBdC53Vr8AAAAAElFTkSuQmCC)  
*Dibuat dengan ❤️ oleh * ***Brian Dista Setya Budi***  
