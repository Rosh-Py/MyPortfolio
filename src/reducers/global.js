const global_reducer = (state, action) => {
  switch (action.type) {
    case "CLOSE_SIDEBAR":
      return { ...state, isSidebarOpen: false };

    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: true };

    case "CHANGE_THEME":
      if (!state.isThemeChanged) {
        document.documentElement.className = "blue-theme";
      } else {
        document.documentElement.className = "orange-theme";
      }
      return { ...state, isThemeChanged: !state.isThemeChanged };

    default:
      throw new Error(`${action.type} action not found in global reducer`);
  }
};

export default global_reducer;
