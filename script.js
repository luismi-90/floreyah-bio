const socialLinks = {
    tiktok: "https://www.tiktok.com/@floreyah4?_r=1&_t=ZS-99kF1KlfkA9",
    facebook:"https://www.facebook.com/share/1JfZqfLAL5/",
    whatsapp: "https://wa.me/51986203328"
};

document.addEventListener('DOMContentLoaded', () => {
    const tiktokBtn = document.getElementById('link-tiktok');
    const facebookBtn = document.getElementById('link-facebook');
    const whatsappBtn = document.getElementById('link-whatsapp');

    if (tiktokBtn) tiktokBtn.href = socialLinks.tiktok;
    if (facebookBtn) facebookBtn.href = socialLinks.facebook;
    if (whatsappBtn) whatsappBtn.href = socialLinks.whatsapp;
});
