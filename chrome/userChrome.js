// Auto hide tab bar only when Tree Style Tab sidebar is selected and visible.
// https://www.reddit.com/r/FirefoxCSS/comments/8hq0u2/userchromejs_auto_hide_tab_bar_only_when_tree/

(function() {

  function showHideTabbar() {
    const tabbar = document.getElementById("TabsToolbar");
    const sidebarBox = document.getElementById("sidebar-box");
    const sidebarTabs = sidebarBox.getAttribute("sidebarcommand");

    if (!sidebarBox || !sidebarTabs) {
      return;
    }

    const extensions = [
      "treestyletab_piro_sakura_ne_jp-sidebar-action",
      "TreeTabs@jagiello.it-sidebar-action",
      "treetabs_jagiello_it-arthaey-sidebar-action",
    ];

    if (!sidebarBox.hidden && extensions.includes(sidebarTabs)) {
      tabbar.style.visibility = "collapse";
    }
    else {
      tabbar.style.visibility = "visible";
    }
  }

  function observeSidebar() {
    const sidebarBox = document.getElementById("sidebar-box");

    if (sidebarBox) {
      const observer = new MutationObserver(showHideTabbar);
      observer.observe(
        sidebarBox,
        { attributes: true, attributeFilter: ["sidebarcommand", "hidden"] }
      );
    }
  }

  observeSidebar();

})();
