const updateFavicon = () => {
    if (typeof window === "undefined") return;
  
    const pathname = window.location.pathname;
    const rootStyles = getComputedStyle(document.documentElement);
  
    let color;
  
    if (pathname.includes("/home")) color = rootStyles.getPropertyValue("--home-primary").trim();
    else if (pathname.includes("/about")) color = rootStyles.getPropertyValue("--about-primary").trim();
    else if (pathname.includes("/projects")) color = rootStyles.getPropertyValue("--projects-primary").trim();
    else if (pathname.includes("/contact")) color = rootStyles.getPropertyValue("--contact-me-primary").trim();
    else color = rootStyles.getPropertyValue("--neutral").trim();
  
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="${color}" stroke-width="6" fill="none"/>
        <circle cx="50" cy="50" r="20" stroke="${color}" stroke-width="6" fill="none"/>
      </svg>
    `;
  
    const svgBlob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svgBlob);
  
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = url;
    }
  };
  
  export default updateFavicon;
  