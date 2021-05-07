const useWindowSize = () => {
  if (typeof window !== "undefined") {
    const screenW = window.screen.height;
    const screenH = window.screen.width;
    return [screenH, screenW];
  } else {
    return [0, 0];
  }
};

export default useWindowSize;
