function toggleTheme() {
    const currentTheme = document.getElementById("theme-stylesheet");
    const newTheme = currentTheme.href.includes("catppuccin-dark") 
        ? "themes/catppuccin-dark.css" 
        : "themes/catppuccin-light.css";
    
    currentTheme.href = newTheme;
}
