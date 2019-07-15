console.log('USERCHROME.JS LOADED'); // DELETE ME

// Auto hide tab bar only when Tree Style Tab sidebar is selected and visible.
// https://www.reddit.com/r/FirefoxCSS/comments/8hq0u2/userchromejs_auto_hide_tab_bar_only_when_tree/

(function() {

  function showHideTabbar() {
    const tabbar = document.getElementById("TabsToolbar");
    const sidebarBox = document.getElementById("sidebar-box");
    const sidebarTabs = sidebarBox.getAttribute("sidebarcommand");
    console.log('sidebar hidden? ' + sidebarBox.hidden); // DELETE ME
    console.log(sidebarTabs); // DELETE ME

    if (!sidebarBox.hidden && (sidebarTabs === "treestyletab_piro_sakura_ne_jp-sidebar-action" || sidebarTabs === "TreeTabs@jagiello.it-sidebar-action" || sidebarTabs === "treetabs_jagiello_it-modified-by-arthaey-sidebar-action")) {
      tabbar.style.visibility = "collapse";
    }
    else {
      tabbar.style.visibility = "visible";
    }
  }

  function observeSidebar() {
    const sidebarBox = document.getElementById("sidebar-box");
    console.log(sidebarBox); // DELETE ME
    const observer = new MutationObserver(showHideTabbar);
    observer.observe(
      sidebarBox,
      { attributes: true, attributeFilter: ["sidebarcommand", "hidden"] }
    );
  }

  observeSidebar();

})();
